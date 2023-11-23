import React from "react";
import Image from "next/image";
import Text from "components/Text";
import Recommended from "components/Recommended";
import { useRouter } from "next/router";

interface Props {
  children?: React.ReactNode;
  ingredients?: React.ReactNode;
  method?: React.ReactNode;
  heroImage?: any;
  title: string;
  description?: any;
}

export const Post = ({
  children,
  heroImage,
  title,
  description,
  ingredients,
  method,
}: Props) => {
  const router = useRouter();
  const findCategory = router.route.split("/")[1];
  const category = findCategory || null;
  let recommendedTitle;

  switch (category) {
    case "bread":
      recommendedTitle = "More delicious bread";
      break;
    case "pizza":
      recommendedTitle = "More delicious pizza";
      break;
    case "food-and-drinks":
      recommendedTitle = "More recipes";
      break;
    default:
      recommendedTitle = "Recommended for you";
      break;
  }

  return (
    <article>
      <div className="flex flex-col lg:flex-row">
        <aside className="shrink-0 lg:mr-20 lg:w-[460px] mt-4 lg:mt-0">
          <Text variant="h1" classNames="max-w-[82%] mt-6 lg:hidden">
            {title}
          </Text>
          <Image
            className="w-full h-auto lg:h-[560px]"
            src={heroImage}
            placeholder="blur"
            alt=""
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            50vw"
            quality={100}
          />
          {ingredients && <div className="mt-6 lg:mt-12">{ingredients}</div>}
        </aside>
        <main className="mt-6 lg:mt-20">
          <Text variant="h1" classNames="max-w-[82%] hidden lg:block">
            {title}
          </Text>
          {description}
          {method && (
            <div className="mt-20">
              <Text variant="h2">Method</Text>
              {method}
            </div>
          )}
        </main>
      </div>
      {children}
      {category && <Recommended title={recommendedTitle} category={category} />}
    </article>
  );
};
