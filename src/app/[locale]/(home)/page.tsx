"use client";
import Hero from "@/components/Hero";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
// import useMainContext from "@/context/MainContext";
import React from "react";

export default function Page() {
  // const { theme, setTheme } = useMainContext();

  return (
    <>
      <Hero />
      <Header />
      {/* <h1>Home Page</h1>
      {theme === "restaurant" ? (
        <>
          <h2>restaurant</h2>
          <h2>restaurant</h2>
          <h2>restaurant</h2>
          <h2>restaurant</h2>
          <h2>restaurant</h2>
        </>
      ) : (
        <>
          <h2>clinic</h2>
          <h2>clinic</h2>
          <h2>clinic</h2>
          <h2>clinic</h2>
          <h2>clinic</h2>
        </>
      )}

      <div
        className="text-3xl bg-red-500 cursor-pointer"
        onClick={() => setTheme("click")}
      >
        Go to the click page
      </div>

      <div
        className="text-3xl mt-3 bg-red-500 cursor-pointer"
        onClick={() => setTheme("restaurant")}
      >
        Go to the restaurant page
      </div> */}
      <Footer />
    </>
  );
}
