import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import MobileNav from './MobileNav';
import { navMenu } from '../../conts/menuItems'

const Navbar = () => {
   const [isTogle, setIsTogle] = useState(false)

   return (
      <nav className='w-full flex justify-between items-center px-5 py-3 rounded-md shadow-md'>
         <h1 className='text-xl text-gray-600 font-semibold'>Ayam Geprek Pak D</h1>
         <div className="md:hidden">
            {isTogle ? (
               <IoCloseSharp onClick={() => setIsTogle(!isTogle)} className='text-3xl' />
            ) : (
               <IoMdMenu onClick={() => setIsTogle(!isTogle)} className='text-3xl' />
            )}
         </div>

         <MobileNav isTogle={isTogle} />

         <div className="hidden md:block">
            <ul className='flex gap-16 '>
               {navMenu.map((item, i) => (
                  <li
                     key={i}
                  >
                     {item.menu}
                  </li>
               ))}
            </ul>
         </div>

      </nav>
   )
}

export default Navbar