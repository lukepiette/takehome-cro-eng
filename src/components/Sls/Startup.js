import { Box, Stack, Typography } from "@mui/material";
import { RunPodIcon } from "@components/Layout/Logo";
import ButtonLink from "@components/ButtonLink";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Startup() {
  return (
    <Stack alignItems="center" position="relative" mt={25} pb={7} width="100%">
      <Box
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25), 0px 1.20311px 1.20311px rgba(77, 148, 255, 0.25), inset 0px -9.02332px 15.0389px #ECD3F7, inset 0px -30.0777px 30.0777px #BD00FF"
        borderRadius={100}
        height={793}
        position="absolute"
        top={-101}
        width={793}
        zIndex={-1}
        sx={{
          background:
            "radial-gradient(85.83% 85.83% at 50% 14.17%, #5D29F0 0%, rgba(128, 0, 255, 0.39) 28%, rgba(77, 148, 255, 0.25) 100%)",
          filter: "blur(200px)",
          opacity: "0.64",
        }}
      />

      <Stack alignItems="center" direction="row">
        <Stack
          alignItems="center"
          border="1px solid #1E293B"
          borderRadius={2.4}
          height={464}
          justifyContent="center"
          width={508}
          sx={{
            background:
              "radial-gradient(99.75% 99.75% at 50% 99.75%, #1E293B 0%, rgba(15, 23, 42, 0.0001) 100%)",
          }}
        >
          <Stack
            border="1px solid rgba(249, 250, 251, 0.16)"
            borderRadius={0.8}
            pl={1.5}
            pr={2}
            py={1.2}
            sx={{
              backdropFilter: "blur(20px)",
              background:
                "radial-gradient(99.75% 99.75% at 50% 99.75%, #1E293B 0%, rgba(15, 23, 42, 0.0001) 100%), rgba(0, 0, 0, 0.01)",
            }}
            width={305}
          >
            <Typography
              alignItems="center"
              color="#BEC2FD"
              display="flex"
              fontSize={14}
              letterSpacing="0.002em"
            >
              <RunPodIcon
                color="primary"
                style={{ height: 30, marginRight: 5, width: 30 }}
              />
              We&apos;re with you from seed, to scale
            </Typography>
            <Typography
              color="#94A3B8"
              fontSize={18}
              letterSpacing={-0.25}
              ml={0.5}
              mt={0.5}
            >
              Book a call with our sales team to learn more.
            </Typography>
          </Stack>
        </Stack>

        <Stack alignItems="start" ml={11}>
          <Typography
            fontSize={48}
            fontWeight={600}
            letterSpacing="-0.03em"
            lineHeight="96%"
            width={480}
            sx={{
              background:
                "linear-gradient(313.71deg, rgba(248, 250, 252, 0.64) 8.27%, #F8FAFC 57.24%, rgba(248, 250, 252, 0.64) 96.6%)",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            Gain{" "}
            <Typography
              display="inline"
              fontSize={48}
              fontWeight={600}
              letterSpacing="-0.03em"
              lineHeight="96%"
              width={480}
              sx={{
                background: "#C3BDFF",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
            >
              Additional Savings
            </Typography>{" "}
            with Reservations
          </Typography>
          <Typography
            color="#94A3B8"
            fontSize={16}
            letterSpacing="-0.25px"
            lineHeight="24px"
            mt={3}
            width={378}
          >
            Speak with our team to gain additional cost savings on reserved
            active workers and flex worker commitments.
          </Typography>
          <ButtonLink
            href="https://meetings.runpod.io/meetings/runpod/firstconnect"
            variant="contained"
            sx={{
              background:
                "radial-gradient(92.09% 85.42% at 86.3% 87.5%, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0) 86.18%), radial-gradient(65.28% 65.28% at 26.39% 20.83%, rgba(255, 255, 255, 0.0472) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%), #5D29F0",
              borderRadius: 0.8,
              boxShadow:
                "0px 6px 0px rgba(0, 0, 0, 0.5), inset -3px -4px 7px rgba(9, 0, 114, 0.24)",
              fontWeight: 600,
              height: 40,
              mt: 3,
              pl: 2,
              pr: 1.4,
            }}
          >
            Book a Call{" "}
            <KeyboardArrowRightIcon sx={{ fontSize: 20, ml: 0.6 }} />
          </ButtonLink>
        </Stack>
      </Stack>

      <Stack
        alignItems="start"
        border="1px solid rgba(255, 255, 255, 0.08)"
        mt={10}
        pl={21}
        py={5}
        sx={{ backdropFilter: "blur(50px)" }}
        width="100%"
      >
        <Typography
          fontSize={28}
          fontWeight={600}
          letterSpacing="-0.02em"
          lineHeight="34px"
          sx={{
            background:
              "linear-gradient(119.2deg, rgba(255, 255, 255, 0.4) 32.07%, rgba(145, 78, 255, 0.4) 75.29%), #FFFFFF",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
          width={480}
        >
          Are you an early-stage startup or academic?
        </Typography>
        <Typography
          color="#94A3B8"
          fontSize={16}
          letterSpacing={-0.25}
          mt={1.5}
          width={480}
        >
          Get up to 25K in free compute credits with Runpod. These can be used
          towards on-demand GPUs and Serverless endpoints.
        </Typography>
        <ButtonLink
          href="https://meetings.runpod.io/meetings/runpod/firstconnect"
          variant="contained"
          sx={{
            background:
              "radial-gradient(92.09% 85.42% at 86.3% 87.5%, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0) 86.18%), radial-gradient(65.28% 65.28% at 26.39% 20.83%, rgba(255, 255, 255, 0.0472) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%), #5D29F0",
            borderRadius: 0.8,
            boxShadow:
              "0px 6px 0px rgba(0, 0, 0, 0.5), inset -3px -4px 7px rgba(9, 0, 114, 0.24)",
            fontWeight: 600,
            height: 40,
            mt: 3,
            pl: 2,
            pr: 1.4,
          }}
        >
          Apply <KeyboardArrowRightIcon sx={{ fontSize: 20, ml: 0.6 }} />
        </ButtonLink>
      </Stack>
    </Stack>
  );
}
