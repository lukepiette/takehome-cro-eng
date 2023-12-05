import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"

import { GET_GPU_TYPES } from "@components/InstancePricing/query"
import apolloClient from "@utils/apolloClient"
import Homepage from "@components/Home"

const Home: NextPage = ({ data }: any) => (
  <>
    <Head>
      <title>Rent Cloud GPUs from $0.2/hour</title>
      <meta
        name="description"
        content="Save over 80% on GPUs. GPU rental made easy with Jupyter for Tensorflow, PyTorch or any other AI framework."
      />
    </Head>
    <Homepage data={data} />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: GET_GPU_TYPES,
  })

  const gpu = data?.gpuTypes?.reduce((sum: any, v: any) => {
    sum[v.displayName] = v
    return sum
  }, {})

  return {
    props: { data: { gpus: data.gpuTypes, gpu } },
    revalidate: process.env.VERCEL_ENV === "production" ? 600 : 30,
  }
}

export default Home
