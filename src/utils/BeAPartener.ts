import partOne from "@/assets/image/part1.png";
import partTwo from "@/assets/image/part2.png";
import partThree from "@/assets/image/part3.png";
import OurWorkOne from "@/assets/image/OurWork_part1.png";
import OurWorkTwo from "@/assets/image/OurWork_part2.png";
import OurWorkThree from "@/assets/image/OurWork_part3.png";
import OurWorkFour from "@/assets/image/OurWork_part4.png";

import { StaticImageData } from "next/image";

type TWhyUs = {
  id: number;
  title: string;
  discretion: string;
  url: StaticImageData;
}[];

export const WhyUsData: TWhyUs = [
  {
    id: 1,
    title: "Reach more customers",
    discretion:
      "We have thousands of hungry customers ready to order from your store",
    url: partOne,
  },
  {
    id: 2,
    title: "Earn more money",
    discretion:
      "We help you serve more customers without additional costs to you",
    url: partTwo,
  },
  {
    id: 3,
    title: "Grow your business",
    discretion:
      "Increase your revenue and expand your brand reach effortlessly",
    url: partThree,
  },
];

type TWorkWithUs = {
  id: number;
  title: string;
  discretion: string;
  url: StaticImageData;
}[];

export const WorkWithUsData: TWorkWithUs = [
  {
    id: 1,
    title: "Customer Orders",
    discretion:
      "The customer submits a request or books a consultation through the application",
    url: OurWorkFour,
  },
  {
    id: 2,
    title: "You Prepare",
    discretion:
      "You will receive a notification to start preparing your application or consultation",
    url: OurWorkThree,
  },
  {
    id: 3,
    title: "We Deliver",
    discretion:
      "A rider will soon come to pick up the order and deliver it to the customer",
    url: OurWorkTwo,
  },
  {
    id: 4,
    title: "Watch Your Business Grow",
    discretion:
      "Track sales, monitor orders, and expand your business efficiently",
    url: OurWorkOne,
  },
];
