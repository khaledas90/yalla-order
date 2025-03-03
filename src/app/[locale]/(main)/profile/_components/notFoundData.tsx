import React from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type Props = {
    imageSrc: string | StaticImport;
    title: string;
    buttonText?: string;
    onButtonClick?: () => void;
}

const NotFoundData = ({ imageSrc, title, buttonText, onButtonClick }: Props) => {
    return (
        <div className="flex flex-col items-center justify-center p-6 h-[70vh]">
            <Image
                src={imageSrc}
                alt={title}
                className="w-52 h-52 mb-4 opacity-20"
            />
            {/* Title */}
            <h2 className="text-lg font-medium text-gray-600 mb-4">
                {title}
            </h2>

            {/* Optional Button */}
            {buttonText && (
                <button
                    type='button'
                    onClick={onButtonClick}
                    className="px-16 py-3 bg-red-400 text-white rounded-full hover:bg-red-500 transition-colors"
                >
                    {buttonText}
                </button>
            )}
        </div>
    )
}

export default NotFoundData