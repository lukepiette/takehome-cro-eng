import type { NextPage } from "next"
import Head from "next/head"

import Careers from "@components/Careers"

const AboutPage: NextPage = () => (
  <>
    <Head>
      <title>About RunPod and its Vision</title>
      <meta
        name="description"
        content="Learn more about RunPod's founders and vision. We're the most affordable GPU cloud out there!"
      />
    </Head>
    <Careers />
  </>
)

export default AboutPage
