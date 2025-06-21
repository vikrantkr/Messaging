export type MessageType = 'info' | 'warning' | 'alert';

export interface BroadcastMessage {
  id: string;
  text: string;
  type: MessageType;
  dismissible: boolean;
  createdAt?: number;
}
