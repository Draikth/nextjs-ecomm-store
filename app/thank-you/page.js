import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Thank you for your order',
  description: 'Page thanking user for purchasing from store',
};

export default function ThankYouPage() {
  return (
    <>
      <h1>Thank You For Your Purchase!</h1>
      <br />
      <Image
        src="/images/baked-cookies.webp"
        alt="Grandmother showing a plate of cookies"
        width={650}
        height={500}
      />
      <br />
      <h2>We hope you enjoy your Selection.</h2>
      <br />
      <Link href="/">Back to the Home Page</Link>
      <br />
      <Link href="/products">Back to Products</Link>
    </>
  );
}
