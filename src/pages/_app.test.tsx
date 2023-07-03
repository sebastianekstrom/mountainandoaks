import { render } from "@testing-library/react";
import App from "./_app";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { NextRouter } from "next/router";

jest.mock("@vercel/analytics/react", () => {
  return {
    Analytics: () => <div>Mock Analytics</div>,
  };
});

const routerMock: Partial<NextRouter> = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  query: {},
  push: jest.fn().mockResolvedValue(true),
  replace: jest.fn().mockResolvedValue(true),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(undefined),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
};

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "/",
      query: {},
      asPath: "/",
    };
  },
}));

describe("App", () => {
  it("renders without crashing and passes props correctly", () => {
    const TestComponent = jest.fn(() => null);
    const testProps = { test: "Test Prop" };

    render(
      <RouterContext.Provider value={routerMock as NextRouter}>
        <App
          Component={TestComponent}
          pageProps={testProps}
          router={routerMock as any}
        />
      </RouterContext.Provider>
    );

    expect(TestComponent).toHaveBeenCalledWith(testProps, expect.anything());
  });
});
