import { Box, Stack, Typography, useTheme } from "@mui/material"

import ButtonLink from "@components/ButtonLink"
import CardBox from "./CardBox"

const whisperList = ["$0.00025 / second", "", "3 minutes of audio in 30s", "Choose between various models"]
const fasterWhisperList = ["$0.00025 / second", "", "3 minutes of audio in 11s", "2-4x Faster than vanilla Whisper"]

export default function Whisper() {
  const theme = useTheme()

  return (
    <Stack alignItems="center" my={20}>
      <Stack
        id="speech-recognition"
        alignItems="center"
        direction="row"
        justifyContent="center"
        pt={1}
        spacing={0.5}
      >
        <Box
          sx={{
            background: theme.colors.primary.main,
            borderRadius: 1,
            height: 30,
            transform: "skew(10deg)",
            width: 15,
          }}
        />
        <Stack
          sx={{
            background: theme.colors.primary.main,
            borderRadius: 1,
            height: 55,
            justifyContent: "center",
            transform: "skew(10deg)",
            width: 320,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: theme.palette.getContrastText(theme.colors.primary.main),
              fontSize: 26,
              textAlign: "center",
              transform: "skew(-10deg)",
            }}
          >
            Speech Recognition
          </Typography>
        </Stack>
        <Box
          sx={{
            background: theme.colors.primary.main,
            borderRadius: 1,
            height: 30,
            transform: "skew(10deg)",
            width: 15,
          }}
        />
        <Box
          sx={{
            background: theme.colors.primary.main,
            borderRadius: 1,
            height: 15,
            transform: "skew(10deg)",
            width: 10,
          }}
        />
      </Stack>

      <Stack
        alignItems="center"
        direction={{ xs: "column", md: "row" }}
        justifyContent={"center"}
        mt={8}
        px={1}
        spacing={2}
        rowGap={2}
        flexWrap="wrap"
      >
        <CardBox
          button={
            <ButtonLink
              href={"https://docs.runpod.io/reference/whisper"}
              fullWidth
              variant="outlined"
              color="primary"
            >
              API Docs
            </ButtonLink>
          }
          list={whisperList}
          primary
          theme={theme}
          title="Whisper"
        />
        <CardBox
          button={
            <ButtonLink
              href={"https://docs.runpod.io/reference/faster-whisper"}
              fullWidth
              variant="outlined"
              color="primary"
            >
              API Docs
            </ButtonLink>
          }
          list={fasterWhisperList}
          primary
          theme={theme}
          title="Faster Whisper"
        />
      </Stack>
    </Stack>
  )
}
