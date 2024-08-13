import React from 'react'

const LoadingSkeleton = () => {
  return (
    <div className='fixed h-screen w-screen z-10 top-0 dark-g-bg flex justify-center items-center'>
        <div className="loader"></div>
    </div>
  )
}

export default LoadingSkeleton