// Importing module
console.log('Importing module');

// // addtoCart('bread', 5);
// // console.log(price, tq);

// // import * as ShoppingCart from './shoppingCart.js';

// // ShoppingCart.addtoCart('bread', 5);
// // console.log(ShoppingCart.totalPrice);

import add, { cart } from './shoppingCart.js'; // this imports the default export
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

// // console.log('Start fetching');
// // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// // const data = await res.json();
// // console.log(data);

// // console.log('Something');

// const getLastPost = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// // Not very clean
// // lastPost.then(last => console.log(last));
// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const orderStock = (product, quantity) => {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   // Object that contains everything we want to make public here
//   return {
//     addtoCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addtoCart('apple', 4);
// ShoppingCart2.addtoCart('pizza', 2);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost); // closure

// Export
// export.addtoCart = (product, quantity) => {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to cart`);
// };

// Import
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

// if (module.hot) {
//   module.hot.accept();
// }

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const dimitar = new Person('Dimitar');
console.log('dimitar' ?? null);
console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// Polyfilling async functions
import 'regenerator-runtime/runtime';
