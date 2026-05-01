import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

export function TextBox1() {
  const { t } = useTranslation('common')
  const intro1 = t('intro_1')
  const intro2 = t('intro_2', { years: new Date().getFullYear() - 2009 })
  const intro3 = t('intro_3')

  return (
    <section>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="z-1 relative mt-0 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
              <div>
                <motion.p
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    delay: 0.4,
                    duration: 1,
                    type: 'fade',
                  }}
                >
                  {intro1}
                </motion.p>
                <motion.p
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 1,
                    type: 'fade',
                  }}
                  className="mt-8"
                >
                  {intro2}
                </motion.p>
              </div>
              <div>
                <motion.p
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 1,
                    type: 'fade',
                  }}
                >
                  {intro3}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
