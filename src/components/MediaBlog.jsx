import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export function MediaBlog() {
  const { t } = useTranslation('common')
  const articleTitle01 = t('article_title_01')
  const articleDate01 = t('article_date_01')
  const articleText01 = t('article_text_01')
  const articleTitle02 = t('article_title_02')
  const articleDate02 = t('article_date_02')
  const articleText02 = t('article_text_02')
  const articleTitle03 = t('article_title_03')
  const articleDate03 = t('article_date_03')
  const articleText03 = t('article_text_03')
  const articleTitle04 = t('article_title_04')
  const articleDate04 = t('article_date_04')
  const articleText04 = t('article_text_04')
  const articleTitle05 = t('article_title_05')
  const articleDate05 = t('article_date_05')
  const articleText05 = t('article_text_05')
  const articleTitle06 = t('article_title_06')
  const articleDate06 = t('article_date_06')
  const articleText06 = t('article_text_06')
  const articleTitle07 = t('article_title_07')
  const articleText07 = t('article_text_07')

  const articles = [
    {
      id: 1,
      title: articleTitle01,
      articleUrl:
        'https://www.advokatbladet.no/elden-oppstart-av-advokatkontor-partner/partner-forlater-elden-etter-16-ar-starter-for-seg-selv/199683',
      imageUrl: '/media/article_3.webp',
      content: articleText01,
      date: articleDate01,
      dateTime: '2023-09-01',
    },
    {
      id: 2,
      title: articleTitle02,
      articleUrl:
        'https://advokatwatch.no/nyheter/karriere/article16395400.ece',
      imageUrl: '/media/temp.webp',
      content: articleText02,
      date: articleDate02,
      dateTime: '2023-08-31',
    },
    {
      id: 3,
      title: articleTitle03,
      articleUrl:
        'https://www.finansavisen.no/jus/2023/08/31/8032852/flemmen-forlater-elden-med-alle-egne-klienter?zephr_sso_ott=hTqGBr',
      imageUrl: '/media/article_2.webp',
      content: articleText03,
      date: articleDate03,
      dateTime: '2023-08-31',
    },
    {
      id: 4,
      title: articleTitle04,
      articleUrl:
        'https://www.dn.no/jus/christian-flemmen-johansen/advokatfirmaet-elden/elden/toppadvokat-forlater-elden/2-1-1508933',
      imageUrl: '/media/article_1.webp',
      content: articleText04,
      date: articleDate04,
      dateTime: '2023-08-30',
    },
    {
      id: 7,
      title: articleTitle05,
      articleUrl:
        'https://www.finansavisen.no/jus/2023/10/05/8039062/flemmen-gar-sin-egen-vei?zephr_sso_ott=PqfDLl',
      imageUrl: '/media/Forside_Kapital_CFJ.png',
      content: articleText05,
      date: articleDate05,
      dateTime: '2023-10-05',
    },
    {
      id: 6,
      title: articleTitle06,
      articleUrl:
        'https://www.finansavisen.no/jus/2024/06/22/8145720/konsulent-frifunnet-for-bedragerier?zephr_sso_ott=XwRgN1',
      imageUrl: '/media/article_6.webp',
      content: articleText06,
      date: articleDate06,
      dateTime: '2024-06-22',
    },
    {
      id: 5,
      title: articleTitle07,
      articleUrl: 'https://forsvarsadvokat.no/',
      imageUrl: '/media/article_0.webp',
      content: articleText07,
      date: '',
      dateTime: '2007-09-01',
    },
  ]

  return (
    <div
      id="media"
      className="mx-auto max-w-7xl bg-gray-900 px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <ul role="list" className="divide-y divide-gray-100/10">
          {articles.map((article, i) => {
            const isVertical = article.id === 7
            // For article 7, we set the default mobile aspect ratio to vertical (aspect-[3/4])
            const containerClasses = isVertical
              ? 'aspect-[3/4] relative w-24 shrink-0 sm:aspect-[3/4] lg:aspect-[3/4] lg:w-64'
              : 'aspect-aspect-square relative w-24 shrink-0 sm:aspect-[2/1] lg:aspect-square lg:w-64'

            return (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  initialDelay: 0.3,
                  duration: 0.7,
                  delay: i * 0.3,
                  ease: 'easeOut',
                }}
                className="flex gap-x-4 py-8"
              >
                <div className={containerClasses}>
                  <Image
                    className="h-24 w-24 flex-none rounded-none bg-gray-50 object-cover"
                    src={article.imageUrl}
                    alt=""
                    fill
                  />
                </div>
                <div className="flex-auto">
                  <div className="flex items-baseline justify-between gap-x-4">
                    <Link
                      href={article.articleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="line-clamp-2 text-sm font-semibold leading-6 text-white hover:underline sm:line-clamp-none">
                        {article.title}
                      </p>
                    </Link>
                    <p className="flex-none text-xs text-gray-300">
                      <time dateTime={article.dateTime}>{article.date}</time>
                    </p>
                  </div>
                  <p className="mt-1 line-clamp-1 text-sm leading-6 text-gray-300 sm:line-clamp-2">
                    {article.content}
                  </p>
                </div>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
