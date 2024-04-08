import { render, screen } from "@testing-library/react";

import FoodAndDrinks from "pages/food-and-drinks/index";

describe("FoodAndDrinks", () => {
	it("renders recipe titles", () => {
		render(<FoodAndDrinks />);
		expect(screen.getByText("Alabama Slammer")).toBeDefined();
	});
});
