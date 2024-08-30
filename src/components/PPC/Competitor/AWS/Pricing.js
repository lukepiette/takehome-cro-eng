import React from 'react';
import { Box, Grid, Stack, Typography, useMediaQuery, useTheme, Link, Button } from '@mui/material';
import { styled } from '@mui/system';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const GpuRow = ({ gpu, runpodPrice, awsPrice, isFirstInCategory, isLastInCategory }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  const runpodPriceFormatted = runpodPrice.toFixed(2);
  const awsPriceFormatted = awsPrice ? awsPrice.toFixed(2) : 'NA';
  
  const [gpuModel, vramPart] = gpu.split(' ');
  
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
      <Box width="33.33%" px={isXs ? 1 : 2.2} py={1.6}>
        <Typography color="#fff" fontSize={isXs ? 14 : 18} fontWeight="bold" component="span">
          {gpuModel}
        </Typography>
        <Typography color="#fff" fontSize={isXs ? 12 : 18} fontWeight="300" component="span" ml={1}>
          {vramPart}
        </Typography>
      </Box>
      <Box width="33.33%" px={isXs ? 1 : 2.2} py={1.6}>
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
          ${runpodPriceFormatted}/hr
        </Box>
      </Box>
      <Box width="33.33%" px={isXs ? 1 : 2.2} py={1.6}>
        <Typography color="rgba(249, 250, 251, 0.48)" fontSize={isXs ? 14 : 18}>
          {awsPrice ? `$${awsPriceFormatted}/hr` : 'NA'}
        </Typography>
      </Box>
    </Stack>
  );
};

const Pricing = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  const tableData = [
    { gpu: 'H100 80GB VRAM', runpodPrice: 2.79, awsPrice: 12.29 },
    { gpu: 'A100 80GB VRAM', runpodPrice: 1.19, awsPrice: 7.35 },
    { gpu: 'L40S 48GB VRAM', runpodPrice: 0.79, awsPrice: 1.96 },
    { gpu: 'L4 24GB VRAM', runpodPrice: 0.43, awsPrice: 1.00 },
    { gpu: 'V100 16GB VRAM', runpodPrice: 0.19, awsPrice: 3.06 },
  ];

  // Sort the tableData entries by RunPod price (highest to lowest)
  const sortedTableData = tableData.sort((a, b) => b.runpodPrice - a.runpodPrice);

  // Calculate max savings
  const maxSavings = tableData.reduce((max, row) => {
    if (row.awsPrice) {
      const savings = Math.round((1 - row.runpodPrice / row.awsPrice) * 100);
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
    background: 'radial-gradient(92.09% 85.42% at 86.3% 87.5%, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0) 86.18%), radial-gradient(65.28% 65.28% at 26.39% 20.83%, rgba(255, 255, 255, 0.0472) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%), #5D29F0',
    boxShadow: 'inset 0px -6px 24px rgba(255, 255, 255, 0.16), inset 0px 1px 2px rgba(180, 172, 183, 0.72)',
    borderRadius: '8px',
    padding: '16px 8px 15px 12px',
    width: '100%',
    maxWidth: '288px',
    height: '51px',
    color: '#F9FAFB',
    textTransform: 'none',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
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
            <Grid container alignItems="center" mb={2}>
              <Grid item xs={4}>
                <Typography fontSize={isXs ? 20 : 26} fontWeight="bold" textAlign="left" color="#FFFFFF" pl={isXs ? 1 : 2.2}>
                  GPU
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography fontSize={isXs ? 20 : 26} fontWeight="bold" textAlign="left" color="#FFFFFF" pl={isXs ? 1 : 2.2}>
                  RunPod
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography fontSize={isXs ? 20 : 26} fontWeight="bold" textAlign="left" pl={isXs ? 1 : 2.2} color="rgba(249, 250, 251, 0.48)">
                  {isXs ? "AWS" : "AWS EC2"}
                </Typography>
              </Grid>
            </Grid>

            <Stack>
              {sortedTableData.map((gpu, index) => (
                <GpuRow
                  key={gpu.gpu}
                  gpu={gpu.gpu}
                  runpodPrice={gpu.runpodPrice}
                  awsPrice={gpu.awsPrice}
                  isFirstInCategory={index === 0}
                  isLastInCategory={index === sortedTableData.length - 1}
                />
              ))}
            </Stack>
          </Box>
          
        </Box>
      </Box>

      {/* Updated Box for the additional text and button */}
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
          justifyContent: 'center', // Changed from 'flex-start' to 'center'
          mb: 2,
          mt: -0,
        }}>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#FFFFFF', 
              fontSize: '1rem',
              textAlign: 'center',
            }}
          >
            +27 more GPU models on RunPod
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