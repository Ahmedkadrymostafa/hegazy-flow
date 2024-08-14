import Link from 'next/link'
import logo from '../assets/logo.png'
import Image from 'next/image'
import { FaFacebookSquare, FaLinkedin, FaPhone, FaTiktok } from 'react-icons/fa'
import { FaSquareInstagram } from 'react-icons/fa6'
import { MdOutlineMail } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className='relative px-20 dark-g-bg blue-shadow mt-24 py-12 max-md:px-7'>
        <div className='flex flex-col gap-6 max-sm:text-center'>
            {/* <div className='flex gap-2 items-center'>
                <Image src={logo} width={130} alt='hegazy flow logo' />
                <p className='text-white text-xl font-bold'>HEGAZY FLOW</p>
            </div> */}
            <div className='flex gap-14 flex-col'>
                <div className='max-w-[620px]'>
                    <h3 className='text-white text-2xl mb-3'>ABOUT</h3>
                    <p className='text-lg text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ea repellendus id beatae, numquam expedita, iste harum, et eveniet fugit quasi? Neque repudiandae atque obcaecati nihil quas repellat impedit expedita.</p>
                </div>
                {/* <div>
                    <h3 className='text-white text-2xl mb-3'>Quick Links</h3>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-base text-gray-400'><Link href='/'>Home</Link></li>
                        <li className='text-base text-gray-400'><Link href='/'>Contact</Link></li>
                    </ul>
                </div> */}
                <div className='flex justify-between gap-10 max-sm:flex-col'>
                    <div>
                        <h3 className='text-white text-2xl mb-2'>Contact</h3>
                        <div className='text-gray-400 text-lg p-3 flex gap-2 items-center w-fit max-sm:mx-auto'>
                            <MdOutlineMail className='text-xl' />
                            <p >info@gmail.com</p>
                        </div>
                        <div className='text-gray-400 text-lg p-3 flex gap-2 items-center w-fit max-sm:mx-auto'>
                            <FaPhone className='text-xl' />
                            <p >+456 78942345</p>
                        </div>
                    </div>
                    <div>
                        <form className="subscribe-form max-sm:mx-auto">
                            <span className="title">Subscribe to our newsletter.</span>
                            <div>
                                <input placeholder="Enter your email" type="email" name="email" id="email-address" />
                                <button type="submit">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <div className='h-line glass w-full h-[2px] my-7'></div>
            <div className='flex flex-col gap-12'>
                <ul className='flex items-center gap-6 mx-auto'>
                    <li className='text-3xl text-gray-400'><Link href='/'><FaLinkedin /></Link></li>
                    <li className='text-3xl text-gray-400'><Link href='/'><FaFacebookSquare /></Link></li>
                    <li className='text-3xl text-gray-400'><Link href='/'><FaSquareInstagram /></Link></li>
                    <li className='text-3xl text-gray-400'><Link href='/'><FaTiktok /></Link></li>
                </ul>
                <p className='text-gray-400 mx-auto'>Copyright &copy; 2024 | All Rights Reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
