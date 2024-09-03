import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import { useInterval } from "@hooks/useInterval";
import { useTheme } from "@mui/material/styles";
import CountUp from "react-countup";
import createTrigger from "react-use-trigger";
import useFetch from "use-http";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTrigger from "react-use-trigger/useTrigger";

const requestTrigger = createTrigger();


export default function RequestCounter({ data }) {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));

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
    <Stack alignItems="center" position="relative" width="100%">


      <Stack alignItems="center"  justifyContent="center">
        

        <Box ml={{ xs: -4, md:-8 }} width={'200px'}>
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
            fontSize={{ xs: 36, sm: 36, md: 42 }}
            fontWeight={600}
            letterSpacing="-0.03em"
            width={width === 0 ? undefined : width + 60}
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

        <Stack 
          alignItems="center" 
          justifyContent="center" // Added this line
          direction="row" 
          spacing={0.8}
          sx={{
            maxWidth: { xs: '300px', sm: 'none' },
            width: '100%',
          }}
        >
          <Typography
            fontWeight={16}
            letterSpacing="0.002em"
            fontSize={24}
            sx={{
              fontSize: '14px', 
              fontWeight: 500, 
              lineHeight: '24px', 
              textAlign: 'center', 
              color: 'rgba(249, 250, 251, 0.48)', 
              padding:'5px',
              width: '100%', // Added this line
            }}
          >
            Real-time requests since launch <br></br><span style={{ color: '#FFFFFF' }}>150k+ developers worldwide</span> 
          </Typography>
          
        </Stack>

        <Box mt={{ xs: 3, sm: 4, md: 6 }} spacing={1.8}></Box>


      </Stack>
    </Stack>
  );
}