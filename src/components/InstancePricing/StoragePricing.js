import {
    Box,
    Grid,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
    Divider,
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Paper
  } from "@mui/material";
  import CheckIcon from "@mui/icons-material/Check";
  import ButtonLink from "@components/ButtonLink";
  import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
  import SignUp from "@components/SignUpButton"

  import { Gpu, GpuData } from "src/types/gpu";
  
  function FeatureCheck({ title }) {
    return (
      <Stack direction={"row"} gap={1} alignItems={"center"}>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            p: 0.7,
            borderRadius: 100,
            background: "rgba(255, 255, 255, 0.16)",
            opacity: 0.8,
            flexShrink: 0,
          }}
        >
          <CheckIcon sx={{ color: "white", fontSize: 15 }} />
        </Stack>
        <Typography sx={{ userSelect: "none" }}>{title}</Typography>
      </Stack>
    );
  }
  
  
  export default function StoragePricing({ data }) {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  
    return (
      <Stack
        alignItems={"center"}
        mt={16}
        position={"relative"}
        maxWidth={"75.5rem"}
      >
        <Typography
          align="center"
          color="#fff"
          fontSize={{ xs: 34, sm: 44, md: 48 }}
          letterSpacing="-0.03em"
          lineHeight={1.1}
          mt={2}
          variant="h2"
        >
          <Box
            display="inline-flex"
            sx={{
              background: "linear-gradient(90deg, #CAD9FF 0%, #7F39FF 250%)",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            Storage
          </Box>{" "}
          Pricing
        </Typography>
  
        <Typography
          align="center"
          color="#94A3B8"
          fontSize={14}
          letterSpacing={-0.25}
          mt={2.5}
          mx={3}
        >
          Flexible and cost-effective storage for every workload. No fees for ingress/egress. 
        </Typography>
  
        <Typography
          align="center"
          color="#94A3B8"
          display={{ xs: "none", sm: "flex" }}
          fontSize={14}
          letterSpacing={-0.25}
          mx={3}
        >
        Persistent and temporary storage available.
        </Typography>
        
        <div
          style={{
            width: "230rem",
            height: "42.12575rem",
            position: "absolute",
            left: "-115rem",
            top: "20rem",
            transform: "rotate(169.39deg)",
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 65, 163, 0.25) 18.87%, rgba(4, 0, 16, 0.80) 52.12%, #170042 75%)",
            filter: "blur(64px)",
            zIndex: -1,
          }}
        />
        <Stack
          sx={{
            mt: 4,
            border: "1px solid rgba(249, 250, 251, 0.16)",
            background: {
              xs: "transparent",
              lg: "radial-gradient(99.75% 99.75% at 50% 99.75%, rgba(44, 0, 115, 0.79) 0%, rgba(15, 23, 42, 0.00) 67.22%), rgba(0, 0, 0, 0.04)",
            },
            borderRadius: "24px",
            backdropFilter: {
              xs: "blur(0px)",
              lg: "blur(24px)",
            },
            padding: {
              xs: 2,
              lg: 3,
            },
            borderBottomLeftRadius: {
              xs: 0,
              lg: "24px",
            },
            borderBottomRightRadius: {
              xs: 0,
              lg: "24px",
            },
            borderColor: {
              xs: "transparent",
              lg: "rgba(249, 250, 251, 0.16)",
            },
          }}
          gap={3}
        >
          <Stack gap={1}>
            <Typography fontWeight={500}>
             Over 100PB of storage available across North America and Europe.
            </Typography>
            <Typography maxWidth={"30rem"}>
              Customize your pod volume and container disk in a few clicks, and
              access additional persistent storage with network volumes.
            </Typography>
          </Stack>
          <Stack
            direction={{
              xs: "column",
              md: "row",
            }}
            columnGap={2}
            rowGap={2}
            alignItems={{
              xs: "start",
              md: "center",
            }}
            justifyContent={{
              xs: "start",
              md: "space-between",
            }}
            flexWrap={"wrap"}
          >
            <FeatureCheck title={"Zero fees for ingress/egress"} />
            <FeatureCheck title={"Global interoperability"} />
            <FeatureCheck title={"NVMe SSD"} />
            <FeatureCheck title={"Multi-Region Support"} />
          </Stack>

          <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
            <Divider style={{ flexGrow: 1, height: 2 }} />
            <Typography variant="h4" align="center" sx={{ mx: 2 }}>
                Pod Storage
            </Typography>
            <Divider style={{ flexGrow: 1, height: 2 }} />
          </Box>

          <TableContainer component={Paper}>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell align="center">Storage Type</TableCell>
                    <TableCell align="center">Running Pods</TableCell>
                    <TableCell align="center">Idle Pods</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Volume</TableCell>
                        <TableCell align="center">$0.10/GB/Month</TableCell>
                        <TableCell align="center">$0.20/GB/Month</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Container Disk</TableCell>
                        <TableCell align="center">$0.10/GB/Month</TableCell>
                        <TableCell align="center">$0.20/GB/Month</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
          </TableContainer>

          <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
            <Divider style={{ flexGrow: 1, height: 2 }} />
            <Typography variant="h4" align="center" sx={{ mx: 2 }}>
                Persistent Network Storage
            </Typography>
            <Divider style={{ flexGrow: 1, height: 2 }} />
          </Box>
          <TableContainer component={Paper}>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell align="center">Storage Type</TableCell>
                    <TableCell align="center">Under 1TB</TableCell>
                    <TableCell align="center">Over 1TB</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Network Volume</TableCell>
                        <TableCell align="center">$0.07/GB/Month</TableCell>
                        <TableCell align="center">$0.05/GB/Month</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
          </TableContainer>
          
        </Stack>
      </Stack>
    );
  }
  