import React from 'react';
import { Box } from '@mui/material';
import Hero from './Hero';
import Logos from './Logos';
import ProblemWithCompetitor from './ProblemWithCompetitor';
import BenefitsOfRunPod from './BenefitsOfRunPod';
import Pricing from './Pricing';
import Comparison from './Comparison';
import Quote from './Quote';
import RequestCounter from './RequestCounter';
import FooterGetStarted from './FooterGetStarted';


export default function AWSComparison ({ data }) {
  return (
    <Box sx={{ position: 'relative' }}>
      <Hero />

      <Logos />
      <Box sx={{ height: { xs: '50px', sm: '50px', md: '50px' } }}></Box>

      <ProblemWithCompetitor />
      <Box sx={{ height: { xs: '25px', sm: '50px', md: '50px' } }}></Box>

      <BenefitsOfRunPod />
      <Box sx={{ height: { xs: '0px', sm: '0px', md: '0px' } }}></Box>

      <Pricing />
      <Box sx={{ height: { xs: '25px', sm: '75px', md: '75px' } }}></Box>

      <Comparison />
      <Box sx={{ height: { xs: '25px', sm: '75px', md: '50px' } }}></Box>

      <Quote />
      <Box sx={{ height: { xs: '50px', sm: '75px', md: '100px' } }}></Box>

      <RequestCounter data={data} />
      <Box sx={{ height: { xs: '25px', sm: '0px', md: '0px' } }}></Box>

      <FooterGetStarted />
    </Box>
  );
};

