'use client'
import AnimatedNumber from '@components/AnimatedNumber';
import Link from 'next/link';

const Home = () => {
  return (
    <section className="app w-full flex-center flex-col mt-16">
      <h1 className="head_text text-center max-w-7xl">
        <span className="orange_gradient text-center">Open Note AI</span>
      </h1>
      <p className="mt-16 desc_2 text-center">
        Use ChatGPT with you're notes!
      </p>
      <div className="mt-16">
        <p className="desc text-center">Enabling users to use their notes as a knowledge base for AI models. Support for digital notes from apps such as
        <span className="purple_gradient"> Obsidian</span>.
        </p>
        <div className="flex-row flex-center mt-28 gap-4">
          <Link href="/login">
            <button className="black_btn_same px-10">Usage</button>
          </Link>
          <Link href="/login">
            <button className="outline_btn_same px-10">Chat</button>
          </Link>
        </div>
      </div>
      <div className="flex mb-32 mt-16 gap-10 md:gap-24 flex-1 md:flex-row flex-col mx-auto">
        <AnimatedNumber 
          n={1}
          text="Years in Business"
        >
        </AnimatedNumber>
        <AnimatedNumber 
          n={20}
          text="Students Served"
        >
        </AnimatedNumber>
        <AnimatedNumber 
          n={360}
          text="Service Hours"
        >
        </AnimatedNumber>
        <AnimatedNumber 
          n={12}
          text="Team Members"
        >
        </AnimatedNumber>
      </div>
    </section>
  )
}


export default Home