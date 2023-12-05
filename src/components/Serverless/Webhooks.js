import { Box, Stack, Typography, useTheme } from "@mui/material"
import WebhookIcon from "@mui/icons-material/Webhook"

const Webhooks = () => {
  const theme = useTheme()

  return (
    <Stack alignItems={"center"} my={20} position="relative" spacing={5}>
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
      <Stack alignItems={"center"} maxWidth={"90%"} width={600} spacing={4}>
        <Typography
          sx={{
            alignItems: "center",
            display: "flex",
            fontSize: 30,
            mb: 0.5,
          }}
          variant="h3"
        >
          Webhooks <WebhookIcon sx={{ fontSize: 32, ml: 1 }} />
        </Typography>

        <Typography align={"center"} sx={{ fontSize: 18 }}>
          Leverage webhooks to get data output as soon as request is done. Data is pushed instantly
          to your API.
        </Typography>
      </Stack>
    </Stack>
  )
}

export default Webhooks
