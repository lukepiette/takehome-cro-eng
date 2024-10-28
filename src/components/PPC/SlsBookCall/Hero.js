import { Box, Stack, Typography, alpha } from "@mui/material";
import { useInterval } from "@hooks/useInterval";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ButtonLink from "@components/ButtonLink";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
import { ShellBlock } from "@components/ShellBlock";
import { CodeBlock } from "@components/CodeBlock";

export default function Hero() {
  const [progress, setProgress] = useState(0);
  useInterval(() => setProgress(progress + 1), 300);

  return (
    <Stack alignItems="center" position="relative" mb={18} width="100%">
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
          height={820}
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
        boxShadow="0px -2.74px 2.74px #BD00FF, inset 0px 34px 34px rgba(255, 255, 255, 0.74), inset 0px 72px 27px #673BB8"
        height={795}
        position="absolute"
        top={-250}
        width={795}
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
        boxShadow="0px 2.74px 2.74px rgba(77, 148, 255, 0.25), inset 0px -20px 34px rgba(77, 148, 255, 0.25), inset 0px -68px 68px #BD00FF"
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
        {/* <Stack
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
        </Stack> */}
        <Typography
          align="center"
          color="#fff"
          fontSize={{ xs: 28, sm: 48, md: 62 }}
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
          Only pay for what you use — no idle costs, just unparalleled speed and
          scalability.
        </Typography>

        <Stack direction="row" mt={4} spacing={{ xs: 1, sm: 1.8 }}>
          <ButtonLink
            href="https://meetings.hubspot.com/margarita-melkoumov/runpod-team-discovery-call-"
            variant="contained"
            sx={{
              background:
                "radial-gradient(92.09% 85.42% at 86.3% 87.5%, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0) 86.18%), radial-gradient(65.28% 65.28% at 26.39% 20.83%, rgba(255, 255, 255, 0.0472) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%), #5D29F0",
              borderRadius: 0.8,
              boxShadow:
                "0px 3px 0px rgba(0, 0, 0, 0.5), inset -3px -4px 7px rgba(9, 0, 114, 0.24)",
              fontWeight: 600,
              height: 40,
              pl: 2,
              pr: 1.4,
            }}
          >
            Book a call
            <KeyboardArrowRightIcon sx={{ fontSize: 20, ml: 0.6 }} />
          </ButtonLink>
        </Stack>

        <Stack
          alignItems={{ xs: "center", md: "flex-start" }}
          direction={{ sm: "column", md: "row" }}
          gap={4}
          justifyContent="center"
          mt={{ xs: 8, md: 11 }}
          px={{ xs: 2, sm: 2 }}
          width="100%"
        >
          <CodeBlock sx={{ height: 200 }}>
            <Stack direction="row" ml={3} mt={2}>
              <Typography color="#B4BAC5" fontFamily="monospace" fontSize={12}>
                1<br />2<br />3<br />4<br />5
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
                <span style={{ color: "#95EC4D" }}>&quot;handler&quot;</span>
                :handler&#125;&#41;
                <br />
              </Typography>
            </Stack>
          </CodeBlock>
          <ShellBlock sx={{ height: 200 }}>
            <Typography fontFamily="monospace" fontSize={12} ml={3} mt={2}>
              {/* {progress > 0 && (
                <div>&gt; runpodctl config --apiKey $(RUNPOD_API_KEY)</div>
              )}
              {progress > 2 && <div>&gt; runpodctl project create</div>} */}
              {progress > 0 && (
                <div>
                  &gt; <span style={{ color: "#FF8FFD" }}>runpodctl</span>{" "}
                  project <span style={{ color: "#979DFF" }}>deploy</span>
                </div>
              )}
              <br />
              {progress > 1 && (
                <div>
                  Deploying project.
                  {progress > 3 && "."}
                  {progress > 4 && "."}
                </div>
              )}
              {/* {progress > 5 && (
                <div>
                  Syncing files.{progress > 9 && "."}
                  {progress > 10 && "."}
                </div>
              )} */}
              {progress > 5 && <div>Project deployed successfully!</div>}
              <br />
              {progress > 7 && (
                <div>
                  Your Serverless API Endpoint:{" "}
                  <span style={{ color: "#95EC4D" }}>
                    https://api.runpod.ai/v2/u4y2rv11na8hlx/runsync
                  </span>
                </div>
              )}
            </Typography>
          </ShellBlock>
        </Stack>
      </Stack>
    </Stack>
  );
}
