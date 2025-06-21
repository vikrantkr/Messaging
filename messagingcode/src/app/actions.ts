'use server';

import { revalidatePath } from 'next/cache';
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { BroadcastMessage, MessageType } from '@/types';

const messagesCollection = collection(db, 'messages');

export async function getMessages(): Promise<BroadcastMessage[]> {
  try {
    const querySnapshot = await getDocs(messagesCollection);
    const messages: BroadcastMessage[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const createdAt = (data.createdAt as Timestamp)?.toMillis();
      messages.push({
        id: doc.id,
        text: data.text,
        type: data.type as MessageType,
        dismissible: data.dismissible,
        createdAt: createdAt || 0,
      });
    });

    messages.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    return messages;
  } catch (error: any) {
    console.error('Error fetching messages: ', error);
    return [];
  }
}

export async function addMessageAction(message: Omit<BroadcastMessage, 'id' | 'createdAt'>) {
  try {
    await addDoc(messagesCollection, {
      ...message,
      createdAt: serverTimestamp(),
    });
    revalidatePath('/');
    revalidatePath('/broadcasts');
  } catch (error: any) {
    console.error('Error adding message:', error);
    throw new Error('Failed to save message to the database. Please check Firestore security rules and configuration.');
  }
}

export async function deleteMessageAction(id: string) {
  try {
    if (!id) {
      throw new Error('Message ID is required.');
    }
    await deleteDoc(doc(db, 'messages', id));
    revalidatePath('/');
    revalidatePath('/broadcasts');
  } catch (error: any) {
    console.error('Error deleting message:', error);
    throw new Error('Failed to delete message from the database.');
  }
}
