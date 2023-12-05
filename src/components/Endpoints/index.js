import Footer from "./Footer"
import Hero from "./Hero"
import Video from "./Video"
import Speech from "./Speech"
import TextToImage from "./TextToImage"
import LanguageModels from "./LanguageModels"
import ChatLLM from "./ChatLLM"

export default function Serverless({ data }) {
  return (
    <>
      <Hero data={data} />
      {/* <Video></Video> */}
      <LanguageModels />
      <ChatLLM />
      <Speech />
      <TextToImage />
      <Footer />
    </>
  )
}
