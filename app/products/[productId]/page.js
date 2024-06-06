import Image from 'next/image';
import Link from 'next/link';
import { getProduct } from '../../../database/products';

export default function ProductPage(props) {
  const singleProduct = getProduct(Number(props.params.productId));

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
      <div>
        <Link href="/">Back to Home page</Link>
      </div>
    </div>
  );
}
