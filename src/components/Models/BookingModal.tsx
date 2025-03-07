"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

export default function BookingModal() {
    const [isOpen, setIsOpen] = useState(false);

    interface BookingFormValues {
        fullName: string;
        phoneNumber: string;
        gender: string;
        age: number | string;
        detectionType: string;
        detectionLocation: string;
        dayOfBooking: string;
        bookingTime: string;
    }

    const validationSchema = Yup.object({
        fullName: Yup.string().required("Full Name is required"),
        phoneNumber: Yup.string()
            .matches(/^\+?[\d\s-]{10,}$/, "Invalid phone number")
            .required("Phone Number is required"),
        gender: Yup.string().required("Gender is required"),
        age: Yup.number()
            .typeError("Age must be a number")
            .min(1, "Age must be at least 1")
            .max(120, "Age must be less than 120")
            .required("Age is required"),
        detectionType: Yup.string().required("Detection Type is required"),
        detectionLocation: Yup.string().required("Detection Location is required"),
        dayOfBooking: Yup.date().required("Day of Booking is required"),
        bookingTime: Yup.string().required("Booking Time is required"),
    });

    const initialValues: BookingFormValues = {
        fullName: "",
        phoneNumber: "",
        gender: "",
        age: "",
        detectionType: "normal",
        detectionLocation: "home",
        dayOfBooking: "",
        bookingTime: "",
    };

    const handleSubmit = (
        values: BookingFormValues,
        { setSubmitting, resetForm }: FormikHelpers<BookingFormValues>
    ) => {
        console.log("Form values:", values);
        setSubmitting(false);
        resetForm();
        setIsOpen(false);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="bg-primary text-white px-24 py-2 rounded-3xl hover:bg-prtext-primary/0"
            >
                Reservation Now
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
                    <div className="bg-white w-11/12 md:w-2/3 lg:w-1/3 rounded-xl shadow-lg p-6">
                        <h2 className="text-xl font-bold text-primary mb-4">Booking</h2>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form className="space-y-3">
                                    <div>
                                        <label className="block text-sm font-medium">Full Name</label>
                                        <Field
                                            type="text"
                                            name="fullName"
                                            className="w-full border p-2 rounded-md"
                                        />
                                        <ErrorMessage
                                            name="fullName"
                                            component="div"
                                            className="text-red-500 text-xs"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium">Phone Number</label>
                                        <Field
                                            type="tel"
                                            name="phoneNumber"
                                            className="w-full border p-2 rounded-md"
                                        />
                                        <ErrorMessage
                                            name="phoneNumber"
                                            component="div"
                                            className="text-red-500 text-xs"
                                        />
                                    </div>

                                    <div className="flex gap-4">
                                        <label className="text-sm font-medium">Gender</label>
                                        <label>
                                            <Field
                                                type="radio"
                                                name="gender"
                                                value="Male"
                                                className="mr-2"
                                            />
                                            Male
                                        </label>
                                        <label>
                                            <Field
                                                type="radio"
                                                name="gender"
                                                value="Female"
                                                className="mr-2"
                                            />
                                            Female
                                        </label>
                                        <ErrorMessage
                                            name="gender"
                                            component="div"
                                            className="text-red-500 text-xs"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium">Age</label>
                                        <Field
                                            type="number"
                                            name="age"
                                            className="w-full border p-2 rounded-md"
                                        />
                                        <ErrorMessage
                                            name="age"
                                            component="div"
                                            className="text-red-500 text-xs"
                                        />
                                    </div>

                                    <div className="flex gap-4">
                                        <label className="text-sm font-medium">Detection Type</label>
                                        <label>
                                            <Field
                                                type="radio"
                                                name="detectionType"
                                                value="normal"
                                                className="mr-2"
                                            />
                                            Normal
                                        </label>
                                        <label>
                                            <Field
                                                type="radio"
                                                name="detectionType"
                                                value="urgent"
                                                className="mr-2"
                                            />
                                            Urgent
                                        </label>
                                        <ErrorMessage
                                            name="detectionType"
                                            component="div"
                                            className="text-red-500 text-xs"
                                        />
                                    </div>

                                    <div className="flex gap-4">
                                        <label className="text-sm font-medium">Detection Location</label>
                                        <label>
                                            <Field
                                                type="radio"
                                                name="detectionLocation"
                                                value="home"
                                                className="mr-2"
                                            />
                                            Home Consultation
                                        </label>
                                        <label>
                                            <Field
                                                type="radio"
                                                name="detectionLocation"
                                                value="clinic"
                                                className="mr-2"
                                            />
                                            In Clinic
                                        </label>
                                        <ErrorMessage
                                            name="detectionLocation"
                                            component="div"
                                            className="text-red-500 text-xs"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium">Day of Booking</label>
                                        <Field
                                            type="date"
                                            name="dayOfBooking"
                                            className="w-full border p-2 rounded-md"
                                        />
                                        <ErrorMessage
                                            name="dayOfBooking"
                                            component="div"
                                            className="text-red-500 text-xs"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium">Booking Time</label>
                                        <Field
                                            type="time"
                                            name="bookingTime"
                                            className="w-full border p-2 rounded-md"
                                        />
                                        <ErrorMessage
                                            name="bookingTime"
                                            component="div"
                                            className="text-red-500 text-xs"
                                        />
                                    </div>

                                    <div className="flex justify-end gap-3 mt-4">
                                        <button
                                            type="button"
                                            className="px-4 py-2 border rounded-md"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-primary text-white rounded-md"
                                            disabled={isSubmitting}
                                        >
                                            Confirm Reservation
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            )}
        </>
    );
}