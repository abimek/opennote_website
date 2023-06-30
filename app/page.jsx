import AnimatedNumber from '@components/AnimatedNumber';
import Footer from '@components/Footer';
import Feed from '@components/Footer';
import ListCard from '@components/ListCard';
import Testimony from '@components/Testimony';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center max-w-7xl">
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
          <button className="black_btn_same px-5 md:pl-10 xl:pl-12">Apply</button>
          <button className="outline_btn_same px-5">Join our Team</button>
        </div>
      </div>
      <p className="mt-36 text-xl green_gradient font-bold border px-1 border-gray-500 rounded-md"> Explore YRA</p>
      <div className="mt-2 mx-auto h-[100px] border rounded min-h-[1em] w-[1%] md:w-[.4%] self-stretch bg-gradient-to-tr from-black to-transparent opacity-20 dark:opacity-100"></div>
      <div className="flex text-center flex-center mt-10">
        <p className="sm:text-6xl head_text_2">Cultivating Outstanding Thinkers</p>
      </div>
      <p className="desc_4"> YRA's virtual research program makes it possible for students from anywhere in the United States to conduct in-depth STEM research on any topic of their choice.</p>
      <div className="w-full flex gap-10 md:flex-row flex-col mt-32">
        <div className="flex-1 justify-left mx-auto text-left">
          <p className="sm:text-4xl text-left head_text_2">What We Offer</p>
          <ListCard
            header="Research and Competitions"
            text="Our students compete in the Toshiba/NSTA Exploravision Competition and the 3M Young Scientists Competition. Throughout the program, our teams of students develop an advanced, original research project (with the help of our mentors and comprehensive curriculum) that they submit to these competitions at the end of the program."
            icon="/assets/icons/research.svg"
          ></ListCard>
          <ListCard
            header="Mentorship"
            text="All of our lead mentors to our students are either college students or attend one of Northern Virginia's premier STEM high schools , and most of our mentors are carrying out university-level scientific research as high schoolers or college students. Our mentors specialize in areas from computer science, to environmental science, to cancer biology, to engineering, and everything in between. Our wide range of specialization allows us to craft a multitude of small (2-5 students) teams based on our students' interests.​"
            icon="/assets/icons/brain.svg"
          ></ListCard>
          <ListCard
            header="Collaboration"
            text="Along with the competitive research aspect of the program, YRA is dedicated to providing our students with the invaluable skills of collaboration, negotiation, dedication, perseverance, and more. We teach students to turn their passion for researching a subject into a tangible product through empowering them and maintaining close relationships with our students. "
            icon="/assets/icons/people.svg"
          ></ListCard>
        </div>
        <div className="min-w-screen cursor-pointer md:mt-44 flex-1 justify-left mx-auto text-left">
          <p className="sm:text-4xl text-left head_text_2">Program Structure</p>
          <p className="text-left desc_5">YRA is structured in such a way as to be as effient and helpfull as possible</p>
          <div className="p-5 text-left text-center desc_5 border rounded-3xl mt-5 drop-shadow-9xl transition ease-in-out delay-150 hover:-translate-y-1 hover:-translate-x-1 hover:scale-110 hover:bg-gray-100 duration-300">
          <ul className="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
            <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>
                  <span className="green_gradient">6 month </span>
                   virtual program
                <br></br>
                <span className="green_gradient ml-5"> September </span>
                -
                <span className="green_gradient"> February </span>
                </span>
            </li>
            <li className="flex items-center space-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>
                  Mentor 
                  <span className="green_gradient"> 7th </span>
                  -
                  <span className="green_gradient"> 10th </span>
                </span>
            </li>
            <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>
                  Applications open during
                  <span className="green_gradient font-bold"> Spring </span>
                </span>
            </li>
          </ul>
             <p className='text-center'>We follow a carefully-crafted curriculum that not only teaches scientific research skills, but also the all-important soft skills of collaboration and organization.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap text-center flex-center mt-5">
        <p className="sm:text-6xl head_text_2 mt-20">What our students are saying</p>
        <div className="w-full flex gap-10 md:flex-row flex-col mt-20">
          <div>
            <Testimony
              name="Mai, YRA'23"
              text="YRA was a really fun time for me. I learned how to research more in-depth-- I can now figure out how to look for solutions to big problems thanks to YRA. I would highly recommend YRA for people who like to find solutions to problems using STEM, and I think it's a really good cause and will grow a lot in the future!"
            ></Testimony>
            <Testimony
              name="Maanya, YRA'23"
              text="YRA was such an amazing learning experience for me. Not only did I learn to work with other people, but I also learned how to research properly, prevent plagiarism (along with other ethics), and expand on my scientific writing skills."
            ></Testimony>
          </div>
          <div>
            <Testimony
              name="Mariam, YRA'23"
              text="YRA was a wonderful experience. I made new friends, and learned how to work cooperatively. YRA also helped me learn how to properly research-- a skill that helped me extensively! This experience helped me grow as a student and learn how to focus on the world around us."
            ></Testimony>
            <Testimony
              name="Harshini, YRA'23"
              text="I was in YRA for the 2022-2023 cohort, and it was one of the best experiences I've had. I was in a team of three people, and we created the 'Carpet Sphere' which uses MASER to be an efficient source of energy in space and on Earth. This is a clean energy source that will power Earth for many generations to come. At the end, we even had a cookie party, and I enjoyed collaborating with everyone. "
            ></Testimony>
          </div>
          <div className="flex-1 justify-left mx-auto text-left flex-wrap">
          </div>
        </div>
      </div>
      <p className="mt-36 text-xl green_gradient font-bold border px-1 border-gray-500 rounded-md"> Numbers</p>
      <div className="mt-2 mx-auto h-[100px] border rounded min-h-[1em] w-[1%] md:w-[.4%] self-stretch bg-gradient-to-tr from-black to-transparent opacity-20 dark:opacity-100"></div>
      <div className="flex text-center flex-center mt-10">
        <p className="sm:text-6xl head_text_2">We are rapidly expanding!</p>
      </div>
      <p className="cursor-pointer desc_4 border p-3 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:-translate-x-1 hover:scale-110 hover:bg-gray-100 duration-300">YRA's successful pilot program ran from October 2022-February 2023, and we are scaling up both our program and our outreach exponentially for the 2023-2024 school year. 
Some of our current work includes expanding the program to early high-schoolers and also designing a program that can support MFGLI (minority, first-generation, or low-income) students during and after their time at YRA.</p>
      <p className="mt-16 green_gradient desc_2 text-center">
        Apply for our 2023-2024 program
      </p>
      <div className="flex-row flex-center mt-12 gap-4">
        <button className="outline_btn_same md:px-20 px-10">Apply</button>
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
      <Footer>

      </Footer>
    </section>
  )
}


export default Home