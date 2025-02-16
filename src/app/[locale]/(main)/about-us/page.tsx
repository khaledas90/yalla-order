import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

const AboutUs = () => {
  const t = useTranslations("common.aboutUs");

  return (
    <>
      <div className={`hero bg-gray-700 h-screen `}>
        <div className="container mx-auto flex justify-center items-center px-4 py-16">
          <Card className="lg:w-1/2 md:w-full mt-[5rem] ">
            <CardHeader>
              <CardTitle className="text-center text-3xl font-semibold">
                {t("About us")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-normal text-center leading-[1] md:text-xl md:leading-[2]">
                {t("description-about-us")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
