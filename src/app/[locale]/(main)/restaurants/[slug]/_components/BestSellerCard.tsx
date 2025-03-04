import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  img: StaticImageData;
  title: string;
}
export default function BestSellerCard({ img, title }: Props) {
  return (
    <div className="best-seller-card bg-white shadow-lg  rounded-b-2xl  rounded-t-2xl ">
      <Link href="/restaurants/el-maqam" className="BestSellerCard  shadow-lg ">
        <div className="image  rounded-t-2xl w-full">
          <Image
            src={img}
            className="w-full  rounded-t-2xl"
            alt="restaurant"
            width={300}
            height={300}
          />
        </div>
        <p className="text-center text-lg font-semibold py-2.5  px-0.5">
          {title}
        </p>
      </Link>
    </div>
  );
}
