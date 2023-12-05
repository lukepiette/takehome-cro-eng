import type { NextPage } from "next"
import Head from "next/head"

import GpuCloud from "@components/About/GpuCloud"

const GpuCloudPage: NextPage = () => (
  <>
    <Head>
      <title>Runpod offers GPU rental service on our secure cloud and community cloud.</title>
      <meta
        name="description"
        content="Learn more about the GPU instance rental services that RunPod offers. Custom GPU solutions available!"
      />
    </Head>
    <GpuCloud />
  </>
)

export default GpuCloudPage
