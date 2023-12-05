import { Divider, Stack, Typography, useTheme } from "@mui/material"
import CloudComparison from "@components/Home/CloudComparison"
import Services from "./Services"

export default function GpuCloud() {
  const theme = useTheme()

  return (
    <Stack alignItems="center" my={6}>
      <Typography
        align={"center"}
        sx={{
          backgroundClip: "text",
          backgroundImage: theme.colors.gradients.purple1,
          color: "transparent",
        }}
        variant="h1"
      >
        GPU Cloud
      </Typography>

      <Typography align={"center"} fontSize={18} my={8} sx={{ maxWidth: 550 }} variant="subtitle1">
        RunPod aims to deliver the best user experience in core GPU computing. We currently offer{" "}
        <strong>GPU instances</strong> that spin up in seconds,{" "}
        <strong>serverless computing</strong> with production scale, and fully-managed{" "}
        <strong>AI endpoints</strong>.
      </Typography>

      <Services />
      <Divider sx={{ width: "100%" }} />
      <CloudComparison />
    </Stack>
  )
}
