import Link from 'next/link';

export const metadata = {
  title: 'Checkout Page',
  description: 'Page for processing payment of selected items in cart',
};

export default function CheckoutPage() {
  return (
    <div>
      <h1>Checkout</h1>
      <p>
        Processing of payment for selected items in cart, will have to deal with
        secure information such as credit card and banking info etc.
      </p>
      <br />
      <div>
        <Link href="/">Back to Home page</Link>
      </div>
    </div>
  );
}
