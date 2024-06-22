import initTranslations from "../i18n";
import TranslationsProvider from '../components/TranslationsProvider'
import Landing from "../components/Landing";
import Header from "../components/Header";
import VideoIntroduction from "../components/VideoIntroduction";
import NewsLetterModal from "../components/NewsLetterModal";
import Services from "../components/Services";
import InfiniteLogos from "../components/InfiniteLogos";

export default async function Home({ params: { locale }}: {params: { locale: any}}) {
  const nameSpaces = ['home', 'services']
  const { t, resources } = await initTranslations(locale, nameSpaces, null, null );

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={nameSpaces}>
        {/* <h1>{t('title')}</h1> */}
        {/* <div className="circle"></div> */}
        <Landing first={t('first')} second={t('second')} third={t('third')} />
        <InfiniteLogos />
        <VideoIntroduction />
        <NewsLetterModal />
        <Services />
    </TranslationsProvider>
  );
}
