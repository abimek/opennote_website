import React from 'react'
import Image from 'next/image';

const ListCard = ({icon, header, text}) => {
  return (
    <div className="w-full cursor-pointer flex flex-col bg-white border rounded-md mt-3 p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:-translate-x-1 hover:scale-110 hover:bg-gray-100 duration-300">
      <p className="text-lg font-bold leading-[1.15] text-black lg:text-xl">{header}</p>
      <div className="border-gray-500 flex flex-row mt-3">
        <p className="text-md leading[1.15] max-w-[80%] text-gray-500">{text}</p>
        <div className="mx-auto my-auto flex bg-white w-7 h-7 rounded-full flex-col align-center align-middle mx-auto my-auto drop-shadow-xl">
          <Image
            src={icon}
            alt="Icon"
            width={40}
            height={40}
            >
          </Image>
        </div>
      </div>
    </div>
  )
}

export default ListCard 
