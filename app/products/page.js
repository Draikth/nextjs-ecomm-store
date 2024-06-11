import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';

export const metadata = {
  title: 'Products',
  description: 'Page showcasing the products on offer',
};

export default function ProductsPage() {
  const products = getProducts();
  return (
    <div>
      <h1>These Are Our Currently Available Products</h1>
      <div>
        <br />
        {products.map((product) => {
          return (
            <div key={`products-${product.id}`}>
              <Link href={`/products/${product.id}`}>
                <div>{product.name}</div>
                <Image
                  src={`/images/${product.image}.webp`}
                  alt={`product-${product.name}`}
                  width={250}
                  height={250}
                />
              </Link>
            </div>
          );
        })}
        <br />
      </div>
      <br />
      <div>
        <Link href="/">Back to Home page</Link>
      </div>
    </div>
  );
}
