import React, { useEffect, useState } from 'react'

import MobileNav from './MobileNav';

import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { navMenu } from '../../conts/menuItems'

import { logo } from '../../assets'

const Navbar = () => {
   const [isTogle, setIsTogle] = useState(false)
   const [prevScroll, setPrevcroll] = useState(0)
   const [isScroll, setIsScroll] = useState(true)

   const handleScroll = () => {
      const currentScroll = window.scrollY
      const isScrollUp = currentScroll < prevScroll

      setIsScroll(() => {
         return isScrollUp || currentScroll < 50
      })

      setPrevcroll(currentScroll)
   }

   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [prevScroll])

   return (
      <nav className='w-full flex justify-between items-center fixed z-50 top-3 left-0 right-0 md:px-20  '>
         <div className={`w-full flex justify-between items-center rounded-md px-5 py-3 ${isScroll ? "" : "bg-glass ease-in-out "}`}>
            <img
               src={logo}
               alt='logo'
               className='w-24'
            />

            <div className="md:hidden">
               {isTogle ? (
                  <IoCloseSharp onClick={() => setIsTogle(!isTogle)} className='text-3xl' />
               ) : (
                  <IoMdMenu onClick={() => setIsTogle(!isTogle)} className='text-3xl' />
               )}
            </div>

            <div className="hidden md:block">
               <ul className='flex gap-16 '>
                  {navMenu.map((item, i) => (
                     <li
                        key={i}
                        className='cursor-pointer'
                     >
                        {item.menu}
                     </li>
                  ))}
               </ul>
            </div>
         </div>
         <MobileNav isTogle={isTogle} />
      </nav>
   )
}

export default Navbar