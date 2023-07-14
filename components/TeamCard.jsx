
import React from 'react'
import Image from 'next/image';

const TeamCard = ({image, name, position, text, research}) => {
    console.log(research)
  return (
    <div className="w-[80%] sm:w-[40%] lg:w-[30%] cursor-pointer flex flex-col bg-white border rounded-md mt-3 p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:-translate-x-1 hover:scale-110 hover:bg-gray-100 duration-300">
        <Image
            src={image}
            alt="Photo of person"
            width={500}
            height={500}
        >
        </Image>
      <p className="text-lg font-semibold leading-[1.15] text-black lg:text-xl mt-3">{name}</p>
      <p className="text-lg font-bold leading-[1.15] text-gray-600 lg:text-xl mt-2xc:w">{position}</p>
      <div className="w-full border-gray-500 text-center mt-3">
        <p className="text-md text-center text-gray-500">{text}</p>
      </div>
      <p className="text-lg font-semibold leading-[1.15] text-black lg:text-xl mt-4">Research Projects</p>
      <div className="w-full border-gray-500 text-center">
        {research.map(v => {
            return (<p className="text-md text-center text-gray-700 mt-3">{v}</p>);
        })
        }
      </div>
    </div>
  )
}

export default TeamCard 