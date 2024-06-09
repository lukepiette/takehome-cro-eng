import React from 'react';
import { Box, Typography, Button, Grid, IconButton, Link } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Announcements() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '48px',
        width: '100%',
        marginTop: '40px',
        maxWidth: '75.5rem',
        padding:4,
        mt:8
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          width: '100%',
          gap: '24px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <Typography
            sx={{
              fontWeight: '600',
              fontSize: '24px',
              lineHeight: '108%',
              letterSpacing: '-0.02em',
              color: '#F9FAFB',
            }}
          >
            Recent Announcements
          </Typography>
          <Typography
            sx={{
              fontWeight: '400',
              fontSize: '16px',
              lineHeight: '24px',
              letterSpacing: '-0.25px',
              color: '#94A3B8',
            }}
          >
            This page is updated mannually—for an up to date stream of RunPod news, checkout <Link href="https://blog.runpod.io/" target="_blank">our blog</Link>.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '32px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '48px',
            width: '608px',
            height: '546px',
          }}
        >
          <Box
            href="https://blog.runpod.io/runpods-20mm-milestone-fueling-our-vision-empowering-our-team"
            target="_blank"
            sx={{
              width: {xs:'400px', sm: '508px', md:'608px'},
              height: '342px',
              background: `url('/static/images/about/20m-fundraising-image-preview.webp') center center / cover no-repeat`,
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '12px',
            }}
            component={Link}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              width: {xs:'400px', sm: '508px', md:'608px'},
            }}
          >
            <Typography
              sx={{
                fontWeight: '600',
                fontSize: '20px',
                lineHeight: '108%',
                letterSpacing: '-0.02em',
                background: 'linear-gradient(313.71deg, rgba(248, 250, 252, 0.64) 8.27%, #F8FAFC 57.24%, rgba(248, 250, 252, 0.64) 96.6%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
              }}
            >
              RunPod's $20MM Milestone: Fueling Our Vision, Empowering Our Team
            </Typography>
            <Typography
              sx={{
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '160%',
                letterSpacing: '-0.25px',
                color: 'rgba(249, 250, 251, 0.64)',
              }}
            >
              Exciting news! RunPod has raised $20MM led by Intel Capital and Dell Technologies Capital. This boost will further our mission to revolutionize AI/ML cloud computing.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '24px',
                alignItems: 'center',
              }}
            >
              <Button
                variant="contained"
                href="https://blog.runpod.io/runpods-20mm-milestone-fueling-our-vision-empowering-our-team/"
                target="_blank"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px 12px',
                  gap: '8px',
                  background: 'radial-gradient(106.71% 106.71% at 50% -6.71%, #000000 0%, #000000 46.08%, #000111 85.94%)',
                  boxShadow: 'inset 0px -6px 24px rgba(255, 255, 255, 0.24), inset 0px 1px 2px #B4ACB7',
                  borderRadius: '8px',
                  color: '#F9FAFB',
                }}
              >
                Read More
                <ChevronRightIcon sx={{ color: '#F9FAFB' }} />
              </Button>
              <Typography
                sx={{
                  fontWeight: '400',
                  fontSize: '12px',
                  lineHeight: '160%',
                  letterSpacing: '-0.03em',
                  color: 'rgba(249, 250, 251, 0.48)',
                }}
              >
                May 8, 2024
              </Typography>
              <Box
                sx={{
                  width: '0px',
                  height: '20px',
                  borderLeft: '1px solid rgba(249, 250, 251, 0.48)',
                }}
              />
              <Typography
                sx={{
                  fontWeight: '400',
                  fontSize: '12px',
                  lineHeight: '160%',
                  letterSpacing: '-0.03em',
                  color: 'rgba(249, 250, 251, 0.48)',
                }}
              >
                4 Min Read
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}