import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"

// import { GET_GPU_TYPES } from "@components/InstancePricing/query"
// import apolloClient from "@utils/apolloClient"
import Overview from "@components/GPU/4090"

import { GET_GPU_TYPE_INFO } from "@components/InstancePricing/query";
import apolloClient from "@utils/apolloClient";

const Home: NextPage = ({ data }: any) => (
  <>
    <Head>
      <meta name="robots" content="noindex" />

      <title>Rent Nvidia RTX 4090 GPUs On-Demand</title>
      <meta name="description" content="Rent high-performance Nvidia RTX 4090 GPUs on-demand. Perfect for running Machine Learning workloads." />
      <meta name="author" content="RunPod" />
      

      {/* Open Graph Tags */}
      <meta property="og:title" content="Rent Nvidia RTX 4090 GPUs On-Demand" />
      <meta property="og:description" content="Rent high-performance Nvidia RTX 4090 GPUs on-demand. Perfect for running Machine Learning workloads." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.runpod.io/gpu/4090" />
      <meta property="og:image" content="https://www.runpod.io/static/images/gpu/preview/4090-preview-image.webp" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@runpod_io" />
      <meta name="twitter:title" content="Rent Nvidia RTX 4090 GPUs On-Demand" />
      <meta name="twitter:description" content="Rent high-performance Nvidia RTX 4090 GPUs on-demand. Perfect for running Machine Learning workloads." />
      <meta name="twitter:image" content="https://www.runpod.io/static/images/gpu/preview/4090-preview-image.webp" />
    </Head>
    <Overview data={data} />
  </>
)


export const getStaticProps: GetStaticProps = async () => {
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

  return {
    props: { data: { gpu } },
    revalidate: process.env.VERCEL_ENV === "production" ? 600 : 30,
  };
};

export default Home
