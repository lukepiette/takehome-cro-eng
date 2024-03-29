import { Box, LinearProgress, Paper, Stack, Typography, useTheme } from "@mui/material"
import { useInterval } from "@hooks/useInterval"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import Image from "next/legacy/image"

const CloudSync = () => {
  const theme = useTheme()
  const { ref, inView } = useInView({ threshold: 0, fallbackInView: true })

  return (
    <Stack alignItems={"center"} my={18} ref={ref} spacing={5}>
      <Stack alignItems={"center"} maxWidth={"90%"} width={350} spacing={4}>
        <Typography
          sx={{
            fontSize: 40,
            mb: 0.5,
            backgroundClip: "text",
            backgroundImage: theme.colors.gradients.purple1,
            color: "transparent",
          }}
          variant="h3"
        >
          Cloud Sync
        </Typography>
        <Typography align={"center"} sx={{ fontSize: 16 }}>
          Seamlessly download or upload pod data to any cloud storage.
        </Typography>
      </Stack>
      <Progress disabled={!inView} />
      <Stack
        alignItems={"center"}
        direction={"row"}
        justifyContent={"space-between"}
        px={6}
        flexWrap={"wrap"}
      >
        {inView ? (
          <>
            <Box margin={2}>
              <Image src="/static/svg/awsLogo.svg" alt="aws logo" height={50} width={50} />
            </Box>
            <Box margin={2}>
              <Image src="/static/svg/azureLogo.svg" alt="azure logo" height={40} width={40} />
            </Box>
            <Box margin={2}>
              <Image
                src="/static/svg/backblazeLogo.svg"
                alt="backblaze logo"
                height={45}
                width={45}
              />
            </Box>
            <Box margin={2}>
              <Image src="/static/svg/dropboxLogo.svg" alt="dropbox logo" height={45} width={45} />
            </Box>
            <Box margin={2}>
              <Image
                src="/static/svg/gcpLogo.svg"
                alt="google cloud storage logo"
                height={50}
                width={50}
              />
            </Box>
            <Box margin={2}>
              <Image
                src="/static/svg/google-drive.svg"
                alt="google dive logo"
                height={40}
                width={40}
              />
            </Box>
          </>
        ) : (
          <>
            <Box height={50} width={50} margin={2} />
            <Box height={40} width={40} margin={2} />
            <Box height={50} width={50} margin={2} />
            <Box height={50} width={50} margin={2} />
            <Box height={50} width={50} margin={2} />
          </>
        )}
      </Stack>
    </Stack>
  )
}

const Progress = ({ disabled }) => {
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
    <Paper sx={{ px: 3, py: 2, maxWidth: "90%", width: 400 }} variant="outlined">
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

export default CloudSync
