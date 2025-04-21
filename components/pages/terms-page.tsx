"use client"

import { useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useLanguage } from "@/components/language-provider"

export default function TermsPage() {
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
                  {language === "fr" ? "Conditions d'utilisation" : "Terms of Service"}
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
                  <h2>1. Acceptation des conditions</h2>
                  <p>
                    En accédant au site web de Datika à l'adresse datika.com, vous acceptez d'être lié par ces
                    conditions d'utilisation, toutes les lois et réglementations applicables, et vous acceptez que vous
                    êtes responsable du respect des lois locales applicables. Si vous n'acceptez pas l'une de ces
                    conditions, vous êtes interdit d'utiliser ou d'accéder à ce site.
                  </p>

                  <h2>2. Utilisation de la licence</h2>
                  <p>
                    La permission est accordée de télécharger temporairement une copie des documents sur le site web de
                    Datika pour un visionnement personnel, non commercial et transitoire uniquement. Il s'agit de
                    l'octroi d'une licence, et non d'un transfert de titre, et sous cette licence, vous ne pouvez pas:
                  </p>
                  <ul>
                    <li>modifier ou copier les documents;</li>
                    <li>
                      utiliser les documents à des fins commerciales ou pour toute présentation publique (commerciale ou
                      non commerciale);
                    </li>
                    <li>tenter de décompiler ou de désosser tout logiciel contenu sur le site web de Datika;</li>
                    <li>supprimer tout droit d'auteur ou autres notations de propriété des documents; ou</li>
                    <li>
                      transférer les documents à une autre personne ou "refléter" les documents sur tout autre serveur.
                    </li>
                  </ul>

                  <h2>3. Avis de non-responsabilité</h2>
                  <p>
                    Les documents sur le site web de Datika sont fournis "tels quels". Datika ne donne aucune garantie,
                    expresse ou implicite, et décline et annule par la présente toutes les autres garanties, y compris,
                    sans limitation, les garanties ou conditions implicites de qualité marchande, d'adéquation à un
                    usage particulier, ou de non-violation de la propriété intellectuelle ou autre violation des droits.
                  </p>

                  <h2>4. Limitations</h2>
                  <p>
                    En aucun cas, Datika ou ses fournisseurs ne seront responsables de tout dommage (y compris, sans
                    limitation, les dommages pour perte de données ou de profit, ou en raison d'une interruption
                    d'activité) découlant de l'utilisation ou de l'incapacité d'utiliser les documents sur le site web
                    de Datika, même si Datika ou un représentant autorisé de Datika a été informé oralement ou par écrit
                    de la possibilité de tels dommages.
                  </p>

                  <h2>5. Révisions et errata</h2>
                  <p>
                    Les documents apparaissant sur le site web de Datika pourraient inclure des erreurs techniques,
                    typographiques ou photographiques. Datika ne garantit pas que l'un des documents sur son site web
                    est exact, complet ou à jour. Datika peut apporter des modifications aux documents contenus sur son
                    site web à tout moment sans préavis.
                  </p>

                  <h2>6. Liens</h2>
                  <p>
                    Datika n'a pas examiné tous les sites liés à son site web et n'est pas responsable du contenu de ces
                    sites liés. L'inclusion de tout lien n'implique pas l'approbation par Datika du site. L'utilisation
                    de tout site web lié est aux risques de l'utilisateur.
                  </p>

                  <h2>7. Modifications des conditions d'utilisation</h2>
                  <p>
                    Datika peut réviser ces conditions d'utilisation de son site web à tout moment sans préavis. En
                    utilisant ce site web, vous acceptez d'être lié par la version alors en vigueur de ces conditions
                    d'utilisation.
                  </p>

                  <h2>8. Loi applicable</h2>
                  <p>
                    Toute réclamation relative au site web de Datika sera régie par les lois de la province de Québec et
                    les lois du Canada, sans égard aux dispositions relatives aux conflits de lois.
                  </p>
                </>
              ) : (
                <>
                  <h2>1. Terms</h2>
                  <p>
                    By accessing the Datika website at datika.com, you are agreeing to be bound by these terms of
                    service, all applicable laws and regulations, and agree that you are responsible for compliance with
                    any applicable local laws. If you do not agree with any of these terms, you are prohibited from
                    using or accessing this site.
                  </p>

                  <h2>2. Use License</h2>
                  <p>
                    Permission is granted to temporarily download one copy of the materials on Datika's website for
                    personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of
                    title, and under this license you may not:
                  </p>
                  <ul>
                    <li>modify or copy the materials;</li>
                    <li>
                      use the materials for any commercial purpose, or for any public display (commercial or
                      non-commercial);
                    </li>
                    <li>attempt to decompile or reverse engineer any software contained on Datika's website;</li>
                    <li>remove any copyright or other proprietary notations from the materials; or</li>
                    <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                  </ul>

                  <h2>3. Disclaimer</h2>
                  <p>
                    The materials on Datika's website are provided on an 'as is' basis. Datika makes no warranties,
                    expressed or implied, and hereby disclaims and negates all other warranties including, without
                    limitation, implied warranties or conditions of merchantability, fitness for a particular purpose,
                    or non-infringement of intellectual property or other violation of rights.
                  </p>

                  <h2>4. Limitations</h2>
                  <p>
                    In no event shall Datika or its suppliers be liable for any damages (including, without limitation,
                    damages for loss of data or profit, or due to business interruption) arising out of the use or
                    inability to use the materials on Datika's website, even if Datika or a Datika authorized
                    representative has been notified orally or in writing of the possibility of such damage.
                  </p>

                  <h2>5. Revisions and Errata</h2>
                  <p>
                    The materials appearing on Datika's website could include technical, typographical, or photographic
                    errors. Datika does not warrant that any of the materials on its website are accurate, complete or
                    current. Datika may make changes to the materials contained on its website at any time without
                    notice.
                  </p>

                  <h2>6. Links</h2>
                  <p>
                    Datika has not reviewed all of the sites linked to its website and is not responsible for the
                    contents of any such linked site. The inclusion of any link does not imply endorsement by Datika of
                    the site. Use of any such linked website is at the user's own risk.
                  </p>

                  <h2>7. Modifications to Terms of Service</h2>
                  <p>
                    Datika may revise these terms of service for its website at any time without notice. By using this
                    website you are agreeing to be bound by the then current version of these terms of service.
                  </p>

                  <h2>8. Governing Law</h2>
                  <p>
                    Any claim relating to Datika's website shall be governed by the laws of the Province of Quebec and
                    the laws of Canada, without regard to its conflict of law provisions.
                  </p>
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
