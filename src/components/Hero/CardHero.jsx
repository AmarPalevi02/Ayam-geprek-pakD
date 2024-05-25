import React from 'react'
import { gurame } from '../../assets'
import { FaArrowRight } from "react-icons/fa";

const CardHero = () => {
   return (
      <div className="relative shadow-md bg-white h-72 flex flex-col items-center rounded-md">
         <div className="">
            <img src={gurame} alt="" className=' shadow-md rounded-full' />
         </div>
         <p className='font-semibold'>Gurame</p>
         <p>Rp.12.000</p>

         <div className="flex gap-3 mt-4">
            <div className="p-2 bg-black rounded-full">
               <FaArrowRight className='text-white' />
            </div>

            <div className="p-2 bg-white rounded-full">
               <FaArrowRight className=' rotate-180' />
            </div>
         </div>
      </div>
   )
}

export default CardHero