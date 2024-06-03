import { Stack, Typography } from "@mui/material";

import ButtonLink from "@components/ButtonLink";
import GpuPricing from "./GpuPricing";
import ServerlessPricing from "./ServerlessPricing"
import StoragePricing from "./StoragePricing"
import AdditionalSavings from "./AdditionalSavings"

export default function InstancePricing({ data }) {
  console.log(data)
  return (
    <Stack alignItems="center">
      <GpuPricing data={data} />
      <StoragePricing />
      <ServerlessPricing />
      <AdditionalSavings />
    </Stack>
  );
}
