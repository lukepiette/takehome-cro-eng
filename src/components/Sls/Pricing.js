import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { LightThemeProvider } from "@components/ThemeProvider";
import { useMemo, useState } from "react";
import ButtonLink from "@components/ButtonLink";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SignUp from "@components/SignUpButton";

const gpuActivePrice = {
  16: 0.4,
  24: 0.48,
  24.9: 0.77,
  48: 0.85,
  48.9: 1.33,
  80: 2.17,
  80.9: 4.47,
};
const gpuFlexPrice = {
  16: 0.58,
  24: 0.69,
  24.9: 1.1,
  48: 1.22,
  48.9: 1.9,
  80: 2.72,
  80.9: 5.59,
};

export default function Pricing({ slim, title1, title2 }) {
  const [priceType, setPriceType] = useState("Second");

  const handlePriceType = (event, newType) => {
    if (newType) setPriceType(newType);
  };

  return (
    <Stack alignItems="center" position="relative" mt={25} pb={7} width="100%">
      <Typography
        align="center"
        color="#fff"
        fontSize={{ xs: 34, sm: 44, md: 48 }}
        letterSpacing="-0.03em"
        lineHeight={1}
        mt={2}
        variant="h2"
      >
        <Box
          display="inline-flex"
          sx={{
            background: "linear-gradient(90deg, #CAD9FF 0%, #7F39FF 250%)",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          {title1}
        </Box>{" "}
        {title2}
      </Typography>

      <Typography
        align="center"
        color="#94A3B8"
        fontSize={14}
        letterSpacing={-0.25}
        mt={2.5}
        mx={3}
      >
        Save 15% over other Serverless cloud providers on flex workers alone.
      </Typography>

      <Typography
        align="center"
        color="#94A3B8"
        display={{ xs: "none", sm: "flex" }}
        fontSize={14}
        letterSpacing={-0.25}
        mx={3}
      >
        Create active workers and configure queue delay for even more savings.
      </Typography>

      <Stack direction="row" my={3} spacing={1.8}>
        {/* <SignUp
          text="Get started"
          url="/console/serverless"
          utmContent="serverless-pricing"
        /> */}

        <ButtonLink
          href="https://meetings.hubspot.com/margarita-melkoumov/runpod-team-discovery-call-"
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
            fontSize: "22px",
            padding: "24px 30px",
            "& .MuiButton-startIcon": {
              marginRight: "8px",
            },
            "& .MuiSvgIcon-root": {
              fontSize: "26px",
            },
          }}
        >
          Book a call <KeyboardArrowRightIcon sx={{ fontSize: 20, ml: 0.6 }} />
        </ButtonLink>
      </Stack>

      <Stack
        alignItems={{ xs: "center", lg: "start" }}
        direction={{ xs: "column-reverse", lg: "row" }}
        justifyContent="space-between"
        maxWidth={1200}
        mt={10}
        width="100%"
      >
        <Stack
          alignItems="center"
          direction="column"
          justifyContent={{ xs: "center", sm: slim ? "center" : "start" }}
          width={{ xs: "100%", sm: slim ? "100%" : 645 }}
        >
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="space-between"
            maxWidth={650}
            pb={2}
            px={2.2}
            width="100%"
          >
            <Stack alignItems="center" direction="row" spacing={1.2}>
              <Typography
                fontSize={16}
                letterSpacing="-0.02em"
                sx={{
                  background:
                    "linear-gradient(0deg, rgba(248, 250, 252, 0.64) 8.27%, #F8FAFC 57.24%, rgba(248, 250, 252, 0.64) 96.6%)",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
              >
                GPU Price Per
              </Typography>
              <ToggleButtonGroup
                color="primary"
                value={priceType}
                exclusive
                onChange={handlePriceType}
              >
                {["Second", "Hour"].map((v) => (
                  <ToggleButton
                    key={v}
                    sx={{
                      background:
                        priceType != v
                          ? undefined
                          : "radial-gradient(92.09% 85.42% at 86.3% 87.5%, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0) 86.18%), radial-gradient(65.28% 65.28% at 26.39% 20.83%, rgba(255, 255, 255, 0.0472) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%), #5D29F0",
                      borderRadius: 0.8,
                      boxShadow:
                        "0px 3px 0px rgba(0, 0, 0, 0.5), inset -3px -4px 7px rgba(9, 0, 114, 0.24)",
                      fontWeight: 400,
                      px: 1,
                      py: 0.2,
                      textTransform: "none",
                    }}
                    value={v}
                  >
                    {v}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Stack>

            <Stack
              direction="row"
              gap={priceType == "Second" ? 7 : 4}
              justifyContent="center"
              pr={priceType == "Second" ? 1.4 : 0}
            >
              <Typography color="#fff" fontSize={16} letterSpacing="-0.02em">
                Flex
              </Typography>
              <Typography
                align="right"
                color="#fff"
                fontSize={16}
                letterSpacing="-0.02em"
              >
                Active
              </Typography>
            </Stack>
          </Stack>
          <GpuBox
            name="A100"
            perSecond={priceType == "Second"}
            priceActive={gpuActivePrice[80]}
            priceFlex={gpuFlexPrice[80]}
            vram={80}
          >
            High throughput GPU, yet still very cost-effective.
          </GpuBox>
          <GpuBox
            name="H100"
            perSecond={priceType == "Second"}
            priceActive={gpuActivePrice[80.9]}
            priceFlex={gpuFlexPrice[80.9]}
            pro
            vram={80}
          >
            Extreme throughput for big models.
          </GpuBox>
          <GpuBox
            name="A6000"
            perSecond={priceType == "Second"}
            priceActive={gpuActivePrice[48]}
            priceFlex={gpuFlexPrice[48]}
            vram={48}
          >
            A cost-effective option for running big models.
          </GpuBox>
          <GpuBox
            name="L40"
            perSecond={priceType == "Second"}
            priceActive={gpuActivePrice[48.9]}
            priceFlex={gpuFlexPrice[48.9]}
            pro
            vram={48}
          >
            Extreme inference throughput on LLMs like Llama 3 7B.
          </GpuBox>
          <GpuBox
            name="A5000"
            perSecond={priceType == "Second"}
            priceActive={gpuActivePrice[24]}
            priceFlex={gpuFlexPrice[24]}
            vram={24}
          >
            Great for small-to-medium sized inference workloads.
          </GpuBox>
          <GpuBox
            name="4090"
            perSecond={priceType == "Second"}
            priceActive={gpuActivePrice[24.9]}
            priceFlex={gpuFlexPrice[24.9]}
            pro
            vram={24}
          >
            Extreme throughput for small-to-medium models.
          </GpuBox>
          <GpuBox
            last
            name="A4000"
            perSecond={priceType == "Second"}
            priceActive={gpuActivePrice[16]}
            priceFlex={gpuFlexPrice[16]}
            vram={16}
          >
            The most cost-effective for small models.
          </GpuBox>
        </Stack>

        {!slim && (
          <Stack
            alignItems={{ xs: "center", md: "start" }}
            direction={{ xs: "column-reverse", md: "row", lg: "column" }}
            px={{ xs: 3, sm: 10, lg: 0 }}
            width={{ xs: "100%", lg: 490 }}
          >
            <Box mb={{ xs: 10, lg: 0 }}>
              <Typography
                fontSize={20}
                letterSpacing="-0.02em"
                sx={{
                  background:
                    "linear-gradient(0deg, rgba(248, 250, 252, 0.64) 8.27%, #F8FAFC 57.24%, rgba(248, 250, 252, 0.64) 96.6%)",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
              >
                Thousands of GPUs across 9 Regions
              </Typography>
              <Typography
                color="#94A3B8"
                fontSize={14}
                letterSpacing="-0.25px"
                mt={0.5}
                mr={3}
              >
                Update your endpoint&apos;s region in two clicks. Scale up to 9
                regions at a time. Global automated failover is supported
                out-of-the-box, so you won&apos;t have to worry about GPU errors
                interrupting your ML inference.
              </Typography>

              <Typography
                fontSize={20}
                mt={5}
                letterSpacing="-0.02em"
                sx={{
                  background:
                    "linear-gradient(0deg, rgba(248, 250, 252, 0.64) 8.27%, #F8FAFC 57.24%, rgba(248, 250, 252, 0.64) 96.6%)",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
              >
                Pending Certifications
              </Typography>
              <Typography
                color="#94A3B8"
                fontSize={14}
                letterSpacing="-0.25px"
                mt={0.5}
                mr={3}
              >
                Although many of our data center partners have these compliance
                certifications, RunPod is in the process of getting SOC 2, ISO
                27001, and HIPAA. We aim to have all three by early Q3, 2024.
              </Typography>
              <Stack spacing={1} mt={3} direction={{ xs: "column", sm: "row" }}>
                <Box
                  component="img"
                  sx={{
                    top: { xs: 0, sm: 0 },
                    right: 0,
                    bottom: 0,
                    left: 0,
                    width: 100,
                    height: 100,
                  }}
                  alt="gpu background"
                  src="/static/images/soc2-light.webp"
                />
                <Box
                  component="img"
                  sx={{
                    top: { xs: 0, sm: 0 },
                    right: 0,
                    bottom: 0,
                    left: 0,
                    width: 100,
                    height: 100,
                  }}
                  alt="gpu background"
                  src="/static/images/iso27001-light.webp"
                />
                <Box
                  component="img"
                  sx={{
                    top: { xs: 0, sm: 0 },
                    right: 0,
                    bottom: 0,
                    left: 0,
                    width: 100,
                    height: 100,
                  }}
                  alt="gpu background"
                  src="/static/images/hipaa-light.webp"
                />
              </Stack>

              <RegionsBox
                label="North America"
                mt={5}
                regions={["UR-OR-1", "CA-MTL-1", "CA-MTL-2"]}
              />
              <RegionsBox
                label="European Union"
                regions={["EUR-IS-1", "EUR-IS-2", "EUR-NO-1"]}
              />
              <RegionsBox
                label="Europe"
                regions={["EU-NL-1", "EU-RO-1", "EU-SE-1"]}
              />
            </Box>

            <Box mb={{ xs: 7, lg: 0 }} width="100%">
              <PricingCalculator />
              <Typography
                color="#F9FAFB"
                fontSize={12}
                letterSpacing="-0.02em"
                mt={2}
                sx={{ opacity: 0.7 }}
                width={300}
              >
                1. Cost estimation includes 50% of the requests using active
                price &amp; running into 1s cold-start.
              </Typography>
            </Box>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}

const GpuBox = ({
  children,
  last,
  name,
  perSecond,
  priceActive,
  priceFlex,
  pro,
  vram,
}) => (
  <Stack
    border="1px solid rgba(249, 250, 251, 0.08)"
    borderBottom={last ? "1px solid rgba(249, 250, 251, 0.08)" : "none"}
    borderRadius={1.2}
    boxShadow="0px 4px 100px rgba(0, 0, 0, 0.16)"
    justifyContent="space-between"
    maxWidth={650}
    px={2.2}
    py={1.6}
    width="100%"
    sx={{
      backdropFilter: "blur(50px)",
      background:
        "linear-gradient(270deg, rgba(51, 65, 85, 0.0001) 0%, rgba(51, 65, 85, 0.32) 52.62%, rgba(51, 65, 85, 0.0001) 100%)",
    }}
  >
    <Stack spacing={0.5}>
      <Stack alignItems="center" direction="row" justifyContent="space-between">
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="start"
          spacing={1.4}
        >
          <Typography color="#fff" fontSize={16} letterSpacing="-0.02em">
            {vram} GB
          </Typography>
          <Typography
            alignItems="center"
            borderLeft="1px solid rgba(249, 250, 251, 0.16)"
            display="flex"
            fontSize={16}
            fontWeight={600}
            height={16}
            letterSpacing="-0.02em"
            pl={1}
          >
            {name}
          </Typography>
          {pro && (
            <Typography
              bgcolor="#6A1AFF"
              borderRadius={0.3}
              boxShadow="inset -1.08048px -1.44064px 2.52112px rgba(9, 0, 114, 0.24)"
              color="#fff"
              fontSize={10}
              px={0.5}
              py={0.2}
            >
              PRO
            </Typography>
          )}
        </Stack>

        <Stack direction="row" gap={4} justifyContent="center">
          <Typography color="#F9FAFB" fontSize={14}>
            &#36;
            {(priceFlex / (perSecond ? 3600 : 1)).toFixed(perSecond ? 5 : 2)}
          </Typography>
          <Typography align="right" color="#F9FAFB" fontSize={14}>
            &#36;
            {(priceActive / (perSecond ? 3600 : 1)).toFixed(perSecond ? 5 : 2)}
          </Typography>
        </Stack>
      </Stack>

      <Typography color="#94A3B8" fontSize={13} letterSpacing="-0.02em">
        {children}
      </Typography>
    </Stack>
  </Stack>
);

const PricingCalculator = () => {
  const [executionTime, setExecutionTime] = useState(3);
  const [requests, setRequests] = useState(100);
  const [vram, setVram] = useState(24);
  const handleExecutionTime = (e) => {
    setExecutionTime(e.target.value);
  };
  const handleRequests = (e) => {
    setRequests(e.target.value);
  };
  const handleVram = (v) => () => setVram(v);

  const price = useMemo(() => {
    const coldStartTime = 1;
    const baseFlex =
      (gpuFlexPrice[vram] / 3600) * requests * 0.5 * executionTime;
    const baseActive =
      (gpuActivePrice[vram] / 3600) * requests * 0.5 * executionTime;
    const coldstart =
      (gpuFlexPrice[vram] / 3600) * requests * 0.5 * coldStartTime;
    const total = (baseFlex + baseActive + coldstart) * 24 * 30;
    return baseFlex <= 0 ? 0 : total;
  }, [executionTime, requests, vram]);

  return (
    <Stack
      border="1px solid rgba(28, 28, 28, 0.2)"
      borderRadius={0.7}
      boxShadow="0px 0px 0px 4.3px rgba(255, 255, 255, 0.04), 0px 0px 0px 1.4px rgba(255, 255, 255, 0.08)"
      maxWidth="100%"
      minWidth={{ xs: 0, sm: 380 }}
      mt={{ xs: 0, lg: 5 }}
      overflow="hidden"
      sx={{
        backdropFilter: "blur(43.2192px)",
      }}
      width={{ xs: "100%", lg: "98%" }}
    >
      <Stack
        borderBottom="0.4px solid rgba(255, 255, 255, 0.08)"
        gap={1.8}
        pb={2.5}
        pt={3}
        px={2.5}
        sx={{
          background:
            "radial-gradient(92.09% 85.42% at 86.3% 87.5%, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0) 86.18%) #050040",
        }}
      >
        <Typography
          color="#fff"
          fontSize={16}
          fontWeight={600}
          letterSpacing="-0.02em"
        >
          Serverless Pricing Calculator
        </Typography>
        <Stack
          alignItems="center"
          bgcolor="rgba(255, 255, 255, 0.1)"
          border="1px solid rgba(255, 255, 255, 0.1)"
          borderRadius={0.8}
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          p={1}
          rowGap={0.5}
        >
          {[80, 80.9, 48, 48.9, 0, 24, 24.9, 16].map((v, i) =>
            v === 0 ? (
              <Box flexBasis="100%" height={0} key={i} />
            ) : (
              <Button
                display="flex"
                key={i}
                onClick={handleVram(v)}
                sx={{
                  background:
                    v == vram ? "#fff !important" : "transparent !important",
                  borderLeft:
                    i > 0 && v !== 24
                      ? "1px solid rgba(255, 255, 255, 0.1)"
                      : "",
                  border: v == vram ? "0.5px solid rgba(0, 0, 0, 0.04)" : "",
                  borderRadius: v == vram ? 0.7 : 0,
                  boxShadow:
                    v == vram
                      ? "0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)"
                      : "",
                  color: v == vram ? "#1C1C1C" : "rgba(255, 255, 255, 0.8)",
                  fontSize: 12,
                  letterSpacing: "-0.02em",
                  px: { xs: 1, lg: 2 },
                  py: 0.4,
                }}
              >
                {Math.floor(v)}GB
                {Math.floor(v) !== v && (
                  <Typography
                    bgcolor="#6A1AFF"
                    borderRadius={0.3}
                    boxShadow="inset -1.08048px -1.44064px 2.52112px rgba(9, 0, 114, 0.24)"
                    color="#fff"
                    display="inline-flex"
                    fontSize={8}
                    ml={0.8}
                    px={0.4}
                    py={0.2}
                  >
                    PRO
                  </Typography>
                )}
              </Button>
            )
          )}
        </Stack>
      </Stack>

      <Stack
        sx={{
          background:
            "linear-gradient(180.11deg, #FFFFFF 24.54%, #FFFFFF 63.22%, #D3D2FF 108.47%)",
        }}
      >
        <Stack alignItems="end" my={3} width="100%">
          <LightThemeProvider>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={2}
              width="92%"
            >
              <Box width="40%">
                <TextField
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  label="Requests / Hour"
                  onChange={handleRequests}
                  type="number"
                  value={requests}
                  variant="standard"
                />
              </Box>
              <Box width="60%">
                <TextField
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <Typography color="rgba(34, 51, 84, 0.7)" fontSize={12}>
                          seconds
                        </Typography>
                      </InputAdornment>
                    ),
                  }}
                  label="Execution Time / Request"
                  onChange={handleExecutionTime}
                  type="number"
                  value={executionTime}
                  variant="standard"
                />
              </Box>
            </Stack>
          </LightThemeProvider>
        </Stack>

        <Typography
          align="right"
          color="#1C1C1C"
          fontSize={24}
          fontWeight={500}
          letterSpacing="-0.02em"
          mr={2.5}
          mt={1.5}
        >
          &#36;{" "}
          {price.toLocaleString("en-US", {
            maximumFractionDigits: 0,
          })}{" "}
          /mo
          <Typography
            color="#1C1C1C"
            display="inline-flex"
            fontSize={12}
            position="relative"
            top={-10}
          >
            1
          </Typography>
        </Typography>
        <Typography
          align="right"
          color="#616774"
          fontSize={14}
          letterSpacing="0.002em"
          mb={2}
          mr={2.8}
        >
          {(requests * 30 * 24).toLocaleString("en-US")} requests per month
        </Typography>
      </Stack>
    </Stack>
  );
};

const RegionsBox = ({ label, regions, ...props }) => (
  <Box mt={3} {...props}>
    <Typography
      fontSize={16}
      letterSpacing={-0.25}
      sx={{
        background:
          "linear-gradient(0deg, rgba(248, 250, 252, 0.64) 8.27%, #F8FAFC 57.24%, rgba(248, 250, 252, 0.64) 96.6%)",
        backgroundClip: "text",
        textFillColor: "transparent",
      }}
    >
      {label}
    </Typography>
    <Stack direction="row" gap={0.9} mt={1.5}>
      {regions.map((v) => (
        <Typography
          bgcolor="rgba(255, 255, 255, 0.1)"
          border="1px solid rgba(255, 255, 255, 0.1)"
          borderRadius={0.4}
          color="#fff"
          fontFamily="monospace"
          fontSize={12}
          key={v}
          px={0.9}
          py={0.5}
        >
          {v}
        </Typography>
      ))}
    </Stack>
  </Box>
);
