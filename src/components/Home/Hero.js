import { Box, Button, Stack, Typography } from "@mui/material"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import TrustedBy from "./TrustedBy"

const pulseColor = "#824edc"

import { useEffect, useRef } from "react"

import anime from "animejs"

function AnimatedSvg(props) {
  const pathRef1 = useRef(null)
  const pathRef2 = useRef(null)

  useEffect(() => {
    const path1Length = pathRef1.current.getTotalLength()
    const path2Length = pathRef2.current.getTotalLength()

    pathRef1.current.style.strokeDasharray = String(path1Length)
    pathRef1.current.style.strokeDashoffset = String(path1Length)

    pathRef2.current.style.strokeDasharray = String(path2Length)
    pathRef2.current.style.strokeDashoffset = String(path2Length)

    // Show the SVG when the JavaScript starts executing
    pathRef1.current.style.visibility = "visible"
    pathRef2.current.style.visibility = "visible"

    anime({
      targets: [pathRef1.current, pathRef2.current],
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 4000,
      delay: (el, i) => i * 250,
      begin: function (anim) {
        for (let target of anim.animatables) {
          target.target.setAttribute("stroke-dashoffset", anime.setDashoffset(target.target))
        }
      },
    })
  }, [])

  return (
    <Box
      sx={{
        "display": { md: "block", xs: "block" },
        "justifyContent": "center",
        "alignItems": "center",
        "filter": "drop-shadow(0 0 10px #824edc)",
        "svg": {
          transformOrigin: "center",
        },
        "@media (max-height: 680px)": {
          display: "none",
        },
      }}
      {...props}
    >
      <svg viewBox="0 0 2000 2000" xmlns="http://www.w3.org/2000/svg">
        <g>
          <g>
            <path
              style={{ fill: "none", stroke: "#824edc", strokeWidth: 10, visibility: "hidden" }}
              ref={pathRef1}
              d="M1017.95,711.04c-4.22,2.36-9.18,3.01-13.86,1.82L386.17,555.3c-41.72-10.76-86.02-0.63-116.6,29.73
            l-1.4,1.39c-35.92,35.65-27.55,95.8,16.74,120.3l584.32,324.23c31.36,17.4,50.82,50.45,50.82,86.32v806.76
            c0,35.49-38.41,57.67-69.15,39.94l-703.15-405.64c-23.6-13.61-38.13-38.78-38.13-66.02V666.63c0-87.24,46.45-167.89,121.92-211.66
            L933.85,42.15c23.48-13.8,51.47-17.7,77.83-10.84l745.71,194.1c31.53,8.21,36.99,50.65,8.56,66.57L1017.95,711.04z"
            />
            <path
              style={{ fill: "none", stroke: "#824edc", strokeWidth: 10, visibility: "hidden" }}
              ref={pathRef2}
              d="M1527.75,536.38l128.89-79.63l189.92,109.17c27.24,15.66,43.97,44.73,43.82,76.15l-4,857.6
            c-0.11,24.39-13.15,46.89-34.25,59.11l-701.75,406.61c-32.3,18.71-72.74-4.59-72.74-41.92v-797.43
            c0-38.98,21.06-74.91,55.07-93.96l590.17-330.53c18.23-10.21,18.65-36.3,0.75-47.09L1527.75,536.38z"
            />
            <path
              style={{ fill: "none", stroke: "#824edc", strokeWidth: 10, visibility: "hidden" }}
              d="M1524.01,665.91"
            />
          </g>
        </g>
      </svg>
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
          px: { xs: 2, sm: 3, lg: 0 },
          py: { xs: 0, md: 0 },
        }}
        spacing={{ xs: 0, md: 0 }}
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
              fontSize={{ xs: 44, sm: 50, md: 60, xl: 65 }}
              textAlign={{ xs: "center", md: "left" }}
              variant="h1"
            >
              The Cloud Built for AI
            </Typography>

            <Typography
              fontSize={{ xs: 18, sm: 20 }}
              fontWeight={400}
              lineHeight={{ xs: 1.5, md: 1.8 }}
              textAlign={{ xs: "center", sm: "left" }}
              variant="h2"
            >
              Globally distributed GPU cloud built for production.
              <Typography display={{ xs: "none", md: "block" }} fontSize={{ xs: 18, sm: 20 }}>
                <strong>Develop</strong>, <strong>train</strong>, and <strong>scale</strong> AI
                applications.
              </Typography>
            </Typography>

            <Stack direction="row" justifyContent={{ xs: "center", md: "start" }}>
              <Button
                href={"/console/deploy"}
                variant="outlined"
                size="large"
                sx={{ borderColor: pulseColor, color: "white" }}
                endIcon={<KeyboardArrowRightIcon />}
              >
                Start Building
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <AnimatedSvg
            ml={{ xs: 0, md: 8 }}
            pt={{ xs: 2, md: 0 }}
            pb={{ xs: 3, md: 0 }}
            width={{ xs: 150, md: 256 }}
          />
        </Stack>
      </Stack>

      <TrustedBy />
    </Stack>
  )
}
