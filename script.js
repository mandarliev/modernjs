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

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

// console.log('Something');

const getLastPost = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));
const lastPost2 = await getLastPost();
console.log(lastPost2);
