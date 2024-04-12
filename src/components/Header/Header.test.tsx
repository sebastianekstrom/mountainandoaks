import { render, screen, fireEvent, act } from "@testing-library/react";
import React from "react";

import { Header } from "./Header";

describe("Header", () => {
  it("renders the header with logo and menu items", () => {
    render(<Header />);

    expect(screen.getByLabelText("Go to home page")).toBeDefined();
    expect(screen.getByText("Pizza")).toBeDefined();
    expect(screen.getByText("Bread")).toBeDefined();
    expect(screen.getByText("Food & Drinks")).toBeDefined();
    expect(screen.getByText("Guides")).toBeDefined();
  });

  it("toggles the mobile menu", async () => {
    render(<Header />);

    const mobileMenuButton = screen.getByRole("button", {
      name: "Open menu",
    });

    await act(async () => {
      fireEvent.click(mobileMenuButton);
    });

    expect(
      await screen.findByRole("button", { name: "Close menu" }),
    ).toBeDefined();

    expect(await screen.findAllByText(/Pizza/i)).toBeDefined();
    expect(await screen.findAllByText(/Bread/i)).toBeDefined();
    expect(await screen.findAllByText(/Food & Drinks/i)).toBeDefined();
    expect(await screen.findAllByText(/Guides/i)).toBeDefined();

    const closeButton = screen.getByRole("button", { name: "Close menu" });

    await act(async () => {
      fireEvent.click(closeButton);
    });

    expect(screen.queryByRole("button", { name: "Close menu" })).toBe(null);
  });
});
