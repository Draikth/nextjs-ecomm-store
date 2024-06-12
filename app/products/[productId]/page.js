import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductInsecure } from '../../../database/products';

export async function generateMetadata(props) {
  const singleProduct = await getProductInsecure(
    Number(props.params.productId),
  );

  return {
    title: singleProduct?.name,
    description: 'Single Product Page',
  };
}

export default async function ProductPage(props) {
  const singleProduct = await getProductInsecure(
    Number(props.params.productId),
  );

  if (!singleProduct) {
    notFound();
  }

  console.log('props: ', singleProduct);

  return (
    <div>
      <h1>{singleProduct.name}</h1>

      <div>
        <Image
          src={`/images/${singleProduct.image}.webp`}
          alt={`product-${singleProduct.name}`}
          width={350}
          height={350}
        />
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        </p>
        <br />
        <div>placeholder for where placing orders will occur</div>
      </div>
      <br />
      <Link href="/products">Back to Products page</Link>
      <br />
      <div>
        <Link href="/">Back to Home page</Link>
      </div>
    </div>
  );
}
