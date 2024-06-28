import StudyCard from '@/app/components/StudyCard'
import React from 'react'
import { getStudies } from '@/sanity/schemas/sanity-utils'

const page = async () => {
  
    const studies = await getStudies();

    return (
    <div className='flex gap-9 justify-center items-center flex-wrap m-12'>
        {studies.map((study) => (
            <StudyCard key={study._id} image={study.image} heading={study.heading} title={study.title} />
        ))}
        
    </div>
  )
}

export default page