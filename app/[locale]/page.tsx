import initTranslations from "../i18n";
import TranslationsProvider from '../components/TranslationsProvider'
import Landing from "../components/Landing";

export default async function Home({ params: { locale }}: {params: { locale: any}}) {
  const nameSpaces = ['home']
  const { t, resources } = await initTranslations(locale, nameSpaces, null, null ); 
  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={nameSpaces}>
      <div>
        {/* <h1>{t('title')}</h1> */}
        <Landing />
      </div>
    </TranslationsProvider>
  );
}
