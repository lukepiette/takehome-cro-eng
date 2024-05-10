import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { format } from "date-fns";
import { useEffect, useState } from "react";

const defaultColors = ["#824edc", "#57CA22", "#22cac7", "#cfcc2d"];

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
  const [isHidden, setHidden] = useState(hidden);
  useEffect(() => {
    if (!hidden) setHidden(false);
  }, [hidden]);

  if (isHidden) return null;
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: -30 }}
        syncId={syncId}
      >
        <defs>
          <linearGradient
            id="AreaChartGradient0"
            gradientTransform="rotate(90)"
          >
            <stop offset="20%" stopColor="#008C62" stopOpacity={0} />
            <stop offset="100%" stopColor="#00000a" stopOpacity={0.7} />
          </linearGradient>
          <linearGradient
            id="AreaChartGradient1"
            gradientTransform="rotate(90)"
          >
            <stop offset="20%" stopColor="#824edc" stopOpacity={0} />
            <stop offset="100%" stopColor="#00000a" stopOpacity={0.6} />
          </linearGradient>
          <linearGradient
            id="AreaChartGradient2"
            gradientTransform="rotate(90)"
          >
            <stop offset="20%" stopColor="#FF8A00" stopOpacity={0} />
            <stop offset="100%" stopColor="#00000a" stopOpacity={0.1} />
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
            fill={`url(#AreaChartGradient${i})`}
            fillOpacity={1}
            // fill={colors ? colors[i] : defaultColors[i]}
            key={v}
            legendType="none"
            stroke={colors ? colors[i] : defaultColors[i]}
            strokeOpacity={0.8}
            type={type}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
}

const CustomTooltip = ({
  active,
  colors,
  payload,
  label,
  linesAlias,
  tickSuffix,
}) => {
  if (active && payload && payload.length) {
    return (
      <Paper sx={{ background: "#00000a", px: 2, py: 1 }}>
        <Stack spacing={0.6}>
          <Typography fontSize={13} variant="body1">
            {longDateFormatter(label)}
          </Typography>
          <Stack>
            {payload.map((v, i) => (
              <Typography
                alignItems="center"
                color="white"
                display="flex"
                fontSize={13}
                key={i}
              >
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
    );
  }

  return null;
};

const dateFormatter = (date) => format(new Date(date), "H:mm");
const longDateFormatter = (date) =>
  format(new Date(date), "LLL d, yyyy h:mm aaa");
