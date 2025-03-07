import * as React from "react";
import { useTranslations } from "next-intl";
import { cabinSketch } from "@/utils/fonts";
import DoctorData from "./_components/DoctorData";

const Page = () => {
    const t = useTranslations("common.clinics");

    return (
        <div className="h-full">
            <div className={`hero h-[70vh]`}>
                <div className="flex flex-col justify-center  items-center h-full ">
                    <h2
                        className={`text-center lg:text-6xl md:text-6xl sm:text-4xl text-3xl  text-white ${cabinSketch.className} font-bold mb-[60px]   `}
                    >
                        {t("Doctors")}
                    </h2>
                </div>
            </div>
            <div className="mt-[-50px] mb-[250px]">
                <DoctorData />
            </div>
        </div>
    );
};

export default Page;
