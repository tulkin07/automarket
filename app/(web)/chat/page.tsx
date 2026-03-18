"use client";
import React, { useState, useEffect, useRef } from "react";
import xSymbol from "../../../assets/svg/x-symbol.svg";

interface ChatType {
  id: number;
  user: {
    firstName: string;
    lastName: string;
    avatar: string;
  };
  messages: {
    id: number;
    sender: "me" | "other";
    text: string;
    time: string;
  }[];
  draft: string;
}

export default function Chat() {
  const chatsData: ChatType[] = [
    {
      id: 1,
      user: {
        firstName: "John",
        lastName: "Johnson",
        avatar:
          "https://cdn.vectorstock.com/i/1000v/31/95/person-icon-human-avatar-vector-12693195.jpg",
      },
      messages: [
        { id: 1, sender: "other", text: "Hi John!", time: "10:00" },
        { id: 2, sender: "me", text: "Hello John", time: "10:01" },
        { id: 3, sender: "other", text: "How are you?", time: "10:02" },
        { id: 4, sender: "me", text: "I'm good, thanks!", time: "10:03" },
        { id: 5, sender: "other", text: "Great to hear!", time: "10:04" },
      ],
      draft: "",
    },
    {
      id: 2,
      user: {
        firstName: "Jane",
        lastName: "Smith",
        avatar:
          "https://cdn.vectorstock.com/i/1000v/31/95/person-icon-human-avatar-vector-12693195.jpg",
      },
      messages: [
        { id: 1, sender: "other", text: "Hi Jane", time: "09:00" },
        { id: 2, sender: "me", text: "Hey!", time: "09:01" },
        { id: 3, sender: "other", text: "Are you free today?", time: "09:02" },
      ],
      draft: "",
    },
    {
      id: 3,
      user: {
        firstName: "Lisa",
        lastName: "Brown",
        avatar:
          "https://cdn.vectorstock.com/i/1000v/31/95/person-icon-human-avatar-vector-12693195.jpg",
      },
      messages: [
        {
          id: 1,
          sender: "other",
          text: "Lisa, did you see the news?",
          time: "08:00",
        },
        { id: 2, sender: "me", text: "Yes, crazy stuff!", time: "08:01" },
      ],
      draft: "",
    },
    {
      id: 4,
      user: {
        firstName: "Michael",
        lastName: "Lee",
        avatar:
          "https://cdn.vectorstock.com/i/1000v/31/95/person-icon-human-avatar-vector-12693195.jpg",
      },
      messages: [
        { id: 1, sender: "other", text: "Hey Mike!", time: "11:00" },
        { id: 2, sender: "me", text: "Yo!", time: "11:01" },
        { id: 3, sender: "other", text: "Wanna meet?", time: "11:02" },
        { id: 4, sender: "me", text: "Sure!", time: "11:03" },
      ],
      draft: "",
    },
    {
      id: 5,
      user: {
        firstName: "Sarah",
        lastName: "Connor",
        avatar:
          "https://cdn.vectorstock.com/i/1000v/31/95/person-icon-human-avatar-vector-12693195.jpg",
      },
      messages: [
        { id: 1, sender: "other", text: "Hi Sarah", time: "12:00" },
        { id: 2, sender: "me", text: "Hello!", time: "12:01" },
        { id: 3, sender: "other", text: "See you tomorrow?", time: "12:02" },
        { id: 4, sender: "me", text: "Yes", time: "12:03" },
      ],
      draft: "",
    },
    {
      id: 6,
      user: {
        firstName: "John",
        lastName: "Johnson",
        avatar:
          "https://cdn.vectorstock.com/i/1000v/31/95/person-icon-human-avatar-vector-12693195.jpg",
      },
      messages: [
        { id: 1, sender: "other", text: "Hi John!", time: "10:00" },
        { id: 2, sender: "me", text: "Hello John", time: "10:01" },
        { id: 3, sender: "other", text: "How are you?", time: "10:02" },
        { id: 4, sender: "me", text: "I'm good, thanks!", time: "10:03" },
        { id: 5, sender: "other", text: "Great to hear!", time: "10:04" },
      ],
      draft: "",
    },
    {
      id: 7,
      user: {
        firstName: "Jane",
        lastName: "Smith",
        avatar:
          "https://cdn.vectorstock.com/i/1000v/31/95/person-icon-human-avatar-vector-12693195.jpg",
      },
      messages: [
        { id: 1, sender: "other", text: "Hi Jane", time: "09:00" },
        { id: 2, sender: "me", text: "Hey!", time: "09:01" },
        { id: 3, sender: "other", text: "Are you free today?", time: "09:02" },
      ],
      draft: "",
    },
    {
      id: 8,
      user: {
        firstName: "Lisa",
        lastName: "Brown",
        avatar:
          "https://cdn.vectorstock.com/i/1000v/31/95/person-icon-human-avatar-vector-12693195.jpg",
      },
      messages: [
        {
          id: 1,
          sender: "other",
          text: "Lisa, did you see the news?",
          time: "08:00",
        },
        { id: 2, sender: "me", text: "Yes, crazy stuff!", time: "08:01" },
      ],
      draft: "",
    },
    {
      id: 9,
      user: {
        firstName: "Michael",
        lastName: "Lee",
        avatar:
          "https://cdn.vectorstock.com/i/1000v/31/95/person-icon-human-avatar-vector-12693195.jpg",
      },
      messages: [
        { id: 1, sender: "other", text: "Hey Mike!", time: "11:00" },
        { id: 2, sender: "me", text: "Yo!", time: "11:01" },
        { id: 3, sender: "other", text: "Wanna meet?", time: "11:02" },
        { id: 4, sender: "me", text: "Sure!", time: "11:03" },
      ],
      draft: "",
    },
    {
      id: 10,
      user: {
        firstName: "Sarah",
        lastName: "Connor",
        avatar:
          "https://cdn.vectorstock.com/i/1000v/31/95/person-icon-human-avatar-vector-12693195.jpg",
      },
      messages: [
        { id: 1, sender: "other", text: "Hi Sarah", time: "12:00" },
        { id: 2, sender: "me", text: "Hello!", time: "12:01" },
        { id: 3, sender: "other", text: "See you tomorrow?", time: "12:02" },
        { id: 4, sender: "me", text: "Yes", time: "12:03" },
      ],
      draft: "",
    },
  ];

  const [chats, setChats] = useState<ChatType[]>(chatsData);
  const [chatActive, setChatActive] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const shouldScrollRef = useRef(false);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  const activeChat = chats.find((c) => c.id === chatActive);

  useEffect(() => {
    if (shouldScrollRef.current && messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
      shouldScrollRef.current = false;
    }
  }, [activeChat?.messages]);

  const handleSetActive = (id: number) => {
    if (activeChat) {
      setChats((prev) =>
        prev.map((c) =>
          c.id === activeChat.id ? { ...c, draft: inputValue } : c
        )
      );
    }
  
    const chat = chats.find((c) => c.id === id);
    setChatActive(id);
    setInputValue(chat?.draft || "");
  };

  const sendMessage = () => {
    if (!inputValue.trim() || !activeChat) return;
    const newMessage = {
      id: Date.now(),
      sender: "me" as const,
      text: inputValue,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    shouldScrollRef.current = true;
    setChats((prev) =>
      prev.map((c) =>
        c.id === activeChat.id
          ? { ...c, messages: [...c.messages, newMessage], draft: "" }
          : c,
      ),
    );
    setInputValue("");
  };

  const handleCloseChat = () => {
    if (activeChat) {
      setChats((prev) =>
        prev.map((c) =>
          c.id === activeChat.id ? { ...c, draft: inputValue } : c,
        ),
      );
    }
    setChatActive(null);
  };

  return (
    <div className="w-full">
      <div className="flex w-full mx-auto max-w-[1440px] h-[90vh] bg-white">
        <div className="w-[350px] border-r flex flex-col">
          <div className="h-[60px] flex items-center px-4 text-lg font-semibold">
            <input
              type="text"
              className="w-full bg-gray-100 h-10 px-3 rounded-2xl outline-none"
              placeholder="Qidirish"
            />
          </div>
          <div className="flex-1 overflow-y-auto select-none">
            {chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => handleSetActive(chat.id)}
                className={`flex items-center gap-3 px-4 py-3 cursor-pointer ${
                  chatActive === chat.id ? "bg-gray-200" : "hover:bg-gray-100"
                }`}
              >
                <img
                  src={chat.user.avatar}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-semibold">
                    {chat.user.firstName} {chat.user.lastName}
                  </span>
                  <span
                    className={`${
                      chat.draft ? "text-red-500" : "text-gray-500"
                    } text-sm truncate w-[160px]`}
                  >
                    {chat.draft
                      ? `Qoralama: ${chat.draft}`
                      : chat.messages.at(-1)?.text || "No messages"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex flex-col flex-1 bg-gray-50"
          style={{ scrollbarWidth: "none" }}
        >
          {chatActive !== null && activeChat && (
            <>
              <div className="h-[60px] flex items-center gap-3 px-6 bg-white">
                <button
                  className="mr-4 cursor-pointer"
                  onClick={handleCloseChat}
                >
                  <img src={xSymbol.src} className="w-5 h-5" />
                </button>
                <img
                  src={activeChat.user.avatar}
                  className="w-10 h-10 rounded-full"
                />
                <div className="font-medium text-lg">
                  {activeChat.user.firstName} {activeChat.user.lastName}
                </div>
              </div>

              <div
                className="flex-1 px-6 py-4 flex flex-col gap-3 bg-gradient-to-br from-[#eaf5e9] to-[#d0f0b0] overflow-y-auto"
                style={{ scrollbarWidth: "none" }}
                ref={messagesContainerRef}
              >
                {activeChat.messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`max-w-[600px] break-words px-4 py-2 rounded-2xl text-sm ${
                      msg.sender === "me"
                        ? "bg-[#effdde] text-black self-end"
                        : "bg-white text-gray-800 self-start"
                    }`}
                  >
                    <div>{msg.text}</div>
                    <div className="text-xs opacity-80 mt-1 text-right">
                      {msg.time}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <div className="h-[60px] gap-3 bg-white relative">
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Xabar..."
                  className="flex-1 w-full h-full text-[14px] pl-10 pr-[90px] py-1 outline-none"
                />
                <button
                  onClick={sendMessage}
                  className="bg-blue-500 text-white px-5 py-2 rounded-full absolute top-[25%] right-5"
                >
                  Send
                </button>
              </div>
            </>
          )}
          {chatActive === null && (
            <div className="flex-1 flex items-center justify-center text-gray-500 bg-gradient-to-br from-[#eaf5e9] to-[#d0f0b0]">
              Select a chat to start messaging
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
