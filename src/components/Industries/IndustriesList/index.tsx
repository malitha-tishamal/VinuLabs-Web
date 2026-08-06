import React from 'react'
import { Icon } from '@iconify/react'

const IndustriesList = () => {
  const industries = [
    {
      name: 'Agriculture & Plantation',
      description: 'AI, IoT, and sensors for smart farming, crop monitoring, disease detection, and supply chain traceability.',
      icon: 'mdi:sprout',
      solutions: [
        'Cinnamon Cloud™️ traceability platform',
        'IoT-based soil and climate monitoring',
        'AI-powered disease detection',
        'Smart irrigation systems',
        'Harvest tracking and worker management',
        'GAP/GMP compliance systems'
      ]
    },
    {
      name: 'Education & Higher Education',
      description: 'LMS, AI learning platforms, research tools, and digital transformation solutions for educational institutions.',
      icon: 'mdi:school',
      solutions: [
        'AI-assisted learning systems',
        'Student performance prediction',
        'Creativity analytics',
        'Digital learning modules',
        'Institutional dashboards',
        'Examination & MIS systems'
      ]
    },
    {
      name: 'Healthcare',
      description: 'Hospital information systems, AI diagnosis tools, and digital health solutions.',
      icon: 'mdi:hospital',
      solutions: [
        'Hospital information systems',
        'AI-powered diagnosis tools',
        'Patient management systems',
        'Medical record digitization',
        'Telemedicine platforms'
      ]
    },
    {
      name: 'Transportation',
      description: 'Fleet analytics, smart logistics, and transportation management systems.',
      icon: 'mdi:truck',
      solutions: [
        'Fleet management systems',
        'Route optimization',
        'Real-time tracking',
        'Logistics analytics',
        'Smart transportation solutions'
      ]
    },
    {
      name: 'Enterprise & Manufacturing',
      description: 'Automation, dashboards, industrial IoT, and enterprise resource planning solutions.',
      icon: 'mdi:factory',
      solutions: [
        'ERP solutions',
        'Industrial IoT systems',
        'Machine telemetry tracking',
        'Energy consumption monitoring',
        'Real-time performance dashboards',
        'Automation systems'
      ]
    },
    {
      name: 'Retail & FMCG',
      description: 'Inventory systems, customer analytics, and retail management platforms.',
      icon: 'mdi:store',
      solutions: [
        'Inventory management systems',
        'Customer analytics platforms',
        'Point of sale systems',
        'Supply chain management',
        'Retail analytics dashboards'
      ]
    },
    {
      name: 'Government & Public Sector',
      description: 'Digital transformation, MIS development, and public service digitization.',
      icon: 'mdi:office-building',
      solutions: [
        'Digital transformation initiatives',
        'MIS development',
        'Public service portals',
        'Citizen engagement platforms',
        'Government analytics systems'
      ]
    }
  ]

  return (
    <section className='bg-white dark:bg-darkmode py-16'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='mb-12 text-center' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
          <div className='flex gap-2 items-center justify-center mb-4'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
              industries we serve
            </span>
          </div>
          <h2 className='text-4xl font-bold text-midnight_text dark:text-white mb-4'>
            Industries We Serve
          </h2>
          <p className='text-grey dark:text-white/70 text-lg max-w-3xl mx-auto'>
            VinuLabs delivers intelligent technology solutions across diverse industries, transforming operations and driving digital innovation.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {industries.map((industry, index) => (
            <div
              key={index}
              className='bg-section dark:bg-darklight p-8 rounded-lg'
              data-aos='fade-up'
              data-aos-delay={`${index * 100}`}
              data-aos-duration='1000'>
              <div className='flex items-start gap-4 mb-4'>
                <div className='bg-primary/20 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Icon icon={industry.icon} width={32} height={32} className='text-primary' />
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-midnight_text dark:text-white mb-2'>
                    {industry.name}
                  </h3>
                  <p className='text-grey dark:text-white/70 text-base'>
                    {industry.description}
                  </p>
                </div>
              </div>
              <div className='mt-6'>
                <h4 className='text-lg font-semibold text-midnight_text dark:text-white mb-3'>
                  Solutions We Offer:
                </h4>
                <ul className='space-y-2'>
                  {industry.solutions.map((solution, solutionIndex) => (
                    <li
                      key={solutionIndex}
                      className='text-grey dark:text-white/70 text-base flex items-start gap-2'>
                      <Icon
                        icon='mdi:check-circle'
                        width={20}
                        height={20}
                        className='text-success flex-shrink-0 mt-0.5'
                      />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-16 text-center' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
          <div className='bg-primary/10 dark:bg-primary/20 p-8 rounded-lg border-2 border-primary/30'>
            <h3 className='text-2xl font-bold text-midnight_text dark:text-white mb-4'>
              Ready to Transform Your Industry?
            </h3>
            <p className='text-grey dark:text-white/70 text-lg mb-6'>
              Contact us to learn how VinuLabs can help your industry leverage cutting-edge technology for digital transformation.
            </p>
            <a
              href='/contact'
              className='inline-block py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 px-8'>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustriesList


