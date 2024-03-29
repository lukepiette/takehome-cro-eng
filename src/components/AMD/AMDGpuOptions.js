import {
  Box,
  Stack,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material"
import { a, useScroll } from "@react-spring/web"
import { useState } from "react"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"

const pulseColor = "#824edc"

const MI300X = () => {
  const [yprogress, setYProgress] = useState(0)
  useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      setYProgress(parseInt(scrollYProgress * 1000))
    },
  })
  const rotateYDelta = parseInt(yprogress > 0 ? yprogress / 3 : yprogress)
  const rotateY = rotateYDelta > 100 ? 100 : rotateYDelta

  return (
    <Stack
      alignItems="center"
      direction={{ xs: "column-reverse", md: "row-reverse" }}
      justifyContent={"center"}
      my={12}
      spacing={4}
      width="100%"
    >
      <Stack p={2}>
        <Typography sx={{ fontSize: { xs: 40, sm: 50, md: 60 } }}>
          AMD Instinct&trade; MI300X
        </Typography>

        <Stack direction="row" spacing={{ xs: 0, sm: 8, md: 12, lg: 20 }}>
          <Stack direction="column" justifyContent={{ xs: "center", md: "start" }}>
            <Typography fontSize={18} mt={3}>
              1-month to 3-year reservations available.
            </Typography>
            <Typography fontSize={15} variant="subtitle1">
              Schedule a time with our team to learn more.
            </Typography>

            <Typography fontSize={18} mt={2}>
              On-Demand options coming soon.
            </Typography>
            <Typography fontSize={15} variant="subtitle1">
              Arriving as early as April 2024.
            </Typography>

            <Button
              href={"https://meetings.runpod.io/meetings/runpod/amd-mi300x-interest"}
              variant="outlined"
              size="large"
              sx={{ borderColor: pulseColor, color: "white", mt: 3, width: 175 }}
              endIcon={<KeyboardArrowRightIcon />}
            >
              Reserve Now
            </Button>

            <Stack
              alignItems="center"
              direction={{ xs: "column", md: "row" }}
              justifyContent="center"
              position="relative"
              spacing={2}
              sx={{
                background: "rgba(0, 0, 0, 0.05)",
                mt: 5,
                py: 2,
              }}
              width="100%"
            >
              <Box
                sx={{
                  backgroundImage: "url(/static/images/bg.webp)",
                  backgroundRepeat: "no-repeat",
                  filter: "blur(60px)",
                  height: 1000,
                  left: -150,
                  opacity: 0.5,
                  overflowX: "hidden !important",
                  position: "absolute",
                  top: -300,
                  transform: "rotate(130deg)",
                  width: 900,
                  zIndex: -1,
                }}
              />

              <TableContainer
                component={Paper}
                sx={{ maxWidth: 600, marginLeft: "0 !important", p: 2 }}
              >
                <Table size="small">
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row" sx={{ pl: { xs: 1, sm: 3 } }} />
                      <TableCell
                        align="right"
                        component="th"
                        scope="row"
                        sx={{ pl: { xs: 1, sm: 3 } }}
                      >
                        <Typography variant="h4">MI300X</Typography>
                      </TableCell>
                      <TableCell
                        align="right"
                        component="th"
                        scope="row"
                        sx={{ pl: { xs: 1, sm: 3 } }}
                      >
                        <Typography variant="h4">H100 SXM</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography display="flex" fontSize={14}>
                          VRAM
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>192 GB</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>80 GB</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography display="flex" fontSize={14}>
                          Memory Bandwidth
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>5.3 TB/s</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>3.4 TB/s</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography display="flex" fontSize={14}>
                          FP64
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>81.7 TFLOPs</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>67 TFLOPs</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography display="flex" fontSize={14}>
                          FP32
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>163.4 TFLOPs</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>67 TFLOPs</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography display="flex" fontSize={14}>
                          FP16
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>2,610 TFLOPs</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>1,979 TFLOPs</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography display="flex" fontSize={14}>
                          FP8
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>5,220 TFLOPs</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>3,958 TFLOPs</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography fontSize={14}>
                          Interconnect
                          <Typography fontSize={11}>GPU to GPU</Typography>
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>PCIe 128 GB/s</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>
                          NVLink 900 GB/s
                          <br />
                          PCIe 128 GB/s
                        </Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography display="flex" fontSize={14}>
                          Network
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>3.2 Tb/s</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>-</Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Stack>
          </Stack>

          <Box
            sx={{
              "display": { md: "block", xs: "block" },
              "justifyContent": "center",
              "alignItems": "center",
              "filter": "drop-shadow(0 0 400px #824edc)",
              "svg": { transformOrigin: "center" },
              "@media (max-height: 680px)": {
                display: "none",
              },
              "width": { xs: 200, md: 400 },
            }}
          >
            <img
              alt="AMD Instinct MI300X GPU"
              src="/static/images/AMD-Instinct-MI300X-GPU.png"
              style={{
                borderRadius: 0,
                maxWidth: "100%",
              }}
            />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  )
}

const MI250 = () => (
  <Stack
    alignItems="center"
    direction={{ xs: "column-reverse", md: "row-reverse" }}
    justifyContent={"center"}
    my={12}
    spacing={4}
    width="100%"
  >
    <Stack p={2}>
      <Typography sx={{ fontSize: { xs: 40, sm: 50, md: 60 } }}>
        AMD Instinct&trade; MI250
      </Typography>

      <Stack direction="row" spacing={{ xs: 0, sm: 8, md: 12, lg: 20 }}>
        <Stack direction="column" justifyContent={{ xs: "center", md: "start" }}>
          <Typography fontSize={18} mt={3}>
            1-month to 3-year reservations available.
          </Typography>
          <Typography fontSize={15} variant="subtitle1">
            Schedule a time with our team to learn more.
          </Typography>

          <Typography fontSize={18} mt={2}>
            On-Demand options coming soon.
          </Typography>
          <Typography fontSize={15} variant="subtitle1">
            Arriving as early as April 2024.
          </Typography>

          <Button
            href={"https://meetings.runpod.io/meetings/runpod/amd-mi250-interest"}
            variant="outlined"
            size="large"
            sx={{ borderColor: pulseColor, color: "white", mt: 3, width: 175 }}
            endIcon={<KeyboardArrowRightIcon />}
          >
            Reserve Now
          </Button>

          <Stack
            alignItems="center"
            direction={{ xs: "column", md: "row" }}
            justifyContent="center"
            position="relative"
            spacing={2}
            sx={{
              background: "rgba(0, 0, 0, 0.05)",
              mt: 5,
              py: 2,
            }}
            width="100%"
          >
            <Box
              sx={{
                backgroundImage: "url(/static/images/bg.webp)",
                backgroundRepeat: "no-repeat",
                filter: "blur(60px)",
                height: 1000,
                left: -150,
                opacity: 0.5,
                overflowX: "hidden !important",
                position: "absolute",
                top: -300,
                transform: "rotate(130deg)",
                width: 900,
                zIndex: -1,
              }}
            />

            <TableContainer
              component={Paper}
              sx={{ maxWidth: 600, marginLeft: "0 !important", p: 2 }}
            >
              <Table size="small">
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row" sx={{ pl: { xs: 1, sm: 3 } }} />
                    <TableCell
                      align="right"
                      component="th"
                      scope="row"
                      sx={{ pl: { xs: 1, sm: 3 } }}
                    >
                      <Typography variant="h4">MI250</Typography>
                    </TableCell>
                    <TableCell
                      align="right"
                      component="th"
                      scope="row"
                      sx={{ pl: { xs: 1, sm: 3 } }}
                    >
                      <Typography variant="h4">A100 SXM</Typography>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Typography display="flex" fontSize={14}>
                        VRAM
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontSize={14}>128 GB</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontSize={14}>80 GB</Typography>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Typography display="flex" fontSize={14}>
                        Memory Bandwidth
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontSize={14}>3.2 TB/s</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontSize={14}>2 TB/s</Typography>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Typography display="flex" fontSize={14}>
                        FP64 / FP32
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontSize={14}>45.3 TFLOPs</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontSize={14}>19.5 TFLOPS</Typography>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Typography display="flex" fontSize={14}>
                        FP16
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontSize={14}>362 TFLOPs</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontSize={14}>312 TFLOPs</Typography>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Typography fontSize={14}>
                        Interconnect
                        <Typography fontSize={11}>GPU to GPU</Typography>
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontSize={14}>PCIe 100 GB/s</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontSize={14}>
                        NVLink 600 GB/s
                        <br />
                        PCIe 64 GB/s
                      </Typography>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell component="th" scope="row" sx={{ border: 0 }}>
                      <Typography display="flex" fontSize={14}>
                        Network
                      </Typography>
                    </TableCell>
                    <TableCell align="right" sx={{ border: 0 }}>
                      <Typography fontSize={14}>1.6 Tb/s</Typography>
                    </TableCell>
                    <TableCell align="right" sx={{ border: 0 }}>
                      <Typography fontSize={14}>-</Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        </Stack>

        <Box
          sx={{
            "display": { md: "block", xs: "block" },
            "justifyContent": "center",
            "alignItems": "center",
            "filter": "drop-shadow(0 0 400px #824edc)",
            "svg": { transformOrigin: "center" },
            "@media (max-height: 680px)": {
              display: "none",
            },
            "width": { xs: 200, md: 400 },
          }}
        >
          <img
            alt="AMD Instinct MI250 GPU"
            src="/static/images/AMD-Instinct-MI250.png"
            style={{
              borderRadius: 0,
              maxWidth: "100%",
            }}
          />
        </Box>
      </Stack>
    </Stack>
  </Stack>
)

export default function AMDGpuOptions() {
  return (
    <>
      <MI300X />
      <MI250 />
    </>
  )
}
