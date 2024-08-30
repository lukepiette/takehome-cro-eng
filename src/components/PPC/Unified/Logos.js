import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const LogosContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '791.97px',
  margin: '0 auto',
  padding: '20px',
  [theme.breakpoints.down('sm')]: {
    padding: '10px',
  },
}));

const BackgroundRect = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '14.03px',
  background: '#010111',
  opacity: 0.4,
  filter: 'blur(48px)',
  marginBottom: '20px',
}));

const ContentFrame = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '26px',
  width: '100%',
  maxWidth: '671.65px',
}));

const TextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '12px',
  width: '100%',
}));

const Dot = styled(Box)(({ theme }) => ({
  width: '16px',
  height: '16px',
  position: 'relative',
}));

const DotInner = styled(Box)(({ theme }) => ({
  boxSizing: 'border-box',
  position: 'absolute',
  width: '16px',
  height: '16px',
  left: 0,
  top: 0,
  background: 'radial-gradient(85.83% 85.83% at 50% 14.17%, #000000 0%, #000000 59.12%, rgba(0, 0, 0, 0.24) 96.98%, rgba(0, 0, 0, 0) 100%)',
  boxShadow: 'inset 0px 1.4766px 8.85962px #673BB8',
  filter: 'drop-shadow(0px 0px 8.85962px #7C00DE) drop-shadow(0px -0.990764px 0.990764px #BD00FF)',
  borderRadius: '361.566px',
  transform: 'rotate(90deg)',
}));

const DotInnerSmall = styled(DotInner)(({ theme }) => ({
  width: '8.87px',
  height: '8.87px',
  left: '-3.56px',
  top: '3.57px',
}));

const Text = styled(Typography)(({ theme }) => ({
  width: '100%',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '20px',
  textAlign: 'center',
  letterSpacing: '-0.25px',
  color: 'rgba(249, 250, 251, 0.48)',
}));

const LogosWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '600px',
  margin: '0 auto',
  gap: '20px', // Reduced gap for desktop
  [theme.breakpoints.down('sm')]: {
    flexWrap: 'nowrap',
    overflowX: 'auto',
    justifyContent: 'flex-start',
    width: '100vw', // Full viewport width on mobile
    maxWidth: 'none', // Remove max-width constraint on mobile
    margin: '0 -16px', // Negative margin to counteract parent padding
    padding: '0 16px', // Add padding to the sides
    gap: '15px',
  },
}));

const Logo = styled(Box)(({ theme }) => ({
  flex: '0 0 auto',
  width: 'auto',
  height: '20px',
  [theme.breakpoints.down('sm')]: {
    height: '15px',
  },
}));

const MetaLogo = styled(Logo)(({ theme }) => ({
  height: '30px',
  [theme.breakpoints.down('sm')]: {
    height: '24px',
  },
}));

const logoImages = [
  { src: '/static/images/ppc/meta-logo.webp', width: '80.46px', height: '25.6px', alt: 'Meta logo' },
  { src: '/static/images/ppc/siemens-logo.webp', width: '84.11px', height: '18.65px', alt: 'Siemens logo' },
  { src: '/static/images/ppc/bytedance-logo.webp', width: '84.04px', height: '14.49px', alt: 'ByteDance logo' },
  { src: '/static/images/ppc/rogers-logo.webp', width: '79.09px', height: '13.81px', alt: 'Rogers logo' },
];

const Logos = () => {
  return (
    <LogosContainer>
      <BackgroundRect />
      <ContentFrame>
        <TextContainer>
          <Dot>
            <DotInner />
            <DotInnerSmall />
          </Dot>
          <Text variant="body2">
          AI teams at leading companies choose RunPod for our unparalleled speed and developer experience—<span style={{ color: '#FFFFFF' }}>making AI development not just possible, but enjoyable.</span>
          </Text>
        </TextContainer>
        <LogosWrapper>
          {logoImages.map((logo, index) => {
            const LogoComponent = logo.alt === 'Meta logo' ? MetaLogo : Logo;
            return (
              <LogoComponent key={index}>
                <Box
                  component="img"
                  src={logo.src}
                  alt={logo.alt}
                  sx={{
                    height: '100%',
                    width: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </LogoComponent>
            );
          })}
        </LogosWrapper>
      </ContentFrame>
    </LogosContainer>
  );
};

export default Logos;
