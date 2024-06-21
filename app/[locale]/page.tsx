import initTranslations from "../i18n";
import TranslationsProvider from '../components/TranslationsProvider'
import Landing from "../components/Landing";
import Header from "../components/Header";
import VideoIntroduction from "../components/VideoIntroduction";

export default async function Home({ params: { locale }}: {params: { locale: any}}) {
  const nameSpaces = ['home']
  const { t, resources } = await initTranslations(locale, nameSpaces, null, null ); 
  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={nameSpaces}>
        {/* <h1>{t('title')}</h1> */}
        {/* <div className="circle"></div> */}
        <Landing />
        <VideoIntroduction />
    </TranslationsProvider>
  );
}
