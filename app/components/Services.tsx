'use client'
import { MdEditDocument, MdMarkEmailRead } from 'react-icons/md';
import initTranslations from '../i18n';
import { useTranslation } from 'react-i18next';
import { FaFunnelDollar } from 'react-icons/fa';
import { SiRocket } from 'react-icons/si';
import MainHeading from './MainHeading';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollAnimation from 'react-animate-on-scroll';

const Services = () => {
    const { t } = useTranslation();
    // const ref = useRef(null);
    // const { scrollyProgress }: any = useScroll({
    //     target: ref,
    //     offset: ["0 1", "1.33 1"]
    // })
    // const scaleProgress = useTransform(scrollyProgress, [0, 1], [0.8, 1])
    // const opacityProgress = useTransform(scrollyProgress, [0, 1], [0.6, 1])

  return (
    <div className='relative my-20'>
        <MainHeading title="Services" />
        
        <div className='flex gap-9 justify-center flex-wrap'>
            <ScrollAnimation animateIn="fadeInDown">
                <div className="serviceBox purple">
                    <div className="service-icon">
                        <MdMarkEmailRead />
                    </div>
                    <h3 className="title">{t('services:first')}</h3>
                    <p className="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInDown">
                <div className="serviceBox green">
                    <div className="service-icon">
                        <MdEditDocument />
                    </div>
                    <h3 className="title">{t('services:second')}</h3>
                    <p className="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp">
                <div className="serviceBox blue">
                    <div className="service-icon">
                        <FaFunnelDollar />
                    </div>
                    <h3 className="title">{t('services:third')}</h3>
                    <p className="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInDown">
                <div className="serviceBox">
                    <div className="service-icon">
                        <SiRocket />
                    </div>
                    <h3 className="title">{t('services:fourth')}</h3>
                    <p className="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                </div>
            </ScrollAnimation>
        </div>
    </div>
  )
}

export default Services