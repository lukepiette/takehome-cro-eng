import { alpha, Box, Stack, Typography } from "@mui/material";
import { ShellBlock } from "@components/ShellBlock";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import ButtonLink from "@components/ButtonLink";
import ComposedChart from "@components/Sls/ComposedChart";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LineChart from "@components/Sls/LineChart";

export default function Analytics() {
  const { ref: requestsRef, inView: requestsInView } = useInView({
    threshold: 1,
    fallbackInView: true,
  });
  const { ref: workersRef, inView: workersInView } = useInView({
    threshold: 1,
    fallbackInView: true,
  });

  const [requestMetrics] = useState(
    [10, 18, 13, 18, 11, 24].map((v, i) => ({
      completed: v,
      retried: v % 3 === 0 ? 6 : 2,
      failed: i == 1 || i == 3 ? 3 : 1,
      ts: new Date(`2024-03-10 14:${i}:00`).getTime(),
    }))
  );
  const [executionMetrics] = useState(
    [6, 8, 9, 7, 18, 19, 10, 8, 7, 8, 18, 8, 10].map((v, i) => ({
      p98: 2,
      p98_value: v + 5,
      p90: 3,
      p90_value: v + 3,
      p70: v,
      p70_value: v,
      ts: new Date(`2024-03-10 14:${i}:00`).getTime(),
    }))
  );

  return (
    <Stack alignItems="center" position="relative" maxWidth="100%" width="100%">
      <Stack
        alignItems={{ xs: "center", lg: "stretch" }}
        direction={{ xs: "column", lg: "row" }}
        mt={6}
        spacing={3}
      >
        <HeadlineBox title="Usage Analytics">
          Real-time usage analytics for your endpoint with metrics on completed
          and failed requests. Useful for endpoints that have fluctuating usage
          profiles throughout the day.
        </HeadlineBox>

        <Stack
          alignItems="start"
          border="1px solid #1E293B"
          borderRadius={2.4}
          height={495}
          maxWidth={{
            xs: 1204,
            lg: 781,
          }}
          overflow="hidden"
          position="relative"
          width={{ xs: "100%", lg: 781 }}
          sx={{
            background:
              "radial-gradient(99.75% 99.75% at 50% 99.75%, #1E293B 0%, rgba(15, 23, 42, 0.0001) 100%)",
          }}
        >
          <GraphLine sx={{ top: { xs: 230, sm: 170 } }} />
          <GraphLine sx={{ top: { xs: 270, sm: 230 } }} />
          <GraphLine sx={{ top: { xs: 310, sm: 290 } }} />
          <GraphLine sx={{ top: 350 }} />
          <Legend
            alignSelf="center"
            border={{ xs: "", sm: "1px solid #1E293B" }}
            borderRadius={2.4}
            boxShadow="0px 4px 100px rgba(0, 0, 0, 0.16)"
            height={{ xs: "auto", sm: 110 }}
            mt={{ xs: 1, sm: 8 }}
            pl={4}
            pt={2.8}
            width={{ xs: "100%", sm: 475 }}
            sx={{
              backgropFilter: "blur(50px)",
              background: {
                xs: "",
                sm: "radial-gradient(99.75% 99.75% at 50% 99.75%, #1E293B 0%, rgba(15, 23, 42, 0.0001) 100%)",
              },
            }}
            title="Active"
            subTitle="Requests"
            labels={[
              { color: "green", title: "Completed", value: "2,277" },
              { color: "purple", title: "Retried", value: "21" },
              { color: "orange", title: "Failed", value: "9" },
            ]}
          />
          <Box
            bottom={{ xs: 22, sm: 58 }}
            height={{ xs: 314, sm: 314 }}
            maxWidth="100%"
            ref={requestsRef}
            width="100%"
          >
            <LineChart
              colors={["#008C62", "#824edc", "#FF8A00"]}
              data={requestMetrics}
              hidden={!requestsInView}
              lines={["completed", "retried", "failed"]}
              linesAlias={{
                completed: "Completed",
                retried: "Retried",
                failed: "Failed",
              }}
              syncId="scale"
            />
          </Box>
        </Stack>
      </Stack>

      <Stack
        direction={{ xs: "column-reverse", lg: "row" }}
        mt={6}
        overflow="hidden"
        position="relative"
        spacing={3}
      >
        <Stack
          alignItems="start"
          border="1px solid #1E293B"
          borderRadius={2.4}
          height={{ xs: 550, sm: 495 }}
          maxWidth={{
            xs: 1204,
            lg: 781,
          }}
          overflow="hidden"
          position="relative"
          width={{ xs: "100%", lg: 781 }}
          sx={{
            background:
              "radial-gradient(99.75% 99.75% at 50% 99.75%, #1E293B 0%, rgba(15, 23, 42, 0.0001) 100%)",
          }}
        >
          <Box
            borderRadius={100}
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25), 0px 1.20311px 1.20311px rgba(77, 148, 255, 0.25), inset 0px -9.02332px 15.0389px #ECD3F7, inset 0px -30.0777px 30.0777px #BD00FF"
            height={334}
            left={210}
            position="absolute"
            sx={{
              background:
                "radial-gradient(85.83% 85.83% at 50% 14.17%, #5D29F0 0%, rgba(51, 0, 255, 0.39) 28%, rgba(77, 148, 255, 0.25) 100%)",
              filter: "blur(200px)",
            }}
            top={-190}
            width={334}
            zIndex={-2}
          />
          <Stack height="100%" justifyContent="space-between" width="100%">
            <Legend
              mr={0.5}
              ml={3.5}
              mt={3}
              title="Execution Time"
              labels={[
                { title: "Total", value: "1,420s" },
                {
                  background: "#979DFF",
                  title: "P70",
                  value: "8s",
                },
                { background: "#5B5BF5", title: "P90", value: "19s" },
                { background: "#BE7DF7", title: "P98", value: "22s" },
              ]}
              zIndex={99}
            />
            <Box
              bottom={{ xs: 22, sm: 58 }}
              height={{ xs: 314, sm: 314 }}
              maxWidth="100%"
              ref={workersRef}
              width="100%"
            >
              <ComposedChart
                colors={["#979DFF", "#5B5BF5", "#BE7DF7"]}
                data={executionMetrics}
                bars={["p70", "p90", "p98"]}
                barsAlias={{ p98: "P98", p90: "P90", p70: "P70" }}
                hidden={!workersInView}
                maxBarSize={18}
                syncId="scale"
                tickSuffix="s"
                valueSuffix
              />
            </Box>
          </Stack>
        </Stack>

        <HeadlineBox title="Execution Time Analytics">
          Debug your endpoints with detailed metrics on execution time. Useful
          for hosting models that have varying execution times, like large
          language models. You can also monitor delay time, cold start time,
          cold start count, GPU utilization, and more.
        </HeadlineBox>
      </Stack>

      <Stack
        direction={{ xs: "column", lg: "row" }}
        justifyContent="center"
        mt={6}
        position="relative"
      >
        <Box
          borderRadius={100}
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25), 0px 1.20311px 1.20311px rgba(77, 148, 255, 0.25), inset 0px -9.02332px 15.0389px #ECD3F7, inset 0px -30.0777px 30.0777px #BD00FF"
          height={1502}
          position="absolute"
          top={-354}
          width={{ xs: "100%", sm: 495 }}
          sx={{
            background:
              "radial-gradient(85.83% 85.83% at 50% 14.17%, #6366F1 0%, rgba(128, 0, 255, 0.39) 28%, rgba(77, 148, 255, 0.25) 100%)",
            filter: "blur(200px)",
            opacity: 0.65,
            transform: "rotate(-90deg)",
          }}
          zIndex={-1}
        />
        <HeadlineBox title="Real-Time Logs">
          Get descriptive, real-time logs to show you exactly what&apos;s
          happening across your active and flex GPU workers at all times.
        </HeadlineBox>
        <Stack
          alignItems="center"
          border="1px solid #1E293B"
          borderRadius={2.4}
          height={495}
          maxWidth={{
            xs: 1204,
            lg: 781,
          }}
          overflow="hidden"
          ml={{ xs: 0, lg: 3 }}
          mt={{ xs: 3, lg: 0 }}
          position="relative"
          width={{ xs: "100%", lg: 781 }}
          sx={{
            background:
              "radial-gradient(99.75% 99.75% at 50% 99.75%, #1E293B 0%, rgba(15, 23, 42, 0.0001) 100%)",
          }}
        >
          <ShellBlock
            height="auto"
            light
            minWidth={{ xs: "100%", sm: 540 }}
            mt={{ xs: 0, sm: 9 }}
            position="absolute"
            title="worker logs -- zsh"
          >
            <Typography
              color="#94A3B8"
              fontFamily="monospace"
              fontSize={14}
              ml={3}
              my={2}
            >
              <Logs add={0} id="db7c79" minute={56} />
              <br />
              <Logs add={3} id="ea1r14" minute={57} />
              <br />
              <Logs add={6} id="gn3a25" minute={58} />
            </Typography>
          </ShellBlock>
        </Stack>
      </Stack>
    </Stack>
  );
}

const ColorText = ({ children, color, width }) => (
  <span style={{ display: "inline-block", color, width: width }}>
    {children}
  </span>
);

const HeadlineBox = ({ children, title, ...props }) => (
  <Stack
    alignItems="start"
    border="1px solid #1E293B"
    borderRadius={2.4}
    maxWidth={{
      xs: 1204,
      lg: 781,
    }}
    pb={10}
    pt={3}
    px={3.5}
    width={{ xs: "100%", lg: 395 }}
    sx={{
      background:
        "radial-gradient(99.75% 99.75% at 50% 99.75%, #1E293B 0%, rgba(15, 23, 42, 0.0001) 100%)",
    }}
    {...props}
  >
    <Typography
      fontSize={18}
      letterSpacing="-0.02em"
      sx={{
        background:
          "linear-gradient(0deg, rgba(248, 250, 252, 0.64) 8.27%, #F8FAFC 57.24%, rgba(248, 250, 252, 0.64) 96.6%)",
        backgroundClip: "text",
        textFillColor: "transparent",
      }}
    >
      {title}
    </Typography>
    <Typography color="#94A3B8" fontSize={14} letterSpacing="-0.25px" mt={0.5}>
      {children}
    </Typography>

    <ButtonLink
      href="/console/serverless"
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
      See the console <KeyboardArrowRightIcon sx={{ fontSize: 20, ml: 0.6 }} />
    </ButtonLink>
  </Stack>
);

const GraphLine = ({ sx }) => (
  <Box
    bgcolor="#E5E7EB"
    height="1px"
    left={0}
    position="absolute"
    width="100%"
    zIndex={-1}
    sx={{ opacity: 0.14, ...sx }}
  />
);

const Legend = ({ labels, title, subTitle, ...props }) => (
  <Stack {...props}>
    <Stack alignItems="center" direction="row">
      <Typography
        fontSize={20}
        letterSpacing="-0.02em"
        mr={0.6}
        sx={{
          background:
            "linear-gradient(313deg, rgba(248, 250, 252, 0.64) 8.27%, #F8FAFC 57.24%, rgba(248, 250, 252, 0.64) 96.6%)",
          backgroundClip: "text",
          opacity: 0.4,
          textFillColor: "transparent",
        }}
      >
        {title}
      </Typography>
      {subTitle && (
        <Typography
          fontSize={20}
          letterSpacing="-0.02em"
          sx={{
            background:
              "linear-gradient(313deg, rgba(248, 250, 252, 0.64) 8.27%, #F8FAFC 57.24%, rgba(248, 250, 252, 0.64) 96.6%)",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          {subTitle}
        </Typography>
      )}
    </Stack>

    <Stack
      alignItems={{ xs: "start", sm: "center" }}
      columnGap={{ xs: 2, sm: 4 }}
      direction="row"
      flexWrap="wrap"
      mt={{ xs: 2, sm: 0.6 }}
      rowGap={1}
    >
      {labels.map((v) => (
        <LegendLabel
          background={v.background}
          color={v.color}
          key={v.title}
          title={v.title}
          value={v.value}
        />
      ))}
    </Stack>
  </Stack>
);

const LegendLabel = ({ background, color, title, value }) => (
  <Stack alignItems="center" direction="row">
    <Typography color="#94A3B8" fontSize={16} letterSpacing="-0.25px">
      {title}:
    </Typography>
    {(color || background) && (
      <Stack
        alignItems="center"
        border="1px solid rgba(255, 255, 255, 0.3)"
        borderRadius={100}
        boxShadow="0px 3.9px 7.8px rgba(0, 162, 94, 0.51)"
        height={8}
        justifyContent="center"
        mx={0.8}
        sx={{
          background: background
            ? background
            : color == "orange"
            ? "linear-gradient(0deg, rgba(255, 109, 62, 0.45), rgba(255, 109, 62, 0.45)), linear-gradient(180deg, #C61800 0%, #FF8A00 100%)"
            : color == "lightpurple"
            ? "linear-gradient(0deg, rgba(83, 162, 255, 0.53), rgba(83, 162, 255, 0.53)), linear-gradient(180deg, #FF9153 0%, #FF007A 100%)"
            : color == "blue"
            ? "linear-gradient(0deg, rgba(91, 91, 224555, 1), rgba(91, 91, 245, .8)), linear-gradient(180deg, #fff 0%, #fff 100%)"
            : color == "lightblue"
            ? "linear-gradient(0deg, rgba(151, 157, 255, 1), rgba(151, 157, 255, .8)), linear-gradient(180deg, #fff 0%, #fff 100%)"
            : color == "purple"
            ? "linear-gradient(0deg, rgba(207, 185, 255, 0.45), rgba(207, 185, 255, 0.45)), linear-gradient(180deg, #538DFF 0%, #8F00FF 100%)"
            : "linear-gradient(0deg, rgba(0, 107, 68, 0.45), rgba(0, 107, 68, 0.45)), linear-gradient(180deg, #53FFCB 0%, #008C62 100%)",
        }}
        width={8}
      />
    )}
    <Typography
      color="#fff"
      fontSize={15}
      letterSpacing="-0.25px"
      ml={color || background ? 0 : 0.6}
    >
      {value}
    </Typography>
  </Stack>
);

const Size10 = (props) => <span style={{ fontSize: 10 }} {...props} />;
const Size14 = (props) => <span style={{ fontSize: 14 }} {...props} />;
const Logs = ({ add, id, minute }) => (
  <>
    2024-03-15T19:{minute}:00.8264895Z{" "}
    <ColorText color="#58FFD7">INFO</ColorText> |{" "}
    <ColorText color="#fff">
      Started job <ColorText color="#9DC2F6">{id}</ColorText>
    </ColorText>
    <br />
    2024-03-15T19:{minute}:03.2667597Z
    <br />
    <ColorText color="#fff" width={35}>
      0%
    </ColorText>{" "}
    <Size10>| |</Size10> <Size14>0/28 [00:00&lt;?, ?it/s]</Size14>
    <br />
    <ColorText color="#fff" width={35}>
      {12 + add}%
    </ColorText>{" "}
    <Size10>|██ |</Size10> <Size14>4/28 [00:00&lt;00:01, 12.06it/s]</Size14>
    <br />
    <ColorText color="#fff" width={35}>
      {38 + add}%
    </ColorText>{" "}
    <Size10>|████ |</Size10> <Size14>12/28 [00:00&lt;00:01, 12.14it/s]</Size14>
    <br />
    <ColorText color="#fff" width={35}>
      {77 + add}%
    </ColorText>{" "}
    <Size10>|████████ |</Size10>{" "}
    <Size14>22/28 [00:01&lt;00:00, 12.14it/s]</Size14>
    <br />
    <ColorText color="#fff" width={35}>
      100%
    </ColorText>{" "}
    <Size10>|██████████|</Size10>{" "}
    <Size14>28/28 [00:02&lt;00:00, 12.13it/s]</Size14>
    <br />
    2024-03-15T19:{minute}:04.7438407Z{" "}
    <ColorText color="#58FFD7">INFO</ColorText> |{" "}
    <ColorText color="#fff">
      Completed job <ColorText color="#9DC2F6">{id}</ColorText> in 2.9s
    </ColorText>
  </>
);
