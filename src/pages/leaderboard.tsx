import Head from "next/head"
import type { NextPage } from "next"
import Leaderboard from "@components/Leaderboard"


const LeaderboardPage: NextPage = () => {
  

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

export default LeaderboardPage
