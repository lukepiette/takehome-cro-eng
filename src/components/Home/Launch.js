import { Box, Stack, Typography } from "@mui/material";
import { RunPodIcon } from "@components/Layout/Logo";
import { useEffect, useMemo, useRef, useState } from "react";
import { useInterval } from "@hooks/useInterval";
import { useTheme } from "@mui/material/styles";
import ButtonLink from "@components/ButtonLink";
import createTrigger from "react-use-trigger";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import useFetch from "use-http";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTrigger from "react-use-trigger/useTrigger";

const requestTrigger = createTrigger();

const reviews = [
  {
    name: "Hara Kang",
    title: "CTO, LOVO AI",
    review: `"It really shows that RunPod is made by developers. They know exactly what engineers really want and they ship those features in order of importance."`,
  },
];

export default function Launch({ data }) {
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
    <Stack
      alignItems="center"
      position="relative"
      mt={{
        xs: -20,
        sm: 15,
      }}
      mb={10}
      width="100%"
    >
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

      <Stack
        alignItems="center"
        height={1305}
        maxWidth={549}
        textAlign={"center"}
        justifyContent="center"
      >
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

        <Typography
          color="#fff"
          fontWeight={600}
          fontSize={48}
          mt={"34px"}
          lineHeight={"48px"}
        >
          Launch your AI application in{" "}
          <span style={{ color: "#afa0ff" }}>minutes</span>
        </Typography>

        <Stack alignItems="center" direction="row" spacing={0.8}>
          <Typography
            fontSize={14}
            mt={"19px"}
            sx={{
              background:
                "linear-gradient(313.71deg, rgba(248, 250, 252, 0.64) 8.27%, #F8FAFC 57.24%, rgba(248, 250, 252, 0.64) 96.6%)",
              backgroundClip: "text",
              textFillColor: "transparent",
              color: "rgba(249, 250, 251, 0.64)",
              lineHeight: "140%",
              width: "430.29px",
              height: "40px",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            Start building with the most cost-effective platform for developing
            and scaling machine learning models.
          </Typography>
        </Stack>

        <Stack direction="row" mt={"48px"} spacing={1.8}>
          <ButtonLink
            href="/console/signup"
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
            Get Started{" "}
            <KeyboardArrowRightIcon sx={{ fontSize: 20, ml: 0.6 }} />
          </ButtonLink>
        </Stack>
      </Stack>
    </Stack>
  );
}
