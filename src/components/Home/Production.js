import { Typography, Stack, Grid, Box, Paper } from "@mui/material"
import { useInView } from "react-intersection-observer"
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt"
import FlashBoot from "@components/Serverless/FlashBoot"
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded"
import HourglassBottomRoundedIcon from "@mui/icons-material/HourglassBottomRounded"
import Metrics from "@components/Serverless/Metrics"
import MoneyOffIcon from "@mui/icons-material/MoneyOff"
import PublicIcon from "@mui/icons-material/Public"
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt"
import StorageIcon from "@mui/icons-material/Storage"
import TerminalIcon from "@mui/icons-material/Terminal"

const DividerIcon = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
          transition: "height 1s ease-out",
          height: inView ? "100%" : "0px",
        }}
      />
    </Box>
  )
}

const DividerFull = () => (
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 7 }}>
    <DividerIcon>
      <ContentCopyIcon sx={{ fontSize: "30px" }} />
    </DividerIcon>
    <DividerLine height="350px" />
    <DividerIcon>
      <PublicIcon sx={{ fontSize: "30px" }} />
    </DividerIcon>
    <DividerLine height="135px" />
    <DividerIcon>
      <FolderOpenRoundedIcon sx={{ fontSize: "30px" }} />
    </DividerIcon>
    <DividerLine height="135px" />
    <DividerIcon>
      <HourglassBottomRoundedIcon sx={{ fontSize: "30px" }} />
    </DividerIcon>
    <DividerLine height="250px" gradient="linear-gradient(#824edc, transparent)" />
  </Box>
)

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

const Production = ({ data }) => {
  return (
    <Stack
      maxWidth={1050}
      mb={{ xs: 20, md: 25 }}
      justifyContent="center"
      alignItems="center"
      spacing={8}
    >
      <Box position="relative">
        <Box
          display={{ xs: "none", md: "block" }}
          sx={{
            backgroundImage: "url(/static/images/bg.webp)",
            zIndex: -1,
            height: 800,
            width: 900,
            transform: "rotate(180deg)",
            backgroundRepeat: "no-repeat",
            filter: "blur(40px)",
            // Position it as a pseudo-background
            position: "relative",
            top: 430,
            right: 0,
            bottom: 0,
            overflow: "hidden",
            mt: -60,
          }}
        />
        <Stack mt={{ xs: 0, md: -30 }}>
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
            Scale inference on your models with Serverless
          </AnimatedTypography>
          <Typography fontSize={{ xs: 20, sm: 22, md: 26 }} variant="body1">
            Create production-ready endpoints that autoscale from 0 to 100s of GPUs in seconds. Only
            pay for the resources you use.
          </Typography>
        </Stack>
        <Stack mt={4}>
          <Grid mt={2} mb={2} container>
            <Grid xs={6} item md={3}>
              <Box>
                <Typography color="white" fontSize={{ xs: 28, sm: 30 }}>
                  99.99%
                </Typography>
                <Typography fontSize={20} variant="body1">
                  guaranteed uptime
                </Typography>
              </Box>
            </Grid>

            <Grid xs={6} item md={3}>
              <Box>
                <Typography color="white" fontSize={{ xs: 28, sm: 30 }}>
                  13
                </Typography>
                <Typography fontSize={20} variant="body1">
                  regions
                </Typography>
              </Box>
            </Grid>

            <Grid
              xs={6}
              item
              md={3}
              marginTop={{ xs: "10px", sm: 0 }}
              display={{ xs: "none", sm: "flex" }}
            >
              <Box>
                <Typography color="white" fontSize={{ xs: 28, sm: 30 }}>
                  10PB+
                </Typography>
                <Typography fontSize={20} variant="body1">
                  network storage
                </Typography>
              </Box>
            </Grid>

            <Grid sm={6} xs={12} item md={3} marginTop={{ xs: "10px", sm: 0 }}>
              <Box>
                <Metrics data={data} requestProps={{ variant: "body1" }} />
              </Box>
            </Grid>
          </Grid>
        </Stack>

        <Stack justifyContent="center" alignItems="center">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <Grid container mt={4}>
              {/* Vertical Divider Line */}

              <Grid item xs={11} md={5.5}>
                <Box width={{ xs: "100%", textAlign: "left" }}>
                  <DividerIcon>
                    <SignalCellularAltIcon sx={{ fontSize: "30px" }} />
                  </DividerIcon>
                  <Typography mt={2} variant="h3" sx={{ fontSize: "24px", textAlign: "left" }}>
                    Autoscale to Millions of Requests
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: "18px", textAlign: "left" }} mt={1}>
                    Scale inference, or fine-tuning workloads to thousands of concurrent GPUs and
                    back to zero in seconds.
                  </Typography>
                </Box>

                <Box mt={8} width={{ xs: "100%", textAlign: "left" }}>
                  <DividerIcon>
                    <StorageIcon sx={{ fontSize: "30px" }} />
                  </DividerIcon>
                  <Typography mt={2} variant="h3" sx={{ fontSize: "24px", textAlign: "left" }}>
                    Zero Ops Overhead
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: "18px", textAlign: "left" }} mt={1}>
                    RunPod handles all the operational aspects of your infrastructure from deploying
                    to scaling.
                  </Typography>
                </Box>

                <Box mt={8} width={{ xs: "100%", textAlign: "left" }}>
                  <DividerIcon>
                    <TerminalIcon sx={{ fontSize: "30px" }} />
                  </DividerIcon>
                  <Typography mt={2} variant="h3" sx={{ fontSize: "24px", textAlign: "left" }}>
                    Real-time Logs and Metrics
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: "18px", textAlign: "left" }} mt={1}>
                    Seamlessly debug containers with access to GPU, CPU, Memory, and other metrics.
                    You can monitor logs in real-time.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={1}></Grid>

              <Grid item xs={11} md={5.5}>
                <Box mt={{ xs: 8, md: 0 }} width={{ xs: "100%", textAlign: "left" }}>
                  <DividerIcon>
                    <MoneyOffIcon sx={{ fontSize: "30px" }} />
                  </DividerIcon>
                  <Typography mt={2} variant="h3" sx={{ fontSize: "24px", textAlign: "left" }}>
                    Eliminate Idle GPU Costs
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: "18px", textAlign: "left" }} mt={1}>
                    Pay per second. You only pay when your endpoint receives and processes a
                    request.
                  </Typography>
                </Box>

                <Box mt={8} width={{ xs: "100%", textAlign: "left" }}>
                  <DividerIcon>
                    <AssuredWorkloadIcon sx={{ fontSize: "30px" }} />
                  </DividerIcon>
                  <Typography mt={2} variant="h3" sx={{ fontSize: "24px", textAlign: "left" }}>
                    Secure and Compliant
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: "18px", textAlign: "left" }} mt={1}>
                    Serverless is built on enterprise-grade GPUs with world-class compliance and
                    security standards.
                  </Typography>
                </Box>

                <Box mt={8} width={{ xs: "100%", textAlign: "left" }}>
                  <DividerIcon>
                    <ElectricBoltIcon sx={{ fontSize: "30px" }} />
                  </DividerIcon>
                  <Typography variant="h3" sx={{ fontSize: "24px", textAlign: "left" }}>
                    Lightning Fast Cold-Start
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: "18px", textAlign: "left" }} mt={1}>
                    With Flashboot, watch your cold-starts drop to sub 500 milliseconds.
                  </Typography>
                  <Box mt={5} sx={{ textAlign: "left" }}>
                    <FlashBoot data={data} />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Box>
    </Stack>
  )
}

export default Production
