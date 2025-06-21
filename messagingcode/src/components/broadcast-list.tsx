'use client';

import { useBroadcast } from '@/contexts/broadcast-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Info, AlertTriangle, ShieldAlert, Trash2 } from 'lucide-react';
import type { MessageType } from '@/types';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';

const iconMap: Record<MessageType, React.ReactNode> = {
  info: <Info className="h-5 w-5 text-primary" />,
  warning: <AlertTriangle className="h-5 w-5 text-yellow-500" />,
  alert: <ShieldAlert className="h-5 w-5 text-destructive" />,
};

export function BroadcastList() {
  const { messages, dismissMessage, loading } = useBroadcast();

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-48 w-full rounded-lg" />
        ))}
      </div>
    );
  }

  if (messages.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-12">
        <p>There are no active broadcasts.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {messages.map((message) => (
        <Card key={message.id} className="flex flex-col">
          <CardHeader className="flex flex-row items-start justify-between gap-4 pb-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                {iconMap[message.type]}
              </span>
              <div>
                <CardTitle className="text-lg">
                  {message.type.charAt(0).toUpperCase() + message.type.slice(1)}
                </CardTitle>
                <Badge variant={message.dismissible ? 'outline' : 'secondary'} className="mt-1">
                  {message.dismissible ? 'Dismissible' : 'Not Dismissible'}
                </Badge>
              </div>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 shrink-0"
                  aria-label="Delete message"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete the message for all users.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => dismissMessage(message.id)}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm text-foreground">{message.text}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
