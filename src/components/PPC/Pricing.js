import React from 'react';
import { Box, Grid, Stack, Typography, useMediaQuery, useTheme, Link, Button } from '@mui/material';
import { styled } from '@mui/system';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const GpuRow = ({ gpu, communityPrice, securePrice, isFirstInCategory, isLastInCategory }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  const parts = gpu.split(' ');
  const vramPart = parts.slice(-2).join(' '); // Get the last two parts (XXGB VRAM)
  const gpuModel = parts.slice(0, -2).join(' '); // Join the rest back together
  
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      border="1px solid rgba(249, 250, 251, 0.08)"
      borderRadius={isFirstInCategory ? "1.2rem 1.2rem 0 0" : isLastInCategory ? "0 0 1.2rem 1.2rem" : 0}
      borderBottom={isLastInCategory ? "1px solid rgba(249, 250, 251, 0.08)" : 0}
      boxShadow="0px 4px 100px rgba(0, 0, 0, 0.16)"
      sx={{
        backdropFilter: "blur(50px)",
        background: "linear-gradient(270deg, rgba(51, 65, 85, 0.0001) 0%, rgba(51, 65, 85, 0.32) 52.62%, rgba(51, 65, 85, 0.0001) 100%)",
      }}
    >
      <Box width="30%" px={isXs ? 1 : 2.2} py={1.6}>
        <Stack direction="column" spacing={0.5}>
          <Typography color="#fff" fontSize={isXs ? 14 : 18} fontWeight="bold">
            {gpuModel}
          </Typography>
          <Typography color="rgba(255, 255, 255, 0.7)" fontSize={isXs ? 12 : 14} fontWeight="300">
            {vramPart}
          </Typography>
        </Stack>
      </Box>
      <Box width="35%" px={isXs ? 1 : 2.2} py={1.6}>
        <Box
          sx={{
            backgroundColor: '#5D29F0',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '8px',
            padding: isXs ? '2px 4px' : '4px 8px',
            fontSize: isXs ? '14px' : '18px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            background: 'linear-gradient(165deg, #5D29F0 20%, #2c1772 100%)',
            textAlign: 'center',
            display: 'inline-block',
            width: 'auto',
          }}
        >
          ${communityPrice}/hr
        </Box>
      </Box>
      <Box width="35%" px={isXs ? 1 : 2.2} py={1.6}>
        <Typography color="#FFFFFF" fontSize={isXs ? 14 : 18}>
          {securePrice ? `$${securePrice}/hr` : 'NA'}
        </Typography>
      </Box>
    </Stack>
  );
};

const Pricing = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  const tableData = [
    { gpu: 'H100 80GB VRAM', communityPrice: 2.69, securePrice: 3.29 },
    { gpu: 'A100 80GB VRAM', communityPrice: 1.19, securePrice: 1.69 },
    { gpu: 'A40 48GB VRAM', communityPrice: 0.47, securePrice: 0.35 },
    { gpu: 'RTX A6000 48GB VRAM', communityPrice: 0.49, securePrice: 0.76 },
    { gpu: 'RTX 4090 24GB VRAM', communityPrice: 0.44, securePrice: 0.69 },
    { gpu: 'RTX 3090 24GB VRAM', communityPrice: 0.22, securePrice: 0.43 },
    { gpu: 'RTX A4000 16GB VRAM', communityPrice: 0.17, securePrice: 0.32 },
    { gpu: 'V100 16GB VRAM', communityPrice: 0.19, securePrice: null },
  ];

  // Sort the tableData entries by Community Cloud price (highest to lowest)
  const sortedTableData = tableData.sort((a, b) => b.communityPrice - a.communityPrice);

  // Calculate max savings
  const maxSavings = tableData.reduce((max, row) => {
    if (row.securePrice) {
      const savings = Math.round((1 - row.communityPrice / row.securePrice) * 100);
      return Math.max(max, savings);
    }
    return max;
  }, 0);

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
      width: '80vw',
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

  return (
    <Box sx={{ p: 3, borderRadius: 2 }}>
      <HeroWrapper>
        <ContentWrapper>
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '32px', sm: '40px', md: '42px' }, 
              fontWeight: 600, 
              lineHeight: '110%', 
              letterSpacing: '-0.03em', 
              textAlign: 'left', 
              color: '#FFFFFF', 
              width: '100%',
            }}
          >
            Pricing That Makes AI Teams Smile and{' '}
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
              Finance Teams Cheer{' '}
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
            Slash costs, not performance. Our transparent, on-demand pricing means you pay only for what you use.
          </Typography>

        </ContentWrapper>
      </HeroWrapper>

      <Box 
        sx={{ 
          position: 'relative',
          overflow: 'hidden',
          p: { xs: 1, sm: 3 },
          borderRadius: 2,
          maxWidth: 800,
          width: '100%',
          margin: '0 auto'
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          
          <Box>
            <Grid container alignItems="center" mb={0}>
              <Grid item xs={3.6}>
                <Typography fontSize={isXs ? 14 : 24} fontWeight="bold" textAlign="left" color="#FFFFFF" pl={isXs ? 1 : 2.2}>
                  {isXs ? '' : 'GPU Model'}
                </Typography>
              </Grid>
              <Grid item xs={4.2}>
                <Typography fontSize={isXs ? 16 : 24} fontWeight="bold" textAlign="left" color="#FFFFFF" pl={isXs ? 1 : 1}>
                  {isXs ? 'Community' : 'Community Cloud'}
                </Typography>
              </Grid>
              <Grid item xs={4.2}>
                <Typography fontSize={isXs ? 16 : 24} fontWeight="bold" textAlign="left" pl={isXs ? 1 : 1} color="#FFFFFF">
                  {isXs ? 'Secure' : 'Secure Cloud'}
                </Typography>
              </Grid>
            </Grid>

            <Grid container alignItems="center" mb={2}>
              <Grid item xs={3.6}></Grid>
              <Grid item xs={4.2}>
                <Typography fontSize={isXs ? 10 : 14} textAlign="left" color="#FFFFFF" pl={isXs ? 1 : 1}>
                  <CheckIcon sx={{ color: '#4CAF50', fontSize: 'inherit', verticalAlign: 'middle', mr: 0.5 }} />
                  99.50% Uptime
                </Typography>
                <Typography fontSize={isXs ? 10 : 14} textAlign="left" color="#FFFFFF" pl={isXs ? 1 : 1}>
                  <CloseIcon sx={{ color: '#9e9e9e', fontSize: 'inherit', verticalAlign: 'middle', mr: 0.5 }} />
                  Network Storage
                </Typography>
              </Grid>
              <Grid item xs={4.2}>
                <Typography fontSize={isXs ? 10 : 14} textAlign="left" color="#FFFFFF" pl={isXs ? 1 : 1}>
                  <CheckIcon sx={{ color: '#4CAF50', fontSize: 'inherit', verticalAlign: 'middle', mr: 0.5 }} />
                  99.99% Uptime
                </Typography>
                <Typography fontSize={isXs ? 10 : 14} textAlign="left" color="#FFFFFF" pl={isXs ? 1 : 1}>
                  <CheckIcon sx={{ color: '#4CAF50', fontSize: 'inherit', verticalAlign: 'middle', mr: 0.5 }} />
                  Network Storage
                </Typography>
              </Grid>
            </Grid>

            <Stack>
              {sortedTableData.map((gpu, index) => (
                <GpuRow
                  key={gpu.gpu}
                  gpu={gpu.gpu}
                  communityPrice={gpu.communityPrice}
                  securePrice={gpu.securePrice}
                  isFirstInCategory={index === 0}
                  isLastInCategory={index === sortedTableData.length - 1}
                />
              ))}
            </Stack>
          </Box>
          
        </Box>
      </Box>

      <Box sx={{ 
        mt: 2, 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 800,
        width: '100%',
        margin: '0 auto',
        padding: '0 24px',
      }}>
        <Box sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center', 
          mb: 2,
          mt: -0,
        }}>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#ffffff', 
              fontSize: '1rem',
              textAlign: 'center',
            }}
          >
            +24 more GPU models on RunPod
          </Typography>
        </Box>

        <StyledButton
          component={Link}
          href="/console/deploy"
          endIcon={<ChevronRightIcon />}
        >
          See All GPU Pricing
        </StyledButton>
      </Box>
    </Box>
  );
};

export default Pricing;