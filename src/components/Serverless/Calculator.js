import {
  Button,
  Divider,
  InputAdornment,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material"
import { useMemo, useState } from "react"

const gpuFlexPrice = { "16": 0.0002, "24": 0.00026, "24_PRO": 0.00044, "48": 0.00048, "80": 0.0013 }
const gpuReservedPrice = {
  "16": 0.00012,
  "24": 0.00016,
  "24_PRO": 0.00026,
  "48": 0.00029,
  "80": 0.00078,
}

const Calculator = () => {
  const [gpu, setGpu] = useState("24_PRO")
  const [requests, setRequests] = useState(1000)
  const [requestTime, setRequestTime] = useState(3)
  const onChangeGpu = (type) => () => setGpu(type)

  const price = useMemo(() => {
    const baseFlex = gpuFlexPrice[gpu] * requests * requestTime * 0.8
    const baseReserved = gpuReservedPrice[gpu] * requests * requestTime * 0.2
    const coldstart = gpuFlexPrice[gpu] * requests * 0.2 * 5
    const total = (baseFlex + baseReserved + coldstart) * 24 * 30
    return baseFlex <= 0 ? 0 : total
  }, [gpu, requests, requestTime])

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              colSpan={2}
              sx={{ textTransform: "none", verticalAlign: "top" }}
            >
              <Typography fontSize={16} fontWeight={600}>
                Serverless Pricing Calculator
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              <Stack spacing={{ xs: 1, sm: 2 }}>
                <Stack direction="row" justifyContent="space-evenly" spacing={0.5}>
                  <Button
                    onClick={onChangeGpu("16")}
                    sx={{
                      fontWeight: gpu === "16" ? 600 : 300,
                      flexGrow: 1,
                      minWidth: 0,
                      px: 0,
                      py: 1,
                    }}
                    variant={"text"}
                  >
                    16GB
                  </Button>
                  <Button
                    onClick={onChangeGpu("24")}
                    sx={{
                      fontWeight: gpu === "24" ? 600 : 300,
                      flexGrow: 1,
                      minWidth: 0,
                      px: 0,
                      py: 1,
                    }}
                    variant={"text"}
                  >
                    24GB
                  </Button>
                  <Button
                    onClick={onChangeGpu("24_PRO")}
                    sx={{
                      fontWeight: gpu === "24_PRO" ? 600 : 300,
                      flexGrow: 1,
                      minWidth: 0,
                      px: 0,
                      py: 1,
                    }}
                    variant={"text"}
                  >
                    24GB<Typography sx={{ display: "inline-block", ml: 0.5 }}>PRO</Typography>
                  </Button>
                  <Button
                    onClick={onChangeGpu("48")}
                    sx={{
                      fontWeight: gpu === "48" ? 600 : 300,
                      flexGrow: 1,
                      minWidth: 0,
                      px: 0,
                      py: 1,
                    }}
                    variant={"text"}
                  >
                    48GB
                  </Button>
                  <Button
                    onClick={onChangeGpu("80")}
                    sx={{
                      fontWeight: gpu === "80" ? 600 : 300,
                      flexGrow: 1,
                      minWidth: 0,
                      px: 0,
                      py: 1,
                    }}
                    variant={"text"}
                  >
                    80GB
                  </Button>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <TextField
                    label="Requests / Hr"
                    name="requests"
                    onChange={(e) => setRequests(e.target.value)}
                    sx={{ width: "40%" }}
                    type="number"
                    value={requests}
                    variant="outlined"
                  />
                  <Stack spacing={0.3} width="60%">
                    <TextField
                      fullWidth
                      InputProps={{
                        endAdornment: <InputAdornment position="start">seconds</InputAdornment>,
                      }}
                      label="Execution Time / Request"
                      name="requests"
                      onChange={(e) => setRequestTime(e.target.value)}
                      type="number"
                      value={requestTime}
                      variant="outlined"
                    />
                    <Typography fontSize={12} pl={1} variant="subtitle1">
                      * GPU type will impact execution time.
                    </Typography>
                  </Stack>
                </Stack>

                <Divider />

                <Stack alignItems="end" py={1} spacing={1}>
                  <Typography fontSize={28}>
                    ${" "}
                    {price > 0
                      ? price.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                        })
                      : "-"}{" "}
                    <Typography fontSize={18} sx={{ display: "inline-block" }}>
                      /mo
                    </Typography>
                  </Typography>
                  <Typography fontSize={14} pl={1} variant="subtitle1">
                    to handle {parseInt(requests * 24 * 30).toLocaleString("en-US")} requests per
                    month
                  </Typography>
                </Stack>

                <Button
                  href="https://meetings.hubspot.com/runpod/enterprise-discount"
                  variant="contained"
                >
                  Book a Call for Enterprise Support
                </Button>

                <Divider />

                <Typography fontSize={14} pl={1} variant="subtitle1">
                  Cost estimation includes:
                  <li style={{ marginLeft: 25 }}>20% of the requests using reserved price</li>
                  <li style={{ marginLeft: 25 }}>20% of the requests running into 5s cold-start</li>
                </Typography>
              </Stack>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Calculator
