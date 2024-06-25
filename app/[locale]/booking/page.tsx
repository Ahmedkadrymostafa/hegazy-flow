import CalendlyEmbed from '@/app/components/CalendlyEmbed'
import MainHeading from '@/app/components/MainHeading'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* <MainHeading title="Schedule a free consultation" /> */}
      <CalendlyEmbed url="https://calendly.com/ahmedkadry730/" />
    </div>
  )
}

export default page
