import Image from 'next/image';
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
        {products.map((product) => {
          return (
            <div key={`products-${product.id}`}>
              <div>{product.name}</div>
              <Image
                src={`/images/${product.image}.webp`}
                alt={`product-${product.name}`}
                width={250}
                height={250}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
