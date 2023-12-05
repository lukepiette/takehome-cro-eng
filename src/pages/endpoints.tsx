import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"

import Endpoints from "@components/Endpoints"

const Index: NextPage = ({ data }: any) => (
  <>
    <Head>
      <title>RunPod Endpoints</title>
      <meta
        name="description"
        content="AI endpoints for Stable Diffusion, Dreambooth, Whisper, and many more."
      />
    </Head>
    <Endpoints data={data} />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://api.runpod.ai/metrics")
  const data = await response.json()

  return {
    props: { data: { metrics: data } },
    revalidate: process.env.VERCEL_ENV === "production" ? 120 : 30,
  }
}

export default Index
