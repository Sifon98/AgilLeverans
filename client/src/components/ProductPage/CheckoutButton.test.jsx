// Important - do this if you don't want to import React in every component
// import React from 'react';
// globalThis.React = React;


import React from "react";
import CheckoutButton from "./CheckoutButton";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from '@testing-library/user-event'




test("Add to cart button behaves accordingly", async () => {
  const { getByTestId } = render(<CheckoutButton />);
  const buttonEl = getByTestId("button");
  userEvent.click(buttonEl)

  const span = getByTestId("span");
  expect(span.innerText).toBe("Added to cart")

});
