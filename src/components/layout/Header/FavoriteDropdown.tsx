import { useState } from "react";
import { Icon } from "@iconify/react";

const FavoriteDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState([
        { name: "Sausage Hawawshi", quantity: 1 },
        { name: "Chocolate Pie", quantity: 1 }
    ]);

    const updateQuantity = (index: number, delta: number) => {
        setItems((prev) =>
            prev.map((item, i) =>
                i === index ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
            )
        );
    };

    return (
        <div className="relative">
            <button
                title="Favorites"
                type="button"
                className="hover:scale-105 transition-all duration-300 flex items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Icon icon="solar:heart-linear" width="25" height="25" />
            </button>

            {isOpen && (
                <div className="absolute z-40 right-0 mt-2 w-52 bg-white shadow-lg rounded-lg">
                    <div className="bg-main text-white p-2 rounded-t-lg font-bold">
                        My Favorite
                    </div>

                    {items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-2 text-gray-700 hover:bg-gray-100 hover:rounded-lg">
                            <span>{item.name}</span>
                            <div className="flex items-center">
                                <button type="button" title="minus" onClick={() => updateQuantity(index, -1)} className="text-red-500">
                                    <Icon icon="mdi:minus-circle-outline" width="20" height="20" />
                                </button>
                                <span className="mx-2 text-gray-900">{item.quantity}</span>
                                <button type="button" title="plus" onClick={() => updateQuantity(index, 1)} className="text-green-500">
                                    <Icon icon="mdi:plus-circle-outline" width="20" height="20" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FavoriteDropdown;
