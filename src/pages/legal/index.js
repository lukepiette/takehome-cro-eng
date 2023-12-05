import { Stack, Typography, useTheme } from "@mui/material"
import Head from "next/head"
import Link from "@components/Link"

const Legal = () => {
  const theme = useTheme()

  return (
    <>
      <Head>
        <title>RunPod - Legal Documents</title>
        <meta name="description" content="RunPod legal documents." />
      </Head>

      <Stack alignItems={"center"} my={6} spacing={3}>
        <Typography
          sx={{
            backgroundClip: "text",
            backgroundImage: theme.colors.gradients.purple1,
            color: "transparent",
            mb: 6,
          }}
          align={"center"}
          variant="h1"
        >
          Legal Documents
        </Typography>
        <Link href="/legal/privacy-policy">Privacy Policy</Link>
        <Link href="/legal/cookie-policy">Cookie Policy</Link>
        <Link href="/legal/terms-of-service">Terms of Service</Link>
        <Link href="/legal/disclaimer">Disclaimer</Link>
      </Stack>
    </>
  )
}

export default Legal
