import React, { useEffect, useState, useRef } from 'react';
import { Box, Typography, Button, Grid, IconButton, Link } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Photos() {
    const images = [
        { src: '/static/images/about/tp-21.webp', aspectRatio: '16/12', size: 2 },
        { src: '/static/images/about/tp-25.webp', aspectRatio: '16/12', size: 2 },
        { src: '/static/images/about/tp-3.webp', aspectRatio: '16/12', size: 2 },
        { src: '/static/images/about/tp-18.webp', aspectRatio: '16/12', size: 2 },
        { src: '/static/images/about/tp-23.webp', aspectRatio: '16/12', size: 2 },

        { src: '/static/images/about/tp-24.webp', aspectRatio: '16/20', size: 2 },
        { src: '/static/images/about/tp-19.webp', aspectRatio: '16/20', size: 2 },
        { src: '/static/images/about/tp-16.webp', aspectRatio: '16/20', size: 2 },
        { src: '/static/images/about/tp-20.webp', aspectRatio: '16/20', size: 2 },
        { src: '/static/images/about/tp-22.webp', aspectRatio: '16/20', size: 2 },

        { src: '/static/images/about/tp-10.webp', aspectRatio: '16/20', size: 2 },
        { src: '/static/images/about/tp-12.webp', aspectRatio: '16/20', size: 2 },
        { src: '/static/images/about/tp-11.webp', aspectRatio: '16/20', size: 2 },
        { src: '/static/images/about/tp-1.webp', aspectRatio: '16/20', size: 2 },
        { src: '/static/images/about/tp-4.webp', aspectRatio: '16/20', size: 2 },

        // { src: '/static/images/about/tp-5.webp', aspectRatio: '16/20', size: 2 },
        // { src: '/static/images/about/tp-9.webp', aspectRatio: '16/20', size: 2 },
        // { src: '/static/images/about/tp-6.webp', aspectRatio: '16/20', size: 2 },
        // { src: '/static/images/about/tp-7.webp', aspectRatio: '16/20', size: 2 },
        // { src: '/static/images/about/tp-8.webp', aspectRatio: '16/20', size: 2 },


        // { src: '/static/images/about/tp-14.webp', aspectRatio: '16/20', size: 2 },
        // { src: '/static/images/about/tp-15.webp', aspectRatio: '16/20', size: 2 },
        // { src: '/static/images/about/tp-17.webp', aspectRatio: '16/20', size: 2 },
        // { src: '/static/images/about/tp-13.webp', aspectRatio: '16/20', size: 2 },
      ];
      
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Center align the Box contents
          width: '100%',
          padding: {xs:1, md:1},
        }}
      >
        <Grid 
            container 
            sx={{ 
            mt: { xs: 0, md: 4 },
            justifyContent: 'center', // Center align the Grid items
            gap: 1,
            maxWidth:"1400px"
            }}
        >
        {images.map((image, index) => (
            <Grid item xs={image.size} key={index}>
            <Box
                sx={{
                width: { xs: '100%', sm: '100%', md: '100%' }, // Adjust width to be responsive
                aspectRatio: image.aspectRatio, // Maintain aspect ratio
                background: `url(${image.src}) center center / cover no-repeat`,
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '12px',
                }}
            />
            </Grid>
        ))}
        </Grid>
    </Box>
  );
}
