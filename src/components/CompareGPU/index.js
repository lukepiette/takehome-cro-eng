import React from 'react';
import { Box, Stack, Typography, Link } from '@mui/material';
import Hero from './Hero';
import CostChart from './CostChart';
import ThroughputChart from './ThroughputChart';

const CompareGpus = ({ firstGPUData, secondGPUData }) => {
  return (
    <>
      {/* Hero section */}
      <Hero firstGPUData={firstGPUData} secondGPUData={secondGPUData} />

      {/* Cost comparison section */}
      <Box sx={{ padding: '20px', marginTop: 2 }}>
        <Typography variant="h2" align="center"
                  sx={{ 
                    fontSize: { xs: '28px', sm: '32px', md: '36px' }, 
                    fontWeight: 600, 
                    lineHeight: '96%', 
                    letterSpacing: '-0.03em', 
                    color: '#FFFFFF', 
                  }}>
            Llama 8B Benchmarks
        </Typography>
        <Typography variant="body1" sx={{ 
            fontSize: { xs: '14px', sm: '16px' }, 
            textAlign: 'center', 
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '500px',
            margin: '0 auto', // Add this line
            mt:3
            }}>
            Benchmarks where run on <Link href="https://huggingface.co/meta-llama/Meta-Llama-3.1-8B" target="_blank">Llama 3.1 8B</Link> using vLLM. For more details on vLLM, check out the <Link href="https://github.com/vllm-project/vllm/tree/main/benchmarks" target="_blank">vLLM benchmarks repository</Link>
        </Typography>

        {/* Throughput comparison section */}
        <Stack mt={7}>
            <Typography variant="h3" align="center" gutterBottom>
            Throughput Comparison
            </Typography>
            <ThroughputChart firstGPUData={firstGPUData} secondGPUData={secondGPUData} />
        </Stack>

        <Stack mt={7} mb={10}>
            <Typography variant="h3" align="center" gutterBottom>
            Cost Comparison
            </Typography>
            <CostChart firstGPUData={firstGPUData} secondGPUData={secondGPUData} />
        </Stack>
      </Box>
    </>
  );
};

export default CompareGpus;
