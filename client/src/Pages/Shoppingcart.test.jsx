// Important - do this if you don't want to import 
// React in every component
import React from 'react';
globalThis.React = React;
// Import of test-utilities
// (there are more like screen but nut using them here)
// see: https://reactjs.org/docs/test-utils.html
// and https://testing-library.com/docs/queries/about/
import { render, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

// Make fetch work be mocking it with node-fetch
// (does require that you run the backend whilst running tests)
let f = require('node-fetch');
window.fetch = function (...args) {
  if (args[0].indexOf('/') === 0) {
    args[0] = 'http://localhost:4000' + args[0];
  }
  return f(...args);
}

// A function that let us sleep
// (waiting for fetches, re-renders etc)
let sleep = ms => new Promise(res => setTimeout(res, ms));

// Import App - this means we can test anything in the application
// by the principle: Click on it and check what happens :)
import Shoppingcart from "./Shoppingcart";

// This is what you should do in order to "reset" React
// between tests but for some we get an error having do with
// React Easier withContext...
// so right now performing all tests in ONE test block
afterEach(() => {
  cleanup();
});



function getOriginalProductPrice(product) {
  let price = product.querySelector(".price-tag").innerHTML;
  price = +price.split('$')[1].split('<')[0];

  const productCount = getProductCount(product);

  return (+price.toFixed(2)) / productCount;
}
function getCurrentProductPrice(product) {
  let price = product.querySelector(".price-tag").innerHTML;
  price = price.split("$")[1];
  // price = price.split('$')[1].split('<')[0];
  return +price;
}
function getProductCount(product) {
  return +product.querySelector(".item-count").innerHTML;
}
test("Simulate increment a product N number of times", async () => {

  // increments first product from list, change if you want to increment another product than the first. 
  const idx = 0
  // Button click count
  let N = 5

  await act(async () => {

    render(<Shoppingcart />);
    await sleep(500); // wait for fetches

    // Get current product length
    const initialProducts = getProducts();
    // Get current cart subtotal in float value
    const initialSubtotal = getTotalPrice();

    // Get original product price before incrementing
    const itemCount = getProductCount(initialProducts[idx])
    const currentProductPrice = getCurrentProductPrice(initialProducts[idx])

    // Simulate click to increment product
    const incrementProduct = initialProducts[idx].querySelector(".increment-btn")
    let newProductPrice = 0;
    const originalProductPrice = getOriginalProductPrice(initialProducts[idx]);
    let incrementCount = 0;
    for(let i = 0; i < N; i++) {
      if (getProductCount(initialProducts[idx]) >= 10) continue;
      incrementProduct.click();
      newProductPrice += originalProductPrice
      incrementCount++;
    }
    await sleep(200);

    
    expect(+(getCurrentProductPrice(initialProducts[idx]).toFixed(2))).toBe(currentProductPrice + (+newProductPrice.toFixed(3)));
    expect(getTotalPrice()).toBe(+(initialSubtotal + newProductPrice).toFixed(2));

    if (getProductCount(initialProducts[idx]) <= 10) {
      expect(getProductCount(initialProducts[idx])).toBe(itemCount + incrementCount);
    } else {
      expect(getProductCount(initialProducts[idx])).toBe(10);
    }

  });
});

test("Simulate decrement a product N number of times", async () => {
  // decrement first product from list, change if you want to increment another product than the first. 
  const idx = 0
  // Button click count
  let N = 6

  await act(async () => {

    render(<Shoppingcart />);
    await sleep(500); // wait for fetches

    // Get current product length
    const initialProducts = getProducts();
    // Get current cart subtotal in float value
    const initialSubtotal = getTotalPrice();

    // Get original product price before decrementing
    const itemCount = getProductCount(initialProducts[idx])
    const currentProductPrice = getCurrentProductPrice(initialProducts[idx])
    // console.log(getCurrentProductPrice(initialProducts[idx]))

    // Simulate click to decrement product
    const decrementProduct = initialProducts[idx].querySelector(".decrement-btn")
    let newProductPrice = 0;
    const originalProductPrice = getOriginalProductPrice(initialProducts[idx]);
    let decrementCount = 0;
    for(let i = 0; i < N; i++) {
      if (getProductCount(initialProducts[idx]) === 1) continue;
      decrementProduct.click();
      newProductPrice += originalProductPrice
      decrementCount++;
    }
    await sleep(200);
    
    expect(+(getCurrentProductPrice(initialProducts[idx]).toFixed(2))).toBe(+(currentProductPrice - newProductPrice).toFixed(2));
    expect(getTotalPrice()).toBe(+(initialSubtotal - newProductPrice).toFixed(2));

    if (getProductCount(initialProducts[idx]) > 0) {
      expect(getProductCount(initialProducts[idx])).toBe(itemCount - decrementCount);
    }

  });
});

function getTotalPrice() {
  let initialSubtotal = document.querySelector('#totalSum').innerHTML;
  initialSubtotal = +initialSubtotal.split('$')[1].split('<')[0];
  return +initialSubtotal.toFixed(2);
}
function getProducts() {
  return document.querySelectorAll('.item-container .item');
}
function getProductPrice(product) {
  let price = product.querySelector(".price-tag").innerHTML;
  price = +price.split('$')[1].split('<')[0];
  return +price.toFixed(2);
}
test("Simulate remove N index from product from list", async () => {
  return;

  // Removes first product from list, change if you want to remove another product than the first. 
  const idx = 0

  await act(async () => {

    render(<Shoppingcart />);
    await sleep(500); // wait for fetches

    // Get current product length
    const initialProducts = getProducts();
    // Get current cart subtotal in float value
    const initialSubtotal = getTotalPrice();

    // Get product price before removing it
    const productPrice = getProductPrice(initialProducts[idx]);
    // Simulate one click to remove product
    const removeProduct = initialProducts[idx].querySelector(".remove-item-btn")
    removeProduct.click();
    await sleep(200);

    expect(getProducts().length).toBe(initialProducts.length - 1);
    expect(+getTotalPrice().toFixed(2)).toBe(+(initialSubtotal - productPrice).toFixed(2));

  });
});


test("Test if total price is displayed correctly", async () => {

  await act(async () => {

    render(<Shoppingcart />);
    await sleep(500); // wait for fetches

    // Get current product length
    const initialProducts = getProducts();

    // Simulate click to increment product
    let calculatedTotalPrice = 0;
    for(let i = 0; i < initialProducts.length; i++) {
      const currentProductPrice = getCurrentProductPrice(initialProducts[i])
      calculatedTotalPrice += currentProductPrice
    }
    await sleep(200);

    expect(getTotalPrice()).toBe(+(calculatedTotalPrice).toFixed(2));
  });
});




















// REFERENCE

// // Get all products in the cart
// let productsInCart = document.querySelectorAll('.productInCart');
// // Get the row sum of the first product in the cart
// let rowSum = productsInCart[0].querySelector('.rowSum').innerHTML;
// rowSum = +rowSum.split('$')[1];

// // Checking that the cart rowsum is correct
// // toFixed used to make sure we don't run into rounding errors (see 0.1+0.2)
// expect(rowSum.toFixed(2)).toBe((priceOfFirstProduct * 2).toFixed(2));

// If you should need to change the value of a input field
// that is controlled by React, you can't use 
// document.querySelector('input').value, so look into the test module
// Simulate instead: https://reactjs.org/docs/test-utils.html
