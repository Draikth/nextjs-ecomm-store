'use client';

import { useState } from 'react';

export default function OrderQuantity() {
  const [orderNumber, setOrderNumber] = useState(1);

  const handleIncrease = () => {
    setOrderNumber(orderNumber + 1);
  };

  const handleDecrease = () => {
    setOrderNumber(orderNumber - 1);
  };

  return (
    <form>
      <button onClick={handleIncrease}>More</button>
      <input type="number" value={orderNumber} />
      <button onClick={handleDecrease}>Less</button>
      <button>Add to Cart</button>
    </form>
  );
}
