import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';

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

const ListItem = ({ children }) => (
  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
    <Box
      sx={{
        width: '24px',
        height: '24px',
        borderRadius: '4px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mr: 2,
        flexShrink: 0,
      }}
    >
      <CloseIcon sx={{ color: '#FF4D4F', fontSize: '16px' }} />
    </Box>
    <Typography
      variant="body1"
      sx={{
        fontSize: { xs: '16px', sm: '18px' },
        fontWeight: 500,
        lineHeight: '24px',
        color: '#FFFFFF', // Brighter, slightly blue-tinted white
        textShadow: '0 0 10px rgba(230, 232, 255, 0.3)', // Subtle glow effect
      }}
    >
      {children}
    </Typography>
  </Box>
);

const ProblemWithCompetitor = () => {
  return (
    <HeroWrapper>
      <ContentWrapper>

        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: { xs: '32px', sm: '40px', md: '42px' }, 
            fontWeight: 600, 
            lineHeight: '96%', 
            letterSpacing: '-0.03em', 
            textAlign: 'left', 
            color: '#FFFFFF', 
            width: '100%',
          }}
        >
          AWS:{' '}
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
            The Dinosaur{' '}
          </Box>
          in the Age of AI
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
          <span style={{ color: '#FFFFFF' }}>You wouldn{"'"}t use a horse and buggy to win a Formula 1 race. So why use AWS for your AI workloads? </span>It{"'"}s a relic of the CPU era, lumbering in a world that demands GPU agility.
        </Typography>
        <Box sx={{ width: '100%' }}>
          <ListItem>No single A100 or H100 instances.</ListItem>
          <ListItem>Tedious sales calls for simple reservations.</ListItem>
          <ListItem>Support that costs extra but delivers less.</ListItem>
          <ListItem>And a labyrinth of services so complex, it takes a team of experts just to launch a single GPU.</ListItem>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '16px', sm: '18px' },
              fontWeight: 500,
              lineHeight: '24px',
              color: 'rgba(249, 250, 251, 0.48)',
              mt: 2,
            }}
          >
            AWS isn{"'"}t just inefficient for AI—it{"'"}s holding you back. It{"'"}s time to evolve.
          </Typography>
        </Box>

      </ContentWrapper>

    </HeroWrapper>
  );
};

export default ProblemWithCompetitor;