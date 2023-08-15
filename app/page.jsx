'use client';

import AnimatedNumber from '@components/AnimatedNumber';
import Link from 'next/link';
import Nav from '@components/Nav';
import {BsCameraVideo} from 'react-icons/bs';
import Testimony from '@components/Testimony';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const [image, setImage] = useState(1);
  const ref = useRef(null);
  let router = useRouter();

  function scrollToGuide() {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

  const red = () => {
    router.push("chat")
  }
  return (
    <div>
        <Nav></Nav>
    <section className="w-full bg-slate-50 flex-center flex-col">
      <h1 className="head_text text-center max-w-7xl">
        <span className="orange_gradient text-center">OpenNote AI</span>
      </h1>
      <p className="mt-16 desc_2 text-center">
        Use ChatGPT with you're notes!
      </p>
      <div className="mt-16">
        <p className="desc text-center">Enabling users to use their notes as a knowledge base for AI models. Support for digital notes from apps such as
        <span className="purple_gradient"> Obsidian</span>.
        </p>
        <div className="flex-row flex-center mt-28 gap-4">
          <button onClick={scrollToGuide} className="black_btn_same px-10">Usage</button>
          <Link href="/login">
            <button className="outline_btn_same px-10">Chat</button>
          </Link>
        </div>
      </div>
      <button className="outline_btn_pill mt-10 px-10">
        <BsCameraVideo className="scale-150 mr-5"/>
        Watch a short guide!
      </button>
      <div className="bg-slate-100 mt-5 w-full">

        <div className="flex text-center flex-center mt-10">
          <p className="sm:text-6xl head_text_2">Basics Of How It Works</p>
        </div>
        <div className="flex flex-center text-center">
          <p className="desc_4">
            <span className="orange_gradient">OpenNote </span>
            is a set of tools and a ChatGPT chat client that enables you to use your notes in your chatgpt discussions. The basics are that users make a OpenAI account and a Pinecone vector database accounts. You create an index/database in Pinecone and grab your tokens and plug them into <span className="orange_gradient">PinePass,</span> our simple desktop app for uploading notes to Pinecone. From there you make an account, put in the info, and start chating!</p>
        </div>
        <div className="flex flex-wrap flex-center text-center mt-5">
          <p ref={ref} className="sm:text-6xl head_text_2 mt-20">Steps</p>
          <div className="w-full flex gap-10 ml-5 mr-3 md:flex-row flex-col mt-20">
            <button className="w-full h-full" onClick={() => setImage(1)}>
              <Testimony
                name="Step 1"
                link="/register"
                btnc="Register"
                hover={image==1}
                text={(
                  <p>
                    Create an account and go to the <span className="orange_gradient">Chat</span> screen.
                  </p>
                )}
              ></Testimony>
            </button>
            <button className="w-full h-full" onClick={() => setImage(2)}>
            <Testimony
              name="Step 2"
              link="https://platform.openai.com/account/api-keys"
              btnc="OpenAI "
              hover={image==2}
              text={(
                <p>
                  Create a <span className="orange_gradient">
                     ChatGPT
                  </span> Account. Once you've done this go to OpenAI and get your API key.
                </p>
              )}
            ></Testimony>
            </button>
            <button className="w-full h-full" onClick={() => setImage(3)}>
            <Testimony
              name="Step 3"
              link="https://www.pinecone.io/"
              btnc="Pinecone"
              hover={image==3}
              text={(
                <p>
                  Create a <span className="purple_gradient">
                    Pinecone 
                  </span> Account. Then create an <span className="purple_gradient">Index </span>
                  Then grab your API Key and Index URL and place them in OpenNote.
                </p>
              )}
            ></Testimony>
            </button>
            <button className="w-full h-full" onClick={() => setImage(4)}>
            <Testimony
              name="Step 4"
              link="/installers/PinePassInstaller.exe"
              redirect={false}
              btnc="Download PinePass"
              hover={image==4}
              text={(
                <p>
                  Copy your OpenNote token and download <span className="orange_gradient">
                    PinePass
                  </span>, our tool for uploading digital notes to the cloud. Use it to upload notes to <span className="purple_gradient">PineCone. </span>
                </p>
              )}
            ></Testimony>
            </button>
            <div className="flex-1 justify-left mx-auto text-left flex-wrap">
            </div>
          </div>
          <div className="mt-5 mb-5">
            { image == 1 &&
              <Transition
              className="mx-auto my-16 space-y-4"
              show={image == 1}
              enter="transition-all ease-in-out duration-500 delay-[200ms]"
              enterFrom="opacity-0 translate-y-6"
              enterTo="opacity-100 translate-y-0"
              leave="transition-all ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <iframe 
                width="720"
                height="400"
                src="https://player.vimeo.com/video/854432482?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&quality=720p&loop=1&autoplay=1&autopause=0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                title="Creating A OpenNote Account">
              </iframe>
            </Transition>
            }
            { image == 2 &&
              <Transition
              className="mx-auto my-16 space-y-4"
              show={image == 2}
              enter="transition-all ease-in-out duration-500 delay-[200ms]"
              enterFrom="opacity-0 translate-y-6"
              enterTo="opacity-100 translate-y-0"
              leave="transition-all ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <iframe 
                width="720"
                height="400"
                src="https://player.vimeo.com/video/854443873?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&quality=720p&loop=1&autoplay=1&autopause=0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                title="Creating an OpenAI Account">
              </iframe>
            </Transition>
            }
            { image == 3 &&
              <Transition
              className="mx-auto my-16 space-y-4"
              show={image == 3}
              enter="transition-all ease-in-out duration-500 delay-[200ms]"
              enterFrom="opacity-0 translate-y-6"
              enterTo="opacity-100 translate-y-0"
              leave="transition-all ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <iframe 
                width="720"
                height="400"
                src="https://player.vimeo.com/video/854500998?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&quality=720p&loop=1&autoplay=1&autopause=0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                title="Creating an OpenAI Account">
              </iframe>
            </Transition>
            }
            { image == 4 &&
              <Transition
              className="mx-auto my-16 space-y-4"
              show={image == 4}
              enter="transition-all ease-in-out duration-500 delay-[200ms]"
              enterFrom="opacity-0 translate-y-6"
              enterTo="opacity-100 translate-y-0"
              leave="transition-all ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <iframe 
                width="720"
                height="400"
                src="https://player.vimeo.com/video/854547662?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&quality=720p&loop=1&autoplay=1&autopause=0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                title="Creating an OpenAI Account">
              </iframe>
            </Transition>
            }
          </div>
        </div>
      </div>
      <div className="bg-slate-100 w-full flex flex-col flex-center">
        <p className=" mx-auto text-xl green_gradient font-bold border px-1 border-gray-500 rounded-md"> Status</p>
        <div className="mt-2 mx-auto h-[100px] border rounded min-h-[1em] w-[1%] md:w-[.4%] self-stretch bg-gradient-to-tr from-black to-transparent opacity-20 dark:opacity-100"></div>
        <div className="flex text-center flex-center mt-10">
          <p className="sm:text-6xl head_text_2">We are currently in Beta!</p>
        </div>
        <p className="cursor-pointer desc_4 border p-3 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:-translate-x-1 hover:scale-110 hover:bg-gray-100 duration-300">
          OpenNote is currently in Beta and meaning there could be bugs and features missing. Please report any bugs or wanted features to abi.mek2005@gmail.com
  </p>
        <p className="mt-16 green_gradient desc_2 text-center">
          Begin Chating
        </p>
        <div className="flex-row flex-center mt-12 gap-4 mb-20">
          <button onClick={red} className="outline_btn_same md:px-20 px-10 mb-20">Chat</button>
        </div>
      </div>
      <div className="bg-black w-full h-24 flex flex-col flex-left">
        <p className="desc_6 ml-24 my-auto">OpenNoteAI, © 2023. All rights reserved.</p>
      </div>
    </section>
    </div>
  )
}


export default Home