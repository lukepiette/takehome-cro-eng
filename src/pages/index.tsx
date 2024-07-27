import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { GET_GPU_TYPE_INFO } from "@components/InstancePricing/query";
import apolloClient from "@utils/apolloClient";
import Homepage from "@components/Home";

const Home: NextPage = ({ data = null }: any) => (
  <>
    <Head>
      <title>RunPod - The Cloud Built for AI</title>
      <meta
        name="description"
        content="Develop, train, and scale AI models in one cloud. Spin up on-demand GPUs with GPU Cloud, scale ML inference with Serverless."
      />
      <meta name="author" content="RunPod" />

      {/* Open Graph Tags */}
      <meta property="og:title" content="RunPod - The Cloud Built for AI" />
      <meta
        property="og:description"
        content="Develop, train, and scale AI models in one cloud. Spin up on-demand GPUs with GPU Cloud, scale ML inference with Serverless."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.runpod.io/" />
      <meta
        property="og:image"
        content="https://www.runpod.io/static/images/home-page-preview-image.webp"
      />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@runpod_io" />
      <meta name="twitter:title" content="RunPod - The Cloud Built for AI" />
      <meta
        name="twitter:description"
        content="Develop, train, and scale AI models in one cloud. Spin up on-demand GPUs with GPU Cloud, scale ML inference with Serverless."
      />
      <meta
        name="twitter:image"
        content="https://www.runpod.io/static/images/home-page-preview-image.webp"
      />
    </Head>
    {/* <Homepage data={data} /> */}
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const metricsResponsePromise = fetch("https://api.runpod.ai/metrics");
  const sdResponsePromise = fetch(
    "https://api.runpod.ai/v2/sd-openjourney/metrics/cold_start_quantiles_v1?interval=1d"
  );
  const whisperResponsePromise = fetch(
    "https://api.runpod.ai/v2/whisper/metrics/cold_start_quantiles_v1?interval=1d"
  );

  const { data } = await apolloClient.query({
    query: GET_GPU_TYPE_INFO,
    variables: {
      lowestPriceInput: { gpuCount: 1 },
    },
  });

  const gpu = data?.gpuTypes?.reduce((sum: any, v: any) => {
    sum[v.id] = v;
    return sum;
  }, {});

  const metricsResponse = await metricsResponsePromise;
  const sdResponse = await sdResponsePromise;
  const whisperResponse = await whisperResponsePromise;
  const metrics = await metricsResponse.json();
  const sdData = await sdResponse.json();
  const whisperData = await whisperResponse.json();

  return {
    props: {
      data: {
        metrics,
        gpus: data.gpuTypes,
        gpu,
        sd: sdData,
        whisper: whisperData,
      },
    },
    revalidate: process.env.VERCEL_ENV === "production" ? 600 : 30,
  };
};

export default Home;
