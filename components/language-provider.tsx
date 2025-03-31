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
    "services.pageTitle": "Our Services",
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

    // About page
    "about.title": "About",
    "about.subtitle":
      "We're a team of data scientists, analysts, and digital marketers passionate about turning data into growth opportunities.",
    "about.storyTitle": "Our Story",
    "about.storyDescription":
      "Founded in 2018, Datika was born from a simple idea: data should be accessible, understandable, and actionable for businesses of all sizes.",
    "about.missionTitle": "Our Mission",
    "about.missionDescription":
      "To empower businesses with data-driven insights that drive growth, innovation, and competitive advantage in an increasingly digital world.",
    "about.visionTitle": "Our Vision",
    "about.visionDescription":
      "To be the leading provider of integrated data analytics and digital advertising solutions, known for our expertise, innovation, and measurable results.",
    "about.valuesTitle": "Our Values",
    "about.valuesDescription": "The principles that guide our work and relationships with clients.",
    "about.value1Title": "Data Integrity",
    "about.value1Description":
      "We believe in the accuracy, consistency, and reliability of data as the foundation of all our work.",
    "about.value2Title": "Client Partnership",
    "about.value2Description": "We work as an extension of your team, aligning our expertise with your business goals.",
    "about.value3Title": "Excellence",
    "about.value3Description":
      "We strive for excellence in everything we do, from analysis to implementation to client service.",
    "about.value4Title": "Innovation",
    "about.value4Description":
      "We continuously explore new technologies and methodologies to deliver cutting-edge solutions.",

    // Services - Bullets
    "services.analytics.bullet1": "Custom dashboard development",
    "services.analytics.bullet2": "Predictive analytics and forecasting",
    "services.analytics.bullet3": "Data integration and ETL processes",
    "services.analytics.bullet4": "Machine learning model development",
    "services.marketing.bullet1": "Paid search (PPC) management",
    "services.marketing.bullet2": "Social media advertising",
    "services.marketing.bullet3": "Programmatic display advertising",
    "services.marketing.bullet4": "Conversion rate optimization",
    "services.bi.bullet1": "Interactive dashboard development",
    "services.bi.bullet2": "Real-time data visualization",
    "services.bi.bullet3": "Custom reporting solutions",
    "services.bi.bullet4": "Data storytelling and presentation",
    "services.growth.bullet1": "Market opportunity analysis",
    "services.growth.bullet2": "Customer segmentation and targeting",
    "services.growth.bullet3": "Competitive intelligence",
    "services.growth.bullet4": "Growth roadmap development",

    // Blog
    "blog.title": "Blog",
    "blog.subtitle": "Insights, trends, and best practices in data analytics and digital advertising.",
    "blog.readMore": "Read More",
    "blog.category": "Category",
    "blog.date": "Date",
    "blog.author": "Author",
  },
  fr: {
    // Header
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.services": "Services",
    "nav.blog": "Blog",
    "nav.contact": "Contactez-nous",
    "nav.language": "English",

    // Homepage
    "hero.title": "Transformez vos données en insights exploitables",
    "hero.subtitle":
      "Datika aide les entreprises à exploiter la puissance de l'analyse de données et de la publicité numérique pour stimuler la croissance et prendre des décisions éclairées.",
    "cta.getStarted": "Commencer",
    "cta.exploreServices": "Explorer les services",
    "services.title": "Solutions basées sur les données",
    "services.subtitle":
      "Nous offrons des services complets d'analyse et de publicité pour aider votre entreprise à prospérer dans le paysage numérique.",
    "service.dataAnalytics.title": "Analyse de données",
    "service.dataAnalytics.subtitle": "Transformez vos données brutes en insights significatifs",
    "service.dataAnalytics.description":
      "Nos solutions d'analyse avancées vous aident à comprendre le comportement des clients, les tendances du marché et la performance de l'entreprise pour prendre des décisions basées sur les données.",
    "service.marketing.title": "Marketing de performance",
    "service.marketing.subtitle": "Maximisez votre ROI avec des campagnes basées sur les données",
    "service.marketing.description":
      "Nos stratégies de marketing de performance sont conçues pour optimiser vos dépenses publicitaires et offrir des résultats mesurables sur tous les canaux numériques.",
    "service.bi.title": "Business Intelligence",
    "service.bi.subtitle": "Visualisez vos données pour une meilleure prise de décision",
    "service.bi.description":
      "Nos solutions de BI fournissent des tableaux de bord interactifs et des rapports qui rendent les données complexes accessibles et exploitables pour toute votre organisation.",
    "service.growth.title": "Stratégie de croissance",
    "service.growth.subtitle": "Développez votre entreprise avec des stratégies basées sur les données",
    "service.growth.description":
      "Nous vous aidons à identifier les opportunités de croissance et à développer des stratégies qui exploitent vos actifs de données pour atteindre une croissance durable.",
    "cta.learnMore": "En savoir plus",
    "cta.ready": "Prêt à commencer votre parcours de données?",
    "cta.readySubtitle":
      "Planifiez une consultation gratuite pour discuter de la façon dont nos services d'analyse de données peuvent aider votre entreprise à se développer.",
    "cta.schedule": "Planifier une consultation",

    // Footer
    "footer.description": "Transformer les données en insights exploitables pour les entreprises de toutes tailles.",
    "footer.services": "Services",
    "footer.dataAnalytics": "Analyse de données",
    "footer.digitalAdvertising": "Publicité numérique",
    "footer.businessIntelligence": "Business Intelligence",
    "footer.growthStrategy": "Stratégie de croissance",
    "footer.company": "Entreprise",
    "footer.aboutUs": "À propos de nous",
    "footer.blog": "Blog",
    "footer.contact": "Contact",
    "footer.copyright": "Tous droits réservés.",

    // Contact
    "contact.title": "Contactez-nous",
    "contact.subtitle":
      "Vous avez une question ou êtes prêt à commencer votre parcours de données? Nous sommes là pour vous aider.",
    "contact.info": "Informations de contact",
    "contact.infoSubtitle": "Contactez-nous par l'un de ces canaux ou planifiez une réunion.",
    "contact.email": "Email",
    "contact.phone": "Téléphone",
    "contact.location": "Emplacement",
    "contact.hours": "Lundi - Vendredi: 9h - 18h",
    "contact.schedule": "Planifier une consultation",
    "contact.scheduleSubtitle":
      "Réservez un moment qui vous convient et discutons de la façon dont nous pouvons aider votre entreprise à exploiter les données.",
    "contact.meeting": "Planifier une réunion",

    // Services
    "services.pageTitle": "Nos Services",
    "services.pageSubtitle":
      "Solutions complètes d'analyse de données et de publicité numérique adaptées aux besoins de votre entreprise.",
    "services.analytics.title": "Transformez les données brutes en insights exploitables",
    "services.analytics.description":
      "Nos services d'analyse de données vous aident à comprendre la performance de votre entreprise, le comportement des clients et les tendances du marché pour prendre des décisions éclairées.",
    "services.marketing.title": "Des campagnes basées sur les données qui convertissent",
    "services.marketing.description":
      "Nos services de publicité numérique utilisent l'analyse de données pour créer des campagnes ciblées qui maximisent le ROI et génèrent des conversions.",
    "services.bi.title": "Visualisez vos données pour de meilleures décisions",
    "services.bi.description":
      "Nos solutions de BI fournissent des tableaux de bord interactifs et des rapports qui rendent les données complexes accessibles et exploitables pour toute votre organisation.",
    "services.growth.title": "Développez votre entreprise avec des stratégies basées sur les données",
    "services.growth.description":
      "Nous vous aidons à identifier les opportunités de croissance et à développer des stratégies qui exploitent vos actifs de données pour atteindre une croissance durable.",
    "services.transform": "Prêt à transformer vos données?",
    "services.transformSubtitle":
      "Contactez-nous aujourd'hui pour discuter de la façon dont nos services peuvent aider votre entreprise à se développer.",

    // About page
    "about.title": "À propos",
    "about.subtitle":
      "Nous sommes une équipe de data scientists, d'analystes et de spécialistes du marketing numérique passionnés par la transformation des données en opportunités de croissance.",
    "about.storyTitle": "Notre Histoire",
    "about.storyDescription":
      "Fondée en 2018, Datika est née d'une idée simple : les données doivent être accessibles, compréhensibles et exploitables pour les entreprises de toutes tailles.",
    "about.missionTitle": "Notre Mission",
    "about.missionDescription":
      "Permettre aux entreprises d'exploiter des insights basés sur les données qui favorisent la croissance, l'innovation et l'avantage concurrentiel dans un monde de plus en plus numérique.",
    "about.visionTitle": "Notre Vision",
    "about.visionDescription":
      "Devenir le principal fournisseur de solutions intégrées d'analyse de données et de publicité numérique, reconnu pour notre expertise, notre innovation et nos résultats mesurables.",
    "about.valuesTitle": "Nos Valeurs",
    "about.valuesDescription": "Les principes qui guident notre travail et nos relations avec les clients.",
    "about.value1Title": "Intégrité des Données",
    "about.value1Description":
      "Nous croyons en l'exactitude, la cohérence et la fiabilité des données comme fondement de tout notre travail.",
    "about.value2Title": "Partenariat Client",
    "about.value2Description":
      "Nous travaillons comme une extension de votre équipe, alignant notre expertise sur vos objectifs commerciaux.",
    "about.value3Title": "Excellence",
    "about.value3Description":
      "Nous visons l'excellence dans tout ce que nous faisons, de l'analyse à la mise en œuvre en passant par le service client.",
    "about.value4Title": "Innovation",
    "about.value4Description":
      "Nous explorons continuellement de nouvelles technologies et méthodologies pour fournir des solutions de pointe.",

    // Services - Bullets
    "services.analytics.bullet1": "Développement de tableaux de bord personnalisés",
    "services.analytics.bullet2": "Analyses prédictives et prévisions",
    "services.analytics.bullet3": "Intégration de données et processus ETL",
    "services.analytics.bullet4": "Développement de modèles d'apprentissage automatique",
    "services.marketing.bullet1": "Gestion des annonces payantes (PPC)",
    "services.marketing.bullet2": "Publicité sur les réseaux sociaux",
    "services.marketing.bullet3": "Publicité programmatique",
    "services.marketing.bullet4": "Optimisation du taux de conversion",
    "services.bi.bullet1": "Développement de tableaux de bord interactifs",
    "services.bi.bullet2": "Visualisation des données en temps réel",
    "services.bi.bullet3": "Solutions de rapports personnalisés",
    "services.bi.bullet4": "Narration et présentation des données",
    "services.growth.bullet1": "Analyse des opportunités de marché",
    "services.growth.bullet2": "Segmentation et ciblage des clients",
    "services.growth.bullet3": "Intelligence concurrentielle",
    "services.growth.bullet4": "Développement de feuilles de route de croissance",

    // Blog
    "blog.title": "Blog",
    "blog.subtitle": "Perspectives, tendances et meilleures pratiques en analyse de données et publicité numérique.",
    "blog.readMore": "Lire Plus",
    "blog.category": "Catégorie",
    "blog.date": "Date",
    "blog.author": "Auteur",
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

