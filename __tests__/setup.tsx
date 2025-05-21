import "@testing-library/jest-dom";
import React from "react";
import type { NextRouter } from "next/router";

/* 
For some reason using <Image /> from "next/image" causes an console.error when running tests:

  Warning: Received `true` for a non-boolean attribute `priority`

This makes test runs really bloated with this error, so this is a workaround to supress the message
*/
jest.spyOn(global.console, "error").mockImplementationOnce((message) => {
  if (!message.includes("for a non-boolean attribute")) {
    global.console.warn(message);
  }
});

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} alt="" />;
  },
}));

// Mutable mockRouter and setter for per-test overrides
let mockRouter: Partial<NextRouter> = {
  asPath: "/",
  route: "/",
  pathname: "/",
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
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

jest.mock("next/router", () => ({
  useRouter: () => mockRouter,
}));

// Mock mapbox-gl and react-map-gl/mapbox
jest.mock("mapbox-gl", () => ({
  Map: () => null,
}));

jest.mock("react-map-gl/mapbox", () => ({
  __esModule: true,
  default: () => null,
  Map: (props: any) => <div>{props.children}</div>,
  Marker: (props: any) => <div>{props.children}</div>,
  Source: (props: any) => <div>{props.children}</div>,
  Layer: (props: any) => <div>{props.children}</div>,
}));

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
  takeRecords = jest.fn();
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
  value: jest.fn(),
  writable: true,
});

Object.defineProperty(HTMLElement.prototype, "scrollTo", {
  value: jest.fn(),
  writable: true,
});
