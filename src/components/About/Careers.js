import React from 'react';
import { Grid, Typography, Box, Button, Link } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


export default function Careers() {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: {xs:'363px', md:'563px'},
                display: 'flex',
                justifyContent: 'center', // Center the container horizontally
                alignItems: 'center',
                backgroundImage: 'url("/static/images/about/careers-bg.webp")', // Make sure the path to the background image is correct
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mt:8
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '75.5rem', // Max width for the container
                    display: 'flex',
                    alignItems: 'center',
                    padding: 4,
                }}
            >
                <Box
                    sx={{
                        maxWidth: '430.29px',
                        color: 'rgba(249, 250, 251, 0.64)',
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 600,
                            fontSize: '24px',
                            lineHeight: '26px',
                            letterSpacing: '-0.02em',
                            background: 'linear-gradient(313.71deg, rgba(248, 250, 252, 0.64) 8.27%, #F8FAFC 57.24%, rgba(248, 250, 252, 0.64) 96.6%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            textFillColor: 'transparent',
                        }}
                    >
                        Careers at RunPod
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '24px',
                            letterSpacing: '-0.25px',
                            margin: '16px 0',
                        }}
                    >
                        All of our roles are either hybrid or remote. Most of our team is based in SF and New Jersey. We are currently looking to grow our SF team, and have a preference for candidates who are enthusiastic about working in-person.
                    </Typography>
                    <Button
                        variant="contained"
                        component={Link}
                        href="https://jobs.gusto.com/boards/runpod-inc-28beb0b2-4886-4575-bc81-f0e2f07a86eb"
                        target="_blank"
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '10px 12px 10px 16px',
                            gap: '8px',
                            background: 'radial-gradient(92.09% 85.42% at 86.3% 87.5%, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0) 86.18%), radial-gradient(65.28% 65.28% at 26.39% 20.83%, rgba(255, 255, 255, 0.0472) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%), #5D29F0',
                            boxShadow: 'inset 0px -2px 12px rgba(255, 255, 255, 0.24), inset 0px 2.6px 1px rgba(174, 172, 183, 0.25)',
                            borderRadius: '8px',
                            color: '#F9FAFB',
                            textTransform: 'none',
                            width: 'fit-content',
                            whiteSpace: 'nowrap', // Ensure the text doesn't wrap
                        }}
                        endIcon={<ChevronRightIcon />}
                    >
                        See Open Roles
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}