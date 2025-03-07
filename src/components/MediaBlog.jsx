import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const articles = [
  {
    id: 1,
    title: 'Partner forlater Elden etter 16 år – starter for seg selv',
    articleUrl:
      'https://www.advokatbladet.no/elden-oppstart-av-advokatkontor-partner/partner-forlater-elden-etter-16-ar-starter-for-seg-selv/199683',
    imageUrl: '/media/article_3.webp',
    content:
      'Tanken har vært der lenge, sier Christian Flemmen Johansen, som har etablert Advokatfirmaet Flemmen & CO.',
    date: '01. sep, 2023',
    dateTime: '2023-09-01',
  },
  {
    id: 2,
    title:
      'Elden-partner starter egen virksomhet: – Skal ikke være noe klassejus-firma',
    articleUrl: 'https://advokatwatch.no/nyheter/karriere/article16395400.ece',
    imageUrl: '/media/article_4.webp',
    content:
      'Christian Flemmen Johansen har etablert et eget advokatfirma, og tar med seg to kolleger fra Elden.',
    date: '31. aug, 2023',
    dateTime: '2023-08-31',
  },
  {
    id: 3,
    title: 'Forlater Elden med alle egne klienter',
    articleUrl:
      'https://www.finansavisen.no/jus/2023/08/31/8032852/flemmen-forlater-elden-med-alle-egne-klienter?zephr_sso_ott=hTqGBr',
    imageUrl: '/media/article_2.webp',
    content:
      'Christian Flemmen Johansen (39) er en av de mest innbringende partnerne i Advokatfirmaet Elden.',
    date: '31. aug, 2023',
    dateTime: '2023-08-31',
  },
  {
    id: 4,
    title: 'Toppadvokat forlater Elden',
    articleUrl:
      'https://www.dn.no/jus/christian-flemmen-johansen/advokatfirmaet-elden/elden/toppadvokat-forlater-elden/2-1-1508933',
    imageUrl: '/media/article_1.webp',
    content:
      'Partner Christian Flemmen Johansen starter eget firma etter 16 år i advokatfirmaet Elden.',
    date: '30. aug, 2023',
    dateTime: '2023-08-30',
  },
  {
    id: 6,
    title: 'Byggekonsulent frifunnet for bedragerier',
    articleUrl:
      'https://www.finansavisen.no/jus/2024/06/22/8145720/konsulent-frifunnet-for-bedragerier?zephr_sso_ott=XwRgN1',
    imageUrl: '/media/article_6.webp',
    content:
      'Først ble den innleide byggekonsulenten dømt til to og et halvt års fengsel for flere bedragerier. I ankerunden er han frifunnet for flere forhold, og straffen er mer enn halvert.',
    date: '22. jun, 2024',
    dateTime: '2024-06-22',
  },
  {
    id: 5,
    title: 'forsvarsadvokat.no',
    articleUrl: 'https://forsvarsadvokat.no/',
    imageUrl: '/media/article_0.webp',
    content: 'Medieomtale av advokat Christian Flemmen Johansen.',
    date: '',
    dateTime: '2007-09-01',
  },
]

export function MediaBlog() {
  return (
    <div
      id="media"
      className="px-6 py-24 mx-auto bg-gray-900 max-w-7xl sm:py-32 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <ul role="list" className="divide-y divide-gray-100/10">
          {articles.map((article, i) => (
            <motion.li
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                initialDelay: 0.3,
                duration: 0.7,
                delay: i * 0.3,
                ease: 'easeOut',
              }}
              key={i}
              className="flex py-8 gap-x-4"
            >
              <div className="lg:aspect-square aspect-aspect-square relative w-24 shrink-0 sm:aspect-[2/1] lg:w-64">
                <Image
                  className="flex-none object-cover w-24 h-24 rounded-none bg-gray-50"
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
                    <p className="text-sm font-semibold leading-6 text-white line-clamp-2 hover:underline sm:line-clamp-none">
                      {article.title}
                    </p>
                  </Link>
                  <p className="flex-none text-xs text-gray-300">
                    <time dateTime={article.dateTime}>{article.date}</time>
                  </p>
                </div>
                <p className="mt-1 text-sm leading-6 text-gray-300 line-clamp-1 sm:line-clamp-2">
                  {article.content}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}
