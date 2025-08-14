/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h1: "66px",
        h2: "41px",
        h3: "32px",
        h4: "26px",
        paragraph: "18px",
        caption: "12px",
        ingress: "26px",
        logo: "36px",
      },
      lineHeight: {
        h1: "70px;",
        h2: "1.25",
        h3: "1.25",
        h4: "1.25",
        paragraph: "1.25",
        ingress: "1.25",
        logo: "43.85px",
      },
      colors: {
        regular: "rgba(0,0,0,0.8)",
        "background-regular": "#FEFAF6",
        "background-header": "#FFF3E0",
        cta: "#CA9A4A",
        brand: "#3f4187",
        "brand-secondary": "#f7edee",
        "brand-subdued": "#7577B7",
        separator: "#E9E9E9",
        outline: "#3f41888f",
        "pill-background": "#3f41888f",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        sans: ["var(--font-sans)"],
      },
      keyframes: {
        hide: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        slideIn: {
          from: {
            transform: "translateX(calc(100% + var(--viewport-padding)))",
          },
          to: { transform: "translateX(0)" },
        },
        swipeOut: {
          from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
          to: { transform: "translateX(calc(100% + var(--viewport-padding)))" },
        },
      },
      animation: {
        hide: "hide 100ms ease-in",
        slideIn: "slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        swipeOut: "swipeOut 100ms ease-out",
      },
    },
  },
  plugins: [],
};
