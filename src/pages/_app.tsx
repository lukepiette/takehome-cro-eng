import "../styles/globals.css";

import { CacheProvider, EmotionCache } from "@emotion/react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../components/Layout";
import type { AppProps } from "next/app";

import createEmotionCache from "@utils/createEmotionCache";
import useReferral from "@hooks/useReferral";
import React, { useEffect } from "react";

const inter = Inter({ weight: ["400", "500", "600"], subsets: ["latin"] });

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) {
  const shouldRender = useReferral();

  const router = useRouter();

  const canonicalUrl = (
    `https://www.runpod.io` +
    (router.asPath === "/" || router.asPath === "/index" ? "" : router.asPath)
  ).split("?")[0];

  useEffect(() => {
    // @ts-expect-error
    window.CFQ?.push({ emit: "pageHydrated" });
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <link key="canonical" rel="canonical" href={canonicalUrl} />
        {process.env.NEXT_PUBLIC_DEV && (
          <meta name="robots" content="noindex" />
        )}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
        />
      </Head>
      {shouldRender && (
        <main className={inter.className}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      )}
    </CacheProvider>
  );
}
