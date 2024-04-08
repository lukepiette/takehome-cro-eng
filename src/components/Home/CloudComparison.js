import { Box, Card, Paper, Stack, Typography, useTheme } from "@mui/material"
import SecurityIcon from "@mui/icons-material/Security"
import StreamIcon from "@mui/icons-material/Stream"

import ButtonLink from "@components/ButtonLink"

var secureRightList = [
  "Tier 3/4 Datacenters",
  "Dedicated 10+ Gbps Burst",
  "Failover & Redundancy",
  "Strict Privacy & Security",
  "Enterprise Grade Hardware",
]

var communityRightList = [
  "Vetted Hosts",
  "100Mbps - 1 Gbps Burst",
  "Reliability > 98%",
  "Many Compute Options",
  "Rock-bottom Pricing",
]

export default function CloudComparison() {
  const theme = useTheme()

  return (
    <Stack
      alignItems="center"
      justifyContent={"center"}
      sx={{ my: 18 }}
      direction={{ xs: "column-reverse", md: "row" }}
    >
      <Paper
        elevation={0}
        sx={{
          background: {
            xs: theme.palette.background.paper,
            md: theme.palette.background.default,
          },
          position: "relative",
          p: 4,
          minWidth: { xs: "100%", md: "inherit" },
          zIndex: 1,
        }}
      >
        <Stack alignItems={{ xs: "start", md: "end" }} width={{ xs: "100%", md: "inherit" }}>
          <Typography sx={{ fontSize: 36, lineHeight: 1.3 }} variant="h3">
            Community
          </Typography>
          <Typography sx={{ fontSize: 20 }}>Cloud</Typography>
          <Stack direction={{ xs: "row", md: "row-reverse" }} alignItems="start" mt={3} spacing={8}>
            <Stack alignItems={{ xs: "start", md: "end" }} spacing={1}>
              {communityRightList.map((v, i) => (
                <Typography
                  key={i}
                  sx={{ fontSize: 18 }}
                  fontWeight={i === 0 ? 600 : 400}
                  color="text.secondary"
                >
                  {v}
                </Typography>
              ))}
            </Stack>
            <Box fontSize={75} sx={{ display: { xs: "none", md: "inherit" }, p: 0, m: 0 }}>
              <StreamIcon fontSize="inherit" />
            </Box>
          </Stack>
          <Stack direction="row" pt={4} spacing={2} width={"100%"}>
            <ButtonLink href={"/console/gpu-cloud"} fullWidth variant="contained" color="primary">
              Deploy Now
            </ButtonLink>
            <ButtonLink href={"/about/gpu-cloud"} fullWidth variant="outlined" color="primary">
              Learn More
            </ButtonLink>
          </Stack>
        </Stack>
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
          <Typography
            sx={{
              fontSize: 36,
              lineHeight: 1.3,
              backgroundClip: "text",
              backgroundImage: theme.colors.gradients.purple1,
              color: "transparent",
            }}
            variant="h3"
          >
            Secure
          </Typography>
          <Typography sx={{ fontSize: 20 }}>Cloud</Typography>
          <Stack direction="row" alignItems="start" mt={3} spacing={8}>
            <Stack spacing={1}>
              {secureRightList.map((v, i) => (
                <Typography key={i} sx={{ fontSize: 18 }} fontWeight={i === 0 ? 600 : 400}>
                  {v}
                </Typography>
              ))}
            </Stack>
            <Box fontSize={75} sx={{ display: { xs: "none", md: "inherit" }, p: 0, m: 0 }}>
              <SecurityIcon fontSize="inherit" />
            </Box>
          </Stack>
          <Stack direction="row" pt={4} spacing={2}>
            <ButtonLink href={"/console/gpu-cloud"} fullWidth variant="contained" color="primary">
              Deploy Now
            </ButtonLink>
            <ButtonLink href={"/about/gpu-cloud"} fullWidth variant="outlined" color="primary">
              Learn More
            </ButtonLink>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  )
}
