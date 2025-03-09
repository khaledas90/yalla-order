import Hero from "@/components/Main/Hero";
import Header from "@/components/layout/Header";
import HowWeWork from "@/components/Main/HowWeWork";

import heroClinicImg from "@/assets/image/doctors-team.webp";
import { FeatureHeroClinics } from "@/utils/FeatureHero";
import toolClinecImage from "@/assets/image/tools-clinic.webp";
import BestFavorite from "@/components/Main/BestFavorite";
import doctorImg from "@/assets/image/girl-doctor.webp";
import BeWithUs from "@/components/Main/BeWithUsPartner";
import ExploreCategory from "@/components/Main/ExploreCategory";
import DownloadApp from "@/components/Main/DownloadApp";
export default async function Page() {
  return (
    <>
      <Header/>
      <Hero
        titleOne="Book your medical"
        titleTwo="consultation now"
        titleThree="and enjoy comfort"
        titleFour="and safety"
        image={heroClinicImg}
        FeatureHero={FeatureHeroClinics}
        mainColor="primary"
      />
      <HowWeWork
        title="How We Work"
        descriptionOne="We Value"
        descriptionTwo="Our"
        descriptionThree="our patients and doctors"
        image={toolClinecImage}
        Features={[
          "Register or login in our portal",
          "Search your location",
          "Find the clinic you want",
          "Choose the appropriate doctor and appointment",
          "Arrive on time and receive excellent service",
        ]}
        mainColor="primary"
      />
      <BestFavorite title="Best rated doctors" />
      <BeWithUs
        title="BECOME ONE OF US?"
        descriptionOne="What"
        descriptionTwo="are you waiting for some?"
        btnTitle="Join us"
        type="doctor"
        image={doctorImg}
        mainColor="primary"
      />
      <ExploreCategory />
      <DownloadApp
        mainColor="primary"
      />
    </>
  );
}
