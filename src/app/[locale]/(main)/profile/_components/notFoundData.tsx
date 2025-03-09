import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
  imageSrc: string | StaticImport;
  title: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

const NotFoundData = ({ imageSrc, title }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 ">
      <Image src={imageSrc} alt={title} className="w-52 h-52 mb-4 opacity-20" />
      <h2 className="text-lg font-medium text-gray-600">{title}</h2>
    </div>
  );
};

export default NotFoundData;
