import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  src: StaticImageData;
  alt: string;
}

export const MethodImage = ({ src, alt }: Props) => {
  return (
    <div className="mt-4">
      <Image src={src} alt={alt} placeholder="blur" />
    </div>
  );
};
