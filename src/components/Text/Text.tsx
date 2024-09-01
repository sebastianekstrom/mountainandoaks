import localFont from "next/font/local";
import { Anek_Gujarati } from "next/font/google";

const AnekGujarati = Anek_Gujarati({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: "600",
});

import type React from "react";

import { convertStringToID } from "utils/convertStringToID";

const bodyFont = localFont({
  display: "swap",
  variable: "--font-sans",
  src: [
    {
      path: "../../../public/fonts/Geist-Regular.woff",
      weight: "400",
    },
    {
      path: "../../../public/fonts/Geist-Medium.woff",
      weight: "500",
    },
    {
      path: "../../../public/fonts/Geist-SemiBold.woff",
      weight: "600",
    },
    {
      path: "../../../public/fonts/Geist-Bold.woff",
      weight: "700",
    },
  ],
});

interface Props {
  children: React.ReactNode;
  extra?: React.ReactNode;
  variant?: "body" | "h1" | "h2" | "h3" | "h4" | "caption" | "ingress" | "logo";
  classNames?: string;
  anchorID?: string;
}

export const Text = ({
  children,
  extra,
  variant = "body",
  classNames,
  anchorID,
}: Props) => {
  const additionalClasses = classNames ? classNames : "";
  const id = convertStringToID(anchorID);

  switch (variant) {
    case "caption":
      return (
        <>
          <p
            className={`${bodyFont.variable} font-sans text-caption leading-paragraph ${additionalClasses}`}
          >
            {children}
          </p>
          {extra}
        </>
      );
    case "ingress":
      return (
        <>
          <p
            className={`${bodyFont.variable} font-sans text-[22px] leading-[32px] md:text-ingress md:leading-ingress font-normal text-regular mb-8 ${additionalClasses}`}
          >
            {children}
          </p>
          {extra}
        </>
      );
    case "body":
      return (
        <>
          <p
            className={`${bodyFont.variable} font-sans text-paragraph text-regular leading-paragraph ${additionalClasses}`}
          >
            {children}
          </p>
          {extra}
        </>
      );
    case "h1":
      return (
        <h1
          id={anchorID ? id : undefined}
          className={`${AnekGujarati.variable} font-bold font-heading text-[44px] leading-[44px] md:text-h1 md:leading-h1 text-regular mb-8 ${additionalClasses}`}
        >
          {children}
        </h1>
      );
    case "h2": {
      const h2 = (
        <h2
          id={anchorID ? id : undefined}
          className={`${AnekGujarati.variable} font-heading tracking-tight font-bold text-[34px] leading-[38px] md:text-h2 md:leading-h2 text-regular ${additionalClasses}`}
        >
          {children}
        </h2>
      );

      if (anchorID) {
        return <a href={`#${id}`}>{h2}</a>;
      }

      return h2;
    }

    case "h3": {
      const h3 = (
        <h3
          id={anchorID ? id : undefined}
          className={`${AnekGujarati.variable} font-heading font-bold text-h3 leading-h3 text-regular ${additionalClasses}`}
        >
          {children}
        </h3>
      );

      if (anchorID) {
        return <a href={`#${id}`}>{h3}</a>;
      }

      return h3;
    }
    case "h4": {
      const h4 = (
        <h4
          id={anchorID ? id : undefined}
          className={`${AnekGujarati.variable} font-heading font-bold text-h4 leading-h4 text-regular ${additionalClasses}`}
        >
          {children}
        </h4>
      );
      if (anchorID) {
        return <a href={`#${id}`}>{h4}</a>;
      }

      return h4;
    }
    case "logo":
      return (
        <h3
          className={`${AnekGujarati.variable} ${additionalClasses} font-heading text-[38px] tracking-tight md:text-logo leading-logo text-regular`}
        >
          {children}
        </h3>
      );
    default:
      return (
        <>
          <p
            className={`${bodyFont.variable} font-sans text-paragraph leading-paragraph ${additionalClasses}`}
          >
            {children}
          </p>
          {extra}
        </>
      );
  }
};
