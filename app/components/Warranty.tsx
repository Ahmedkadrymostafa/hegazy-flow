import React from 'react'
import Image from 'next/image'
import speed from "../assets/icon4.webp"
import door from "../assets/Icon1.webp"
import shield from "../assets/icon2.webp"
import lock from "../assets/icon3.webp"

const Warranty = () => {
  return (
    <div className='w-full h-auto my-14 mx-auto'>
        <div className='thin-bar'></div>
        <div className='flex justify-center py-6 gap-12 flex-wrap max-lg:hidden'>
            <div className='flex gap-3 items-center my-auto'>
                <Image src={speed} loading='lazy' width={32} alt='' />
                <p className='text-white text-xl'>Lorem, ipsum.</p>
            </div>
            <div className='flex gap-3 items-center my-auto'>
                <Image src={door} loading='lazy' width={32} alt='' />
                <p className='text-white text-xl'>Lorem, ipsum.</p>
            </div>
            <div className='flex gap-3 items-center my-auto'>
                <Image src={shield} loading='lazy' width={32} alt='' />
                <p className='text-white text-xl'>Lorem, ipsum.</p>
            </div>
            <div className='flex gap-3 items-center my-auto'>
                <Image src={lock} loading='lazy' width={32} alt='' />
                <p className='text-white text-xl'>Lorem, ipsum.</p>
            </div>
        </div>


        <div className="slider-info dir-ltr max-lg:grid">
            <div className="slide-track">
                <div className="slide-info">
                    <div className='flex gap-3 items-center my-auto'>
                        <Image src={speed} loading='lazy' width={32} alt='' />
                        <p className='text-white text-xl'>Lorem, ipsum.</p>
                    </div>
                </div>
                <div className="slide-info">
                    <div className='flex gap-3 items-center my-auto'>
                        <Image src={door} loading='lazy' width={32} alt='' />
                        <p className='text-white text-xl'>Lorem, ipsum.</p>
                    </div>
                </div>
                <div className="slide-info">
                    <div className='flex gap-3 items-center my-auto'>
                        <Image src={shield} loading='lazy' width={32} alt='' />
                        <p className='text-white text-xl'>Lorem, ipsum.</p>
                    </div>
                </div>
                <div className="slide-info">
                    <div className='flex gap-3 items-center my-auto'>
                        <Image src={lock} loading='lazy' width={32} alt='' />
                        <p className='text-white text-xl'>Lorem, ipsum.</p>
                    </div>
                </div>
                <div className="slide-info">
                    <div className='flex gap-3 items-center my-auto'>
                        <Image src={speed} loading='lazy' width={32} alt='' />
                        <p className='text-white text-xl'>Lorem, ipsum.</p>
                    </div>
                </div>
                <div className="slide-info">
                    <div className='flex gap-3 items-center my-auto'>
                        <Image src={door} loading='lazy' width={32} alt='' />
                        <p className='text-white text-xl'>Lorem, ipsum.</p>
                    </div>
                </div>
                <div className="slide-info">
                    <div className='flex gap-3 items-center my-auto'>
                        <Image src={shield} loading='lazy' width={32} alt='' />
                        <p className='text-white text-xl'>Lorem, ipsum.</p>
                    </div>
                </div>
                <div className="slide-info">
                    <div className='flex gap-3 items-center my-auto'>
                        <Image src={lock} loading='lazy' width={32} alt='' />
                        <p className='text-white text-xl'>Lorem, ipsum.</p>
                    </div>
                </div>
              
                
                
            </div>
        </div>



        <div className='thin-bar'></div>
    </div>
  )
}

export default Warranty