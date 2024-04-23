import { Box, useTheme, useMediaQuery, styled, Typography } from "@mui/material"
import Image from "next/legacy/image"

const CarouselContainer = styled("div")(({ theme }) => ({
  "overflow": "hidden",
  "display": "flex",
  "animation": "scroll 40s linear infinite",
  "width": "fit-content",
  "@keyframes scroll": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(-50%)",
    },
  },
}))

const LogoWrapper = styled(Box)(() => ({
  alignItems: "center",
  justifyContent: "center",
  filter: `grayscale(1) opacity(0.6)`,
  paddingLeft: 30,
  display: "flex",
  alignItems: "center",
}))

const Logo = ({ src, alt, height, width }) => {
  return (
    <LogoWrapper width={width}>
      <Image loading="lazy" alt={alt} height={height} width={width} src={src} />
    </LogoWrapper>
  )
}

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
]

const TrustedBy = () => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <>
    <Box mt={{xs: -14, sm: -15}} zIndex={100} display="flex" flexDirection="column" alignItems={"center"} maxWidth={900} mb={{ xs: 2, sm: 1.5, md: 0 }} overflow="hidden" >
      <Typography color={"rgb(163 163 163)"} lineHeight={'1.5rem'} variant="h2" textAlign={"center"} display={"flex"} maxWidth={"80vw"} fontSize={14} mb={{xs:1, sm:3}}>
        RunPod works with Generative AI companies, Acedemic Institutions, and Enterprises
      </Typography>
      {!isSmallScreen ? (
        <CarouselContainer>
          {logos.map((logo, index) => (
            <Logo
              key={logo.src}
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt={logo.alt}
            />
          ))}
          {logos.map((logo, index) => (
            <Logo
              key={logo.src}
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt={logo.alt}
              paddingTop={100}
            />
          ))}
        </CarouselContainer>
      ) : (
        <CarouselContainer>
          {logos.map((logo, index) => (
            <Logo
              key={logo.src}
              src={logo.src}
              width={logo.width * 1.2}
              height={logo.height * 1.2}
              alt={logo.alt}
            />
          ))}
          {logos.map((logo, index) => (
            <Logo
              key={logo.src}
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt={logo.alt}
            />
          ))}
        </CarouselContainer>
      )}
    </Box>
    </>

  )
}

export default TrustedBy
