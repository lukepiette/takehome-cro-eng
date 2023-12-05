import { Box, Stack, Typography } from "@mui/material"

import ButtonLink from "@components/ButtonLink"
import Pricing from "./Pricing"

export default function InstancePricing({ data }) {
  return (
    <>
      <Stack alignItems={"center"} my={6} position="relative">
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
        <Typography align="center" fontSize={{ xs: 28, sm: 34 }} mb={2} variant="h1">
          GPU Instance Pricing
        </Typography>
        <Typography align="center" fontSize={18} sx={{ maxWidth: 600, px: 3 }} variant="body1">
          <strong>5x cheaper</strong> than other clouds
        </Typography>

        <Stack alignItems="center" justifyContent="center" mt={10} spacing={{ xs: 1.5, sm: 3 }}>
          <Typography fontSize={16}>
            Autoscale with Serverless with cold-start in milliseconds.
          </Typography>
          <ButtonLink
            variant="outlined"
            href="/serverless-gpu"
            sx={{ fontSize: 18, px: 3, py: 1.2 }}
          >
            Serverless Pricing
          </ButtonLink>
        </Stack>
      </Stack>

      <Pricing data={data} />

      <Stack width="100%" alignItems="center" my={18} position="relative" spacing={3}>
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

        <Typography align="center" color="white" variant="h2">
          Storage Pricing
        </Typography>
        <Typography
          align="center"
          variant="body1"
          fontSize={16}
          lineHeight={1.8}
          sx={{ maxWidth: 600, px: 3 }}
        >
          <strong>Pod Volume / Container Disk</strong>
          <br />
          $0.10/GB/Month on running pods
          <br />
          $0.20/GB/Month for idle volume
        </Typography>
        <Typography
          align="center"
          variant="body1"
          fontSize={16}
          lineHeight={1.8}
          sx={{ maxWidth: 600, px: 3 }}
        >
          <strong>Network Storage</strong>
          <br />
          $0.07/GB/Month
          <br />
          $0.05/GB/Month for 1TB or more
        </Typography>
      </Stack>

      <Stack width="100%" alignItems="center" my={15} spacing={3}>
        <Typography align="center" color="white" variant="h2">
          Bandwidth Pricing
        </Typography>
        <Typography align="center" variant="body1" fontSize={16} sx={{ maxWidth: 600, px: 3 }}>
          It&apos;s FREE!
          <br />
          No hidden internet bandwidth costs.
        </Typography>
      </Stack>

      <Stack alignItems="center" mb={20}>
        <Typography align={"center"} variant="body1" fontSize={18} sx={{ maxWidth: 650, px: 3 }}>
          Don&apos;t see a machine configuration that you like?
        </Typography>
        <Typography align={"center"} variant="body1" fontSize={18} sx={{ maxWidth: 650, px: 3 }}>
          Don&apos;t want to use containers?
        </Typography>
        <Typography
          align={"center"}
          my={2}
          variant="body1"
          fontSize={18}
          sx={{ maxWidth: 650, px: 3, mb: 4 }}
        >
          <strong>We provide custom solutions too!</strong>
        </Typography>
        <ButtonLink variant="outlined" href="/contact">
          Contact Us
        </ButtonLink>
      </Stack>
    </>
  )
}
