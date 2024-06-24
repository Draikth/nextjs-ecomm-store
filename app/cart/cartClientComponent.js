'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { clearCart } from '../../util/cart';

export default function CartClientComponent({
  cartItems: initialCartItems,
  totalPrice: initialTotalPrice,
}) {
  const router = useRouter();
  function toCheckout() {
    router.push('/checkout');
  }

  const [cartItems, setCartItems] = useState(initialCartItems);
  const [totalPrice, setTotalPrice] = useState(initialTotalPrice);

  const handleClearCart = async () => {
    await clearCart();
    setCartItems([]);
    setTotalPrice(0);
  };

  return (
    <div>
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={`${item.id}`}>
              <p>{item.name}</p>
              {item.image ? (
                <Image
                  src={`/images/${item.image}.webp`}
                  alt={`product-${item.name}`}
                  width={150}
                  height={150}
                />
              ) : (
                <p>No image available</p>
              )}
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))
        )}
      </div>
      <br />
      <div>Total Price: ${totalPrice.toFixed(2)}</div>
      <br />
      <div>
        <button onClick={handleClearCart}>Clear Cart</button>
      </div>
      <br />
      <br />
      <div>
        <button onClick={toCheckout}>To Checkout</button>
      </div>
    </div>
  );
}
