import { Box, Button, Chip, Container, Paper, Stack, Tooltip, Typography } from "@mui/material"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { useState } from "react"
import Head from "next/head"
import Image from "next/image"
import Modal from "@mui/material/Modal"
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch"
import SyntaxHighlighter from "react-syntax-highlighter"
import StartButton from "@components/StartButton"

export default function Dreambooth({ data }: any) {
  return (
    <>
      <Head>
        <title>Dreambooth</title>
        <meta
          name="description"
          content="Fine-tune text to image diffusion models to be subject driven. Train images of your pet, or
          yourself and run inference to generate images for Avatars, Photoshoots, and more."
        />
      </Head>
      <Hero />
      <Dog />
    </>
  )
}

const Hero = () => (
  <Box
    sx={{
      "width": "100%",
      "position": "relative",
      "&:before": {
        content: "''",
        height: "100%",
        opacity: 1,
        position: "absolute",
        width: "100%",
        zIndex: -1,
      },
    }}
  >
    <Container maxWidth="sm">
      <Stack alignItems="center" py={10} spacing={4}>
        <Stack alignItems="end" direction="row" justifyContent="center" spacing={1}>
          <Typography
            color="#ffffff"
            variant="h1"
            sx={{ fontSize: { xs: 40, sm: 55, xl: 65 }, fontWeight: 400 }}
          >
            Dreambooth
          </Typography>
          <Typography color="#ffffff" sx={{ fontSize: 30 }}>
            v1
          </Typography>
        </Stack>

        <Typography color="#ffffff" textAlign="center" sx={{ fontSize: 18, fontWeight: 300 }}>
          Fine-tune text to image diffusion models to be subject driven. Train images of your pet,
          or yourself and run inference to generate images for Avatars, Photoshoots, and more.
        </Typography>

        <StartButton to={"https://docs.runpod.io/reference/dreambooth-sd-v15"} title="Docs" />
      </Stack>
    </Container>
  </Box>
)

const Dog = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Container maxWidth="lg" sx={{ my: 10 }}>
        <Stack spacing={3}>
          <Stack direction="row" justifyContent="center" spacing={1}>
            {[1, 2, 3, 4].map((v, i) => (
              <Box key={i} ml={1} pt={0.5}>
                <Image
                  alt="dog"
                  style={{ borderRadius: 10 }}
                  src={`/static/images/dog/input${v}.jpg`}
                  width={150}
                  height={150}
                />
              </Box>
            ))}
          </Stack>

          <Stack alignItems="center" direction="row" justifyContent="center" spacing={4}>
            <Typography
              fontSize={18}
              fontWeight={300}
              textAlign="right"
              sx={{ opacity: 0.5, width: 75 }}
            >
              Pet
            </Typography>
            <Button onClick={handleOpen} size="large" variant="contained">
              Get Code
            </Button>
            <Typography fontSize={18} fontWeight={300} sx={{ opacity: 0.5, width: 75 }}>
              Styles
            </Typography>
          </Stack>

          <Stack direction="row" flexWrap="wrap" justifyContent="center" spacing={1}>
            {[1, 2, 3, 4, 0, 5, 6, 7, 8, 0, 9, 10, 11, 12].map((v, i) =>
              v === 0 ? (
                <Box key={i} sx={{ flexBasis: "100%", height: 0 }}></Box>
              ) : (
                <Box key={i} ml={1} pt={0.5}>
                  <Image
                    alt="dog"
                    style={{ borderRadius: 10 }}
                    src={`/static/images/dog/output${v}.png`}
                    width={150}
                    height={150}
                  />
                </Box>
              )
            )}
          </Stack>
        </Stack>
      </Container>
      <Typography fontSize={20} fontWeight={300} textAlign="center">
        More examples coming sooon.
      </Typography>
      <ModalDogCode handleClose={handleClose} open={open} />
    </>
  )
}

const style = {
  boxShadow: 24,
  left: "50%",
  maxHeight: "95%",
  maxWidth: 1000,
  minWidth: 300,
  p: { xs: 2, md: 3 },
  position: "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
}

const ModalDogCode = ({ handleClose, open }: { handleClose: any; open: boolean }) => {
  const [tooltipText, setTooltipText] = useState("click to copy")
  const flashCopied = () => {
    setTooltipText("copied!")
    setTimeout(() => setTooltipText("click to copy"), 2000)
  }

  const code = `curl POST https://api.runpod.ai/v2/dream-booth-v1/run \\
-H 'Content-Type: application/json' \\
-H 'Authorization: Bearer xxxxxxxxxxxxxxxxx' \\
-d '{
    "input": {
          "train": {
              "concept_name": "RWXdoggo",
              "data_url": "https://github.com/runpod/serverless-workers/blob/main/Input-Samples/runpod_dog2.zip?raw=true",
              "unet_epochs": 100,
              "text_steps": 400,
              "unet_resolution": 512,
              "text_learning_rate": 2e-6,
              "unet_learning_rate": 2e-6,
              "text_lr_scheduler": "polynomial",
              "unet_lr_scheduler": "polynomial"
          },
          "inference": [
              {
                  "prompt": "portrait of RWXdoggo, highly detailed face, symmetrical eyes, colorful, flowing hair, fully visible face, powerful, magic, thunders, dramatic lighting, painting, concept art, smooth, sharp focus",
                  "negative_prompt": "blurry, side looking, duplication, lowres, cropped, worst quality, low quality, jpeg artifacts, out of frame, watermark, signature",
                  "sampler_name": "Euler a",
                  "batch_size": 10,
                  "steps": 40,
                  "cfg_scale": 7
              },
              {
                  "prompt": "RWXdoggo trapped inside a basket at the park grass detailed at a picnic",
                  "negative_prompt": "lowres, cropped, worst quality, low quality, out of frame, watermark, signature",
                  "sampler_name": "Euler a",
                  "batch_size": 10,
                  "steps": 40,
                  "cfg_scale": 7
              },
              {
                  "prompt": "cartoon portrait of RWXdoggo with a detailed cowboy hat, concept art, painting, highly detailed face, symmetrical eyes, colorful, flowing hair, fully visible face, smooth, sharp focus",
                  "negative_prompt": "lowres, cropped, worst quality, low quality, out of frame, watermark, signature",
                  "sampler_name": "Euler a",
                  "batch_size": 10,
                  "steps": 40,
                  "cfg_scale": 8
              }
          ]
      }
  }'`

  return (
    <Modal open={open} onClose={handleClose}>
      <Paper sx={style}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Chip
            color="primary"
            label={
              <Stack alignItems="center" direction="row" p={1} spacing={2}>
                <RocketLaunchIcon color="error" fontSize="medium" />
                <Stack alignItems="center" spacing={0.5}>
                  <Typography fontSize={16} fontWeight={600}>
                    A100 80GB
                  </Typography>
                  <Typography fontSize={16}>$0.48 for 8 mins</Typography>
                </Stack>
              </Stack>
            }
            sx={{ height: "auto" }}
            variant="outlined"
          />
          <Chip
            color="primary"
            label={
              <Stack alignItems="center" direction="row" p={1} spacing={2}>
                <RocketLaunchIcon fontSize="medium" />
                <Stack alignItems="center" spacing={0.5}>
                  <Typography fontSize={16} fontWeight={600}>
                    A6000 48GB
                  </Typography>
                  <Typography fontSize={16}>$0.31 for 13 mins</Typography>
                </Stack>
              </Stack>
            }
            sx={{ height: "auto" }}
            variant="outlined"
          />
        </Stack>
        <Typography fontSize={16} mt={1}>
          6-8 images are recommended for training
        </Typography>
        <Typography fontSize={12} mb={1} mt={0.5}>
          * GPU is selected based on availablility.
        </Typography>
        <CopyToClipboard text={code} onCopy={flashCopied}>
          <Tooltip placement="top" title={tooltipText}>
            <Box
              sx={{
                height: { xs: "calc(100vh - 400px)", sm: "calc(100vh - 400px)" },
                maxWidth: "calc(100vw - 60px)",
                overflow: "auto",
              }}
            >
              <SyntaxHighlighter
                language="bash"
                customStyle={{ maxWidth: "100%", padding: "15px 20px" }}
              >
                {code}
              </SyntaxHighlighter>
            </Box>
          </Tooltip>
        </CopyToClipboard>
      </Paper>
    </Modal>
  )
}
