import { Box, Stack, Typography } from "@mui/material";
import { SectionHeader } from "./SectionHeader";
import ButtonLink from "@components/ButtonLink";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { ShellBlock } from "@components/ShellBlock";

import Cloud1 from "@assets/cloud1.svg";
import Cloud2 from "@assets/cloud2.svg";
import Cloud3 from "@assets/cloud3.svg";
import SlsDivider from "@assets/sls-divider.svg";
import {
  SvgAutoscaleLines,
  WorkerBox,
  WorkerCountBox,
} from "@components/Sls/Autoscale";
import Analytics from "@components/Sls/Analytics";

export function Scale() {
  return (
    <Stack
      mt={24}
      position={"relative"}
      alignItems={"center"}
      maxWidth="75.5rem"
      width={"100%"}
    >
      <SectionHeader
        number={2}
        name="Scale"
        title={
          <Typography fontWeight={600} fontSize={48} lineHeight={"48px"}>
            Scale your ML inference
            <br />
            with <span style={{ color: "#afa0ff" }}>Serverless</span>
          </Typography>
        }
        subtitle={
          <Typography fontWeight={400} fontSize={16}>
            Run your AI models with autoscaling, job queueing and
            <br />
            sub 250ms cold start time.
          </Typography>
        }
        button={
          <ButtonLink
            href="https://docs.runpod.io/cli/install-runpodctl"
            variant="contained"
            gradient
          >
            Deploy now
            <KeyboardArrowRightIcon
              sx={{
                display: { xs: "none", md: "inherit" },
                fontSize: 20,
                ml: 0.6,
              }}
            />
          </ButtonLink>
        }
      >
        <ShellBlock sx={{ height: 90, mt: 2, mb: 16 }}>
          <Typography
            fontFamily="monospace"
            fontSize={12}
            ml={2}
            mt={2}
            width="100%"
          >
            {">"} <span style={{ color: "#FF8FFD" }}>runpodctl</span> project{" "}
            <span style={{ color: "#979DFF" }}>deploy</span>
          </Typography>
        </ShellBlock>
      </SectionHeader>

      <Cloud1
        style={{
          position: "absolute",
          top: "500px",
          transform: "translateX(-20rem)",
        }}
      />
      <Cloud2
        style={{
          position: "absolute",
          top: "500px",
          transform: "translateX(40rem)",
        }}
      />
      <Cloud3
        style={{
          position: "absolute",
          top: "550px",
          transform: "translateX(-36rem)",
        }}
      />
      <SlsDivider />

      <Stack
        border="1px solid #1E293B"
        borderRadius={2.4}
        height={400}
        maxWidth="100%"
        width="100%"
        overflow="hidden"
        position="relative"
        sx={{
          background:
            "radial-gradient(99.75% 99.75% at 50% 99.75%, #1E293B 0%, #1E195B 34.36%, rgba(15, 23, 42, 0.0001) 100%)",
        }}
      >
        <Typography
          fontSize={20}
          letterSpacing="-0.02em"
          ml={3.5}
          mt={3}
          sx={{
            background:
              "linear-gradient(1deg, rgba(248, 250, 252, 0.64) 8%, #F8FAFC 57%, rgba(248, 250, 252, 0.64) 96%)",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Autoscale in seconds
        </Typography>
        <Typography
          color="#B4BAC5"
          fontSize={16}
          letterSpacing={-0.25}
          ml={3.5}
          mt={1.2}
        >
          Respond to user demand in real time with GPU workers that
          <br />
          scale from 0 to 100s in a minute.
        </Typography>

        <Box mb={3.9} ml={6} mt="auto" position="relative">
          <WorkerBox sx={{ bottom: 40 }} active={undefined} />
          <WorkerBox active sx={{ bottom: -10 }} />
          <WorkerCountBox
            gpu={10}
            sx={{ bottom: -3, left: 330 }}
            time="6:24AM"
          />
          <WorkerCountBox
            gpu={100}
            sx={{ left: 650, top: -10 }}
            time="11:34AM"
          />
          <WorkerCountBox
            gpu={20}
            sx={{ bottom: 30, left: 830 }}
            time="1:34PM"
          />
          <SvgAutoscaleLines />
        </Box>

        <Box
          bottom={0}
          height={222}
          position="absolute"
          width="100%"
          sx={{
            background:
              "linear-gradient(165.97deg, rgba(77, 148, 255, 0.24) 8.49%, rgba(255, 255, 255, 0) 91.6%)",
            opacity: 0.4,
            transform: "matrix(1, 0, 0, -1, 0, 0)",
          }}
        />
        <Box
          bottom={-50}
          height={90}
          position="absolute"
          width="100%"
          sx={{
            background:
              "linear-gradient(142.14deg, #538DFF 19.97%, rgba(77, 148, 255, 0) 80.37%)",
            opacity: 0.1,
          }}
        >
          <Box
            height="1px"
            width="100%"
            sx={{ background: "linear-gradient(#538DFF 0%, #EFF6FF 100%)" }}
          />
        </Box>
      </Stack>

      <Analytics showHeader={false} />
    </Stack>
  );
}
