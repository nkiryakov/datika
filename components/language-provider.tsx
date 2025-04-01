"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "fr"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.blog": "Blog",
    "nav.contact": "Contact Us",
    "nav.language": "Français",

    // Homepage
    "hero.title": "Transform Your Data into Actionable Insights",
    "hero.subtitle":
      "Datika helps businesses harness the power of data analytics and digital advertising to drive growth and make informed decisions.",
    "cta.getStarted": "Get Started",
    "cta.exploreServices": "Explore Services",
    "services.title": "Data-Driven Solutions",
    "services.subtitle":
      "We offer comprehensive analytics and advertising services to help your business thrive in the digital landscape.",
    "service.dataAnalytics.title": "Data Analytics",
    "service.dataAnalytics.subtitle": "Turn your raw data into meaningful insights",
    "service.dataAnalytics.description":
      "Our advanced analytics solutions help you understand customer behavior, market trends, and business performance to make data-driven decisions.",
    "service.marketing.title": "Performance Marketing",
    "service.marketing.subtitle": "Maximize your ROI with data-driven campaigns",
    "service.marketing.description":
      "Our performance marketing strategies are designed to optimize your ad spend and deliver measurable results across all digital channels.",
    "service.bi.title": "Business Intelligence",
    "service.bi.subtitle": "Visualize your data for better decision making",
    "service.bi.description":
      "Our BI solutions provide interactive dashboards and reports that make complex data accessible and actionable for your entire organization.",
    "service.growth.title": "Growth Strategy",
    "service.growth.subtitle": "Scale your business with data-backed strategies",
    "service.growth.description":
      "We help you identify growth opportunities and develop strategies that leverage your data assets to achieve sustainable business growth.",
    "cta.learnMore": "Learn more",
    "cta.ready": "Ready to Start Your Data Journey?",
    "cta.readySubtitle":
      "Schedule a free consultation to discuss how our data analytics services can help your business grow.",
    "cta.schedule": "Schedule a Consultation",

    // Footer
    "footer.description": "Transforming data into actionable insights for businesses of all sizes.",
    "footer.services": "Services",
    "footer.dataAnalytics": "Data Analytics",
    "footer.digitalAdvertising": "Digital Advertising",
    "footer.businessIntelligence": "Business Intelligence",
    "footer.growthStrategy": "Growth Strategy",
    "footer.company": "Company",
    "footer.aboutUs": "About Us",
    "footer.blog": "Blog",
    "footer.contact": "Contact",
    "footer.copyright": "All rights reserved.",

    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle": "Have a question or ready to start your data journey? We're here to help.",
    "contact.info": "Contact Information",
    "contact.infoSubtitle": "Reach out to us through any of these channels or schedule a meeting.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.hours": "Monday - Friday: 9am - 6pm",
    "contact.schedule": "Schedule a Consultation",
    "contact.scheduleSubtitle":
      "Book a time that works for you and let's discuss how we can help your business leverage data.",
    "contact.meeting": "Schedule a Meeting",

    // Services
    "services.pageTitle": "Our",
    "services.pageSubtitle":
      "Comprehensive data analytics and digital advertising solutions tailored to your business needs.",
    "services.analytics.title": "Turn Raw Data into Actionable Insights",
    "services.analytics.description":
      "Our data analytics services help you understand your business performance, customer behavior, and market trends to make informed decisions.",
    "services.marketing.title": "Data-Driven Campaigns That Convert",
    "services.marketing.description":
      "Our digital advertising services leverage data analytics to create targeted campaigns that maximize ROI and drive conversions.",
    "services.bi.title": "Visualize Your Data for Better Decisions",
    "services.bi.description":
      "Our BI solutions provide interactive dashboards and reports that make complex data accessible and actionable for your entire organization.",
    "services.growth.title": "Scale Your Business with Data-Backed Strategies",
    "services.growth.description":
      "We help you identify growth opportunities and develop strategies that leverage your data assets to achieve sustainable business growth.",
    "services.transform": "Ready to Transform Your Data?",
    "services.transformSubtitle": "Contact us today to discuss how our services can help your business grow.",

    // Services bullet points
    "services.analytics.point1": "Custom dashboard development",
    "services.analytics.point2": "Predictive analytics and forecasting",
    "services.analytics.point3": "Data integration and ETL processes",
    "services.marketing.point1": "Paid search (PPC) management",
    "services.marketing.point2": "Social media advertising",
    "services.marketing.point3": "Programmatic display advertising",
    "services.marketing.point4": "Conversion rate optimization",
    "services.bi.point1": "Interactive dashboard development",
    "services.bi.point2": "Real-time data visualization",
    "services.bi.point3": "Custom reporting solutions",
    "services.bi.point4": "Data storytelling and presentation",
    "services.growth.point1": "Market opportunity analysis",
    "services.growth.point2": "Customer segmentation and targeting",
    "services.growth.point3": "Competitive intelligence",
    "services.growth.point4": "Growth roadmap development",

    // About page
    "about.title": "About",
    "about.subtitle":
      "We're a team of data scientists, analysts, and digital marketers passionate about turning data into growth opportunities.",
    "about.story.title": "Our Story",
    "about.story.description":
      "Founded in 2025, Datika was born from a simple idea: data should be accessible, understandable, and actionable for businesses of all sizes.",
    "about.mission.title": "Our Mission",
    "about.mission.description":
      "To empower businesses with data-driven insights that drive growth, innovation, and competitive advantage in an increasingly digital world.",
    "about.vision.title": "Our Vision",
    "about.vision.description":
      "To be the leading provider of integrated data analytics and digital advertising solutions, known for our expertise, innovation, and measurable results.",
    "about.values.title": "Our Values",
    "about.values.subtitle": "The principles that guide our work and relationships with clients.",
    "about.value.integrity.title": "Data Integrity",
    "about.value.integrity.description":
      "We believe in the accuracy, consistency, and reliability of data as the foundation of all our work.",
    "about.value.partnership.title": "Client Partnership",
    "about.value.partnership.description":
      "We work as an extension of your team, aligning our expertise with your business goals.",
    "about.value.excellence.title": "Excellence",
    "about.value.excellence.description":
      "We strive for excellence in everything we do, from analysis to implementation to client service.",
    "about.value.innovation.title": "Innovation",
    "about.value.innovation.description":
      "We continuously explore new technologies and methodologies to deliver cutting-edge solutions.",

    // Blog page
    "blog.title": "Blog",
    "blog.subtitle": "Insights, trends, and best practices in data analytics and digital advertising.",
    "blog.readMore": "Read More",
  },
  fr: {
    // Header
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.services": "Services",
    "nav.blog": "Blogue",
    "nav.contact": "Contactez-nous",
    "nav.language": "English",

    // Homepage
    "hero.title": "Transformez Vos Données et Prenez Action",
    "hero.subtitle":
      "Datika aide les entreprises à exploiter la puissance de l'analyse de données et de la publicité numérique pour stimuler leur croissance et prendre des décisions éclairées.",
    "cta.getStarted": "Commencer",
    "cta.exploreServices": "Découvrir les Services",
    "services.title": "Des solutions basées sur les données pour une prise de décision plus intelligente",
    "services.subtitle":
      "Des analyses avancées, une publicité performante et une stratégie optimisée pour maximiser votre impact.",
    "service.dataAnalytics.title": "Analyse de Données",
    "service.dataAnalytics.subtitle": "Transformez vos données en insights clairs et exploitables",
    "service.dataAnalytics.description":
      "Transformez vos données en insights clairs et exploitables grâce à nos outils d'analyse avancés.",
    "service.marketing.title": "Marketing de Performance",
    "service.marketing.subtitle": "Optimisez vos campagnes publicitaires",
    "service.marketing.description":
      "Optimisez vos campagnes publicitaires et maximisez votre retour sur investissement avec des stratégies basées sur les données.",
    "service.bi.title": "Intelligence d'Affaires",
    "service.bi.subtitle": "Visualisez vos données pour une meilleure prise de décision",
    "service.bi.description":
      "Accédez à des tableaux de bord interactifs et des rapports détaillés pour mieux comprendre votre entreprise.",
    "service.growth.title": "Stratégie de Croissance",
    "service.growth.subtitle": "Développez votre entreprise avec des stratégies basées sur les données",
    "service.growth.description":
      "Développez votre entreprise en tirant parti d'une approche axée sur les données et l'innovation.",
    "cta.learnMore": "En savoir plus",
    "cta.ready": "Prêt à Exploiter le Pouvoir de Vos Données ?",
    "cta.readySubtitle":
      "Contactez-nous dès aujourd'hui pour découvrir comment nous pouvons transformer vos données en opportunités de croissance.",
    "cta.schedule": "Planifier une Consultation",

    // Footer
    "footer.description": "Transformer les données en information exploitable pour les entreprises de toutes tailles.",
    "footer.services": "Services",
    "footer.dataAnalytics": "Analyse de données",
    "footer.digitalAdvertising": "Publicité numérique",
    "footer.businessIntelligence": "Intelligence d'Affaires",
    "footer.growthStrategy": "Stratégie de croissance",
    "footer.company": "Entreprise",
    "footer.aboutUs": "À propos de nous",
    "footer.blog": "Blogue",
    "footer.contact": "Contact",
    "footer.copyright": "Tous droits réservés.",

    // Contact
    "contact.title": "Contactez-nous",
    "contact.subtitle":
      "Vous avez une question ou êtes prêt à commencer votre parcours de données? Nous sommes là pour vous aider.",
    "contact.info": "Informations de contact",
    "contact.infoSubtitle": "Contactez-nous ou planifiez une réunion.",
    "contact.email": "Email",
    "contact.phone": "Téléphone",
    "contact.location": "Emplacement",
    "contact.hours": "Lundi - Vendredi: 9h - 18h",
    "contact.schedule": "Planifier une consultation",
    "contact.scheduleSubtitle":
      "Réservez un moment qui vous convient et discutons de la façon dont nous pouvons aider votre entreprise à exploiter les données.",
    "contact.meeting": "Planifier une réunion",

    // Services
    "services.pageTitle": "Nos",
    "services.pageSubtitle": "Solutions Basées sur les Données",
    "services.analytics.title": "Transformez vos données en informations exploitables",
    "services.analytics.description":
      "Nos solutions analytiques avancées vous aident à comprendre le comportement des clients, les tendances du marché et la performance de l'entreprise pour prendre des décisions éclairées.",
    "services.analytics.point1": "Collecte et traitement des données",
    "services.analytics.point2": "Analyse prédictive et modélisation",
    "services.analytics.point3": "Tableaux de bord interactifs",
    "services.marketing.title": "Maximisez votre retour sur investissement avec des campagnes basées sur les données",
    "services.marketing.description":
      "Nos stratégies de marketing de performance sont conçues pour optimiser vos dépenses publicitaires et fournir des résultats mesurables sur tous les canaux numériques.",
    "services.marketing.point1": "Publicité ciblée (Google Ads, Social Ads)",
    "services.marketing.point2": "Optimisation du taux de conversion",
    "services.marketing.point3": "Analyse des performances des campagnes",
    "services.marketing.point4": "Stratégies de remarketing personnalisées",
    "services.bi.title": "Visualisez vos données pour une meilleure prise de décision",
    "services.bi.description":
      "Nos solutions BI fournissent des tableaux de bord et des rapports interactifs qui rendent les données complexes accessibles et exploitables pour l'ensemble de votre organisation.",
    "services.bi.point1": "Création de tableaux de bord sur mesure",
    "services.bi.point2": "Analyse des KPI et reporting automatisé",
    "services.bi.point3": "Stratégies de croissance basées sur les données",
    "services.bi.point4": "Visualisation de données interactives",
    "services.growth.title": "Développez votre entreprise avec des stratégies basées sur les données",
    "services.growth.description":
      "Nous vous aidons à identifier les opportunités de croissance et à développer des stratégies qui exploitent vos actifs de données pour atteindre une croissance durable.",
    "services.growth.point1": "Analyse des opportunités de marché",
    "services.growth.point2": "Segmentation et ciblage de clientèle",
    "services.growth.point3": "Intelligence concurrentielle",
    "services.growth.point4": "Développement de feuilles de route stratégiques",
    "services.transform": "Prêt à Exploiter le Pouvoir de Vos Données ?",
    "services.transformSubtitle":
      "Contactez-nous dès aujourd'hui pour découvrir comment nous pouvons transformer vos données en opportunités de croissance.",

    // About page
    "about.title": "À Propos de",
    "about.subtitle": "Nous Transformons les Données en Opportunités",
    "about.story.title": "Qui Sommes-Nous ?",
    "about.story.description":
      "Nous sommes une équipe passionnée d'experts en données et en marketing numérique, dédiée à transformer des informations complexes en stratégies exploitables.",
    "about.mission.title": "Notre Mission",
    "about.mission.description":
      "Aider les entreprises à prendre des décisions éclairées grâce à des analyses précises et des stratégies optimisées.",
    "about.vision.title": "Notre Approche",
    "about.vision.description":
      "Associer expertise analytique, technologie avancée et innovation pour maximiser la valeur de vos données.",
    "about.values.title": "Pourquoi Datika ?",
    "about.values.subtitle":
      "Les raisons de faire appel à nous pour vos besoins en analyse de données et marketing numérique.",
    "about.value.integrity.title": "Intégrité des Données",
    "about.value.integrity.description":
      "Nous croyons que l'exactitude, la cohérence et la fiabilité de nos analyses sont au coeur de notre mission.",
    "about.value.partnership.title": "Partenariat Client",
    "about.value.partnership.description":
      "Nous travaillons comme une extension de votre équipe, alignant notre expertise sur vos objectifs commerciaux.",
    "about.value.excellence.title": "Excellence",
    "about.value.excellence.description":
      "Nous visons l'excellence dans tout ce que nous faisons, de l'analyse à la mise en œuvre en passant par le service client.",
    "about.value.innovation.title": "Innovation",
    "about.value.innovation.description":
      "Nous explorons continuellement de nouvelles technologies et méthodologies pour fournir des solutions de pointe.",

    // Blog page
    "blog.title": "Blogue",
    "blog.subtitle": "Astuces, tendences et meilleures pratiques en analyse de données et publicité numérique.",
    "blog.readMore": "Lire Plus",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    if (!key || typeof key !== "string") {
      console.warn("Invalid translation key:", key)
      return ""
    }

    const translationSet = translations[language] || translations.en
    return translationSet[key as keyof typeof translationSet] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

