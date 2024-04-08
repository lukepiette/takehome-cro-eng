import { Stack, Typography, useTheme } from "@mui/material"
import Head from "next/head"
import type { NextPage } from "next"

import ButtonLink from "@components/ButtonLink"

const Four04: NextPage = () => {
  const theme = useTheme()

  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <meta name="description" content="Page not found." />
      </Head>

      <Stack alignItems={"center"} my={6} spacing={8}>
        <Typography
          sx={{
            backgroundClip: "text",
            backgroundImage: theme.colors.gradients.purple1,
            color: "transparent",
          }}
          align={"center"}
          variant="h1"
        >
          Page Not Found
        </Typography>

        <Stack spacing={1}>
          <ButtonLink href="/">Home</ButtonLink>
          <ButtonLink href="/endpoints">Endpoints</ButtonLink>
          <ButtonLink href="/serverless-gpu">Serverless</ButtonLink>
          <ButtonLink href="/gpu-instance/pricing">Pricing</ButtonLink>
          <ButtonLink href="https://docs.runpod.io">Docs</ButtonLink>
        </Stack>

        <Stack spacing={1}>
          <ButtonLink href="/console">Console</ButtonLink>
          <ButtonLink href="/console/gpu-cloud">Secure Cloud</ButtonLink>
          <ButtonLink href="/console/pods">My Pods</ButtonLink>
        </Stack>
      </Stack>
    </>
  )
}

export default Four04
