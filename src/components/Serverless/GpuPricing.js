import {
  Box,
  Chip,
  Divider,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material"
import Calculator from "./Calculator"
import InfoIcon from "@mui/icons-material/Info"
import Link from "@components/Link"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"

const rows = [
  { gpu: "A4000", price: 0.0002, size: 16 },
  { gpu: "A5000", price: 0.00026, size: 24 },
  { gpu: "4090", price: 0.00044, pro: true, size: 24 },
  { gpu: "A6000", price: 0.00048, size: 48 },
  { gpu: "A100", price: 0.0013, size: 80 },
]

export default function GpuPricing() {
  const theme = useTheme()

  return (
    <Stack
      alignItems="center"
      direction="column"
      justifyContent="center"
      my={{ xs: 14, sm: 14 }}
      position="relative"
      spacing={3}
    >
      <Box
        sx={{
          backgroundImage: "url(/static/images/bg.webp)",
          backgroundRepeat: "no-repeat",
          filter: "blur(60px)",
          height: 1000,
          opacity: 0.8,
          overflowX: "hidden !important",
          position: "absolute",
          top: -250,
          transform: "rotate(130deg)",
          width: 900,
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          borderRadius: 1,
          px: { xs: 1, sm: 2 },
          py: 2,
          pt: 2,
          width: { xs: "100%", sm: 550 },
        }}
      >
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  align="right"
                  colSpan={2}
                  sx={{ textTransform: "none", verticalAlign: "top" }}
                >
                  <Tooltip title="Flex workers handle spikes in your workload and allow you to support higher throughput without impacting your users. You can scale down to 0 by using only flex workers.">
                    <Typography
                      color="#ccc"
                      fontSize={16}
                      fontWeight={600}
                      sx={{ display: "flex", gap: 0.5, justifyContent: "end" }}
                    >
                      Flex <InfoIcon fontSize="small" />
                    </Typography>
                  </Tooltip>
                </TableCell>
                <TableCell align="right" sx={{ textTransform: "none" }}>
                  <Tooltip title="Active workers handle consistent workload and run 24x7 at much lower cost.">
                    <Typography
                      color="white"
                      fontSize={16}
                      fontWeight={600}
                      sx={{ display: "flex", gap: 0.5, justifyContent: "end" }}
                    >
                      Active <InfoIcon fontSize="small" />
                    </Typography>
                  </Tooltip>
                  <Typography color="white" pt={0.4}>
                    40% Discount
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(({ gpu, price, pro, size }) => (
                <TableRow
                  key={gpu}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row" sx={{ pl: 3 }}>
                    <Typography
                      alignItems={{ xs: "start", sm: "center" }}
                      display="flex"
                      fontSize={24}
                      flexDirection={{ xs: "column", sm: "row" }}
                      variant="h3"
                    >
                      {size} GB
                      {pro && (
                        <Chip
                          color="primary"
                          label="PRO"
                          size="small"
                          sx={{ ml: { xs: 0, sm: 1 } }}
                        />
                      )}
                    </Typography>
                    <Typography sx={{ fontSize: 16, mt: 0.8 }}>{gpu}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography fontSize={18}>${price.toFixed(5)}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography color="white" fontSize={18}>
                      ${(price * 0.6).toFixed(5)}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Typography
        align="center"
        color="white"
        mx={{ xs: 0, sm: -2 }}
        pt={10}
        fontSize={{ xs: 26, sm: 32 }}
      >
        <strong>flex</strong> with ease
      </Typography>
      <Divider sx={{ maxWidth: 500, width: "100%" }} />
      <Typography align="center" mx={{ xs: 0, sm: -2 }} pb={10} fontSize={{ xs: 20, sm: 22 }}>
        cold-start in <strong>milliseconds</strong>
      </Typography>

      <Stack
        alignItems="stretch"
        direction={{ xs: "column", md: "row" }}
        position="relative"
        spacing={2}
        sx={{
          background: "rgba(0, 0, 0, 0.05)",
          borderRadius: 1,
          maxWidth: "100%",
          px: { xs: 1, sm: 2 },
          py: 2,
        }}
      >
        <Box
          sx={{
            backgroundImage: "url(/static/images/bg.webp)",
            backgroundRepeat: "no-repeat",
            filter: "blur(60px)",
            height: 1000,
            left: -150,
            opacity: 0.8,
            overflowX: "hidden !important",
            position: "absolute",
            top: -300,
            transform: "rotate(130deg)",
            width: 900,
            zIndex: -1,
          }}
        />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  align="right"
                  colSpan={2}
                  sx={{ textTransform: "none", verticalAlign: "top" }}
                >
                  <Typography fontSize={16} fontWeight={600}>
                    Starter
                  </Typography>
                </TableCell>
                <TableCell align="right" sx={{ textTransform: "none" }}>
                  <Tooltip title="When you need higher throughput and dedicated support.">
                    <Typography
                      fontSize={16}
                      fontWeight={600}
                      sx={{ display: "flex", gap: 0.5, justifyContent: "end" }}
                    >
                      Enterprise <InfoIcon fontSize="small" />
                    </Typography>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row" sx={{ pl: { xs: 1, sm: 3 } }}>
                  <Typography alignItems="center" display="flex" fontSize={16}>
                    Workers
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography fontSize={14}>5 - 30</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography fontSize={14}>100+</Typography>
                </TableCell>
              </TableRow>
              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row" sx={{ pl: { xs: 1, sm: 3 } }}>
                  <Typography alignItems="center" display="flex" fontSize={16}>
                    Support
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography alignItems="top" display="flex" fontSize={14} justifyContent="end">
                    Community
                    <Link
                      href="https://discord.gg/xktFUKbuMR"
                      sx={{ alignSelf: "center", display: { xs: "none", sm: "inline-flex" } }}
                      target="_blank"
                    >
                      <OpenInNewIcon sx={{ fontSize: 16, ml: 0.5 }} />
                    </Link>
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography color="primary" fontSize={14}>
                    <Link
                      href="https://meetings.hubspot.com/runpod/enterprise-discount"
                      sx={{ justifyContent: "end", display: "flex" }}
                      target="_blank"
                    >
                      Dedicated
                      <OpenInNewIcon
                        sx={{
                          alignSelf: "center",
                          display: { xs: "none", sm: "inline-flex" },
                          fontSize: 16,
                          ml: 0.5,
                        }}
                      />
                    </Link>
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row" sx={{ pl: { xs: 1, sm: 3 } }}>
                  <Typography alignItems="center" display="flex" fontSize={16}>
                    Bandwidth
                  </Typography>
                </TableCell>
                <TableCell align="right" colSpan={2}>
                  <Typography fontSize={14}>FREE</Typography>
                </TableCell>
              </TableRow>
              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row" sx={{ pl: { xs: 1, sm: 3 } }}>
                  <Typography alignItems="center" display="flex" fontSize={16}>
                    Logs
                  </Typography>
                </TableCell>
                <TableCell align="right" colSpan={2}>
                  <Typography fontSize={14}>30 days</Typography>
                </TableCell>
              </TableRow>
              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row" sx={{ pl: { xs: 1, sm: 3 } }}>
                  <Typography alignItems="center" display="flex" fontSize={16}>
                    Metrics
                  </Typography>
                </TableCell>
                <TableCell align="right" colSpan={2}>
                  <Typography fontSize={14}>90 days</Typography>
                </TableCell>
              </TableRow>
              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row" sx={{ pl: { xs: 1, sm: 3 } }}>
                  <Typography alignItems="center" display="flex" fontSize={16}>
                    Network Storage
                  </Typography>
                </TableCell>
                <TableCell align="right" colSpan={2}>
                  <Typography fontSize={14}>
                    $0.07/GB/mo
                    <br />
                    &gt; 1TB $0.05/GB/mo
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row" sx={{ pl: { xs: 1, sm: 3 } }}>
                  <Typography alignItems="center" display="flex" fontSize={16}>
                    Regions
                  </Typography>
                </TableCell>
                <TableCell align="right" colSpan={2}>
                  <Typography fontSize={14}>US / Europe</Typography>
                </TableCell>
              </TableRow>
              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row" sx={{ pl: { xs: 1, sm: 3 } }}>
                  <Typography alignItems="center" display="flex" fontSize={16}>
                    Uptime
                  </Typography>
                </TableCell>
                <TableCell align="right" colSpan={2}>
                  <Typography color="primary" fontSize={14}>
                    <Link
                      href="https://uptime.runpod.io"
                      sx={{ justifyContent: "end", display: "flex" }}
                      target="_blank"
                    >
                      99.99%
                      <OpenInNewIcon
                        sx={{ alignSelf: "center", display: "inline-flex", fontSize: 16, ml: 0.5 }}
                      />
                    </Link>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Calculator />
      </Stack>
    </Stack>
  )
}
