import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Oma's Kitchen Bakery!</h1>
      <p>Baked Goodies to remind You of your Oma! </p>
      <br />
      <div>
        <Image
          src="/images/grandma-in-kitchen.webp"
          alt="Grandmother in Kitchen with children"
          width={650}
          height={500}
        />
      </div>
      <br />
      <br />
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
