'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { addToCart } from './actions';

export default function OrderQuantity({ price, name, id }) {
  const router = useRouter();
  const [orderNumber, setOrderNumber] = useState(1);

  const handleIncrease = () => setOrderNumber(orderNumber + 1);

  const handleDecrease = () => setOrderNumber(Math.max(orderNumber - 1, 1));

  const totalCost = orderNumber * price;

  return (
    <form>
      <button type="button" onClick={handleIncrease}>
        More
      </button>
      <input type="number" value={orderNumber} readOnly />
      <button type="button" onClick={handleDecrease}>
        Less
      </button>
      <div>Total Cost: ${totalCost}</div>
      <button
        data-test-id="product-add-to-cart"
        type="button"
        onClick={async () => {
          await addToCart(id, orderNumber, name, price);
          alert(`${orderNumber} ${name} added to cart!`);
        }}
      >
        Add to Cart
      </button>
      <button type="button" onClick={() => router.push('/cart')}>
        Go to Cart
      </button>
    </form>
  );
}
