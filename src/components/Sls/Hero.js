import { Box, Stack, Typography, alpha } from "@mui/material";

export default function Hero() {
  return (
    <Stack alignItems="center" position="relative" mb={200}>
      <Box
        height={700}
        mt={1}
        position="absolute"
        sx={{
          backgroundImage: `linear-gradient(${alpha("#000", 0)} 0%, ${alpha(
            "#000",
            0
          )} 20%, ${alpha("#4110C1", 0.33)} 38%, ${alpha(
            "#000",
            0.48
          )} 48%, ${alpha("#3300C4", 0.2)} 60%, ${alpha(
            "#673BB8",
            0.8
          )} 79%, ${alpha("#000", 0.8)} 100%)`,
        }}
        width="100%"
        zIndex={-90}
      />
      <Stack
        alignItems="center"
        borderRadius={100}
        boxShadow="inset 0 20px 28px #fff, inset 0 72px 27px #673BB8"
        height={580}
        position="absolute"
        top={-190}
        width={580}
        zIndex={-97}
      />
      <Stack
        alignItems="center"
        borderRadius={100}
        boxShadow="inset 0 -15px 20px #AD47AC, inset 0 -50px #979DFF"
        height={900}
        position="absolute"
        top={-200}
        width={900}
        zIndex={-98}
      />
      <Stack
        alignItems="center"
        borderRadius={100}
        boxShadow={`inset 0 -20px 35px ${alpha(
          "#4D94FF",
          0.25
        )}, inset 0 -50px 60px #BD00FF`}
        height={1080}
        position="absolute"
        sx={{
          background: "radial-gradient(circle, #000 0%, #000 59%, #000342 80%)",
        }}
        top={-300}
        width={1080}
        zIndex={-99}
      />
      <Stack
        alignItems="center"
        height={600}
        maxWidth={840}
        mt={9.4}
        width="100%"
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

        <Stack
          direction="row"
          justifyContent="space-between"
          mt={23.8}
          width="100%"
        >
          <Stack
            borderRadius={0.8}
            bgcolor="#111121"
            height={200}
            width={400}
          ></Stack>
          <Stack
            borderRadius={0.8}
            bgcolor="#111121"
            height={200}
            width={400}
          ></Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
