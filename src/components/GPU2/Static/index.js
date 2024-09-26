import React from 'react';
import { Box } from '@mui/material';
import Hero from './Hero';
import Logos from './Logos';
import Pricing from './Pricing';
import Comparison from './Comparison';
import Scale from './Scale';


import Quote from './Quote';
import Subheader from './Subheader';
import Counter from './Counter';
import Footer from './Footer';





export default function EasyToUse ({ data }) {
  return (
    <Box sx={{ position: 'relative' }}>
      <Hero />

      <Logos />

      <Box sx={{ height: { xs: '50px', sm: '75px', md: '100px' } }}></Box>
      <Subheader />

      <Box sx={{ height: { xs: '0px', sm: '75px', md: '0px' } }}></Box>
      <Pricing />

      <Box sx={{ height: { xs: '50px', sm: '75px', md: '75px' } }}></Box>
      <Scale />
      <Quote />

      <Box sx={{ height: { xs: '50px', sm: '75px', md: '100px' } }}></Box>
      <Counter data={data} />


      <Box sx={{ height: { xs: '0px', sm: '75px', md: '100px' } }}></Box>
      <Comparison />


      <Box sx={{ height: { xs: '25px', sm: '75px', md: '50px' } }}></Box>
      <Footer />
    </Box>
  );
};

