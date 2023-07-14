
import '@styles/globals.css';
import Nav from '@components/Nav';
import TeamCard from '@components/TeamCard';

export const metadata = {
    metadata: "Young Researchers Academy",
    description: "Training the next generation of researchers"
}

const About = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center max-w-7xl">
        <span className="green_gradient text-center">About Us</span>
      </h1>
      <div className="flex text-center flex-center mt-2u8">
        <p className="sm:text-6xl head_text_2">Our Mission.</p>
      </div>
      <div className="cursor-pointer flex flex-col bg-white border rounded-md mt-3 pb-5 px-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:-translate-x-1 hover:scale-110 hover:bg-gray-100 duration-300">
        <p className="desc_4">The Young Researchers Academy (YRA) is dedicated to empowering all motivated young students to develop their skills in STEM research and experimentation, as well as life skills such as critical thinking, communication, and collaboration. We strive to foster a creative and supportive learning environment that encourages young researchers to pursue their interests and reach their full potential.</p>
      </div>
      <div className="flex text-center flex-center mt-20">
        <p className="sm:text-6xl head_text_2">Our Vision.</p>
      </div>
      <div className="cursor-pointer flex flex-col bg-white border rounded-md mt-3 pb-5 px-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:-translate-x-1 hover:scale-110 hover:bg-gray-100 duration-300">
        <p className="desc_4"> The Young Researchers Academy envisions a future in which STEM research is accessible to all students, regardless of background or geographic location. We are committed to providing a supportive, engaging and inspiring learning environment that encourages students to explore their curiosity and develop their skills as lifelong researchers.</p>
      </div>
      <div className="flex text-center flex-center mt-20">
        <p className="sm:text-6xl head_text_2">How we got here.</p>
      </div>
      <div className="cursor-pointer flex flex-col bg-white border rounded-md mt-3 pb-5 px-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:-translate-x-1 hover:scale-110 hover:bg-gray-100 duration-300">
        <p className="desc_4">YRA was founded in October 2022 as a subset under Lightridge High School's First Robotics Competition Team with nothing but a small group of friends and some computers. Our pilot program, which ran until February 2023, served 20 middle school students with a team of 15 mentors. For the 2023-2024 cohort, we plan to expand our reach exponentially and register our program as a 501(c) nonprofit organization!</p>
      </div>
      <h1 className="head_text_3 text-center max-w-7xl mt-20">
        <span className="green_gradient text-center">Our Team</span>
      </h1>
      <p className="desc_3 text-center">Our amazing team consists of five executive positions (who also serve as mentors!) and a multitude of mentors who volunteer with YRA. All our executives (and a good number of our mentors) are carrying out graduate-school level research in various areas of STEM, and they use their multitude of experiences to lead teams of mentors and design YRA's comprehensive curriculum! Check out our executives below!</p>
      <div className="flex flex-wrap text-center flex-center mt-5">
        <div className="flex-center flex gap-10 flex-row mt-20 flex-wrap">
          <TeamCard
            image="/assets/images/mal1.webp"
            name="Mal Abdalla"
            position="President"
            text="Mal is currently a high school junior with an interest in chemistry and engineering. She loves to make art, especially painting, and flies planes for a hobby. She spends much of her free time pushing for social change and progress in areas such as race, gender, and religion.​"
            research={["​An Analysis of the Effects of Color Noise Therapy on the Sleeping Habits of Drosophila melanogaster with Fragile X Syndrome."]}
          >
          </TeamCard>
          <TeamCard
            image="/assets/images/nardos.png"
            name="Nardos Mengesha"
            position="Vice President - Financial and Operational director"
            text=" Nardos is currently a high school junior who is passionate about and experienced in environmental and neurodegenerative disease research, social and political activism, and music. She enjoys competing in debate tournaments, playing the violin & piano, and reading & writing in her free time. "
            research={["The Effect of Increasing Acetylcholine using Ginkgo biloba on Amyloid-beta Oligomers in D. melanogaster Modeling Alzheimer’s Disease.", "The Effect of Organic Pesticide Eugenol on the Innexin Genes of Lymnaea stagnalis"]}
          >
          </TeamCard>
          <TeamCard
            image="/assets/images/advika.jpeg"
            name="Advika Sampathkumar"
            position="Vice President - Outreach and Planning Director"
            text="Advika is a high school junior with a significant background in biomedical science and cell biology. In her free time, she enjoys reading, listening to music, and binge watching comedies."
            research={["The Effect of Hesperidin and Glycitin on the Wound Healing of Burn Wounds Modeled in a 3D Bioprinted and 3D Cellulose-Based Mouse Skin Construct"]}
          >
          </TeamCard>
          <TeamCard
            image="/assets/images/abi.jpeg"
            name="Abimalek Mekuriya"
            position="Technical and Communications Director"
            text="​Abi is currently a high school junior with a passion and an extensive background in computer science and software development. During his free time he enjoys learning more about software and growing his technical abilities, watching movies, and playing recreational tennis with his family. "
            research={["Modular Height Swerve Wheel", "Developing an App to aid Researchers in the Himalayan Mountains in Collecting Data", ""]}
          >
          </TeamCard>
          <TeamCard
            image="/assets/images/logo.png"
            name="Advitiya Srinivasan"
            position="Secretary"
            text="Advitiya is currently a high school junior with a keen interest and substantial experience in engineering, physics, and chemistry research. During her free time she enjoys reading, playing piano, and hanging out with her friends."
            research={["The Doping of Degussa-P25 TiO2 with Non Metal Reductive Compounds to lower the Band-Gap of TiO2 and create Heterogeneous Photocatalytic Degradation of Volatile Organic Compounds, Irradiated using Simulated Sunlight​"]}
          >
          </TeamCard>

        </div>
      </div>
    </section>
  );
}

export default About