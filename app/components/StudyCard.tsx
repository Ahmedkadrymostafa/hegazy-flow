import React from 'react'
import Image from 'next/image'
import tech from '../assets/technology-791029_960_720.jpg'
import Link from 'next/link'
import { Study } from '@/types/Study'

const StudyCard = (props: Study) => {
  return (
    <div className="relative cursor-pointer hover:scale-105 duration-300">
        <Link href="#">
            <div
                className="block rounded-lg text-white shadow-secondary-1 w-[390px] h-72 overflow-hidden">
                    <div className="absolute top-0 w-full h-full bg-black opacity-40"></div>
                <Image width={390} height={290}
                className="rounded-lg w-full h-full"
                src={props.image}
                alt="" />
                <div className="absolute top-0 p-6">
                <h5 className="mb-2 text-xl font-bold leading-tight ">
                    {props.heading}
                </h5>
                <p className="mb-4 text-lg">
                    {props.title}
                </p>
                {/* <p className="text-base">
                    <small>Last updated 3 mins ago</small>
                    </p> */}
                </div>
            </div>
        </Link>
    </div>
  )
}

export default StudyCard
