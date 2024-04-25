import { Box, Button, Stack, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function ColdStart() {
  return (
    <Stack alignItems="center" position="relative" mb={200} mt={4}>
      <Typography
        align="center"
        color="#fff"
        fontSize={44}
        letterSpacing={-2}
        lineHeight={1}
        mt={2}
        variant="h2"
      >
        Spend more time training your models.
        <br />
        Let us handle your&nbsp;
        <Box
          display="inline-flex"
          sx={{
            background: "-webkit-linear-gradient(45deg, #CAD9FF, #7F39FF)",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          inference.
        </Box>
      </Typography>

      <Typography
        align="center"
        color="#94A3B8"
        fontSize={16}
        letterSpacing={-0.25}
        mt={3}
      >
        For your expected load, keep active workers running 24/7 with a 40%
        discount. But stay safe by provisioning as many flex
        <br />
        workers as you&apos;ll ever need on-demand.
      </Typography>

      <Button
        variant="contained"
        sx={{
          background:
            "radial-gradient(92.09% 85.42% at 86.3% 87.5%, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0) 86.18%), radial-gradient(65.28% 65.28% at 26.39% 20.83%, rgba(255, 255, 255, 0.0472) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%), #5D29F0",
          borderRadius: 0.8,
          boxShadow:
            "0px 6px 0px rgba(0, 0, 0, 0.5), inset -3px -4px 7px rgba(9, 0, 114, 0.24)",
          height: 40,
          my: 3,
          pl: 2,
          pr: 1.4,
        }}
      >
        Try it now <KeyboardArrowRightIcon sx={{ fontSize: 20, ml: 0.6 }} />
      </Button>

      <Stack
        direction="row"
        fontSize={16}
        fontWeight={600}
        letterSpacing={-0.02}
        mt={3}
        spacing={4}
      >
        <Stack direction="row">
          <Stack
            alignItems="center"
            bgcolor="rgba(249, 250, 251, 0.24)"
            borderRadius={100}
            height={24}
            justifyContent="center"
            mr={1}
            width={24}
          >
            <CheckIcon sx={{ fontSize: 14 }} />
          </Stack>
          99.99% Uptime
        </Stack>

        {[
          "Bring Your Container",
          "Network Storage",
          "9 Regions",
          "Streaming",
          "Webhooks",
        ].map((v) => (
          <Stack direction="row" key={v}>
            <Stack
              alignItems="center"
              bgcolor="rgba(249, 250, 251, 0.24)"
              borderRadius={100}
              height={24}
              justifyContent="center"
              mr={1}
              width={24}
            >
              <CheckIcon sx={{ fontSize: 14 }} />
            </Stack>
            {v}
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}
