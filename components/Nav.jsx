"use client";

import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';
/*
const Nav = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    }
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
            <Image 
                src="/assets/images/logo.svg"
                alt="Logo"
                width={30}
                height={30}
                className="object-contain"
            />
            <p className="logo_text">
                Promptopia
            </p>
        </Link>
        <div className="sm:flex hidden">
          {isUserLoggedIn ? (
            <div className="flex gap-3 md:gap-5">
              <Link href="/create-prompt"
              className="black_btn"
              >
                Create Post
              </Link>
              <button type="button" onClick={signOut} className="outline_btn">
                Sign Out
              </button>
              <Link href="/profile">
                <Image
                  src="/assets/images/logo.svg"
                  width={37}
                  height={37}
                  className="rounded-fill"
                  alt="profile picture"
                >
                </Image>
              </Link>
            </div>
          ): (
            <>
            {providers && Object.values(providers).map((provider) => {
              (
                <button
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.in)}
                className="black_btn"
                >
                  Sign In
                </button>
              )
            })
            }
            </>
          )}
        </div>
        <div className="sm:hidden flex relative">
          {isUserLoggedIn ? (
            <div className="flex">
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </div>

          ) : (
            <>
            {providers && Object.values(providers).map((provider) => {
              (
                <button
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.in)}
                className="black_btn"
                >
                  Sign In
                </button>
              )
            })
            }
            </>
          )
          }
        </div>
    </nav>
  )
}

export default Nav
*/


//TODO: Contact Us Page
const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-2">
      <div className="flex flex-row gap-4">
        <Link href="/" className="flex gap-1 flex-center">
            <Image 
                src="/assets/images/logo.png"
                alt="Logo"
                width={60}
                height={60}
                className="object-contain transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
            />
        </Link>
        <Link href="/" className="flex-center text-1xl font-bold leading-[1.15] text-gray-600 hover:-translate-y-1 hover:text-black hover:scale-110 duration-300 delay-150">
          About Us
        </Link>
        <Link href="/" className="flex-center text-1xl font-bold leading-[1.15] text-gray-600 hover:-translate-y-1 hover:text-black hover:scale-110 duration-300 delay-150">
          Previous Projects
        </Link>
        <Link href="/" className="flex-center text-1xl font-bold leading-[1.15] text-gray-600 hover:-translate-y-1 hover:text-black hover:scale-110 duration-300 delay-150">
          Our Team
        </Link>
      </div>
      <div className="flex flex-row gap-4">
        <button className="black_btn">Contact Us</button>
        <button className="outline_btn">Join</button>
      </div>
    </nav>
  )
}
export default Nav