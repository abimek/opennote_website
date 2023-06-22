import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        <span className="green_gradient text-center">Young Researchers Academy</span>
      </h1>
      <p className="mt-16 desc_2 text-center">
        Nurturing the Next Generation of Researchers.
      </p>
      <div className="mt-16">
        <p className="desc text-center">Young researchers academy assists and mentors middle and highschoolers in conducting research and competing in the Toshiba
        <span className="green_gradient"> ExploraVision</span> Competition.
        </p>
        <div className="flex-row flex-center mt-28 gap-4">
          <button className="black_btn_same">Apply</button>
          <button className="outline_btn_same">Join our Team</button>
        </div>
      </div>
      <p className="mt-36 text-xl green_gradient font-bold border px-1 border-gray-500 rounded-md"> Explore YRA</p>
      <div className="mt-2 mx-auto h-[100px] border rounded min-h-[1em] w-[1%] md:w-[.4%] self-stretch bg-gradient-to-tr from-black to-transparent opacity-20 dark:opacity-100"></div>
      <div className="flex text-center flex-center mt-10">
        <p className="sm:text-6xl head_text_2">Cultivating Outstanding Thinkers</p>
      </div>
      <p className="desc_4"> YRA's virtual research program makes it possible for students from anywhere in the United States to conduct in-depth STEM research on any topic of their choice.</p>
      <div className="flex gap-72 md:flex-row flex-col md:flex-between">
        <div className="mx-auto">
          <p className="head_text">S</p>
        </div>
        <div>
          <p className="head_text">S</p>
        </div>
      </div>
    </section>
  )
}


export default Home