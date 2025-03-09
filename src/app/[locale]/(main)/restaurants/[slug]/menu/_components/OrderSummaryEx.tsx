import React from 'react';
import OrderSummary from './OrderSummary';

const OrderSummaryEx: React.FC = () => {

  const items = [
    {
      name: 'Sausage Hawawshi',
      size: 'Large',
      specialRequest: 'Add request',
      quantity: 1,
      price: 95.0,
      total: 95.0,
    },
  ];

  return (
    <div className="md:p-4 p-0">
      <OrderSummary
        items={items}
        deliveryAddress="Alexandria, Smouha, Circle, Zahra Building, 4th floor, Apartment 7"
        specialRequests="No onions please"
        subtotal={95.0}
        deliveryFee={13.99}
        total={108.99}
      />
    </div>
  );
};

export default OrderSummaryEx;