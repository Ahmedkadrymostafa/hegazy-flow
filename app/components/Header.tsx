import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center mx-5'>
        <Link href="#">
            logo
        </Link>

        <div className='flex gap-14 items-center'>
            <nav className="nav">
                <input type="checkbox" className="nav__cb" id="menu-cb"/>
                <div className="nav__content">
                    <ul className="nav__items">
                    <li className="nav__item">
                        <span className="nav__item-text">
                        Home
                        </span>
                    </li>
                    <li className="nav__item">
                        <span className="nav__item-text">
                        Works
                        </span>
                    </li>
                    <li className="nav__item">
                        <span className="nav__item-text">
                        About
                        </span>
                    </li>
                    <li className="nav__item">
                        <span className="nav__item-text">
                        Contact
                        </span>
                    </li>
                    </ul>
                </div>
                <label className="nav__btn" htmlFor="menu-cb"></label>
            </nav>

            <div>
                <button className="btn">
                    <i className="animation"></i>
                    Schedule a call
                    <i className="animation"></i>
                </button>
            </div>
        </div>

    </header>
  )
}

export default Header