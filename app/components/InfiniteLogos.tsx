import React from 'react'
import Image from "next/image";
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
import logo6 from '../assets/logo6.png'

const InfiniteLogos = () => {
  return (
    <div>
        <div className="slider">
            <div className="slide-track">
                <div className="slide"><Image src={logo1} alt="partner logo" /></div>
                <div className="slide"><Image src={logo2} alt="partner logo" /></div>
                <div className="slide"><Image src={logo3} alt="partner logo" /></div>
                <div className="slide"><Image src={logo4} alt="partner logo" /></div>
                <div className="slide"><Image src={logo5} alt="partner logo" /></div>
                <div className="slide"><Image src={logo6} alt="partner logo" /></div>
                
                {/* same 9 slides doubled (duplicate) */}
                
                <div className="slide"><Image src={logo1} alt="partner logo" /></div>
                <div className="slide"><Image src={logo2} alt="partner logo" /></div>
                <div className="slide"><Image src={logo3} alt="partner logo" /></div>
                <div className="slide"><Image src={logo4} alt="partner logo" /></div>
                <div className="slide"><Image src={logo5} alt="partner logo" /></div>
                <div className="slide"><Image src={logo6} alt="partner logo" /></div>
            </div>
        </div>
    </div>
  )
}

export default InfiniteLogos