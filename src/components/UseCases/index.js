import { Stack, Typography, useTheme } from "@mui/material"
import Image from "next/image"

import ButtonLink from "@components/ButtonLink"
import castleGraphic from "./castle3.png"
import ChatbotGraphic from "./ChatbotGraphic.svg"
import RenderingGraphic from "./RenderingGraphic.svg"
import ScienceGraphic from "./ScienceGraphic.svg"
import TextSectionWithGraphic from "@components/TextSectionWithGraphic"
import WritingGraphic from "./WritingGraphic.svg"

export default function UseCases() {
  const theme = useTheme()

  return (
    <>
      <Stack alignItems={"center"} my={6} spacing={3}>
        <Typography
          fontSize={{ xs: 28, md: 34 }}
          sx={{
            backgroundClip: "text",
            backgroundImage: theme.colors.gradients.purple1,
            color: "transparent",
          }}
          align={"center"}
          variant="h1"
        >
          GPU Cloud Use Cases
        </Typography>
        <Typography
          align={"center"}
          variant="subtitle1"
          fontSize={18}
          sx={{ maxWidth: 650, px: 3 }}
        >
          GPU computing is being used in every industry. Here are some examples of all the cool
          stuff that people are doing with our GPUs!
        </Typography>
      </Stack>

      <Stack spacing={3} maxWidth="lg" margin="auto" px={{ xs: 3, md: 2 }}>
        <TextSectionWithGraphic
          graphic={
            <Image
              width={400}
              height={240}
              src={castleGraphic}
              alt="ai generated castle painting"
            />
          }
          text={
            <Stack spacing={1}>
              <Typography variant="h3">AI Generative Art</Typography>
              <Typography>
                Did you know that artificial intelligence can be used to create some pretty amazing
                artwork? It&apos;s true! AI-generated art is called &quot;generative art&quot; and
                it can be used to create all sorts of interesting and beautiful images. This awesome
                image of a castle overlooking a pond was generated using nothing but a short text
                blurb!
              </Typography>
              <Typography>
                So how does it work? Well, generative art typically involves feeding a computer
                algorithm lots of data, which the algorithm then uses to generate new, original
                artwork. The results can be pretty impressive, and they often look quite different
                from anything that a human artist could create.
              </Typography>
              <Typography>
                So why not give it a try? You might be surprised at what you can create! You can
                find a quickstart on RunPod GPUs using Disco Diffusion{" "}
                <a
                  target="blank"
                  rel="no_referrer"
                  href="https://blog.runpod.io/disco-diffusion-on-runpod"
                >
                  here
                </a>
                .
              </Typography>
            </Stack>
          }
        />
        <TextSectionWithGraphic
          flip
          graphic={<Image alt="writing graphic" src={WritingGraphic} width={400} height={500} />}
          text={
            <Stack spacing={1}>
              <Typography variant="h3">AI Generative Text</Typography>
              <Typography>
                AI text generation is a really cool way to create unique and interesting content. By
                using artificial intelligence, you can create texts that are not only grammatically
                correct, but also have their own voice and style. This means that you can create
                content that is truly your own, and that will stand out from the rest. There are
                many different applications for ai text generation; you can use it for anything from
                creating marketing materials to writing fictional novels with your favorite
                characters.
              </Typography>
              <Typography>
                If you&apos;re looking for a way to overcome your writers block, or to simply have
                some fun with language, then ai text generation is definitely something you should
                check out. Who knows, you might just find your new favourite way to create content!
              </Typography>
              <Typography>
                Machine learning has come such a long way, that you probably couldn&apos;t even tell
                that this text was generated using an ML model, could you?
              </Typography>
            </Stack>
          }
        />
        <TextSectionWithGraphic
          graphic={<Image alt="chatbot graphic" src={ChatbotGraphic} width={400} height={500} />}
          text={
            <Stack spacing={1}>
              <Typography variant="h3">Automated Customer Service</Typography>
              <Typography>
                When it comes to customer service, AI has the potential to revolutionize the way
                businesses operate. By automating various customer service tasks, AI can help
                businesses save money and provide better service. For example, AI can be used to
                automate repetitive tasks such as answering commonly asked questions or providing
                basic customer support. This frees up customer service representatives to handle
                more complex inquiries, resulting in improved customer satisfaction.
              </Typography>
              <Typography>
                In addition, AI can be used to analyze customer behavior and preferences, allowing
                businesses to provide more personalized service. For instance, AI can be used to
                recommend products or services that a customer might be interested in based on their
                past interactions. Overall, AI has the potential to greatly improve customer service
                while also helping businesses save money. As AI technology continues to develop, we
                can expect even more amazing innovations in customer service.
              </Typography>
              <Typography>
                Several ML chatbot companies are already training their models on the RunPod
                platform. Deploy a pod today or reach out to us if you need support!
              </Typography>
            </Stack>
          }
        />
        <TextSectionWithGraphic
          flip
          graphic={<Image alt="science graphic" src={ScienceGraphic} width={400} height={500} />}
          text={
            <Stack spacing={1}>
              <Typography variant="h3">GPU Accelerated Medicine</Typography>
              <Typography>
                GPUs are helping to accelerate drug discovery by providing the power and speed
                needed to process large amounts of data. By using GPUs to run simulations and
                process data, scientists can shorten the time it takes to develop new drugs.
                Additionally, GPUs can be used to create virtual models of molecules, which can help
                researchers understand how a molecule will interact with other molecules in the
                body. This information can be used to design better drugs that are more effective
                and have fewer side effects.
              </Typography>
              <Typography>
                GPUs are also being used to develop new methods of drug delivery. By understanding
                how drugs are absorbed and metabolized by the body, researchers can develop new ways
                to deliver drugs that are more targeted and efficient. This can lead to better
                outcomes for patients and lower costs for healthcare providers.
              </Typography>
              <Typography>
                GPUs are helping to revolutionize drug discovery and development, and their impact
                will continue to grow in the years to come.
              </Typography>
            </Stack>
          }
        />
        <TextSectionWithGraphic
          graphic={
            <Image alt="rendering graphic" src={RenderingGraphic} width={400} height={500} />
          }
          text={
            <Stack spacing={1}>
              <Typography variant="h3">Cloud GPU Rendering</Typography>
              <Typography>
                Cloud GPU rendering is a great way to render high-quality 3D graphics or animations.
                It allows you to use the power of a remote server to render your graphics, which
                means you can get the same quality as if you were using a local desktop machine. The
                only difference is that you don&apos;t have to worry about the initial cost or
                maintenance of a performance desktop or server at home or in the office.
              </Typography>
              <Typography>
                Cloud GPU rendering is growing in popularity, as it offers a number of advantages
                over traditional desktop rendering. Perhaps the most significant advantage is that
                it&apos;s much cheaper to get started with cloud GPU rendering than it is to buy and
                maintain a high-end desktop machine. You can also access your renders from anywhere,
                as long as you have an internet connection.
              </Typography>
              <Typography>
                We already have several users using RunPod for blender workloads. Since rendering is
                highly parallizable, they have reported up to 100 fold speed-ups in their render
                cycles when compared to the single-gpu desktop PCs that they were previously using.
              </Typography>
            </Stack>
          }
        />
        <Stack alignItems={"center"} my={6} spacing={3}>
          <Stack>
            <Typography
              align={"center"}
              variant="subtitle1"
              fontSize={24}
              sx={{ maxWidth: 650, px: 3, mb: 4 }}
            >
              Ready to participate?
            </Typography>
            <ButtonLink variant="contained" href="/console/gpu-secure-cloud">
              Deploy a Pod Today
            </ButtonLink>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}
