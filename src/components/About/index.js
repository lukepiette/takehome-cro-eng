import { Box, Stack, Typography, useTheme } from "@mui/material"
import Team from "./TeamHeadshots"
import RunPodCloud from "./GpuCloud"
import ButtonLink from "@components/ButtonLink"

export default function About() {
  const theme = useTheme()

  return (
    <>
      <Stack alignItems={"center"} mb={20} mt={8} position="relative">
        <Box
          sx={{
            backgroundImage: "url(/static/images/bg.webp)",
            backgroundRepeat: "no-repeat",
            filter: "blur(60px)",
            height: 1000,
            overflowX: "hidden !important",
            position: "absolute",
            top: -400,
            transform: "rotate(130deg)",
            width: 900,
            zIndex: -1,
          }}
        />

        <Typography align={"center"} mb={8} variant="h1">
          About RunPod
        </Typography>

        <Stack alignItems="center" spacing={2}>
          <Typography align="center" color="white" fontSize={24} sx={{ maxWidth: 600, px: 2 }}>
            We are building Cloud services
            <br />
            focused on accelerating AI adoption.
          </Typography>
          <Typography align="center" fontSize={18} sx={{ maxWidth: 700, px: 2 }}>
            Whether you&apos;re an experienced ML developer training a large language model, or an
            enthusiast tinkering with stable diffusion, we strive to make GPU compute as seamless
            and affordable as possible.
          </Typography>
        </Stack>

        <Typography align="center" mb={8} mt={20} variant="h1">
          The Team
        </Typography>

        <Team />

        <Stack direction={"row"} mt={20} spacing={{ xs: 1, md: 3 }}>
          <ButtonLink variant="outlined" sx={{ width: "200px" }} href="/contact">
            Contact Us
          </ButtonLink>
          <ButtonLink variant="outlined" sx={{ width: "200px" }} href="/gpu-instance/pricing">
            Pricing
          </ButtonLink>
        </Stack>
      </Stack>
    </>
  )
}
