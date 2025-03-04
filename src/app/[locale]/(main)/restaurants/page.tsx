import * as React from "react";
import { useTranslations } from "next-intl";
import { cabinSketch } from "@/utils/fonts";
import SearchInput from "@/components/Inputs/SearchInput";

const Page = () => {
    const t = useTranslations("common.restaurants");

    return (
        <>
            <div
                className={`hero h-[50vh] lg:mb-[20rem] md:mb-[48rem] sm:mb-[55rem] mb-[55rem]`}
            >
                <div className="flex flex-col justify-center items-center h-full ">
                    <h2
                        className={`text-center text-6xl text-white ${cabinSketch.className} font-bold mb-[60px] `}
                    >
                        {t("Restaurants")}
                    </h2>
                    <SearchInput query="" isIconSearch isIconLocation />
                </div>
                {/* <Profile /> */}
            </div>
        </>
    );
};

export default Page;
