const headerInfo = {
    logoTitle: "返回首页",
    logo: require('./img/logo.png'),
}
const headerInfoEn = {
    logoTitle: "Back to Homepage",
    logo: require('./img/logo.png'),
}

const bannerData = {
    header: "Utilize AI, Big Data and Cloud technologies to advance women's healthcare. Firstly to eliminate women's breast cancer",
    start: {
        en: "Join Us",
    },
    langs: [
    {
        name: "女性健康医视云 —— 用AI，爱自己",
        description: "免费的在线乳腺影像判读AI 由人工智能提供参考意见",
    },{
        name: "Advancing Women's Healthcare with AI",
        description: "Free Online Mammograms Interpretation using AI Suggestions for reference only",
    },{
        name:"Faire progresser la santé des femmes avec l'IA",
        description: "Interprétation gratuite de mammogrammes en ligne en utilisant des suggestions d'IA pour la référence seulement",
    },{
        name:"Avanzando en la salud de la mujer con IA",
        description: "Interpretación gratuita de mamografías en línea usando sugerencias de IA solo como referencia",
    },{
        name:"Продвижение женского здравоохранения с помощью ИИ",
        description: "Бесплатные онлайн-маммограммы Интерпретация с использованием предложений AI для справки",
    },{
        name:"تعزيز الرعاية الصحية للمرأة مع منظمة العفو الدولية",
        description: "تفسير الماموغرافيا على الانترنت مجانا باستخدام الاقتراحات الذكاء الاصطناعي للإشارة فقط",
    }
    ],
}

const aboutData = {
    bg: require('./img/aboutBG2.jpg'),
    title : "关于我们",
    subtitle: "MedVisionCloud——女性健康医视云",
    description1: "女性的健康，是人类社会发展的基石。MedVisionCloud致力于人工智能和医疗行业的深度融合，运用最前沿的人工智能技术，聚焦女性健康，旨在为全民提供免费的乳腺癌相关医疗影像人工智能辅助判读服务。",
    description2: "MedVisionCloud由Dr Lotus AI 医疗影像人工智能判读引擎提供技术支持，帮助用户自助找到疑似病灶，同时分析患有恶性肿瘤的风险，为女性乳腺癌自测自查提供有价值的参考意见。",
}

const aboutDataEn = {
    bg: require('./img/aboutBG2.jpg'),
    title : "About Us",
    subtitle: "MedVisionCloud——Advancing Women's Healthcare with AI",
    description1: "Women's health can be regarded as the foundation of the development of human society. MedVisionCloud is dedicated to the deep integration of artificial intelligence and the medical industry, using cutting-edge artificial intelligence technology to focus on women's healthcare, and aims to provide free breast-cancer-related AI-assisted medical image interpretation services for everyone.",
    description2: "MedVisionCloud is powered by Dr Lotus AI - the medical imaging artificial intelligence interpretation engine to help users find suspicious lesions and analyze the risk of malignancy. It provides valuable suggestions for self-test of breast cancer in women.",
}

const newsDataEn = {
    title: "MVC Company News",
    subtitle: "The lastest news from Medvision Cloud",
    cardData: [{
        link: "http://huajiantech.com/new.html",
        img: require('./img/u17.jpg'),
        content: "Doctor AI for Breast Imaging Center"
     },{
        link: "https://mp.weixin.qq.com/s/qQNyLgV46LgN0UGOeyyk8A",
        img: require('./img/cardBG1.jpg'),
        content: "AI, Big Data and Cloud development platform for Healthcare"
    },{
        link: "https://mp.weixin.qq.com/s/qQNyLgV46LgN0UGOeyyk8A",
        img: require('./img/cardBG1.jpg'),
        content: "GPU Cloud Platform"
    }]
 }

const footerDataEn = {
    copyright: "Copyright©2018 MedVisionCloud",
    message: "Powered by Dr Lotus AI Medical Image Interpretation Engine",
}


const data = {
    headerInfo: headerInfoEn,
    bannerData: bannerData,
    aboutData: aboutDataEn,
    newsData: newsDataEn,
    footerData: footerDataEn,
}


export {data}
