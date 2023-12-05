import {
  alpha,
  Box,
  Divider,
  Grid,
  LinearProgress,
  linearProgressClasses,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material"
import { useInterval } from "@hooks/useInterval"
import { useState } from "react"
import { RunPodIcon } from "@components/Layout/Logo"
import AlarmOnIcon from "@mui/icons-material/AlarmOn"
import AnalyticsIcon from "@mui/icons-material/Analytics"
import ComposedChart from "./ComposedChart"
import FolderIcon from "@mui/icons-material/Source"
import FolderIconEmpty from "@mui/icons-material/Folder"
import InboxIcon from "@mui/icons-material/Inbox"
import LineChart from "./LineChart"
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch"
import { useInView } from "react-intersection-observer"

const requests = [20, 64, 256, 150, 100, 80]

const Autoscale = () => {
  const theme = useTheme()
  const { ref: requestsRef, inView: requestsInView } = useInView({
    threshold: 1,
    fallbackInView: true,
  })
  const { ref: workersRef, inView: workersInView } = useInView({
    threshold: 1,
    fallbackInView: true,
  })

  const [requestMetrics] = useState(
    requests.map((v, i) => ({
      requests: v,
      ts: new Date(`2023-09-08 14:${i}:00`).getTime(),
    }))
  )
  const [workerMetrics] = useState(
    requests.map((v, i) => ({
      value: `${Math.ceil(v / 2)}`,
      workers: Math.ceil(v / 2),
      ts: new Date(`2023-09-08 14:${i}:00`).getTime(),
    }))
  )
  const [cpu, setCpu] = useState(0)
  const [gpu, setGpu] = useState(0)
  const [gpuMem, setGpuMem] = useState(0)

  useInterval(() => {
    setCpu(Math.floor(Math.random() * 10 + 10))
    setGpu(Math.floor(Math.random() * 20 + 60))
    setGpuMem(Math.floor(Math.random() * 10 + 85))
  }, 1500)

  return (
    <Stack alignItems="center" justifyContent="center" mx={3} my={25}>
      <Grid alignItems="stretch" container justifyContent="start" maxWidth="md">
        <Grid item xs={12} sm={5.5} textAlign="center">
          <Typography
            sx={{
              alignItems: "center",
              display: "flex",
              fontSize: 24,
              justifyContent: "center",
              mb: 2.5,
            }}
            variant="h3"
          >
            Autoscale <RocketLaunchIcon sx={{ fontSize: 28, ml: 1 }} />
          </Typography>

          <Typography align={"left"} sx={{ fontSize: 16 }}>
            Workers scale from 0 to n on our <b>Secure Cloud</b> with 8+ regions distributed
            globally.
          </Typography>
        </Grid>

        <Grid display={{ xs: "none", sm: "inherit" }} item mt={10} textAlign="center" xs={0} sm={1}>
          <Divider orientation="vertical" sx={{ height: "100%", mx: "auto" }} />
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          item
          justifyContent="center"
          mt={{ xs: 5, sm: 0 }}
          sm={5.5}
          xs={12}
        >
          <Box height={130} ref={requestsRef}>
            <LineChart
              colors={["#824edc"]}
              data={requestMetrics}
              hidden={!requestsInView}
              lines={["requests"]}
              linesAlias={{ requests: "Requests" }}
              syncId="scale"
            />
          </Box>
          <Typography align="center" variant="body1">
            Requests
          </Typography>
        </Grid>

        <Grid item mt={{ xs: 20, sm: 10 }} xs={12} sm={5.5} textAlign="center">
          <Typography
            sx={{
              alignItems: "center",
              display: "flex",
              fontSize: 24,
              justifyContent: "center",
              mb: 2.5,
            }}
            variant="h3"
          >
            Bring Your Container <InboxIcon sx={{ fontSize: 28, ml: 1 }} />
          </Typography>

          <Typography align={"left"} sx={{ fontSize: 16 }}>
            Deploy any container, public and private image repositories are supported. Configure
            your environment the way you want.
          </Typography>
        </Grid>

        <Grid display={{ xs: "none", sm: "inherit" }} item mt={10} textAlign="center" xs={0} sm={1}>
          <Divider orientation="vertical" sx={{ height: "100%", mx: "auto" }} />
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          justifyContent="center"
          item
          mt={{ xs: 5, sm: 10 }}
          xs={12}
          sm={5.5}
        >
          <Box height={130} ref={workersRef}>
            <ComposedChart
              colors={["#824edc"]}
              data={workerMetrics}
              bars={["workers"]}
              barsAlias={{ workers: "Workers" }}
              hidden={!workersInView}
              labelDataKey="value"
              maxBarSize={30}
              syncId="scale"
            />
          </Box>
          <Typography align="center" variant="body1">
            Workers
          </Typography>
        </Grid>

        <Grid item xs={12} sm={5.5} textAlign="center" mt={{ xs: 20, sm: 10 }}>
          <Typography
            sx={{
              alignItems: "center",
              display: "flex",
              fontSize: 24,
              justifyContent: "center",
              mb: 2.5,
            }}
            variant="h3"
          >
            Cold-Start
            <Typography
              display={{ xs: "inherit", sm: "none" }}
              sx={{ color: "white", fontSize: 24, ml: 1 }}
              variant="h3"
            >
              &lt; 500ms
            </Typography>
            <AlarmOnIcon sx={{ fontSize: 28, ml: 1 }} />
          </Typography>

          <Typography align={"left"} sx={{ fontSize: 16 }}>
            With FlashBoot, we are able to reduce P70 (70% of cold-starts) to less than 500ms and
            P90 (90% of cold-starts) of all serverless endpoints including LLMs to less than a
            second.
          </Typography>
          <Typography align={"left"} mt={2.5} variant="subtitle1">
            <i>
              FlashBoot is our optimization layer to manage deployment, tear-down, and scaleup
              activities in real-time.
            </i>
          </Typography>
        </Grid>

        <Grid display={{ xs: "none", sm: "inherit" }} item mt={10} textAlign="center" xs={0} sm={1}>
          <Divider orientation="vertical" sx={{ height: "100%", mx: "auto" }} />
        </Grid>
        <Grid
          alignItems="center"
          display={{ xs: "none", sm: "flex" }}
          flexDirection="row"
          justifyContent="center"
          item
          mt={{ xs: 0, sm: 10 }}
          xs={12}
          sm={5.5}
        >
          <Typography
            sx={{
              alignItems: "center",
              color: "#824edc",
              fontSize: 28,
              justifyContent: "center",
            }}
          >
            P70 &lt; 500ms{" "}
          </Typography>
          <Typography fontSize={40} ml={1}>
            &#128525;
          </Typography>
        </Grid>

        <Grid item mt={{ xs: 20, sm: 10 }} xs={12} sm={5.5} textAlign="center">
          <Typography
            sx={{
              alignItems: "center",
              display: "flex",
              fontSize: 24,
              justifyContent: "center",
              mb: 2.5,
            }}
            variant="h3"
          >
            Metrics <AnalyticsIcon sx={{ fontSize: 30, ml: 1 }} />
          </Typography>

          <Typography align={"left"} sx={{ fontSize: 16 }}>
            Seamlessly debug containers with access to GPU, CPU, Memory, and other metrics.
          </Typography>
        </Grid>

        <Grid display={{ xs: "none", sm: "inherit" }} item mt={10} textAlign="center" xs={0} sm={1}>
          <Divider orientation="vertical" sx={{ height: "100%", mx: "auto" }} />
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          item
          justifyContent="center"
          mt={{ xs: 5, sm: 10 }}
          sm={5.5}
          xs={12}
        >
          <Grid container>
            <Grid item xs={12}>
              <Typography align="center" mb={1}>
                Worker Utilization
              </Typography>
              <LinearProgressWithLabel label="CPU" labelWidth={70} value={cpu} valueWidth={35} />
              <LinearProgressWithLabel label="Mem" labelWidth={70} value={30} valueWidth={35} />
              <LinearProgressWithLabel
                label="GPU Util"
                labelWidth={70}
                value={gpu}
                valueWidth={35}
              />
              <LinearProgressWithLabel
                label="GPU Mem"
                labelWidth={70}
                value={gpuMem}
                valueWidth={35}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item mt={{ xs: 20, sm: 10 }} xs={12} sm={5.5} textAlign="center">
          <Typography
            sx={{
              alignItems: "center",
              display: "flex",
              fontSize: 24,
              justifyContent: "center",
              mb: 2.5,
            }}
            variant="h3"
          >
            Network Storage <FolderIcon sx={{ fontSize: 30, ml: 1 }} />
          </Typography>

          <Typography align={"left"} sx={{ fontSize: 16 }}>
            Serverless workers can access network storage volume backed by NVMe SSD with up to
            100Gbps network throughput. 100TB+ storage size is supported, contact us if you need
            1PB+.
          </Typography>

          <Typography align={"left"} mt={2.5} variant="subtitle1">
            <i>
              Ever wondered how you can store 1000s of fine-tuned models and access them on the fly?
              Now it&apos;s easy!
            </i>
          </Typography>
        </Grid>

        <Grid display={{ xs: "none", sm: "inherit" }} item mt={10} textAlign="center" xs={0} sm={1}>
          <Divider orientation="vertical" sx={{ height: "100%", mx: "auto" }} />
        </Grid>
        <Grid
          alignItems="center"
          display="flex"
          flexDirection="row"
          item
          justifyContent="center"
          mt={{ xs: 5, sm: 10 }}
          sm={5.5}
          xs={12}
        >
          <Stack spacing={2}>
            <Stack alignItems="center" direction="row" justifyContent="center" position="relative">
              <RunPodIcon
                style={{
                  border: "1px solid #824edc",
                  borderRadius: 100,
                  height: "36px",
                  width: "36px",
                }}
                color="primary"
              />
              <Divider sx={{ backgroundColor: "#824edc", width: 20 }} />
            </Stack>
            <Stack alignItems="center" direction="row" justifyContent="center" position="relative">
              <RunPodIcon
                style={{
                  border: "1px solid #824edc",
                  borderRadius: 100,
                  height: "36px",
                  width: "36px",
                }}
                color="primary"
              />
              <Divider sx={{ backgroundColor: "#824edc", width: 20 }} />
            </Stack>
          </Stack>
          <Box position="relative">
            <FolderIconEmpty
              sx={{
                color: theme.palette.primary.main,
                fontSize: 200,
                ml: -2,
                mr: -2,
              }}
            />
            <Typography color="white" left={25} lineHeight={2} position="absolute" top={60}>
              <i>
                /runpod-volume
                <Typography lineHeight={1.5}>
                  -- /data
                  <br />
                  -- /models
                  <br />
                  -- /output
                </Typography>
              </i>
            </Typography>
          </Box>
          <Stack spacing={2}>
            <Stack
              alignItems="center"
              direction="row-reverse"
              justifyContent="center"
              position="relative"
            >
              <RunPodIcon
                style={{
                  border: "1px solid #824edc",
                  borderRadius: 100,
                  height: "36px",
                  width: "36px",
                }}
                color="primary"
              />
              <Divider sx={{ backgroundColor: "#824edc", width: 20 }} />
            </Stack>
            <Stack
              alignItems="center"
              direction="row-reverse"
              justifyContent="center"
              position="relative"
            >
              <RunPodIcon
                style={{
                  border: "1px solid #824edc",
                  borderRadius: 100,
                  height: "36px",
                  width: "36px",
                }}
                color="primary"
              />
              <Divider sx={{ backgroundColor: "#824edc", width: 20 }} />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  )
}

const LinearProgressWrapper = styled(LinearProgress)(
  ({ theme }) => `
        height: 10px;
        border-radius: ${theme.general.borderRadiusSm};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.primary.main, 0.1)};
            box-shadow: inset 0 1px 2px ${alpha(theme.colors.primary.dark, 0.2)};
        }
        
        & .${linearProgressClasses.bar} {
            background: ${theme.colors.gradients.purple1};
            border-radius: ${theme.general.borderRadiusSm};
            opacity: .8;
        }
    `
)

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography width={props.labelWidth} fontSize={13}>
        {props.label}
      </Typography>
      <Box flexGrow={1} mx={1}>
        <LinearProgressWrapper variant="determinate" value={props.value ?? 0} />
      </Box>
      <Box>
        <Typography fontSize={12} width={props.valueWidth} variant="body2">{`${
          props.value >= 0 ? Math.round(props.value) : "-"
        }%`}</Typography>
      </Box>
    </Box>
  )
}

export default Autoscale
