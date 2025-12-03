import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import React from "react";
import { Rating } from "./Rating";

let mockUuidCounter = 0;
vi.mock("uuid", () => ({
  v4: vi.fn(() => `test-uuid-${++mockUuidCounter}`),
}));

describe("Rating component", () => {
  beforeEach(() => {
    mockUuidCounter = 0;
  });

  describe("Michelin ratings", () => {
    it("renders Bib Gourmand rating", () => {
      render(<Rating source="michelin" value="Bib" />);

      const image = screen.getByRole("img");
      expect(image).toHaveAttribute("src", "/images/misc/bib-gourmand.png");
      expect(image).toHaveAttribute("alt", "");
    });

    it("renders single Michelin star", () => {
      render(<Rating source="michelin" value={1} />);

      const images = screen.getAllByRole("img");
      expect(images).toHaveLength(1);
      expect(images[0]).toHaveAttribute(
        "src",
        "/images/misc/michelin-star.svg",
      );
    });

    it("renders multiple Michelin stars", () => {
      render(<Rating source="michelin" value={3} />);

      const images = screen.getAllByRole("img");
      expect(images).toHaveLength(3);
      for (const image of images) {
        expect(image).toHaveAttribute("src", "/images/misc/michelin-star.svg");
      }
    });

    it("renders Michelin rating with review link", () => {
      render(
        <Rating
          source="michelin"
          value={2}
          reviewUrl="https://guide.michelin.com/review"
        />,
      );

      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("href", "https://guide.michelin.com/review");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");

      const images = screen.getAllByRole("img");
      expect(images).toHaveLength(2);
    });

    it("renders Bib Gourmand with review link", () => {
      render(
        <Rating
          source="michelin"
          value="Bib"
          reviewUrl="https://guide.michelin.com/bib"
        />,
      );

      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("href", "https://guide.michelin.com/bib");
    });
  });

  describe("M&O ratings", () => {
    it("renders M&O rating without link", () => {
      render(<Rating source="m&o" value={8} />);

      const image = screen.getByRole("img");
      expect(image).toHaveAttribute("src", "/images/misc/logo-squircle.svg");

      const text = screen.getByText("8/10");
      expect(text).toHaveClass("text-brand");

      expect(screen.queryByRole("link")).not.toBeInTheDocument();
    });

    it("does not render M&O as link even when reviewUrl is provided", () => {
      render(<Rating source="m&o" value={9} reviewUrl="https://example.com" />);

      expect(screen.queryByRole("link")).not.toBeInTheDocument();
      expect(screen.getByText("9/10")).toBeInTheDocument();
    });
  });

  describe("DN ratings", () => {
    it("renders DN rating without link", () => {
      render(<Rating source="dn" value={4} />);

      const image = screen.getByRole("img");
      expect(image).toHaveAttribute("src", "/images/misc/dn-logo.png");

      const text = screen.getByText("4/5");
      expect(text).toHaveClass("text-red-600");

      // Should not be wrapped in a link
      expect(screen.queryByRole("link")).not.toBeInTheDocument();
    });

    it("renders DN rating with link", () => {
      render(
        <Rating source="dn" value={5} reviewUrl="https://www.dn.se/review" />,
      );

      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("href", "https://www.dn.se/review");
      expect(link).toHaveAttribute("target", "_blank");

      const image = screen.getByRole("img");
      expect(image).toHaveAttribute("src", "/images/misc/dn-logo.png");

      expect(screen.getByText("5/5")).toBeInTheDocument();
    });
  });

  describe("SvD ratings", () => {
    it("renders SvD rating without link", () => {
      render(<Rating source="svd" value={5} />);

      const image = screen.getByRole("img");
      expect(image).toHaveAttribute("src", "/images/misc/svd-logo.png");

      const text = screen.getByText("5/6");
      expect(text).toHaveClass("text-svd");

      // Should not be wrapped in a link
      expect(screen.queryByRole("link")).not.toBeInTheDocument();
    });

    it("renders SvD rating with link", () => {
      render(
        <Rating source="svd" value={6} reviewUrl="https://www.svd.se/review" />,
      );

      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("href", "https://www.svd.se/review");
      expect(link).toHaveAttribute("target", "_blank");

      const image = screen.getByRole("img");
      expect(image).toHaveAttribute("src", "/images/misc/svd-logo.png");

      expect(screen.getByText("6/6")).toBeInTheDocument();
    });
  });

  describe("White Guide ratings", () => {
    it("renders White Guide rating without link", () => {
      render(<Rating source="whiteguide" value={3} />);

      const image = screen.getByRole("img");
      expect(image).toHaveAttribute("src", "/images/misc/wg-logo.png");

      const text = screen.getByText("3/5");
      expect(text).toHaveClass("text-gray-700");

      // Should not be wrapped in a link
      expect(screen.queryByRole("link")).not.toBeInTheDocument();
    });

    it("renders White Guide rating with link", () => {
      render(
        <Rating
          source="whiteguide"
          value={4}
          reviewUrl="https://whiteguide.com/review"
        />,
      );

      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("href", "https://whiteguide.com/review");
      expect(link).toHaveAttribute("target", "_blank");

      const image = screen.getByRole("img");
      expect(image).toHaveAttribute("src", "/images/misc/wg-logo.png");

      expect(screen.getByText("4/5")).toBeInTheDocument();
    });
  });
});
