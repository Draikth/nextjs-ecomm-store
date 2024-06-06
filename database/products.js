import 'server-only';

const products = [
  {
    id: 1,
    name: 'Chocolate-Chip Cookies',
    type: 'cookie',
    image: 'chocolate-chip-cookies',
    price: 12,
  },
  {
    id: 2,
    name: 'Oatmeal Cookies',
    type: 'cookie',
    image: 'oatmeal-cookies',
    price: 10,
  },
  {
    id: 3,
    name: 'Ginger Cookies',
    type: 'cookie',
    image: 'ginger-cookies',
    price: 8,
  },
  {
    id: 4,
    name: 'Sourdough Loaf',
    type: 'bread',
    image: 'sourdough-loaf',
    price: 15,
  },
  {
    id: 5,
    name: 'Carrot Cake',
    type: 'cake',
    image: 'carrot-cake',
    price: 20,
  },
];

export function getProducts() {
  return products;
}
