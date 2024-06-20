'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';

// Define an interface for the product
interface Product {
  id: number;
  quantity: number;
  name: string;
  price: number;
}

// Define the type for the product quantity cookie
type ProductQuantities = Product[];

// Define the parameters for the addToCart function
export async function addToCart(
  singleProductId: number,
  quantity: number,
  name: string,
  price: number,
): Promise<void> {
  const productQuantityCookie = getCookie('Cart');
  let productQuantities: ProductQuantities = [];

  try {
    productQuantities = productQuantityCookie
      ? (JSON.parse(productQuantityCookie) as ProductQuantities)
      : [];
  } catch (error) {
    console.error('Failed to parse product quantity cookie', error);
  }

  const productToUpdate = productQuantities.find(
    (productQuantity) => productQuantity.id === singleProductId,
  );

  if (!productToUpdate) {
    productQuantities.push({ id: singleProductId, quantity, name, price });
  } else {
    productToUpdate.quantity = quantity;
  }

  await cookies().set('Cart', JSON.stringify(productQuantities));
}
