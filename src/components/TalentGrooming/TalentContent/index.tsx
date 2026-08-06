import React from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'

const TalentContent = () => {
  const programs = [
    {
      title: 'Industry Internships',
      description: 'Real-world industry projects that provide hands-on experience with cutting-edge technologies.',
      icon: 'mdi:briefcase',
      features: [
        'Work on live AI, IoT, and cloud projects',
        'Mentorship from senior engineers',
        'Exposure to enterprise software development',
        'Agile development methodologies',
        'Code reviews and best practices'
      ]
    },
    {
      title: 'AI Bootcamps',
      description: 'Intensive training programs focused on artificial intelligence, machine learning, and data science.',
      icon: 'mdi:robot',
      features: [
        'Machine learning fundamentals',
        'Deep learning and neural networks',
        'NLP and computer vision',
        'Model deployment and optimization',
        'Real-world AI project experience'
      ]
    },
    {
      title: 'Full Stack Development Training',
      description: 'Comprehensive training in modern web and mobile development technologies.',
      icon: 'mdi:code-tags',
      features: [
        'Frontend and backend development',
        'Cloud-native applications',
        'Database design and optimization',
        'API development and integration',
        'DevOps and CI/CD pipelines'
      ]
    },
    {
      title: 'IoT & Cloud Training',
      description: 'Specialized training in Internet of Things and cloud computing platforms.',
      icon: 'mdi:cloud',
      features: [
        'IoT device development',
        'Sensor integration and data collection',
        'AWS, Azure, and GCP platforms',
        'Serverless architecture',
        'Cloud security and best practices'
      ]
    },
    {
      title: 'Corporate Training',
      description: 'Customized training programs for organizations looking to upskill their teams.',
      icon: 'mdi:account-group',
      features: [
        'AI for executives',
        'Digital transformation workshops',
        'Software engineering training',
        'Team-specific skill development',
        'On-site or remote training options'
      ]
    },
    {
      title: 'University Partnerships',
      description: 'Collaborative programs with educational institutions to bridge academia and industry.',
      icon: 'mdi:school',
      features: [
        'Joint research projects',
        'Student mentoring programs',
        'Hackathons and innovation labs',
        'Curriculum development support',
        'Industry-academia knowledge exchange'
      ]
    }
  ]

  const outcomes = [
    'A new generation of Sri Lankan developers capable of building global-standard solutions',
    'Industry-ready professionals with hands-on project experience',
    'Strong foundation in modern technologies (AI, IoT, Cloud, Enterprise Software)',
    'CV and interview mentoring for career advancement',
    'Access to VinuLabs software engineering teams',
    'Opportunity to work on real-world projects across multiple industries'
  ]

  return (
    <section className='bg-white dark:bg-darkmode py-16'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='mb-12 text-center' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
          <div className='flex gap-2 items-center justify-center mb-4'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
              talent grooming initiative
            </span>
          </div>
          <h2 className='text-4xl font-bold text-midnight_text dark:text-white mb-4'>
            Talent Grooming Initiative
          </h2>
          <p className='text-grey dark:text-white/70 text-lg max-w-3xl mx-auto mb-6'>
            VinuLabs invests heavily in grooming the next generation of tech innovators. We offer comprehensive training programs, real-world project experience, and mentorship opportunities to help young developers grow into industry-ready professionals.
          </p>
        </div>

        {/* Programs */}
        <div className='mb-16'>
          <h3 className='text-3xl font-bold text-midnight_text dark:text-white mb-8 text-center'>
            Our Programs
          </h3>
          <div className='grid md:grid-cols-2 gap-8'>
            {programs.map((program, index) => (
              <div
                key={index}
                className='bg-section dark:bg-darklight p-8 rounded-lg'
                data-aos='fade-up'
                data-aos-delay={`${index * 100}`}
                data-aos-duration='1000'>
                <div className='flex items-start gap-4 mb-4'>
                  <div className='bg-primary/20 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <Icon icon={program.icon} width={32} height={32} className='text-primary' />
                  </div>
                  <div>
                    <h4 className='text-xl font-bold text-midnight_text dark:text-white mb-2'>
                      {program.title}
                    </h4>
                    <p className='text-grey dark:text-white/70 text-base'>
                      {program.description}
                    </p>
                  </div>
                </div>
                <ul className='space-y-2 mt-4'>
                  {program.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className='text-grey dark:text-white/70 text-base flex items-start gap-2'>
                      <Icon
                        icon='mdi:check-circle'
                        width={20}
                        height={20}
                        className='text-success flex-shrink-0 mt-0.5'
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* What We Offer */}
        <div className='mb-16' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
          <div className='bg-primary/10 dark:bg-primary/20 p-8 rounded-lg border-2 border-primary/30'>
            <h3 className='text-2xl font-bold text-midnight_text dark:text-white mb-6'>
              What We Offer
            </h3>
            <div className='grid md:grid-cols-2 gap-4'>
              <div>
                <ul className='space-y-3'>
                  <li className='flex items-start gap-3'>
                    <Icon icon='mdi:check-circle' width={24} height={24} className='text-success flex-shrink-0 mt-0.5' />
                    <span className='text-grey dark:text-white/70 text-base'>Industry internships</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Icon icon='mdi:check-circle' width={24} height={24} className='text-success flex-shrink-0 mt-0.5' />
                    <span className='text-grey dark:text-white/70 text-base'>AI bootcamps</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Icon icon='mdi:check-circle' width={24} height={24} className='text-success flex-shrink-0 mt-0.5' />
                    <span className='text-grey dark:text-white/70 text-base'>Real-world project experience</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Icon icon='mdi:check-circle' width={24} height={24} className='text-success flex-shrink-0 mt-0.5' />
                    <span className='text-grey dark:text-white/70 text-base'>CV and interview mentoring</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className='space-y-3'>
                  <li className='flex items-start gap-3'>
                    <Icon icon='mdi:check-circle' width={24} height={24} className='text-success flex-shrink-0 mt-0.5' />
                    <span className='text-grey dark:text-white/70 text-base'>Collaboration with universities and technical institutes</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Icon icon='mdi:check-circle' width={24} height={24} className='text-success flex-shrink-0 mt-0.5' />
                    <span className='text-grey dark:text-white/70 text-base'>Access to our software engineering teams</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Icon icon='mdi:check-circle' width={24} height={24} className='text-success flex-shrink-0 mt-0.5' />
                    <span className='text-grey dark:text-white/70 text-base'>Opportunity to work on AI, IoT, cloud, and enterprise software projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Outcomes */}
        <div className='mb-16' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
          <h3 className='text-3xl font-bold text-midnight_text dark:text-white mb-6 text-center'>
            Program Outcomes
          </h3>
          <div className='bg-section dark:bg-darklight p-8 rounded-lg'>
            <p className='text-grey dark:text-white/70 text-lg mb-6 text-center font-semibold'>
              Our talent grooming programs produce:
            </p>
            <ul className='space-y-4 max-w-4xl mx-auto'>
              {outcomes.map((outcome, index) => (
                <li
                  key={index}
                  className='flex items-start gap-4 bg-white dark:bg-darkmode p-4 rounded-lg'>
                  <Icon
                    icon='mdi:star'
                    width={24}
                    height={24}
                    className='text-primary flex-shrink-0 mt-0.5'
                  />
                  <span className='text-grey dark:text-white/70 text-base'>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className='text-center' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
          <div className='bg-primary/10 dark:bg-primary/20 p-8 rounded-lg border-2 border-primary/30'>
            <h3 className='text-2xl font-bold text-midnight_text dark:text-white mb-4'>
              Ready to Start Your Tech Journey?
            </h3>
            <p className='text-grey dark:text-white/70 text-lg mb-6'>
              Join VinuLabs talent grooming programs and become part of the next generation of tech innovators.
            </p>
            <div className='flex gap-4 justify-center flex-wrap'>
              <Link
                href='/contact'
                className='inline-block py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 px-8'>
                Apply for Internship
              </Link>
              <Link
                href='/contact'
                className='inline-block py-3 bg-transparent border-2 border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition duration-300 px-8'>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TalentContent


