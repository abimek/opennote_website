import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Testimony = ({name, text, link = null, btnc= "Li", hover = false, redirect = true}) => {
  return (
    <div classNam="w-full">
      {!hover && 
        <div className="w-full cursor-pointer flex flex-col bg-white border rounded-md mt-3 p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:-translate-x-1 hover:scale-110 hover:bg-gray-100 duration-300">
          <p className="flex flex-start text-lg text-left font-bold leading-[1.15] text-black lg:text-xl">{name}</p>
            <div className="text-left text-md mt-5 leading[1.15] max-w-[80%] text-gray-500">{text}</div>
            { (link != null && redirect) &&
              <Link href={link} rel="noopener noreferrer" target="_blank" className="mt-10 mx-20">
                <div className="outline_btn_same px-10">{btnc}</div>
              </Link>
            }
            { (link != null && !redirect) &&
              //<Link href={link} className="mt-10 mx-20" prefetch={false}>
              <a href={link} download>
                <div className="outline_btn_same px-10">{btnc}</div>
              </a>
              //</Link>
            }
        </div>
      }
      {hover && 
        <div className="w-full cursor-pointer flex flex-col border rounded-md mt-3 p-5 transition ease-in-out delay-150 translate-y-1 translate-x-1 scale-110 bg-amber-100 duration-300">
          <p className="flex flex-start text-lg text-left font-bold leading-[1.15] text-black lg:text-xl">{name}</p>
            <div className="text-left text-md mt-5 leading[1.15] max-w-[80%] text-gray-500">{text}</div>
            { (link != null && redirect)&&
              <Link href={link} rel="noopener noreferrer mx-20" target="_blank" className="mt-10 mx-20">
                <div className="outline_btn_same px-10">{btnc}</div>
              </Link>
            }
            { (link != null && !redirect) &&
              //<Link href={link} className="mt-10 mx-20" prefetch={false}>
              <a href={link} download>
                <div className="outline_btn_same px-10">{btnc}</div>
              </a>
             // </Link>
            }
        </div>
      }

    </div>
  )
}

export default Testimony 