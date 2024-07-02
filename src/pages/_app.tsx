import '../styles/globals.css'

import { CacheProvider, EmotionCache } from '@emotion/react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'

import createEmotionCache from '@utils/createEmotionCache'
import Scripts from '@components/Scripts'
import useReferral from '@hooks/useReferral'
import useUtm from '@hooks/useUtm'
import useMeetingBooked from '@hooks/useMeetingBooked'
import useReferrer from '@hooks/useReferrer'
// import React, { useEffect } from 'react';


const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) {
  useUtm()
  useMeetingBooked()
  useReferrer()
  const shouldRender = useReferral()

  const router = useRouter()

  const canonicalUrl = (
    `https://www.runpod.io` + (router.asPath === '/' || router.asPath === '/index' ? '' : router.asPath)
  ).split('?')[0]

  
  // @ts-ignore
  // useEffect(() => { window.CFQ?.push({ emit: 'pageHydrated' }) }, [])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <link key='canonical' rel='canonical' href={canonicalUrl} />
        {process.env.NEXT_PUBLIC_DEV && (
          <meta name='robots' content='noindex' />
        )}
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, shrink-to-fit=no'
        />
      </Head>
      {shouldRender && (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
      <Scripts />
    </CacheProvider>
  )
}
