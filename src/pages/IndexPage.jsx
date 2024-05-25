import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'

const IndexPage = () => {
   return (
      <div className='relative w-[100%] h-[100vh] bg-[#F5F5F5] px-5 md:px-20 z-50'>
         <div className="pt-4 relative ">
            <Navbar />
         </div>
         <Hero />
      </div>
   )
}

export default IndexPage