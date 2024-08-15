import initTranslations from "../i18n";
import TranslationsProvider from '../components/TranslationsProvider'
import Landing from "../components/Landing";
import Header from "../components/Header";
import VideoIntroduction from "../components/VideoIntroduction";
import NewsLetterModal from "../components/NewsLetterModal";
import Services from "../components/Services";
import InfiniteLogos from "../components/InfiniteLogos";
import MotionScroller from "../components/MotionScroller";
import ServicesContent from "../components/ServicesContent";
import Testimonials from "../components/Testimonials";
import VirticaleLine from "../components/VirticaleLine";
import Warranty from "../components/Warranty";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import LoadingSkeleton from "../components/LoadingSkeleton";
import VideoSection from "../components/VideoSection";
import rBlur from "../assets/rBlur.png"
import MainHeading from "../components/MainHeading";

export default async function Home({ params: { locale }}: {params: { locale: any}}) {
  const nameSpaces = ['home', 'services']
  const { t, resources } = await initTranslations(locale, nameSpaces, null, null );

  return (
    
      <div>
        <TranslationsProvider resources={resources} locale={locale} namespaces={nameSpaces}>
           
            <div className="f-section-bg top-section">
                <div className="container">
                    <div className="w-fit mx-auto py-7 flex gap-2 items-center">
                      <p className="font-bold text-inherit text-white text-2xl">HEGAZY FLOW</p>
                      <Link href="/">
                        <Image
                          src={logo}
                          alt="hegazy flow logo"
                          width={65}
                          height={65}
                        ></Image>
                      </Link>
                    </div>
                    <Landing first={t('first')} second={t('second')} third={t('third')} />
                    <VideoIntroduction />
                    <Warranty />
                </div>
            </div>
              <MainHeading smallHeading='What you get from' largeHeading='Our Services' />
              <VirticaleLine />
              {/* <NewsLetterModal /> */}
              {/* <Services /> */}
              {/* <ServicesContent /> */}
                  <div className="relative">
                    <div className='absolute left-0 bottom-0'>
                        <Image src={rBlur} alt='' />
                    </div>
                    <div className="container">
                      <VideoSection />
                      <div className='thin-bar'></div>
                      <VideoSection />
                      <div className='thin-bar'></div>
                      <VideoSection />
                      <div className='thin-bar'></div>
                    </div>
                      <InfiniteLogos />
                  </div>
              <Testimonials />
              <ContactUs />
              <Footer />
              {/* <LoadingSkeleton /> */}
        </TranslationsProvider>
      </div>
    
  );
}
