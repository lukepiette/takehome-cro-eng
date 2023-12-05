import { Box, Stack, Typography } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import { useInterval } from "@hooks/useInterval"
import CountUp from "react-countup"
import createTrigger from "react-use-trigger"
import useFetch from 'use-http'
import useTrigger from "react-use-trigger/useTrigger"

const requestTrigger = createTrigger()

export default function Metrics({ data }) {
    const ref = useRef(null)
    const [width, setWidth] = useState(0)
    const requestTriggerValue = useTrigger(requestTrigger)
    const { data: metrics } = useFetch("https://api.runpod.ai/metrics", {
        cachePolicy: 'no-cache'
    }, [requestTriggerValue])

    useInterval(() => {
        requestTrigger()
    }, 2000)

    useEffect(() => {
        setWidth(ref.current ? ref.current.offsetWidth : 0)
    }, [ref])

    return (
        <Stack alignItems="center" justifyContent="center">
            <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, sm: 8 }}>
                <Box minWidth={210} ref={ref} width={width === 0 ? undefined : width + 15}>
                    <Typography color="white" fontSize={40}>
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
                    <Typography color="white" fontSize={20} variant="subtitle1">
                        requests since launch
                    </Typography>
                </Box>
            </Stack>
        </Stack>
    )
}
