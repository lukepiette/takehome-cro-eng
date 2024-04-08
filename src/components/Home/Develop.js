import { useState, React } from "react"
import { useInterval } from "@hooks/useInterval"
import { Typography, Button, Stack, Grid, Box, Paper, LinearProgress } from "@mui/material"
import { useInView } from "react-intersection-observer"
import ButtonLink from "@components/ButtonLink"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded"
import GpuPricingCompact from "./GpuPricingCompact"
import HourglassBottomRoundedIcon from "@mui/icons-material/HourglassBottomRounded"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import PublicIcon from "@mui/icons-material/Public"

const pulseColor = "#824edc"

const DeployProgress = ({ disabled }) => {
  const maxMib = 2000
  const [mib, setMib] = useState(0)
  let percent = Math.round((mib / maxMib) * 100)
  percent = percent > 100 ? 100 : percent

  const tailLog = () => {
    const newMib = mib + 100
    if (!disabled) setMib(newMib > 4000 ? 0 : newMib)
  }
  useInterval(tailLog, 200)

  return (
    <Paper
      sx={{ px: 3, py: 2, maxWidth: "90%", width: 450, backgroundColor: "transparent" }}
      variant="outlined"
    >
      <Stack direction={"row"} mb={1} justifyContent={"space-between"} spacing={1}>
        {[`${percent}%`, ``, "500 MiB/s"].map((v, i) => (
          <Typography key={i} variant="subtitle1" component="div" color="text.secondary">
            {v}
          </Typography>
        ))}
      </Stack>
      <LinearProgress
        color={percent === 100 ? "success" : "primary"}
        sx={{ mb: 1 }}
        value={percent}
        variant="determinate"
      />
    </Paper>
  )
}

const DividerIcon = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  })
  return (
    <Paper
      ref={ref}
      elevation={0}
      style={{
        margin: "10px 0",
        backgroundColor: "transparent",
        filter: "drop-shadow(0 0 5px #824edc) drop-shadow(0 0 10px #824edc)",
        transition: "opacity 1s ease-out",
        opacity: inView ? 1 : 0,
      }}
    >
      {children}
    </Paper>
  )
}

const DividerLine = ({ height, gradient }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  })
  return (
    <Box
      sx={{
        height: height,
        width: "1px",
        position: "relative",
        backgroundColor: "transparent",
      }}
    >
      <Box
        ref={ref}
        sx={{
          position: "absolute",
          width: "1px",
          top: 0,
          background: gradient || "linear-gradient(#824edc, #824edc)",
          transition: "height 2s ease-out",
          height: inView ? "100%" : "0px",
        }}
      />
    </Box>
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
    "animation": inView ? "fadeIn 1.5s ease-out forwards" : "none",
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

const Develop = ({ data }) => {
  return (
    <Grid container px={1} maxWidth={1050} my={{ xs: 20, md: 25 }} position="relative">
      <Grid item xs={12}>
        <Box
          sx={{
            backgroundImage: "url(/static/images/bg.webp)",
            zIndex: -1,
            height: "100vh",
            width: "115vh",
            transform: "rotate(-60deg)",
            backgroundRepeat: "no-repeat",
            filter: "blur(30px)",
            // Position it as a pseudo-background
            position: "absolute",
            top: "10%",
            right: "-30%",
            bottom: 0,
            overflow: "hidden",
          }}
        />
        <Stack>
          <AnimatedTypography
            color="white"
            fontSize={{ xs: 32, sm: 38, md: 44 }}
            fontWeight={400}
            mb={6}
            variant="h2"
            sx={{
              filter: "drop-shadow(0 0 20px #824edc)",
            }}
            lineHeight={1.4}
          >
            Launch a GPU instance in seconds
          </AnimatedTypography>
          <Typography fontSize={{ xs: 20, sm: 22, md: 26 }} variant="body1">
            Run any GPU workload seamlessly, so you can focus less on ML ops and more on building
            your application.
          </Typography>
        </Stack>
      </Grid>

      <Grid item xs={12} md={6}>
        <Grid container columnSpacing={0} gap={0}>
          <Grid alignItems="center" display="flex" flexDirection="column" mt={7} item xs={1}>
            <DividerIcon>
              <ContentCopyIcon sx={{ fontSize: 30, color: "#CBCCD2" }} />
            </DividerIcon>
            <DividerLine height="100%" />
          </Grid>
          <Grid item mt={8} pb={8} pl={4} xs={11}>
            <Typography variant="h3">50+ Template Environments</Typography>
            <Typography fontSize={18} variant="body1" mt={1}>
              Choose from 50+ templates ready out-of-the-box, or bring your own custom container.
            </Typography>
            <Grid mt={2} container spacing={2}>
              <Grid item>
                <Paper elevation={3} style={{ padding: "16px", backgroundColor: "transparent" }}>
                  <Typography>PyTorch</Typography>
                </Paper>
              </Grid>
              <Grid item>
                <Paper elevation={3} style={{ padding: "16px", backgroundColor: "transparent" }}>
                  <Typography>Tensoflow</Typography>
                </Paper>
              </Grid>
              <Grid item>
                <Paper elevation={3} style={{ padding: "16px", backgroundColor: "transparent" }}>
                  <Typography>Axolotl</Typography>
                </Paper>
              </Grid>
              <Grid item>
                <Paper elevation={3} style={{ padding: "16px", backgroundColor: "transparent" }}>
                  <Typography>Stable Diffusion</Typography>
                </Paper>
              </Grid>
              <Grid item>
                <Paper elevation={3} style={{ padding: "16px", backgroundColor: "transparent" }}>
                  <Typography>Dreambooth</Typography>
                </Paper>
              </Grid>
              <Grid item>
                <Paper elevation={3} style={{ padding: "16px", backgroundColor: "transparent" }}>
                  <Typography>TheBloke LLMs</Typography>
                </Paper>
              </Grid>
              <Grid item>
                <Paper elevation={3} style={{ padding: "16px", backgroundColor: "transparent" }}>
                  <Typography>A1111</Typography>
                </Paper>
              </Grid>
              <Grid item>
                <ButtonLink
                  href={"/console/templates"}
                  variant="outlined"
                  size="large"
                  sx={{ borderColor: "#824edc", color: "white", fontSize: 14 }}
                >
                  50+ Others
                </ButtonLink>
              </Grid>
            </Grid>
          </Grid>

          <Grid display="flex" flexDirection="column" alignItems="center" item xs={1}>
            <DividerIcon>
              <PublicIcon sx={{ fontSize: 30, color: "#CBCCD2" }} />
            </DividerIcon>
            <DividerLine height="100%" />
          </Grid>
          <Grid item mt={1} pb={8} pl={4} xs={11}>
            <Typography variant="h3">Global Interoperability</Typography>
            <Typography fontSize={18} variant="body1" mt={1}>
              Select from 30+ regions across North America, Europe, and South America.
            </Typography>
          </Grid>

          <Grid display="flex" flexDirection="column" alignItems="center" item xs={1}>
            <DividerIcon>
              <FolderOpenRoundedIcon sx={{ fontSize: 30, color: "#CBCCD2" }} />
            </DividerIcon>
            <DividerLine height="100%" />
          </Grid>
          <Grid item mt={1} pb={8} pl={4} xs={11}>
            <Typography variant="h3">Limitless Storage</Typography>
            <Typography fontSize={18} variant="body1" mt={1}>
              Ultra-fast NVMe storage for your datasets and models, so you can rapidly scale
              development.
            </Typography>
          </Grid>

          <Grid display="flex" flexDirection="column" alignItems="center" item xs={1}>
            <DividerIcon>
              <HourglassBottomRoundedIcon sx={{ fontSize: 30, color: "#CBCCD2" }} />
            </DividerIcon>
            <DividerLine height="100%" />
          </Grid>
          <Grid item mt={1} pl={4} xs={11}>
            <Typography variant="h3">Deploy in Seconds</Typography>
            <Typography fontSize={18} variant="body1" mb={3} mt={1}>
              Configure your deployment and launch in seconds.
            </Typography>
            <DeployProgress />
            <Stack
              mt={4}
              direction="row"
              justifyContent={{ xs: "center", md: "start" }}
              spacing={2}
            >
              <Button
                href={"/console/gpu-cloud"}
                variant="outlined"
                size="large"
                sx={{ borderColor: pulseColor, color: "white" }}
                endIcon={<KeyboardArrowRightIcon />}
              >
                Get Started
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={6} mt={{ xs: 2, md: 5 }}>
        <GpuPricingCompact data={data} />
      </Grid>
    </Grid>
  )
}

export default Develop
