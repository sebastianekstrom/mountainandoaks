import React from "react";

import type { Preview } from "@storybook/react";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import localFont from "next/font/local";

const headingFont = localFont({
  src: "../public/fonts/Gatile.woff2",
  display: "swap",
  variable: "--font-heading",
});

const bodyFont = localFont({
  display: "swap",
  variable: "--font-sans",
  src: [
    {
      path: "../public/fonts/Stolzl-Book.woff",
      weight: "400",
    },
    {
      path: "../public/fonts/Stolzl-Medium.woff",
      weight: "500",
    },
    {
      path: "../public/fonts/Stolzl-Regular.woff",
      weight: "600",
    },
    {
      path: "../public/fonts/Stolzl-Bold.woff",
      weight: "700",
    },
  ],
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <main className={`${headingFont.variable} ${bodyFont.variable} font-sans`}>
      <Story />
    </main>
  ),
];

export default preview;
