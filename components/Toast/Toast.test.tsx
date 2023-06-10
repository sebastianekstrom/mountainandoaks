import { render, fireEvent, act } from "@testing-library/react";
import { Toast } from "./Toast";

describe("<Toast />", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    localStorage.clear();
  });

  it("starts the timer when the start button is clicked", () => {
    const { getByTestId, getByText } = render(<Toast />);

    fireEvent.click(getByTestId("start-btn"));

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(getByText("00:00:01")).toBeDefined();
  });

  it("pauses the timer when the pause button is clicked", () => {
    const { getByTestId, getByText } = render(<Toast />);

    fireEvent.click(getByTestId("start-btn"));
    fireEvent.click(getByTestId("pause-btn"));

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(getByText("00:00:00")).toBeDefined();
  });

  it("resumes the timer when the resume button is clicked", () => {
    const { getByTestId, getByText } = render(<Toast />);

    fireEvent.click(getByTestId("start-btn"));
    fireEvent.click(getByTestId("pause-btn"));
    fireEvent.click(getByTestId("resume-btn"));

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(getByText("00:00:01")).toBeDefined();
  });

  it("restarts the timer when the restart button is clicked", () => {
    const { getByTestId, getByText } = render(<Toast />);

    fireEvent.click(getByTestId("start-btn"));

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    fireEvent.click(getByTestId("restart-btn"));

    expect(getByText("00:00:00")).toBeDefined();
  });
});
