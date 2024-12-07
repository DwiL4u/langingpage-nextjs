  'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { navLinks}  from '../../../Constant/Constant'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
      openNav: () => void
}

const Nav = ({openNav} : Props) => {
      const [navBg, setNavBg] = useState(false)

      useEffect(() => {
            const handleScroll = () => {
            if (window.scrollY > 100) {
                  setNavBg(true);
            } else {
                  setNavBg(false);
            }
            };
            window.addEventListener("scroll", handleScroll);
            return () => {
            window.removeEventListener("scroll", handleScroll);
            };
      }
      , []);

  return (
    <div
      className={` fixed ${
        navBg ? "bg-white shadow-md" : "fixed"
      } w-full transition-all duration-200 h-[12vh] z-[1000]`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* logo */}
        <h1 className="text-xl md:text-2xl font-bold cursor-pointer">
          <span className="text-3xl md:text-3xl text-pink-700">A</span>ppify
        </h1>
        {/* navlink */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-sm font-semibold text-gray-600 hover:text-gray-800 transition-all duration-300"
            >
              <p className="nav__link">{link.name}</p>
            </Link>
          ))}
        </div>
        {/* button */}
        <div className="flex space-x-4 items-center">
          <button
            className="px-4 py-2 md:px-8 md:py-2.5 text-white font-semibold text-base bg-blue-700 hover:bg-blue-900 transtion-all
                           duration-200 rounded-full"
          >
            Join Now
          </button>
        </div>
        {/* burger menu */}
        <HiBars3BottomRight
          className="w-8 h-8 cursor-pointer text-black lg:hidden"
          onClick={openNav}
        />
      </div>
    </div>
  );
}

export default Nav
