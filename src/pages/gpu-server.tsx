import { Box, Card, Stack, Typography, useTheme } from "@mui/material"
import Head from "next/head"

import ButtonLink from "@components/ButtonLink"
import Image from "next/image"
import UbuntuLogo from "/public/static/svg/ubuntu-word-logo.svg"
import WindowsLogo from "/public/static/svg/windows-word-logo.svg"

export default function GpuServer() {
  const theme = useTheme()

  return (
    <>
      <Head>
        <title>Rent GPU Server</title>
        <meta
          name="description"
          content="Rent GPU Server at an affordable price with Ubuntu, or Windows operating system."
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
          Rent GPU Servers
        </Typography>
        <Typography
          align={"center"}
          variant="subtitle1"
          fontSize={16}
          sx={{ maxWidth: 500, px: 2 }}
        >
          Rent a dedicated GPU server to accelerate your computing workloads such as{" "}
          <strong>artificial intelligence</strong>, <strong>deep learning</strong>,{" "}
          <strong>machine learning</strong>, <strong>scientific computing</strong>,{" "}
          <strong>ai art</strong>, and <strong>video rendering</strong>.
        </Typography>
        <Typography
          align={"center"}
          variant="subtitle1"
          fontSize={14}
          sx={{ maxWidth: 500, px: 2 }}
        >
          Light-weight VM that deploys in seconds.
          <br />
          Install your own Kubernetes, Docker, or other platforms.
        </Typography>
        <ButtonLink color={"secondary"} href="#" variant="contained" sx={{ cursor: "default" }}>
          Planned in Q2 of 2023
        </ButtonLink>
      </Stack>
      <Stack direction="row" justifyContent="center" my={6}>
        <Stack
          direction="row"
          spacing={3}
          sx={{ backgroundColor: "#f2f5f9", borderRadius: 0.5, p: 2 }}
        >
          <Box>
            <Image alt="ubuntu logo" src={UbuntuLogo} width={100} height={35} />
          </Box>
          <Box>
            <Image alt="windows logo" src={WindowsLogo} width={120} height={35} />
          </Box>
        </Stack>
      </Stack>

      <BringYourContainer />
      <Tensorflow />
      <Pytorch />
    </>
  )
}

const BringYourContainer = () => (
  <Stack
    alignItems="start"
    justifyContent={"center"}
    spacing={4}
    sx={{ my: 12 }}
    direction={{ xs: "column", md: "row" }}
  >
    <Card
      sx={{
        minWidth: { xs: "100%", md: "inherit" },
        p: 4,
      }}
    >
      <Stack width={{ xs: "100%", md: "inherit" }}>
        <Typography sx={{ fontSize: 18, lineHeight: 1.167 }} variant="h3">
          Complete OS Virtualization
        </Typography>
        <Stack alignItems="start" maxWidth={600} mt={3} spacing={3}>
          <Typography sx={{ fontSize: 15 }}>
            Containers are great for some situations, but when you need more control and better
            isolation, Virtual Machines are a better fit. You can install your own Kubernetes,
            Docker, or other platforms to scale your compute workloads.
          </Typography>
          <Stack spacing={1}>
            <Typography sx={{ fontSize: 15 }} fontWeight={600}>
              Scale GPUs from 1x to 8x GPUs
            </Typography>
            <Typography sx={{ fontSize: 15 }}>
              Scale your GPU count as you need more compute going from 1 to 8 GPUs within seconds.
              Infinite scaling will be available in a future update!
            </Typography>
          </Stack>
        </Stack>
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
    <Box maxWidth={{ xs: "100%", md: "inherit" }} px={14} textAlign={"center"} width={500}>
      <Image alt="ubuntu logo" src={UbuntuLogo} />
    </Box>
    <Card
      sx={{
        minWidth: { xs: "100%", md: "inherit" },
        p: 4,
      }}
    >
      <Stack width={{ xs: "100%", md: "inherit" }}>
        <Typography sx={{ fontSize: 18, lineHeight: 1.167 }} variant="h2">
          Ubuntu GPU Server
        </Typography>
        <Stack alignItems="start" maxWidth={600} mt={3} spacing={3}>
          <Typography sx={{ fontSize: 15 }}>
            Ubuntu GPU Server offers many flexibilies like installing your own tools and leveraging
            GPU for any accelerated computing tasks.
          </Typography>
          <Stack spacing={1}>
            <Typography sx={{ fontSize: 15 }} fontWeight={600}>
              Tensorflow or Pytroch
            </Typography>
            <Typography sx={{ fontSize: 15 }}>
              Install TensorFlow, Pytroch or any other toolsets you need for your Machine Learning,
              or other needs.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  </Stack>
)

const Pytorch = () => (
  <Stack
    alignItems="center"
    justifyContent={"center"}
    spacing={4}
    sx={{ my: 12 }}
    direction={{ xs: "column-reverse", md: "row" }}
  >
    <Box maxWidth={{ xs: "100%", md: "inherit" }} px={10} textAlign={"center"} width={500}>
      <Image alt="windows logo" src={WindowsLogo} />
    </Box>
    <Card
      sx={{
        minWidth: { xs: "100%", md: "inherit" },
        p: 4,
      }}
    >
      <Stack width={{ xs: "100%", md: "inherit" }}>
        <Typography sx={{ fontSize: 18, lineHeight: 1.167 }} variant="h2">
          Windows GPU Server
        </Typography>
        <Stack alignItems="start" maxWidth={600} mt={3} spacing={3}>
          <Typography sx={{ fontSize: 15 }}>
            Some things are only possible in Windows and it&apos;s there when you need it. For those
            that prefer Windows GPU Server, you get full control to install any tools you need
            whether it&apos;s for video rendering, or other computing tasks.
          </Typography>
        </Stack>
      </Stack>
    </Card>
  </Stack>
)
