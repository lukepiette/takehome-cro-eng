import { useState, React } from "react"
import { useInterval } from "@hooks/useInterval"
import {
  Typography,
  Button,
  Stack,
  Grid,
  Link,
  Box,
  useTheme,
  Paper,
  styled,
  LinearProgress,
  linearProgressClasses,
  alpha,
} from "@mui/material"
import GpuPricingCompact from "./GpuPricingCompact"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"

const DeployProgress = ({ disabled }) => {
  const maxMib = 2000
  const [mib, setMib] = useState(0)
  let percent = Math.round((mib / maxMib) * 100)
  percent = percent > 100 ? 100 : percent
  const mibTotal = mib > 2000 ? 2000 : mib

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
        {[`${percent}%`, `${mibTotal / 1000} GiB / 2 GiB`, "500 MiB/s"].map((v, i) => (
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

const DividerLine = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    {/* Top solid line */}
    <Box
      sx={{
        height: "90px", // Adjust as needed
        width: "0.5px",
        background: "linear-gradient(transparent, transparent)",
      }}
    />
    {/* Top circle */}
    <Box
      sx={{
        width: "10px", // Adjust as needed
        height: "10px",
        borderRadius: "50%",
        border: "1px solid #ffffff",
        margin: "10px 0", // Add some space between circle and line
      }}
    />
    {/* Middle dashed line */}
    <Box
      sx={{
        height: "230px",
        width: "0.5px",
        background: "linear-gradient(#824edc, #824edc)",
      }}
    />
    {/* Bottom circle */}
    <Box
      sx={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid #ffffff",
        margin: "10px 0",
      }}
    />
    {/* Bottom solid line */}
    <Box
      sx={{
        height: "365px",
        width: "0.5px",
        background: "linear-gradient(#824edc, #824edc)",
      }}
    />
    <Box
      sx={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid #ffffff",
        margin: "10px 0",
      }}
    />
    <Box
      sx={{
        height: "150px", // Adjust as needed
        width: "0.5px",
        background: "linear-gradient(#824edc, #824edc)",
      }}
    />
  </Box>
)

const Train = () => {
  const theme = useTheme()

  const [cpu, setCpu] = useState(0)
  const [gpu, setGpu] = useState(0)
  const [gpuMem, setGpuMem] = useState(0)

  useInterval(() => {
    setCpu(Math.floor(Math.random() * 10 + 10))
    setGpu(Math.floor(Math.random() * 20 + 60))
    setGpuMem(Math.floor(Math.random() * 10 + 85))
  }, 1500)

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Box
        sx={{
          width: "1px",
          height: "100px",
          background: "linear-gradient(transparent, #824edc)",
        }}
      />

      <Box
        sx={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: theme.colors.gradients.purple1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Content inside the circle, if any */}
        <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: "16px" }}>
          2
        </Typography>
      </Box>

      <Typography
        sx={{
          fontSize: 30,
          lineHeight: 1.3,
          backgroundClip: "text",
          backgroundImage: theme.colors.gradients.purple1,
          color: "transparent",
          marginTop: 2,
        }}
        variant="h3"
      >
        Train
      </Typography>

      <Typography variant="h2" gutterBottom my={4} sx={{ fontWeight: "bold", fontSize: "44px" }}>
        Train, fine-tune, and benchmark your models
      </Typography>

      <Typography width={{ xs: "80%", md: "45%" }} variant="body1" sx={{ fontSize: "22px" }}>
        Run any training workload seamlessly, so you can focus less on ML ops and more on building
        your application.
      </Typography>

      <Grid container mt={2}>
        {/* Left Content */}
        <Grid mt={5} item xs={5.5} style={{ padding: "20px" }}></Grid>

        {/* Vertical Divider Line */}
        <Grid item xs={1}>
          <DividerLine />
        </Grid>

        {/* Right Content Blocks */}
        <Grid item xs={5} style={{ padding: "20px" }}>
          <Typography
            mt={8}
            width={{ xs: "80%", md: "70%" }}
            variant="body1"
            sx={{ fontSize: "24px", textAlign: "left", fontWeight: "bold" }}
          >
            Fine-tune LLMs in 3 clicks
          </Typography>
          <Typography
            width={{ xs: "80%", md: "70%" }}
            variant="body1"
            sx={{ fontSize: "18px", textAlign: "left" }}
            mt={1}
          >
            Link your hugging face model repository and start fine-tuning in seconds.
          </Typography>

          <Typography
            mt={8}
            width={{ xs: "80%", md: "75%" }}
            variant="body1"
            sx={{ fontSize: "24px", textAlign: "left", fontWeight: "bold" }}
          >
            Run benchmarks with one API call
          </Typography>
          <Typography
            width={{ xs: "80%", md: "70%" }}
            variant="body1"
            sx={{ fontSize: "18px", textAlign: "left" }}
            mt={1}
          >
            Streamline your model eval process with our benchmark endpoints ready out-of-the-box.
          </Typography>

          <Typography
            mt={8}
            width={{ xs: "80%", md: "70%" }}
            variant="body1"
            sx={{ fontSize: "24px", textAlign: "left", fontWeight: "bold" }}
          >
            Limitless storage for datasets and checkpoints
          </Typography>
          <Typography
            mb={4}
            width={{ xs: "80%", md: "70%" }}
            variant="body1"
            sx={{ fontSize: "18px", textAlign: "left" }}
            mt={1}
          >
            Store expansive datasets and model checkpoints with ease, thanks to our scalable and
            globally interoperable network storage.
          </Typography>
          <Typography
            mt={8}
            width={{ xs: "80%", md: "70%" }}
            variant="body1"
            sx={{ fontSize: "24px", textAlign: "left", fontWeight: "bold" }}
          >
            Deploy multi-node clusters
          </Typography>
          <Typography
            width={{ xs: "80%", md: "70%" }}
            variant="body1"
            sx={{ fontSize: "18px", textAlign: "left" }}
            mt={1}
          >
            Reserve multi-node clusters for larger-scale training workloads. Contact us to learn
            more.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Train
