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
    border: '1px solid #7b50d4',
    opacity: 1, 
  },
  '&::after': {
    border: '1px solid #7b50d4',
    opacity: 0, 
  },
}));


export default function ReservedPricing({data}) {
  return (
    <Stack
      alignItems="left"
      direction={{ xs: "column-reverse", md: "row-reverse" }}
      justifyContent={"left"}
      mt={{xs:10, sm: 15}}
      mb={{xs:15, sm:20}}
      spacing={4}
      width="90%"
    >
      <Stack  >
        <Typography variant="h1" sx={{ fontSize: { xs: '2rem', sm: '2rem', md: 50, lg: 60 } }}>
          Flexible pricing on reservations
        </Typography>

        <Stack direction={{xs:"column",sm:"column", md:"row"}} spacing={{ xs: 0, sm: 0, md: 0, lg: 0 }}>
          <Stack width={{sm:475}} direction="column" mt={2} justifyContent={{ xs: "center", md: "start" }}>

          <Typography variant="h1" fontSize={18} mt={2}>
            Discounts on 3, 6, 12, and 36-month reservations
            </Typography>
            <Typography fontSize={15} variant="subtitle1">
            Book a call with our team to learn more.
            </Typography>

            <Typography variant="h1" fontSize={18} mt={{xs:2, md: 3}}>
            Zero fees for ingress / egress
            </Typography>
            <Typography fontSize={15} variant="subtitle1">
            No charges for data ingress and egress 
            </Typography>

            <Typography variant="h1" fontSize={18} mt={{xs:2, md: 3}}>
            Only pay for what you use, never more
            </Typography>
            <Typography fontSize={15} variant="subtitle1">
            RunPod only charges you for the resources used. 
            </Typography>

            <Stack mt={{xs: 3, sm: 4}} direction="row" justifyContent="left" spacing={1}>
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
                  }}
                  endIcon={<KeyboardArrowRightIcon />}
                >
                  Book a Call
                </Button>
              </BookNowButtonWrapper>       
            </Stack>

          </Stack>
          <Stack
            alignItems="center"
            direction={{ xs: "column" }}
            justifyContent="center"
            position="relative"
            
            sx={{
              background: "rgba(0, 0, 0, 0.05)",
              pl:{md:7},
            }}
            width={{xs: "100%",md:"65%"}}> 
            
            <TableContainer
              component={Paper}
              sx={{ mt:4,  pt:2, pb:2, backdropFilter: 'blur(100px)',}}
            >
              <Table size="medium">
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row" sx={{ pl: { xs: 1, sm: 3 } }} />
                    <TableCell
                      align="right"
                      component="th"
                      scope="row"
                      sx={{ pl: { xs: 1, sm: 3 } }}
                    >
                      <Typography variant="h4">Secure Cloud</Typography>
                    </TableCell>
                    <TableCell
                      align="right"
                      component="th"
                      scope="row"
                      sx={{ pl: { xs: 1, sm: 3 } }}
                    >
                      <Typography variant="h4">Community Cloud</Typography>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Typography display="flex" fontSize={14}>
                        On-Demand
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
                        3-Month Reservation
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontSize={14}>{data.secure.price3Month}</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontSize={14}>-</Typography>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Typography display="flex" fontSize={14}>
                        6-Month Reservation
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontSize={14}>{data.secure.price6Month}</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontSize={14}>-</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Typography display="flex" fontSize={14}>
                        12-Month Reservation
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontSize={14}>{data.secure.price12Month}</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontSize={14}>-</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Typography display="flex" fontSize={14}>
                        36-Month Reservation
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontSize={14}>{data.secure.price36Month}</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontSize={14}>-</Typography>
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