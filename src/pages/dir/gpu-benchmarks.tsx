// pages/gpu-benchmarks.tsx
import { useState } from 'react';
import Link from 'next/link';
import { Box, Typography, List, ListItem, ListItemText, TextField } from '@mui/material';
import { getGpuData } from '../compare/gpus.js'; // Updated import

interface PerformanceData {
  batchSize: number;
  requestsPerSecond: number;
  outputTokenThroughput: number;
  costPer1MTokens: number;
}

interface GpuDataType {
  urlName: string;
  name: string;
  gpuImagePath: string;
  VRAM: string;
  manufacturer: string;
  benchmarks: {
    [modelName: string]: {
      [batchSizeConfig: string]: {
        performanceData: PerformanceData[];
      };
    } | {
      fitsOnGpu: boolean;
    };
  };
}

interface GpuDataDict {
  [key: string]: GpuDataType;
}

interface GpuComparison {
  firstGpuName: string;
  secondGpuName: string;
  link: string;
}

export default function GpuBenchmarks() {
  const gpus: GpuDataDict = getGpuData();
  
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Check if gpus is defined before getting keys
  const gpuKeys = Object.keys(gpus);

  // Declare comparisons array with the correct type
  const comparisons: GpuComparison[] = gpuKeys.flatMap((firstGpu) =>
    gpuKeys
      .filter((secondGpu) => firstGpu !== secondGpu)
      .map((secondGpu) => ({
        firstGpuName: gpus[firstGpu].name,
        secondGpuName: gpus[secondGpu].name,
        link: `/compare/${gpus[firstGpu].urlName}-vs-${gpus[secondGpu].urlName}`,
      }))
  );

  // Filter comparisons based on the search query
  const filteredComparisons = comparisons.filter((comparison) =>
    `${comparison.firstGpuName} vs ${comparison.secondGpuName}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      padding: '20px',
      mb:10
    }}>
      <Box sx={{ 
        maxWidth: '800px', 
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: '32px', sm: '48px' }
      }}>
        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: { xs: '32px', sm: '48px' }, 
            fontWeight: 600, 
            lineHeight: '96%', 
            letterSpacing: '-0.03em', 
            textAlign: 'center', 
            color: '#FFFFFF', 
            width: '100%',
            mt:{xs:4, sm:10}
          }}
        >
          GPU Benchmarks
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            fontSize: { xs: '16px', sm: '18px' }, 
            fontWeight: 500, 
            lineHeight: '24px', 
            textAlign: 'center', 
            color: 'rgba(249, 250, 251, 0.48)', 
            width: '100%', 
          }}
        >
          Compare GPU thoughput and cost across different models like large language models and text-to-image models.
        </Typography>

        {/* Search Bar */}
        <TextField
          label="Search GPU Comparisons"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update the search query
          sx={{ marginBottom: '20px' }}
        />

        {/* List of comparisons */}
        <List sx={{ width: '100%' }}>
          {filteredComparisons.length > 0 ? (
            filteredComparisons.map((comparison, index) => (
              <ListItem button component={Link} href={comparison.link} key={index}>
                <ListItemText primary={`${comparison.firstGpuName} vs ${comparison.secondGpuName}`} />
              </ListItem>
            ))
          ) : (
            <Typography>No comparisons found.</Typography>
          )}
        </List>
      </Box>
    </Box>
  );
}
