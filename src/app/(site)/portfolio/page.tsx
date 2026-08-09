import React from "react";
import ProductsList from "@/components/Products/ProductsList";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Products | VinuLabs",
};

const ProductsPage = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/portfolio", text: "Products" },
    ];
    return (
        <>
            <HeroSub
                title="Products"
                description="Cutting-edge solutions built with AI, IoT, and cloud technologies to transform industries and drive digital transformation."
                breadcrumbLinks={breadcrumbLinks}
                titleKey="productsTitle"
                descKey="productsDesc"
            />
            <ProductsList />
        </>
    );
};

export default ProductsPage;