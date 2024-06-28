import React from 'react'
import Image from 'next/image'
// import screen from '../assets/wscreen.jpg'
import { Testi } from '@/types/Testi'

const TestimonialCard = (props: Testi) => {
  return (
    
        <div className="card">
            <Image width={280} height={350} src={props.image} alt="client review image" />
            <div className="card-content">
            {/* <h2>
                Card Heading
            </h2> */}
            {/* <p className='glass py-2 px-3'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
            </p> */}
            {/* <a href="#" className="button">
                Find out more 
                <span className="material-symbols-outlined">
                arrow_right_alt
                </span>
            </a> */}
            </div>
        </div>
    
  )
}

export default TestimonialCard