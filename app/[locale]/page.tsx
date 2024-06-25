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

export default async function Home({ params: { locale }}: {params: { locale: any}}) {
  const nameSpaces = ['home', 'services']
  const { t, resources } = await initTranslations(locale, nameSpaces, null, null );

  return (
    <div className="container">
      <TranslationsProvider resources={resources} locale={locale} namespaces={nameSpaces}>
          {/* <h1>{t('title')}</h1> */}
          {/* <div className="circle"></div> */}
          <Landing first={t('first')} second={t('second')} third={t('third')} />
          <MotionScroller />
          <VideoIntroduction />
          <NewsLetterModal />
          <Services />
          <ServicesContent />
          <InfiniteLogos />
          <Testimonials />
      </TranslationsProvider>
    </div>
  );
}
