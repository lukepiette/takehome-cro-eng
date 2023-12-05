import type { NextPage } from "next"
import Head from "next/head"

import About from "@components/About"

const AboutPage: NextPage = () => (
  <>
    <Head>
      <title>About RunPod and its Vision</title>
      <meta
        name="description"
        content="Learn more about RunPod's founders and vision. We're the most affordable GPU cloud out there!"
      />
    </Head>
    <About />
  </>
)

export default AboutPage
