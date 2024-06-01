import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hro/Hero'

const IndexPage = () => {
   return (
      <div className='relative w-[100%]  bg-[#F5F5F5] px-5 md:px-20 z-50'>
         <div className="pt-8 relative ">
            <Navbar />
         </div>
         <Hero />
      </div>
   )
}

export default IndexPage