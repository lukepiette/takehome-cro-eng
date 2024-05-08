import { Stack, Typography } from "@mui/material";
import { SectionHeader } from "./SectionHeader";
import ButtonLink from "@components/ButtonLink";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { ShellBlock } from "@components/ShellBlock";

import Cloud1 from "@assets/cloud1.svg";
import Cloud2 from "@assets/cloud2.svg";
import Cloud3 from "@assets/cloud3.svg";

export function Scale() {
  return (
    <Stack mt={24} position={"relative"}>
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
        <ShellBlock sx={{ height: 90, mt: 2 }}>
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
          top: "600px",
          transform: "translateX(-20rem)",
        }}
      />
      <Cloud2
        style={{
          position: "absolute",
          top: "600px",
          transform: "translateX(40rem)",
        }}
      />
      <Cloud3
        style={{
          position: "absolute",
          top: "650px",
          transform: "translateX(-36rem)",
        }}
      />
    </Stack>
  );
}
