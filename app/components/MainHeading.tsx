import React from 'react'

const MainHeading = (props: any) => {
  return (
    <div className='main-heading'>
        <h1 className='max-sm:text-3xl'>{props.title}</h1>
    </div>
  )
}

export default MainHeading