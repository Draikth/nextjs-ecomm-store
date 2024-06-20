import Link from 'next/link';
import { getCart } from '../../util/cart';

export const metadata = {
  title: 'Shopping Cart',
  description: 'Page for information on products intended for purchase',
};

export default function CartPage() {
  const cartItems = getCart();

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>
        Here products selected for purchase as well as total price of products
        can be reviewed before checkout
      </p>
      <br />
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={`${item.id}`}>
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))
        )}
      </div>
      <br />
      <div>Total Price: ${totalPrice}</div>
      <br />
      <div>
        <Link href="/">Back to Home page</Link>
      </div>
    </div>
  );
}

// tried something else, ended up being more for react than next.js

// import Link from 'next/link';
// import { getProductInsecure } from '../../database/products';
// import { getCartItems } from '../../util/cart';

// export const metadata = {
//   title: 'Shopping Cart',
//   description: 'Page for information on products intended for purchase',
// };

// export default async function CartPage() {
//   const cartItems = getCartItems();
//   const products = await Promise.all(
//     cartItems.map(async (item) => {
//       const product = await getProductInsecure(item.id);
//       return {
//         ...product,
//         quantity: item.quantity,
//       };
//     }),
//   );

//   const totalPrice = products.reduce(
//     (total, product) => total + product.price * product.quantity,
//     0,
//   );

//   return (
//     <div>
//       <h1>Shopping Cart</h1>
//       <p>
//         Here products selected for purchase as well as total price of products
//         can be reviewed before checkout
//       </p>
//       <br />
//       <div>
//         {cartItems.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           cartItems.map((product) => (
//             <div key={`${product.id}`}>
//               <h2>{product.name}</h2>
//               <p>Quantity: {product.quantity}</p>
//               <p>Price: {product.price}</p>
//               <p>Subtotal: {product.price * product.quantity}</p>
//             </div>
//           ))
//         )}
//       </div>
//       <br />
//       <div>Total Price: {totalPrice}</div>
//       <br />

//       <br />
//       <div>
//         <Link href="/">Back to Home page</Link>
//       </div>
//     </div>
//   );
// }
