import { Box, Stack, Typography, useTheme } from "@mui/material"

import ButtonLink from "@components/ButtonLink"
import CardBox from "./CardBox"

var sdList = [
  "$0.00025 / second",
  "24 GB VRAM (768x768 max)",
  "",
  "3.4s for 512x512 25 steps",
  "5,000 images for $4.25",
]
var dbList = [
  "$0.001 / second",
  "80 GB VRAM",
  "",
  "4m training time for 1000 steps",
  "100s of images in less than 10m",
]

const kandinskyList = [
  "$0.00025 / second",
  "24 GB VRAM (768x768 max)",
  "",
  "Supports multi-language",
  "Better coherence than SD"
]

export default function Services() {
  const theme = useTheme()

  return (
    <Stack alignItems="center" my={20}>
      <Stack alignItems="center" direction="row" justifyContent="center" pt={1} spacing={0.5}>
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
            width: 250,
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
            Text to Image
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
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        mt={8}
        px={1}
        spacing={2}
        rowGap={2}
        flexWrap="wrap"
      >
        <CardBox
          button={
            <ButtonLink
              href={"https://docs.runpod.io/reference/anything-v3"}
              fullWidth
              variant="outlined"
              color="primary"
            >
              API Docs
            </ButtonLink>
          }
          list={sdList}
          primary
          theme={theme}
          title="Anything V3"
          version="v1.5"
        />
        <CardBox
          button={
            <ButtonLink
              href={"https://docs.runpod.io/reference/anything-v4"}
              fullWidth
              variant="outlined"
              color="primary"
            >
              API Docs
            </ButtonLink>
          }
          list={sdList}
          primary
          theme={theme}
          title="Anything V4"
          version="v1.5"
        />
        <CardBox
          button={
            <ButtonLink
              href={"/endpoint/dreambooth-v1"}
              fullWidth
              variant="outlined"
              color="primary"
            >
              API Docs
            </ButtonLink>
          }
          primary
          list={dbList}
          theme={theme}
          title="DreamBooth"
          version="v1.5"
        />
        <CardBox
          button={
            <ButtonLink
              href={"https://docs.runpod.io/reference/openjourney-sd-v15"}
              fullWidth
              variant="outlined"
              color="primary"
            >
              API Docs
            </ButtonLink>
          }
          list={sdList}
          primary
          theme={theme}
          title="Openjourney"
          version="v1.5"
        />
        <CardBox
          button={
            <ButtonLink
              href={"https://docs.runpod.io/reference/stable-diffusion-v1"}
              fullWidth
              variant="outlined"
              color="primary"
            >
              API Docs
            </ButtonLink>
          }
          list={sdList}
          primary
          theme={theme}
          title="Stable Diffusion"
          version="v1.5"
        />
        <CardBox
          button={
            <ButtonLink
              href={"https://docs.runpod.io/reference/stable-diffusion-v2"}
              fullWidth
              variant="outlined"
              color="primary"
            >
              API Docs
            </ButtonLink>
          }
          list={sdList}
          primary
          theme={theme}
          title="Stable Diffusion"
          version="v2"
        />
        <CardBox
          button={
            <ButtonLink
              href={"https://docs.runpod.io/reference/kandinsky-21"}
              fullWidth
              variant="outlined"
              color="primary"
            >
              API Docs
            </ButtonLink>
          }
          list={kandinskyList}
          primary
          theme={theme}
          title="Kandinsky"
          version="v2.1"
        />
      </Stack>
    </Stack>
  )
}
