import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

interface AddItemProps {
    itemName: string;
    basePrice: number;
    sizeOptions: { label: string; price: number }[];
    extraOptions: { label: string; price: number }[];
    sauceOptions: { label: string; price: number }[];
    finalOptions: { label: string; price: number }[];
}

const AddItem: React.FC<AddItemProps> = ({
    itemName,
    sizeOptions,
    extraOptions,
    sauceOptions,
    finalOptions,
}) => {
    return (
        <>
            <div className="bg-white rounded-lg shadow-md w-full lg:w-3/4 mx-auto overflow-hidden">
                <h2 className="text-lg font-semibold px-6 py-4 text-white bg-black border-b">
                    Add Item Choices
                </h2>
                <div className="bg-white p-6 rounded-lg shadow-md w-full mx-auto">

                    <div className='flex justify-start items-center gap-4 mb-4'>
                        <h3 className='text-gray-700 font-bold text-xl'>Oriental Sausage Pie</h3>
                        <span className='px-2 flex justify-center items-center gap-2 rounded-3xl bg-white shadow-lg w-fit'>
                            <Icon icon="line-md:minus" className='bg-main text-white rounded-full' width="16" height="16" />
                            <span>1</span>
                            <Icon icon="line-md:plus" className='bg-main text-white rounded-full' width="16" height="16" />
                        </span>
                        <p className='text-gray-400 font-semibold'>price on Selection</p>
                    </div>

                    {/* Item Description */}
                    <p className="text-sm text-gray-800 mb-4 font-bold">
                        {itemName} pie with Mozzarella cheese, Roumi cheese, Oriental sausage,
                        tomatoes, peppers, and olives, Oriental sausage, and an assortment of
                        vegetables, scrambled eggs on the outer layer.
                    </p>

                    {/* Size Selection */}
                    <div className="mb-4">
                        <h3 className="text-sm font-bold text-gray-700 mb-2 bg-gray-200 rounded-xl px-3 py-1 w-fit">
                            Your Choice of Size (Choose 1)
                        </h3>
                        {sizeOptions.map((option, index) => (
                            <label
                                key={index}
                                className="flex items-center space-x-2 text-sm text-gray-600 mb-2"
                            >
                                <input
                                    type="radio"
                                    name="size"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                />
                                <span>{option.label} (EGP {option.price.toFixed(2)})</span>
                            </label>
                        ))}
                    </div>

                    {/* Extra Options */}
                    <div className="mb-4">
                        <h3 className="text-sm font-bold text-gray-700 mb-2 bg-gray-200 rounded-xl px-3 py-1 w-fit">
                            Your Choice of Extras (Choose up to 9 items)
                        </h3>
                        {extraOptions.map((option, index) => (
                            <label
                                key={index}
                                className="flex items-center space-x-2 text-sm text-gray-600 mb-2"
                            >
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                />
                                <span>
                                    {option.label} (EGP {option.price.toFixed(2)})
                                </span>
                            </label>
                        ))}
                    </div>

                    {/* Sauce Options */}
                    <div className="mb-4">
                        <h3 className="text-sm font-bold text-gray-700 mb-2 bg-gray-200 rounded-xl px-3 py-1 w-fit">
                            Your Choice Of Sauce (Choose up to 1 items)
                        </h3>
                        {sauceOptions.map((option, index) => (
                            <label
                                key={index}
                                className="flex items-center space-x-2 text-sm text-gray-600 mb-2"
                            >
                                <input
                                    type="radio"
                                    name="sauce"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                />
                                <span>{option.label} (EGP {option.price.toFixed(2)})</span>
                            </label>
                        ))}
                    </div>

                    {/* Options */}
                    <div className="mb-4">
                        <h3 className="text-sm font-bold text-gray-700 mb-2 bg-gray-200 rounded-xl px-3 py-1 w-fit">
                            Your Choice (Choose up to 1 items)
                        </h3>
                        {finalOptions.map((option, index) => (
                            <label
                                key={index}
                                className="flex items-center space-x-2 text-sm text-gray-600 mb-2"
                            >
                                <input
                                    type="radio"
                                    name="sauce"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                />
                                <span>{option.label} (EGP {option.price.toFixed(2)})</span>
                            </label>
                        ))}
                    </div>

                    {/* Confirm Button */}
                    <div className='w-full flex justify-center items-center'>
                        <button
                            type="button"
                            className="w-2/3 bg-red-500 text-white py-2 px-4 rounded-3xl hover:bg-red-600 transition-colors"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddItem;