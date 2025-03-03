import React from "react";
import NotFoundData from "./notFoundData";
import NotFoundImage from "@/assets/image/not-found-location.webp";


const orders = [
  {
    id: 1,
    restaurant: "El Maqam - Semouha",
    date: "14/08/2023",
    item: "Sausage Hawawshi",
    address: "Alexandria, Smouha, Smouha Circle, Zohour Bargout Building, floor 4, Apartment 2",
    subtotal: "95.00 EGP",
    deliveryFee: "11.99 EGP",
    total: "106.99 EGP",
  },
  {
    id: 2,
    restaurant: "El Maqam - Semouha",
    date: "14/08/2023",
    item: "Sausage Hawawshi",
    address: "Alexandria, Smouha, Smouha Circle, Zohour Bargout Building, floor 4, Apartment 2",
    subtotal: "95.00 EGP",
    deliveryFee: "11.99 EGP",
    total: "106.99 EGP",
  },
  {
    id: 3,
    restaurant: "El Maqam - Semouha",
    date: "14/08/2023",
    item: "Sausage Hawawshi",
    address: "Alexandria, Smouha, Smouha Circle, Zohour Bargout Building, floor 4, Apartment 2",
    subtotal: "95.00 EGP",
    deliveryFee: "11.99 EGP",
    total: "106.99 EGP",
  },
];

export default function MyOrder() {
  return (
    <>
      <div className="MyOrder mx-5 my-3">
        {orders.length === 0 ? (
          <NotFoundData
            imageSrc={NotFoundImage}
            title="There are no saved addresses to display"
            buttonText="Add Address"
          />
        ) : (
          orders.map((order) => (
            <div key={order.id} className="bg-white shadow-lg rounded-lg p-6 my-3">
              <div className="flex justify-between items-center pb-3 mb-3">
                <span className="font-bold text-xl text-gray-800">
                  {order.restaurant}
                </span>
                <span className="text-gray-600 text-lg">
                  Date: <span className="font-medium">{order.date}</span>
                </span>
              </div>
              <p className="text-gray-800 font-bold text-xl">{order.item}</p>
              <div className="flex justify-between pt-3 mt-2">
                <span className="font-semibold text-base text-gray-700">
                  Delivery Address
                </span>
                <p className="text-gray-600 text-base mt-1">{order.address}</p>
              </div>
              <div className="mt-4 space-y-2 text-gray-800">
                <div className="flex justify-between">
                  <span className="font-semibold">Subtotal</span>
                  <span className="font-bold">{order.subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Delivery Fee</span>
                  <span className="font-bold">{order.deliveryFee}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Amount</span>
                  <span>{order.total}</span>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button
                  type="button"
                  className="mt-4 lg:w-1/2 md:w-1/2 w-full bg-red-400 hover:bg-red-500 text-white font-semibold py-3 px-4 rounded-full"
                >
                  Order it again
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
