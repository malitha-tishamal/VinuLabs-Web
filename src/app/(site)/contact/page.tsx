import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import Location from "@/components/Contact/OfficeLocation";
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact Us | VinuLabs",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <HeroSub
        title="Contact Us"
        description="Let's Build the Future Together. Have a project idea? Need a partner for AI, IoT, or enterprise systems? Our team is ready to help you transform your vision into reality."
        breadcrumbLinks={breadcrumbLinks}
        titleKey="contactPageTitle"
        descKey="contactPageDesc"
      />
      <ContactInfo />
      <ContactForm />
      <Location />
    </>
  );
};

export default page;
