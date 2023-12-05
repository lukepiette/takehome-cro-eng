import { Typography, Stack, Box, keyframes, Button } from "@mui/material"
import { useInView } from "react-intersection-observer"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"

function useAnimateOnInView() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const style = {
    "opacity": 0,
    "transform": "translateY(20px)",
    "animation": inView ? "fadeIn 2s ease-out forwards" : "none",
    "@keyframes fadeIn": {
      "0%": { opacity: 0, transform: "translateY(20px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
  }

  return { ref, style }
}

function AnimatedTypography({ children, ...props }) {
  const { ref, style } = useAnimateOnInView()

  return (
    <Typography
      ref={ref}
      {...props}
      sx={{
        ...props.sx, // Include any additional styles passed via the sx prop
        ...style, // Apply the animation style
      }}
    >
      {children}
    </Typography>
  )
}

const EndSection = () => {
  const pulseColor = "#824edc"

  return (
    <Stack
      maxWidth={{ xs: "90vw", md: 930 }}
      mb={25}
      spacing={8}
      justifyContent="center"
      alignItems="center"
    >
      <Stack direction="column">
        <AnimatedTypography
          color="white"
          fontSize={{ xs: 32, sm: 38, md: 42 }}
          fontWeight={400}
          gutterBottom
          textAlign="center"
          variant="h2"
          sx={{ filter: "drop-shadow(0 0 20px #824edc)" }}
        >
          Launch your AI application in seconds
        </AnimatedTypography>
        <Typography fontSize={{ xs: 22, sm: 24, md: 26 }} mt={4} textAlign="center" variant="body1">
          Experience the most cost-effective GPU cloud platform built for production.
        </Typography>
      </Stack>

      <Stack direction="row" justifyContent={{ xs: "center", md: "start" }} spacing={2}>
        <Button
          href={"/console/gpu-secure-cloud"}
          variant="outlined"
          size="large"
          sx={{ borderColor: pulseColor, color: "white", mt: -3 }}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Get Started
        </Button>
      </Stack>
    </Stack>
  )
}

export default EndSection
