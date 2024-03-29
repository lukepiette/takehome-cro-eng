import { Box, Button, Card, Grid, Stack, Typography, useTheme } from "@mui/material"
import ChatIcon from "@mui/icons-material/Forum"
import EmailIcon from "@mui/icons-material/Email"
import Image from "next/legacy/image"

import PurpleDiscordLogo from "/public/static/svg/discord-logo-purple.svg"
import WhiteDiscordLogo from "/public/static/svg/discord-logo-white.svg"

export default function Contact() {
  const theme = useTheme()
  const darkMode = theme.palette.mode === "dark"

  return (
    <Stack alignItems={"center"} px={{ xs: 2, md: 0 }} mb={20}>
      <Box
        sx={{
          backgroundImage: "url(/static/images/bg.webp)",
          backgroundRepeat: "no-repeat",
          filter: "blur(60px)",
          height: 1000,
          overflowX: "hidden !important",
          position: "absolute",
          top: -300,
          transform: "rotate(130deg)",
          width: 900,
          zIndex: -1,
        }}
      />

      <Stack alignItems={"center"} my={6} mb={8} spacing={3}>
        <Typography align="center" variant="h1">
          Contact Us
        </Typography>

        <Stack alignItems="start" spacing={4} width={{ xs: "100%", md: 800 }}>
          <Typography sx={{ fontSize: 16 }} align={"justify"}>
            {
              "Our dedicated support team is here to help you with any questions or concerns related to the RunPod platform. We aim to provide timely and accurate responses, and your understanding is appreciated."
            }
          </Typography>

          <Typography sx={{ fontSize: 16 }} align={"justify"}>
            <strong>Platform-Related Queries:</strong> We prioritize queries directly related to our
            platform&apos;s functionality, billing, account issues, and any technical difficulties
            you face with our service.
          </Typography>

          <Typography sx={{ fontSize: 16 }} align={"justify"}>
            <strong>{"General Technical Questions:"}</strong>{" "}
            {
              "If you have questions about open-source projects or other software running on our service, we recommend checking our Discord community or the projects repository. Our active members often have quicker and more in-depth answers for these general topics."
            }
          </Typography>
        </Stack>
      </Stack>

      <Stack alignItems="start" spacing={4} width={{ xs: "100%", md: "550px" }}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={3} alignItems="center">
          <Box>
            {" "}
            <Button
              fullWidth
              rel="noreferrer"
              target="_blank"
              href="https://discord.gg/cUpRmau42V"
              sx={{ height: { xs: "100px", md: "150px" }, width: { xs: "100px", md: "150px" } }}
              variant="outlined"
            >
              <Stack spacing={2} alignItems="center">
                <Image
                  alt="discord logo"
                  src={darkMode ? WhiteDiscordLogo : PurpleDiscordLogo}
                  width={70}
                  height={70}
                />
                <Typography variant="h4">Discord</Typography>
              </Stack>
            </Button>
          </Box>

          <Typography sx={{ fontSize: 18 }}>
            {
              "Ask your question in our Discord! We are very active and rest of the community is willing to help."
            }
          </Typography>
        </Stack>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={3} alignItems="center">
          <Box>
            <Button
              onClick={() => {
                zE("messenger", "open")
              }}
              sx={{ height: { xs: "100px", md: "150px" }, width: { xs: "100px", md: "150px" } }}
              variant="outlined"
            >
              <Stack spacing={1} alignItems="center">
                <ChatIcon sx={{ fontSize: { xs: 48, md: 64 } }}></ChatIcon>
                <Typography variant="h4">Chat</Typography>
              </Stack>
            </Button>
          </Box>

          <Stack spacing={2}>
            <Typography sx={{ fontSize: 18 }}>
              Start a live chat with us. While we strive to be responsive, please understand if we
              don&apos;t get back to you immediately.
            </Typography>

            <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
              {"Response time: 1-2 business days"}
            </Typography>
          </Stack>
        </Stack>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={3} alignItems="center">
          <Box>
            <Button
              target="_top"
              href="mailto:help@runpod.io"
              sx={{ height: { xs: "100px", md: "150px" }, width: { xs: "100px", md: "150px" } }}
              variant="outlined"
            >
              <Stack spacing={1} alignItems="center">
                <EmailIcon sx={{ fontSize: { xs: 48, md: 64 } }}></EmailIcon>
                <Typography variant="h4">Email</Typography>
              </Stack>
            </Button>
          </Box>
          <Stack spacing={2}>
            <Typography sx={{ fontSize: 18 }}>
              {"Want to use good old-fashioned email? You can reach us at help@runpod.io"}
            </Typography>
            <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
              {"Response time: 3-5 business days"}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
