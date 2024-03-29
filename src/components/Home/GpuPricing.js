import { Badge, Chip, Divider, Paper, Stack, Typography, useTheme } from "@mui/material"

import ButtonLink from "@components/ButtonLink"

export default function GpuPricing({ data }) {
  const theme = useTheme()

  return (
    <Stack alignItems="center" my={20} spacing={3}>
      <ButtonLink href="/console/deploy" color="secondary" sx={{ mt: 0, fontSize: 16 }}>
        Free Bandwidth
      </ButtonLink>

      <PriceDisplay
        name="A100"
        price={data?.gpu["NVIDIA A100 80GB PCIe"]?.securePrice}
        size={data?.gpu["NVIDIA A100 80GB PCIe"]?.memoryInGb}
        theme={theme}
      />
      <PriceDisplay
        name="L40"
        price={data?.gpu["NVIDIA L40"]?.securePrice}
        size={data?.gpu["NVIDIA L40"]?.memoryInGb}
        theme={theme}
      />
      <PriceDisplay
        name="RTX A6000"
        price={data?.gpu["NVIDIA RTX A6000"]?.securePrice}
        size={data?.gpu["NVIDIA RTX A6000"]?.memoryInGb}
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
        name="RTX 3090"
        price={
          data?.gpu["NVIDIA GeForce RTX 3090"]?.securePrice ||
          data?.gpu["NVIDIA GeForce RTX 3090"]?.communityPrice
        }
        size={data?.gpu["NVIDIA GeForce RTX 3090"]?.memoryInGb}
        theme={theme}
      />
      <PriceDisplay
        name="RTX A4000"
        price={data?.gpu["NVIDIA RTX A4000"]?.securePrice}
        size={data?.gpu["NVIDIA RTX A4000"]?.memoryInGb}
        theme={theme}
      />

      <Typography sx={{ fontSize: 18 }}>and many more ...</Typography>
    </Stack>
  )
}

const PriceDisplay = ({ name, price, size, theme }) => (
  <Stack justifyContent="center" direction={{ xs: "column", md: "row" }}>
    <Paper
      elevation={0}
      sx={{
        alignItems: { xs: "center", md: "end" },
        background: theme.palette.background.default,
        display: "flex",
        flexDirection: { xs: "row", md: "column" },
        px: 4,
        py: 0.5,
        minWidth: { xs: "100%", md: 350 },
      }}
    >
      <Typography sx={{ fontSize: 28 }} variant="h3">
        {name}
      </Typography>
      <Typography sx={{ fontSize: 20, ml: { xs: 2, md: 0 } }}>{size} GB</Typography>
    </Paper>
    <Divider orientation="vertical" sx={{ display: { xs: "none", md: "inherit" } }} />
    <Divider sx={{ display: { xs: "inherit", md: "none" } }} />
    <Paper
      elevation={0}
      sx={{
        background: theme.palette.background.default,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        px: 4,
        py: 0.5,
        minWidth: { xs: "100%", md: 350 },
      }}
    >
      <Typography sx={{ fontSize: 20 }}>Starting at ${price?.toFixed(2)} / hr</Typography>
      <Stack direction="row" my={1} spacing={1}>
        <Badge
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          badgeContent={"2x"}
          color="secondary"
          componentsProps={{ badge: { sx: { top: "50%", left: 18 } } }}
        >
          <Chip
            label={<Typography>{`$${(price * 2).toFixed(2)}`}</Typography>}
            sx={{ pl: 2.5 }}
            variant="outlined"
          />
        </Badge>
        <Badge
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          badgeContent={"4x"}
          color="secondary"
          componentsProps={{ badge: { sx: { top: "50%", left: 18 } } }}
        >
          <Chip
            label={<Typography>{`$${(price * 4).toFixed(2)}`}</Typography>}
            sx={{ pl: 2.5 }}
            variant="outlined"
          />
        </Badge>
        <Badge
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          badgeContent={"8x"}
          color="secondary"
          componentsProps={{ badge: { sx: { top: "50%", left: 18 } } }}
        >
          <Chip
            label={<Typography>{`$${(price * 8).toFixed(2)}`}</Typography>}
            sx={{ pl: 2.5 }}
            variant="outlined"
          />
        </Badge>
      </Stack>
    </Paper>
  </Stack>
)
