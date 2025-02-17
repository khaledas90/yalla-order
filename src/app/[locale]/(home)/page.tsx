import React from "react";
import Hero from "@/app/[locale]/(home)/_components/Hero";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HowWeWork from "@/app/[locale]/(home)/_components/HowWeWork";

import BeWithUs from "./_components/BeWithUsPartner";
import DownloadApp from "./_components/DownloadApp";
import ExploreCategory from "./_components/ExploreCategory";
export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <HowWeWork />
      <BeWithUs />
      <ExploreCategory />
      <DownloadApp />
      <Footer />
    </>
  );
}
