import { StaticImageData } from "next/image";
import { IFeatureHero } from "./FeatureHero";

export interface HeroProps {
  titleOne: string;
  titleTwo: string;
  titleThree: string;
  titleFour?: string;
  image: StaticImageData;
  FeatureHero: IFeatureHero[];
  mainColor: string;
}

export interface IHowWeWork {
  title: string;
  descriptionOne: string;
  descriptionTwo: string;
  descriptionThree: string;
  image: StaticImageData;
  Features: string[];
  mainColor: string;
}

export interface IBestFavorite {
  title: string;
}

export interface IBeWithUs {
  title: string;
  descriptionOne: string;
  descriptionTwo: string;
  btnTitle: string;
  image: StaticImageData;
  type: string;
  mainColor: string;
}

export interface downloadApp {
  mainColor: string;
}
