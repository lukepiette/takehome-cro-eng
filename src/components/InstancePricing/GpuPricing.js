/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import {
    Box,
    Grid,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
    Divider
  } from "@mui/material";
  import CheckIcon from "@mui/icons-material/Check";
  import ButtonLink from "@components/ButtonLink";
  import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
  import SignUp from "@components/SignUpButton"

  import { Gpu, GpuData } from "src/types/gpu";
  
  function FeatureCheck({ title }) {
    return (
      <Stack direction={"row"} gap={1} alignItems={"center"}>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            p: 0.7,
            borderRadius: 100,
            background: "rgba(255, 255, 255, 0.16)",
            opacity: 0.8,
            flexShrink: 0,
          }}
        >
          <CheckIcon sx={{ color: "white", fontSize: 15 }} />
        </Stack>
        <Typography sx={{ userSelect: "none" }}>{title}</Typography>
      </Stack>
    );
  }
  
  function GPUPrice({
    name,
    manufacturer = "nvidia",
    data,
  }) {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Stack
          sx={{
            p: 2,
            height: "100%",
            borderRadius: "12px",
            border: "1px rgba(233.61, 235.39, 238.30, 0.11) solid",
            boxShadow: "0px 4px 100px rgba(0, 0, 0, 0.25)",
            background:
              "linear-gradient(0deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 100%), radial-gradient(50.12% 50.12% at 100.49% 75.43%, rgba(28.15, 6.51, 63.46, 0.20) 0%, rgba(55.12, 0, 98.43, 0) 100%)",
          }}
          gap={0.5}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"start"}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                width: "70px",
                height: "30px",
              }}
            >
              <img
                src={
                  manufacturer === "nvidia"
                    ? `/static/images/companies/${manufacturer}.png`
                    : `/static/images/companies/${manufacturer}.svg`
                }
                alt={manufacturer}
                style={{
                  width: manufacturer === "nvidia" ? 70 : 50,
                  height: 70,
                  objectFit: "contain",
                  position: "absolute",
                }}
              />
            </Box>
  
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                background: "rgba(255, 255, 255, 0.02)",
                boxShadow: "0px -6px 24px 0px rgba(255, 255, 255, 0.24) inset",
                borderRadius: "0.25rem",
                padding: "0.25rem 0.5rem",
              }}
            >
              <Typography fontSize={11} color="rgb(180,180,180)">
                Starting from{" "}
                <span
                  style={{ fontFamily: "monospace", color: "#fff", fontSize: 12 }}
                >
                  $
                  {data?.communityCloud ? Math.min(
                    data?.communityPrice || 0,
                    data?.securePrice || 0
                  ).toFixed(2) || "???" : data?.securePrice || 0}
                </span>
                /hr
              </Typography>
            </Box>
          </Stack>
          <hr
            style={{
              margin: "0.25rem 0",
              border: "1px rgba(255,255,255,0.05) solid",
            }}
          />
          <Stack
            direction={"row"}
            alignItems={"end"}
            justifyContent={"space-between"}
          >
            <Stack gap={0.25}>
              <Typography fontWeight={600} fontSize={16} mb={0.5}>
                {name}
              </Typography>
              <Typography
                fontSize={14}
                fontWeight={400}
                color={"rgba(249, 250, 251, 0.64)"}
              >
                {data?.memoryInGb || "???"}GB VRAM
              </Typography>
              <Typography
                fontSize={14}
                fontWeight={400}
                color={"rgba(249, 250, 251, 0.64)"}
              >
                {data?.lowestPrice?.minMemory || "???"}GB RAM
              </Typography>
              <Typography
                fontSize={14}
                fontWeight={400}
                color={"rgba(249, 250, 251, 0.64)"}
              >
                {data?.lowestPrice?.minVcpu || "???"} vCPUs
              </Typography>
            </Stack>
            <Stack gap={1}>
              {data?.secureCloud && (
                <Stack alignItems={"end"}>
                  <Typography>${data?.securePrice?.toFixed(2)}/hr</Typography>
                  <Typography fontSize={12} sx={{ opacity: 0.5 }}>
                    Secure Cloud
                  </Typography>
                </Stack>
              )}
              {data?.communityCloud && (
                <Stack alignItems={"end"}>
                  <Typography>${data?.communityPrice?.toFixed(2)}/hr</Typography>
                  <Typography fontSize={12} sx={{ opacity: 0.5 }}>
                    Community Cloud
                  </Typography>
                </Stack>
              )}
            </Stack>
          </Stack>
        </Stack>
      </Grid>
    );
  }
  
  export default function GpuPricing({ data }) {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  
    return (
      <Stack
        alignItems={"center"}
        mt={16}
        position={"relative"}
        maxWidth={"75.5rem"}
      >
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
            GPU Cloud
          </Box>{" "}
          Pricing
        </Typography>
  
        <Typography
          align="center"
          color="#94A3B8"
          fontSize={14}
          letterSpacing={-0.25}
          mt={2.5}
          mx={3}
        >
          Powerful & cost-effective GPUs built to support any workload. 
        </Typography>
  
        <Typography
          align="center"
          color="#94A3B8"
          display={{ xs: "none", sm: "flex" }}
          fontSize={14}
          letterSpacing={-0.25}
          mx={3}
        >
          GPUs are billed by the minute. No fees for ingress/egress.
        </Typography>
  
        <Stack direction="row" my={3} spacing={1.8}>
          <SignUp text="Get started" url="/console/serverless" utmContent="serverless-pricing" />
        </Stack>
        
        <div
          style={{
            width: "230rem",
            height: "42.12575rem",
            position: "absolute",
            left: "-115rem",
            top: "20rem",
            transform: "rotate(169.39deg)",
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 65, 163, 0.25) 18.87%, rgba(4, 0, 16, 0.80) 52.12%, #170042 75%)",
            filter: "blur(64px)",
            zIndex: -1,
          }}
        />
        <Stack
          sx={{
            mt: 2,
            border: "1px solid rgba(249, 250, 251, 0.16)",
            background: {
              xs: "transparent",
              lg: "radial-gradient(99.75% 99.75% at 50% 99.75%, rgba(44, 0, 115, 0.79) 0%, rgba(15, 23, 42, 0.00) 67.22%), rgba(0, 0, 0, 0.04)",
            },
            borderRadius: "24px",
            backdropFilter: {
              xs: "blur(0px)",
              lg: "blur(24px)",
            },
            padding: {
              xs: 2,
              lg: 3,
            },
            borderBottomLeftRadius: {
              xs: 0,
              lg: "24px",
            },
            borderBottomRightRadius: {
              xs: 0,
              lg: "24px",
            },
            borderColor: {
              xs: "transparent",
              lg: "rgba(249, 250, 251, 0.16)",
            },
          }}
          gap={3}
        >
          <Stack gap={1}>
            <Typography fontWeight={500}>
              Thousands of GPUs across 30+ Regions
            </Typography>
            <Typography maxWidth={"30rem"}>
              Deploy any container on Secure Cloud. Public and private image repos
              are supported. Configure your environment the way you want.
            </Typography>
          </Stack>
          <Stack
            direction={{
              xs: "column",
              md: "row",
            }}
            columnGap={2}
            rowGap={2}
            alignItems={{
              xs: "start",
              md: "center",
            }}
            justifyContent={{
              xs: "start",
              md: "space-between",
            }}
            flexWrap={"wrap"}
          >
            <FeatureCheck title={"Zero fees for ingress/egress"} />
            <FeatureCheck title={"Global interoperability"} />
            <FeatureCheck title={"99.99% Uptime"} />
            <FeatureCheck title={"$0.05/GB/month Network Storage"} />
            <FeatureCheck title={"Multi-region Support"} />
          </Stack>

          <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
            <Divider style={{ flexGrow: 1, height: 2 }} />
            <Typography variant="h4" align="center" sx={{ mx: 2 }}>
                192GB VRAM
            </Typography>
            <Divider style={{ flexGrow: 1, height: 2 }} />
          </Box>       
          <Grid container spacing={2}>
            <GPUPrice
              name="MI300X"
              manufacturer="amd"
              // @ts-ignore
              data={data?.gpu["AMD Instinct MI300X OAM"]}
            />
          </Grid>

          <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
            <Divider style={{ flexGrow: 1, height: 2}} />
            <Typography variant="h4" align="center" sx={{ mx: 2 }}>
                80GB VRAM
            </Typography>
            <Divider style={{ flexGrow: 1, height: 2 }} />
          </Box>
          <Grid container spacing={2}>
            <GPUPrice
              name="H100 PCIe"
              manufacturer="nvidia"
              // @ts-ignore
              data={data?.gpu["NVIDIA H100 PCIe"]}
            />
            <GPUPrice
              name="H100 SXM"
              manufacturer="nvidia"
              // @ts-ignore
              data={data?.gpu["NVIDIA H100 80GB HBM3"]}
            />
            <GPUPrice
              name="A100 PCIe"
              manufacturer="nvidia"
              // @ts-ignore
              data={data?.gpu["NVIDIA A100 80GB PCIe"]}
            />
            <GPUPrice
              name="A100 SXM"
              manufacturer="nvidia"
              // @ts-ignore
              data={data?.gpu["NVIDIA A100-SXM4-80GB"]}
            />
          </Grid>

          <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
            <Divider style={{ flexGrow: 1, height: 2 }} />
            <Typography variant="h4" align="center" sx={{ mx: 2 }}>
                48GB VRAM
            </Typography>
            <Divider style={{ flexGrow: 1, height: 2 }} />
          </Box>
          <Grid container spacing={2}>
            <GPUPrice
              name="A40"
              manufacturer="nvidia"
              // @ts-ignore
              data={data?.gpu["NVIDIA A40"]}
            />
            <GPUPrice
              name="L40"
              manufacturer="nvidia"
              // @ts-ignore
              data={data?.gpu["NVIDIA L40"]}
            />
            <GPUPrice
              name="L40S"
              manufacturer="nvidia"
              // @ts-ignore
              data={data?.gpu["NVIDIA L40S"]}
            />
            <GPUPrice
              name="RTX A6000"
              manufacturer="nvidia"
              // @ts-ignore
              data={data?.gpu["NVIDIA RTX A6000"]}
            />
            <GPUPrice
              name="RTX 6000 Ada"
              manufacturer="nvidia"
              // @ts-ignore
              data={data?.gpu["NVIDIA RTX 6000 Ada Generation"]}
            />
          </Grid>
          
          <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
            <Divider style={{ flexGrow: 1, height: 2 }} />
            <Typography variant="h4" align="center" sx={{ mx: 2 }}>
                24GB VRAM AND UNDER
            </Typography>
            <Divider style={{ flexGrow: 1, height: 2 }} />
          </Box>
          <Grid container spacing={2}>
            <GPUPrice
              name="RTX A5000"
              manufacturer="nvidia"
              // @ts-ignore
              data={data?.gpu["NVIDIA RTX A5000"]}
            />
            <GPUPrice
              name="RTX 4090"
              manufacturer="nvidia"
              // @ts-ignore
              data={data?.gpu["NVIDIA GeForce RTX 4090"]}
            />
            <GPUPrice
              name="RTX 3090"
              manufacturer="nvidia"
              // @ts-ignore
              data={data?.gpu["NVIDIA GeForce RTX 3090"]}
            />
            <GPUPrice
              name="RTX 3090 Ti"
              manufacturer="nvidia"
              // @ts-ignore
              data={data?.gpu["NVIDIA GeForce RTX 3090 Ti"]}
            />
            <GPUPrice
              name="A30"
              manufacturer="nvidia"
              // @ts-ignore
              data={data?.gpu["NVIDIA A30"]}
            />
            <GPUPrice
              name="RTX A4500"
              manufacturer="nvidia"
              // @ts-ignore
              data={data?.gpu["NVIDIA RTX A4500"]}
            />
            <GPUPrice
              name="RTX A4000 Ada"
              manufacturer="nvidia"
              // @ts-ignore
              data={data?.gpu["NVIDIA RTX 4000 Ada Generation"]}
            />
            <GPUPrice
              name="RTX A4000"
              manufacturer="nvidia"
              // @ts-ignore
              data={data?.gpu["NVIDIA RTX A4000"]}
            />
            <GPUPrice
              name="RTX 3080"
              manufacturer="nvidia"
              // @ts-ignore
              data={data?.gpu["NVIDIA GeForce RTX 3080"]}
            />
            <GPUPrice
              name="RTX 3070"
              manufacturer="nvidia"
              // @ts-ignore
              data={data?.gpu["NVIDIA GeForce RTX 3070"]}
            />
          </Grid>

        </Stack>
      </Stack>
    );
  }
  