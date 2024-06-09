import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

export default function Location() {
    return (
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '196px',
          display: 'flex',
          maxWidth: '75.5rem', 
          margin: '0 auto', 
          flexDirection: 'row',
          alignItems: 'flex-start',
          padding: 5,
          mt:8
        }}
      >
        <Grid container>
            <Grid item xs={12} md={7.5}>
                <Box
                component="img"
                src="/static/images/about/location-banner.webp"
                alt="Location Thumbnail"
                sx={{
                    width: {xs:'400px', sm: '508px', lg:'608px'},
                    borderRadius: '12.7552px',
                    objectFit: 'cover',
                }}
                />
            </Grid>

            <Grid item xs={12} md={4.5} sx={{mt: {xs:3, md:0}}}>
                <Box>
                    <Box
                        sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                        }}
                    >
                        <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: '12px',
                            height: '30px',
                        }}
                        >
                        <Box
                            sx={{
                            width: '19.09px',
                            height: '19.09px',
                            background: 'radial-gradient(85.83% 85.83% at 50% 14.17%, #000000 0%, #000000 59.12%, rgba(0, 0, 0, 0.24) 96.98%, rgba(0, 0, 0, 0) 100%)',
                            boxShadow: 'inset 0px 1.76148px 10.5689px #673BB8, 0px 0px 10.5689px #7C00DE, 0px -1.18191px 1.18191px #BD00FF',
                            borderRadius: '50%',
                            transform: 'rotate(90deg)',

                            }}
                        />
                        <Typography
                            variant="h5"
                            sx={{
                            fontWeight: '500',
                            fontSize: '20px',
                            lineHeight: '30px',
                            letterSpacing: '-0.25px',
                            background: 'linear-gradient(313.71deg, rgba(248, 250, 252, 0.64) 8.27%, #F8FAFC 57.24%, rgba(248, 250, 252, 0.64) 96.6%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            textFillColor: 'transparent',
                            }}
                        >
                            Remote and Hybrid Team
                        </Typography>
                        </Box>
                        <Typography
                        sx={{
                            fontWeight: '400',
                            fontSize: '14px',
                            lineHeight: '22px',
                            letterSpacing: '-0.25px',
                            color: 'rgba(249, 250, 251, 0.64)',
                        }}
                        >
                        Our team operates remotely from various regions, including the US, Canada, Europe, and India. We have an office in San Francisco where 10 members of the team work in-person.
                        </Typography>
                        <Typography
                        sx={{
                            fontWeight: '400',
                            fontSize: '14px',
                            lineHeight: '22px',
                            letterSpacing: '-0.25px',
                            color: 'rgba(249, 250, 251, 0.64)',
                        }}
                        >
                        We are also committed to supporting talented individuals who wish to relocate to San Francisco. We welcome candidates who require work visas and are enthusiastic about joining our SF team.
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
      </Box>
    );
  }