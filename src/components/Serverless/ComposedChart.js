import { Box, Paper, Stack, Typography } from "@mui/material"
import {
  Bar,
  BarChart,
  LabelList,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { format } from "date-fns"
import { useEffect, useState } from "react"

const defaultColors = ["#9e9ac8", "#cbc9e2"]

const TriangleBar = (props) => {
  const { x, y, width, height } = props
  return (
    <Rectangle
      fill="url(#RadialGradient)"
      fillOpacity={0.8}
      height={height}
      radius={[10, 10, 0, 0]}
      width={width}
      x={x}
      y={y}
    />
  )
}

export default function ComposedChartView({
  colors = defaultColors,
  data,
  barAxisId,
  bars = [],
  barsAlias,
  hidden = false,
  labelDataKey,
  maxBarSize = 12,
  syncId,
  tickSuffix,
  valueSuffix,
}) {
  const [isHidden, setHidden] = useState(hidden)
  useEffect(() => {
    if (!hidden) setHidden(false)
  }, [hidden])

  if (isHidden) return null
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: Boolean(labelDataKey) ? 20 : 0,
          right: Boolean(labelDataKey) ? 20 : 10,
          left: Boolean(labelDataKey) ? 20 : 0,
          bottom: -22,
        }}
        syncId={syncId}
      >
        <defs>
          <linearGradient id="RadialGradient" gradientTransform="rotate(90)">
            <stop offset="20%" stopColor="#824edc" />
            <stop offset="100%" stopColor="#00000a" />
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
        {!Boolean(labelDataKey) && (
          <YAxis
            axisLine={false}
            domain={["auto", "auto"]}
            tick={<TickY tickSuffix={tickSuffix} />}
            tickCount={5}
            tickLine={false}
            type="number"
          />
        )}
        <Tooltip
          content={
            <CustomTooltip
              colors={colors}
              barsAlias={barsAlias}
              tickSuffix={tickSuffix}
              valueSuffix={valueSuffix}
            />
          }
          cursor={false}
        />
        {bars.map((v, i) => (
          <Bar
            dataKey={v}
            dot={false}
            fill={colors[i]}
            key={v}
            maxBarSize={maxBarSize}
            shape={<TriangleBar />}
            yAxisId={barAxisId}
          >
            {Boolean(labelDataKey) && (
              <LabelList
                content={<LabelContent />}
                dataKey={labelDataKey}
                id={labelDataKey}
                position="top"
              />
            )}
          </Bar>
        ))}
      </BarChart>
    </ResponsiveContainer>
  )
}

const LabelContent = ({ x, y, value, width }) => {
  return (
    <g transform={`translate(${x + width / 2},${y - 15})`}>
      <text dy={4} fill="#eee" fontSize="12px" textAnchor="middle" dominantBaseline="middle">
        {value}
      </text>
    </g>
  )
}

const TickY = ({ x, y, payload }) => (
  <g transform={`translate(${x},${y})`}>
    <text x={-5} y={0} dy={4} fill="#666" fontSize="12px" textAnchor="end">
      {payload.value}
    </text>
  </g>
)

const CustomTooltip = ({ active, colors, payload, label, barsAlias, tickSuffix, valueSuffix }) => {
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
                {barsAlias ? barsAlias[v.dataKey] : v.dataKey}:{" "}
                {parseInt(valueSuffix ? v.payload[`${v.dataKey}_value`] : v.value).toLocaleString(
                  "en-US"
                )}{" "}
                {tickSuffix}
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
