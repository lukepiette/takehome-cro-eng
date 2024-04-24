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
            0.9
          )} 79%, ${alpha("#000", 1)} 100%)`,
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
        maxWidth={840}
        mt={9.4}
        overflow="hidden"
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
          mt={22.2}
          width="100%"
        >
          <CodeBlock />
          <CodeBlock />
        </Stack>
      </Stack>
    </Stack>
  );
}

const CodeBlock = (props) => (
  <Stack
    borderRadius="10px 10px 0 0"
    bgcolor="#111121"
    height={200}
    sx={{
      borderImage: `conic-gradient(from 180deg, ${alpha(
        "#BEC2FD",
        0.4
      )} 8%, ${alpha("#BD00FF", 0.4)} 37%, ${alpha(
        "#4D94FF",
        0.3
      )} 54%, ${alpha("#5D29F0", 0.4)} 88%, ${alpha("#EDE1FF", 0.4)} 100%) 1`,
      borderStyle: "solid",
      borderWidth: 1,
      borderBottomWidth: 0,
      boxShadow: `0 0 0 1px ${alpha("#fff", 0.04)}, 0 0 0 3px ${alpha(
        "#fff",
        0.04
      )}, 0 0 0 8px ${alpha("#fff", 0.04)}`,
    }}
    width={400}
    {...props}
  />
);