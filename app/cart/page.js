// import Link from 'next/link';
// import { getCart } from '../../util/cart';
// import CartClientComponent from './cartClientComponent';
import CartForm from './Cartform';

export const metadata = {
  title: 'Shopping Cart',
  description: 'Page for information on products intended for purchase',
};

export default function CartPage() {
  //   const cartItems = getCart();

  //   const totalPrice = cartItems.reduce((total, item) => {
  //     return total + item.quantity * item.price;
  //   }, 0);

  //   console.log(cartItems);

  return (
    <CartForm />

    //   <div>
    //     <h1>Shopping Cart</h1>
    //     <p>
    //       Here products selected for purchase as well as total price of products
    //       can be reviewed before checkout
    //     </p>
    //     <br />
    //     <CartClientComponent cartItems={cartItems} totalPrice={totalPrice} />
    //     <br />
    //     <div>
    //       <Link href="/">Back to Home page</Link>
    //     </div>
    //   </div>
  );
}

// import Image from 'next/image';
// import Link from 'next/link';
// import { getCart } from '../../util/cart';

// export const metadata = {
//   title: 'Shopping Cart',
//   description: 'Page for information on products intended for purchase',
// };

// export default function CartPage() {
//   const cartItems = getCart();

//   const totalPrice = cartItems.reduce((total, item) => {
//     return total + item.quantity * item.price;
//   }, 0);

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
//           cartItems.map((item) => (
//             <div key={`${item.id}`}>
//               <p>{item.name}</p>
//               <Image
//                 src={`/images/${item.image}.webp`}
//                 alt={`product-${item.name}`}
//                 width={150}
//                 height={150}
//               />
//               <p>Quantity: {item.quantity}</p>
//               <p>Price: ${item.price}</p>
//             </div>
//           ))
//         )}
//       </div>
//       <div>
//         <button>Clear Cookies</button>
//       </div>
//       <br />
//       <div>Total Price: ${totalPrice}</div>
//       <br />
//       <div>
//         <Link href="/">Back to Home page</Link>
//       </div>
//     </div>
//   );
// }
