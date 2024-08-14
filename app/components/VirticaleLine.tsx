import React from 'react'
import Image from 'next/image'
import rBlur from '../assets/right-blur.webp'
const VirticaleLine = () => {
  return (
    <div className='relative mt-[100px]'>
        <div className='absolute right-0 top-0'>
            <Image src={rBlur} alt='' />
        </div>
        <div className='w-[70%] mx-auto'>
            <div className='bg-white w-[2px] h-[75%] absolute left-1/2 -translate-x-1/2'>
                <div className='py-3 px-4 bg-white rounded-2xl -right-[25px] shadow-line-box absolute top-0'>
                    <p className='text-black text-xl font-bold'>01</p>
                </div>
                <div className='py-3 px-4 bg-white rounded-2xl -right-[25px] shadow-line-box absolute top-[33%]'>
                    <p className='text-black text-xl font-bold'>01</p>
                </div>
                <div className='py-3 px-4 bg-white rounded-2xl -right-[25px] shadow-line-box absolute top-[67%]'>
                    <p className='text-black text-xl font-bold'>01</p>
                </div>
                <div className='py-3 px-4 bg-white rounded-2xl -right-[25px] shadow-line-box absolute top-full'>
                    <p className='text-black text-xl font-bold'>01</p>
                </div>
                
            </div>
            <div className='flex flex-col'>
                <div className='mb-[150px] w-[37%]'>
                    <h2 className='text-white text-3xl mb-2'>Lorem ipsum dolor sit amet.</h2>
                    <p className='text-gray-300 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus necessitatibus, omnis unde incidunt deleniti nemo.</p>
                </div>
                <div className='mb-[150px] w-[37%] mr-auto'>
                    <h2 className='text-white text-3xl mb-2'>Lorem ipsum dolor sit amet.</h2>
                    <p className='text-gray-300 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus necessitatibus, omnis unde incidunt deleniti nemo.</p>
                </div>
                <div className='mb-[150px] w-[37%]'>
                    <h2 className='text-white text-3xl mb-2'>Lorem ipsum dolor sit amet.</h2>
                    <p className='text-gray-300 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus necessitatibus, omnis unde incidunt deleniti nemo.</p>
                </div>
                <div className='mb-[150px] w-[37%] mr-auto'>
                    <h2 className='text-white text-3xl mb-2'>Lorem ipsum dolor sit amet.</h2>
                    <p className='text-gray-300 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus necessitatibus, omnis unde incidunt deleniti nemo.</p>
                </div>
            
                
            
            </div>
        </div>
    </div>
  )
}

export default VirticaleLine