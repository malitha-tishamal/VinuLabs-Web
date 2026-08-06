import React from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'

const ProductsList = () => {
  const products = [
    {
      name: 'Cinnamon Cloud™️',
      tagline: 'Digital Agriculture Ecosystem with AI + IoT',
      description: 'A complete end-to-end digital traceability platform revolutionizing the cinnamon industry through intelligent technology.',
      features: [
        'Cinnamon disease detection using AI',
        'Plantation mapping and monitoring',
        'Sensor-based climate monitoring',
        'Harvest and worker tracking',
        'GAP/GMP compliance management',
        'Export traceability portal',
        'Supply chain digitization',
        'Buyer traceability portals'
      ],
      icon: 'mdi:leaf',
      color: 'bg-green-500'
    },
    {
      name: 'VinuLabs AI Suite',
      tagline: 'Comprehensive AI Solutions Platform',
      description: 'An integrated suite of AI-powered tools designed to automate workflows, process documents, and generate intelligent insights.',
      features: [
        'AI chatbot platform',
        'OCR document processor',
        'AI analytics engine',
        'Automated report generator',
        'Natural language processing',
        'Predictive analytics'
      ],
      icon: 'mdi:robot',
      color: 'bg-blue-500'
    },
    {
      name: 'SmartAgro IoT Device Series',
      tagline: 'Next-Generation Agricultural Monitoring',
      description: 'A comprehensive range of IoT devices designed for smart agriculture, enabling real-time monitoring and automation.',
      features: [
        'Soil Node X - Advanced soil monitoring',
        'Climate Node X - Weather and climate tracking',
        'Smart Irrigation Controller - Automated irrigation',
        'Water Level Node - Water resource management',
        'Real-time data collection',
        'Cloud-based analytics dashboard'
      ],
      icon: 'mdi:chip',
      color: 'bg-purple-500'
    }
  ]

  return (
    <section className='bg-white dark:bg-darkmode py-16'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='mb-12 text-center' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
          <div className='flex gap-2 items-center justify-center mb-4'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
              our products
            </span>
          </div>
          <h2 className='text-4xl font-bold text-midnight_text dark:text-white mb-4'>
            Innovative Products & Platforms
          </h2>
          <p className='text-grey dark:text-white/70 text-lg max-w-3xl mx-auto'>
            Cutting-edge solutions built with AI, IoT, and cloud technologies to transform industries and drive digital transformation.
          </p>
        </div>

        <div className='space-y-12'>
          {products.map((product, index) => (
            <div
              key={index}
              className='bg-section dark:bg-darklight p-8 rounded-lg'
              data-aos='fade-up'
              data-aos-delay={`${index * 200}`}
              data-aos-duration='1000'>
              <div className='grid md:grid-cols-12 gap-8 items-start'>
                <div className='md:col-span-4'>
                  <div className={`${product.color} w-20 h-20 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon icon={product.icon} width={48} height={48} className='text-white' />
                  </div>
                  <h3 className='text-2xl font-bold text-midnight_text dark:text-white mb-2'>
                    {product.name}
                  </h3>
                  <p className='text-primary font-semibold text-lg mb-4'>
                    {product.tagline}
                  </p>
                  <p className='text-grey dark:text-white/70 text-base mb-6'>
                    {product.description}
                  </p>
                  <Link
                    href='/contact'
                    className='inline-block py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300'>
                    Learn More
                  </Link>
                </div>
                <div className='md:col-span-8'>
                  <h4 className='text-xl font-semibold text-midnight_text dark:text-white mb-4'>
                    Key Features:
                  </h4>
                  <div className='grid md:grid-cols-2 gap-4'>
                    {product.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className='flex items-start gap-3 bg-white dark:bg-darkmode p-4 rounded-lg'>
                        <Icon
                          icon='mdi:check-circle'
                          width={24}
                          height={24}
                          className='text-success flex-shrink-0 mt-0.5'
                        />
                        <span className='text-grey dark:text-white/70 text-base'>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-16 text-center' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
          <div className='bg-primary/10 dark:bg-primary/20 p-8 rounded-lg border-2 border-primary/30'>
            <h3 className='text-2xl font-bold text-midnight_text dark:text-white mb-4'>
              Interested in Our Products?
            </h3>
            <p className='text-grey dark:text-white/70 text-lg mb-6'>
              Contact us to learn more about how our products can transform your business operations.
            </p>
            <div className='flex gap-4 justify-center flex-wrap'>
              <Link
                href='/contact'
                className='inline-block py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 px-8'>
                Request a Demo
              </Link>
              <Link
                href='/services'
                className='inline-block py-3 bg-transparent border-2 border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition duration-300 px-8'>
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsList


