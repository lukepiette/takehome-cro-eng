import { Box, Stack, Typography } from "@mui/material";
import { CircleColor } from "./Community";
import { useEffect, useMemo, useRef, useState } from "react";
import { useInterval } from "@hooks/useInterval";
import { useTheme } from "@mui/material/styles";
import ButtonLink from "@components/ButtonLink";
import CountUp from "react-countup";
import createTrigger from "react-use-trigger";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import useFetch from "use-http";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTrigger from "react-use-trigger/useTrigger";
import PersonIcon from "@mui/icons-material/Person";

const requestTrigger = createTrigger();

const reviews = [
  {
    name: "Hara Kang",
    title: "CTO, LOVO AI",
    review: `"It really shows that RunPod is made by developers. They know exactly what engineers really want and they ship those features in order of importance."`,
  },
];

export default function Counter({ data }) {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));

  const [reviewActive, setReviewActive] = useState(reviews[0].name);
  const activeReview = useMemo(
    () => reviews.find((v) => v.name === reviewActive),
    [reviewActive]
  );

  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  const requestTriggerValue = useTrigger(requestTrigger);
  const { data: metrics } = useFetch(
    "https://api.runpod.ai/metrics",
    {
      cachePolicy: "no-cache",
    },
    [requestTriggerValue]
  );

  useInterval(() => requestTrigger(), 2000);
  useEffect(() => {
    setWidth(ref.current ? ref.current.offsetWidth : 0);
  }, [md, ref, sm]);

  return (
    <Stack alignItems="center" position="relative" mt={15} mb={7} width="100%">
      <Box
        borderRadius={100}
        boxShadow="0px 2.74px 0px rgba(77, 148, 255, 0.25), inset 0px -24.55px 48px rgba(77, 148, 255, 0.1), inset 0px -78.5px 100px #BD00FF"
        height={1303}
        position="absolute"
        top={0}
        width={1303}
        sx={{
          background:
            "radial-gradient(85.83% 85.83% at 50% 14.17%, #000000 0%, #000000 59.12%, #000342 85.94%)",
        }}
        zIndex={-10}
      />
      <Box
        borderRadius={100}
        boxShadow="0px 2.74px 0px rgba(77, 148, 255, 0.25), inset 0px -24.55px 48px #AD47AC, inset 0px -68.5px 0px #979DFF"
        height={1116}
        position="absolute"
        top={80}
        width={1116}
        sx={{
          background:
            "radial-gradient(85.83% 85.83% at 50% 14.17%, #000000 0%, #000000 59.12%, #000000 85.94%)",
        }}
        zIndex={-10}
      />
      <Box
        borderRadius={100}
        boxShadow="0px -2.74px 2.74px #BD00FF, inset 0px 15px 30.25px rgba(255, 255, 255, 0.24), inset 0px 0px 27.3px #673BB8"
        height={926}
        position="absolute"
        top={170}
        width={926}
        sx={{
          background:
            "radial-gradient(85.83% 85.83% at 50% 14.17%, #000000 0%, #000000 59.12%, #000000 85.94%)",
          opacity: 0.4,
        }}
        zIndex={-10}
      />

      <Stack alignItems="center" height={1305} justifyContent="center">
        <Stack>
          <ReviewBox name={activeReview.name} title={activeReview.title}>
            {activeReview.review}
          </ReviewBox>
          <Stack
            alignItems="center"
            columnGap={2}
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            mt={3}
            rowGap={1.4}
          >
            {reviews.map((v) => (
              <ReviewTab
                active={reviewActive === v.name}
                handle={() => setReviewActive(v.name)}
                key={v.name}
                name={v.name}
                title={v.title}
              />
            ))}
          </Stack>
        </Stack>

        <Box ml={4} mt={10}>
          <Typography
            display="inline-block"
            fontSize={{ xs: 48, sm: 100, md: 120 }}
            fontWeight={600}
            letterSpacing="-0.03em"
            position="absolute"
            ref={ref}
            visibility="hidden"
          >
            {(metrics?.requests || data?.metrics?.requests).toLocaleString(
              "en-US"
            )}
          </Typography>
          <Typography
            fontSize={{ xs: 48, sm: 100, md: 120 }}
            fontWeight={600}
            letterSpacing="-0.03em"
            width={width === 0 ? undefined : width + 40}
            sx={{
              background:
                "linear-gradient(119.2deg, rgba(255, 255, 255, 0.4) 32.07%, rgba(145, 78, 255, 0.4) 75.29%), #FFFFFF",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            <CountUp
              decimals={0}
              delay={0}
              duration={3}
              end={metrics?.requests || data?.metrics?.requests}
              preserveValue={true}
              separator=","
              start={data?.metrics?.requests - 500}
            />
          </Typography>
        </Box>

        <Stack alignItems="center" direction="row" spacing={0.8}>
          <CircleColor color="green" />
          <Typography
            fontWeight={16}
            letterSpacing="0.002em"
            sx={{
              background:
                "linear-gradient(313.71deg, rgba(248, 250, 252, 0.64) 8.27%, #F8FAFC 57.24%, rgba(248, 250, 252, 0.64) 96.6%)",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            requests &amp; 100k+ developers since launch
          </Typography>
        </Stack>

        <Stack direction="row" mt={6} spacing={1.8}>
          <ButtonLink
            href="https://discord.gg/cUpRmau42V"
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
            Join our Discord{" "}
            <KeyboardArrowRightIcon sx={{ fontSize: 20, ml: 0.6 }} />
          </ButtonLink>
          {/* <ButtonLink
            href="https://meetings.hubspot.com/runpod/first-connect"
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
            Book a call{" "}
            <KeyboardArrowRightIcon sx={{ fontSize: 20, ml: 0.6 }} />
          </ButtonLink> */}
        </Stack>
      </Stack>
    </Stack>
  );
}

const ReviewBox = ({ children, name, title }) => (
  <Stack>
    <Stack alignItems="center">
      <Box
        sx={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "0.5px solid #fff",
          marginBottom: 1,
        }}
      >
        <PersonIcon
          sx={{
            fontSize: 17, // Adjust icon size as needed
            color: "rgba(255, 255, 255, 0.7)", // Adjust icon color as needed
          }}
        />
      </Box>
      <Typography
        color="#BEC2FD"
        fontSize={10}
        fontWeight={500}
        letterSpacing="-0.02em"
      >
        {title}
      </Typography>
      <Typography
        color="#fff"
        fontSize={14}
        fontWeight={500}
        letterSpacing="0.002em"
      >
        {name}
      </Typography>
      <Typography
        align="center"
        color="#94A3B8"
        fontSize={16}
        letterSpacing={-0.25}
        maxWidth={680}
        mt={3}
        px={3}
        width="100%"
      >
        {children}
      </Typography>
    </Stack>
  </Stack>
);

const ReviewTab = ({ active, handle, name, title }) => (
  <div
    onClick={handle}
    style={{
      background: "rgba(28, 28, 28, 0.3)",
      borderRadius: 18,
      boxShadow: "0px -1px 3px rgba(226, 232, 240, 0.7)",
      color: "#F8FAFC",
      cursor: active ? "default" : "pointer",
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: "-0.02em",
      opacity: active ? 1 : 0.5,
      padding: "9px 14px 10px",
    }}
  >
    {name} <span style={{ color: "#475569" }}>-</span>{" "}
    <span style={{ color: "#94A3B8" }}>{title}</span>
  </div>
);
