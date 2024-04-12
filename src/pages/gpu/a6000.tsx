import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"

import { GET_GPU_TYPES } from "@components/InstancePricing/query"
import apolloClient from "@utils/apolloClient"
import Overview from "@components/GPU/A6000"

const Home: NextPage = () => (
  <>
    <Head>
      <title>Rent Nvidia RTX A6000 GPUs On-Demand</title>
      <meta
        name="description"
        content="Rent Nvidia RTX A6000 GPUs On-Demand"
      />
    </Head>
    <Overview />

  </>
)


export default Home
