import React from 'react'
import Link from 'next/link'
import { navLinks } from '../../../Constant/Constant'
import { CgClose } from 'react-icons/cg';

type Props = {
      showNav: boolean
      closeNav: () => void
}

const MobileNav = ({ closeNav, showNav }: Props) => {
      const navOpen = showNav ? "translate-x-0" : "-translate-x-full"
  return (
    <div>
              <div className={` ${navOpen} fixed inset-0 bg-black opacity-70 w-full transform transition-all duration-500 h-screen z-10000`}></div>
      {/* navlinks */}
              <div className={` ${navOpen} text-white fixed justify-center h-full  flex flex-col delay-300 bg-indigo-900 w-[80%] sm:bg-[60%] space-y-6 z-10006`}>
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url}>
            <p className="nav__link text-white text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {link.name}
            </p>
          </Link>
        ))}
        <CgClose className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-6 w-6 h-6" onClick={closeNav}/>
      </div>
      {/* close icon */}
    </div>
  );
}

export default MobileNav
