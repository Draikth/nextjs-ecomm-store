'use client';

import { useState } from 'react';

export default function OrderQuantity() {
  const [orderNumber, setOrderNumber] = useState(1);

  const handleIncrease = () => {
    setOrderNumber(orderNumber + 1);
  };

  const handleDecrease = () => {
    if (orderNumber < 1) {
      setOrderNumber(1);
    } else {
      setOrderNumber(orderNumber - 1);
    }
  };

  return (
    <form>
      <button formAction={async () => await handleIncrease()}>More</button>
      <input type="number" value={orderNumber} />
      <button formAction={async () => await handleDecrease()}>Less</button>
      <br />
      <div>Total Cost: </div>
      <br />
      <br />
      <button>Add to Cart</button>
    </form>
  );
}
