import Link from 'next/link';

export default function RootNotFound() {
  return (
    <>
      <div>Sorry this page you were looking for was not found.</div>
      <div>
        <Link href="/">Return to Home page</Link>
      </div>
    </>
  );
}
