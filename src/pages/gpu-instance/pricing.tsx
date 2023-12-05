import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"

import { GET_GPU_TYPE_INFO } from "@components/InstancePricing/query"
import apolloClient from "@utils/apolloClient"
import InstancePricing from "@components/InstancePricing"

const InstancePricingPage: NextPage = ({ data }: any) => (
  <>
    <Head>
      <title>GPU Instance Pricing</title>
      <meta
        name="description"
        content="Runpod Instance pricing for H100, A100, RTX A6000, RTX A5000, RTX 3090, RTX 4090, and more."
      />
    </Head>

    <InstancePricing data={data} />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: GET_GPU_TYPE_INFO,
    variables: {
      lowestPriceInput: { gpuCount: 1 },
    },
  })

  return {
    props: { data: [...data.gpuTypes] },
    revalidate: process.env.VERCEL_ENV === "production" ? 600 : 30,
  }
}

export default InstancePricingPage
