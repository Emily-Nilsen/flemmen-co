import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'
import { visibleTeam } from '@/data/team'

export function Team() {
  const { t } = useTranslation('common')
  const teamet = t('teamet')

  return (
    <div
      id="teamet"
      className="mx-auto max-w-7xl bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-0">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-extrabold uppercase text-gray-900 sm:text-4xl">
            {teamet}
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {visibleTeam.map((member, i) => (
            <TeamCard key={member.slug} member={member} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

function TeamCard({ member, index }) {
  const { t } = useTranslation('common')
  const role = member.roles.map((r) => t(r)).join(' / ')

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: 'easeOut',
      }}
    >
      <Link
        href={`/medarbeidere/${member.slug}`}
        className="group flex h-full items-stretch overflow-hidden bg-gray-50 transition-colors duration-200 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
      >
        <div className="flex min-w-0 flex-auto flex-col justify-center p-8">
          <h3 className="text-sm font-semibold leading-7 text-gray-600">
            {role}
          </h3>
          <h3 className="text-base font-semibold leading-7 text-gray-900 transition-colors duration-200 group-hover:text-black">
            {member.name}
          </h3>
          <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
            <div>
              <dt className="sr-only">Email</dt>
              <dd className="font-semibold text-gray-600">{member.email}</dd>
            </div>
            <div className="mt-1">
              <dt className="sr-only">Phone number</dt>
              <dd>{member.phoneDisplay}</dd>
            </div>
          </dl>
        </div>
        <div className="relative aspect-[4/5] w-32 shrink-0 self-stretch sm:w-36">
          <Image
            className="object-cover object-top grayscale"
            src={member.photo}
            alt={member.name}
            fill
            sizes="(min-width: 640px) 144px, 128px"
          />
        </div>
      </Link>
    </motion.div>
  )
}
