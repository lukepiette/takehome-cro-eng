import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"

import Serverless from "@components/Serverless"

const AI: NextPage = ({ data }: any) => (
  <>
    <Head>
      <title>Serverless GPUs for AI Inference and Training</title>
      <meta
        name="description"
        content="Serverless GPUs to deploy your ML models to production without worrying about infrastructure or scale."
      />
    </Head>
    <Serverless data={data} />
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
  const metricsResponse = await metricsResponsePromise
  const sdResponse = await sdResponsePromise
  const whisperResponse = await whisperResponsePromise
  const metrics = await metricsResponse.json()
  const sdData = await sdResponse.json()
  const whisperData = await whisperResponse.json()

  return {
    props: { data: { metrics, sd: sdData, whisper: whisperData } },
    revalidate: process.env.VERCEL_ENV === "production" ? 120 : 30,
  }
}

export default AI
