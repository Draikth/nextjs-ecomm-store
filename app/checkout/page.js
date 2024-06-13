import Link from 'next/link';
import CheckoutForm from './checkoutForm';

export const metadata = {
  title: 'Checkout Page',
  description: 'Page for processing payment of selected items in cart',
};

export default function CheckoutPage() {
  return (
    <div>
      <h1>Checkout</h1>
      <br />
      <br />
      <div>
        <CheckoutForm />
      </div>
      <br />
      <div>
        <Link href="/cart">Back to Cart</Link>
      </div>
      <br />
      <div>
        <Link href="/">Back to Home page</Link>
      </div>
    </div>
  );
}
