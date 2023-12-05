import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Box, Paper, Stack, Typography } from "@mui/material"
import { format } from "date-fns"
import { useEffect, useState } from "react"

const defaultColors = ["#824edc", "#57CA22", "#22cac7", "#cfcc2d"]

export default function LineChartView({
  colors,
  data,
  hidden = false,
  lines,
  linesAlias,
  tickSuffix,
  type = "monotone",
  syncId,
}) {
  const [isHidden, setHidden] = useState(hidden)
  useEffect(() => {
    if (!hidden) setHidden(false)
  }, [hidden])

  if (isHidden) return null
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: -22 }} syncId={syncId}>
        <defs>
          <linearGradient id="AreaChartGradient" gradientTransform="rotate(90)">
            <stop offset="20%" stopColor="#824edc" stopOpacity={1} />
            <stop offset="100%" stopColor="#00000a" stopOpacity={1} />
          </linearGradient>
        </defs>
        <XAxis
          axisLine={false}
          dataKey="ts"
          domain={data.length > 0 ? [data[0].ts, data[data.length - 1].ts] : []}
          scale="time"
          tick={false}
          tickFormatter={dateFormatter}
          type="number"
        />
        <Tooltip
          content={
            <CustomTooltip
              colors={colors ? colors : defaultColors}
              linesAlias={linesAlias}
              tickSuffix={tickSuffix}
            />
          }
        />
        {lines.map((v, i) => (
          <Area
            activeDot={{ r: 6 }}
            dataKey={v}
            dot={false}
            fill="url(#AreaChartGradient)"
            fillOpacity={1}
            // fill={colors ? colors[i] : defaultColors[i]}
            key={v}
            legendType="none"
            stroke={colors ? colors[i] : defaultColors[i]}
            type={type}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  )
}

const CustomTooltip = ({ active, colors, payload, label, linesAlias, tickSuffix }) => {
  if (active && payload && payload.length) {
    return (
      <Paper sx={{ background: "#00000a", px: 2, py: 1 }}>
        <Stack spacing={0.6}>
          <Typography fontSize={13} variant="body1">
            {longDateFormatter(label)}
          </Typography>
          <Stack>
            {payload.map((v, i) => (
              <Typography alignItems="center" color="white" display="flex" fontSize={13} key={i}>
                <Box
                  borderRadius={0.4}
                  height={15}
                  mr={0.8}
                  width={15}
                  sx={{ background: colors[i] }}
                />
                {linesAlias ? linesAlias[v.dataKey] : v.dataKey}:{" "}
                {parseInt(v.value).toLocaleString("en-US")} {tickSuffix}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Paper>
    )
  }

  return null
}

const dateFormatter = (date) => format(new Date(date), "H:mm")
const longDateFormatter = (date) => format(new Date(date), "LLL d, yyyy h:mm aaa")
