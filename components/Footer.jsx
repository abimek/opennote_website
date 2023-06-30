import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="invisible sm:visible flex-between w-full mb-4 pt-2">
      <div className="flex flex-row gap-4">
        <button className="black_btn">Contact Us</button>
        <button className="outline_btn">Join</button>
      </div>
      <div className="flex flex-row gap-4">
        <Link href="/" className="flex-center text-1xl font-bold leading-[1.15] text-gray-600 hover:-translate-y-1 hover:text-black hover:scale-110 duration-300 delay-150">
          About Us
        </Link>
        <Link href="/" className="flex-center text-1xl font-bold leading-[1.15] text-gray-600 hover:-translate-y-1 hover:text-black hover:scale-110 duration-300 delay-150">
          Previous Projects
        </Link>
        <Link href="/" className="flex-center text-1xl font-bold leading-[1.15] text-gray-600 hover:-translate-y-1 hover:text-black hover:scale-110 duration-300 delay-150">
          Our Team
        </Link>
        <Link href="/" className="flex gap-1 flex-center">
            <Image 
                src="/assets/images/logo.png"
                alt="Logo"
                width={60}
                height={60}
                className="object-contain transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
            />
        </Link>
      </div>
    </div>
  )
}

export default Footer 
