import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { StaticImageData } from 'next/image'
import { useTranslations } from "next-intl";

type Props = {
    url: string
    textColor: string
    imgButton: string | StaticImageData
    h1Content: string
    PContent: string
}

const Index = (props: Props) => {
    const t = useTranslations("common.downloadApp");
    return (
        <>
            <Link
                href={props.url}
                className="w-full h-40 max-w-md flex items-center bg-black/90 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-95"
            >
                {/* Text Section */}
                <div className="p-5 w-2/3 h-full flex flex-col justify-between">
                    <h1 className={`text-lg font-bold ${props.textColor}`}>
                        {props.h1Content}
                    </h1>
                    <p className="text-sm text-gray-300">{props.PContent}</p>
                    <h5 className={`mt-2 text-sm font-semibold ${props.textColor}`}>
                        {t("Explore")}
                    </h5>
                </div>

                {/* Image Section */}
                <div className="w-1/3 h-full">
                    <Image
                        src={props.imgButton}
                        alt="Button Image"
                        width={150}
                        height={150}
                        className="w-full h-full object-cover"
                    />
                </div>
            </Link>
        </>
    )
}

export default Index