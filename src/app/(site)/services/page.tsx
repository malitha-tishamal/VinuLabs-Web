
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import DetailedServices from "@/components/Services/DetailedServices";
export const metadata: Metadata = {
    title: "Services | VinuLabs",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
  ];
  return (
    <>
      <HeroSub
        title="Services"
        description="Complete technology solutions designed to transform your business and drive innovation across industries."
        breadcrumbLinks={breadcrumbLinks}
      />
      <DetailedServices/>
    </>
  );
};

export default page;
