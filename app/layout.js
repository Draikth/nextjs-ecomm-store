import './globals.scss';
import localFont from 'next/font/local';
import Link from 'next/link';
import { getCookie } from '../util/cookies';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: {
    default: "Oma's Kitchen Bakery | Uplvl Ecomm Proj",
    template: '%s | Uplvl Ecomm Proj',
  },
  description: 'Ecommerce project to simulate a store selling cookies',
};

export default async function RootLayout({ children }) {
  const cartCookie = getCookie('Cart');
  console.log('cart cookie', cartCookie);

  const cartItems = (await cartCookie) ? JSON.parse(cartCookie) : [];
  console.log('cart items', cartItems);
  const totalItemsInCart = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  console.log('Total items in cart:', totalItemsInCart);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <nav>
            <div>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/products">Products</Link>
              <Link href="/cart">
                {' '}
                {totalItemsInCart > 0 && (
                  <div className="productnumber">{totalItemsInCart}</div>
                )}
                Shopping Cart
              </Link>
              <Link href="/checkout">Checkout</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
