'use client';
import Link from 'next/link';

export default function RootError() {
  console.log('Error Page');
  return (
    <div>
      <div>Error! Something went wrong!</div>
      <br />
      <Link href="/">Return Home</Link>
    </div>
  );
}
