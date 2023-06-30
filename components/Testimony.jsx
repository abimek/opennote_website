import React from 'react'
import Image from 'next/image';

const Testimony = ({name, text}) => {
  return (
    <div className="w-full cursor-pointer flex flex-col bg-white border rounded-md mt-3 p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:-translate-x-1 hover:scale-110 hover:bg-gray-100 duration-300">
      <p className="text-lg text-left font-bold leading-[1.15] text-black lg:text-xl">{name}</p>
        <p className="text-left text-md mt-5 leading[1.15] max-w-[80%] text-gray-500">{text}</p>
    </div>
  )
}

export default Testimony 