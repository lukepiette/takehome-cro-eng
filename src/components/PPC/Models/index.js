import React from 'react';
import { Box } from '@mui/material';
import Hero from './Hero';

export default function ModelPage ({ data, modelName }) {
  return (
    <Box sx={{ position: 'relative' }}>
      <Hero modelName={modelName} data={data}/>
    </Box>
  );
};

