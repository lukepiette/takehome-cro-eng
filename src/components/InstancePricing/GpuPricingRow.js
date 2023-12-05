import { Box, TableRow, TableCell, Typography, Stack } from "@mui/material"

const GpuPricingRow = ({ gpu, secureCloud }) => {
  const {
    communitySpotPrice,
    displayName,
    memoryInGb,
    oneMonthPrice,
    secureSpotPrice,
    threeMonthPrice,
    sixMonthPrice,
  } = gpu
  const minMemory = gpu?.lowestPrice?.minMemory
  const minVcpu = gpu?.lowestPrice?.minVcpu
  const ondemand = secureCloud ? gpu?.securePrice : gpu?.communityPrice
  const spotprice = secureCloud ? secureSpotPrice : communitySpotPrice

  return (
    <TableRow key={displayName} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        <Typography color="white" variant="h4" fontSize={14}>
          {displayName}
        </Typography>

        <Box pt={1}>
          <Typography variant="body1">{`${memoryInGb * 1} GB VRAM`}</Typography>
          {minMemory === "-" ? (
            <Typography variant="body1">-</Typography>
          ) : (
            <Typography variant="body1">
              {minMemory} GB RAM &nbsp;{minVcpu} vCPU
            </Typography>
          )}
        </Box>
      </TableCell>
      <TableCell align="right">
        <LoadingPrice label="Spot" price={spotprice} />
        <LoadingPrice label="On-Demand" price={ondemand} />
        {secureCloud && <LoadingPrice label="1 Month" price={oneMonthPrice} />}
        {secureCloud && <LoadingPrice label="3 Month" price={threeMonthPrice} />}
        {secureCloud && <LoadingPrice label="6 Month" price={sixMonthPrice} />}
      </TableCell>
      <TableCell align="right" sx={{ display: { xs: "none", md: "table-cell" } }}>
        <LoadingPrice price={spotprice * 8} />
        <LoadingPrice price={ondemand * 8} />
        {secureCloud && <LoadingPrice price={oneMonthPrice * 8} />}
        {secureCloud && <LoadingPrice price={threeMonthPrice * 8} />}
        {secureCloud && <LoadingPrice price={sixMonthPrice * 8} />}
      </TableCell>
    </TableRow>
  )
}

const LoadingPrice = ({ label, price, defaultPrice }) => {
  return (
    <Stack direction="row" justifyContent={label ? "space-between" : "end"} py={0.1}>
      {label && (
        <Typography
          color={label == "On-Demand" ? "white" : "inherit"}
          variant={label == "On-Demand" ? "inherit" : "body1"}
        >
          {label}
        </Typography>
      )}
      <Typography
        color={label == "On-Demand" ? "white" : "inherit"}
        variant={label == "On-Demand" ? "inherit" : "body1"}
      >
        {price
          ? new Intl.NumberFormat().format(price.toFixed(3))
          : defaultPrice
          ? new Intl.NumberFormat().format(defaultPrice.toFixed(3))
          : "-"}
      </Typography>
    </Stack>
  )
}

export default GpuPricingRow
