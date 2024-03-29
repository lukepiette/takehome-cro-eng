import type { NextPage } from "next"
import Head from "next/head"

import Compliance from "@components/Compliance"

const CompliancePage: NextPage = () => (
  <>
    <Head>
      <title>Compliance and Security at RunPod</title>
      <meta
        name="description"
        content="Learn more about Compliance and Security measures at RunPod."
      />
    </Head>
    <Compliance />
  </>
)

export default CompliancePage
