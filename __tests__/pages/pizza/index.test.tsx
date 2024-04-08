import { render, screen } from "@testing-library/react";

import Pizza from "pages/pizza/index";

describe("Pizza", () => {
	it("renders recipe titles", () => {
		render(<Pizza />);
		expect(screen.getByText("New York style pizza dough")).toBeVisible();
		expect(screen.getByText("Detroit style pizza")).toBeVisible();
	});
});
