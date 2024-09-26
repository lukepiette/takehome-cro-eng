import { Box, Stack, useTheme, useMediaQuery, styled } from "@mui/material";
import Image from "next/legacy/image";

const CarouselContainer = styled("div")(({ theme }) => ({
  overflow: "hidden",
  display: "flex",
  animation: "scroll 40s linear infinite",
  width: "fit-content",
  "@keyframes scroll": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(-50%)",
    },
  },
}));

const LogoWrapper = styled(Box)(() => ({
  alignItems: "center",
  justifyContent: "center",
  filter: `grayscale(1) opacity(0.6)`,
  paddingLeft: 30,
  display: "flex",
  alignItems: "center",
  userSelect: "none",
}));

const Logo = ({ src, alt, height, width }) => {
  return (
    <LogoWrapper width={width}>
      <Image loading="lazy" alt={alt} height={height} width={width} src={src} />
    </LogoWrapper>
  );
};

const logos = [
  {
    src: "/static/images/companies/compressed/opencv.png",
    height: 60,
    width: 50,
    alt: "opencv logo",
  },
  {
    src: "/static/images/companies/compressed/replika.png",
    height: 53,
    width: 90,
    alt: "replika logo",
  },
  {
    src: "/static/images/companies/compressed/dsd.png",
    height: 37,
    width: 152,
    alt: "datasciencedojo logo",
  },
  {
    src: "/static/images/companies/compressed/jina.png",
    height: 35,
    width: 80,
    alt: "jina logo",
  },
  {
    src: "/static/images/companies/compressed/definedai.png",
    height: 23,
    width: 130,
    alt: "defined ai logo",
  },
  {
    src: "/static/images/companies/compressed/otovo.png",
    height: 44,
    width: 120,
    alt: "otovo logo",
  },
  {
    src: "/static/images/companies/compressed/abzu.png",
    height: 35,
    width: 90,
    alt: "abzu logo",
  },
  {
    src: "/static/images/companies/compressed/aftershoot.png",
    height: 27,
    width: 150,
    alt: "aftershoot logo",
  },
  {
    src: "/static/images/companies/compressed/krnl.png",
    height: 33,
    width: 120,
    alt: "krnl logo",
  },
];

const TrustedBy = ({ sx }) => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      alignItems={"center"}
      maxWidth={900}
      overflow="hidden"
      sx={{ zIndex: 1, position: "relative", ...sx }}
    >
      {isXsScreen ? (
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ py: 2 }}
        >
          {logos.map((logo) => (
            <Logo
              key={logo.src}
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt={logo.alt}
            />
          ))}
        </Stack>
      ) : (
        <>
          <div
            style={{
              height: "100%",
              position: "absolute",
              width: "100%",
              zIndex: 2,
              background:
                "linear-gradient(90deg, #000 0%, transparent 10%, transparent 90%, #000 100%)",
            }}
          />
          <CarouselContainer>
            {logos.map((logo) => (
              <Logo
                key={logo.src}
                src={logo.src}
                width={logo.width}
                height={logo.height}
                alt={logo.alt}
              />
            ))}
            {logos.map((logo) => (
              <Logo
                key={`${logo.src}-duplicate`}
                src={logo.src}
                width={logo.width}
                height={logo.height}
                alt={logo.alt}
              />
            ))}
          </CarouselContainer>
        </>
      )}
    </Box>
  );
};

export default TrustedBy;
