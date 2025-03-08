import React from 'react';
import AddItem from './AddItem';

const AddItemsEx: React.FC = () => {

    const sizeOptions = [
        { label: 'Small', price: 90.00 },
        { label: 'Medium', price: 120.00 },
        { label: 'Large', price: 150.00 },
    ];

    const extraOptions = [
        { label: 'Extra Salami', price: 25.00 },
        { label: 'Extra Oriental Sausage', price: 30.00 },
        { label: 'Extra Mozzarella Cheese', price: 25.00 },
        { label: 'Extra Roumi Cheese', price: 25.00 },
        { label: 'Extra Pasta', price: 30.00 },
    ];

    const sauceOptions = [
        { label: 'Barbecue Sauce', price: 25.00 },
        { label: 'Ranch Sauce', price: 30.00 },
    ];

    const finalOptions = [
        { label: 'MAke it Oriental', price: 20.00 },
    ];

    return (
        <div className="p-4">
            <AddItem
                itemName="Sausage Hawawshi"
                basePrice={95.0}
                sizeOptions={sizeOptions}
                extraOptions={extraOptions}
                sauceOptions={sauceOptions}
                finalOptions={finalOptions}
            />
        </div>
    );
};

export default AddItemsEx;