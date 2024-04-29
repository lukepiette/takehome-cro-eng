import { Box, Stack, Typography, alpha } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ButtonLink from "@components/ButtonLink";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Hero() {
  return (
    <Stack alignItems="center" position="relative" mb={15} width="100%">
      <Stack
        borderRadius={100}
        height={1200}
        overflow="hidden"
        position="absolute"
        top={-400}
        width={1200}
        zIndex={-90}
      >
        <Box
          height={704}
          mt={{ xs: 55, md: 44 }}
          sx={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(65, 16, 193, 0.32) 45%, rgba(0, 0, 0, 0.48) 55%, rgba(51, 0, 196, 0.08) 70%, #673BB8 90%, #000000 100%)",
          }}
          width="100%"
        />
      </Stack>
      <Stack
        alignItems="center"
        borderRadius={100}
        boxShadow="0px -2px 2px #BD00FF, inset 0px 20px 20px rgba(255, 255, 255, 0.74), inset 0px 72px 27px #673BB8"
        height={700}
        position="absolute"
        top={-300}
        width={700}
        zIndex={-97}
      />
      <Stack
        alignItems="center"
        borderRadius={100}
        boxShadow="0px 2.7402px 2.7402px rgba(77, 148, 255, 0.25), inset 0px -20px 30px #AD47AC, inset 0px -60px 0px #979DFF"
        height={1000}
        position="absolute"
        top={-300}
        width={1000}
        zIndex={-98}
      />
      <Stack
        alignItems="center"
        borderRadius={100}
        boxShadow="0px 2.7402px 2.7402px rgba(77, 148, 255, 0.25), inset 0px -20.5515px 34.2526px rgba(77, 148, 255, 0.25), inset 0px -68.5051px 68.5051px #BD00FF"
        height={1200}
        position="absolute"
        sx={{
          background:
            "radial-gradient(85.83% 85.83% at 50% 14.17%, #000000 0%, #000000 59.12%, #000342 85.94%)",
        }}
        top={-400}
        width={1200}
        zIndex={-99}
      />
      <Stack
        alignItems="center"
        maxWidth={860}
        mt={11.2}
        overflow="hidden"
        width="100%"
      >
        <Stack
          alignItems="center"
          border={`1px solid ${alpha("#fff", 0.1)}`}
          borderRadius={0.8}
          bgcolor={alpha("#fff", 0.1)}
          direction="row"
          fontSize={12}
          height={32}
          justifyContent="center"
          px={1.2}
        >
          <FavoriteIcon sx={{ fontSize: 12, mr: 1 }} />
          We just raised our 20 million Pre-Seed
        </Stack>
        <Typography
          align="center"
          color="#fff"
          fontSize={{ xs: 28, sm: 48, md: 58 }}
          fontWeight={600}
          letterSpacing="-0.04em"
          lineHeight={0.9}
          mt={2}
          variant="h1"
        >
          Run machine learning
          <br />
          inference&nbsp;
          <Box
            display="inline-flex"
            sx={{
              background: "-webkit-linear-gradient(45deg, #CAD9FF, #7F39FF)",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            at scale.
          </Box>
        </Typography>
        <Typography
          align="center"
          color="#94A3B8"
          fontSize={{ xs: 14, sm: 16 }}
          fontWeight={300}
          lineHeight={1.4}
          maxWidth={420}
          mt={2}
          px={2}
          variant="h2"
        >
          Run your AI models with autoscaling, job queueing and sub 500ms cold
          start time.
        </Typography>

        <Stack direction="row" mt={4} spacing={{ xs: 1, sm: 1.8 }}>
          <ButtonLink
            href="/console/serverless"
            variant="contained"
            sx={{
              background:
                "radial-gradient(92.09% 85.42% at 86.3% 87.5%, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0) 86.18%), radial-gradient(65.28% 65.28% at 26.39% 20.83%, rgba(255, 255, 255, 0.0472) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%), #5D29F0",
              borderRadius: 0.8,
              boxShadow:
                "0px 6px 0px rgba(0, 0, 0, 0.5), inset -3px -4px 7px rgba(9, 0, 114, 0.24)",
              fontWeight: 600,
              height: 40,
              pl: 2,
              pr: 1.4,
            }}
          >
            Try it now <KeyboardArrowRightIcon sx={{ fontSize: 20, ml: 0.6 }} />
          </ButtonLink>
          <ButtonLink
            href="https://docs.runpod.io/serverless/overview"
            variant="outlined"
            sx={{
              background:
                "radial-gradient(106.71% 106.71% at 50% -6.71%, #45005E 0%, #000000 46.08%, #000342 85.94%)",
              borderRadius: 0.8,
              boxShadow:
                "inset 0px -6px 24px rgba(255, 255, 255, 0.24), inset 0px 1px 2px #BD00FF;",
              fontWeight: 600,
              height: 40,
              pl: 2,
              pr: 1.4,
            }}
          >
            Read the Docs <ArrowRightAltIcon sx={{ fontSize: 18, ml: 0.6 }} />
          </ButtonLink>
        </Stack>

        <Stack
          alignItems="center"
          direction={{ sm: "column", md: "row" }}
          gap={4}
          justifyContent="space-between"
          mt={{ xs: 8, md: 11.6 }}
          px={{ xs: 2, sm: 4 }}
          width="100%"
        >
          <CodeBlock>
            <Stack
              alignItems="center"
              bgcolor="#212134"
              direction="row"
              height={34}
              pl={1.6}
              spacing={0.6}
            >
              <Box bgcolor="#EE6A5E" borderRadius={100} height={8} width={8} />
              <Box bgcolor="#F5BF4F" borderRadius={100} height={8} width={8} />
              <Box bgcolor="#62C554" borderRadius={100} height={8} width={8} />
            </Stack>
            <Stack direction="row" ml={3} mt={2}>
              <Typography color="#B4BAC5" fontFamily="monospace" fontSize={12}>
                1<br />2<br />3<br />4<br />5<br />6
              </Typography>
              <Typography
                color="#fff"
                fontFamily="monospace"
                fontSize={12}
                pl={2}
              >
                <span style={{ color: "#EC9D4C" }}>import</span> runpod
                <br />
                <span style={{ color: "#EC9D4C" }}>def</span>{" "}
                <span style={{ color: "#F776F7" }}>handler</span>(job):
                <Typography
                  color="#fff"
                  fontFamily="monospace"
                  fontSize={12}
                  pl={2}
                >
                  job_input = job[
                  <span style={{ color: "#95EC4D" }}>&quot;input&quot;</span>]
                  <br />
                  <span style={{ color: "#EC9D4C" }}>return</span>{" "}
                  <span style={{ color: "#95EC4D" }}>
                    &quot;Running on Runpod!&quot;
                  </span>
                </Typography>
                runpod.serverless.start&#40;&#123;
                <span style={{ color: "#95EC4D" }}>&quot;handler&quot;</span>:
                handler&#125;&#41;
                <br />
              </Typography>
            </Stack>
          </CodeBlock>
          <CodeBlock>
            <Stack
              alignItems="center"
              bgcolor="#212134"
              direction="row"
              height={34}
              px={1.6}
              py={1.4}
              spacing={0.6}
            >
              <Box
                bgcolor={`${alpha("#fff", 0.3)}`}
                borderRadius={100}
                height={8}
                width={8}
              />
              <Box
                bgcolor={`${alpha("#fff", 0.2)}`}
                borderRadius={100}
                height={8}
                width={8}
              />
              <Box
                bgcolor={`${alpha("#fff", 0.1)}`}
                borderRadius={100}
                height={8}
                width={8}
              />
              <Typography
                align="right"
                color={`${alpha("#F9FAFB", 0.48)}`}
                fontFamily="monospace"
                fontSize={12}
                flexGrow={1}
              >
                runpodctl -- zsh
              </Typography>
            </Stack>
            <Typography fontFamily="monospace" fontSize={12} ml={3} mt={2}>
              &gt; runpodctl config --apiKey $(RUNPOD_API_KEY)
              <br />
              &gt; runpodctl project create
              <br />
              &gt; runpodctl project deploy
              <br />
              <br />
              Deploying project...
              <br />
              Syncing files...
              <br />
              Project deployed successfully!
            </Typography>
          </CodeBlock>
        </Stack>
      </Stack>
    </Stack>
  );
}

export const CodeBlock = ({ children, light, left, sx, ...props }) => (
  <Stack
    borderRadius={1}
    bgcolor="#111121"
    height={200}
    maxWidth={380}
    overflow="hidden"
    sx={{
      borderColor: `${alpha("#5D29F0", 0.4)}`,
      borderStyle: "solid",
      borderWidth: light ? 0 : 1,
      borderBottomWidth: 0,
      boxShadow: light
        ? "0px 0px 0px 4px rgba(255, 255, 255, 0.04), 0px 0px 0px 8px rgba(255, 255, 255, 0.04)"
        : `0 0 0 1px ${alpha("#fff", 0.04)}, 0 0 0 3px ${alpha(
            "#fff",
            0.04
          )}, 0 0 0 8px ${alpha("#fff", 0.04)}`,
      ...sx,
    }}
    width="100%"
    {...props}
  >
    {children}
  </Stack>
);
