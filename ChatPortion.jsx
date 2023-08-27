'use client';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import gfm from 'remark-gfm'
const ChatPortion = ({chatType, message, photoUrl}) => {
  return (
    <div className="md:ml-20 w-[80%] flex flex-row">
        {photoUrl != null &&
            <Image
                className="h-full pt-4 mr-8"
                src={photoUrl}
                width={40}
                height={10}
                alt={"User Proifle Image"}
            />
        }
        {chatType == "user" &&
            (
                <div className="flex flex-center">
                    <ChatMessage message={message}/>
                </div>
            )
        }
        {chatType == "ai" &&
            (
                <div className="bg-gray-100">
                    <ChatMessage message={message}/>
                </div>
            )
        }
    </div>
  )
}

const ChatMessage = ({message}) => {
    return (
        <div className="border-t-gray-300 pt-6 pb-6 pl-2 pr-2 w-full">
            <ReactMarkdown  children={message} remarkPlugins={[gfm]}/>
        </div>
    )
}

export default ChatPortion