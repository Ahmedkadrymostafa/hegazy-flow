import React from 'react'

type Heading = {
  smallHeading: string,
  largeHeading: string,
  description?: string
}

const MainHeading = ($: Heading) => {
  return (
    // <div className='main-heading'>
    //     <h1 className='max-sm:text-3xl'>{props.title}</h1>
    // </div>
    <div className='text-center mb-12'>
      <h6 className='g-text text-lg font-bold'>{$.smallHeading}</h6>
      <h1 className='text-white text-[3rem] max-sm:text-3xl font-bold'>{$.largeHeading}</h1>
      {$.description && 
        <p className='text-gray-400 max-w-[650px] mx-auto'>{$.description}</p>
      }
    </div>
  )
}

export default MainHeading