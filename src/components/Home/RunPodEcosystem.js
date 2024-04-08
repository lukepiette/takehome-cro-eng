import { Typography, Stack, Grid, Box, useTheme, Tabs, Tab, Card } from "@mui/material"
import { useInView } from "react-intersection-observer"
import { useState, useRef, useEffect } from "react"
import ButtonLink from "@components/ButtonLink"

function CurvedVideoPlayer(props) {
  const videoRef = useRef(null)

  const handlePlay = () => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play()
    }
  }

  useEffect(() => {
    const videoElement = videoRef.current
    if (videoElement) {
      videoElement.addEventListener("pause", handlePlay)
    }
    return () => {
      if (videoElement) {
        videoElement.removeEventListener("pause", handlePlay)
      }
    }
  }, [])

  return (
    <Card sx={{ maxWidth: 345 * 2, borderRadius: 2, overflow: "hidden" }}>
      <Box
        sx={{
          "position": "relative",
          "width": "100%",
          "paddingTop": "56.25%", // for 16:9 aspect ratio
          "& video": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "inherit",
          },
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          loading="lazy"
          style={{ width: "100%", height: "auto" }} // Inline styles for the video tag
        >
          <source src={props.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
    </Card>
  )
}

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

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <div>{children}</div>
        </Box>
      )}
    </Box>
  )
}

const RunPodEcosystem = () => {
  const theme = useTheme()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Stack mb={{ xs: 20, md: 25 }} spacing={8} justifyContent="center" alignItems="center">
      <Box maxWidth={{ xs: "90vw", md: 930 }} position="relative">
        <Box
          sx={{
            backgroundImage: "url(/static/images/bg.webp)",
            backgroundRepeat: "no-repeat",
            filter: "blur(60px)",
            height: 1000,
            overflowX: "hidden !important",
            position: "absolute",
            top: -400,
            transform: "rotate(130deg)",
            width: 900,
            zIndex: -1,
          }}
        />
        <AnimatedTypography
          gutterBottom
          mb={8}
          variant="h1"
          fontSize={{ xs: 32, sm: 38, md: 42 }}
          textAlign={{ xs: "center", sm: "center" }}
          sx={{
            lineHeight: 1.4,
            filter: "drop-shadow(0 0 20px #673AB7)",
          }}
        >
          Join over 100,000 developers using RunPod
        </AnimatedTypography>

        <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "start" } }}>
          <Tabs value={value} onChange={handleChange} aria-label="The RunPod Ecosystem">
            <Tab
              sx={{ fontWeight: 300, padding: "5px !important", marginRight: "20px !important" }}
              label="GPU Instances"
            />
            <Tab
              sx={{ fontWeight: 300, padding: "5px !important", marginRight: "20px !important" }}
              label="Serverless"
            />
            <Tab sx={{ fontWeight: 300, padding: "5px !important" }} label="AI Endpoints" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Grid container mt={0}>
            <Grid
              item
              justifyContent="center"
              alignItems="center"
              xs={12}
              md={6}
              sx={{ marginTop: 3, paddingRight: 3 }}
            >
              <Typography gutterBottom variant="h3" mb={1}>
                Launch a GPU instance in seconds
              </Typography>
              <Typography sx={{ fontSize: 16, color: "#CBCCD2" }}>
                Kickstart your development with minimal configuration using RunPod&apos;s on-demand
                GPU instances. Our platform is engineered to provide you with rapid access to
                powerful GPUs, facilitating a smooth start for machine learning and AI development.
              </Typography>

              <ButtonLink href="/console/gpu-cloud" sx={{ mt: 2 }} variant="outlined">
                GPU Instances
              </ButtonLink>
            </Grid>
            <Grid mt={3} item xs={12} md={6}>
              <CurvedVideoPlayer videoSrc={"/static/images/videos/deploy-pod.mp4"} />
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Grid container mt={0}>
            <Grid
              item
              justifyContent="center"
              alignItems="center"
              xs={12}
              md={6}
              sx={{ marginTop: 3, paddingRight: 3 }}
            >
              <Typography gutterBottom variant="h3" mb={1}>
                Create an autoscaling Serverless endpoint for your model
              </Typography>
              <Typography sx={{ fontSize: 16, color: "#CBCCD2" }}>
                We provide a robust, autoscaling environment that ensures your models are
                production-ready from day one. RunPod&apos;s serverless architecture means you spend
                less time managing infrastructure and more time focusing on building your
                application.
              </Typography>

              <ButtonLink href="/serverless-gpu" sx={{ mt: 2 }} variant="outlined">
                Serverless
              </ButtonLink>
            </Grid>
            <Grid mt={3} item xs={12} md={6}>
              <CurvedVideoPlayer videoSrc={"/static/images/videos/create-endpoint.mp4"} />
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Grid container mt={0}>
            <Grid
              item
              justifyContent="center"
              alignItems="center"
              mt={0}
              xs={12}
              md={6}
              sx={{ marginTop: 3, paddingRight: 3 }}
            >
              <Typography gutterBottom variant="h3" mb={1}>
                Run popular open-source models with our pre-built endpoints
              </Typography>
              <Typography sx={{ fontSize: 16, color: "#CBCCD2" }}>
                Run popular open-source models like Llama, SDXL, Whisper, and many others with our
                AI Endpoints. Our endpoints are tailored for instant scalability and high
                availability, ensuring you can deliver AI services efficiently and reliably to your
                users.
              </Typography>

              <ButtonLink href="/endpoints" sx={{ mt: 2 }} variant="outlined">
                AI Endpoints
              </ButtonLink>
            </Grid>
            <Grid mt={3} item xs={12} md={6}>
              <CurvedVideoPlayer videoSrc={"/static/images/videos/ai-endpoints.mp4"} />
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
    </Stack>
  )
}

export default RunPodEcosystem
