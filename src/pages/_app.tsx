import "../styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`font-sans bg-background-regular`}>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
