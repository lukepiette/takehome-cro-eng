import {
  Box,
  Stack,
  Typography,
  Button,
} from "@mui/material"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"


export default function FastestCloud({data}) {
  return (
    <>
    <Box
      component="img"
      sx={{
        zIndex:-9,
        position: 'fixed',
        right: 0,
        bottom: 0,
        left: 0,
        width: {xs:800,sm:'100%'},
        height: {xs: '80vh', sm:1000},
        filter: 'brightness(0.3)',
      }}
      alt="gpu header background"
      src="/static/images/gpu/gpu-background-top.webp" 
    />
    <Stack
      alignItems="left"
      direction={{ xs: "column-reverse", md: "row-reverse" }}
      justifyContent={"left"}
      mt={{xs: '3rem', sm:15}}
      spacing={2}
      width="90%"
    >
      <Stack>
        <Typography variant="h1" sx={{ fontSize: { xs: '2rem', sm: '2rem', md: 48, lg: 60 } }}>
          The world{"'"}s fastest {data.name} Cloud
        </Typography>

        <Stack direction={{xs:"column", sm:"column", md:"row"}} spacing={{ xs: 0, sm: 0, md: 0, lg: 0 }}>
          <Stack direction="column" mt={2} justifyContent={{ xs: "center", md: "start" }}>

            <Typography variant="h1" fontSize={18} mt={{xs:2, md: 3}}>
              Scale to hundreds of On-Demand Pods in minutes
            </Typography>
            <Typography fontSize={15} variant="subtitle1">
              Rapidly spin up {data.name}s across multiple regions in minutes.
            </Typography>

            <Typography variant="h1" fontSize={18} mt={{xs:2, md: 3}}>
              250ms Cold start times
            </Typography>
            <Typography fontSize={15} variant="subtitle1">
              As low as 100ms for certain workloads. 
            </Typography>

            <Typography variant="h1" fontSize={18} mt={{xs:2, md: 3}}>
              Pay by the minute for On-Demand Pods
            </Typography>
            <Typography fontSize={15} variant="subtitle1">
              Stop paying as soon as you spin down your workload.
            </Typography>

            <Button
                href={"/console/signup"}
                variant="outlined"
                size="large"
                sx={{ 
                  mt:4,
                  width: 170,
                  height: 48,
                  borderRadius: '8px',
                  background: 'linear-gradient(45deg, #45005E 0%, #000000 100%)',
                  color: '#FFFFFF',
                  fontSize: 14,
                  fontWeight: 'bold',
                  textTransform: 'none',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #45005E 0%, #000000 100%)',
                  },

                }}
                endIcon={<KeyboardArrowRightIcon />}
              >
              Get Started
            </Button>
          </Stack>
          <Stack pl={{xs:0, sm:1, md:10}} justifyContent="center" direction="column">
          <Box
              sx={{
                pt:5,
                "justifyContent": "center",
                "alignItems": "center",
                "filter": "drop-shadow(0 0 100px #000000)",
                "diplay":"flex",
                "margin":"auto",
                "@media (max-height: 680px)": {
                  display: "none",
                },
                "width": { xs: data.gpuImageXs, sm: data.gpuImageSm, md: data.gpuImageMd, lg: data.gpuImageLg },
              }}
            >
              <img
                alt="gpu card image"
                src={data.gpuImagePath}
                style={{
                  borderRadius: 0,
                  maxWidth: "100%",
                }}
              />
            </Box>
            <Typography variant="h1" mt={3} fontSize={20} align="center">
              From {data.community.price}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  </>
  )
}
