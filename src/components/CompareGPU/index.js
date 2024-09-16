import React from 'react';
import { Box, Stack, Typography, Link } from '@mui/material';
import Hero from './Hero';
import Overview from './Overview'; 
import Footer from './Footer'; 

const CompareGpus = ({ firstGPUData, secondGPUData, gpuList }) => {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Hero 
        firstGPUData={firstGPUData} 
        secondGPUData={secondGPUData} 
        gpuList={gpuList}
      />

      <Box height={50}/>

      <Overview 
        gpuList={gpuList}
        firstGPUData={firstGPUData}
        secondGPUData={secondGPUData}
      />

      <Footer />

      {/* Background element */}
      <Box
        sx={{
          position: 'absolute',
          left: '-50%',
          right: '-50%',
          top: '20rem',
          height: '30%',
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 65, 163, 0.25) 18.87%, rgba(4, 0, 16, 0.80) 52.12%, #170042 75%)",
          filter: "blur(64px)",
          zIndex: -1,
          transform: 'rotate(169.39deg)',
          transformOrigin: 'center center',
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
};

export default CompareGpus;
