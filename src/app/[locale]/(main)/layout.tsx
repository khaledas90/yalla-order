import Footer from "@/app/components/layout/Footer";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className=" ">{/* <Header /> */}</div>
      <main className="pt-20">{children} </main>
      <Footer />
      <h1> </h1>
    </>
  );
}
