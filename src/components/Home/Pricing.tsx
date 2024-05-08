/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ButtonLink from "@components/ButtonLink";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function FeatureCheck({ title }: { title: string }) {
  return (
    <Stack direction={"row"} gap={1} alignItems={"center"}>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          p: 0.7,
          borderRadius: 100,
          background: "rgb(70,70,70)",
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
  price,
  manufacturer = "nvidia",
  size,
}: {
  name: string;
  manufacturer?: "nvidia" | "amd";
  price?: number;
  size?: number;
}) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Stack
        sx={{
          p: 2,
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
              Starting at{" "}
              <span style={{ fontFamily: "monospace", color: "#fff" }}>
                ${price || "???"}/hr
              </span>
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
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography fontWeight={400} fontSize={18}>
            {name}
          </Typography>
          <Typography fontSize={14} fontWeight={400} color={"rgb(180,180,180)"}>
            {size || "???"}GB VRAM
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
}

export function Pricing({
  data,
}: {
  data: {
    gpu: {
      [key: string]: {
        securePrice: number;
        communityPrice: number;
        memoryInGb: number;
      };
    };
  };
}) {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack
      gap={4}
      alignItems={"center"}
      mt={16}
      position={"relative"}
      maxWidth={"75.5rem"}
    >
      <Typography
        fontSize={24}
        fontWeight={600}
        textAlign={"center"}
        lineHeight={"28px"}
        px={{
          xs: 3,
          md: 0,
        }}
      >
        <span style={{ color: "#bbb9ff" }}>Powerful</span> & Cost-Effective GPUs
        {!isSmall ? <br /> : " "}
        for Every Workload
      </Typography>
      <ButtonLink href="https://docs.runpod.io" variant="contained" gradient>
        See all GPUs
        <KeyboardArrowRightIcon
          sx={{
            fontSize: 20,
            ml: 0.6,
          }}
        />
      </ButtonLink>
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
          border: "1px solid rgba(249, 250, 251, 0.16)",
          background:
            "radial-gradient(99.75% 99.75% at 50% 99.75%, rgba(44, 0, 115, 0.79) 0%, rgba(15, 23, 42, 0.00) 67.22%), rgba(0, 0, 0, 0.04)",
          borderRadius: "24px",
          backdropFilter: "blur(64px)",
          padding: 3,
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
          direction={"row"}
          columnGap={12}
          rowGap={2}
          alignItems={"center"}
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
        </Stack>
        <Grid container spacing={2}>
          <GPUPrice
            name="A100"
            price={data?.gpu["NVIDIA A100 80GB PCIe"]?.securePrice}
            size={data?.gpu["NVIDIA A100 80GB PCIe"]?.memoryInGb}
            manufacturer="nvidia"
          />
          <GPUPrice
            name="L40"
            price={data?.gpu["NVIDIA L40"]?.securePrice}
            size={data?.gpu["NVIDIA L40"]?.memoryInGb}
            manufacturer="nvidia"
          />
          <GPUPrice
            name="RTX A6000"
            price={data?.gpu["NVIDIA RTX A6000"]?.securePrice}
            size={data?.gpu["NVIDIA RTX A6000"]?.memoryInGb}
            manufacturer="nvidia"
          />
          <GPUPrice
            name="RTX 4090"
            price={
              data?.gpu["NVIDIA GeForce RTX 4090"]?.securePrice ||
              data?.gpu["NVIDIA GeForce RTX 4090"]?.communityPrice
            }
            size={data?.gpu["NVIDIA GeForce RTX 4090"]?.memoryInGb}
            manufacturer="nvidia"
          />
          <GPUPrice
            name="RTX 3090"
            price={
              data?.gpu["NVIDIA GeForce RTX 3090"]?.securePrice ||
              data?.gpu["NVIDIA GeForce RTX 3090"]?.communityPrice
            }
            size={data?.gpu["NVIDIA GeForce RTX 3090"]?.memoryInGb}
            manufacturer="nvidia"
          />
          <GPUPrice
            name="RTX A4000"
            price={data?.gpu["NVIDIA RTX A4000"]?.securePrice}
            size={data?.gpu["NVIDIA RTX A4000"]?.memoryInGb}
            manufacturer="nvidia"
          />
        </Grid>
      </Stack>
    </Stack>
  );
}
