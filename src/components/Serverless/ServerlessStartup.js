import { Stack, Typography, useTheme } from "@mui/material"
import Link from "@components/Link"
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange"

const ServerlessStartup = () => {
  const theme = useTheme()

  return (
    <Stack alignItems={"center"} my={10} spacing={5}>
      <Stack alignItems={"center"} maxWidth={"90%"} width={600} spacing={4}>
        <Typography
          sx={{
            alignItems: "center",
            backgroundClip: "text",
            backgroundImage: theme.colors.gradients.purple1,
            color: "transparent",
            display: "flex",
            fontSize: 30,
            mb: 0.5,
          }}
          variant="h3"
        >
          Startup Program{" "}
          <CurrencyExchangeIcon
            sx={{
              fontSize: 32,
              ml: 1,
              color: theme.palette.primary.main,
            }}
          />
        </Typography>

        <Typography align={"center"} sx={{ fontSize: 18 }}>
          Get <strong>25% off</strong> on serverless compute with at least $500 monthly spend.
          Acceptance based on your product <strong>(website or an app)</strong>.{" "}
          <Link href="https://meetings.hubspot.com/runpod/startup-program">
            <strong>Contact us</strong>
          </Link>{" "}
          with your use case and anticipated spend.
        </Typography>
      </Stack>
    </Stack>
  )
}

export default ServerlessStartup
