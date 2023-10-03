import React from "react";
import { render, screen } from "@testing-library/react";
import Piefection from "pages/guides/piefection";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Piefection page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/guides/piefection",
    });
  });

  it("renders title correctly", () => {
    render(<Piefection />);
    const title = screen.queryAllByText(/The Art of Pie-fection/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<Piefection />);
    const ingress = screen.queryAllByText(/Ah, pizza—the culinary equivalent/i);
    expect(ingress).toBeDefined();
  });

  it("renders some steps", () => {
    render(<Piefection />);
    const step = screen.queryAllByText(
      /Hosting a pizza party can feel like herding/i
    );
    expect(step).toBeDefined();
  });
});
