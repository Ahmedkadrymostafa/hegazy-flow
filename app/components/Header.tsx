import Link from 'next/link'
import React from 'react'
import AnimatedBtn from './AnimatedBtn'
import Image from 'next/image'
import logo from '../assets/logo.png'
import HeaderNavbar from './Navbar'
// import logo from '../assets/Untitled design.png'

const Header = () => {
  return (
        <div>
            <HeaderNavbar />
        </div>
    // <header className='border-bottom relative flex justify-between items-center mx-10'>
    //     <Link href="/">
    //         <Image src={logo} alt='hegazy flow logo' width={120} height={120}></Image>
    //     </Link>

    //     <div className='flex gap-14 items-center'>
    //         <nav className="nav">
    //             <input type="checkbox" className="nav__cb" id="menu-cb"/>
    //             <div className="nav__content">
    //                 <ul className="nav__items">
    //                 <li className="nav__item">
    //                     <span className="nav__item-text">
    //                     Home
    //                     </span>
    //                 </li>
    //                 <li className="nav__item">
    //                     <span className="nav__item-text">
    //                     Works
    //                     </span>
    //                 </li>
    //                 <li className="nav__item">
    //                     <span className="nav__item-text">
    //                     About
    //                     </span>
    //                 </li>
    //                 <li className="nav__item">
    //                     <span className="nav__item-text">
    //                     Contact
    //                     </span>
    //                 </li>
    //                 </ul>
    //             </div>
    //             <label className="nav__btn" htmlFor="menu-cb"></label>
    //         </nav>

    //         <AnimatedBtn />

    //     </div>

    // </header>
  )
}

export default Header