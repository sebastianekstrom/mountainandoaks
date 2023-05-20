import { test, expect } from "@playwright/test";

import percySnapshot from "@percy/playwright";

test.describe("Navigation", () => {
  test("has title", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await expect(page).toHaveTitle(/Sebbe bakes/);
    await percySnapshot(page, "Home");
  });

  test("can navigate", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.getByRole("navigation").getByText("Pizza").click();
    await expect(page).toHaveTitle(/Pizza/);
    await percySnapshot(page, "Pizza");
  });

  test("can navigate to a recipe", async ({ page }) => {
    await page.goto("http://localhost:3000/pizza");
    await page
      .getByRole("link")
      .getByText("New York style pizza dough")
      .click();

    await expect(page).toHaveURL("http://localhost:3000/pizza/new-york-style");
    await percySnapshot(page, "NY Style");
  });

  test("can navigate to a multi ingredient recipe", async ({ page }) => {
    await page.goto("http://localhost:3000/pizza");
    await page.getByRole("link").getByText("Detroit style pizza").click();

    await expect(page).toHaveURL("http://localhost:3000/pizza/detroit-style");
    await percySnapshot(page, "Detroit style");
  });

  test("can navigate to a multi day recipe", async ({ page }) => {
    await page.goto("http://localhost:3000/bread");
    await page.getByRole("link").getByText("Baguette").click();

    await expect(page).toHaveURL("http://localhost:3000/bread/baguette");
    await percySnapshot(page, "Baguette");
  });
});
