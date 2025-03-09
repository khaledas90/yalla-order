import Hero from "@/components/Main/Hero";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HowWeWork from "@/components/Main/HowWeWork";
import BeWithUs from "../../../components/Main/BeWithUsPartner";
import DownloadApp from "../../../components/Main/DownloadApp";
import ExploreCategory from "../../../components/Main/ExploreCategory";
import { FeatureHeroRestaurants } from "@/utils/FeatureHero";
import BestFavorite from "@/components/Main/BestFavorite";
import heroRestaurantImg from "@/assets/image/hero_restaurant.webp";
import burgerFrizze from "@/assets/image/burger-frizze.webp";
import pizzaImg from "@/assets/image/pizzaImg.webp";
export default async function Page() {
  return (
    <>
      <Header />
      <Hero
        titleOne="A unique"
        titleTwo="experience for"
        titleThree="food lovers"
        titleFour=""
        image={heroRestaurantImg}
        FeatureHero={FeatureHeroRestaurants}
      />
      <HowWeWork
        title="How We Work"
        descriptionOne="We Value"
        descriptionTwo="Our"
        descriptionThree="Clients & Customers"
        image={burgerFrizze}
        Features={[
          "Register or login in our portal",
          "Search your location",
          "Find your preferred restaurant",
          "Choose your cuisine",
          "Get your food delivered to your address",
        ]}
      />
      <BestFavorite title="Customer Favorite Cuisine" />
      <BeWithUs
        title="BECOME ONE OF US?"
        descriptionOne="What"
        descriptionTwo="are you waiting for some?"
        btnTitle="Join us"
        type="pizza"
        image={pizzaImg}
      />
      <ExploreCategory />
      <DownloadApp />
      <Footer />
    </>
  );
}
