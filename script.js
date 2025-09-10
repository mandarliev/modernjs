// Importing module
console.log('Importing module');

// addtoCart('bread', 5);
// console.log(price, tq);

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addtoCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

import add, { cart } from './shoppingCart.js'; // this imports the default export
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);
