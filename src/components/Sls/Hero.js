import { Box, Stack, Typography, alpha } from "@mui/material";

export default function Hero() {
  return (
    <Stack alignItems="center" position="relative" mb={200}>
      <Box
        height={750}
        mt={1}
        position="absolute"
        sx={{
          backgroundImage: `linear-gradient(${alpha("#000", 0)} 0%, ${alpha(
            "#000",
            0
          )} 20%, ${alpha("#4110C1", 0.33)} 38%, ${alpha(
            "#000",
            0.48
          )} 48%, ${alpha("#3300C4", 0.2)} 60%, #673BB8 79%, #000 100%)`,
        }}
        width="100%"
        zIndex={-98}
      />
      <Stack
        alignItems="center"
        borderRadius={100}
        boxShadow="inset 0 20px 28px #fff, inset 0 72px 27px #673BB8"
        height={580}
        position="absolute"
        top={-190}
        width={580}
        zIndex={-99}
      />
      <Stack
        alignItems="center"
        borderRadius={100}
        boxShadow="inset 0 20px 28px #fff, inset 0 72px 27px #673BB8"
        height={580}
        position="absolute"
        top={-190}
        width={580}
        zIndex={-99}
      />
      <Stack
        alignItems="center"
        borderRadius={100}
        height={600}
        mt={9.4}
        width={600}
      >
        <Stack
          alignItems="center"
          border={`1px solid ${alpha("#fff", 0.1)}`}
          borderRadius={0.8}
          bgcolor={alpha("#fff", 0.1)}
          fontSize={12}
          height={34}
          justifyContent="center"
          px={1.2}
        >
          We just raised our 20 million Pre-Seed
        </Stack>
        <Typography
          align="center"
          color="#fff"
          fontSize={44}
          letterSpacing={-2}
          mt={2}
          variant="h1"
        >
          Run machine learning
          <br />
          inference at scale.
        </Typography>
        <Typography
          align="center"
          color="#94A3B8"
          fontSize={14}
          fontWeight={300}
          lineHeight={1.5}
          mt={3}
          variant="h2"
        >
          Run your AI models with autoscaling, job queueing
          <br />
          and sub 500ms cold start time.
        </Typography>
      </Stack>
    </Stack>
  );
}
