import React from 'react'
import MainHeading from './MainHeading'
import Video from './Video'

const VideoSection = () => {
  return (
    <div className='my-10'>
        <MainHeading smallHeading='lorem ipsum' largeHeading='lorem lorem lorem lor'
         description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi est libero aperiam veniam fugiat!' />
        <Video
            src='https://files.vidstack.io/sprite-fight/720p.mp4'
            poster='https://files.vidstack.io/sprite-fight/poster.webp'
            thumbnail='https://files.vidstack.io/sprite-fight/thumbnails.vtt'
            width={850}
            height={650}
        />
    </div>
  )
}

export default VideoSection