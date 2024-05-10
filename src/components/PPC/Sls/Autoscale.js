import { Box, Stack, Typography } from "@mui/material";
import ButtonLink from "@components/ButtonLink";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LaunchIcon from "@mui/icons-material/Launch";
import Link from "next/link";

export default function Autoscale() {
  return (
    <Stack alignItems="center" position="relative" my={4} width="100%">
      <Box
        height={1073}
        left={0}
        position="absolute"
        width="100%"
        zIndex={-1}
        sx={{
          background:
            "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.84) 10%, rgba(127, 82, 255, .2) 45%, #000 100%)",
        }}
      />
      <Typography
        align="center"
        color="#fff"
        fontSize={{ xs: 28, sm: 38, md: 44 }}
        letterSpacing={-1}
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
            background: "linear-gradient(45deg, #CAD9FF, #7F39FF)",
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
        fontSize={14}
        letterSpacing={-0.25}
        maxWidth={570}
        mt={3}
        px={2}
      >
        For your expected load, provision active workers running 24/7 with a 40%
        discount &amp; flex workers to handle any sudden traffic.
      </Typography>

      <ButtonLink
        href="https://meetings.runpod.io/meetings/runpod/firstconnect"
        variant="contained"
        sx={{
          background:
            "radial-gradient(92.09% 85.42% at 86.3% 87.5%, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0) 86.18%), radial-gradient(65.28% 65.28% at 26.39% 20.83%, rgba(255, 255, 255, 0.0472) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%), #5D29F0",
          borderRadius: 0.8,
          boxShadow:
            "0px 2px 0px rgba(0, 0, 0, 0.5), inset -3px -4px 7px rgba(9, 0, 114, 0.24)",
          fontWeight: 600,
          height: 40,
          my: 3,
          pl: 2,
          pr: 1.4,
        }}
      >
        Talk with our team <KeyboardArrowRightIcon sx={{ fontSize: 20, ml: 0.6 }} />
      </ButtonLink>

      <Stack
        alignItems="center"
        color="rgba(255, 255, 255, .8)"
        columnGap={4}
        direction="row"
        display={{ xs: "none", sm: "inherit" }}
        flexWrap="wrap"
        fontSize={16}
        fontWeight={500}
        justifyContent="center"
        letterSpacing={-0.02}
        mt={3}
        mx={2}
        rowGap={2}
      >
        <Stack direction="row">
          <Stack
            alignItems="center"
            bgcolor="green"
            borderRadius={100}
            height={24}
            justifyContent="center"
            mr={1}
            width={24}
          >
            <CheckIcon sx={{ fontSize: 14 }} />
          </Stack>
          <Link
            href="https://uptime.runpod.io/"
            style={{
              alignItems: "center",
              color: "inherit",
              display: "flex",
              textDecoration: "none",
            }}
          >
            99.99% Uptime
            <LaunchIcon
              sx={{ color: "rgba(255, 255, 255, .6)", fontSize: 16, ml: 0.6 }}
            />
          </Link>
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
              bgcolor="green"
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

      <Stack
        border="1px solid #1E293B"
        borderRadius={2.4}
        height={400}
        maxWidth="calc(100% - 40px)"
        mt={5}
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
          scale from 0 to 100s in seconds.
        </Typography>

        <Box mb={3.9} ml={6} mt="auto" position="relative">
          <WorkerBox sx={{ bottom: 40 }} />
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
    </Stack>
  );
}

export const SvgAutoscaleLines = () => (
  <svg
    width="1150"
    height="150"
    viewBox="0 0 1150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.5"
      d="M0.8125 98.1918H146.92V2.06784H370.406V149.458H534.191V58.4605H651.892V115.98H697.411V0.786133H808.253V117.98H940.263V52.0522H1307.26"
      stroke="url(#paint0_linear_153_63981)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_153_63981"
        x1="621.941"
        y1="61.0826"
        x2="630.751"
        y2="157.431"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C3BDFF" />
        <stop offset="1" stopColor="#9E69FF" />
      </linearGradient>
    </defs>
  </svg>
);

export const WorkerBox = ({ active, sx }) => (
  <Stack
    alignItems="center"
    border="1px solid #334155"
    borderRadius={0.8}
    boxShadow="0px 12px 32px rgba(39, 17, 17, 0.12)"
    color="#F8FAFC"
    direction="row"
    fontSize={12}
    height={32}
    justifyContent="center"
    position="absolute"
    px={1.4}
    width="fit-content"
    zIndex={1}
    sx={{
      backdropFilter: "blur(13.5px)",
      background: "rgba(28, 28, 28, 0.2)",
      borderTopColor: "#94A3B8",
      ...sx,
    }}
  >
    <Box
      borderRadius={100}
      height={7}
      mr={0.8}
      width={7}
      sx={{
        background: active
          ? "#5B5BF5"
          : "radial-gradient(60.33% 56.34% at 51.44% 49.1%, #C3BDFF 0%, #9E69FF 100%)",
      }}
    />
    {active ? "Active" : "Flex"}&nbsp;
    <Typography fontSize="inherit" color="#475569">
      Workers
    </Typography>
  </Stack>
);

export const WorkerCountBox = ({ gpu, sx, time }) => (
  <Stack
    alignItems="center"
    borderRadius={0.4}
    boxShadow="1.44px 13.68px 22.32px rgba(0, 0, 0, 0.5), inset -1.08px -1.44px 2.52px rgba(9, 0, 114, 0.24)"
    color="rgba(249, 250, 251, 0.64)"
    direction="row"
    fontSize={10}
    letterSpacing="-0.02em"
    px={1}
    paddingX={0.5}
    position="absolute"
    width="fit-content"
    zIndex={1}
    sx={{
      background:
        "linear-gradient(95.95deg, rgba(143, 0, 255, 0.08) 4.72%, rgba(0, 0, 0, 0.08) 52.26%), #2F0779",
      ...sx,
    }}
  >
    {gpu} GPUs
    <Typography color="#fff" fontSize={12} ml={0.5}>
      {time}
    </Typography>
  </Stack>
);
