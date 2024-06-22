'use client'
import { MdEditDocument, MdMarkEmailRead } from 'react-icons/md';
import initTranslations from '../i18n';
import { useTranslation } from 'react-i18next';
import { FaFunnelDollar } from 'react-icons/fa';
import { SiRocket } from 'react-icons/si';
import MainHeading from './MainHeading';

const Services = () => {
    const { t } = useTranslation();

  return (
    <div className='relative my-20'>
        <MainHeading title="Services" />
        
        <div className='flex gap-9 justify-center flex-wrap'>
            <div className="serviceBox purple">
                <div className="service-icon">
                    <MdMarkEmailRead />
                </div>
                <h3 className="title">{t('services:firstservice')}</h3>
                <p className="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
            </div>
            <div className="serviceBox green">
                <div className="service-icon">
                    <MdEditDocument />
                </div>
                <h3 className="title">{t('services:secondservice')}</h3>
                <p className="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
            </div>
            <div className="serviceBox blue">
                <div className="service-icon">
                    <FaFunnelDollar />
                </div>
                <h3 className="title">{t('services:thirdservice')}</h3>
                <p className="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
            </div>
            <div className="serviceBox">
                <div className="service-icon">
                    <SiRocket />
                </div>
                <h3 className="title">{t('services:fourthservice')}</h3>
                <p className="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
            </div>
        </div>
    </div>
  )
}

export default Services