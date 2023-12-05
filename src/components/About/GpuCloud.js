import { Card, Paper, Stack, Typography, useTheme } from "@mui/material"
import Image from "next/image"

import ButtonLink from "@components/ButtonLink"
import SecureGraphic from "/public/static/svg/SecureGraphic.svg"
import WorldGraphic from "/public/static/svg/WorldGraphic.svg"
import ServerlessGraphic from "/public/static/svg/ServerGraphic.svg"
import APIGraphic from "/public/static/svg/APIGraphic.svg"

export default function RunPodCloud() {
  const theme = useTheme()

  return (
    <Stack>
      <Stack alignItems={"center"} mt={20} mb={6}>
        <Typography align={"center"} variant="h1">
          RunPod GPU Cloud Ecosystem
        </Typography>
      </Stack>

      <SecureCloud />
      <CommunityCloud />
      <Serverless />
      <AIEndpoints />
    </Stack>
  )
}

function SecureCloud() {
  const theme = useTheme()

  return (
    <Stack
      alignItems="center"
      justifyContent={"center"}
      sx={{ my: 10 }}
      direction={{ xs: "column-reverse", md: "row" }}
    >
      <Paper
        elevation={0}
        sx={{
          background: {
            xs: theme.palette.background.default,
            md: theme.palette.background.default,
          },
          position: "relative",
          p: 4,
          width: 500,
          maxWidth: { xs: "100%", md: "inherit" },
          zIndex: 1,
        }}
      >
        <Image alt="secure cloud graphic" src={SecureGraphic} />
      </Paper>
      <Card
        sx={{
          position: "relative",
          overflow: "visible",
          minWidth: { xs: "100%", md: "inherit" },
          p: 4,
          zIndex: 1,
        }}
      >
        <Stack width={{ xs: "100%", md: "inherit" }}>
          <Typography sx={{ lineHeight: 1.167 }} variant="h3">
            Secure Cloud
          </Typography>
          <Stack alignItems="start" maxWidth={600} mt={3} spacing={3}>
            <Stack spacing={1}>
              <Typography sx={{ fontSize: 18 }} fontWeight={600}>
                Tier 4 Datacenters
              </Typography>
              <Typography sx={{ fontSize: 16 }}>
                Our secure cloud runs in tiered datacenters located in Kansas, USA and Oslo, NOR.
                RunPod HQ is located in the Philadelphia area.
              </Typography>
            </Stack>
            <Stack spacing={1}>
              <Typography sx={{ fontSize: 18 }} fontWeight={600}>
                Enterprise Grade hardware
              </Typography>
              <Typography sx={{ fontSize: 16 }}>
                Our Secure Cloud Machines are equipped with fast SSD storage, enterprise
                interconnects between nodes, and fast redundant business internet.
              </Typography>
            </Stack>
            <Stack spacing={1}>
              <Typography sx={{ fontSize: 18 }} fontWeight={600}>
                Trust and Security
              </Typography>
              <Typography sx={{ fontSize: 16 }}>
                Our data centers are currently using UV{"&"}S for co-location services. Our racks
                share physical space with servers that are used by the government and for other
                sensitive workloads. Our personnel are required to adhere to strict privacy and
                security measures.
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" pt={4} spacing={2}>
            <ButtonLink
              href={"/console/gpu-secure-cloud"}
              fullWidth
              variant="contained"
              color="primary"
            >
              Deploy on Secure Coud
            </ButtonLink>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  )
}

function CommunityCloud() {
  const theme = useTheme()

  return (
    <Stack
      alignItems="center"
      justifyContent={"center"}
      sx={{ my: 10 }}
      direction={{ xs: "column-reverse", md: "row-reverse" }}
    >
      <Paper
        elevation={0}
        sx={{
          background: {
            xs: theme.palette.background.default,
            md: theme.palette.background.default,
          },
          position: "relative",
          p: 4,
          width: 500,
          maxWidth: { xs: "100%", md: "inherit" },
          zIndex: 1,
        }}
      >
        <Image alt="world graphic" src={WorldGraphic} />
      </Paper>
      <Card
        sx={{
          position: "relative",
          overflow: "visible",
          minWidth: { xs: "100%", md: "inherit" },
          p: 4,
          zIndex: 1,
        }}
      >
        <Stack width={{ xs: "100%", md: "inherit" }}>
          <Typography sx={{ lineHeight: 1.167 }} variant="h3">
            Community Cloud
          </Typography>
          <Stack alignItems="start" maxWidth={600} mt={3} spacing={3}>
            <Stack spacing={1}>
              <Typography sx={{ fontSize: 18 }} fontWeight={600}>
                The Best Pricing
              </Typography>
              <Typography sx={{ fontSize: 16 }}>
                Our community cloud prices are unbeatable in the industry. If you have a workload
                that does not require the additional guarantees that Secure Cloud offers, then this
                is the place to get unbeatable savings.
              </Typography>
            </Stack>
            <Stack spacing={1}>
              <Typography sx={{ fontSize: 18 }} fontWeight={600}>
                Highly Reliable
              </Typography>
              <Typography sx={{ fontSize: 16 }}>
                We require our hosts to keep at least 98% uptime to stay listed. This means that you
                are guaranteed a good user experience, regardless of whether you decide to go with
                Secure Cloud or Community Cloud.
              </Typography>
            </Stack>
            <Stack spacing={1}>
              <Typography sx={{ fontSize: 18 }} fontWeight={600}>
                Decentralized
              </Typography>
              <Typography sx={{ fontSize: 16 }}>
                Our Community Cloud hosts are vetted by us and are located all over the world. Join
                us in democratizing GPU computing.
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" pt={4} spacing={2}>
            <ButtonLink href={"/console/gpu-cloud"} fullWidth variant="contained" color="primary">
              Deploy on Community Cloud
            </ButtonLink>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  )
}

function Serverless() {
  const theme = useTheme()

  return (
    <Stack
      alignItems="center"
      justifyContent={"center"}
      sx={{ my: 10 }}
      direction={{ xs: "column-reverse", md: "row" }}
    >
      <Paper
        elevation={0}
        sx={{
          background: {
            xs: theme.palette.background.default,
            md: theme.palette.background.default,
          },
          position: "relative",
          p: 4,
          width: 500,
          maxWidth: { xs: "100%", md: "inherit" },
          zIndex: 1,
        }}
      >
        <Image alt="serverless graphic" src={ServerlessGraphic} />
      </Paper>
      <Card
        sx={{
          position: "relative",
          overflow: "visible",
          minWidth: { xs: "100%", md: "inherit" },
          p: 4,
          zIndex: 1,
        }}
      >
        <Stack width={{ xs: "100%", md: "inherit" }}>
          <Typography sx={{ lineHeight: 1.167 }} variant="h3">
            Serverless
          </Typography>
          <Stack alignItems="start" maxWidth={600} mt={3} spacing={3}>
            <Stack spacing={1}>
              <Typography sx={{ fontSize: 18 }} fontWeight={600}>
                Autoscaling
              </Typography>
              <Typography sx={{ fontSize: 16 }}>
                Workers scale from 0 to 100 on our Secure Cloud platform, highly available and
                distributed globally.
              </Typography>
            </Stack>
            <Stack spacing={1}>
              <Typography sx={{ fontSize: 18 }} fontWeight={600}>
                AI Inference
              </Typography>
              <Typography sx={{ fontSize: 16 }}>
                We handle millions of inference requests a day and can scale to handle billions.
                Scale your machine learning inference while keeping costs low.
              </Typography>
            </Stack>
            <Stack spacing={1}>
              <Typography sx={{ fontSize: 18 }} fontWeight={600}>
                AI Training
              </Typography>
              <Typography sx={{ fontSize: 16 }}>
                Run machine learning training tasks that can take up to 24 hours. Spin up GPUs per
                request and scale down once done.
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" pt={4} spacing={2}>
            <ButtonLink href={"/console/serverless"} fullWidth variant="contained" color="primary">
              Deploy with Serverless
            </ButtonLink>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  )
}

function AIEndpoints() {
  const theme = useTheme()

  return (
    <Stack
      alignItems="center"
      justifyContent={"center"}
      sx={{ my: 10 }}
      direction={{ xs: "column-reverse", md: "row-reverse" }}
    >
      <Paper
        elevation={0}
        sx={{
          background: {
            xs: theme.palette.background.default,
            md: theme.palette.background.default,
          },
          position: "relative",
          p: 4,
          width: 500,
          maxWidth: { xs: "100%", md: "inherit" },
          zIndex: 1,
        }}
      >
        <Image alt="world graphic" src={APIGraphic} />
      </Paper>
      <Card
        sx={{
          position: "relative",
          overflow: "visible",
          minWidth: { xs: "100%", md: "inherit" },
          p: 4,
          zIndex: 1,
        }}
      >
        <Stack width={{ xs: "100%", md: "inherit" }}>
          <Typography sx={{ lineHeight: 1.167 }} variant="h3">
            AI Endpoints
          </Typography>
          <Stack alignItems="start" maxWidth={600} mt={3} spacing={3}>
            <Stack spacing={1}>
              <Typography sx={{ fontSize: 18 }} fontWeight={600}>
                Built for Production
              </Typography>
              <Typography sx={{ fontSize: 16 }}>
                AI Endpoints are fully managed and scaled to handle any workload. They are designed
                for a variety of applications including Dreambooth, Stable Diffusion, Whisper, and
                more.
              </Typography>
            </Stack>
            <Stack spacing={1}>
              <Typography sx={{ fontSize: 18 }} fontWeight={600}>
                Get Started in Minutes
              </Typography>
              <Typography sx={{ fontSize: 16 }}>
                Start running inference on our AI Endpoints with a few lines of code.
              </Typography>
            </Stack>
            <Stack spacing={1}>
              <Typography sx={{ fontSize: 18 }} fontWeight={600}>
                Execution Based Pricing
              </Typography>
              <Typography sx={{ fontSize: 16 }}>Pay only for request execution time.</Typography>
            </Stack>
          </Stack>
          <Stack direction="row" pt={4} spacing={2}>
            <ButtonLink href={"/gpu-cloud"} fullWidth variant="contained" color="primary">
              Get Started with AI Endpoints
            </ButtonLink>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  )
}
