import { Box, Card, CardActionArea, Grid, Stack, styled, Typography, useTheme } from "@mui/material"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"

const CardActionAreaWrapper = styled(CardActionArea)(
  () => `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  
    .MuiTouchRipple-root {
        opacity: .3;
    }
  
    &:hover {
        .MuiCardActionArea-focusHighlight {
            opacity: .05;
        }
    }
  `
)

const CardWrapper = styled(Card)(
  ({ theme }) => `
    display: flex;
    height: 140px;
    text-align: center;
    transition: ${theme.transitions.create(["transform"])};
    transform: translateY(0px);
    &:hover {
      transform: translateY(-10px);
    }
    `
)

export default function DeploySeconds() {
  const theme = useTheme()

  return (
    <Stack alignItems="center" justifyContent={"space-around"} spacing={4} sx={{ my: 18 }}>
      <Stack alignItems={{ xs: "center", md: "end" }}>
        <Typography
          sx={{
            fontSize: 40,
            mb: 0.5,
            backgroundClip: "text",
            backgroundImage: theme.colors.gradients.purple1,
            color: "transparent",
          }}
          variant="h3"
        >
          Deploy in Seconds
        </Typography>
        <Typography sx={{ fontSize: 16 }}>Only pay for what you use</Typography>
      </Stack>
      <Services />
    </Stack>
  )
}

function Services() {
  const { ref, inView } = useInView({ threshold: 0, fallbackInView: true })

  return (
    <Grid container justifyContent={"center"} ref={ref} spacing={2}>
      <Grid item xs={6} sm={3} md={2}>
        <CardWrapper>
          <Link href="/console/gpu-secure-cloud?template=runpod-torch" passHref prefetch={false}>
            <CardActionAreaWrapper sx={{ p: 2 }}>
              {inView ? (
                <Image
                  src="/static/svg/pytorchLogo.svg"
                  alt="pytorch logo"
                  width={50}
                  height={60}
                />
              ) : (
                <Box height={60} />
              )}
              <Typography component="span" mt={2} variant="h4">
                Pytorch
              </Typography>
            </CardActionAreaWrapper>
          </Link>
        </CardWrapper>
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <CardWrapper>
          <Link
            href="/console/gpu-secure-cloud?template=runpod-tensorflow"
            passHref
            prefetch={false}
          >
            <CardActionAreaWrapper sx={{ p: 2 }}>
              {inView ? (
                <Image
                  src="/static/svg/tensorflowLogo.svg"
                  alt="tensorflow logo"
                  width={51}
                  height={55}
                />
              ) : (
                <Box height={55} />
              )}
              <Typography component="span" mt={2} variant="h4">
                Tensorflow
              </Typography>
            </CardActionAreaWrapper>
          </Link>
        </CardWrapper>
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <CardWrapper>
          <Link href="/console/gpu-secure-cloud" passHref prefetch={false}>
            <CardActionAreaWrapper sx={{ p: 2 }}>
              {inView ? (
                <Image src="/static/svg/dockerLogo.svg" alt="docker logo" width={70} height={50} />
              ) : (
                <Box height={50} />
              )}
              <Typography component="span" mt={2} variant="h4">
                Custom Image
              </Typography>
            </CardActionAreaWrapper>
          </Link>
        </CardWrapper>
      </Grid>
    </Grid>
  )
}
