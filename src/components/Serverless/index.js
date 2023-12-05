import AiInference from "./AiInference"
import Autoscale from "./Autoscale"
import Code from "./Code"
import Footer from "./Footer"
import GpuPricing from "./GpuPricing"
import Hero from "./Hero"
import Logs from "./Logs"
import Webhooks from "./Webhooks"

export default function Serverless({ data }) {
  return (
    <>
      <Hero data={data} />
      <GpuPricing />
      <Code />
      <AiInference />
      <Autoscale />
      <Logs />
      <Webhooks />
      <Footer />
    </>
  )
}
