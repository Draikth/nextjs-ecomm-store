import 'server-only';

const products = [
  {
    id: 1,
    name: 'Chocolate-Chip Cookies',
    type: 'cookie',
    count: 1,
    price: 12,
  },
  {
    id: 2,
    name: 'Oatmeal Cookies',
    type: 'cookie',
    count: 1,
    price: 10,
  },
  {
    id: 3,
    name: 'Sugar Cookies',
    type: 'cookie',
    count: 1,
    price: 8,
  },
  {
    id: 4,
    name: 'Sour-dough Loaf',
    type: 'bread',
    count: 1,
    price: 15,
  },
  {
    id: 5,
    name: 'Carrot Cake',
    type: 'cake',
    count: 1,
    price: 20,
  },
];

export function getProducts() {
  return products;
}
