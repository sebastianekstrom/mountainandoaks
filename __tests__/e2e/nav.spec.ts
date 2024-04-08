import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
	test("has title", async ({ page }) => {
		await page.goto("http://localhost:3000/");
		await expect(page).toHaveTitle(/Sebbe bakes/);
	});

	test("can navigate", async ({ page }) => {
		await page.goto("http://localhost:3000/");
		await page.getByRole("navigation").getByText("Pizza").click();
		await expect(page).toHaveTitle(/Pizza/);
	});

	test("can navigate to a recipe", async ({ page }) => {
		await page.goto("http://localhost:3000/pizza");
		await page
			.getByRole("link")
			.getByText("New York style pizza dough")
			.click();

		await expect(page).toHaveURL("http://localhost:3000/pizza/new-york-style");
	});

	test("can navigate to a multi ingredient recipe", async ({ page }) => {
		await page.goto("http://localhost:3000/pizza");
		await page.getByRole("link").getByText("Detroit style pizza").click();

		await expect(page).toHaveURL("http://localhost:3000/pizza/detroit-style");
	});

	test("can navigate to a multi day recipe", async ({ page }) => {
		await page.goto("http://localhost:3000/bread");
		await page.getByRole("link").getByText("Baguette").click();

		await expect(page).toHaveURL("http://localhost:3000/bread/baguette");
	});
});
