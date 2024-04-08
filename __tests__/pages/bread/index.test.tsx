import { render, screen } from "@testing-library/react";

import Bread from "pages/bread/index";

describe("Bread", () => {
	it("renders recipe titles", () => {
		render(<Bread />);
		expect(screen.getByText("Baguette")).toBeDefined();
	});
});
