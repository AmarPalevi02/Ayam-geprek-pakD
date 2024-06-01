import React from 'react'
import CardHero from './CardHero'
import Button from './Button'
import { grabFood} from '../../assets'

const Hero = () => {
   return (
      <div className=' w-full h-[100vh] relative mt-10  md:flex md:justify-between md:gap-10 pb-20 '>
         <div className='w-full flex flex-col justify-center md:justify-between md:py-3'>
            <div className="">
               <img
                  src={grabFood}
                  alt=""
                  className='w-20'
               />
            </div>
            <div className="mb-2">
               <h1 className='text-5xl font-bold md:text-7xl'>Ayam Bakar</h1>
               <h1 className='text-5xl font-bold md:text-7xl'>Terenak</h1>
               <h1 className='text-5xl font-bold md:text-7xl' >di <span className='text-[#D81112]'>Kota Anda</span></h1>
            </div>
            <p className='leading-normal text-gray-700 max-w-md md:text-xl my-4'> Nikmati kelezatan ayam bakar dengan bumbu spesial yang menggugah selera </p>

            <div className="hidden md:block">
               <Button />
            </div>
         </div>
         <div className="">
            <CardHero />
         </div>
         <div className="w-full flex justify-between md:hidden ">
            <Button />
         </div>
      </div>
   )
}

export default Hero