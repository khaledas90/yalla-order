import React from 'react';

interface DoneModelProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    message: string;
    confirm: string;
}

const DoneModel: React.FC<DoneModelProps> = ({ isOpen, onClose, title = 'Success', message, confirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                <p className="mb-4">{message}</p>
                <button
                    type="button"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    onClick={onClose}
                >
                    {confirm}
                </button>
            </div>
        </div>
    );
};

export default DoneModel;