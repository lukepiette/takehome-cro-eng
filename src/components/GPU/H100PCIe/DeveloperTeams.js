import {
  Box,
  Stack,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Button,
  styled
} from "@mui/material"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"

const GradientButtonWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  '&:hover::before': {
    opacity: 0,
  },
  '&:hover::after': {
    opacity: 0.6, 
  },
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '8px',
    transition: 'opacity 0.2s ease-in-out', 
    pointerEvents: 'none', 
  },
  '&::before': {
    background: 'linear-gradient(165deg, #5D29F0 20%, #2c1772 100%)',
    opacity: 0, 
  },
  '&::after': {
    background: 'linear-gradient(165deg, #5D29F0 30%, #000000 100%)', 
    border: '1px solid #7b50d4',
    opacity: 1, 
  },
}));

const BookNowButtonWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  '&:hover::before': {
    opacity: 0, 
  },
  '&:hover::after': {
    opacity: 1,
  },
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '8px',
    transition: 'opacity 0.2s ease-in-out', 
    pointerEvents: 'none', 
  },
  '&::before': {
    opacity: 0,
  },
  '&::after': {
    border: '1px solid #7b50d4',
    opacity: 0, 
  },
}));


export default function DeveloperTeams({data}){

  return (
    <Stack
      alignItems="left"
      direction={{ xs: "column-reverse", md: "row-reverse" }}
      justifyContent={"left"}
      mt={10}
      spacing={0}
      width="90%"
    >
      <Stack>
        <Typography variant="h1" sx={{ fontSize: { xs: '2rem', sm: '2rem', md: 48, lg: 60 } }}>
          Built for developer teams of all sizes
        </Typography>

        <Stack direction={{xs:"column", sm:"column", md:"row"}} spacing={{ xs: 0, sm: 0, md: 4, lg: 6 }}>
          <Stack direction="column" width={{sm:525, md:450, lg: 565}} justifyContent={{ xs: "center", md: "start" }}>
            <Stack direction="row" spacing={1} alignItems="center" mt={4}>
              <Stack>
                <Box
                    style={{
                      color: '#FFFFFF',
                      border: '1px solid #5D29F0',
                      borderRadius: '8px',
                      padding: '4px 8px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                      textAlign:'center',
                      display: 'inline-block',
                      width:'auto',
                      
                    }}
                  >
                    Startups
                  </Box>
              </Stack>
              <Stack>
                <Box
                  style={{
                    color: '#FFFFFF',
                    border: '1px solid #5D29F0',
                    borderRadius: '8px',
                    padding: '4px 8px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    textAlign:'center',
                    display: 'inline-block',
                    width:'auto',
                    
                  }}
                >
                  Enterprises
                </Box>
              </Stack>
            </Stack>

            <Typography fontSize={30} variant="h1" mt={2} fontWeight={600} >
                Secure Cloud
            </Typography>

            <Typography fontSize={18} variant="h1"  mt={{xs:2, md: 3}}>
              10Pb+ Multi-Region Network Storage
            </Typography>
            <Typography fontSize={15} variant="subtitle1">
              Access over 100Tb+ of network storage across NA and EU.
            </Typography>

            <Typography fontSize={18} variant="h1" mt={{xs:2, md: 3}}>
              99.99% Uptime
            </Typography>
            <Typography fontSize={15} variant="subtitle1">
              Book a call to learn more about our reservation pricing.
            </Typography>

            <Typography fontSize={18} variant="h1" mt={{xs:2, md: 3}}>
              Enterprise Grade Security
            </Typography>
            <Typography fontSize={15} variant="subtitle1">
              Best-in-class physical on-prem data center security. 
            </Typography>
            <Stack mt={3} direction="row" spacing={1}>
              <GradientButtonWrapper>
              <Button
                href="/console/signup"
                variant="outlined"
                size="large"
                sx={{
                  width: 170,
                  height: 48,
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: 14,
                  fontWeight: 'bold',
                  textTransform: 'none',
                  position: 'relative',
                  zIndex: 1, 
                  border: '1px solid #5D29F0', 
                  background: 'none', 
                  '&:hover': {
                    border: '1px solid #7b50d4', 
                  },
                }}
                endIcon={<KeyboardArrowRightIcon />}
              >
                Get Started
              </Button>
              </GradientButtonWrapper>
              <BookNowButtonWrapper>
                <Button
                  href={data.bookCallURL}
                  size="large"
                  sx={{ 
                    width: 170,
                    height: 48,
                    borderRadius: '8px',
                    fontSize: 14,
                    fontWeight: 'bold',
                    textTransform: 'none',
                    marginLeft:{xs:-2, sm:0}
                  }}
                  endIcon={<KeyboardArrowRightIcon />}
                >
                  Book a Call
                </Button>
              </BookNowButtonWrapper>
              
            </Stack>

            <Stack
              alignItems="center"
              direction={{ xs: "column", md: "row" }}
              justifyContent="center"
              position="relative"
              spacing={2}
              sx={{
                background: "rgba(0, 0, 0, 0.05)",
                mt: {xs:2, sm:5},
                py: 2,
              }}
              width="100%"
            >
              <TableContainer
                component={Paper}
                sx={{ maxWidth: 800, marginLeft: "0 !important", p: 2, backdropFilter: 'blur(100px)',}}
              >
                <Table size="small">
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row" sx={{ pl: { xs: 1, sm: 3 } }} />
                      <TableCell
                        align="right"
                        component="th"
                        scope="row"
                        sx={{ pl: { xs: 1, sm: 3 } }}
                      >
                        <Typography variant="h4">{data.name} Secure Cloud</Typography>
                        
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography display="flex" fontSize={14}>
                          On-Demand Pricing
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Box
                            style={{
                              backgroundColor: '#5D29F0',
                              color: '#FFFFFF',
                              border: 'none',
                              borderRadius: '8px',
                              padding: '4px 8px',
                              fontSize: '14px',
                              fontWeight: 'bold',
                              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                              background: 'linear-gradient(165deg, #5D29F0 20%, #2c1772 100%)',
                              textAlign:'center',
                              display: 'inline-block',
                              width:'auto',
                              
                            }}
                          >
                            {data.secure.price}
                        </Box>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography display="flex" fontSize={14}>
                          VRAM
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>{data.secure.VRAM}</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography display="flex" fontSize={14}>
                          RAM
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>{data.secure.RAM}</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography display="flex" fontSize={14}>
                          vCPU
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>{data.secure.vCPU}</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography display="flex" fontSize={14}>
                          Reliability
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>99.99%</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography display="flex" fontSize={14}>
                          Regions
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>{data.secure.regions}</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography fontSize={14}>
                          Security
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>Enterprise Grade</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography fontSize={14}>
                          Compliance
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>Book a call to learn more</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography display="flex" fontSize={14}>
                          Network Storage Capacity
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>10Pb+</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography display="flex" fontSize={14}>
                          Network Storage Regions
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>{data.secure.networkStorageRegions}</Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Stack>

          </Stack>

          <Stack direction="column" width={{sm:525, md:450, lg: 565}} justifyContent={{ xs: "center", md: "start" }}>
            <Stack direction="row" spacing={1} alignItems="center" mt={4}>
              <Stack>
                <Box
                    style={{
                      color: '#FFFFFF',
                      border: '2px solid #45005E',
                      borderRadius: '8px',
                      padding: '4px 8px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                      textAlign:'center',
                      display: 'inline-block',
                      width:'auto',
                      
                    }}
                  >
                    Small teams
                  </Box>
              </Stack>
            </Stack>

            <Typography fontSize={30} variant="h1"  fontWeight={600} mt={2}>
              Community Cloud
            </Typography>


            <Typography fontSize={18} variant="h1" mt={{xs:2, md: 3}}>
              Cost Effective Pricing
            </Typography>
            <Typography fontSize={15} variant="subtitle1">
              The most cost effective option for development.
            </Typography>

            <Typography fontSize={18} variant="h1" mt={{xs:2, md: 3}}>
              Globally Distributed
            </Typography>
            <Typography fontSize={15} variant="subtitle1">
              Spin up hundreds of {data.name} across {data.community.regions} regions.
            </Typography>

            <Typography fontSize={18} variant="h1" mt={{xs:2, md: 3}}>
              Large Community of Developers
            </Typography>
            <Typography fontSize={15} variant="subtitle1">
              10,000+ developers in the RunPod Discord eager to help.
            </Typography>

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
                mt:3,
              }}
              endIcon={<KeyboardArrowRightIcon />}
              >
                Get Started
            </Button>
            <Stack
              alignItems="center"
              direction={{ xs: "column", md: "row" }}
              justifyContent="center"
              position="relative"
              spacing={2}
              sx={{
                background: "rgba(0, 0, 0, 0.05)",
                mt: {xs: 2, sm: 5},
                py: 2,
              }}
              width="100%"
            >
              
              <TableContainer
                component={Paper}
                sx={{ maxWidth: 800, marginLeft: "0 !important", p: 2, backdropFilter: 'blur(100px)',}}
              >
                <Table size="small">
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row" sx={{ pl: { xs: 1, sm: 3 } }} />
                      <TableCell
                        align="right"
                        component="th"
                        scope="row"
                        sx={{ pl: { xs: 1, sm: 3 } }}
                      >
                        <Typography variant="h4">{data.name} Community Cloud</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography display="flex" fontSize={14}>
                          On-Demand Pricing
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Box
                          style={{
                            backgroundColor: '#5D29F0',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '4px 8px',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            background: 'linear-gradient(165deg, #45005E 60%, #21072f 100%)',
                            textAlign:'center',
                            display: 'inline-block',
                            width:'auto',
                            
                          }}
                        >
                          {data.community.price}
                        </Box>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography display="flex" fontSize={14}>
                          VRAM
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>{data.community.VRAM}</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography display="flex" fontSize={14}>
                          RAM
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>{data.community.RAM}</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography display="flex" fontSize={14}>
                          vCPU
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>{data.community.vCPU}</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography display="flex" fontSize={14}>
                          Reliability
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>99%</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography display="flex" fontSize={14}>
                          Regions
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>{data.community.regions}</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography fontSize={14}>
                          Security
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>Basic</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography fontSize={14}>
                          Compliance
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>-</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography display="flex" fontSize={14}>
                          Network Storage Capacity
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>-</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography display="flex" fontSize={14}>
                          Network Storage Regions
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>{data.community.networkStorageRegions}</Typography>
                      </TableCell>
                    </TableRow>

                  </TableBody>
                </Table>
              </TableContainer>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

