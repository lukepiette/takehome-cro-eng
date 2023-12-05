import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"

import Demo from "@components/Endpoints/ReplicateDemo"
import API from "@components/Endpoints/ReplicateAPI"


const Index: NextPage = ({ data }: any) => (
  <>
    <Head>
      <title>RunPod Endpoint</title>
      <meta
        name="description"
        content="AI endpoints for Stable Diffusion, Dreambooth, Whisper, and many more."
      />
    </Head>
    {/* <Demo apiEndpoint={"https://api.runpod.ai/v2/llama2-7b-chat/runsync"} outputType={"text"} creator={"RunPod"} name={"Llama2"} markdownFromGithubURL={""} inputParamsFromGithubURL={"https://raw.githubusercontent.com/lukepiette/runpod-readme/main/workers/Llama2-13B/inputs.json"}/> */}
    <API name={"Llama2"} markdownFromGithubURL={"https://raw.githubusercontent.com/lukepiette/runpod-readme/main/workers/Llama2-13B/markdown"} creator={"RunPod"} />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://api.runpod.ai/metrics")
  const data = await response.json()

  return {
    props: { data: { metrics: data } },
    revalidate: process.env.VERCEL_ENV === "production" ? 120 : 30,
  }
}

export default Index
