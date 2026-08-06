import React from 'react'
import { Icon } from '@iconify/react'

const DetailedServices = () => {
  const serviceCategories = [
    {
      title: 'Artificial Intelligence & Machine Learning',
      icon: 'mdi:robot',
      services: [
        {
          name: 'AI Automation Solutions',
          items: [
            'Intelligent workflow automation',
            'Automated report generation',
            'Workflow decision support systems'
          ]
        },
        {
          name: 'Predictive Analytics',
          items: [
            'Demand forecasting',
            'Performance prediction',
            'Risk and anomaly detection'
          ]
        },
        {
          name: 'Natural Language Processing',
          items: [
            'Chatbots and AI assistants',
            'Document summarization',
            'Sentiment analysis',
            'OCR-based document processing'
          ]
        },
        {
          name: 'Computer Vision Systems',
          items: [
            'Disease detection (agriculture)',
            'Defect inspection (manufacturing)',
            'Face/object recognition',
            'Inventory monitoring via cameras'
          ]
        },
        {
          name: 'AI Consulting & Model Development',
          items: [
            'AI readiness assessment',
            'Custom ML model development',
            'Model deployment & optimization'
          ]
        }
      ]
    },
    {
      title: 'IoT & Smart Systems',
      icon: 'mdi:chip',
      services: [
        {
          name: 'Agriculture IoT',
          items: [
            'Soil moisture monitoring',
            'Climate sensors',
            'Leaf disease detection',
            'Smart irrigation automation',
            'Crop growth prediction'
          ]
        },
        {
          name: 'Industrial IoT',
          items: [
            'Machine telemetry tracking',
            'Energy consumption monitoring',
            'Real-time performance dashboards'
          ]
        },
        {
          name: 'Environmental Monitoring',
          items: [
            'Water level monitoring',
            'Air quality monitoring',
            'Forest fire/temperature monitoring'
          ]
        },
        {
          name: 'Smart Infrastructure',
          items: [
            'Smart buildings',
            'Smart lighting',
            'Security IoT'
          ]
        }
      ]
    },
    {
      title: 'Enterprise Software & Cloud Solutions',
      icon: 'mdi:cloud',
      services: [
        {
          name: 'Web and Mobile Development',
          items: [
            'Cross-platform mobile apps',
            'Responsive dashboards',
            'Portals and MIS'
          ]
        },
        {
          name: 'Cloud Engineering',
          items: [
            'AWS, Azure, GCP solutions',
            'Serverless applications',
            'Cloud migrations',
            'CI/CD pipelines'
          ]
        },
        {
          name: 'Enterprise Platforms',
          items: [
            'ERP solutions',
            'HRM & Attendance systems',
            'Inventory & procurement platforms',
            'Real-time analytics portals'
          ]
        },
        {
          name: 'SaaS Product Development',
          items: [
            'Full product lifecycle',
            'Multi-tenant cloud systems',
            'Subscription management'
          ]
        }
      ]
    },
    {
      title: 'Data Science, Analytics & BI',
      icon: 'mdi:chart-line',
      services: [
        {
          name: 'Data Analytics',
          items: [
            'Data modeling',
            'Customized dashboards',
            'Power BI, Tableau integration',
            'Statistical analysis',
            'Machine learning-based insights'
          ]
        }
      ]
    },
    {
      title: 'Education Technology (EdTech)',
      icon: 'mdi:school',
      services: [
        {
          name: 'AI-Driven Learning Systems',
          items: [
            'Personalized learning',
            'AI tutoring systems',
            'Student performance prediction'
          ]
        },
        {
          name: 'Creativity & Innovation Analytics',
          items: [
            'Creativity scoring systems',
            'AI-assisted coding analytics'
          ]
        },
        {
          name: 'LMS & University Digitalization',
          items: [
            'Digital learning modules',
            'Institutional dashboards',
            'Examination & MIS systems'
          ]
        }
      ]
    },
    {
      title: 'Agritech & Cinnamon Traceability',
      icon: 'mdi:leaf',
      services: [
        {
          name: 'Cinnamon Cloud™️',
          items: [
            'Plantation monitoring',
            'Harvest tracking',
            'GAP/GMP compliance',
            'Supply chain digitization',
            'Export documentation',
            'Buyer traceability portals'
          ]
        },
        {
          name: 'Drone & Satellite Integration',
          items: [
            'Canopy mapping',
            'Disease detection',
            'Land monitoring'
          ]
        }
      ]
    },
    {
      title: 'Talent Grooming & Training Programs',
      icon: 'mdi:account-group',
      services: [
        {
          name: 'Internships & Mentoring',
          items: [
            'Real-world industry projects',
            'AI, full stack, cloud, IoT training'
          ]
        },
        {
          name: 'Corporate Training',
          items: [
            'AI for executives',
            'Digital transformation workshops',
            'Software engineering training'
          ]
        },
        {
          name: 'University/Institute Partnerships',
          items: [
            'Joint research',
            'Student mentoring',
            'Hackathons and innovation labs'
          ]
        }
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
              comprehensive services
            </span>
          </div>
          <h2 className='text-4xl font-bold text-midnight_text dark:text-white mb-4'>
            Our Services
          </h2>
          <p className='text-grey dark:text-white/70 text-lg max-w-3xl mx-auto'>
            Complete technology solutions designed to transform your business and drive innovation across industries.
          </p>
        </div>

        <div className='space-y-12'>
          {serviceCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className='bg-section dark:bg-darklight p-8 rounded-lg'
              data-aos='fade-up'
              data-aos-delay={`${categoryIndex * 100}`}
              data-aos-duration='1000'>
              <div className='flex items-center gap-3 mb-6'>
                <Icon icon={category.icon} width={32} height={32} className='text-primary' />
                <h3 className='text-2xl font-bold text-midnight_text dark:text-white'>
                  {category.title}
                </h3>
              </div>
              <div className='grid md:grid-cols-2 gap-6'>
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className='bg-white dark:bg-darkmode p-6 rounded-lg border border-gray-200 dark:border-gray-700'>
                    <h4 className='text-xl font-semibold text-midnight_text dark:text-white mb-3'>
                      {service.name}
                    </h4>
                    <ul className='space-y-2'>
                      {service.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className='text-grey dark:text-white/70 text-base flex items-start gap-2'>
                          <span className='text-primary mt-1'>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='mt-16 text-center' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
          <div className='bg-primary/10 dark:bg-primary/20 p-8 rounded-lg border-2 border-primary/30'>
            <h3 className='text-2xl font-bold text-midnight_text dark:text-white mb-4'>
              Ready to Transform Your Business?
            </h3>
            <p className='text-grey dark:text-white/70 text-lg mb-6'>
              Let's discuss how VinuLabs can help you leverage cutting-edge technology to achieve your goals.
            </p>
            <a
              href='/contact'
              className='inline-block py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 px-8'>
              Request a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailedServices


