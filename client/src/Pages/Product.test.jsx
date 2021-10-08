// // Important - do this if you don't want to import 
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
import Product from "./Product";

// This is what you should do in order to "reset" React
// between tests but for some we get an error having do with
// React Easier withContext...
// so right now performing all tests in ONE test block
afterEach(() => {
  cleanup();
});




test("Add product to cart", async () => {

  await act(async () => {

    render(<Product />);
    await sleep(500); // wait for fetches

    const button = document.querySelector(".checkout-btn")
    button.click();
    await sleep(500); // wait for fetches
    expect(button.querySelector("span").innerHTML).toBe("Item added to cart")
  });
}, 10000);

test("Add and then Remove product from cart", async () => {

  await act(async () => {

    render(<Product />);
    await sleep(500); // wait for fetches

    const button = document.querySelector(".checkout-btn")
    button.click();
    button.click();
    await sleep(500); // wait for fetches
    expect(button.querySelector("span").innerHTML).toBe("Add to cart")
  });
}, 10000);