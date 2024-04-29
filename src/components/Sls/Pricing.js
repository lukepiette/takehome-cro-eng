import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { LightThemeProvider } from "@components/ThemeProvider";
import { useMemo, useState } from "react";
import ButtonLink from "@components/ButtonLink";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Pricing() {
  return (
    <Stack alignItems="center" position="relative" mt={25} pb={7} width="100%">
      <Box
        bgcolor="#3D3DF2"
        borderRadius={2.4}
        height={491}
        position="absolute"
        top={-101}
        width={233}
        zIndex={-1}
        sx={{
          filter: "blur(68px)",
          opacity: "0.16",
          transform: "rotate(90deg)",
        }}
      />
      <Box
        bgcolor="#3D3DF2"
        bottom={0}
        height={2117}
        position="absolute"
        width="100%"
        zIndex={-1}
        sx={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.48) 14.23%, #000000 42.26%, #000824 69.39%, #7F52FF 100%)",
        }}
      />

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
          Cost effective
        </Box>{" "}
        for every inference workload
      </Typography>

      <Typography
        align="center"
        color="#94A3B8"
        fontSize={16}
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
        fontSize={16}
        letterSpacing={-0.25}
        mx={3}
      >
        Create active workers and configure queue delay for even more savings.
      </Typography>

      <Stack direction="row" my={3} spacing={1.8}>
        <ButtonLink
          href="/console/serverless"
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
          Get Started <KeyboardArrowRightIcon sx={{ fontSize: 20, ml: 0.6 }} />
        </ButtonLink>
        <ButtonLink
          href="https://meetings.runpod.io/meetings/runpod/firstconnect"
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
          }}
        >
          Book a Call <KeyboardArrowRightIcon sx={{ fontSize: 20, ml: 0.6 }} />
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
          direction="row"
          flexWrap="wrap"
          gap={1.8}
          justifyContent={{ xs: "center", sm: "start" }}
          width={{ xs: "100%", sm: 645 }}
        >
          <GpuBox
            name="A100"
            priceActive={0.00078}
            priceFlex={0.0013}
            vram={80}
          >
            Extremely performant GPUs, yet still very cost effective for running
            any machine learning model.
          </GpuBox>
          <GpuBox
            name="H100"
            priceActive={0.0015}
            priceFlex={0.0025}
            pro
            vram={80}
          >
            Our most powerful GPUs. Most useful when maximizing inference
            throughput is critical.
          </GpuBox>
          <GpuBox
            name="A6000"
            priceActive={0.00029}
            priceFlex={0.00048}
            vram={48}
          >
            A cost-effect option for running diffusion models, LoRAs, whisper,
            and many others. Less effective for large language models.
          </GpuBox>
          <GpuBox
            name="L40"
            priceActive={0.00041}
            priceFlex={0.00069}
            pro
            vram={48}
          >
            Useful for when having high inference throughput on LLMs like Llama
            3 7B and medium sized models like Yi 34B.
          </GpuBox>
          <GpuBox
            name="A500"
            priceActive={0.00016}
            priceFlex={0.00026}
            vram={24}
          >
            Great for small-to-medium sized models with consistent workloads,
            lower throughput than 24GB PRO.
          </GpuBox>
          <GpuBox
            name="4090"
            priceActive={0.00026}
            priceFlex={0.00044}
            pro
            vram={24}
          >
            Extremely high throughput for small to medium sized models.Great for
            running Llama3 8B and Mistral 7B.
          </GpuBox>
          <GpuBox
            name="A4000"
            priceActive={0.00012}
            priceFlex={0.0002}
            vram={16}
          >
            The most cost-effective option for running inference on small models
            like LoRAs, diffusion models, and whisper.
          </GpuBox>
        </Stack>

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
              fontSize={16}
              letterSpacing="-0.25px"
              mt={0.5}
              mr={3}
            >
              Update your endpoint&apos;s region in two clicks. Scale up to 9
              regions at a time. Global automated failover is supported
              out-of-the-box, so you won&apos;t have to worry about GPU errors
              interrupting your inference workloads.
            </Typography>

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

          <Box mb={{ xs: 7, lg: 0 }}>
            <PricingCalculator />
            <Typography
              color="#F9FAFB"
              fontSize={12}
              letterSpacing="-0.02em"
              mt={2}
              sx={{ opacity: 0.7 }}
              width={300}
            >
              1. Cost estimation includes 50% of the requests using active price
              &amp; running into 1s cold-start.
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}

const GpuBox = ({ children, name, priceActive, priceFlex, pro, vram }) => (
  <Stack
    border="1px solid rgba(249, 250, 251, 0.08)"
    borderRadius={1.2}
    boxShadow="0px 4px 100px rgba(0, 0, 0, 0.16)"
    justifyContent="space-between"
    p={2.2}
    width={314}
    sx={{
      backdropFilter: "blur(50px)",
      background:
        "linear-gradient(270deg, rgba(51, 65, 85, 0.0001) 0%, rgba(51, 65, 85, 0.32) 52.62%, rgba(51, 65, 85, 0.0001) 100%)",
    }}
  >
    <Stack spacing={1}>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="start"
        spacing={1.6}
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
      <Typography color="#94A3B8" fontSize={14} letterSpacing="-0.02em">
        {children}
      </Typography>
    </Stack>
    <Stack
      alignItems="center"
      direction="row"
      justifyContent="space-between"
      mt={1.4}
    >
      <Stack alignItems="center" direction="row">
        <Typography color="#F9FAFB" fontSize={14}>
          Flex
        </Typography>
        <Typography color="rgba(249, 250, 251, 0.48)" fontSize={14} ml={0.7}>
          &#36;{priceFlex}/s
        </Typography>
      </Stack>
      <Stack alignItems="center" direction="row">
        <Typography color="#F9FAFB" fontSize={14}>
          Active
        </Typography>
        <Typography color="rgba(249, 250, 251, 0.48)" fontSize={14} ml={0.7}>
          &#36;{priceActive}/s
        </Typography>
      </Stack>
    </Stack>
  </Stack>
);

const gpuFlexPrice = {
  16: 0.0002,
  24: 0.00026,
  24.9: 0.00044,
  48: 0.00048,
  48.9: 0.00069,
  80: 0.0013,
  80.9: 0.0025,
};
const gpuActivePrice = {
  16: 0.00012,
  24: 0.00016,
  24.9: 0.00026,
  48: 0.00029,
  48.9: 0.00041,
  80: 0.00078,
  80.9: 0.0015,
};
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
    const baseFlex = gpuFlexPrice[vram] * requests * executionTime * 0.5;
    const baseReserved = gpuActivePrice[vram] * requests * executionTime * 0.5;
    const coldstart = gpuFlexPrice[vram] * requests * 0.5 * 1;
    const total = (baseFlex + baseReserved + coldstart) * 24 * 30;
    return baseFlex <= 0 ? 0 : total;
  }, [executionTime, requests, vram]);

  return (
    <Stack
      border="1px solid rgba(28, 28, 28, 0.2)"
      borderRadius={0.7}
      boxShadow="0px 0px 0px 4.3px rgba(255, 255, 255, 0.04), 0px 0px 0px 1.4px rgba(255, 255, 255, 0.08)"
      mt={{ xs: 0, lg: 5 }}
      overflow="hidden"
      sx={{
        backdropFilter: "blur(43.2192px)",
      }}
      width="fit-content"
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
          width={310}
        >
          {[80, 80.9, 48, 48.9, 0, 24, 24.9, 16].map((v, i) =>
            v === 0 ? (
              <Box flexBasis="100%" height={0} key={i} />
            ) : (
              <Button
                alignItems="center"
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
                  px: 1,
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
              width={320}
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
