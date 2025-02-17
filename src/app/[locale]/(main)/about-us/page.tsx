import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

const AboutUs = () => {
  const t = useTranslations("common.aboutUs");

  return (
    <div className="hero bg-gray-700 h-full py-20 px-4 flex justify-center items-center">
      <div className="container flex justify-center items-center">
        <Card className="w-full max-w-md md:p-6 p-2 rounded-2xl shadow-lg bg-white">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold uppercase">
              {t("About us")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-normal leading-snug text-gray-700">
              {t("description-about-us")}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;
