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
  const metricsResponsePromise = fetch("https://api.runpod.ai/metrics")
  const sdResponsePromise = fetch(
    "https://api.runpod.ai/v2/sd-openjourney/metrics/cold_start_quantiles_v1?interval=1d"
  )
  const whisperResponsePromise = fetch(
    "https://api.runpod.ai/v2/whisper/metrics/cold_start_quantiles_v1?interval=1d"
  )

  const { data } = await apolloClient.query({
    query: GET_GPU_TYPES,
  })

  const gpu = data?.gpuTypes?.reduce((sum: any, v: any) => {
    sum[v.id] = v
    return sum
  }, {})

  const metricsResponse = await metricsResponsePromise
  const sdResponse = await sdResponsePromise
  const whisperResponse = await whisperResponsePromise
  const metrics = await metricsResponse.json()
  const sdData = await sdResponse.json()
  const whisperData = await whisperResponse.json()

  return {
    props: { data: { metrics, gpus: data.gpuTypes, gpu, sd: sdData, whisper: whisperData } },
    revalidate: process.env.VERCEL_ENV === "production" ? 600 : 30,
  }
}

export default Home
