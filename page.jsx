import AnimatedNumber from '@components/AnimatedNumber';

const Home = () => {

  

  return (
    <section className="w-full flex-center flex-col pt-16">
      <h1 className="head_text text-center max-w-7xl">
        <span className="green_gradient text-center">OpenNote AI</span>
      </h1>
      <p className="mt-16 desc_2 text-center">
        Chat with ChatGPT & You're Notes
      </p>
      <div className="mt-16">
        <p className="desc text-center">Enabling users to use 
        <span className="green_gradient"> ChatGPT</span> with their notes to get better insights. Support for digital note taking software such as 
        <span className="green_gradient"> Obsidian</span>.
        </p>
        <div className="flex-row flex-center mt-28 gap-4">
          <button className="black_btn_same px-5 md:pl-10 xl:pl-12">Login</button>
          <button className="outline_btn_same">Chat</button>
        </div>
      </div>
      <div className="flex mb-32 mt-24 gap-10 md:gap-24 flex-1 md:flex-row flex-col mx-auto">
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
      {
        // TODO: Add stuff about tutorial and using the toolchain
      }
    </section>
  )
}



export default Home