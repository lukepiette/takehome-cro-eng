import { Box, Stack, Typography, useTheme } from "@mui/material"
import CheckIcon from "@mui/icons-material/Check"

import Metrics from "./Metrics"
import StartButton from "@components/StartButton"

export default function Hero({ data }) {
  const theme = useTheme()

  return (
    <Box
      sx={{
        "width": "100%",
        "position": "relative",
        "height": "calc(100vh - 72px)",
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
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        sx={{
          width: "100%",
          minHeight: 450,
          height: "calc(100vh - 265px)",
          px: { xs: 2.6, lg: 0 },
        }}
      >
        <Stack
          direction="row"
          height="100%"
          alignItems="center"
          justifyContent="space-between"
          spacing={8}
          sx={{ position: "relative", maxWidth: 1000 }}
        >
          <Stack spacing={4}>
            <Typography
              textAlign={{ xs: "center", md: "left" }}
              variant="h1"
              sx={{ fontSize: { xs: 40, sm: 55, xl: 65 } }}
            >
              Endpoints
            </Typography>

            <Stack spacing={0.5}>
              <Typography
                textAlign={{ xs: "center", md: "left" }}
                sx={{ fontSize: 24, fontWeight: 300 }}
                variant="h2"
              >
                Pay only for request execution time.
              </Typography>
              <Typography
                textAlign={{ xs: "center", md: "left" }}
                sx={{ fontSize: 24, fontWeight: 300 }}
                variant="h2"
              >
                Launch your product today.
              </Typography>
            </Stack>

            <Stack direction="row" justifyContent={{ xs: "center", md: "start" }} spacing={2}>
              <StartButton to="https://docs.runpod.io/reference/runpod-apis"></StartButton>
            </Stack>
          </Stack>
          <HeroRight theme={theme} />
        </Stack>
      </Stack>
      <Metrics data={data} />
    </Box>
  )
}

const HeroRight = ({ theme }) => (
  <Stack display={{ xs: "none", md: "flex" }} flexWrap="wrap" justifyContent="end" rowGap={0.8}>
    {["Autoscale", "Get started quickly", "Speech Recognition", "Generative Art"].map((v) => (
      <Typography
        key={v}
        color="white"
        sx={{
          alignItems: "center",
          display: "flex",
          fontSize: 18,
          mx: 4,
          textAlign: "center",
        }}
      >
        <CheckIcon sx={{ fontSize: 22, color: theme.palette.success.main, mr: 0.5 }} /> {v}
      </Typography>
    ))}
  </Stack>
)
