import { act } from "react-dom/test-utils";
import { renderHook } from "@testing-library/react";

import { useMobileScrollCheck } from "./useMobileScrollCheck";

describe("useMobileScrollCheck", () => {
  // Mocking window properties
  beforeAll(() => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 700,
    });
    Object.defineProperty(window, "pageYOffset", {
      writable: true,
      configurable: true,
      value: 0,
    });
  });

  it("set visibility to true for non small screens", () => {
    const setIsVisible = jest.fn();
    window.innerWidth = 800;

    renderHook(() => useMobileScrollCheck(false, setIsVisible, 200, 100));
    expect(setIsVisible).toHaveBeenCalledWith(true);
  });

  it("does not set visibility for small screens on initial render", () => {
    const setIsVisible = jest.fn();
    window.innerWidth = 600;

    renderHook(() => useMobileScrollCheck(false, setIsVisible, 200, 100));
    expect(setIsVisible).not.toHaveBeenCalled();
  });

  it("sets visibility to true for small screens when scrolling beyond limit", () => {
    const setIsVisible = jest.fn();
    window.innerWidth = 600;

    renderHook(() => useMobileScrollCheck(false, setIsVisible, 200, 100));

    act(() => {
      window.pageYOffset = 300;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(setIsVisible).toHaveBeenCalledWith(true);
  });
});
