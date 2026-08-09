'use client'
import React, { FC } from 'react'
import Breadcrumb from '@/components/Breadcrumb'
import { BreadcrumbLink } from '@/types/breadcrumb'
import { useLanguage } from '@/context/LanguageContext'

interface HeroSubProps {
  title: string
  description: string
  breadcrumbLinks: BreadcrumbLink[]
  titleKey?: string
  descKey?: string
}

const HeroSub: FC<HeroSubProps> = ({ title, description, breadcrumbLinks, titleKey, descKey }) => {
  const { t } = useLanguage()

  const displayTitle = titleKey && t[titleKey as keyof typeof t] ? t[titleKey as keyof typeof t] : title
  const displayDesc = descKey && t[descKey as keyof typeof t] ? t[descKey as keyof typeof t] : description

  const translatedLinks = breadcrumbLinks.map((link) => {
    if (link.href === '/') {
      return { ...link, text: t.navHome }
    }
    return link
  })

  return (
    <>
      <section className='text-center md:py-24 py-16 md:pt-44 pt-36 dark:bg-darkmode'>
        <h2 className='dark:text-white md:text-[40px] leading-tight text-4xl font-bold text-midnight_text'>
          {displayTitle}
        </h2>
        <p className='md:text-xl text-lg text-grey dark:text-white/50 font-normal max-w-45 w-full mx-auto my-[1.875rem] sm:px-0 px-4'>
          {displayDesc}
        </p>
        <Breadcrumb links={translatedLinks} />
      </section>
    </>
  )
}

export default HeroSub
