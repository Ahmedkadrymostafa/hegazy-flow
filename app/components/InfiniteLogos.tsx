import React from 'react'
import Image from "next/image";
import logo1 from '../assets/b one.png'
import logo2 from '../assets/b two.png'
import logo3 from '../assets/b three.png'
import logo4 from '../assets/b four.png'
import logo5 from '../assets/b five.png'
import logo6 from '../assets/b six.png'

const InfiniteLogos = () => {
  return (
    <div>
        <div className="slider dir-ltr">
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