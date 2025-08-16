import Image from "next/image";
import { Text } from "components/Text/Text";
import { v4 as uuidv4 } from "uuid";
type RatingSource = "michelin" | "m&o" | "dn" | "svd" | "whiteguide";
type MichelinRating = 1 | 2 | 3 | "Bib";

interface RatingProps {
  source: RatingSource;
  value: number | MichelinRating;
  reviewUrl?: string;
}

const ratingConfig: Record<
  RatingSource,
  {
    name: string;
    maxRating: number;
    icon?: string;
    bibIcon?: string;
    color?: string;
    abbreviation?: string;
  }
> = {
  michelin: {
    name: "Michelin",
    maxRating: 3,
    icon: "/images/misc/michelin-star.svg",
    bibIcon: "/images/misc/bib-gourmand.png",
  },
  "m&o": {
    name: "Mountain & Oaks",
    maxRating: 10,
    icon: "/images/misc/logo-squircle.svg",
    color: "text-brand",
  },
  dn: {
    name: "Dagens Nyheter",
    maxRating: 5,
    icon: "/images/misc/dn-logo.png",
    color: "text-red-600",
    abbreviation: "DN",
  },
  svd: {
    name: "Svenska Dagbladet",
    maxRating: 6,
    icon: "/images/misc/svd-logo.png",
    color: "text-svd",
    abbreviation: "SvD",
  },
  whiteguide: {
    name: "White Guide",
    maxRating: 6,
    icon: "/images/misc/wg-logo.png",
    color: "text-gray-700",
    abbreviation: "WG",
  },
};

export const Rating: React.FC<RatingProps> = ({ source, value, reviewUrl }) => {
  const config = ratingConfig[source];

  const WrapperComponent = reviewUrl ? "a" : "div";
  const wrapperProps = reviewUrl
    ? {
        href: reviewUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "hover:opacity-75 transition-opacity",
      }
    : {};

  // Handle Michelin rating specially
  if (source === "michelin") {
    if (value === "Bib") {
      return (
        <WrapperComponent
          {...wrapperProps}
          className={`flex items-center gap-1 ${wrapperProps.className || ""}`}
          title="Bib Gourmand: good quality, good value cooking"
        >
          <Image
            width={25}
            height={25}
            className="w-[20px] lg:w-[16px] h-auto"
            src={config.bibIcon || ""}
            alt="Bib Gourmand"
          />
        </WrapperComponent>
      );
    }

    const stars = value as number;
    return (
      <WrapperComponent
        {...wrapperProps}
        className={`flex gap-1 ${wrapperProps.className || ""}`}
        title={`${stars} Michelin star${stars === 1 ? "" : "s"}`}
      >
        {Array.from({ length: stars }).map((_, starIndex) => (
          <Image
            key={uuidv4()}
            width={25}
            height={25}
            className="w-[20px] lg:w-[16px] h-auto"
            src={config.icon || ""}
            alt=""
          />
        ))}
      </WrapperComponent>
    );
  }

  // Handle M&O rating with icon (no links for M&O)
  if (source === "m&o") {
    return (
      <div
        className="flex items-center gap-1"
        title={`${config.name}: ${value}/${config.maxRating}`}
      >
        <Image
          width={30}
          height={30}
          className="w-[20px] h-auto"
          src={config.icon || ""}
          alt=""
        />
        <Text variant="caption" classNames={config.color}>
          {value}/{config.maxRating}
        </Text>
      </div>
    );
  }

  // Handle DN rating with icon
  if (source === "dn") {
    return (
      <WrapperComponent
        {...wrapperProps}
        className={`flex items-center gap-1 ${wrapperProps.className || ""}`}
        title={`${config.name}: ${value}/${config.maxRating}`}
      >
        <Image
          width={30}
          height={30}
          className="w-[20px] h-auto"
          src={config.icon || ""}
          alt=""
        />
        <Text variant="caption" classNames={config.color}>
          {value}/{config.maxRating}
        </Text>
      </WrapperComponent>
    );
  }

  // Handle SvD rating with icon
  if (source === "svd") {
    return (
      <WrapperComponent
        {...wrapperProps}
        className={`flex items-center gap-1 ${wrapperProps.className || ""}`}
        title={`${config.name}: ${value}/${config.maxRating}`}
      >
        <Image
          width={30}
          height={30}
          className="w-[20px] h-auto"
          src={config.icon || ""}
          alt=""
        />
        <Text variant="caption" classNames={config.color}>
          {value}/{config.maxRating}
        </Text>
      </WrapperComponent>
    );
  }

  // Handle White Guide rating with icon
  if (source === "whiteguide") {
    return (
      <WrapperComponent
        {...wrapperProps}
        className={`flex items-center gap-1 ${wrapperProps.className || ""}`}
        title={`${config.name}: ${value}/${config.maxRating}`}
      >
        <Image
          width={30}
          height={30}
          className="w-[20px] h-auto"
          src={config.icon || ""}
          alt=""
        />
        <Text variant="caption" classNames={config.color}>
          {value}/{config.maxRating}
        </Text>
      </WrapperComponent>
    );
  }

  // This should never be reached since all rating sources are handled above
  return null;
};
