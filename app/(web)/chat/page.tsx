import React from 'react'

interface chat {
    id: number,
    user: {
        firstName: string,
        lastName: string,
        avatar: string,
    }
    messages: {
        id: number,
        sender: string,
        text: string,
        time: string
    }[]
}

export default function Chat() {
    const chats: chat[] = [
        {
            id: 1,
            user: {
                firstName: "John",
                lastName: "Johnson",
                avatar: "https://cdn.vectorstock.com/i/1000v/31/95/person-icon-human-avatar-vector-12693195.jpg"
            },
            messages: [
                {
                    id: 1,
                    sender: "John",
                    text: "Hi",
                    time: "10:00"
                },
                {
                    id: 2,
                    sender: "me",
                    text: "Hello John",
                    time: "10:01"
                }
            ]
        },
        {
            id: 2,
            user: {
                firstName: "Jane",
                lastName: "Smith",
                avatar: ""
            },
            messages: []
        },
        {
            id: 3,
            user: {
                firstName: "Lisa",
                lastName: "Brown",
                avatar: ""
            },
            messages: []
        }
    ];

    return (
        <div className="py-10 max-w-5xl mx-auto px-5">
            <h2>Chat</h2>
            <div className='bg-amber-100 w-full h-180 flex justify-between gap-0'>
                <div className='w-70 h-full bg-red-400 p-2'>
                    {chats.map((chat, idx) => {
                        let radius = "0px"

                        if (idx === 0) {
                            radius = "20px 20px 0px 0px"
                        } else if (idx === chats.length - 1) {
                            radius = "0px 0px 20px 20px"
                        }

                        return (
                            <div
                                className='w-full h-19 bg-amber-100 p-2 flex justify-between'
                                style={{ borderRadius: radius }}
                            >
                                <div className='w-12 h-full'>
                                    <img className='size-full' src={chat.user.avatar} alt="" />
                                </div>
                                <div className='size-full'>
                                    <h3>{chat.user.firstName} {chat.user.lastName}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='size-full bg-green-300'>d</div>
            </div>


        </div>
    )
}