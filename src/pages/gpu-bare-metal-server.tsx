import { Box, Card, Stack, Typography, useTheme } from "@mui/material"
import Head from "next/head"
import Image from "next/legacy/image"

import UbuntuLogo from "@assets/ubuntu.svg"
import WindowsLogo from "@assets/windows.svg"
import StartButton from "@components/StartButton"


export default function GpuBareServer() {
  const theme = useTheme()

  return (
    <>
      <Head>
        <title>Rent Bare-Metal GPU Servers</title>
        <meta
          name="description"
          content="Rent a Bare-Metal GPU Server at an affordable price with Ubuntu or Windows operating system."
        />
      </Head>

      <Stack alignItems={"center"} my={6} spacing={3}>
        <Typography
          sx={{
            backgroundClip: "text",
            backgroundImage: theme.colors.gradients.purple1,
            color: "transparent",
          }}
          align={"center"}
          variant="h1"
        >
          Rent Bare-Metal GPU Servers
        </Typography>
        <Typography
          align={"center"}
          variant="subtitle1"
          fontSize={16}
          sx={{ maxWidth: 520, px: 2 }}
        >
          Bare-metal servers offer a powerful solution for GPU workloads, providing you with complete control and optimal performance. 
        </Typography>

        <Typography
          align={"center"}
          variant="subtitle1"
          fontSize={16}
          sx={{ maxWidth: 560, px: 2, pb: 2 }}
        >
          By eliminating virtualization, you can fully harness dedicated hardware, ensuring that your applications run at their best. 
        </Typography>

        <StartButton to="https://meetings.runpod.io/meetings/runpod/off-platform-computing" title="Book a call"></StartButton>
      </Stack>

      <Card
          sx={{
            position: "relative",
            overflow: "visible",
            minWidth: { xs: "100%", md: "inherit" },
            p: 1,
            zIndex: 1,
            mb: 5,
            mt: 10
          }}
        >
          <Stack alignItems={"center"}>
            <Typography
              align={"center"}
              variant="subtitle1"
              fontSize={16}

              sx={{ maxWidth: 540, px: 2, pt: 4 }}
            >
              Bare-metal servers come pre-loaded with Ubuntu or Windows.
            </Typography>
          </Stack>
          <Stack 
            direction="row" 
            justifyContent={"center"}
            alignContent={"center"}
            textAlign={"center"}

            spacing={3}
            sx={{ borderRadius: 0.5, p: 2 }} 
            >
              <Box>
                <UbuntuLogo alt="ubuntu logo" width={70} height={70} />
              </Box>
              <Box pt={1}>
                <WindowsLogo alt="windows logo" width={60} height={60}/>
              </Box>
          </Stack>
        </Card>

      <Typography
        align={"center"}
        variant="subtitle1"
        fontSize={16}
        mt={10}
      >
        Minimum 8x GPUs and 1-month rental period. 
      </Typography>

      <H100 />
      <A6000 />
      <Tensorflow />

      <Stack alignItems="center">
        <Typography
          align={"center"}
          variant="subtitle1"
          fontSize={18}
          sx={{ maxWidth: 650, px: 3 }}
        >
          We support many other types of bare-metal servers and provide custom solutions depending on your use case. 
        </Typography>

        <Typography
          align={"center"}
          variant="subtitle1"
          fontSize={18}
          sx={{ maxWidth: 650, px: 3, mt:2, mb: 4 }}
        >
          Book a call to learn more about RAM, storage, CPU, network speeds, and available upgrades.
        </Typography>
        <StartButton to="https://meetings.runpod.io/meetings/runpod/off-platform-computing" title="Book a call"></StartButton>
      </Stack>
    </>
  )
}


const H100 = () => (
  <Stack
    alignItems="center"
    justifyContent={"center"}
    spacing={4}
    sx={{ my: 12 }}
    direction={{ xs: "column-reverse", md: "row-reverse" }}
  >
    <Box maxWidth={{ xs: "100%", md: "inherit" }} px={8} textAlign={"center"} width={500}>
      <Image
        alt="NVIDIA RTX A6000"
        layout="responsive"
        src="/static/images/h100-pci-e.png"
        width={350}
        height={295}
      />
    </Box>
    <Card
      sx={{
        minWidth: { xs: "100%", md: "inherit" },
        p: 4,
      }}
    >
      <Stack width={{ xs: "100%", md: "inherit" }}>
        <Typography sx={{ fontSize: 18, lineHeight: 1.167 }} variant="h2">
          Bare-Metal NVIDIA NVLink H100 80GB GPU Server
        </Typography>
        <Typography sx={{ fontSize: 18, mt: 3 }}>8x NVIDIA RTX A100 GPU</Typography>
        <Typography sx={{ fontSize: 15 }} variant="subtitle1">
          640 GB VRAM
        </Typography>
        <Typography sx={{ fontSize: 18, mt: 2 }}>PCIe and HGX</Typography>
        <Typography sx={{ fontSize: 15 }} variant="subtitle1">
          HGX servers can come configured with InfiniBand
        </Typography>
      </Stack>
    </Card>
  </Stack>
)

const A6000 = () => (
  <Stack
    alignItems="center"
    justifyContent={"center"}
    spacing={4}
    sx={{ my: 12 }}
    direction={{ xs: "column-reverse", md: "row" }}
  >
    <Box maxWidth={{ xs: "100%", md: "inherit" }} px={6} textAlign={"center"} width={500}>
      <Image
        alt="NVIDIA RTX A6000"
        layout="responsive"
        src="/static/images/rtx-a6000.png"
        width={400}
        height={362}
      />
    </Box>
    <Card
      sx={{
        minWidth: { xs: "100%", md: "inherit" },
        p: 4,
      }}
    >
      <Stack width={{ xs: "100%", md: "inherit" }}>
        <Typography sx={{ fontSize: 18, lineHeight: 1.167 }} variant="h2">
          Bare-Metal NVIDIA A6000 48GB GPU Server
        </Typography>
        <Typography sx={{ fontSize: 18, mt: 3 }}>8x NVIDIA RTX A6000 GPU</Typography>
        <Typography sx={{ fontSize: 15 }} variant="subtitle1">
          384 GB VRAM
        </Typography>
      </Stack>
    </Card>
  </Stack>
)

const Tensorflow = () => (
  <Stack
    alignItems="center"
    justifyContent={"center"}
    spacing={4}
    sx={{ my: 12 }}
    direction={{ xs: "column-reverse", md: "row-reverse" }}
  >
    <Box maxWidth={{ xs: "100%", md: "inherit" }} px={8} textAlign={"center"} width={500}>
      <Image
        alt="NVIDIA RTX A6000"
        layout="responsive"
        src="/static/images/rtx-a100.png"
        width={350}
        height={356}
      />
    </Box>
    <Card
      sx={{
        minWidth: { xs: "100%", md: "inherit" },
        p: 4,
      }}
    >
      <Stack width={{ xs: "100%", md: "inherit" }}>
        <Typography sx={{ fontSize: 18, lineHeight: 1.167 }} variant="h2">
          Bare-Metal NVIDIA NVLink A100 80GB GPU Server
        </Typography>
        {/* <Chip color="primary" label="NVLink Pairs" sx={{ mt: 2, width: 120 }} /> */}
        <Typography sx={{ fontSize: 18, mt: 3 }}>8x NVIDIA RTX A100 GPU</Typography>
        <Typography sx={{ fontSize: 15 }} variant="subtitle1">
          640 GB VRAM
        </Typography>
      </Stack>
    </Card>
  </Stack>
)
