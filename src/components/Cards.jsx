import React from 'react'
import Dogito from '../assets/dogito.jpeg'
import Playes from '../assets/playes.jpg'
import Voices from '../assets/voices.jpg'


function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white a'>
        <div className='max-w[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            {/* Tarjeta 1 */}
            <div className='w-full shadow-xl flex flex-col p-4 md:my-2 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-30 mx-auto mt-[-3rem] bg-white rounded-2xl' src={Dogito} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className=' text-center text-5xl font-black '>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                    <p className='py-2 border-b mx-8'>500 GB Storage</p>
                    <button className='bg-black text-[#00df9a] rounded-md font-bold w-[200px] my-6 px-6 py-3'>Start Trial</button>
                </div>
            </div>
            {/* Tarjeta 2 */}
            <div className='w-full shadow-xl flex flex-col p-4 md:my-2 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-30 mx-auto mt-[-3rem] bg-white rounded-2xl' src={Playes} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className=' text-center text-5xl font-black '>$249</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                    <p className='py-2 border-b mx-8'>500 GB Storage</p>
                    <button className='bg-black text-[#00df9a] rounded-md font-bold w-[200px] my-6 px-6 py-3'>Start Trial</button>
                </div>
            </div>
            {/* Tarjeta 3 */}
            <div className='w-full shadow-xl flex flex-col p-4 md:my-2 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-30 mx-auto mt-[-3rem] bg-white rounded-2xl' src={Voices} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className=' text-center text-5xl font-black '>$349</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                    <p className='py-2 border-b mx-8'>500 GB Storage</p>
                    <button className='bg-black text-[#00df9a] rounded-md font-bold w-[200px] my-6 px-6 py-3'>Start Trial</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards