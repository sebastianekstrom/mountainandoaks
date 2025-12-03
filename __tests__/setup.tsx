import "@testing-library/jest-dom/vitest";
import { vi, beforeEach } from "vitest";
import React from "react";
import type { NextRouter } from "next/router";

// Suppress common test warnings that bloat test output
const originalError = console.error.bind(console);
beforeEach(() => {
  vi.spyOn(console, "error").mockImplementation((...args: any[]) => {
    const message = args[0]?.toString() || "";
    // Suppress these specific warnings
    if (
      message.includes("for a non-boolean attribute") ||
      message.includes("ReactDOMTestUtils.act is deprecated") ||
      message.includes("Function components cannot be given refs")
    ) {
      return;
    }
    originalError(...args);
  });
});

// Mock image requires
vi.mock("**/public/images/**/*.{jpg,jpeg,png,gif,svg,webp}", () => ({
  default: "mocked-image.jpg",
}));

vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} alt="" />;
  },
}));

vi.mock("next/font/google", () => ({
  Anek_Gujarati: () => ({
    className: "mocked-font",
    variable: "--font-anek-gujarati",
  }),
  Inter: () => ({
    className: "mocked-font",
    variable: "--font-inter",
  }),
}));

vi.mock("next/font/local", () => ({
  __esModule: true,
  default: () => ({
    className: "mocked-font",
    variable: "--font-local",
  }),
}));

// Mutable mockRouter and setter for per-test overrides
let mockRouter: Partial<NextRouter> = {
  asPath: "/",
  route: "/",
  pathname: "/",
  query: {},
  push: vi.fn(),
  replace: vi.fn(),
  reload: vi.fn(),
  back: vi.fn(),
  forward: vi.fn(),
  prefetch: vi.fn(),
  beforePopState: vi.fn(),
  events: {
    on: vi.fn(),
    off: vi.fn(),
    emit: vi.fn(),
  },
  isFallback: false,
  isLocaleDomain: false,
  isReady: true,
  isPreview: false,
  basePath: "",
  locale: "",
  locales: [],
  defaultLocale: "",
  domainLocales: [],
};

export function setMockRouter(newRouter: Partial<NextRouter>) {
  mockRouter = { ...mockRouter, ...newRouter };
}

vi.mock("next/router", () => ({
  useRouter: () => mockRouter,
}));

// Mock mapbox-gl and react-map-gl/mapbox
vi.mock("mapbox-gl", () => ({
  Map: () => null,
}));

vi.mock("react-map-gl/mapbox", () => ({
  __esModule: true,
  default: () => null,
  Map: (props: any) => <div>{props.children}</div>,
  Marker: (props: any) => <div>{props.children}</div>,
  Source: (props: any) => <div>{props.children}</div>,
  Layer: (props: any) => <div>{props.children}</div>,
}));

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn();
  root = null;
  rootMargin = "";
  thresholds = [];
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

Object.defineProperty(global, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

// Mock scrollTo for all elements (JSDOM does not implement it)
Object.defineProperty(window, "scrollTo", {
  value: vi.fn(),
  writable: true,
});

Object.defineProperty(HTMLElement.prototype, "scrollTo", {
  value: vi.fn(),
  writable: true,
});
