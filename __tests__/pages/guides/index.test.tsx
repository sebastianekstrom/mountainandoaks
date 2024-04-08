import { render, screen } from "@testing-library/react";

import Guides from "pages/guides/index";

describe("Guides", () => {
	it("renders guide titles", () => {
		render(<Guides />);
		expect(screen.getByText("Gear for baking")).toBeDefined();
	});
});
