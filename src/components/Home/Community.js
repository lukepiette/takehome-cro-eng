import { Box, Stack, Typography } from "@mui/material";
import { ReviewBox, reviews } from "@components/Sls/Community";
import { useState } from "react";
import ButtonLink from "@components/ButtonLink";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Community() {
  const startReviewIndex = Math.floor(reviews.length / 2);
  const [reviewIndex, setReviewIndex] = useState(startReviewIndex);

  const handleReviewIndex = (v) => () => {
    setReviewIndex((c) => {
      const newState = c + v;
      if (newState > reviews.length - 1 || newState < 0) return c;
      return newState;
    });
  };

  return (
    <Stack alignItems="center" position="relative" mt={15} mb={7} width="100%">
      <Box
        borderRadius={100}
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25), 0px 1.2px 1.2px rgba(77, 148, 255, 0.25), inset 0px -9px 15.0389px #ECD3F7, inset 0px -30px 30.0777px #BD00FF"
        height={527}
        position="absolute"
        top={100}
        width={538}
        sx={{
          background:
            "radial-gradient(85.83% 85.83% at 50% 14.17%, #6366F1 0%, #58009D 28%, rgba(77, 148, 255, 0.25) 100%)",
          filter: "blur(200px)",
          opacity: 0.4,
        }}
        zIndex={-10}
      />

      <Stack alignItems="center" mb={15} px={{ xs: 3, md: 0 }} width="100%">
        <Stack alignItems="start" maxWidth={"75.5rem"} width="100%">
          <Typography
            fontSize={{ xs: 30, sm: 38, md: 48 }}
            fontWeight={600}
            letterSpacing="-0.03em"
            lineHeight="110%"
            maxWidth="100%"
          >
            <Box
              display="inline-flex"
              sx={{
                background:
                  "linear-gradient(180deg, #C3BDFF 20%, #9E69FF 200%), #FFFFFF",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
            >
              Loved
            </Box>{" "}
            by the{" "}
            <Box
              display="inline-flex"
              sx={{
                background:
                  "linear-gradient(180deg, #C3BDFF 0%, #9E69FF 100%), #FFFFFF",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
            >
              developer
            </Box>{" "}
            community
          </Typography>
          <Typography
            color="#94A3B8"
            fontSize={16}
            letterSpacing={-0.25}
            maxWidth="100%"
            mt={1.5}
            width={380}
          >
            RunPod is built by developers, for developers. Our community of
            10,000+ developers on Discord is here for support while you get
            started.
          </Typography>
          <ButtonLink
            href="https://discord.gg/cUpRmau42V"
            variant="contained"
            sx={{
              background:
                "radial-gradient(92.09% 85.42% at 86.3% 87.5%, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0) 86.18%), radial-gradient(65.28% 65.28% at 26.39% 20.83%, rgba(255, 255, 255, 0.0472) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%), #5D29F0",
              borderRadius: 0.8,
              boxShadow:
                "0px 2px 0px rgba(0, 0, 0, 0.5), inset -3px -4px 7px rgba(9, 0, 114, 0.24)",
              fontWeight: 600,
              height: 40,
              mt: 3,
              pl: 2,
              pr: 1.4,
            }}
          >
            Join our Discord{" "}
            <KeyboardArrowRightIcon sx={{ fontSize: 20, ml: 0.6 }} />
          </ButtonLink>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        justifyContent="center"
        overflow="hidden"
        position="relative"
        maxWidth="100%"
      >
        {[-1, 1].map((v, i) => (
          <Stack
            display={{
              xs: "none",
              sm: "inherit",
            }}
            height="100%"
            key={i}
            left={v <= 0 ? 0 : "inherit"}
            position="absolute"
            right={v > 0 ? 0 : "inherit"}
            top={0}
            width={{ xs: 100, sm: 80, md: 220, lg: 368 }}
            sx={{
              background:
                "linear-gradient(270deg, #000000 0%, rgba(1, 1, 17, 0) 100%), linear-gradient(270deg, #000000 0%, rgba(1, 1, 17, 0) 100%)",
              transform: v < 0 ? "matrix(-1, 0, 0, 1, 0, 0)" : "",
            }}
            zIndex={99}
          >
            <div
              onClick={handleReviewIndex(v)}
              style={{
                alignItems: "center",
                cursor: "pointer",
                display:
                  reviewIndex + v > reviews.length - 1 || reviewIndex + v <= 0
                    ? "none"
                    : "flex",
                height: "100%",
                justifyContent: "end",
                width: "100%",
              }}
            >
              <KeyboardArrowRightIcon style={{ marginRight: "20%" }} />
            </div>
          </Stack>
        ))}

        <Stack
          columnGap={3}
          direction="row"
          justifyContent="center"
          position="relative"
          maxWidth="100%"
          sx={{
            transform: `translateX(${
              (reviewIndex - startReviewIndex) * (557 + 27) * -1
            }px)`,
            transition: "transform 500ms ease",
          }}
        >
          {reviews.map((v, i) => (
            <ReviewBox
              cost={v.cost}
              href={v.href}
              key={i}
              name={v.name}
              speed={v.speed}
              title={v.title}
            >
              {v.review}
            </ReviewBox>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}

export const CircleColor = ({ color }) => (
  <Stack
    alignItems="center"
    border="1px solid rgba(255, 255, 255, 0.3)"
    borderRadius={100}
    boxShadow="0px 3.9px 7.8px rgba(0, 162, 94, 0.51)"
    height={8}
    justifyContent="center"
    sx={{
      background:
        color == "orange"
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
);
