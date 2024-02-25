import React from "react";
import { render, screen } from "@testing-library/react";
import { Post } from "./Post";
import { useRouter } from "next/router";
import Text from "components/Text";

describe("Post component", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      route: "/bread/sourdough",
    });
  });

  it("renders the Post component with the provided title", () => {
    render(<Post title="Test Title" />);
    expect(screen.getAllByText("Test Title")).toBeDefined();
  });

  it("renders the ingredients and method sections when provided", () => {
    const ingredients = <Text>Test Ingredients</Text>;
    const method = <Text>Test Method</Text>;
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
