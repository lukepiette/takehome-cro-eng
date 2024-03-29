import { Box, Button, Stack, Typography, useTheme } from "@mui/material"
import CheckIcon from "@mui/icons-material/Check"

import FlashBoot from "./FlashBoot"
import Metrics from "./Metrics"
import StartButton from "@components/StartButton"

export default function Hero({ data }) {
  const theme = useTheme()

  return (
    <Stack
      justifyContent="space-around"
      sx={{
        "width": "100%",
        "position": "relative",
        "height": "calc(100vh - 71px)",
        "&:before": {
          content: "''",
          height: "100%",
          opacity: 1,
          position: "absolute",
          width: "100%",
          zIndex: -1,
        },
        "fallbacks": [{ height: "96%" }],
      }}
    >
      <Stack
        alignItems="center"
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        pt={4}
        sx={{
          width: "100%",
          px: { xs: 2, lg: 0 },
        }}
      >
        <Stack
          direction="row"
          height="100%"
          alignItems="center"
          spacing={8}
          sx={{ position: "relative" }}
        >
          <Stack spacing={4}>
            <Typography
              textAlign={{ xs: "center", md: "left" }}
              variant="h1"
              sx={{ fontSize: { xs: 38, sm: 52, xl: 65 } }}
            >
              Serverless GPUs
            </Typography>

            <Stack spacing={0.5}>
              <Typography
                textAlign={{ xs: "center", md: "left" }}
                sx={{ fontSize: { xs: 20, sm: 24 }, fontWeight: 300, lineHeight: 1.5 }}
                variant="h2"
              >
                GPU{" "}
                <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
                  compute
                </Box>{" "}
                for <strong>AI Inference</strong> and <strong>Training</strong>.
              </Typography>
              <Typography
                textAlign={{ xs: "center", md: "left" }}
                sx={{ fontSize: { xs: 20, sm: 22 }, fontWeight: 300, lineHeight: 1.5 }}
              >
                Pay by the second.
              </Typography>
            </Stack>

            <Stack direction="row" justifyContent={{ xs: "center", md: "start" }} spacing={2}>
              <StartButton to="/console/serverless" />
              <Button
                sx={{ color: "white" }}
                href="https://meetings.runpod.io/meetings/runpod/firstconnect"
              >
                Book a Call
              </Button>
            </Stack>
          </Stack>

          <HeroRight theme={theme} />
        </Stack>
      </Stack>

      <Box />

      <Stack direction="row" justifyContent="center" spacing={{ xs: 0, md: 25 }} width="100%">
        <Metrics data={data} />
        <Stack alignItems={"start"} display={{ xs: "none", sm: "flex" }}>
          <FlashBoot data={data} />
        </Stack>
      </Stack>
    </Stack>
  )
}

const HeroRight = ({ theme }) => (
  <Stack
    alignItems="end"
    display={{ xs: "none", md: "flex" }}
    flexWrap="wrap"
    justifyContent="center"
    rowGap={0.8}
    width={300}
  >
    {[
      "Autoscale",
      "Bring Your Container",
      "Logs & Metrics",
      "Multi-GPU",
      "Network Storage",
      "Streaming",
      "Webhooks",
    ].map((v) => (
      <Typography
        key={v}
        color="white"
        sx={{
          alignItems: "center",
          display: "flex",
          fontSize: 16,
          textAlign: "center",
        }}
        width={200}
      >
        <CheckIcon sx={{ fontSize: 22, color: theme.palette.success.main, mr: 0.5 }} /> {v}
      </Typography>
    ))}
  </Stack>
)
