import React from "react";
import Food from "@/assets/image/burger.jpg";
import Clinic from "@/assets/image/clinic-tool.png";
import ExploreCard from "@/components/ExploreCard/ExploreCard";
import { useTranslations } from "next-intl";
export default function ExploreCategory() {
  const t = useTranslations("common.downloadApp");
  return (
    <>
      <div className="Navigate-Cards w-full md:pb-32 md:pt-10 pt-0 pb-20 px-5 background-download flex flex-col md:flex-row justify-center items-center gap-7">
        {/* Food Button */}
        <ExploreCard
          url="#"
          textColor="text-main"
          h1Content={t("Are you hungry?")}
          PContent={t("content-food")}
          imgButton={Food}
        />
        {/* Clinic Button */}
        <ExploreCard
          url="#"
          textColor="text-blue-600"
          h1Content={t("Do you have a cold?")}
          PContent={t("content-clinic")}
          imgButton={Clinic}
        />
      </div>
    </>
  );
}
