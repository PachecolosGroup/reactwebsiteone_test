import React from 'react'
import Voices from '../assets/voices.jpg'

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[450px] mx-auto my-4 rounded-2xl' src={Voices} alt="" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold text-2xl'>Voices of the Mind</p>
                <h1 className=' md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Listening or just keep walking?</h1>
                <p className=''>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ut temporibus quis ratione, 
                    assumenda fugit magni recusandae soluta dicta aliquam similique veritatis. - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ut temporibus quis ratione, 
                    assumenda fugit magni recusandae soluta dicta aliquam similique veritatis.
                </p>
                <button className='bg-black w-[150px] rounded-md  my-6 mx-auto md:mx-0 py-4 text-[#00df9a] font-bold'> Keep Walking </button>
            </div>


        </div>

    </div>
  )
}

export default Analytics