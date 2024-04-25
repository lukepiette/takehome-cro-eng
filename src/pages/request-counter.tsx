import Head from "next/head"
import type { NextPage } from "next"
import RequestCounter from "@components/RequestCounter"


const Requests: NextPage = () => {
  

  return (
    <>
      <Head>
        <title>Live Serverless Requests</title>
        <meta name="description" content="" />
      </Head>
      <RequestCounter />

    </>
  )
}

export default Requests
