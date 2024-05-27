import React from 'react'
import CardHero from './CardHero'
import Button from './Button'

const Hero = () => {
   return (
      <div className=' w-full mt-10 md:flex md:justify-between md:gap-10'>
         <div className='w-full flex flex-col justify-center'>
            <div className="mb-2">
               <h1 className='text-5xl font-bold'>Ayam Bakar</h1>
               <h1 className='text-5xl font-bold '>Terenak</h1>
               <h1 className='text-5xl font-bold' >di <span className='text-[#D81112]'>Kota Anda</span></h1>
            </div>
            <p className='leading-normal text-gray-600 max-w-md'> Nikmati kelezatan ayam bakar dengan bumbu spesial yang menggugah selera </p>

            <div className="hidden md:block">
            <Button />
         </div>
         </div>

         <div className="grid grid-cols-2 gap-3 mt-4">
            <CardHero />
            <CardHero />
            <CardHero />
            <CardHero />
         </div>
         <div className="w-full flex justify-between md:hidden ">
            <Button />
         </div>
      </div>
   )
}

export default Hero