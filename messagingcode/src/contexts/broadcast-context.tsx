'use client';

import type { BroadcastMessage } from '@/types';
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { getMessages, addMessageAction, deleteMessageAction } from '@/app/actions';

interface BroadcastContextType {
  messages: BroadcastMessage[];
  addMessage: (message: Omit<BroadcastMessage, 'id' | 'createdAt'>) => Promise<void>;
  dismissMessage: (id: string) => Promise<void>;
  loading: boolean;
}

const BroadcastContext = createContext<BroadcastContextType | undefined>(undefined);

export const BroadcastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<BroadcastMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchMessages = useCallback(async () => {
    setLoading(true);
    try {
      const dbMessages = await getMessages();
      setMessages(dbMessages);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Could not fetch messages from the server.',
        variant: 'destructive',
      });
      setMessages([]);
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const addMessage = useCallback(
    async (message: Omit<BroadcastMessage, 'id' | 'createdAt'>) => {
      try {
        await addMessageAction(message);
        toast({
          title: 'Message Broadcasted!',
          description: 'Your message has been sent successfully.',
        });
        await fetchMessages();
      } catch (error: any) {
        toast({
          title: 'Error Broadcasting Message',
          description: error.message || 'An unknown error occurred.',
          variant: 'destructive',
        });
        throw error;
      }
    },
    [toast, fetchMessages]
  );

  const dismissMessage = useCallback(
    async (id: string) => {
      const originalMessages = [...messages];
      setMessages((prev) => prev.filter((msg) => msg.id !== id));

      try {
        await deleteMessageAction(id);
      } catch (error: any) {
        toast({
          title: 'Error',
          description: error.message,
          variant: 'destructive',
        });
        setMessages(originalMessages);
      }
    },
    [messages, toast]
  );

  return (
    <BroadcastContext.Provider value={{ messages, addMessage, dismissMessage, loading }}>
      {children}
    </BroadcastContext.Provider>
  );
};

export const useBroadcast = (): BroadcastContextType => {
  const context = useContext(BroadcastContext);
  if (!context) {
    throw new Error('useBroadcast must be used within a BroadcastProvider');
  }
  return context;
};
