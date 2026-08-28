import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'
import { getHighlightArticles } from '@/data/articles'

// Kort bolk med "oppstarts-artiklene" rett under introteksten.
export function Oppstart() {
  const { t } = useTranslation('common')
  const articles = getHighlightArticles(t)

  if (articles.length === 0) {
    return null
  }

  return (
    <div className="mx-auto max-w-7xl bg-gray-900 px-6 py-16 sm:py-20 lg:px-8">
      <ul
        role="list"
        className="mx-auto grid max-w-3xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 lg:gap-12"
      >
        {articles.map((article, i) => (
          <motion.li
            key={article.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: i * 0.2,
              ease: 'easeOut',
            }}
            className="flex gap-x-6"
          >
            <div className="relative aspect-[3/4] w-24 shrink-0 sm:w-32 lg:w-40">
              <Image
                className="object-cover"
                src={article.imageUrl}
                alt=""
                fill
                sizes="(min-width: 1024px) 160px, (min-width: 640px) 128px, 96px"
              />
            </div>
            <div className="flex min-w-0 flex-auto flex-col justify-center">
              <Link
                href={article.articleUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-sm font-semibold leading-6 text-white hover:underline">
                  {article.title}
                </p>
              </Link>
              <p className="mt-1 text-xs text-gray-400">
                <time dateTime={article.dateTime}>{article.date}</time>
              </p>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-300">
                {article.content}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
