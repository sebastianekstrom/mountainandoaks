import React from "react";
import { render, screen } from "@testing-library/react";
import { Post } from "./Post";
import { useRouter } from "next/router";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    /* eslint-disable no-unused-vars */
    const { priority, ...restProps } = props; // destructure props to exclude 'priority'
    /* eslint-enable no-unused-vars */
    /* eslint-disable @next/next/no-img-element */
    return <img {...restProps} alt="" />;
    /* eslint-enable @next/next/no-img-element */
  },
}));

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Post component", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      route: "/bread/sourdough",
    });
  });

  it("renders the Post component with the provided title", () => {
    render(<Post title="Test Title" />);
    expect(screen.queryAllByText("Test Title")).toBeDefined();
  });

  it("renders the ingredients and method sections when provided", () => {
    const ingredients = <p>Test Ingredients</p>;
    const method = <p>Test Method</p>;
    render(
      <Post title="Test Title" ingredients={ingredients} method={method} />
    );
    expect(screen.getByText("Test Ingredients")).toBeDefined();
    expect(screen.getByText("Test Method")).toBeDefined();
  });

  it("renders the recommended section with the correct category title", () => {
    render(<Post title="Test Title" />);
    expect(screen.getByText("More delicious bread")).toBeDefined();
  });
});
