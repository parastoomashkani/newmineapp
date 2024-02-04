"use client"
import React, { useState, useEffect } from 'react';
import { Chat, Message as ChatMessage } from 'react-chat-module';
import '../../../node_modules/react-chat-module/dist/index.css';
import axios from 'axios';
;
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
  text?: | 'image';
}

export interface FileMessage {
  // Define the structure for FileMessage if needed
}

function Chats(): JSX.Element {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      createdAt: new Date(Date.now()),
      messageId: '1',
      senderId: 'admin',
      profilePicture: 'https://via.placeholder.com/150',
      type: 'text',
      text: 'سلام! به چت پشتیبانی ما خوش آمدید. چگونه میتوانم به شما کمک کنم؟',
      name: 'پشتیبانی ',
    },
  ]);

  // append user typed message and admin response to messages array
  const handleSend = async (message: Message): Promise<void> => {
    const userMessage: ChatMessage = {
      messageId: `${messages.length + 1}`,
      senderId: 'user',
      profilePicture: 'https://via.placeholder.com/150',
      type: message.type,
      text: message.text,
      createdAt: message.createdAt,
      read: true,
      name: 'User',
    };
  
    try {
      // Send the user message to the server
      const userResponse = await axios.post(
        `${process.env.BaseUrl}/chat/messages`,
        { message: userMessage },
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': localStorage.getItem('token'),
          },
        }
      );
  
      if (userResponse.status === 200) {
        const userResponseMessage: ChatMessage = userResponse.data;
  
        const adminResponseData = await axios.get(`${process.env.BaseUrl}/chat/messages`);
  
        if (adminResponseData.status === 200) {
          const adminResponse: ChatMessage = adminResponseData.data;
          setMessages([...messages, userResponseMessage, adminResponse]);
        } else {
          console.error('Failed to receive admin response from API');
        }
      } else {
        console.error('Failed to send user message to API');
      }
    } catch (error) {
      console.error('Error sending/receiving messages:', error);
    }
  };

  useEffect(() => {
   
    setTimeout(() => handleSend({ createdAt: new Date(), type: 'text', text: 'Hi there!' }), 1000);
  }, []);

  return (
    <div className="chat-message">
      <div className="flex items-end justify-end">
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
          <Chat userId={'user'} messages={messages} onSend={handleSend} />
        </div>
      </div>
    </div>
  );
}

export default Chats;
