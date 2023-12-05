import { Box, Divider, Grid, Stack, Typography, useTheme } from "@mui/material"
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun"
import FlashOnIcon from "@mui/icons-material/FlashOn"

const AiInference = () => {
  const theme = useTheme()

  return (
    <Stack alignItems="center" justifyContent="center" position="relative" mx={3}>
      <Box
        sx={{
          backgroundImage: "url(/static/images/bg.webp)",
          backgroundRepeat: "no-repeat",
          filter: "blur(60px)",
          height: 1000,
          opacity: 0.8,
          overflowX: "hidden !important",
          position: "absolute",
          top: -400,
          transform: "rotate(130deg)",
          width: 900,
          zIndex: -1,
        }}
      />
      <Grid alignItems="stretch" container justifyContent="start" maxWidth="md">
        <Grid item xs={12} sm={5.5} textAlign="center">
          <Typography
            sx={{
              alignItems: "center",
              display: "flex",
              fontSize: 28,
              justifyContent: "center",
              mb: 2.5,
            }}
            variant="h3"
          >
            AI Inference <FlashOnIcon sx={{ fontSize: 30, ml: 1 }} />
          </Typography>

          <Typography align={"center"} sx={{ fontSize: 18 }}>
            We handle millions of inference requests a day. Scale your machine learning inference
            while keeping costs low.
          </Typography>
        </Grid>

        <Grid item textAlign="center" xs={0} sm={1}>
          <Divider orientation="vertical" sx={{ height: "100%", mx: "auto" }} />
        </Grid>
        <Grid display={{ sm: "none" }} item textAlign="center" xs={12} sm={0}>
          <Divider orientation="horizontal" sx={{ width: "100%", my: 6 }} />
        </Grid>

        <Grid item xs={12} sm={5.5}>
          <Typography
            sx={{
              alignItems: "center",
              display: "flex",
              fontSize: 28,
              justifyContent: "center",
              mb: 2.5,
            }}
            variant="h3"
          >
            AI Training <DirectionsRunIcon sx={{ fontSize: 30, ml: 1 }} />
          </Typography>

          <Typography align={"center"} sx={{ fontSize: 18 }}>
            Run machine learning training tasks that can take up to 7 days. Spin up GPUs per request
            and scale down once done.
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default AiInference
