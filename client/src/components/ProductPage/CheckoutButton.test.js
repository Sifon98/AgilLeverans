import React from "react";
import CheckoutButton from "./CheckoutButton";
import { render } from "@tessting-library/react";
import "@testing-library/jest-dom/extend-expect";




test("Add to cart button behaves accordingly", async () => {
  const { getByTestId } = render(<CheckoutButton />);
  const innerText = getByTestId("inner-text");

  const buttonEl = getByTestId("button");


  fireEvent.onClick(buttonEl, {
    
  })


  // const { getByTestId } = render(<Product />);

  // const data = await fetchData();

  // expect(data).toBe('peanut butter');
});
