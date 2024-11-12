import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Link, Stack } from '@mui/material';
import { styled } from '@mui/system';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MemoryIcon from "@mui/icons-material/Memory";
import PublicIcon from "@mui/icons-material/Public";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

const fakePodLogs = [
  "create pod network",
  "create 20GB network volume",
  "create container runpod/pytorch:3.10-2.0.0-117",
  "3.10-2.0.0-117 Pulling from runpod/pytorch",
  "Digest: sha256:2dbf81dd888d383620a486f83ad2ff47540c6cb5e02a61e74b8db03a715488d6",
  "Status: Image is up to date for runpod/pytorch:3.10-2.0.0-117",
  "start container",
];
function FakePod() {
  const [date, setDate] = useState(0);

  useEffect(() => {
    setDate(new Date().getTime());
  }, []);

  return (
    <Stack
      gap={3}
      p={2}
      sx={{
        background:
          "radial-gradient(50.12% 50.12% at 100.49% 75.43%, #1E293B 0%, rgba(15, 23, 42, 0) 100%)",
        borderRadius: "14px",
        overflow: "hidden",
        border: "1px rgba(249, 250, 251, 0.1) solid",
        width: "100%",
      }}
    >
      <Stack direction={"row"} alignItems={"center"} gap={2}>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            borderRadius: "100px",
            background: "rgba(255, 255, 255, 0.1)",
            padding: 1,
            flexShrink: 0,
            height: "fit-content",
          }}
        >
          <MemoryIcon fontSize="small" />
        </Stack>
        <Stack>
          <Typography fontSize={17}>PyTorch</Typography>
          <Typography fontSize={11} sx={{ opacity: 0.7 }}>
            ID: twnw98clgxxf2z
          </Typography>
        </Stack>
        <Stack
          sx={{
            marginLeft: "auto",
            paddingTop: 1,
            paddingBottom: 1,
            paddingLeft: 1,
            paddingRight: 1,
            background:
              "linear-gradient(270deg, rgba(51, 65, 85, 0) 0%, rgba(51, 65, 85, 0.32) 53%, rgba(51, 65, 85, 0) 100%)",
            boxShadow:
              "0px 0.7200000286102295px 1.440000057220459px #B4ACB7 inset",
            borderRadius: "5.76px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            style={{
              color: "#F9FAFB",
              fontSize: 10.08,
              fontWeight: "500",
            }}
          >
            $0.34/hour
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        gap={1}
        flexWrap={"wrap"}
      >
        <Stack>
          <Typography fontSize={11} fontWeight={500}>
            200 GB Disk: 200 GB Pod Volume
          </Typography>
          <Typography fontSize={11} sx={{ opacity: 0.7 }}>
            Volume Path: /workspace
          </Typography>
        </Stack>
        <Stack>
          <Typography fontSize={11} fontWeight={500}>
            1 x A40
          </Typography>
          <Typography fontSize={11} sx={{ opacity: 0.7 }}>
            9 vCPU 50 GB RAM
          </Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} gap={1} alignItems={"center"} flexWrap={"wrap"}>
        <Stack direction={"row"} gap={0.5} alignItems={"center"}>
          <PublicIcon
            fontSize="small"
            sx={{
              color: "#6152a8",
            }}
          />
          <Typography>CA</Typography>
        </Stack>
        <div
          style={{
            width: "1px",
            height: "1rem",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0) 0%, #4A494F 50%, rgba(101, 77, 255, 0.0) 100%)",
            flexShrink: 0,
          }}
        />
        <Stack direction={"row"} gap={0.5} alignItems={"center"}>
          <CloudDownloadOutlinedIcon
            fontSize="small"
            sx={{
              opacity: 0.5,
            }}
          />
          <Typography>8654 Mbps</Typography>
        </Stack>
        <div
          style={{
            width: "1px",
            height: "1rem",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0) 0%, #4A494F 50%, rgba(101, 77, 255, 0.0) 100%)",
            flexShrink: 0,
          }}
        />
        <Stack direction={"row"} gap={0.5} alignItems={"center"}>
          <CloudUploadOutlinedIcon
            fontSize="small"
            sx={{
              opacity: 0.5,
            }}
          />
          <Typography>938 Mbps</Typography>
        </Stack>
        <div
          style={{
            width: "1px",
            height: "1rem",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0) 0%, #4A494F 50%, rgba(101, 77, 255, 0.0) 100%)",
            flexShrink: 0,
          }}
        />
        <Stack direction={"row"} gap={0.5} alignItems={"center"}>
          <SaveOutlinedIcon
            fontSize="small"
            sx={{
              opacity: 0.5,
            }}
          />
          <Typography>963 MBps</Typography>
        </Stack>
      </Stack>
      <Stack
        p={1}
        sx={{
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 0.5,
          background: "rgba(0,0,0,0.7)",
        }}
      >
        {fakePodLogs.map((log, i) => (
          <Stack
            direction={"row"}
            gap={1}
            alignItems={"center"}
            key={log}
            overflow={"hidden"}
          >
            <Typography
              sx={{ opacity: 0.7, fontFamily: "monospace" }}
              fontSize={10}
            >
              {i}
            </Typography>
            <Typography
              sx={{ fontFamily: "monospace", whiteSpace: "nowrap" }}
              fontSize={10}
            >
              {new Date(date + i * 1000).toISOString()}
            </Typography>
            <Typography
              sx={{ fontFamily: "monospace", whiteSpace: "nowrap" }}
              fontSize={10}
            >
              {log}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );}



const HeroWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '48px 16px',
  gap: '48px',
  width: '100%',
  maxWidth: '768.98px',
  margin: '0 auto',
  [theme.breakpoints.only('xs')]: {
    width: '90vw',
  },
  [theme.breakpoints.only('sm')]: {
    width: '70vw',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '32px 16px',
    gap: '32px',
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '24px',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    gap: '32px',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
	background:
		"radial-gradient(92.09% 85.42% at 86.3% 87.5%, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0) 86.18%), radial-gradient(65.28% 65.28% at 26.39% 20.83%, rgba(255, 255, 255, 0.0472) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%), #5D29F0",
	boxShadow:
		"inset 0px -6px 24px rgba(255, 255, 255, 0.16), inset 0px 1px 2px rgba(180, 172, 183, 0.72)",
	borderRadius: "8px",
	padding: "16px 24px 15px",
	width: "fit-content",
	minWidth: "250px",
	height: "61px",
	color: "#F9FAFB",
	textTransform: "none",
	textDecoration: "none",
	"&:hover": {
		textDecoration: "none"
	},
	fontSize: '18px',
}));

const Subheader = () => {
  return (
    <HeroWrapper>
      <ContentWrapper>
        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: { xs: '32px', sm: '40px', md: '48px' }, 
            fontWeight: 600, 
            lineHeight: '110%', 
            letterSpacing: '-0.03em', 
            textAlign: 'left', 
            color: '#FFFFFF', 
            width: '100%' 
          }}
        >
          GPU Computing So Simple,{' '}
          <Box
            component="span"
            sx={{
              background: 'linear-gradient(90deg, #C3BDFF 0%, #9E69FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline',
            }}
          >
             It Feels Like Magic.
          </Box>
        </Typography>

        <Typography 
          variant="body1" 
          sx={{ 
            fontSize: { xs: '16px', sm: '18px' }, 
            fontWeight: 500, 
            lineHeight: '24px', 
            textAlign: 'left', 
            color: 'rgba(249, 250, 251, 0.48)', 
            width: '100%', 
          }}
        >
          Getting started is as easy as flipping a switch. No labyrinthine menus, no guessing games—just simple, straightforward access to the GPUs you need, when you need them.
          <Box
            component="span"
            sx={{
              display: { xs: 'none', sm: 'inline' }
            }}
          >
            {' '}Our platform is designed for speed and simplicity, so you can spin up resources in seconds, not hours.
          </Box>
        </Typography>
        <FakePod />
      </ContentWrapper>
      <StyledButton
        component={Link}
        href="/console/deploy"
        endIcon={<ChevronRightIcon />}>
        Launch a GPU
      </StyledButton>
    </HeroWrapper>
  );
};

export default Subheader;