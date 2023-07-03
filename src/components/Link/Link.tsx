import React from "react";
import { default as NextLink } from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

interface Props {
  children: React.ReactNode;
  href: string;
  noColor?: boolean;
  external?: boolean;
  underline?: boolean;
  target?: React.HTMLAttributeAnchorTarget | undefined;
}

export const Link = ({
  href,
  children,
  external,
  underline = true,
  target = "_self",
}: Props) => {
  return (
    <NextLink
      target={target}
      href={href}
      className={`font-regular ${external ? "inline-flex items-center" : ""} ${
        underline ? "underline" : ""
      }`}
    >
      {children}

      {external && (
        <ArrowTopRightOnSquareIcon
          className="ml-0.5 h-5 w-5 lg:h-4 lg:w-4 mr-1"
          aria-hidden="true"
        />
      )}
    </NextLink>
  );
};
