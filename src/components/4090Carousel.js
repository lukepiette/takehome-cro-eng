import { Box, useTheme, useMediaQuery, styled, Typography } from "@mui/material"
import Image from "next/legacy/image"

const CarouselContainer = styled("div")(({ theme }) => ({
  "overflow": "hidden",
  "display": "flex",
  "animation": "scroll 80s linear infinite",
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
    src: "/static/images/gpu/4090-gpu.webp",
    height: 170,
    width: 349,
    alt: "runpod 4090 gpu",
  },
  {
    src: "/static/images/gpu/4090-gpu.webp",
    height: 170,
    width: 349,
    alt: "runpod 4090 gpu",
  },
  {
    src: "/static/images/gpu/4090-gpu.webp",
    height: 170,
    width: 349,
    alt: "runpod 4090 gpu",
  },
  {
    src: "/static/images/gpu/4090-gpu.webp",
    height: 170,
    width: 349,
    alt: "runpod 4090 gpu",
  },
  {
    src: "/static/images/gpu/4090-gpu.webp",
    height: 170,
    width: 349,
    alt: "runpod 4090 gpu",
  },
  {
    src: "/static/images/gpu/4090-gpu.webp",
    height: 170,
    width: 349,
    alt: "runpod 4090 gpu",
  },
  {
    src: "/static/images/gpu/4090-gpu.webp",
    height: 170,
    width: 349,
    alt: "runpod 4090 gpu",
  },
  {
    src: "/static/images/gpu/4090-gpu.webp",
    height: 170,
    width: 349,
    alt: "runpod 4090 gpu",
  },
  {
    src: "/static/images/gpu/4090-gpu.webp",
    height: 170,
    width: 349,
    alt: "runpod 4090 gpu",
  },
  {
    src: "/static/images/gpu/4090-gpu.webp",
    height: 170,
    width: 349,
    alt: "runpod 4090 gpu",
  },
  {
    src: "/static/images/gpu/4090-gpu.webp",
    height: 170,
    width: 349,
    alt: "runpod 4090 gpu",
  },
  {
    src: "/static/images/gpu/4090-gpu.webp",
    height: 170,
    width: 349,
    alt: "runpod 4090 gpu",
  },
  {
    src: "/static/images/gpu/4090-gpu.webp",
    height: 170,
    width: 349,
    alt: "runpod 4090 gpu",
  },
  {
    src: "/static/images/gpu/4090-gpu.webp",
    height: 170,
    width: 349,
    alt: "runpod 4090 gpu",
  },
]

const Carousel4090 = () => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <>
    <Box mt={{xs: -14, sm: -15}} zIndex={100} display="flex" flexDirection="column" alignItems={"center"} maxWidth={1500} mb={{ xs: 2, sm: 1.5, md: 0 }} overflow="hidden" >

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
              width={logo.width / 1.5}
              height={logo.height / 1.5}
              alt={logo.alt}
            />
          ))}
          {logos.map((logo, index) => (
            <Logo
              key={logo.src}
              src={logo.src}
              width={logo.width / 1.5}
              height={logo.height / 1.5}
              alt={logo.alt}
            />
          ))}
        </CarouselContainer>
      )}
    </Box>
    </>

  )
}

export default Carousel4090
