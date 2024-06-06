import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Oma's Kitchen Bakery!</h1>
      <p>Baked Goodies to remind you of your Oma! </p>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
      </ul>
    </div>
  );
}
