import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"

import { GET_GPU_TYPES } from "@components/InstancePricing/query"
import apolloClient from "@utils/apolloClient"
import Homepage from "@components/AMD"

const Home: NextPage = () => (
  <>
    <Head>
      <title>Rent AMD GPUs On-Demand</title>
      <meta
        name="description"
        content="Rent Next Generation AMD GPUs On-Demand with RunPod"
      />
    </Head>
    <Homepage />

  </>
)


export default Home
