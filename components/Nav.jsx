"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
const Nav = () => {
  const [mobile, setMobile] = useState(false);

  const toggleMobile = () => {
    setMobile(!mobile);
  };

  return (
    <nav className="w-full top-0 rounded-xl sticky ">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 rounded-xl sticky">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 backdrop-filter z-50 rounded-xl background-blur-xl sticky">
    <Link href="/" className="self-center">
        <Image 
            src="/assets/images/logo.png"
            alt="Logo"
            width={60}
            height={60}
            className="object-contain transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
        />
    </Link>
    <button onClick={toggleMobile} data-target="#navbar-default" data-toggle="collapse" data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <Link href="/about" className="flex-center pl-3 leading-[1.15] hover:-translate-y-1 hover:text-blue-700 hover:scale-110 duration-300 delay-150">
          About Us
        </Link>
        <Link href="/" className="flex-center leading-[1.15] hover:-translate-y-1 hover:text-blue-700 hover:scale-110 duration-300 delay-150">
          Previous Projects
        </Link>
        <button className="black_btn">Contact Us</button>
        <button className="outline_btn">Join</button>
      </ul>
    </div>
    { mobile && (
      <div className="visible sm:invisible w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <Link href="/about" className="pl-3 leading-[1.15] hover:-translate-y-1 hover:text-blue-700 hover:scale-110 duration-300 delay-150">
            About Us
          </Link>
          <Link href="/" className="pl-3 pt-5 leading-[1.15] hover:-translate-y-1 hover:text-blue-700 hover:scale-110 duration-300 delay-150">
            Previous Projects
          </Link>
          <div className="visible sm:invisible mt-3 flex-center flex-col">
            <button className="black_btn">Contact Us</button>
            <button className="outline_btn mt-3">Join Us</button>
          </div>
        </ul>
      </div>
      )
    }
  </div>
</nav>
    </nav>
  )
}
export default Nav