import {
  Card,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material"

import ButtonLink from "@components/ButtonLink"
import GpuPricingRow from "./GpuPricingRow"

export default function Pricing({ data }) {
  if (Array.isArray(data)) data.sort((a, b) => (a?.memoryInGb > b?.memoryInGb ? -1 : 1))
  const communityTypes = data.filter(({ communityCloud }) => communityCloud)
  const secureTypes = data.filter(({ secureCloud }) => secureCloud)

  return (
    <Container disableGutters maxWidth="sm" sx={{ mt: 6, mb: 15 }}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Card sx={{ width: "100%", pt: 2, pb: 3, px: { xs: 0, md: 3 } }}>
            <Table>
              <TableHead>
                <TableRow sx={{ background: "none" }}>
                  <TableCell sx={{ textTransform: "none", verticalAlign: "top" }}>
                    <Typography color="white" fontSize={{ xs: 18, sm: 20 }} variant="h3">
                      Secure Cloud
                    </Typography>
                  </TableCell>
                  <TableCell align="right" sx={{ color: "#ddd", textTransform: "none" }}>
                    1x GPU
                    <br />
                    $/hr
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color: "#ddd",
                      display: { xs: "none", md: "table-cell" },
                      textTransform: "none",
                    }}
                  >
                    8x GPU
                    <br />
                    $/hr
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {secureTypes?.map((gpu) => (
                  <GpuPricingRow key={gpu.id} gpu={gpu} secureCloud={true}></GpuPricingRow>
                ))}
              </TableBody>
            </Table>
            <ButtonLink
              color="primary"
              fullWidth
              href="/console/gpu-cloud"
              sx={{ mt: 3 }}
              variant="outlined"
            >
              Deploy Now
            </ButtonLink>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ width: "100%", pt: 2, pb: 3, px: { xs: 0, md: 3 } }}>
            <Table>
              <TableHead>
                <TableRow sx={{ background: "none" }}>
                  <TableCell sx={{ textTransform: "none", verticalAlign: "top" }}>
                    <Typography fontSize={{ xs: 18, sm: 20 }} variant="h3">
                      Community Cloud
                    </Typography>
                  </TableCell>
                  <TableCell align="right" sx={{ textTransform: "none" }}>
                    1x GPU
                    <br />
                    $/hr
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ display: { xs: "none", md: "table-cell" }, textTransform: "none" }}
                  >
                    8x GPU
                    <br />
                    $/hr
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {communityTypes?.map((gpu) => (
                  <GpuPricingRow key={gpu.id} gpu={gpu}></GpuPricingRow>
                ))}
              </TableBody>
            </Table>
            <ButtonLink
              color="primary"
              fullWidth
              href="/console/gpu-cloud"
              sx={{ mt: 3 }}
              variant="outlined"
            >
              Deploy Now
            </ButtonLink>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}
