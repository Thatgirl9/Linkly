// import { render } from "@testing-library/react";
import NavBar from "../components/Nav";
import { it, expect } from "vitest";
import "@testing-library/jest-dom";

// import React from 'react';
import { render } from "@testing-library/react";
// import NavBar from './NavBar';

// describe("NavBar component", () => {
it("renders correctly", () => {
  const { getByText, getByAltText } = render(<NavBar />);

  // Ensure the logo is rendered
  const logoElement = getByAltText("Logo");
  expect(logoElement).toBeInTheDocument();

  // Ensure Features link is rendered
  const featuresLink = getByText("Features");
  expect(featuresLink).toBeInTheDocument();

  // Ensure Pricing link is rendered
  const pricingLink = getByText("Pricing");
  expect(pricingLink).toBeInTheDocument();
});

// it("toggles menu on hamburger click", () => {
//   const { getByRole } = render(<NavBar />);

//   // Initially, the menu should be closed
//   const menu = getByRole("navigation");
//   expect(menu).not.toHaveClass("h-[100vh]");

//   // Click the hamburger menu
//   const hamburgerButton = getByRole("button", { name: /menu/i });
//   fireEvent.click(hamburgerButton);

//   // After clicking, the menu should be open
//   expect(menu).toHaveClass("h-[100vh]");

//   // Click the hamburger menu again to close it
//   fireEvent.click(hamburgerButton);

//   // After clicking again, the menu should be closed
//   expect(menu).not.toHaveClass("h-[100vh]");
// });
// });
// Renders the header and navigation bar with logo, hamburger menu, links, and buttons.
it("should render the header and navigation bar with all elements", () => {
  // Arrange

  // Act
  const { getByAltText, getByRole, getAllByRole } = render(<NavBar />);

  // Assert
  expect(getByAltText("Logo")).toBeInTheDocument();
  expect(getByRole("button", { name: "menu" })).toBeInTheDocument();
  expect(getAllByRole("link")).toHaveLength(2);
  expect(getByRole("link", { name: "Login" })).toBeInTheDocument();
  expect(getByRole("link", { name: "Register Now" })).toBeInTheDocument();
});
