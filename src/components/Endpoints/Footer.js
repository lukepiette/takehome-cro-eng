import { Stack, Typography } from "@mui/material"

import ButtonLink from "@components/ButtonLink"

export default function Footer() {
  return (
    <Stack alignItems="center" my={20}>
      <ButtonLink
        color="primary"
        href={"https://www.runpod.io/console/user/settings"}
        size="large"
        sx={{ mt: 8, width: 200 }}
        variant="contained"
      >
        Get an API Key
      </ButtonLink>

      <Typography color="white" fontSize={16} fontWeight={600} mt={10} textAlign="center">
        Data Security & Usage
      </Typography>
      <Typography
        color="body1"
        fontSize={16}
        fontWeight={400}
        mt={1}
        textAlign="center"
        maxWidth={500}
      >
        Endpoints temporarily save data to fulfill requests and allow status checks within 30 mins
        of completion.
      </Typography>
    </Stack>
  )
}
