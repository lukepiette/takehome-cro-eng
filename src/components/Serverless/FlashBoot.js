import { Divider, Stack, Typography } from "@mui/material"
import FlashOnIcon from "@mui/icons-material/FlashOn"

const FlashBoot = ({ data }) => {
  const sdColdstart90 =
    data?.sd?.data?.length > 0 && data?.sd?.data[0].p90 > 0 ? parseInt(data?.sd?.data[0].p90) : 3000
  const sdColdstart70 =
    data?.sd?.data?.length > 0 && data?.sd?.data[0].p70 > 0 ? parseInt(data?.sd?.data[0].p70) : 3000
  const whisperColdstart90 =
    data?.whisper?.data?.length > 0 && data?.whisper?.data[0].p90 > 0
      ? parseInt(data?.whisper?.data[0].p90)
      : 3000
  const whisperColdstart70 =
    data?.whisper?.data?.length > 0 && data?.whisper?.data[0].p70 > 0
      ? parseInt(data?.whisper?.data[0].p70)
      : 3000

  return (
    <Stack alignItems={"center"} direction="row" spacing={{ xs: 3, sm: 5, md: 4 }}>
      <Stack spacing={0.3}>
        <Typography
          color="white"
          sx={{
            alignItems: "center",
            display: "flex",
            fontSize: 20,
            justifyContent: "center",
          }}
        >
          <FlashOnIcon sx={{ fontSize: 22 }} />
          FlashBoot
        </Typography>
        <Divider sx={{ backgroundColor: "#824edc" }} />
        <Typography color="white" fontSize={16} pl={1} pt={1}>
          P70 Cold-Start
        </Typography>
        <Typography fontSize={16} pl={1}>
          P90
        </Typography>
      </Stack>

      <Stack spacing={0.3}>
        <Typography align="center" sx={{ fontSize: 20 }}>
          StableDiffusion
        </Typography>
        <Divider sx={{ backgroundColor: "#824edc" }} />
        <Typography color="white" fontSize={16} pt={1}>
          {sdColdstart70.toLocaleString()}ms
        </Typography>
        <Typography fontSize={16}>{sdColdstart90.toLocaleString()}ms</Typography>
      </Stack>

      <Stack spacing={0.3} display={{ xs: "none", md: "flex" }}>
        <Typography align="center" sx={{ fontSize: 20 }}>
          Whisper
        </Typography>
        <Divider sx={{ backgroundColor: "#824edc" }} />
        <Typography color="white" fontSize={16} pt={1}>
          {whisperColdstart70.toLocaleString()}ms
        </Typography>
        <Typography fontSize={16}>{whisperColdstart90.toLocaleString()}ms</Typography>
      </Stack>
    </Stack>
  )
}

export default FlashBoot
