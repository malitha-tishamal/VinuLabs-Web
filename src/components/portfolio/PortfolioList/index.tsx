import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { portfolioinfo } from '@/app/api/data'

const PortfolioList = () => {
  return (
    <section id='portfolio' className='md:pb-24 pb-16 pt-8 dark:bg-darkmode'>
      <div className='flex flex-wrap gap-[2.125rem] lg:px-[2.125rem] px-0 max-w-[120rem] w-full justify-center m-auto'>
        {portfolioinfo.map((item, index) => (
          <Link 
            key={index} 
            href={`/portfolio/${item.slug || '#'}`} 
            passHref
            aria-label={`View ${item.title} portfolio project`}
            className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
            <div className={`w-[18rem] group ${item.Class}`}>
              <div className='relative overflow-hidden rounded-lg group-hover:scale-[1.1] group-hover:cursor-pointer transition-all duration-500'>
                <Image
                  src={item.image}
                  alt={item.alt || `${item.title} portfolio project`}
                  width={1200}
                  height={800}
                  style={{ width: '100%', height: 'auto' }}
                  quality={80}
                  loading="lazy"
                />
              </div>
              <h4 className='pb-[0.3125rem] pt-[2.1875rem] group-hover:text-primary group-hover:cursor-pointer text-2xl text-midnight_text font-bold dark:text-white'>
                {item.title}
              </h4>
              <p className='text-secondary font-normal text-lg group-hover:text-primary group-hover:cursor-pointer dark:text-white/50'>
                {item.info}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default PortfolioList
