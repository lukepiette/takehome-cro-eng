import { Box, Stack, Typography } from "@mui/material";
import { RunPodIcon } from "@components/Layout/Logo";
import ButtonLink from "@components/ButtonLink";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SignUp from "@components/SignUpButton";

export default function Footer() {
  return (
    <Stack alignItems="center" position="relative" mt={20} pb={24} width="100%">
      <Box
        bottom={0}
        height={1470}
        position="absolute"
        width="100%"
        sx={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.48) 25%, #000000 50%, #000824 75%, #7F52FF 100%)",
          opacity: 0.2,
        }}
        zIndex={-99}
      />

      <Stack
        alignItems="center"
        borderRadius={2.4}
        boxShadow="inset 9.62749px -9.62749px 25.6733px rgba(188, 47, 255, 0.49), inset 0px 0px 40.1146px #B09DFE, inset 0px 9.62749px 80.2291px #001F4E"
        height={106}
        justifyContent="center"
        width={106}
        sx={{
          background:
            "radial-gradient(88.69% 91.78% at 50.56% 15.16%, #000000 0%, #000000 59.12%, #000342 85.94%)",
        }}
      >
        <RunPodIcon style={{ color: "#fff", height: 75, width: 75 }} />
      </Stack>
      <Stack direction="row">
        <Typography
          fontSize={48}
          fontWeight={600}
          letterSpacing="-0.03em"
          sx={{
            background:
              "linear-gradient(0deg, rgba(248, 250, 252, 0.64) 8.27%, #F8FAFC 57.24%, rgba(248, 250, 252, 0.64) 96.6%)",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          Get started with RunPod&nbsp;
        </Typography>
        <Typography
          color="#D3B8FF"
          fontSize={48}
          fontWeight={600}
          letterSpacing="-0.03em"
        >
          today.
        </Typography>
      </Stack>

      <Typography
        align="center"
        color="rgba(249, 250, 251, 0.64)"
        fontSize={14}
        fontWeight={500}
        letterSpacing="0.002em"
        maxWidth={400}
        mt={1}
      >
        We handle millions of serverless requests a day. Scale your machine
        learning inference while keeping costs low.
      </Typography>

      <Stack direction="row" mt={6} spacing={1.8}>
        <SignUp
          text="Sign up"
          url="/console/serverless"
          utmContent="serverless-footer"
        />

        {/* <ButtonLink
          href="https://meetings.runpod.io/meetings/luke-piette/pricing-outreach"
          variant="outlined"
          sx={{
            background:
              "radial-gradient(106.71% 106.71% at 50% -6.71%, #45005E 0%, #000000 46.08%, #000342 85.94%)",
            borderRadius: 0.8,
            boxShadow:
              "inset 0px -6px 24px rgba(255, 255, 255, 0.24), inset 0px 1px 2px #BD00FF;",
            fontWeight: 500,
            height: 40,
            pl: 2,
            pr: 1.4,
          }}
        >
          Talk to our team{" "}
          <KeyboardArrowRightIcon sx={{ fontSize: 20, ml: 0.6 }} />
        </ButtonLink> */}
      </Stack>
    </Stack>
  );
}
