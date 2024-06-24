'use server';

import { cookies } from 'next/headers';
import { getCookie } from './cookies';

export async function getCart() {
  const cartCookie = getCookie('Cart');
  return (await cartCookie) ? JSON.parse(cartCookie) : [];
}

export async function clearCart() {
  await cookies().set('Cart', JSON.stringify([]));
}
