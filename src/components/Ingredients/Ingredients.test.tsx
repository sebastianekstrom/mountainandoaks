import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import type { Ingredient, MultiIngredient } from "types/recipe";

import { Ingredients, type RecipeTimes } from "./Ingredients";

const defaultProps = {
	ingredients: [
		{
			value: 1000,
			label: "Flour",
			isFlour: true,
		},
		{
			value: 700,
			label: "Water",
			isWater: true,
		},
	] as Ingredient[],
	ingredientSuffix: "loaf",
	initialValue: 1,
	excludeWeight: false,
	recipeTimes: {
		prepTimeInMinutes: 30,
		proofTimeInMinutes: 240,
		roomTempTimeInMinutes: 60,
	} as RecipeTimes,
};

const defaultPropsMultiIngredient = {
	ingredients: [
		{
			label: "Section 1",
			ingredients: [
				{
					value: 1000,
					label: "Flour",
					isFlour: true,
				},
				{
					value: 700,
					label: "Water",
					isWater: true,
				},
			],
		},
		{
			label: "Section 2",
			ingredients: [
				{
					value: 200,
					label: "Salt",
				},
				{
					value: 50,
					label: "Yeast",
				},
			],
		},
	] as MultiIngredient[],
	ingredientSuffix: "loaf",
	initialValue: 1,
	excludeWeight: false,
	recipeTimes: {
		prepTimeInMinutes: 30,
		proofTimeInMinutes: 240,
		roomTempTimeInMinutes: 60,
	} as RecipeTimes,
};

describe("Ingredients", () => {
	it("renders single ingredient list", () => {
		render(<Ingredients {...defaultProps} />);
		expect(screen.getByText("Flour")).toBeDefined();
		expect(screen.getByText("Water")).toBeDefined();
	});

	it("renders multi-ingredient list", () => {
		render(<Ingredients {...defaultPropsMultiIngredient} />);
		expect(screen.getByText("Section 1")).toBeDefined();
		expect(screen.getByText("Section 2")).toBeDefined();
		expect(screen.getByText("Flour")).toBeDefined();
		expect(screen.getByText("Water")).toBeDefined();
		expect(screen.getByText("Salt")).toBeDefined();
		expect(screen.getByText("Yeast")).toBeDefined();
	});

	it("increases the multiplier", async () => {
		render(<Ingredients {...defaultProps} />);

		await userEvent.click(screen.getByLabelText("Increase amount"));

		expect(await screen.findByText("2 loaves")).toBeDefined();

		await userEvent.click(screen.getByLabelText("Increase amount"));

		expect(await screen.findByText("3 loaves")).toBeDefined();
	});

	it("decreases the multiplier", async () => {
		render(<Ingredients {...defaultProps} />);

		await userEvent.click(screen.getByLabelText("Increase amount"));
		expect(await screen.findByText("2 loaves")).toBeDefined();

		await userEvent.click(screen.getByLabelText("Decrease amount"));
		expect(await screen.findByText("1 loaf")).toBeDefined();
	});

	it("does not decrease the multiplier below 1", async () => {
		render(<Ingredients {...defaultProps} />);

		await userEvent.click(screen.getByLabelText("Decrease amount"));
		await userEvent.click(screen.getByLabelText("Decrease amount"));
		await userEvent.click(screen.getByLabelText("Decrease amount"));

		expect(await screen.findByText("1 loaf")).toBeDefined();
	});

	it("calls onChangeMultiplier when multiplier changes", async () => {
		const onChange = jest.fn();
		render(<Ingredients {...defaultProps} onChangeMultiplier={onChange} />);

		await userEvent.click(screen.getByLabelText("Increase amount"));
		expect(await screen.findByText("2 loaves")).toBeDefined();
		expect(onChange).toHaveBeenCalledWith(2);

		await userEvent.click(screen.getByLabelText("Decrease amount"));
		expect(await screen.findByText("1 loaf")).toBeDefined();
		expect(onChange).toHaveBeenCalledWith(1);
	});
});
