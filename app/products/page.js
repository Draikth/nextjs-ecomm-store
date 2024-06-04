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
              <img src="/" alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
