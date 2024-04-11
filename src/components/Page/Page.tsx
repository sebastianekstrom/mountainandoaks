import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Script from "next/script";
import type React from "react";

import { Header } from "components/Header/Header";
import { Text } from "components/Text/Text";

import { RECIPES } from "../../constants/recipes";

interface Props {
  children: React.ReactNode;
  metaTitle: string;
  description: string;
  image: any;
}

const BASE_URL = "https://sebbebakes.com";

export const Page = ({ children, metaTitle, description, image }: Props) => {
  const { asPath } = useRouter();

  const url = `${BASE_URL}${asPath}`;
  const imageUrl = `${BASE_URL}${image.src}`;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={description} />

        <link rel="icon" href="/favicon.png" />

        <meta name="title" content={metaTitle} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={metaTitle} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={imageUrl} />
      </Head>
      <Header />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 container pb-14">
        {children}
      </main>
      <footer className="flex mt-0 lg:mt-20 pb-10 flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <Text variant="h4">sebbe bakes</Text>
          <Text variant="caption" classNames="mt-2 flex items-center">
            {RECIPES.length} recipes made with
            <Image
              src="/images/misc/rolling_pin.svg"
              className="mr-1 ml-0.5"
              width={16}
              height={16}
              style={{
                height: 16,
                width: 16,
              }}
              alt=""
            />
            by Sebastian Ekström
          </Text>
        </div>
        <div className="mt-4 flex gap-4">
          <a href="https://www.instagram.com/mountain.and.oakes">
            <Image
              src="/icons/github.svg"
              width={20}
              height={20}
              style={{
                height: 20,
                width: 20,
              }}
              alt="View source on Github.com"
            />
          </a>
          <a href="https://www.instagram.com/sebbebakes">
            <Image
              src="/icons/instagram.svg"
              width={20}
              height={20}
              style={{
                height: 20,
                width: 20,
              }}
              alt="Visit Sebbe bakes on Instagram"
            />
          </a>
        </div>
      </footer>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-QBCXNL3P27"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QBCXNL3P27');
        `}
      </Script>
    </>
  );
};
