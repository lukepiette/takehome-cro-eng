import { Typography, Stack, Button } from "@mui/material"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"

const ScaleAMDGPUs = () => {
  const pulseColor = "#824edc"

  return (
    <Stack
      maxWidth={{ xs: "90vw", md: 930 }}
      my={25}
      spacing={8}
      justifyContent="center"
      alignItems="center"
    >
      <Stack direction="column">
        <Typography variant="h1" textAlign="center">
          Scale up to 10,000+ GPUs seamlessly
        </Typography>
        <Typography fontSize={{ xs: 18, sm: 20, md: 22 }} mt={4} textAlign="center" variant="body1">
          Scale quickly to thousands of GPUs without sacrificing cost or reliability.
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent={{ xs: "center", md: "start" }}>
        <Button
          href={"https://meetings.runpod.io/meetings/runpod/amd-mi300x-interest"}
          variant="outlined"
          size="large"
          sx={{ borderColor: pulseColor, color: "white", marginRight: 2 }}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Reserve MI300X GPUs
        </Button>
        <Button
          href={"https://meetings.runpod.io/meetings/runpod/amd-mi250-interest"}
          variant="outlined"
          size="large"
          sx={{ borderColor: pulseColor, color: "white" }}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Reserve MI250 GPUs
        </Button>
      </Stack>
    </Stack>
  )
}

export default ScaleAMDGPUs
