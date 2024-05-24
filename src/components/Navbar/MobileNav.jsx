import React from 'react'
import { navMenu } from '../../conts/menuItems'

const MobileNav = ({ isTogle }) => {
   return (
      <div className={`${isTogle ? "flex" : "hidden"} fixed z-50 top-16 left-0  my-2 min-w-full  sidebar shadow-md`}>
         {isTogle ? (
            <div className='w-full  relative flex justify-start bg-black-gradient p-6 rounded-xl '>
               <ul className="mt-[-6px]">
                  {navMenu.map((item, i) => {
                     return (
                        <li
                           key={i}
                           className="mb-3 font-semibold"
                        >
                           <a href={`#${item.path}`}>
                              {item.menu}
                           </a>
                        </li>
                     )
                  })}
               </ul>
            </div>
         ) : (
            ""
         )}
      </div>
   )
}

export default MobileNav