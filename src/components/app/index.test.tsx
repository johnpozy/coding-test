import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./index";
import { findMatching, recipientsData } from "../../utils";


test("renders Print Results button", () => {
  render(<App />);
  const button = screen.getByText("Print Results");
  
  expect(button).toBeTruthy();
});

test("printResults method", () => {
  const results = findMatching(recipientsData);

  expect(results.length).toBeGreaterThan(0);
});
