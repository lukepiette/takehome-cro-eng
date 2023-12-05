import { Box, Stack, Typography, useTheme } from "@mui/material"

import ButtonLink from "@components/ButtonLink"
import CardBox from "./CardBox"

var llama13bList = ["$0.00185 / 1000 tokens", "48 GB VRAM"]
var llama7bList = ["$0.00075 / 1000 tokens", "24 GB VRAM"]
var pygmalion6bList = ["$0.00055 / second", "48 GB VRAM"]

export default function LanguageModels() {
  const theme = useTheme()

  return (
    <Stack alignItems="center" mt={20} mb={10}>
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
            width: 360,
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
            Large Language Models
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
              href={"https://docs.runpod.io/reference/llama2-13b-chat"}
              fullWidth
              variant="outlined"
              color="primary"
            >
              API Docs
            </ButtonLink>
          }
          list={llama13bList}
          primary
          theme={theme}
          title="Llama2 13B"
        />

        <CardBox
          button={
            <ButtonLink
              href={"https://docs.runpod.io/reference/llama2-7b-chat"}
              fullWidth
              variant="outlined"
              color="primary"
            >
              API Docs
            </ButtonLink>
          }
          list={llama7bList}
          primary
          theme={theme}
          title="Llama2 7B"
        />

        <CardBox
          button={
            <ButtonLink
              href={"https://docs.runpod.io/reference/pygmalion-6b"}
              fullWidth
              variant="outlined"
              color="primary"
            >
              API Docs
            </ButtonLink>
          }
          list={pygmalion6bList}
          primary
          theme={theme}
          title="Pygmalion 6B"
        />
      </Stack>
    </Stack>
  )
}
