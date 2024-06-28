import ContactForm from '@/app/components/ContactForm'
import React from 'react'

const page = () => {
  return (
    <div className='relative flex justify-center'>
        <div className="glass p-8 flex justify-between gap-3 mt-11 w-[80%] max-md:p-1 max-md:w-[90%] max-md:flex-col">
            <div className='p-8 w-[60%] max-md:w-auto max-md:p-4'>
                <h1 className='text-white text-2xl font-black mb-6'>get in touch</h1>
                <p className='text-lg text-white font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non itaque veritatis, nam soluta fugiat mollitia unde? Corporis deserunt distinctio, molestiae ab repellendus natus, quaerat, sed dicta molestias culpa dignissimos reiciendis!</p>
            </div>
            <ContactForm />
        </div>
    </div>
  )
}

export default page
