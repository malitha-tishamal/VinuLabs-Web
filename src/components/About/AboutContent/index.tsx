import React from 'react'

const AboutContent = () => {
  return (
    <section className='bg-white dark:bg-darkmode py-16'>
      <div className='container mx-auto max-w-6xl px-4'>
        {/* Who We Are */}
        <div className='mb-16' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
          <div className='flex gap-2 items-center mb-4'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
              who we are
            </span>
          </div>
          <h2 className='text-4xl font-bold text-midnight_text dark:text-white mb-6'>
            Who We Are
          </h2>
          <p className='text-grey dark:text-white/70 text-lg mb-6'>
            VinuLabs is a Sri Lankan technology innovation company built on passion, research, and engineering excellence.
          </p>
          <p className='text-grey dark:text-white/70 text-lg mb-6'>
            We combine expertise in AI, IoT, Cloud Computing, Data Science, Machine Learning, and Enterprise Software Engineering to deliver solutions that solve real-world problems.
          </p>
          <p className='text-grey dark:text-white/70 text-lg mb-4 font-semibold'>
            Our foundation is built on:
          </p>
          <ul className='list-disc list-inside text-grey dark:text-white/70 text-base space-y-2 mb-6 ml-4'>
            <li>Deep research experience</li>
            <li>Industry-grade software engineering</li>
            <li>Strong academic connections</li>
            <li>Experience in national-scale IT projects</li>
            <li>Commitment to talent development</li>
          </ul>
          <p className='text-grey dark:text-white/70 text-lg'>
            Today, VinuLabs works across industries including Agriculture, Education, Healthcare, Transportation, Public Sector, Retail, and Manufacturing.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className='grid md:grid-cols-2 gap-8 mb-16'>
          <div className='bg-section dark:bg-darklight p-8 rounded-lg' data-aos='fade-right' data-aos-delay='200' data-aos-duration='1000'>
            <h3 className='text-2xl font-bold text-midnight_text dark:text-white mb-4'>
              Our Mission
            </h3>
            <p className='text-grey dark:text-white/70 text-base'>
              To research, design, and develop innovative software solutions leveraging Artificial Intelligence, IoT, and cloud technologies, delivering intelligent, scalable, and user-centric applications across diverse domains such as agriculture, education, healthcare, and enterprise management—supporting digital transformation, sustainability, and global competitiveness.
            </p>
          </div>
          <div className='bg-section dark:bg-darklight p-8 rounded-lg' data-aos='fade-left' data-aos-delay='200' data-aos-duration='1000'>
            <h3 className='text-2xl font-bold text-midnight_text dark:text-white mb-4'>
              Our Vision
            </h3>
            <p className='text-grey dark:text-white/70 text-base'>
              To become a globally recognized innovation hub that transforms industries through intelligent technologies, empowering businesses and people to thrive in a digital world.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className='mb-16' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
          <div className='flex gap-2 items-center mb-4'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
              our values
            </span>
          </div>
          <h2 className='text-4xl font-bold text-midnight_text dark:text-white mb-8'>
            Our Core Values
          </h2>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='bg-section dark:bg-darklight p-6 rounded-lg'>
              <h3 className='text-xl font-bold text-midnight_text dark:text-white mb-3'>
                🔹 Innovation with Purpose
              </h3>
              <p className='text-grey dark:text-white/70 text-base'>
                Every solution is designed to create measurable impact.
              </p>
            </div>
            <div className='bg-section dark:bg-darklight p-6 rounded-lg'>
              <h3 className='text-xl font-bold text-midnight_text dark:text-white mb-3'>
                🔹 Integrity & Trust
              </h3>
              <p className='text-grey dark:text-white/70 text-base'>
                Honesty and transparency guide all our partnerships.
              </p>
            </div>
            <div className='bg-section dark:bg-darklight p-6 rounded-lg'>
              <h3 className='text-xl font-bold text-midnight_text dark:text-white mb-3'>
                🔹 Excellence in Engineering
              </h3>
              <p className='text-grey dark:text-white/70 text-base'>
                We deliver systems that are secure, scalable, and reliable.
              </p>
            </div>
            <div className='bg-section dark:bg-darklight p-6 rounded-lg'>
              <h3 className='text-xl font-bold text-midnight_text dark:text-white mb-3'>
                🔹 Talent Grooming & Community Growth
              </h3>
              <p className='text-grey dark:text-white/70 text-base'>
                We help young developers grow through internships, mentoring, and hands-on projects.
              </p>
            </div>
            <div className='bg-section dark:bg-darklight p-6 rounded-lg md:col-span-2'>
              <h3 className='text-xl font-bold text-midnight_text dark:text-white mb-3'>
                🔹 Sustainability & Social Responsibility
              </h3>
              <p className='text-grey dark:text-white/70 text-base'>
                We build technology that uplifts communities and supports long-term development.
              </p>
            </div>
          </div>
        </div>

        {/* Strengths */}
        <div className='mb-16' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
          <div className='flex gap-2 items-center mb-4'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
              our strengths
            </span>
          </div>
          <h2 className='text-4xl font-bold text-midnight_text dark:text-white mb-8'>
            Our Strengths
          </h2>
          <div className='grid md:grid-cols-3 gap-6'>
            <div className='text-center p-6 bg-section dark:bg-darklight rounded-lg'>
              <p className='text-3xl font-bold text-primary mb-2'>12+</p>
              <p className='text-grey dark:text-white/70 text-base'>Years of combined industry and academic experience</p>
            </div>
            <div className='text-center p-6 bg-section dark:bg-darklight rounded-lg'>
              <p className='text-3xl font-bold text-primary mb-2'>Strong</p>
              <p className='text-grey dark:text-white/70 text-base'>Research background</p>
            </div>
            <div className='text-center p-6 bg-section dark:bg-darklight rounded-lg'>
              <p className='text-3xl font-bold text-primary mb-2'>Expertise</p>
              <p className='text-grey dark:text-white/70 text-base'>In multiple AI and IoT frameworks</p>
            </div>
            <div className='text-center p-6 bg-section dark:bg-darklight rounded-lg'>
              <p className='text-3xl font-bold text-primary mb-2'>Agile</p>
              <p className='text-grey dark:text-white/70 text-base'>Development methodologies</p>
            </div>
            <div className='text-center p-6 bg-section dark:bg-darklight rounded-lg'>
              <p className='text-3xl font-bold text-primary mb-2'>Partners</p>
              <p className='text-grey dark:text-white/70 text-base'>From top institutions</p>
            </div>
            <div className='text-center p-6 bg-section dark:bg-darklight rounded-lg'>
              <p className='text-3xl font-bold text-primary mb-2'>End-to-End</p>
              <p className='text-grey dark:text-white/70 text-base'>Idea-to-product development</p>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className='mb-16' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
          <div className='flex gap-2 items-center mb-4'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
              leadership
            </span>
          </div>
          <h2 className='text-4xl font-bold text-midnight_text dark:text-white mb-4'>
            VinuLabs Leadership Team
          </h2>
          <p className='text-grey dark:text-white/70 text-lg mb-8 italic'>
            Engineering Excellence Meets Research-Driven Innovation
          </p>

          {/* Chamil Jiwantha */}
          <div className='bg-section dark:bg-darklight p-8 rounded-lg mb-8'>
            <div className='mb-4'>
              <span className='inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-2'>
                Co-Founder & Director
              </span>
              <h3 className='text-2xl font-bold text-midnight_text dark:text-white mt-2'>
                Chamil Jiwantha
              </h3>
              <p className='text-lg font-semibold text-primary mt-1'>
                Engineering & Product Innovation | 17+ Years of Global Engineering Leadership
              </p>
            </div>
            <p className='text-grey dark:text-white/70 text-base mb-4 italic'>
              Global-scale software architect, clean-code pioneer, and engineering leader shaping world-class digital products.
            </p>
            <p className='text-grey dark:text-white/70 text-base mb-4'>
              Chamil Jiwantha is a globally experienced Software Architect and Engineering Manager with more than 17 years of experience building, scaling, and modernizing high-impact software systems across diverse industries.
            </p>
            <p className='text-grey dark:text-white/70 text-base mb-4'>
              He has led senior engineering teams, transformed enterprise platforms, and architected mission-critical systems powering global retail, fintech, logistics, robotics, and SaaS ecosystems. Known for his mastery in microservices, cloud-native engineering, GraphQL, distributed systems, and TDD, Chamil consistently delivers platforms with zero downtime, zero critical incidents, and enterprise-grade reliability.
            </p>
            <p className='text-grey dark:text-white/70 text-base mb-4 font-semibold'>
              Core Competencies:
            </p>
            <ul className='list-disc list-inside text-grey dark:text-white/70 text-base space-y-1 ml-4'>
              <li>Enterprise Architecture & Systems Design</li>
              <li>Microservices, GraphQL, REST & gRPC</li>
              <li>Cloud Platforms & Distributed Systems</li>
              <li>Engineering Leadership & Mentoring</li>
              <li>Test-Driven Development (TDD) & Clean Architecture</li>
              <li>IoT, Robotics & Retail-Tech Solutions</li>
              <li>Performance Optimization & Reliability Engineering</li>
            </ul>
          </div>

          {/* Thamara Waidyarathna */}
          <div className='bg-section dark:bg-darklight p-8 rounded-lg mb-8'>
            <div className='mb-4'>
              <span className='inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-2'>
                Co-Founder & Director
              </span>
              <h3 className='text-2xl font-bold text-midnight_text dark:text-white mt-2'>
                K.M.G.T.R. Thamara Rangana Waidyarathna
              </h3>
              <p className='text-lg font-semibold text-primary mt-1'>
                Strategy, Research & Innovation | 17+ Years of Experience Since 2008
              </p>
            </div>
            <p className='text-grey dark:text-white/70 text-base mb-4 italic'>
              AI researcher, digital education strategist, and technology consultant driving innovation across industry, education, and community ecosystems.
            </p>
            <p className='text-grey dark:text-white/70 text-base mb-4'>
              Beginning his career in software development in 2008, Thamara Waidyarathna brings over 17 years of multidisciplinary experience across software engineering, AI research, ICT consultancy, digital education strategy, and large-scale project leadership.
            </p>
            <p className='text-grey dark:text-white/70 text-base mb-4'>
              His journey spans multiple domains including applied AI & learning analytics, creativity in programming education, mobile & web system development, GIS-based public health systems, agritech & plantation traceability technology, and digital transformation for academic and community-based ecosystems.
            </p>
            <p className='text-grey dark:text-white/70 text-base mb-4 font-semibold'>
              Core Competencies:
            </p>
            <ul className='list-disc list-inside text-grey dark:text-white/70 text-base space-y-1 ml-4'>
              <li>AI in Education & Learning Analytics</li>
              <li>Machine Learning & Data-Driven Insights</li>
              <li>Software Engineering & ICT Project Management</li>
              <li>Curriculum Innovation & Capability Frameworks</li>
              <li>Digital Transformation Strategy</li>
              <li>Agritech Solutions (Cinnamon analytics, ML disease detection, IoT integration)</li>
              <li>Research Methodology & Applied Tech Research</li>
              <li>Talent Development & Academic-Industry Bridges</li>
            </ul>
          </div>

          {/* Shared Vision */}
          <div className='bg-primary/10 dark:bg-primary/20 p-8 rounded-lg border-2 border-primary/30'>
            <h3 className='text-2xl font-bold text-midnight_text dark:text-white mb-4'>
              Our Founders' Shared Vision
            </h3>
            <p className='text-grey dark:text-white/70 text-base mb-4'>
              VinuLabs was built on a powerful synergy:
            </p>
            <div className='grid md:grid-cols-2 gap-4 mb-4'>
              <div className='bg-white dark:bg-darkmode p-4 rounded'>
                <p className='font-semibold text-midnight_text dark:text-white mb-2'>🔹 Chamil</p>
                <p className='text-grey dark:text-white/70 text-sm'>Global engineering excellence</p>
              </div>
              <div className='bg-white dark:bg-darkmode p-4 rounded'>
                <p className='font-semibold text-midnight_text dark:text-white mb-2'>🔹 Thamara</p>
                <p className='text-grey dark:text-white/70 text-sm'>Research, innovation, and multidomain system leadership</p>
              </div>
            </div>
            <p className='text-grey dark:text-white/70 text-base mb-4'>
              Together, they combine:
            </p>
            <ul className='list-disc list-inside text-grey dark:text-white/70 text-base space-y-1 ml-4 mb-4'>
              <li>World-class software engineering</li>
              <li>Deep applied AI & research insights</li>
              <li>Large-scale system design experience</li>
              <li>Domain expertise in agriculture, education, enterprise & public systems</li>
              <li>A passion for training the next generation of developers</li>
            </ul>
            <p className='text-grey dark:text-white/70 text-base font-semibold'>
              This fusion creates a company capable of delivering intelligent, scalable, future-ready digital solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutContent


