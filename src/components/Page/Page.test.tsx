import React from "react";
import { render, screen } from "@testing-library/react";

import { Page } from "./Page";
import Text from "components/Text";

// eslint-disable-next-line react/display-name
jest.mock("../Header", () => () => <header data-testid="mock-header" />);

describe("Page", () => {
  it("renders the Page component with a header, main, and footer", () => {
    render(
      <Page
        metaTitle="Test Page"
        description="Test page description"
        image={{ src: "/test-image.png" }}
      >
        <Text>Test content</Text>
      </Page>
    );

    expect(screen.getByTestId("mock-header")).toBeDefined();
    expect(screen.getByRole("main")).toBeDefined();
    expect(screen.getByText("Test content")).toBeDefined();
    expect(screen.getByRole("contentinfo")).toBeDefined();
  });
});
