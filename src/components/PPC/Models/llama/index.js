import React from 'react';
import { Box } from '@mui/material';
import Hero from './Hero';


export default function AWSComparison ({ data }) {
  return (
    <Box sx={{ position: 'relative' }}>
      <Hero data={data}/>
    </Box>
  );
};

