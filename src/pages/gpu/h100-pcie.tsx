import type { NextPage } from "next"
import Head from "next/head"

// import { GET_GPU_TYPES } from "@components/InstancePricing/query"
// import apolloClient from "@utils/apolloClient"
import Overview from "@components/GPU/H100PCIe"

const Home: NextPage = () => (
  <>
    <Head>
      <title>Rent Nvidia H100 80GB PCIe GPUs On-Demand</title>
      <meta name="description" content="Rent high-performance Nvidia H100 80GB PCIe GPUs on-demand. Perfect for running Machine Learning workloads." />
      <meta name="author" content="RunPod" />

      {/* Open Graph Tags */}
      <meta property="og:title" content="Rent Nvidia H100 80GB PCIe GPUs On-Demand" />
      <meta property="og:description" content="Rent high-performance Nvidia H100 80GB PCIe GPUs on-demand. Perfect for running Machine Learning workloads." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.runpod.io/gpu/h100-pcie" />
      <meta property="og:image" content="https://www.runpod.io/static/images/gpu/preview/h100-pcie-preview-image.webp" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@runpod_io" />
      <meta name="twitter:title" content="Rent Nvidia H100 80GB PCIe GPUs On-Demand" />
      <meta name="twitter:description" content="Rent high-performance Nvidia H100 80GB PCIe GPUs on-demand. Perfect for running Machine Learning workloads." />
      <meta name="twitter:image" content="https://www.runpod.io/static/images/gpu/preview/h100-pcie-preview-image.webp" />
    </Head>
    <Overview />

  </>
)


export default Home
