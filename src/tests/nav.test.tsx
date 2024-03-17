// nav.test.tsx

// import { it, expect } from "vitest";
// import { render, fireEvent } from "@testing-library/react";
// // import { toHaveTextContent, toHaveClass } from "@testing-library/jest-dom";
// import NavBar from "../components/Nav";

// // Extend the global Jest matchers with additional typings
// expect.extend({ toHaveTextContent, toHaveClass });

// it("renders the NavBar component", () => {
//   // Arrange
//   const { getByAltText, getByRole, getByText } = render(<NavBar />);

//   // Act
//   const logoElement = getByAltText("Logo");
//   const hamburgerButton = getByRole("button", { name: /menu/i });
//   const featuresLink = getByText("Features");
//   const pricingLink = getByText("Pricing");

//   // Assert
//   expect(logoElement).toHaveProperty("tagName", "IMG");
//   expect(hamburgerButton).toHaveProperty("tagName", "BUTTON");
//   expect(featuresLink).toHaveTextContent("Features");
//   expect(pricingLink).toHaveTextContent("Pricing");
// });

// it("toggles menu on hamburger click", () => {
//   // Arrange
//   const { getByRole, getByText } = render(<NavBar />);
//   const hamburgerButton = getByRole("button", { name: /menu/i });
//   const featuresLink = getByText("Features");
//   const pricingLink = getByText("Pricing");

//   // Initially, the menu should be closed
//   expect(featuresLink).not.toHaveClass("visible");
//   expect(pricingLink).not.toHaveClass("visible");

//   // Act
//   fireEvent.click(hamburgerButton);

//   // After clicking, the menu should be open
//   expect(featuresLink).toHaveClass("visible");
//   expect(pricingLink).toHaveClass("visible");

//   // Click the hamburger menu again to close it
//   fireEvent.click(hamburgerButton);

//   // After clicking again, the menu should be closed
//   expect(featuresLink).not.toHaveClass("visible");
//   expect(pricingLink).not.toHaveClass("visible");
// });
