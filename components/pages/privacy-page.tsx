"use client"

import { useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useLanguage } from "@/components/language-provider"

export default function PrivacyPage() {
  const { language } = useLanguage()

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  {language === "fr" ? "Politique de confidentialité" : "Privacy Policy"}
                </h1>
                <p className="max-w-[600px] text-zinc-400 md:text-xl">
                  {language === "fr" ? "Dernière mise à jour: 21 avril 2025" : "Last updated: April 21, 2025"}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="prose prose-invert max-w-3xl mx-auto">
              {language === "fr" ? (
                <>
                  <p>
                    Datika s'engage à protéger votre vie privée. Cette politique de confidentialité explique comment
                    nous recueillons, utilisons et protégeons vos informations personnelles lorsque vous visitez notre
                    site web ou utilisez nos services.
                  </p>

                  <h2>1. Collecte d'informations</h2>
                  <p>Nous pouvons recueillir les types d'informations suivants:</p>
                  <ul>
                    <li>
                      <strong>Informations personnelles</strong>: Nom, adresse e-mail, numéro de téléphone, et autres
                      informations que vous nous fournissez volontairement.
                    </li>
                    <li>
                      <strong>Informations d'utilisation</strong>: Données sur la façon dont vous interagissez avec
                      notre site web, y compris les pages visitées, le temps passé sur le site, et d'autres
                      statistiques.
                    </li>
                    <li>
                      <strong>Informations techniques</strong>: Adresse IP, type de navigateur, fournisseur de services
                      Internet, pages de référence/sortie, système d'exploitation, horodatage, et données de navigation.
                    </li>
                  </ul>

                  <h2>2. Utilisation des informations</h2>
                  <p>Nous utilisons les informations que nous recueillons pour:</p>
                  <ul>
                    <li>Fournir, exploiter et maintenir notre site web et nos services</li>
                    <li>Améliorer, personnaliser et développer notre site web et nos services</li>
                    <li>Comprendre et analyser comment vous utilisez notre site web</li>
                    <li>Développer de nouveaux produits, services et fonctionnalités</li>
                    <li>
                      Communiquer avec vous, soit directement, soit par l'intermédiaire de l'un de nos partenaires
                    </li>
                    <li>Vous envoyer des e-mails</li>
                    <li>Détecter et prévenir la fraude</li>
                  </ul>

                  <h2>3. Cookies et technologies similaires</h2>
                  <p>
                    Nous utilisons des cookies et des technologies de suivi similaires pour suivre l'activité sur notre
                    site web et stocker certaines informations. Vous pouvez configurer votre navigateur pour refuser
                    tous les cookies ou pour indiquer quand un cookie est envoyé.
                  </p>

                  <h2>4. Partage d'informations</h2>
                  <p>
                    Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles à des tiers, sauf:
                  </p>
                  <ul>
                    <li>Pour fournir des services à votre demande</li>
                    <li>Lorsque nous croyons que la divulgation est appropriée pour se conformer à la loi</li>
                    <li>Pour protéger nos droits, notre propriété ou notre sécurité</li>
                    <li>
                      Avec des fournisseurs de services qui nous aident à exploiter notre site web et nos services
                    </li>
                  </ul>

                  <h2>5. Sécurité des données</h2>
                  <p>
                    Nous mettons en œuvre des mesures de sécurité pour maintenir la sécurité de vos informations
                    personnelles. Cependant, aucune méthode de transmission sur Internet ou méthode de stockage
                    électronique n'est sûre à 100%.
                  </p>

                  <h2>6. Vos droits</h2>
                  <p>Vous avez le droit de:</p>
                  <ul>
                    <li>Accéder aux informations personnelles que nous détenons à votre sujet</li>
                    <li>Corriger toute information inexacte</li>
                    <li>Demander la suppression de vos informations personnelles</li>
                    <li>Vous opposer au traitement de vos informations personnelles</li>
                    <li>Demander la restriction du traitement de vos informations personnelles</li>
                    <li>Demander le transfert de vos informations personnelles</li>
                  </ul>

                  <h2>7. Modifications de cette politique</h2>
                  <p>
                    Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Nous vous
                    informerons de tout changement en publiant la nouvelle politique de confidentialité sur cette page.
                  </p>

                  <h2>8. Nous contacter</h2>
                  <p>
                    Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à:
                    info@datika.ca
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Datika is committed to protecting your privacy. This Privacy Policy explains how we collect, use,
                    and safeguard your personal information when you visit our website or use our services.
                  </p>

                  <h2>1. Information Collection</h2>
                  <p>We may collect the following types of information:</p>
                  <ul>
                    <li>
                      <strong>Personal Information</strong>: Name, email address, phone number, and other information
                      you voluntarily provide to us.
                    </li>
                    <li>
                      <strong>Usage Information</strong>: Data about how you interact with our website, including pages
                      visited, time spent on the site, and other statistics.
                    </li>
                    <li>
                      <strong>Technical Information</strong>: IP address, browser type, internet service provider,
                      referring/exit pages, operating system, date/time stamp, and clickstream data.
                    </li>
                  </ul>

                  <h2>2. Use of Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul>
                    <li>Provide, operate, and maintain our website and services</li>
                    <li>Improve, personalize, and expand our website and services</li>
                    <li>Understand and analyze how you use our website</li>
                    <li>Develop new products, services, and features</li>
                    <li>Communicate with you, either directly or through one of our partners</li>
                    <li>Send you emails</li>
                    <li>Find and prevent fraud</li>
                  </ul>

                  <h2>3. Cookies and Similar Technologies</h2>
                  <p>
                    We use cookies and similar tracking technologies to track activity on our website and store certain
                    information. You can set your browser to refuse all cookies or to indicate when a cookie is being
                    sent.
                  </p>

                  <h2>4. Information Sharing</h2>
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to outside parties except:
                  </p>
                  <ul>
                    <li>To provide services at your request</li>
                    <li>When we believe disclosure is appropriate to comply with the law</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>With service providers who help us operate our website and services</li>
                  </ul>

                  <h2>5. Data Security</h2>
                  <p>
                    We implement security measures to maintain the safety of your personal information. However, no
                    method of transmission over the Internet or method of electronic storage is 100% secure.
                  </p>

                  <h2>6. Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul>
                    <li>Access the personal information we hold about you</li>
                    <li>Correct any information that is inaccurate</li>
                    <li>Request the deletion of your personal information</li>
                    <li>Object to the processing of your personal information</li>
                    <li>Request restriction of processing of your personal information</li>
                    <li>Request transfer of your personal information</li>
                  </ul>

                  <h2>7. Changes to This Policy</h2>
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                    new Privacy Policy on this page.
                  </p>

                  <h2>8. Contact Us</h2>
                  <p>If you have any questions about this Privacy Policy, please contact us at: info@datika.ca</p>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
