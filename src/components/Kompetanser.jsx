import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

export function Kompetanser() {
  const { t } = useTranslation('common')
  const kompetanse = t('kompetanse')

  const features = [
    { name: t('tvist'), handle: 'tvist-og-prosedyre' },
    { name: t('arbeidsrett'), handle: 'arbeidsrett' },
    { name: t('strafferett'), handle: 'strafferett' },
    { name: t('kontraktsrett'), handle: 'kontraktsrett' },
    { name: t('familie'), handle: 'familie-og-arverett' },
    { name: t('fastEiendom'), handle: 'fast-eiendom' },
    { name: t('okonomiske'), handle: 'økonomiske-straffesaker' },
    { name: t('sikring'), handle: 'sikring-av-verdier-ved-arrest-mv' },
    { name: t('selskapsrett'), handle: 'selskapsrett' },
    { name: t('compliance'), handle: 'compliance' },
    { name: t('mna'), handle: 'm-and-a' },
    { name: t('styreansvar'), handle: 'styreansvar' },
  ]

  return (
    <div id="kompetanser" className="mx-auto max-w-7xl bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-0">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-extrabold uppercase text-gray-900 sm:text-4xl">
            {kompetanse}
          </h2>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p> */}
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none ">
          {features.map((feature, i) => (
            <motion.div
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
              className="bg-gray-900 px-8 py-6"
            >
              <dt id={feature.handle} className="font-semibold text-white">
                {feature.name}
              </dt>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  )
}
