import React from 'react';
import { Box, Typography, Button, Link } from '@mui/material';
import { styled } from '@mui/system';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RequestCounter from './RequestCounter';
import Logos from '../Dynamic/Logos';

const HeroWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '48px 16px',
  gap: '48px',
  width: '100%',
  maxWidth: '768.98px',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    padding: '32px 16px',
    gap: '32px',
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '48px',
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

const Text = styled(Typography)({
	width: "100%",
	fontStyle: "normal",
	fontWeight: 500,
	fontSize: "14px",
	lineHeight: "20px",
	textAlign: "center",
	letterSpacing: "-0.25px",
	color: "rgba(249, 250, 251, 0.48)"
});

const Hero = ({ data, modelName }) => {
  return (
    <HeroWrapper>
      <ContentWrapper>
        <Box 
          component="img" 
          src="/static/images/ppc/radial.webp"
          alt="Radial background"
          sx={{ 
            width: '100%', 
            maxWidth: '210.05px', 
            height: 'auto', 
            maxHeight: '80.66px',
            objectFit: 'contain',
            mt: { xs: 3, sm: 5, md: 10 }
          }}
        />
        
        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: { xs: '32px', sm: '48px' }, 
            fontWeight: 600, 
            lineHeight: '110%', 
            letterSpacing: '-0.03em', 
            textAlign: 'center', 
            color: '#FFFFFF', 
            width: '100%' ,
          }}
        >
          Run{' '} 
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
            {modelName}{' '}
          </Box>
          with your own custom API endpoint
        </Typography>

        <StyledButton
          component={Link}
          href="/console/signup"
          endIcon={<ChevronRightIcon />}
        >
          Create your API endpoint
        </StyledButton>
      </ContentWrapper>

      <Box sx={{ height: { xs: '15px', sm: '0px', md: '0px' } }}></Box>
      <RequestCounter data={data}/>

      <Box sx={{ height: { xs: '15px', sm: '0px', md: '0px' }, marginTop: { xs: -10, sm: -10, md: -15 } }}></Box>
      <Logos
						logoText={
							<Text variant="body2">
								Senior ML engineers and top executives from the
								world{"'"}s leading companies{" "}
								<span style={{ color: "#FFFFFF" }}>
									slash millions in costs
								</span>{" "}
								every year by choosing RunPod for their critical
								AI workloads.
							</Text>
						}
					/>

      <Box
        sx={{
          width: '2024px',
          height: '940px',
          position: 'absolute',
          overflow: 'hidden',
          zIndex:-1,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: '1485.9px',
            height: '1485.9px',
            left: 'calc(50% - 1485.9px/2 - 0.12px)',
            top: 'calc(50% - 1485.9px/2 + 728.96px)',
            background: 'radial-gradient(85.83% 85.83% at 50% 14.17%, #000000 0%, #000000 59.12%, #000342 85.94%)',
            boxShadow: '0px 2.40622px 2.40622px rgba(77, 148, 255, 0.25), inset 0px -18.0466px 30.0777px #538DFF, inset 0px -60.1555px 60.1555px #538DFF',
            borderRadius: '50%',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: '1273.19px',
            height: '1273.19px',
            left: 'calc(50% - 1273.19px/2 - 0.12px)',
            top: 'calc(50% - 1273.19px/2 + 659.69px)',
            background: 'radial-gradient(85.83% 85.83% at 50% 14.17%, #000000 0%, #000000 59.12%, #000000 85.94%)',
            boxShadow: '0px 2.40622px 2.40622px rgba(77, 148, 255, 0.25), inset 0px -8px 30.0777px #5D29F0, inset 0px -60.1555px 0px #538DFF',
            borderRadius: '50%',
          }}
        />
      </Box>

      <Box sx={{ height: { xs: '30px', sm: '0px', md: '0px' } }}></Box>

    </HeroWrapper>
  );
};

export default Hero;