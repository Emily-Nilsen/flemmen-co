import Image from 'next/image'
import { BackgroundVideo } from './BackgroundVideo'
import { motion, useInView, useMotionValue, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { Button } from './Button'
import { Brenner } from '@/components/Brenner'
import useTranslation from 'next-translate/useTranslation'

function MobileHero() {
  const { t, lang } = useTranslation('common')
  const heroEyebrow = t('hero-eyebrow')
  const title = t('title')
  const slogan = t('slogan')

  return (
    <div className="relative md:hidden">
      <Image
        src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1693392616/Flemmen%20Co/homepage_hero_v1_desktop_duybsv.webp"
        alt="Christian Flemmen Johansen"
        width={3000}
        height={1688}
      />
      <div className="absolute inset-0 mt-[8.5rem] flex max-w-xs pl-6 pr-24">
        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-gray-950">
          {title}
          <span className="inline-block"></span>
        </h1>
      </div>

      {/* light div */}
      <div className="relative bg-gradient-to-t from-slate-50 py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {heroEyebrow}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">{slogan}</p>
            <div className="mt-6 flex w-full items-center gap-x-6">
              <Brenner />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  const { t, lang } = useTranslation('common')
  const heroEyebrow = t('hero-eyebrow')
  const title = t('title')
  const slogan = t('slogan')

  return (
    <section>
      <div className="hidden md:block">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1693392616/Flemmen%20Co/homepage_hero_v1_desktop_duybsv.webp"
          alt="Christian Flemmen Johansen"
          width={3000}
          height={1688}
        />

        <div className="absolute inset-0">
          <div className="relative">
            <div className="max-w-md lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8">
              <div className="px-6 pb-24 pt-20 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
                <div className="xl-mt-0 bg-t relative mx-auto max-w-lg p-8 text-white shadow-xl shadow-gray-500/5 lg:mx-0 lg:-mt-12 lg:p-12 xl:max-w-2xl">
                  <h3 className="text-xs uppercase lg:text-sm">
                    {/* {heroEyebrow} */}
                  </h3>
                  <h1 className="mt-8 font-display text-4xl font-bold uppercase tracking-tight md:text-5xl lg:mt-16 xl:text-6xl">
                    Flemmen <br /> & Co <br /> Advokatfirma
                  </h1>
                  <p className="mt-6 leading-8 sm:mb-6 lg:mb-16 lg:text-lg">
                    {/* {slogan} */}
                  </p>

                  <Brenner />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileHero />
    </section>
  )
}
