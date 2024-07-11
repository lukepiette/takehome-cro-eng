import { Stack } from "@mui/material";

import GpuPricing from "./GpuPricing";
import ServerlessPricing from "@components/Sls/Pricing";
import StoragePricing from "./StoragePricing";
import AdditionalSavings from "./AdditionalSavings";

export default function InstancePricing({ data }) {
  return (
    <Stack alignItems="center">
      <GpuPricing data={data} />
      <StoragePricing />
      <ServerlessPricing slim title1="Serverless" title2="Pricing" />
      <AdditionalSavings />
    </Stack>
  );
}
