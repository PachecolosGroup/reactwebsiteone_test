import React from 'react'

function Newsletter() {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-col-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                    Want tips & tricks to improve your traveling?
                </h1>
                <p className='my-4'>
                    Sign up to our newsletter and learn the besto way.</p>
            </div>
            <div className='my-4'>
                <div className=' flex flex-col sm:flex-row items-center justify-center w-full'> 
                    <input
                     className='p-3 flex w-full rounded-md text-black'
                        type="email"
                        placeholder='Enter Email'
                    />
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 px-6 py-3 mx-auto text-black'>
                    Let me know! 
                    </button>
                </div>
                <p> 
                    We care about your protection. Read our 
                    <span className='text-[#00df9a]'> Privacy Policy </span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter