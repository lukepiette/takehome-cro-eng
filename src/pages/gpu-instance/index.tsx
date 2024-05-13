import { Box, Card, Stack, Typography, useTheme } from "@mui/material"
import Head from "next/head"
import Image from "next/legacy/image"

import ButtonLink from "@components/ButtonLink"
import DeploySeconds from "@components/Home/DeploySeconds"
import PytorchLogo from "@assets/pytorch.svg"
import TensorFlowLogo from "@assets/tensorflow.svg"

export default function GpuInstance() {
  const theme = useTheme()

  return (
    <>
      <Head>
        <title>Rent GPU Instance</title>
        <meta
          name="description"
          content="Rent GPU Instance at an affordable price with Tensorflow, Pytorch, or other templates."
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
          Rent GPU Instances
        </Typography>
        <Typography
          align={"center"}
          variant="subtitle1"
          fontSize={16}
          sx={{ maxWidth: 500, px: 2 }}
        >
          Dedicated GPU instances to accelerate computing workloads such as{" "}
          <strong>artificial intelligence</strong>, <strong>deep learning</strong>,{" "}
          <strong>machine learning</strong>, <strong>scientific computing</strong>,{" "}
          <strong>ai art</strong>, and <strong>video rendering</strong>.
        </Typography>
        <Typography
          align={"center"}
          variant="subtitle1"
          fontSize={14}
          sx={{ maxWidth: 520, px: 2 }}
        >
          Light-weight containers that deploys in seconds.
        </Typography>
        <Stack direction={"row"} spacing={{ xs: 1, md: 3 }}>
          <ButtonLink
            variant="contained"
            sx={{
              width: "200px",
            }}
            href="/console/gpu-cloud"
          >
            Deploy Instances
          </ButtonLink>
          <ButtonLink
            variant="outlined"
            sx={{
              width: "200px",
            }}
            href="/gpu-instance/pricing"
          >
            Detailed Pricing
          </ButtonLink>
        </Stack>
      </Stack>
      <Stack alignItems={"center"} justifyContent="center" direction="row" my={6} spacing={3}>
        <Box>
          <TensorFlowLogo unoptimized alt="tensorflow logo" width={90} height={90} />
        </Box>
        <Box>
          <PytorchLogo unoptimized alt="pytorch logo" width={90} height={90} />
        </Box>
      </Stack>

      <BringYourContainer />
      <Tensorflow />
      <Pytorch />
      <DeploySeconds />
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
          Endless Possibilities
        </Typography>
        <Stack alignItems="start" maxWidth={600} mt={3} spacing={3}>
          <Typography sx={{ fontSize: 15 }}>
            We have custom images built with Tensorflow, Pytorch, Jupyter Lab, Nvidia drivers, and
            CUDA pre-installed to help you get started in minutes.
          </Typography>
          <Typography sx={{ fontSize: 15 }}>
            If none of our custom images fit your use case, you can deploy any public container
            image from hub.docker.com.
          </Typography>
          <Stack spacing={1}>
            <Typography sx={{ fontSize: 15 }} fontWeight={600}>
              Scale GPUs from 1x to 8x GPUs
            </Typography>
            <Typography sx={{ fontSize: 15 }}>
              As you build your models, you can test with a single GPU and scale to production with
              8 GPUs seamlessly without losing data.
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
    <Box maxWidth={{ xs: "100%", md: "inherit" }} textAlign={"center"} width={500}>
      <TensorFlowLogo
        unoptimized
        alt="tensorflow logo"
        layout="responsive"
        width={90}
        height={90}
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
          Tensorflow GPU Instance
        </Typography>
        <Stack alignItems="start" maxWidth={600} mt={3} spacing={3}>
          <Typography sx={{ fontSize: 15 }}>
            Pre-installed with TensorFlow, JupyterLab, and other packages to get you started
            quickly.
          </Typography>
          <Stack spacing={1}>
            <Typography sx={{ fontSize: 15 }} fontWeight={600}>
              Tensorflow and JupyterLab
            </Typography>
            <Typography sx={{ fontSize: 15 }}>
              TensorFlow open source platform enables building and training machine learning models
              at production scale. JupyterLab comes bundled to help configure and manage TensorFlow
              models.
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
    <Box maxWidth={{ xs: "100%", md: "inherit" }} textAlign={"center"} width={500}>
      <PytorchLogo unoptimized alt="pytorch logo" layout="responsive" width={90} height={90}/>
    </Box>
    <Card
      sx={{
        minWidth: { xs: "100%", md: "inherit" },
        p: 4,
      }}
    >
      <Stack width={{ xs: "100%", md: "inherit" }}>
        <Typography sx={{ fontSize: 18, lineHeight: 1.167 }} variant="h2">
          Pytorch GPU Instance
        </Typography>
        <Stack alignItems="start" maxWidth={600} mt={3} spacing={3}>
          <Typography sx={{ fontSize: 15 }}>
            Pre-installed with Pytorch, JupyterLab, and other packages to get you started quickly.
          </Typography>
          <Stack spacing={1}>
            <Typography sx={{ fontSize: 15 }} fontWeight={600}>
              Pytorch and JupyterLab
            </Typography>
            <Typography sx={{ fontSize: 15 }}>
              Pytorch open source machine learning platform is another alternative to Tensorflow.
              JupyterLab comes bundled to help configure and manage Pytorch models.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  </Stack>
)
