import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { visibleTeam, getTeamMember } from '@/data/team'

export default function TeamMemberPage({ slug }) {
  const router = useRouter()
  const { t, lang } = useTranslation('common')
  const tt = useTranslation('team').t

  if (router.isFallback || !slug) {
    return null
  }

  const member = getTeamMember(slug)
  if (!member || member.hidden) {
    return null
  }

  const role = member.roles.map((r) => t(r)).join(' / ')
  const bioYears = new Date().getFullYear() - 2009
  const bio =
    tt(`${slug}.bio`, { years: bioYears }, { returnObjects: true }) || []
  const back = tt('back')
  const kontaktLabel = tt('kontakt')
  const kompetanseomraderLabel = tt('kompetanseomrader')
  const homeHref = lang === 'no' ? '/' : `/${lang}`
  const hasContact = member.email || member.phoneDisplay
  const hasPracticeAreas = member.practiceAreas && member.practiceAreas.length > 0

  return (
    <>
      <Head>
        <title>{`${member.name} — Flemmen & Co`}</title>
        <meta
          name="description"
          content={`${member.name}, ${role} — Flemmen & Co Advokatfirma`}
        />
        <link
          rel="canonical"
          href={`https://flemmenco.no/medarbeidere/${slug}`}
        />
      </Head>
      <Header />
      <main className="bg-white sm:p-12 sm:pt-20 md:px-20 md:pb-20 lg:pt-0">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-0">
          <nav className="mb-12 text-sm leading-6 text-gray-500">
            <Link
              href={homeHref}
              className="transition-colors duration-200 hover:text-gray-900"
            >
              ← {back}
            </Link>
          </nav>

          <header className="border-b border-gray-200 pb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              {role}
            </p>
            <h1 className="mt-3 text-4xl font-extrabold uppercase tracking-tight text-gray-900 sm:text-5xl">
              {member.name}
            </h1>
          </header>

          <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-3">
            <article className="lg:col-span-2">
              {bio.map((paragraph, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? 'text-lg leading-8 text-gray-800'
                      : 'mt-6 text-base leading-7 text-gray-700'
                  }
                >
                  {paragraph}
                </p>
              ))}
            </article>

            <aside className="space-y-10 lg:col-span-1">
              {hasContact && (
                <section>
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                    {kontaktLabel}
                  </h2>
                  <dl className="mt-4 space-y-2 text-sm leading-6 text-gray-700">
                    {member.email && (
                      <div>
                        <dt className="sr-only">Email</dt>
                        <dd>
                          <Link
                            className="font-semibold transition-colors duration-200 hover:text-gray-500"
                            href={`mailto:${member.email}`}
                          >
                            {member.email}
                          </Link>
                        </dd>
                      </div>
                    )}
                    {member.phoneDisplay && (
                      <div>
                        <dt className="sr-only">Phone</dt>
                        <dd>
                          <Link
                            className="transition-colors duration-200 hover:text-gray-500"
                            href={`tel:${member.phoneTel}`}
                          >
                            {member.phoneDisplay}
                          </Link>
                        </dd>
                      </div>
                    )}
                  </dl>
                </section>
              )}

              {hasPracticeAreas && (
                <section>
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                    {kompetanseomraderLabel}
                  </h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {member.practiceAreas.map((key) => (
                      <li
                        key={key}
                        className="bg-gray-100 px-3 py-1.5 text-sm text-gray-800"
                      >
                        {t(key)}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </aside>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

export async function getStaticPaths({ locales }) {
  const paths = []
  for (const locale of locales) {
    for (const member of visibleTeam) {
      paths.push({ params: { slug: member.slug }, locale })
    }
  }
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  return { props: { slug: params.slug } }
}
