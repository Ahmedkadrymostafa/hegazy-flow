// import initTranslations from "../i18n";

export default async function Landing(props: any) {
    // const nameSpaces = ['home']
    // const { t, resources } = await initTranslations(locale, nameSpaces, null, null );
    return (
        <div>
            <div className="first-slide w-full h-full flex justify-center items-center">
                <div>
                    <div className="header-content  text-center">
                        {/* <div className="line animate__animated animate__bounceInLeft duration-1000 delay-1000"></div> */}
                        <h2 className="animate__animated animate__fadeInDown duration-1000">إزاي تضاعف مبيعاتك <span className="g-text">ثلاث اضعاف</span></h2>
                        <h1 className="animate__animated animate__fadeInUp duration-1000">وتجعل عميلك متحمس يشتري <span className="g-text">منك</span>؟</h1>
                        <h4 className="animate__animated animate__fadeIn duration-1000">السيلز فانل للبيزنس بتاعك شئ اساسي مش اختياري.عايز تفهم اكتر؟ <span className="g-text">شوف الفيديو ده</span></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}