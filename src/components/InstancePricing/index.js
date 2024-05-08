import { Box, Stack, Typography } from "@mui/material";

import ButtonLink from "@components/ButtonLink";
import { Pricing } from "@components/Home/Pricing";

export default function InstancePricing({ data }) {
  return (
    <Stack alignItems="center">
      <Pricing data={data} />

      <Stack
        width="100%"
        alignItems="center"
        my={18}
        position="relative"
        spacing={3}
      >
        <Typography
          fontSize={24}
          fontWeight={600}
          textAlign={"center"}
          lineHeight={"28px"}
        >
          <span style={{ color: "#bbb9ff" }}>Storage</span> Pricing
        </Typography>
        <Typography
          align="center"
          variant="body1"
          fontSize={15}
          lineHeight={1.8}
          sx={{ maxWidth: 600, px: 3 }}
        >
          <span style={{ fontWeight: 500 }}>Pod Volume / Container Disk</span>
          <br />
          $0.10/GB/Month on running pods
          <br />
          $0.20/GB/Month for idle volume
        </Typography>
        <Typography
          align="center"
          variant="body1"
          fontSize={15}
          lineHeight={1.8}
          sx={{ maxWidth: 600, px: 3 }}
        >
          <span style={{ fontWeight: 500 }}>Network Storage</span>
          <br />
          $0.07/GB/Month
          <br />
          $0.05/GB/Month for 1TB or more
        </Typography>
      </Stack>

      <Stack alignItems="center" mb={20}>
        <Typography
          align={"center"}
          variant="body1"
          fontSize={18}
          sx={{ maxWidth: 650, px: 3 }}
        >
          Don&apos;t see a machine configuration that you like?
        </Typography>
        <Typography
          align={"center"}
          variant="body1"
          fontSize={18}
          sx={{ maxWidth: 650, px: 3 }}
        >
          Don&apos;t want to use containers?
        </Typography>
        <Typography
          align={"center"}
          my={2}
          variant="body1"
          fontSize={18}
          sx={{ maxWidth: 650, px: 3, mb: 4 }}
        >
          <strong>We provide custom solutions too!</strong>
        </Typography>
        <ButtonLink variant="outlined" href="/contact">
          Contact Us
        </ButtonLink>
      </Stack>
    </Stack>
  );
}
