import { Box, Button, Stack, Typography } from "@mui/material"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"

export default function Hero({data}) {
  return (
    <>
    <Box
      component="img"
      sx={{
        position: 'absolute',
        top: {xs: 0, sm: 0},
        right: 0,
        bottom: 0,
        left: 0,
        width: {xs:'100%', md: '100%'},
        height: {xs:700, sm:'100vh'},
        objectFit: 'cover',
        filter: {xs: 'brightness(0.4)', sm:'brightness(1)'},
        
      }}
      alt="gpu background"
      src="/static/images/gpu/gpu-background.webp"
    />
    <Stack
      alignItems="center"
      justifyContent="space-evenly"
      sx={{
        width: "100%",
        position: "relative",
        height: {xs:625, sm:"calc(100vh - 71px)"}
      }}
    >
      <Stack
        alignItems="left"
        justifyContent="left"
        sx={{
          width: "100%",
          pr: { xs: 0.5, sm: 2, md: "10vw", lg: "10vw" },
          pl: { xs: 0.5, sm: 5, md:"10vw", lg: "5vw" },
          py: { xs: 0, md: 0 },
        }}
        spacing={{ xs: 0, sm: 3, md: 12, lg: 40 }}
      >

        <Stack
          direction="row"
          height={{xs:700,sm:"100%"}}
          alignItems="center"
          sx={{ position: "relative" }}
        >
          <Stack spacing={{ xs: 1, md: 1 }}>
            <Typography mt={{xs:'-12rem', sm: '-7rem', md: -25}} textAlign={{ xs: "center", sm: "left" }} color={"rgb(163 163 163)"} fontSize={{ xs: '1rem', sm: 14 }} mb={{xs:0, md: 0.4}} ml={0.5} variant="h2">
              RunPod GPU Cloud
            </Typography>

            <Typography
              fontSize={{ xs: '3rem', sm: 50, md: 60, xl: 70 }}
              textAlign={{ xs: "center", sm: "left" }}
              variant="h1"
              fontWeight={400}
            >
              {data.name}s On-Demand
            </Typography>

            <Typography
              fontSize={{ xs: '1.2rem', sm: '1.2rem', md: '1.2rem' , lg: '1.4rem' }}
              textAlign={{ xs: "center", sm: "left" }}
              variant="h1"
              pt={2}
              color={"rgb(163 163 163)"}
            >
              On-Demand {data.name}s from <b>{data.community.price}</b>
            </Typography>

            <Stack direction="row" justifyContent={{ xs: "center", sm: "start" }} spacing={4}>
              <Stack mt={2} direction="row" spacing={1}>
                <Button
                  href={"/console/signup"}
                  variant="outlined"
                  size="large"
                  sx={{ 
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
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
    </>
  )
}
