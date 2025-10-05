import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import React from "react";

describe("Test cases for Contact Us Page",()=> {
it("Should load the ContactUs component", () => {
  render(<ContactUs />);

  // Querying
  const heading = screen.getByRole("heading");
  // Assertion
  expect(heading).toBeInTheDocument();
});

test("Should load the button on ContactUs component", () => {
  render(<ContactUs />);
  const button = screen.getByText("Submit");

  expect(button).toBeInTheDocument()
});

})

//describe("", ()=> {}) ::=> grouping of bunch of test cases
// it / test are both same, it is an alias of test , just a better naming convention like it("should do....")

