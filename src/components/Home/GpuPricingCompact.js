import { Box, Divider, Paper, Stack, Typography, useTheme } from "@mui/material"
import ButtonLink from "@components/ButtonLink"

export default function GpuPricingCompact({ data }) {
  const theme = useTheme()

  return (
    <Stack pl={{xs:0, md:20}} alignItems="center" mt={{ xs: 10, md: 3 }} spacing={3}>
      <PriceDisplay
        name="A100"
        price={data?.gpu["NVIDIA A100 80GB PCIe"]?.securePrice}
        size={data?.gpu["NVIDIA A100 80GB PCIe"]?.memoryInGb}
        theme={theme}
      />
      <PriceDisplay
        name="H100"
        price={data?.gpu["NVIDIA H100 PCIe"]?.securePrice}
        size={data?.gpu["NVIDIA H100 PCIe"]?.memoryInGb}
        theme={theme}
      />
      <PriceDisplay
        name="A40"
        price={data?.gpu["NVIDIA A40"]?.securePrice}
        size={data?.gpu["NVIDIA A40"]?.memoryInGb}
        theme={theme}
      />

      <PriceDisplay
        name="RTX 4090"
        price={
          data?.gpu["NVIDIA GeForce RTX 4090"]?.securePrice ||
          data?.gpu["NVIDIA GeForce RTX 4090"]?.communityPrice
        }
        size={data?.gpu["NVIDIA GeForce RTX 4090"]?.memoryInGb}
        theme={theme}
      />
      <PriceDisplay
        name="RTX A6000"
        price={data?.gpu["NVIDIA RTX A6000"]?.securePrice}
        size={data?.gpu["NVIDIA RTX A6000"]?.memoryInGb}
        theme={theme}
      />
      <Box pt={2}>
        <ButtonLink
          href={"/gpu-instance/pricing"}
          variant="outlined"
          size="large"
          sx={{ borderColor: "#824edc", color: "white" }}
        >
          See all GPUs
        </ButtonLink>
      </Box>
    </Stack>
  )
}

const PriceDisplay = ({ name, price, size }) => (
  <Stack justifyContent="center" direction={{ xs: "column", sm: "row" }}>
    <Paper
      elevation={0}
      sx={{
        alignItems: { xs: "start", sm: "end" },
        display: "flex",
        flexDirection: { xs: "row", sm: "column" },
        px: 4,
        py: 0.5,
        width: 250,
      }}
    >
      <Typography sx={{ fontSize: 22 }} variant="h3">
        {name}
      </Typography>
      <Typography sx={{ fontSize: 18, ml: { xs: 2, sm: 0 } }}>{size} GB</Typography>
    </Paper>
    <Divider orientation="vertical" sx={{ display: { xs: "none", sm: "inherit" } }} />
    <Divider sx={{ display: { xs: "inherit", sm: "none" } }} />
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        px: 4,
        py: 0.5,
        minWidth: { xs: "100%", sm: 250 },
      }}
    >
      <Typography sx={{ fontSize: 16, textAlign: "left" }}>${price?.toFixed(2)} / hr</Typography>
    </Paper>
  </Stack>
)
