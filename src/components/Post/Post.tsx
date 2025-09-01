import Image from "next/image";
import { useRouter } from "next/router";
import type React from "react";

import { Recommended } from "components/Recommended/Recommended";
import { Text } from "components/Text/Text";
import { useChaos } from "contexts/ChaosContext";
import {
  FakeAd,
  ExcessiveBackstory,
  NewsletterPopup,
  SocialMediaChaos,
  FakeComments,
  CookieBanner,
  ChaoticYouTubeVideo,
  FinalNewsletter,
  StickyBabySharkVideo,
} from "components/ChaosMode/ChaosComponents";

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
  const { isChaosModeEnabled } = useChaos();
  const findCategory = router.route.split("/")[1];
  const category = findCategory || null;
  let recommendedTitle: string;

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
      <NewsletterPopup />
      <CookieBanner />
      <ChaoticYouTubeVideo />
      <FinalNewsletter />
      <StickyBabySharkVideo />

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
            priority
          />
          {isChaosModeEnabled && (
            <div className="lg:hidden">
              <ExcessiveBackstory recipeTitle={title} />
            </div>
          )}

          {isChaosModeEnabled && <SocialMediaChaos />}

          {ingredients && <div className="mt-6 lg:mt-12">{ingredients}</div>}
        </aside>
        <main className="mt-6 lg:mt-20">
          <Text variant="h1" classNames="hidden lg:block">
            {title}
          </Text>

          {description}

          {isChaosModeEnabled && (
            <div className="hidden lg:block">
              <ExcessiveBackstory recipeTitle={title} />
            </div>
          )}

          {isChaosModeEnabled && <FakeAd />}

          {method && (
            <div className="mt-20">
              <Text variant="h2">Method</Text>
              {method}
            </div>
          )}

          {isChaosModeEnabled && <FakeComments />}
        </main>
      </div>
      {children}
      {category && <Recommended title={recommendedTitle} category={category} />}
    </article>
  );
};
