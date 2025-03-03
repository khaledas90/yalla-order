import { StaticImageData } from "next/image";
import { IFeatureHero } from "./FeatureHero";

export interface HeroProps {
  titleOne: string;
  titleTwo: string;
  titleThree: string;
  titleFour?: string;
  image: StaticImageData;
  FeatureHero: IFeatureHero[];
}

export interface IHowWeWork {
  title: string;
  descriptionOne: string;
  descriptionTwo: string;
  descriptionThree: string;
  image: StaticImageData;
  Features: string[];
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
}
