"use client"

import React, { useState } from 'react';
import { Chat, Message as ChatMessage } from 'react-chat-module';
import '../../../node_modules/react-chat-module/dist/index.css'

export interface Message {
  createdAt: Date;
  type: MessageType;
  text?: string;
  attachment?: File;
  
}

export interface MessageType {
  messageId: string;
  senderId: string | number;
  profilePicture?: string;
  name?: string;
  photo?: string;
  video?: string;
  file?: FileMessage;
  read?: boolean;
  audio?: string;
}

export interface FileMessage {
  // Define the structure for FileMessage if needed
}

function Chats(): JSX.Element {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      createdAt: new Date(Date.now()),
      messageId: '1',
      senderId: '1',
      profilePicture: 'https://via.placeholder.com/150',
      type: 'text',
      text: 'Hello, how are you?',
      name: 'John Doe',
    },
    {
      createdAt: new Date(Date.now() + 2000),
      messageId: '2',
      senderId: '2',
      profilePicture: 'https://via.placeholder.com/150',
      type: 'text',
      text: "I'm fine, and you?",
    },
  ]);

  // append user typed message to messages array
  const handleSend = (message: Message): void => {
    setMessages([
      ...messages,
      {
        messageId: `${messages.length + 1}`,
        senderId: '1',
        profilePicture: 'https://via.placeholder.com/150',
        type: message.type,
        text: message.text,
        createdAt: message.createdAt,
        read: false,
      },
    ]);
  };

  return (
    <div className="chat-message">
      <div className="flex items-end justify-end">
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
          <Chat userId={'1'} messages={messages} onSend={handleSend} />
        </div>
      </div>
    </div>
  );
}

export default Chats;