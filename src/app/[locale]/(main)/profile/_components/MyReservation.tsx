import React from "react";
import NotFoundData from "./notFoundData";
import NotFoundImage from "@/assets/image/calendar.png";

const Reservations = [
  {
    id: 1,
    restaurant: "Eye Clinic",
    date: "20 min",
    item: "Dr.Ramy Shokry",
    address:
      "Alexandria, Smouha, Smouha Circle, Zohour Bargout Building, floor 4, Apartment 2",
    subtotal: "Sun: 17/11/2023",
    deliveryFee: "11:10 Am",
    total: "200 L.E",
  },
  {
    id: 2,
    restaurant: "Eye Clinic",
    date: "20 min",
    item: "Dr.Ramy Shokry",
    address:
      "Alexandria, Smouha, Smouha Circle, Zohour Bargout Building, floor 4, Apartment 2",
    subtotal: "Sun: 17/11/2023",
    deliveryFee: "11:10 Am",
    total: "200 L.E",
  },
];

export default function MyReservations() {
  return (
    <>
      <div className="MyReservations mx-5 my-3">
        {Reservations.length === 0 ? (
          <NotFoundData
            imageSrc={NotFoundImage}
            title="There are no reservations to view"
            buttonText="Add Address"
          />
        ) : (
          Reservations.map((order) => (
            <div
              key={order.id}
              className="bg-white shadow-lg rounded-lg p-6 my-3"
            >
              <div className="flex justify-between items-center pb-3 mb-3">
                <span className="font-bold text-xl text-gray-800">
                  {order.restaurant}
                </span>
                <span className="text-gray-600 text-lg">
                  Detection per:{" "}
                  <span className="font-medium">{order.date}</span>
                </span>
              </div>
              <p className="text-gray-800 font-bold text-xl">{order.item}</p>
              <div className="flex justify-between pt-3 mt-2">
                <span className="font-semibold text-base text-gray-700">
                  Clinic Address
                </span>
                <p className="text-gray-600 text-base mt-1">{order.address}</p>
              </div>
              <div className="mt-4 space-y-2 text-gray-800">
                <div className="flex justify-between">
                  <span className="font-semibold">Day Reservation</span>
                  <span className="font-bold">{order.subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Reservation Time</span>
                  <span className="font-bold">{order.deliveryFee}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Fees</span>
                  <span>{order.total}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
