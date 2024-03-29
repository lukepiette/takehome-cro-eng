import { a, useScroll } from "@react-spring/web"
import { Box, Button, Stack, Typography } from "@mui/material"
import { useState } from "react"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import TrustedBy from "./TrustedBy"

const pulseColor = "#824edc"

function AnimatedSvg(props) {
  const [yprogress, setYProgress] = useState(0)
  useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      setYProgress(parseInt(scrollYProgress * 1000))
    },
  })
  const rotateYDelta = parseInt(yprogress > 0 ? yprogress / 2 : yprogress)
  const rotateY = rotateYDelta > 50 ? 50 : rotateYDelta

  return (
    <Box
      sx={{
        "alignItems": "center",
        "filter": "drop-shadow(0 0 200px #824edc)",
        "justifyContent": "center",
        "perspective": "1000px",
        "@media (max-height: 620px)": {
          display: "none",
        },
      }}
      {...props}
    >
      <a.div
        style={{
          alignItems: "center",
          justifyContent: "center",
          transform: `rotateY(${rotateY}deg)`,
        }}
      >
        <img
          alt="runpod demo"
          src="/static/images/AMD-Instinct-MI300X.png"
          style={{
            borderRadius: 0,
            maxWidth: "100%",
          }}
        />
      </a.div>
    </Box>
  )
}

export default function Hero() {
  return (
    <Stack
      alignItems="center"
      justifyContent="space-evenly"
      sx={{
        width: "100%",
        position: "relative",
        height: "calc(100vh - 71px)",
      }}
    >
      <Stack
        alignItems="center"
        direction={{ xs: "column-reverse", md: "row" }}
        justifyContent="center"
        sx={{
          width: "100%",
          px: { xs: 0.5, sm: 3, lg: 0 },
          py: { xs: 0, md: 0 },
        }}
        spacing={{ xs: 0, sm: 3, md: 12, lg: 20 }}
      >
        <Stack
          direction="row"
          height="100%"
          alignItems="center"
          spacing={{ md: 8, lg: 15, xl: 24 }}
          sx={{ position: "relative" }}
        >
          <Stack spacing={{ xs: 3, md: 4 }}>
            <Typography
              fontSize={{ xs: 40, sm: 50, md: 60, xl: 65 }}
              textAlign={{ xs: "center", md: "left" }}
              variant="h1"
            >
              GPU Cloud
            </Typography>

            <Stack direction="row" justifyContent={{ xs: "center", md: "start" }} spacing={4}>
              <Stack>
                <Typography fontSize={{ xs: 18, sm: 20 }} mb={0.4} variant="h2">
                  AMD MI300X
                </Typography>
                <Typography fontSize={{ xs: 15, sm: 16 }}>192 GB</Typography>
                <Typography fontSize={{ xs: 15, sm: 16 }}>3.2 Tbps Network</Typography>
                <Button
                  href={"https://meetings.runpod.io/meetings/runpod/amd-mi300x-interest"}
                  variant="outlined"
                  size="large"
                  sx={{ borderColor: pulseColor, color: "white", mt: 2 }}
                  endIcon={<KeyboardArrowRightIcon />}
                >
                  Reserve
                  <Typography display={{ xs: "none", md: "inline-block" }}>&nbsp;MI300X</Typography>
                </Button>
              </Stack>
              <Stack>
                <Typography fontSize={{ xs: 18, sm: 20 }} mb={0.4} variant="h2">
                  AMD MI250
                </Typography>
                <Typography fontSize={{ xs: 15, sm: 16 }}>128 GB</Typography>
                <Typography fontSize={{ xs: 15, sm: 16 }}>1.6 Tbps Network</Typography>
                <Button
                  href={"https://meetings.runpod.io/meetings/runpod/amd-mi250-interest"}
                  variant="outlined"
                  size="large"
                  sx={{ borderColor: pulseColor, color: "white", mt: 2 }}
                  endIcon={<KeyboardArrowRightIcon />}
                >
                  Reserve
                  <Typography display={{ xs: "none", md: "inline-block" }}>&nbsp;MI250</Typography>
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <AnimatedSvg
            ml={{ xs: 0, md: 8 }}
            pb={{ xs: 3, md: 0 }}
            pt={{ xs: 2, md: 0 }}
            width={{ xs: 150, md: 256 }}
          />
        </Stack>
      </Stack>

      <TrustedBy />
    </Stack>
  )
}
