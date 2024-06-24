'use server';
import Link from 'next/link';
import { getCart } from '../../util/cart';
import CartClientComponent from './cartClientComponent';

export default async function CartForm() {
  const cartItems = await getCart();

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  console.log(cartItems);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>
        Here products selected for purchase as well as total price of products
        can be reviewed before checkout
      </p>
      <br />
      <CartClientComponent cartItems={cartItems} totalPrice={totalPrice} />
      <br />
      <div>
        <Link href="/">Back to Home page</Link>
      </div>
    </div>
  );
}
