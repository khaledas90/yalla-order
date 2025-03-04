import * as React from "react";
import { useTranslations } from "next-intl";
import { cabinSketch } from "@/utils/fonts";
import SearchInput from "@/components/Inputs/SearchInput";
import Restaurants from "./_components"

const Page = () => {
    const t = useTranslations("common.restaurants");

    return (
        <>
            <div className="h-full">
                <div
                    className={`hero h-[70vh]`}
                >
                    <div className="flex flex-col justify-center items-center h-full ">
                        <h2
                            className={`text-center text-6xl text-white ${cabinSketch.className} font-bold mb-[60px] `}
                        >
                            {t("Restaurants")}
                        </h2>
                        <div className="w-1/2">
                            <SearchInput query="" isIconSearch isIconLocation />
                        </div>
                    </div>
                </div>
                <Restaurants />
            </div>
        </>
    );
};

export default Page;
