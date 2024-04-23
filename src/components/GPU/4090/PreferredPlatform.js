import { Typography, Stack, Button, Box } from "@mui/material"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import Metrics from "../Metrics"
import React from "react";
import Link from "@components/Link"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"


const PreferredPlatform = () => {

  return (
    <>
      <Stack
        alignItems="left"
        direction={{ xs: "column-reverse", md: "row-reverse" }}
        justifyContent={"left"}
        mt={{xs:10, sm: 15}}
        width="90%"
      >
        <Stack >
          <Typography variant="h1" sx={{ width:{xs:"100%", sm:"100%", md:"80%"}, fontSize: { xs: '1.6rem', sm: '2rem', md: 48, lg: 60 } }}>
          The preferred platform for 100,000+ developers worldwide
          </Typography>

          <Stack direction={{xs:"column", sm:"column", md:"row"}} mt={4} spacing={{ xs: 0, sm: 0, md: 0, lg: 4 }}>
            <Stack width={{sm: 475}} direction="column"  justifyContent={{ xs: "center", md: "start" }}>

              <Typography variant="h1" fontSize={18} >
                  <Link
                    href="https://discord.gg/7KmPUz5xYr"
                    sx={{ justifyContent: "left", display: "flex" }}
                    target="_blank"
                    color="white"
                  >
                    Join our Discord community
                    <OpenInNewIcon
                      sx={{
                        alignSelf: "center",
                        display: "inline-flex",
                        fontSize: 16,
                        ml: 0.5,
                      }}
                    />
                  </Link>
              </Typography>
              <Typography fontSize={15} variant="subtitle1">
                Our dev community is happy to help with hands on support.
              </Typography>

              <Typography variant="h1" fontSize={18} mt={{xs:2, md: 3}}>
                  <Link
                    href="https://docs.runpod.io/overview"
                    sx={{ justifyContent: "left", display: "flex" }}
                    target="_blank"
                    color="white"
                  >
                    Check out our docs
                    <OpenInNewIcon
                      sx={{
                        alignSelf: "center",
                        display: "inline-flex",
                        fontSize: 16,
                        ml: 0.5,
                      }}
                    />
                  </Link>
              </Typography>

              <Typography fontSize={15} variant="subtitle1">
              Our docs provide a thorough dive into the RunPod platform.
              </Typography>

              <Typography variant="h1" fontSize={18}  mt={{xs:2, md: 3}}>
                  <Link
                    href="https://blog.runpod.io/"
                    sx={{ justifyContent: "left", display: "flex" }}
                    target="_blank"
                    color="white"
                  >
                    Get started with tutorials
                    <OpenInNewIcon
                      sx={{
                        alignSelf: "center",
                        display: "inline-flex",
                        fontSize: 16,
                        ml: 0.5,
                      }}
                    />
                  </Link>
              </Typography>
              <Typography fontSize={15} variant="subtitle1">
               We have hundreds of tutorials for all types of workloads.
              </Typography>
            </Stack>
            <Stack pt={{xs:4, sm:4, md:0}}> 
              <Metrics />
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

      {/* <Box
        component="img"
        sx={{
          zIndex:-9,
          position: 'fixed',
          // top: {xs: '285vh', sm: 3100},
          visibility: {xs: 'hidden',sm:'hidden',md:'visible'},
          right: 0,
          bottom: 0,
          left: 0,
          width: '100%',
          height: {xs: '150vh', sm:1000},
          filter: 'brightness(0.4)',
        }}
        alt="4090 gpu background"
        src="/static/images/gpu/gpu-background-middle.webp" // 
      /> */}

      {/* <Box
        component="img"
        sx={{
          zIndex:-10,
          position: 'fixed',
          top: {xs:1800,sm:3000},
          right: 0,
          bottom: 0,
          left: 0,
          width: '100%',
          height: {xs: '200vh',sm:0},
          filter: 'brightness(0.3)',
        }}
        alt="gpu header background"
        src="/static/images/gpu/gpu-background-top.webp" 
      /> */}
    </>
  )
}

export default PreferredPlatform
