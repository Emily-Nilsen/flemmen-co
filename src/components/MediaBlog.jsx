import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { getMediaArticles } from '@/data/articles'

export function MediaBlog() {
  const { t } = useTranslation('common')
  const articles = getMediaArticles(t)

  return (
    <div
      id="media"
      className="mx-auto max-w-7xl bg-gray-900 px-6 py-16 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <ul role="list" className="divide-y divide-gray-100/10">
          {articles.map((article, i) => {
            const isVertical = article.aspect === 'portrait'
            const containerClasses = isVertical
              ? 'aspect-[3/4] relative w-24 shrink-0 sm:aspect-[3/4] lg:aspect-[3/4] lg:w-64'
              : 'aspect-aspect-square relative w-24 shrink-0 sm:aspect-[2/1] lg:aspect-square lg:w-64'

            return (
              <motion.li
                key={article.id}
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
                {article.imageUrl && (
                  <div className={containerClasses}>
                    <Image
                      className="h-24 w-24 flex-none rounded-none bg-gray-50 object-cover"
                      src={article.imageUrl}
                      alt=""
                      fill
                    />
                  </div>
                )}
                <div className="min-w-0 flex-auto">
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
