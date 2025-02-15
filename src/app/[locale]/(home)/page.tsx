import React from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HowWeWork from "@/components/HowToWork/HowWeWork";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <HowWeWork />
      <Footer />
    </>
  );
}
