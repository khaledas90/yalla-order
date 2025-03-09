import React from 'react';

interface Item {
    name: string;
    size: string;
    specialRequest?: string;
    quantity: number;
    price: number;
    total: number;
}

interface OrderSummaryProps {
    items: Item[];
    deliveryAddress: string;
    specialRequests?: string;
    subtotal: number;
    deliveryFee: number;
    total: number;
    onModifyOrder?: () => void;
    onAddNewAddress?: () => void;
    onConfirmOrder?: () => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
    items,
    deliveryAddress,
    specialRequests = '',
    subtotal,
    deliveryFee,
    total,
}) => {
    return (
        <>
            <div className="bg-white rounded-lg shadow-md w-full lg:w-3/4 mx-auto overflow-hidden">
                <div className="flex justify-between items-center px-6 py-4 bg-black">
                    <h2 className="text-md md:text-lg font-semibold text-white">Order Summary</h2>
                    <button
                        type='button'
                        className="text-main md:text-sm text-xs hover:underline"
                    >
                        MODIFY ORDER
                    </button>
                </div>
                <div className="bg-white py-6 rounded-lg shadow-md w-full mx-auto">
                    <h3 className='px-4 pb-4 text-black font-bold text-xl'>El Maqam</h3>
                    {/* Items Table */}
                    <div className="w-full overflow-x-auto mb-4">
                        <table className="w-full min-w-max text-sm text-gray-700">
                            <thead className="bg-gray-200">
                                <tr className="border-b">
                                    <th className="py-2 px-3 text-left">Item</th>
                                    <th className="py-2 px-3 text-left">Size</th>
                                    <th className="py-2 px-3 text-left">Special Request</th>
                                    <th className="py-2 px-3 text-left">Qty</th>
                                    <th className="py-2 px-3 text-left">Price</th>
                                    <th className="py-2 px-3 text-left">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="py-2 px-3">{item.name}</td>
                                        <td className="py-2 px-3">{item.size}</td>
                                        <td className="py-2 px-3">{item.specialRequest || '-'}</td>
                                        <td className="py-2 px-3">{item.quantity}</td>
                                        <td className="py-2 px-3">EGP {item.price.toFixed(2)}</td>
                                        <td className="py-2 px-3">EGP {item.total.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Delivery Address */}
                    <div className="mb-4">
                        <h3 className="text-sm font-medium py-2 px-3 text-gray-700 bg-gray-200 mb-2">
                            Delivery Address
                        </h3>
                        <p className="text-sm text-gray-600 px-3">{deliveryAddress}</p>
                        <button
                            type='button'
                            className="text-main text-sm mt-2 hover:underline px-3"
                        >
                            Add New Address
                        </button>
                    </div>

                    {/* Special Requests */}
                    <div className="mb-4">
                        <h3 className="text-sm font-medium text-gray-700 bg-gray-200 px-3 py-2 mb-2">
                            Add special requests here
                        </h3>
                        <div className='px-3'>
                            <textarea
                                defaultValue={specialRequests}
                                className="w-full p-2 border rounded text-sm text-gray-700"
                                rows={3}
                                placeholder="Enter special requests..."
                            />
                        </div>
                    </div>

                    {/* Payment Summary */}
                    <div className="mb-4">
                        <h3 className="text-sm font-medium text-gray-700 mb-2 bg-gray-200 py-2 px-3">
                            Payment Summary
                        </h3>
                        <p className="text-sm text-gray-600 mb-1 px-3">
                            Got a voucher? Place your order from the food app to be able to use it.
                        </p>
                        <div className="flex items-center mb-2 px-3">
                            <input
                                title='Cash'
                                type="radio"
                                name="payment"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 mr-2"
                            />
                            <span>Cash on Site</span>
                        </div>
                        <div className="flex items-center mb-2 px-3">
                            <input
                                title='delivery'
                                type="radio"
                                name="payment"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 mr-2"
                            />
                            <span>Delivery</span>
                        </div>
                        <div className="border rounded-lg md:p-5 p-2 bg-white shadow-sm md:w-3/4 w-10/12 mx-auto">
                            <div className="flex justify-between items-center mb-1">
                                <p className="text-sm text-gray-600">Subtotal</p>
                                <p className="text-sm text-gray-600">EGP {subtotal.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between items-center mb-1">
                                <p className="text-sm text-gray-600">Delivery fee</p>
                                <p className="text-sm text-gray-600">EGP {deliveryFee.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between items-center mb-1">
                                <p className="text-sm text-gray-600">Total amount</p>
                                <p className="text-sm text-gray-600">EGP {total.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-sm text-gray-600">Pay by Cash</p>
                                <p className="text-sm text-gray-600">EGP {total.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>

                    {/* Confirm Button */}
                    <div className='flex justify-center items-center w-full'>
                        <button

                            type='button'
                            className="w-3/4 bg-main text-white py-2 px-4 rounded-3xl hover:bg-red-600 transition-colors"
                        >
                            Confirm Order
                        </button>
                    </div>
                </div>
            </div >
        </>
    );
};

export default OrderSummary;