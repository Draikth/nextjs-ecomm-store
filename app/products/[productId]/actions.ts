'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';

// Case A: cookie is undefined (not set)
// Case B: cookie set, id doesn't exist yet
// Case C: cookie set, id exists already

export type ProductQuant = {
  id: number;
  quantity: string;
};

export async function addToCart(singleProductId: number, quantity: string) {
  // 1. get current cookie
  const productQuantityCookie = getCookie('Cart');

  // 2. parse the cookie value
  const productQuantities: ProductQuant[] = !productQuantityCookie
    ? // Case A: cookie is undefined
      []
    : JSON.parse(productQuantityCookie) || [];
  // Empty array in case JSON.parse has an error

  // 3. edit the cookie value
  const productToUpdate = productQuantities.find((productQuantity) => {
    return productQuantity.id === singleProductId;
  });

  // Case B: cookie set, id doesn't exist yet
  if (!productToUpdate) {
    productQuantities.push({ id: singleProductId, quantity: quantity });
  } else {
    // Case C: cookie set, id exists already
    productToUpdate.quantity = quantity;
  }

  // 4. we override the cookie
  await cookies().set('Cart', JSON.stringify(productQuantities));
}
