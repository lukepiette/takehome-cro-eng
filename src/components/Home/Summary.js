import { a, useScroll } from "@react-spring/web"
import { Typography, Stack, Box, styled, keyframes, Grid } from "@mui/material"
import { useInView } from "react-intersection-observer"
import { useState } from "react"

// Define keyframes for the animation
const pulseShadow = keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 200px #121212);
  }
  50% {
    filter: drop-shadow(0 0 300px #121212);
  }
`

// Create a styled component with the animation
const AnimatedStack = styled(Stack)({
  padding: 2,
  overflow: "hidden",
  animation: `${pulseShadow} 14s infinite ease-in-out`, // Apply the animation
})

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

const Summary = () => {
  const [yprogress, setYProgress] = useState(0)
  useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      setYProgress(parseInt(scrollYProgress * 1000))
    },
  })

  const rotateXDelta = parseInt(yprogress > 0 ? yprogress / 3 : yprogress)
  const rotateX = rotateXDelta <= 50 ? 55 - rotateXDelta : 5

  return (
    <Stack
      mt={14}
      justifyContent="center"
      alignItems="center"
      px={{ xs: 1, sm: 2, md: 0 }}
      spacing={8}
    >
      <Stack direction="column">
        <AnimatedTypography
          gutterBottom
          variant="h1"
          textAlign={{ xs: "center" }}
          fontSize={{ xs: "36px", md: "44px" }}
          sx={{
            lineHeight: 1.4,
            filter: "drop-shadow(0 0 20px #673AB7)",
          }}
        >
          Develop, train, and scale AI models.
        </AnimatedTypography>
        <AnimatedTypography
          gutterBottom
          variant="h1"
          textAlign={{ xs: "center" }}
          fontSize={{ xs: "36px", md: "44px" }}
          sx={{
            mb: -6,
            mt: 2,
            filter: "drop-shadow(0 0 20px #673AB7)",
          }}
        >
          All in one cloud.
        </AnimatedTypography>
      </Stack>
      <a.div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          marginTop: 130,
          perspective: "1000px",
        }}
      >
        <a.div
          style={{
            alignItems: "center",
            border: "solid rgba(255, 255, 255, .9)",
            borderRadius: "20px",
            borderWidth: "4px 1px",
            justifyContent: "center",
            maxWidth: "100%",
            opacity: 0.8,
            transform: `rotateX(${rotateX}deg)`,
          }}
        >
          <img
            alt="runpod demo"
            src="/static/images/rp.png"
            style={{
              borderRadius: 20,
              maxWidth: "100%",
            }}
          />
        </a.div>
      </a.div>

      <Box pt={{ xs: 10 }} sx={{ perspective: "1000px" }}>
        <a.div
          style={{
            borderRadius: "20px",
            marginTop: -20 * 9,
            marginLeft: 9,
            marginRight: 9,
            padding: 18,
          }}
        >
          <Grid
            container
            columns={12}
            direction={{ xs: "column", md: "row" }}
            justifyContent="center"
            spacing={4}
            textAlign={{ xs: "left", md: "center" }}
            mt={{ xs: 2, md: 0 }}
          >
            <Grid item xs={3.5}>
              <Typography fontSize={{ xs: 20, sm: 26 }} mb={2} variant="h3">
                Develop
              </Typography>
              <Typography align="left" fontSize={18} sx={{ textAlign: "left" }}>
                With over 50 template environments, you&apos;re just three clicks away from a fully
                configured development workspace.
              </Typography>
            </Grid>
            <Grid item xs={3.5}>
              <Typography fontSize={{ xs: 20, sm: 26 }} mb={2} variant="h3">
                Train
              </Typography>
              <Typography sx={{ textAlign: "left" }} fontSize={18}>
                RunPod is engineered to streamline the training process, allowing you to benchmark
                and train your models efficiently.
              </Typography>
            </Grid>
            <Grid item xs={3.5}>
              <Typography fontSize={{ xs: 20, sm: 26 }} mb={2} variant="h3">
                Scale
              </Typography>
              <Typography sx={{ textAlign: "left" }} fontSize={18}>
                Deploy your models to production and scale from 0 to millions of inference requests
                with our Serverless endpoints.
              </Typography>
            </Grid>
          </Grid>
        </a.div>
      </Box>
    </Stack>
  )
}

export default Summary
