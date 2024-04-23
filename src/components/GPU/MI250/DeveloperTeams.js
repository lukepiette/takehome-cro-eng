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
          <Stack direction="column" width={{sm:525, md:450, lg: 450}} justifyContent={{ xs: "center", md: "start" }}>
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
                    Startups
                  </Box>
              </Stack>
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
              
            </Stack>

          </Stack>

          <Stack direction="column" width={{sm:525, md:450, lg: 580}} pt={5} justifyContent={{ xs: "center", md: "start" }}>
            
            <TableContainer
                component={Paper}
                sx={{ maxWidth: 850, marginLeft: "0 !important", p: 2, backdropFilter: 'blur(100px)',}}
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
                        <Typography variant="h4">{data.name}</Typography>
                        
                      </TableCell>
                      <TableCell
                        align="right"
                        component="th"
                        scope="row"
                        sx={{ pl: { xs: 1, sm: 3 } }}
                      >
                        <Typography variant="h4">{data.comparedTo.name}</Typography>
                        
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
                            {data.info.price}
                        </Box>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>{data.comparedTo.price}</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography display="flex" fontSize={14}>
                          VRAM
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>{data.info.VRAM}</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>{data.comparedTo.VRAM}</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography display="flex" fontSize={14}>
                          Memory Bandwidth
                        </Typography>
                      </TableCell>
                      <TableCell align="right">

                        <Typography fontSize={14}>{data.info.memoryBandwidth}</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>{data.comparedTo.memoryBandwidth}</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography display="flex" fontSize={14}>
                        FP64 / FP32
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>{data.info.FP64}</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>{data.comparedTo.FP64}</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography display="flex" fontSize={14}>
                        FP16
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>{data.info.FP16}</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>{data.comparedTo.FP16}</Typography>
                      </TableCell>
                    </TableRow>
                    
                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography fontSize={14}>Interconnect</Typography>
                        <Typography fontSize={12}>GPU to GPU</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>{data.info.interconnect}</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>{data.comparedTo.interconnectNVLink}</Typography>
                        <Typography fontSize={14}>{data.comparedTo.interconnectPCIe}</Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Typography display="flex" fontSize={14}>
                          Network
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>{data.info.network}</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={14}>{data.comparedTo.network}</Typography>
                      </TableCell>
                    </TableRow>

                  </TableBody>
                </Table>
              </TableContainer>
              

          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

