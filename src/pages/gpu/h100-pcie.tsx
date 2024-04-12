import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"

import { GET_GPU_TYPES } from "@components/InstancePricing/query"
import apolloClient from "@utils/apolloClient"
import Overview from "@components/GPU/H100PCIe"

const Home: NextPage = () => (
  <>
    <Head>
      <title>Rent Nvidia H100 80GB PCIe GPUs On-Demand</title>
      <meta
        name="description"
        content="Rent Nvidia H100 80GB PCIe GPUs On-Demand"
      />
    </Head>
    <Overview />

  </>
)


export default Home
