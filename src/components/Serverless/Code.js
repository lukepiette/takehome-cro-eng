import { Box, Stack, Typography } from "@mui/material"
import dynamic from "next/dynamic"

import ButtonLink from "@components/ButtonLink"

const SyntaxHighlighter = dynamic(() => import("@components/SyntaxHighlighter"), {
  loading: () => <div />,
  ssr: false,
})

const Code = () => (
  <Stack alignItems="center" my={20} spacing={5}>
    <Stack alignItems="center" direction={{ xs: "column", md: "row" }} maxWidth={"90%"} spacing={1}>
      <Box maxWidth="100%" width={{ xs: 450, md: 270 }}>
        <Typography
          sx={{
            fontSize: 22,
            mb: 0.5,
            textAlign: "center",
          }}
        >
          Input
        </Typography>
        <SyntaxHighlighter customStyle={{ borderRadius: 10 }} language="json">{`{
  "input": {
    "name": "RunPod"
  }
}
  `}</SyntaxHighlighter>
      </Box>

      <Box maxWidth="100%" width={420}>
        <Typography
          sx={{
            fontSize: 24,
            mb: 0.5,
            textAlign: "center",
          }}
        >
          Your Code
        </Typography>
        <SyntaxHighlighter customStyle={{ borderRadius: 10 }} language="python">{`import runpod

def handler(event):
  return "Hello, " + event['input']['name']

runpod.serverless.start({"handler": handler})`}</SyntaxHighlighter>
      </Box>

      <Box maxWidth="100%" width={{ xs: 450, md: 280 }}>
        <Typography
          sx={{
            fontSize: 22,
            mb: 0.5,
            textAlign: "center",
          }}
        >
          Output
        </Typography>
        <SyntaxHighlighter customStyle={{ borderRadius: 10 }} language="json">{`{
  "executionTime": 100,
  "id": "bdcd9f90",
  "output": "Hello, RunPod",
  "status": "COMPLETED"
}`}</SyntaxHighlighter>
      </Box>
    </Stack>

    <Stack direction="row" mt={8} spacing={2}>
      <ButtonLink
        color="primary"
        href="/console/serverless"
        size="large"
        sx={{ fontSize: 16 }}
        variant="outlined"
      >
        Serverless Dashboard
      </ButtonLink>
      <ButtonLink
        color="primary"
        href="https://docs.runpod.io/docs/worker-image-creation"
        size="large"
        sx={{ fontSize: 16 }}
        variant="outlined"
      >
        Docs
      </ButtonLink>
    </Stack>
  </Stack>
)

export default Code
