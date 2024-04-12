import { Box, Stack, Tooltip, Typography } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import { useInterval } from "@hooks/useInterval"
import CountUp from "react-countup"
import createTrigger from "react-use-trigger"
import useFetch from "use-http"
import useTrigger from "react-use-trigger/useTrigger"

const requestTrigger = createTrigger()

export default function Metrics({ data, requestProps }) {
  const ref = useRef(null)
  const [width, setWidth] = useState(0)
  const requestTriggerValue = useTrigger(requestTrigger)
  const { data: metrics } = useFetch(
    "https://api.runpod.ai/metrics",
    {
      cachePolicy: "no-cache",
    },
    [requestTriggerValue]
  )

  useInterval(() => requestTrigger(), 2000)

  useEffect(() => {
    setWidth(ref.current ? ref.current.offsetWidth : 0)
  }, [ref])

  return (
    <Stack alignItems="left" justifyContent="center">
      <Tooltip>
        <Box minWidth={210} ref={ref} width={width === 0 ? undefined : width + 15}>
          <Typography color="white" fontSize={{ xs: '1rem', sm: 24 }} variant="subtitle1" {...requestProps}>
            Total Requests
          </Typography>
          <Typography color="white" mt={0} fontWeight={"bold"} fontSize={{ xs: '2.5rem', sm: 46, md: 50 }}>
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
      </Tooltip>
    </Stack>
  )
}
