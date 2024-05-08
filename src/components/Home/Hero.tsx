/* eslint-disable @next/next/no-img-element */
import { Box, Stack, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TrustedBy from "./TrustedBy";
import ButtonLink from "@components/ButtonLink";
import Circle from "@assets/circle.svg";
import Cloud1 from "@assets/cloud1.svg";
import Cloud2 from "@assets/cloud2.svg";
import Cloud3 from "@assets/cloud3.svg";

export function Hero() {
  return (
    <Stack
      alignItems="center"
      sx={{
        width: "100%",
        position: "relative",
        paddingTop: "140px",
        minHeight: "1050px",
        alignItems: "center",
        background: `linear-gradient(180deg, #000000 0%, #0D0033 12.5%, #6134E2 36.91%, #7F52FF 43.5%, #dcdafc 60%, #684bbc 70%, #000000 75%)`,
        zIndex: 0,
      }}
      gap={{
        xs: 0,
        sm: 10,
      }}
    >
      <Cloud1
        style={{
          position: "absolute",
          top: "600px",
          transform: "translateX(-20rem)",
        }}
      />
      <Cloud2
        style={{
          position: "absolute",
          top: "600px",
          transform: "translateX(40rem)",
        }}
      />
      <Cloud3
        style={{
          position: "absolute",
          top: "650px",
          transform: "translateX(-36rem)",
        }}
      />
      <Stack
        sx={{
          width: "100%",
          alignItems: "center",
          position: "relative",
        }}
        gap={5}
        px={{
          xs: 3,
          md: 0,
        }}
      >
        <Typography
          fontWeight={600}
          fontSize={{
            xs: 80,
            lg: 162,
            xl: 192,
          }}
          lineHeight={{
            xs: "80px",
            md: "184.32px",
          }}
          sx={{
            width: "100%",
            letterSpacing: `-0.03em`,
            textAlign: `center`,
            background: `linear-gradient(120deg, rgba(255, 255, 255, 0.2) 32.07%, rgba(145, 78, 255, 0.3) 75.29%);`,
            WebkitBackgroundClip: `text`,
            WebkitTextFillColor: `transparent`,
            alignItems: "center",
          }}
        >
          All in one cloud.
        </Typography>
        <Typography fontSize={24} fontWeight={600} textAlign={"center"}>
          Develop, train, and scale AI
          <br />
          models with RunPod.
        </Typography>

        <Stack
          alignItems="end"
          direction="row"
          justifyContent="end"
          spacing={1}
          mb={10}
          width={"fit-content"}
        >
          <ButtonLink href="/console/signup" variant="contained" gradient>
            Get started
            <KeyboardArrowRightIcon
              sx={{
                fontSize: 20,
                ml: 0.6,
              }}
            />
          </ButtonLink>
          <ButtonLink href="https://docs.runpod.io" variant="outlined" gradient>
            Read the docs
            <KeyboardArrowRightIcon
              sx={{
                fontSize: 20,
                ml: 0.6,
              }}
            />
          </ButtonLink>
        </Stack>

        <Stack
          sx={{
            position: "absolute",
            zIndex: -1,
            top: "28rem",
          }}
        >
          <Circle
            style={{ zIndex: 0, shapeRendering: "geometricPrecision" }}
            shapeRendering="geometricPrecision"
          />
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #010101 100%)",
              width: "100%",
              height: "300px",
              zIndex: 1,
              position: "absolute",
              bottom: 0,
            }}
          />
        </Stack>
      </Stack>
      <Stack
        sx={{
          marginTop: "10rem",
          width: "100%",
          alignItems: "center",
          position: "relative",
          zIndex: 0,
        }}
      >
        <TrustedBy />
        <Stack
          sx={{
            width: "100%",
            position: "absolute",
            top: 0,
            transform: "translateY(-50%)",
            zIndex: 0,
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.64) 64.93%, #010101 100%)",
              width: "100%",
              height: "200px",
              zIndex: 1,
            }}
          />
          <div
            style={{
              background:
                "linear-gradient(180deg, #010101 0%, rgba(0, 0, 0, 0.64) 64.93%, rgba(0, 0, 0, 0) 100%)",
              width: "100%",
              height: "200px",
              zIndex: 1,
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
