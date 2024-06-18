'use client';

import { useState } from 'react';
import { addToCart } from './actions';

export default function OrderQuantity({ price, name, id }) {
  const [orderNumber, setOrderNumber] = useState(1);

  const handleIncrease = () => {
    setOrderNumber(orderNumber + 1);
  };

  const handleDecrease = () => {
    if (orderNumber < 2) {
      setOrderNumber(1);
    } else {
      setOrderNumber(orderNumber - 1);
    }
  };

  const totalCost = orderNumber * price;
  const prodName = name;
  const prodId = id;

  return (
    <form>
      <button formAction={async () => await handleIncrease()}>More</button>
      <input type="number" value={orderNumber} />
      <button formAction={async () => await handleDecrease()}>Less</button>
      <br />
      <div>Total Cost: {totalCost} </div>
      <br />
      <br />
      <button
        data-test-id="product-add-to-cart"
        formAction={async () => {
          await addToCart(prodId, orderNumber);
          alert(`${orderNumber} ${prodName} added to cart! `);
        }}
      >
        Add to Cart
      </button>
    </form>
  );
}
