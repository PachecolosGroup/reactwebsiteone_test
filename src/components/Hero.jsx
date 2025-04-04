import React from 'react'
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className='  text-white '>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2 text-2xl pb-[-20px]'> GROWING WITH DATA ANALYTICS
            </p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-2'> Grow with data.   
            </h1>

            <div className=' flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl font-bold p-2 py-4' >
                    Fast, flexible financing for
                </p> 
                <ReactTyped 
                 className='md:text-5xl sm:text-4xl font-bold p-2 text-[#00df9a]'
                 strings={['BTB.', 'BTC.', 'SASS.',]} 
                 typeSpeed={120} 
                 backSpeed={140}
                 loop/>
            </div>
            <p className=' md:text-2xl text-xl font-bold text-gray-500'>
                Monitor your data analytics to increase revenue <br/> for BTB, BTC & SASS platforms.
            </p>
            <button className='bg-[#00df9a] w-[200px] rounded-md  my-6 mx-auto py-4 text-black font-bold'> Get Started </button>

        </div>

    </div>
  )
}

export default Hero