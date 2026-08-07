import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Counter from '@/components/Home/Counter'
import Progresswork from '@/components/Home/WorkProgress';
import Services from '@/components/Home/Services';
import TechStack from '@/components/Home/TechStack';
import Team from '@/components/Home/Team';
import Contactform from '@/components/Home/Contact';

export const metadata: Metadata = {
  title: "VinuLabs - Where Intelligence Meets Innovation",
  description: "We design and build intelligent digital systems powered by AI, IoT, Cloud Computing, and Data Science to accelerate business transformation, enhance sustainability, and create global-scale impact.",
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VinuLabs",
    "url": "https://vinulabs.lk",
    "logo": "https://vinulabs.com/images/logo/logo.svg",
    "description": "Smart strategy. Systems that scale. Ideas that create impact. VinuLabs solves complex technology challenges with AI strategy, enterprise architecture, and professional training.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Galle",
      "addressCountry": "Sri Lanka"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@vinulabs.com",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://www.linkedin.com/company/vinulab/"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <Hero />
        <Counter isColorMode={false} />
        <Services />
        <Progresswork isColorMode={false} />
        <TechStack />
        <Team />
        <Contactform />
      </main>
    </>
  )
}
