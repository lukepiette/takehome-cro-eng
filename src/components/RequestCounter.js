import { Typography, Stack, Box, Tooltip } from "@mui/material"
import React from "react";
import { useEffect, useRef, useState } from "react"
import { useInterval } from "@hooks/useInterval"
import CountUp from "react-countup"
import createTrigger from "react-use-trigger"
import useFetch from "use-http"
import useTrigger from "react-use-trigger/useTrigger"

const requestTrigger = createTrigger()

function Metrics({ data, requestProps }) {
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
    <Stack alignItems="center" justifyContent="center">
      <Tooltip>
        <Box ref={ref} width={width === 0 ? undefined : width + 15}>
          <Typography color="white" fontSize={{ xs: '1rem', sm: 24 }} variant="subtitle1" {...requestProps}>
            Serverless Requests
          </Typography>
          <Typography color="white" mt={0} fontSize={{ xs: '2.5rem', sm: 46, md: 190 }}>
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


const RequestCounter = () => {

  return (
    <>
      <Stack
        alignItems="top"
        direction={{ xs: "column-reverse", md: "row-reverse" }}
        justifyContent={"center"}
        mt={{xs:10, sm: "25vh"}}
        width="100%"
        height="100vh"
      >
        <Stack >

          <Stack direction={{xs:"column", sm:"column", md:"row"}} spacing={{ xs: 0, sm: 0, md: 0, lg: 4 }}>
           
            <Stack pt={{xs:4, sm:4, md:0}}> 
              <Metrics />
              <Stack mt={2} direction="row" spacing={1}>
               
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

    </>
  )
}

export default RequestCounter
