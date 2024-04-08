import { render, screen } from "@testing-library/react";
import React from "react";

import { Text } from "components/Text/Text";

import { Page } from "./Page";

describe("Page", () => {
  it("renders the Page component with a header, main, and footer", () => {
    render(
      <Page
        metaTitle="Test Page"
        description="Test page description"
        image={{ src: "/test-image.png" }}
      >
        <Text>Test content</Text>
      </Page>,
    );

    expect(screen.getByLabelText("Go to home page")).toBeDefined();
    expect(screen.getByRole("main")).toBeDefined();
    expect(screen.getByText("Test content")).toBeDefined();
    expect(screen.getByRole("contentinfo")).toBeDefined();
  });
});
