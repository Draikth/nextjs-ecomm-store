import { getCookie } from './cookies';

export function getCart() {
  const cartCookie = getCookie('Cart');
  return cartCookie ? JSON.parse(cartCookie) : [];
}
