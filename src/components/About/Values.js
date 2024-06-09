import React from 'react';
import { Grid, Typography, Box, Paper, Chip } from '@mui/material';

export default function Values() {
    return (
        <Box sx={{ padding: 4, maxWidth: '75.5rem', margin: '0 auto', position: 'relative', mt:{xs:2, md:8} }}>
          {/* <Box
                sx={{
                    mb:12,
                    width: '100%',
                    height: '1px',
                    bottom: 0,
                    background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.5), transparent)',
                }}
            /> */}

          <Grid container spacing={4}>
            <Grid item xs={12} md={5}>
              <Box sx={{ marginBottom: {xs:0, md: 4} }}>
                <Chip label="Updated: Jun 2, 2024" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', boxShadow: 'inset 0px -6px 24px rgba(255, 255, 255, 0.24)', borderRadius: '100px', color: '#FFFFFF' }} />
                <Typography variant="h4" sx={{ marginTop: 2, marginBottom: 2 }}>
                  Our Core Values
                </Typography>
                <Typography sx={{ color: 'rgba(249, 250, 251, 0.8)' }}>
                These values don{"'"}t just define us; they are us. As we evolve, our brand will continue to project this true identity of our team, becoming richer and gaining equity over time. 
                </Typography>
                <Typography mt={2} sx={{ color: 'rgba(249, 250, 251, 0.8)' }}>
                Unlike our products, which will adapt and change, our brand{"'"}s core identity will remain consistent, changing only with deliberate effort and broad consensus.
                </Typography>
              </Box>
            </Grid>
    
            <Grid item xs={12} md={7}>
              <Grid container spacing={{xs:2, md: 4}}>
                <Grid item xs={12} md={6}>
                  <Paper elevation={3} sx={{ padding: 3, background: 'radial-gradient(99.75% 99.75% at 50% 99.75%, rgba(30, 41, 59, 0.24) 0%, rgba(15, 23, 42, 0.000024) 100%), rgba(0, 0, 0, 0.01)', border: '1px solid rgba(249, 250, 251, 0.08)', borderRadius: '12px', boxShadow: '0px 4px 100px rgba(0, 0, 0, 0.16)', backdropFilter: 'blur(50px)' }}>
                    <Typography variant="h6" sx={{ color: '#FFFFFF', marginBottom: 1 }}>
                      Courage to Innovate
                    </Typography>
                    <Typography sx={{ color: 'rgba(249, 250, 251, 0.64)' }}>
                      We don{"'"}t just push boundaries; we redefine them.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={3} sx={{ padding: 3, background: 'radial-gradient(99.75% 99.75% at 50% 99.75%, rgba(30, 41, 59, 0.24) 0%, rgba(15, 23, 42, 0.000024) 100%), rgba(0, 0, 0, 0.01)', border: '1px solid rgba(249, 250, 251, 0.08)', borderRadius: '12px', boxShadow: '0px 4px 100px rgba(0, 0, 0, 0.16)', backdropFilter: 'blur(50px)' }}>
                    <Typography variant="h6" sx={{ color: '#FFFFFF', marginBottom: 1 }}>
                      Generosity of Spirit
                    </Typography>
                    <Typography sx={{ color: 'rgba(249, 250, 251, 0.64)' }}>
                      Our culture thrives on support and collaboration.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={3} sx={{ padding: 3, background: 'radial-gradient(99.75% 99.75% at 50% 99.75%, rgba(30, 41, 59, 0.24) 0%, rgba(15, 23, 42, 0.000024) 100%), rgba(0, 0, 0, 0.01)', border: '1px solid rgba(249, 250, 251, 0.08)', borderRadius: '12px', boxShadow: '0px 4px 100px rgba(0, 0, 0, 0.16)', backdropFilter: 'blur(50px)' }}>
                    <Typography variant="h6" sx={{ color: '#FFFFFF', marginBottom: 1 }}>
                      Commitment to Growth
                    </Typography>
                    <Typography sx={{ color: 'rgba(249, 250, 251, 0.64)' }}>
                      We believe that every challenge is an opportunity for learning.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={3} sx={{ padding: 3, background: 'radial-gradient(99.75% 99.75% at 50% 99.75%, rgba(30, 41, 59, 0.24) 0%, rgba(15, 23, 42, 0.000024) 100%), rgba(0, 0, 0, 0.01)', border: '1px solid rgba(249, 250, 251, 0.08)', borderRadius: '12px', boxShadow: '0px 4px 100px rgba(0, 0, 0, 0.16)', backdropFilter: 'blur(50px)' }}>
                    <Typography variant="h6" sx={{ color: '#FFFFFF', marginBottom: 1 }}>
                      Trust in Action
                    </Typography>
                    <Typography sx={{ color: 'rgba(249, 250, 251, 0.64)' }}>
                      Our reliability is the cornerstone of our integrity.
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* <Box
                sx={{
                    mt:12,
                    width: '100%',
                    height: '1px',
                    bottom: 0,
                    background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.5), transparent)',
                }}
            /> */}


        </Box>
      );
    }
    
