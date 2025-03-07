"use client"
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import DoneModel from '@/components/Models/DoneModel';

interface ReservationTableProps {
    clinicName?: string;
    doctorName?: string;
    specialty?: string;
    waitingTime?: string;
    detectionTime?: string;
    clinicAddress?: string;
    patientName?: string;
    phoneNumber?: string;
    gender?: string;
    age?: string;
    reservationDate?: string;
    reservationTime?: string;
    paymentMethod?: string;
    fees?: string;
}

const ReservationTable: React.FC<ReservationTableProps> = ({
    clinicName,
    doctorName,
    specialty,
    waitingTime,
    detectionTime,
    clinicAddress,
    patientName,
    phoneNumber,
    gender,
    age,
    reservationDate,
    reservationTime,
    paymentMethod,
    fees,
}) => {
    const t = useTranslations('common.reservation');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleConfirm = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="w-full md:w-2/3 bg-white rounded-lg shadow-lg md:p-5 p-2 font-sans">
            <div className="bg-black text-white p-2 text-center rounded-t-lg text-lg font-bold mb-5 -mx-5 -mt-5">
                {t('Reservation Summary')}
            </div>
            <div className="mb-5">
                <h3 className="text-lg font-bold mb-2 bg-gray-100 rounded-md px-2">
                    {t('Eye Clinic') || clinicName}
                </h3>
                <div className="flex justify-between border-b border-gray-300 py-2">
                    <span className="font-bold text-gray-700">{t('Name')}</span>
                    <span className="text-gray-600">{t('Ramy Shokry') || doctorName}</span>
                </div>
                <div className="flex justify-between border-b border-gray-300 py-2">
                    <span className="font-bold text-gray-700">{t('Specialty')}</span>
                    <span className="text-gray-600">{t('General ophthalmologist') || specialty}</span>
                </div>
                <div className="flex justify-between border-b border-gray-300 py-2">
                    <span className="font-bold text-gray-700">{t('Waiting Time')}</span>
                    <span className="text-gray-600">{t('10 min') || waitingTime}</span>
                </div>
                <div className="flex justify-between border-b border-gray-300 py-2">
                    <span className="font-bold text-gray-700">{t('Detection per')}</span>
                    <span className="text-gray-600">{t('20 min') || detectionTime}</span>
                </div>
                <div className="flex justify-between border-b border-gray-300 py-2">
                    <span className="font-bold text-gray-700">{t('Clinic address')}</span>
                    <span className="text-gray-600 break-words">
                        {t('Alexandria, Smouha, Smouha Circle, Zohour Bargout Building, Fourth 4, Apartment 2') || clinicAddress}
                    </span>
                </div>
            </div>
            <div className="mb-5">
                <h3 className="text-lg font-bold mb-2 bg-gray-100 rounded-md px-2">{t('Patient Data')}</h3>
                <div className="flex justify-between border-b border-gray-300 py-2">
                    <span className="font-bold text-gray-700">{t('Patient Name')}</span>
                    <span className="text-gray-600">{t('Nada Saleh') || patientName}</span>
                </div>
                <div className="flex justify-between border-b border-gray-300 py-2">
                    <span className="font-bold text-gray-700">{t('Phone Number')}</span>
                    <span className="text-gray-600">{phoneNumber || '01099******'}</span>
                </div>
                <div className="flex justify-between border-b border-gray-300 py-2">
                    <span className="font-bold text-gray-700">{t('Gender')}</span>
                    <span className="text-gray-600">{gender || t('Female')}</span>
                </div>
                <div className="flex justify-between border-b border-gray-300 py-2">
                    <span className="font-bold text-gray-700">{t('Age')}</span>
                    <span className="text-gray-600">{age || t('25 Year')}</span>
                </div>
                <div className="flex justify-between border-b border-gray-300 py-2">
                    <span className="font-bold text-gray-700">{t('Day Reservation')}</span>
                    <span className="text-gray-600">{reservationDate || 'Sun, 17/11/2023'}</span>
                </div>
                <div className="flex justify-between border-b border-gray-300 py-2">
                    <span className="font-bold text-gray-700">{t('Reservation Time')}</span>
                    <span className="text-gray-600">{reservationTime || '11:10 Am'}</span>
                </div>
            </div>
            <div>
                <h3 className="text-lg font-bold mb-2 bg-gray-100 rounded-md px-2">{t('Payment Summary')}</h3>
                <p className="text-sm text-gray-500 mb-2">{t('Got a voucher code')}</p>
                <div className="flex justify-between border-b border-gray-300 py-2 font-bold">
                    <span className="text-gray-700">{t('Payment')}</span>
                    <span className="text-gray-600">{t('Cash') || paymentMethod}</span>
                </div>
                <div className="flex justify-between border-b border-gray-300 py-2 font-bold text-lg">
                    <span className="text-gray-700">{t('fees')}</span>
                    <span className="text-gray-600">{fees || '200 L.E'}</span>
                </div>
                <button
                    type="button"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg text-lg w-full mt-5 hover:bg-blue-600 transition-colors"
                    onClick={handleConfirm}
                >
                    {t('Confirm Order')}
                </button>
            </div>
            <DoneModel
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                title={t('Confirmation')}
                message={t('Your reservation has been successfully confirmed!')}
                confirm={t("Done")}
            />
        </div>
    );
};

export default ReservationTable;