import Image, { type StaticImageData } from "next/image";
import React from "react";

interface Props {
  src: StaticImageData;
  alt: string;
}

export const MethodImage = ({ src, alt }: Props) => {
  return (
    <div className="mt-4">
      <Image
        src={src}
        alt={alt}
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      />
    </div>
  );
};
