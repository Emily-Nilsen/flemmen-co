import Link from 'next/link'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

export function Contact() {
  const { t } = useTranslation('common')
  const adresse = t('adresse')
  const postadresse = t('postadresse')
  const sentralbord = t('sentralbord')

  return (
    <div
      id="kontakt"
      className="mx-auto max-w-7xl border-t border-gray-100 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-0">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: 'fade',
              }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:col-span-3 lg:gap-8"
            >
              <div className="rounded-none bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  {adresse}
                </h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                  <p>Oscars gate 30</p>
                  <p>0352 Oslo</p>
                </address>
              </div>
              <div className="rounded-none bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  {postadresse}
                </h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                  <p>Postboks 7016 Majorstuen</p>
                  <p>0306 Oslo</p>
                </address>
              </div>
              <div className="rounded-none bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  {sentralbord}
                </h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <Link
                      className="transition-colors duration-200 ease-in-out hover:text-gray-900"
                      href="tel:+4740001423"
                    >
                      <dd>(+47) 400 01 423</dd>
                    </Link>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Email</dt>
                    <Link
                      className="transition-colors duration-200 ease-in-out hover:text-gray-900"
                      href="mailto:post@flemmenco.no"
                    >
                      <dd>post@flemmenco.no</dd>
                    </Link>
                  </div>
                </dl>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
