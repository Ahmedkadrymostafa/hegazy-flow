// import initTranslations from "../i18n";

export default async function Landing(props: any) {
    // const nameSpaces = ['home']
    // const { t, resources } = await initTranslations(locale, nameSpaces, null, null );
    return (
        <div>
            <div className="first-slide py-28 w-full h-full flex justify-center items-center">
                <div>
                    <div className="header-content">
                        <div className="line animate__animated animate__bounceInLeft duration-1000 delay-1000"></div>
                        <h2 className="animate__animated animate__fadeInDown duration-1000">{props.first}</h2>
                        <h1 className="animate__animated animate__fadeInUp duration-1000">{props.second}</h1>
                        <h4 className="animate__animated animate__fadeIn duration-1000">{props.third}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}