import { Stack, Typography } from "@mui/material"
import ButtonLink from "@components/ButtonLink"

const Footer = () => (
  <Stack alignItems={"center"} my={20} spacing={5}>
    <Stack alignItems={"center"} maxWidth={"90%"} spacing={4}>
      <Stack direction="row" spacing={2}>
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

      <Typography align={"center"} width={420} sx={{ fontSize: 18 }}>
        Contact us for individual use cases and we can help you get ready for production.
      </Typography>
    </Stack>
  </Stack>
)

export default Footer
