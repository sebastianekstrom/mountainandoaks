import React from "react";
import { render, screen } from "@testing-library/react";
import NeopolitanSauce from "pages/pizza/neapolitan-style-sauce";

describe("NeopolitanSauce page", () => {
  it("renders title correctly", () => {
    render(<NeopolitanSauce />);
    const title = screen.queryAllByText(/Neapolitan style pizza sauce/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<NeopolitanSauce />);
    const ingress = screen.queryAllByText(
      /There's a lot of variants for the tomato sauce/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    render(<NeopolitanSauce />);
    const flourLabel = screen.queryAllByText(/Canned San Marzano tomatoes/i);
    const waterLabel = screen.queryAllByText(/Leaves of fresh basil/i);
    expect(flourLabel).toBeDefined();
    expect(waterLabel).toBeDefined();
  });

  it("renders the method steps", () => {
    render(<NeopolitanSauce />);
    const step = screen.queryAllByText(/When the pan has heated up, add the/i);
    expect(step).toBeDefined();
  });
});
