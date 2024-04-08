import { Card, Paper, Stack, Typography, useTheme } from "@mui/material"
import ButtonLink from "@components/ButtonLink"

export default function Services(props: any) {
  const theme = useTheme()

  return (
    <Stack
      alignItems="center"
      direction={{ xs: "column", lg: "row" }}
      justifyContent={"center"}
      spacing={{ xs: 5, lg: 0.5 }}
      my={8}
      {...props}
    >
      <Paper
        elevation={0}
        sx={{
          background: theme.palette.background.default,
          maxWidth: { xs: 600, lg: 420 },
          minWidth: { xs: "100%", md: "inherit" },
          px: 4,
          py: 3,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Stack width={{ xs: "100%", md: "inherit" }}>
          <Typography sx={{ fontSize: 30, lineHeight: 1.3 }} variant="h3">
            GPU Instances
          </Typography>
          <Typography fontSize={16} variant="subtitle1">
            Secure / Community Cloud
          </Typography>
          <Typography fontSize={16} mt={2}>
            Deploy container-based GPU instances that spin up in seconds using both public and
            private repositories.
          </Typography>
          <Stack direction="row" pt={4} spacing={2} width={"100%"}>
            <ButtonLink color="primary" fullWidth href="/console/gpu-cloud" variant="outlined">
              Deploy Now
            </ButtonLink>
            <ButtonLink href="/gpu-instance/pricing" fullWidth variant="outlined" color="primary">
              Pricing
            </ButtonLink>
          </Stack>
        </Stack>
      </Paper>

      <Card
        sx={{
          maxWidth: { xs: 600, lg: 420 },
          minWidth: { xs: "100%", md: "inherit" },
          overflow: "visible",
          px: 4,
          py: 4,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Stack width={{ xs: "100%", md: "inherit" }}>
          <Typography
            sx={{
              fontSize: 30,
              lineHeight: 1.3,
              backgroundClip: "text",
              backgroundImage: theme.colors.gradients.purple1,
              color: "transparent",
            }}
            variant="h3"
          >
            Serverless GPUs
          </Typography>
          <Typography fontSize={16} variant="subtitle1">
            Secure Cloud
          </Typography>
          <Typography fontSize={16} mt={2}>
            Pay per second serverless GPU computing brings autoscale to production, low cold-start,
            and security using our secure cloud.
          </Typography>
          <Stack direction="row" pt={4} spacing={2}>
            <ButtonLink href={"/serverless-gpu"} fullWidth variant="outlined" color="primary">
              Learn More
            </ButtonLink>
          </Stack>
        </Stack>
      </Card>

      <Paper
        elevation={0}
        sx={{
          background: theme.palette.background.default,
          maxWidth: { xs: 600, lg: 420 },
          minWidth: { xs: "100%", md: "inherit" },
          px: 4,
          py: 3,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Stack width={{ xs: "100%", md: "inherit" }}>
          <Typography sx={{ fontSize: 30, lineHeight: 1.3 }} variant="h3">
            AI Endpoints
          </Typography>
          <Typography fontSize={16} variant="subtitle1">
            Fully-Managed
          </Typography>
          <Typography fontSize={16} mt={2}>
            Fully managed and scaled for any workload. Use our AI Endpoints for Dreambooth, Stable
            Diffusion, Whisper, and more.
          </Typography>
          <Stack direction="row" pt={4} spacing={2} width={"100%"}>
            <ButtonLink href="/endpoints" fullWidth variant="outlined" color="primary">
              Learn More
            </ButtonLink>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  )
}
