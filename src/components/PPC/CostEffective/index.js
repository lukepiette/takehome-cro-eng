import React from 'react';
import { Box } from '@mui/material';
import Hero from './Hero';
import Logos from './Logos';
import Quote from './Quote';
import Subheader from './Subheader';
import Counter from './Counter';
import Footer from './Footer';



export default function CostEffective ({ data }) {
  return (
    <Box sx={{ position: 'relative' }}>
      <Hero />

      <Logos />

      <Box sx={{ height: { xs: '50px', sm: '75px', md: '100px' } }}></Box>

      <Quote />


      <Box sx={{ height: { xs: '50px', sm: '75px', md: '100px' } }}></Box>

      <Subheader />

      <Box sx={{ height: { xs: '75px', sm: '75px', md: '100px' } }}></Box>

      <Counter data={data} />

      <Box sx={{ height: { xs: '100px', sm: '75px', md: '50px' } }}></Box>

      <Footer />
    </Box>
  );
};

