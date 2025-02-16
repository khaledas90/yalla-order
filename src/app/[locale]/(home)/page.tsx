import React from "react";
import Hero from "@/app/[locale]/(home)/_components/Hero";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HowWeWork from "@/components/HowToWork/HowWeWork";

import BeWithUs from "./_components/BeWithUsPartner";
export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <HowWeWork />
      <BeWithUs />
      <Footer />
    </>
  );
}
