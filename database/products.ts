import { cache } from 'react';
import { sql } from './connect';

// const products = [
//   {
//     id: 1,
//     name: 'Chocolate-Chip Cookies',
//     type: 'cookie',
//     image: 'chocolate-chip-cookies',
//     price: 12,
//   },
//   {
//     id: 2,
//     name: 'Oatmeal Cookies',
//     type: 'cookie',
//     image: 'oatmeal-cookies',
//     price: 10,
//   },
//   {
//     id: 3,
//     name: 'Ginger Cookies',
//     type: 'cookie',
//     image: 'ginger-cookies',
//     price: 8,
//   },
//   {
//     id: 4,
//     name: 'Sourdough Loaf',
//     type: 'bread',
//     image: 'sourdough-loaf',
//     price: 15,
//   },
//   {
//     id: 5,
//     name: 'Carrot Cake',
//     type: 'cake',
//     image: 'carrot-cake',
//     price: 20,
//   },
// ];

type Product = {
  id: number;
  name: string;
  type: string;
  image: string;
  price: number;
};

export const getProductsInsecure = cache(async () => {
  const products = await sql`
  SELECT
    *
  FROM
    products
 `;

  return products;
});

export const getProductInsecure = cache(async (id: number) => {
  const [product] = await sql`
  SELECT
    *
  FROM
    products
    WHERE id = ${id}
 `;

  return product;
});

// export function getProduct(id) {
//   return products.find((product) => product.id === id);
// }

// console.log(
//   await sql`
//   SELECT
//     *
//   FROM
//     products
//  `,
// );
