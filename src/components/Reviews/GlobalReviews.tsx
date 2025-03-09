import React, { FC } from "react";
import imagetwo from "@/assets/image/betza.webp";
import ReviewSlider from "../Carousel/ReviewsSlider";
import { useTranslations } from "next-intl";

interface Props {
  name: string;
  mainColor: string;
}

const reviews = [
  {
    image: imagetwo,
    name: "Ahmed",
    role: "Chef",
    review: "Lorem ipsum dolor sit amet ",
    date: "01/01/2023",
  },
  {
    image: imagetwo,
    name: "Ahmed",
    role: "Chef",
    review: "Lorem ipsum dolor sit amet ",
    date: "01/01/2023",
  },
  {
    image: imagetwo,
    name: "Ahmed",
    role: "Chef",
    review: "Lorem ipsum dolor sit amet ",
    date: "01/01/2023",
  },
  {
    image: imagetwo,
    name: "Ahmed",
    role: "Chef",
    review: "Lorem ipsum dolor sit amet ",
    date: "01/01/2023",
  },
  {
    image: imagetwo,
    name: "Ahmed",
    role: "Chef",
    review: "Lorem ipsum dolor sit amet ",
    date: "01/01/2023",
  },
];

const GlobalReviews: FC<Props> = ({ name, mainColor }) => {
  const t = useTranslations("common.restaurants");
  return (
    <div className="Reviews my-5">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">
          {name} {t("Reviews")}{" "}
        </h2>
        <h4 className={`text-${mainColor} cursor-pointer md:text-2xl text-lg`}>
          {t("Add Review")}
        </h4>
      </div>
      <div className="mt-10">
        <ReviewSlider slides={reviews} autoPlay mainColor={mainColor} />
      </div>
    </div>
  );
};

export default GlobalReviews;
