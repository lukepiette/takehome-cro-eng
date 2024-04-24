import Head from "next/head"
import type { NextPage } from "next"
import Leaderboard from "@components/Leaderboard"


const Maintenance: NextPage = () => {
  const targetDate = new Date('2024-04-24T00:00:00');

  return (
    <>
      <Head>
        <title>Leaderboard for 4090 Challenge</title>
        <meta name="description" content="" />
      </Head>
      <Leaderboard />

    </>
  )
}

export default Maintenance
