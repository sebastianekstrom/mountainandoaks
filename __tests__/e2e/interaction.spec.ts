import { test, expect } from "@playwright/test";

test.describe("Interaction", () => {
  test("can increment amount", async ({ page }) => {
    await page.goto("http://localhost:3000/pizza/new-york-style");

    expect(page.getByRole("toolbar").getByText("1 pizza")).toBeTruthy();

    await page.getByTestId("TEST_ID_INCREASE_AMOUNT").click();
    expect(page.getByRole("toolbar").getByText("2 pizzas")).toBeTruthy();
    await page.getByTestId("TEST_ID_DECREASE_AMOUNT").click();
    await page.getByTestId("TEST_ID_DECREASE_AMOUNT").click();
    expect(page.getByRole("toolbar").getByText("1 pizza")).toBeTruthy();
  });

  test("can show bakers percentage", async ({ page }) => {
    await page.goto("http://localhost:3000/pizza/new-york-style");

    expect(page.getByRole("toolbar").getByText("105g")).toBeTruthy();

    await page.getByTestId("BAKERS_PERCENTAGE").click();

    expect(page.getByRole("toolbar").getByText("105g (61.8%)")).toBeTruthy();
  });
});
