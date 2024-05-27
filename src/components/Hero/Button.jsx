import React from 'react'
import { FaPlay } from "react-icons/fa";

const Button = () => {
   return (
      <div className='flex justify-between w-full mt-10 md:justify-start' >
         <button className="bg-orange-500 text-white py-2 px-4 rounded-md mr-2">Beli Sekaran</button>
         <button className="flex items-center px-4 rounded-md gap-2">
            <div className=" shadow-md p-3 rounded-full">
               <FaPlay className='text-[#D81112]' />
            </div>
            Order Process
         </button>
      </div>
   )
}

export default Button