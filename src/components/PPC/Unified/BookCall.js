import React from 'react';
import { Button, Box, Typography, Link, useTheme } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled } from '@mui/system';

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

const BookCall = () => {
  const theme = useTheme();

  return (
    <Box sx={{ 
      p: 4,
      maxWidth: 800,
      width: '100%',
      margin: '0 auto',
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0px',
      }}>
<Box sx={{
        maxWidth: '768.98px',
        width: '100%',
        margin: '0 auto',
        padding: { xs: '32px 16px', md: '48px 16px' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: '32px', md: '48px' },
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
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          width: '100%',
        }}>
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
            Unlock the Full Potential of RunPod with a 15-Minute Chat
            {' '}
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
              {' '}
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
            
              Schedule a 15-minute discovery call to see why leading AI teams are switching to RunPod for enhanced performance and cost savings.
          </Typography>
        </Box>
      </Box>

      <StyledButton
        component={Link}
        href="https://meetings.hubspot.com/margarita-melkoumov/meeting-requests-ppc"
        target="_blank"
        endIcon={<ChevronRightIcon />}>
        Book Your Call Now
      </StyledButton>


      </Box>
    </Box>
  );
};

export default BookCall;