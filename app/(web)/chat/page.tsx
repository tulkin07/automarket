"use client"
import React, { useState } from "react";

interface chat {
  id: number;
  user: {
    firstName: string;
    lastName: string;
    avatar: string;
  };
  messages: {
    id: number;
    sender: string;
    text: string;
    time: string;
  }[];
}

export default function Chat() {
  const chats: chat[] = [
    {
      id: 1,
      user: {
        firstName: "John",
        lastName: "Johnson",
        avatar:
          "https://cdn.vectorstock.com/i/1000v/31/95/person-icon-human-avatar-vector-12693195.jpg",
      },
      messages: [
        {
          id: 1,
          sender: "John",
          text: "Hi",
          time: "10:00",
        },
        {
          id: 2,
          sender: "me",
          text: "Hello John",
          time: "10:01",
        },
      ],
    },
    {
      id: 2,
      user: {
        firstName: "Jane",
        lastName: "Smith",
        avatar: "",
      },
      messages: [],
    },
    {
      id: 3,
      user: {
        firstName: "Lisa",
        lastName: "Brown",
        avatar: "",
      },
      messages: [],
    },
  ];
  
  const [chatActive, setChatActive] = useState<number | null>(null)

  return (
    <div className="max-w-[1440px] mx-auto">
      <h2>Chat</h2>
      <div className="bg-blue-100 p-5  rounded-2xl w-full h-180 flex justify-between gap-5">
        <div className="w-70 h-full">
          {chats.map((chat, idx) => {
            let radius = "0px";

            if (idx === 0) {
              radius = "20px 20px 0px 0px";
            } else if (idx === chats.length - 1) {
              radius = "0px 0px 20px 20px";
            }

            return (
              <div
                className="w-full h-19 bg-gray-300 p-2 flex justify-between cursor-pointer"
                style={{ borderRadius: radius, backgroundColor: chatActive == chat.id ? "#808080" : "#d1d5dc"}}
                onClick={() => setChatActive(chat.id)}
              >
                <div className="w-12 h-full">
                  <img className="size-full" src={chat.user.avatar} alt="" />
                </div>
                <div className="size-full">
                  <h3>
                    {chat.user.firstName} {chat.user.lastName}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className="size-full bg-blue-300 rounded-2xl p-5">
          {}
        </div>
      </div>
    </div>
  );
}
