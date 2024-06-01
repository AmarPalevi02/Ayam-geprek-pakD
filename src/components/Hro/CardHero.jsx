import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { cardHero } from '../../conts/cardHero'

const CardHero = () => {
   return (
      <>
         <div className="grid grid-cols-2  gap-4">
            {cardHero.map((item, i) => {
               return (
                  <div key={i} className="max-w-xs relative shadow-md py-2 flex flex-col items-center rounded-md md:h-72">
                     <div className="h-28 flex justify-center md:h-auto">
                        <img src={item.image} alt="" className='h-full w-full object-cover' />
                     </div>

                     <div className="h-full flex flex-col justify-end items-center md:pb-5">
                        <p className='font-semibold'>{item.title}</p>
                        <p className='text-sm text-gray-500'>{item.variant}</p>
                        <p className='font-semibold'>Rp.{item.price}</p>

                        <div className="flex gap-5 md:absolute bottom-[-1rem]">
                           <div className="p-2 bg-black rounded-full">
                              <FaArrowRight className='text-white' />
                           </div>

                           <div className="p-2 bg-white rounded-full">
                              <FaArrowRight className='rotate-180' />
                           </div>
                        </div>

                     </div>
                  </div>
               );
            })}
         </div>
      </>
   )
}

export default CardHero