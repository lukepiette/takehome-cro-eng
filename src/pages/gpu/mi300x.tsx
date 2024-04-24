import type { NextPage } from "next"
import Head from "next/head"

// import { GET_GPU_TYPES } from "@components/InstancePricing/query"
// import apolloClient from "@utils/apolloClient"
import Overview from "@components/GPU/MI300X"

const Home: NextPage = () => (
  <>
    <Head>
      <title>Rent AMD MI300X 192GB GPUs On-Demand</title>
      <meta name="description" content="Rent high-performance AMD MI300X 192GB GPUs on-demand. Perfect for running Machine Learning workloads." />
      <meta name="author" content="RunPod" />

      {/* Open Graph Tags */}
      <meta property="og:title" content="Rent AMD MI300X 128GB GPUs On-Demand" />
      <meta property="og:description" content="Rent high-performance AMD MI300X 192GB GPUs on-demand. Perfect for running Machine Learning workloads." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.runpod.io/gpu/mi300x" />
      <meta property="og:image" content="https://www.runpod.io/static/images/gpu/preview/mi300x-preview-image.webp" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@runpod_io" />
      <meta name="twitter:title" content="Rent AMD MI300X 128GB GPUs On-Demand" />
      <meta name="twitter:description" content="Rent high-performance Nvidia AMD MI300X 192GB GPUs on-demand. Perfect for running Machine Learning workloads." />
      <meta name="twitter:image" content="https://www.runpod.io/static/images/gpu/preview/mi300x-preview-image.webp" />
    </Head>
    <Overview />

  </>
)


export default Home