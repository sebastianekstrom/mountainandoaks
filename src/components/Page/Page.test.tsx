import React from "react";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import { Page } from "./Page";
import Text from "components/Text";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

// eslint-disable-next-line react/display-name
jest.mock("../Header", () => () => <header data-testid="mock-header" />);

describe("Page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
    });
  });

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
