import React from 'react'
import { gurame } from '../../assets'
import { FaArrowRight } from "react-icons/fa";
import { cardHero } from '../../conts/cardHero'

const CardHero = () => {
   return (
      <>
         <div className="grid grid-cols-2  gap-4">
            {cardHero.map((item, i) => {
               return (
                  <div key={i} className="relative shadow-md bg-white py-2 flex flex-col items-center rounded-md md:h-72 max-w-xs mx-auto">
                     <div className="">
                        <img src={item.image} alt="" className='rounded-full' />
                     </div>
                     <p className='font-semibold'>{item.title}</p>
                     <p>Rp.{item.price}</p>

                     <div className="flex gap-3 mt-4">
                        <div className="p-2 bg-black rounded-full">
                           <FaArrowRight className='text-white' />
                        </div>

                        <div className="p-2 bg-white rounded-full">
                           <FaArrowRight className='rotate-180' />
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