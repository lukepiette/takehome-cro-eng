import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { GET_GPU_TYPE_INFO } from "@components/InstancePricing/query";
import apolloClient from "@utils/apolloClient";
import InstancePricing from "@components/InstancePricing";

const InstancePricingPage: NextPage = ({ data }: any) => (
  <>
    <Head>
      <title>Pricing for GPU Instances, Storage, and Serverless</title>
      <meta
        name="description"
        content="RunPod pricing for GPU Instances, Storage, and Serverless."
      />
      <meta name="author" content="RunPod" />

      <meta
        property="og:title"
        content="Pricing for GPU Instances, Storage, and Serverless"
      />
      <meta
        property="og:description"
        content="RunPod pricing for GPU Instances, Storage, and Serverless."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.runpod.io/pricing" />
      <meta
        property="og:image"
        content="https://www.runpod.io/static/images/pricing-preview.webp"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@runpod_io" />
      <meta
        name="twitter:title"
        content="Pricing for GPU Instances, Storage, and Serverless"
      />
      <meta
        name="twitter:description"
        content="RunPod pricing for GPU Instances, Storage, and Serverless."
      />
      <meta
        name="twitter:image"
        content="https://www.runpod.io/static/images/pricing-preview.webp"
      />
    </Head>
    <InstancePricing data={data} />
  </>
);

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

export default InstancePricingPage;
