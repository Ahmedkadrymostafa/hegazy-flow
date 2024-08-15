import React from 'react'
import Image from 'next/image'
import img from '../assets/technology-791029_960_720.jpg'
import MainHeading from './MainHeading'

const ServicesContent = () => {
  return (
    <div className='relative px-7 py-10 border-2 border-gray-400 max-sm:px-2'>
        {/* <MainHeading title="What We Offer" /> */}

        <div className='flex justify-between gap-10 items-center max-md:flex-col'>
            <Image src={img} alt='service image' className='rounded-lg max-md:w-[75%] max-sm:w-full' width={300} height={300} />
            <div className="v-line w-[2px] glass h-32 max-lg:hidden"></div>
            <div className='glass p-5'>
                <p className='text-3xl font-bold text-white mb-6 max-md:text-xl'>Lorem ipsum dolor sit amet.</p>
                <p className='text-white text-xl max-md:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quo omnis ullam consequatur distinctio, voluptatibus ipsum facere consequuntur quas harum quasi accusantium delectus dolorum ipsam aperiam natus repellendus, enim doloribus!</p>
            </div>
        </div>
        <div className='h-line glass w-full h-[2px] my-7'></div>
        <div className='flex flex-row-reverse justify-between gap-10 items-center max-md:flex-col'>
            <Image src={img} alt='service image' className='rounded-lg max-md:w-[75%] max-sm:w-full' width={300} height={300} />
            <div className="v-line w-[2px] glass h-32 max-lg:hidden"></div>
            <div className='glass p-5'>
                <p className='text-3xl font-bold text-white mb-6 max-md:text-xl'>Lorem ipsum dolor sit amet.</p>
                <p className='text-white text-xl max-md:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quo omnis ullam consequatur distinctio, voluptatibus ipsum facere consequuntur quas harum quasi accusantium delectus dolorum ipsam aperiam natus repellendus, enim doloribus!</p>
            </div>
        </div>
        <div className='h-line glass w-full h-[2px] my-7'></div>
        
        

    </div>
  )
}

export default ServicesContent