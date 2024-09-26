import React, { useState, useEffect } from 'react';
import { Box, Typography, Select, MenuItem, Card, CircularProgress, Divider } from '@mui/material';
import { useRouter } from 'next/router';


const GPUCard = ({ gpuData, isFirst, onGPUChange, gpuList, isBestGPU }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, [gpuData]);

  if (!gpuData) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: { xs: '200px', sm: '320px' },
        width: '100%',
        maxWidth: { xs: '100%', sm: '400px' }
      }}>
        <CircularProgress sx={{ color: '#5D29F0' }} />
      </Box>
    );
  }

  const groupedGPUs = {
    '80GB': [],
    '48GB': [],
    '24GB': [],
    '16GB': [],
  };

  Object.values(gpuList).forEach(gpu => {
    if (groupedGPUs[gpu.VRAM]) {
      groupedGPUs[gpu.VRAM].push(gpu);
    }
  });

  return (
    <Card sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: { xs: '10px', sm: '20px' },
      width: '100%',
      maxWidth: { xs: '100%', sm: '400px' },
      height: 'auto',
      minHeight: { xs: 'auto', sm: '320px' },
      borderRadius: '8px',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      marginBottom: { xs: '20px', sm: 0 },
    }}>

      
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: { xs: 'auto', sm: '190px' },
      }}>
        <Typography
          sx={{
            textAlign: 'center',
            fontWeight: 600,
            marginBottom: { xs: 1, sm: 2 },
            color: '#FFFFFF',
            fontSize: { xs: '24px', sm: '24px' },
          }}
        >
          {gpuData.name}
        </Typography>
        <Box sx={{
          width: '100%',
          height: '140px',
          display: { xs: 'none', sm: 'flex' },
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          marginBottom: '10px',
        }}>
          {isLoading && (
            <CircularProgress 
              sx={{ 
                position: 'absolute', 
                zIndex: 1,
                color: '#5D29F0', // Match the color with your theme
              }} 
            />
          )}
          <Box
            component="img"
            key={gpuData.urlName}
            sx={{
              maxWidth: '100%',
              maxHeight: '140px',
              objectFit: 'contain',
              opacity: isLoading ? 0.5 : 1,
              transition: 'opacity 0.3s',
            }}
            src={gpuData.gpuImagePath}
            alt={`${gpuData.name} image`}
            onLoad={() => setIsLoading(false)}
          />
        </Box>
      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        flexGrow: 1,
      }}>
        <Select
          value={gpuData.urlName}
          open={isOpen}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          onChange={(e) => {
            const newGPU = e.target.value;
            setIsLoading(true);
            onGPUChange(newGPU);
            setIsOpen(false);  // Close the dropdown after selection
          }}
          sx={{
            width: '100%',
            height: '42px',
            borderRadius: '8px',
            color: '#F9FAFB',
            fontFamily: 'inherit',
            '& .MuiSelect-select': {
              padding: '12px 16px',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(249, 250, 251, 0.08)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(249, 250, 251, 0.2)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#5D29F0',
            },
            background: 'radial-gradient(92.09% 85.42% at 86.3% 87.5%, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0) 86.18%), radial-gradient(65.28% 65.28% at 26.39% 20.83%, rgba(255, 255, 255, 0.0472) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%), #5D29F0',
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: '#000000',
                color: '#F9FAFB',
              },
            },
          }}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                component="img"
                src={
                  gpuData.manufacturer === "nvidia"
                    ? "/static/images/companies/nvidia-emblem.webp"
                    : "/static/images/companies/amd.svg"
                }
                alt={`${gpuData.manufacturer} logo`}
                sx={{
                  width: '20px',
                  height: '13px',
                  marginRight: '8px',
                }}
              />
              {gpuData.name}
            </Box>
          )}
        >
          {Object.entries(groupedGPUs).map(([memorySize, gpus]) => (
            gpus.length > 0 && (
              <React.Fragment key={memorySize}>
                <MenuItem disabled sx={{ 
                  opacity: 0.7, 
                  fontSize: '0.8em',
                  fontFamily: 'monospace',
                  color: '#FFFFFF !important',
                }}>
                  {memorySize} GPUs
                </MenuItem>
                {gpus.map((gpu) => (
                  <MenuItem 
                    sx={{
                      fontFamily: 'monospace',
                      backgroundColor: gpu.urlName === gpuData.urlName
                        ? isBestGPU
                          ? 'rgba(0, 255, 0, 0.05)'  // Very light green for best GPU
                          : 'rgba(169, 169, 169, 0.05)'  // Very light grey for second-best GPU
                        : 'transparent',
                      '&:hover': {
                        backgroundColor: gpu.urlName === gpuData.urlName
                          ? isBestGPU
                            ? 'rgba(0, 255, 0, 0.1)'  // Slightly darker green on hover
                            : 'rgba(169, 169, 169, 0.1)'  // Slightly darker grey on hover
                          : 'rgba(255, 255, 255, 0.05)',  // Very subtle hover effect for other items
                      },
                    }} 
                    key={gpu.urlName} 
                    value={gpu.urlName}
                    onClick={() => {
                      onGPUChange(gpu.urlName);
                      setIsOpen(false);  // Close the dropdown after selection
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box
                        component="img"
                        src={
                          gpu.manufacturer === "nvidia"
                            ? "/static/images/companies/nvidia-emblem.webp"
                            : "/static/images/companies/amd.svg"
                        }
                        alt={`${gpu.manufacturer} logo`}
                        sx={{
                          width: '20px',
                          height: '13px',
                          marginRight: '8px',
                        }}
                      />
                      {gpu.name}
                    </Box>
                  </MenuItem>
                ))}
                {memorySize !== '16GB' && <Divider />}
              </React.Fragment>
            )
          ))}
        </Select>

      </Box>
    </Card>
  );
};

export default function CompareGpus({ firstGPUData, secondGPUData, gpuList }) {
  const router = useRouter();

  const handleFirstGPUChange = (newGPU) => {
    const newPath = `/compare/${newGPU}-vs-${secondGPUData.urlName}`;
    router.push(newPath, undefined, { shallow: true });
  };

  const handleSecondGPUChange = (newGPU) => {
    const newPath = `/compare/${firstGPUData.urlName}-vs-${newGPU}`;
    router.push(newPath, undefined, { shallow: true });
  };

  // Determine which GPU is the best (you'll need to implement this logic)
  const isBestGPU = (gpu) => {
    // Implement your logic to determine the best GPU
    // For example, you could compare their performance metrics
    // Return true if the given GPU is the best, false otherwise
  };

  return (
    <Box sx={{ 
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
    }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: { xs: '16px', sm: '24px', md: '48px' },
        padding: { xs: '20px', sm: '30px', md: '40px' },
        backgroundColor: 'transparent',
        color: '#ffffff',
        mt: { xs: 1, sm: 2, md: 5 },
      }}>
        {/* New Content */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '650px',
          textAlign: 'center',
          px: { xs: 2, sm: 3, md: 0 },
        }}>
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '24px', sm: '28px', md: '48px' }, 
              fontWeight: 600, 
              lineHeight: '110%', 
              letterSpacing: '-0.03em', 
              color: '#FFFFFF', 
              mb: { xs: 2, sm: 3 },
            }}
          >
            Compare GPU Performance on AI Workloads
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(90deg, #C3BDFF 0%, #9E69FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline',
              }}
            >
            </Box>
          
          </Typography>
          <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: { xs: '8px', sm: '16px' },
          }}>
          </Box>
        </Box>

        {/* GPU Comparison Section */}
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: '16px', sm: '24px', md: '64px' },
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <Box sx={{ width: '100%', maxWidth: { xs: '100%', sm: '400px' } }}>
            <GPUCard 
              gpuData={firstGPUData} 
              isFirst={true} 
              onGPUChange={handleFirstGPUChange}
              gpuList={gpuList}
              isBestGPU={isBestGPU(firstGPUData)}
            />
          </Box>
          <Typography variant="h5" sx={{ 
            fontWeight: 600, 
            fontSize: { xs: '18px', sm: '20px', md: '24px' },
            my: { xs: 1, sm: 2, md: 0 }
          }}>
            Vs.
          </Typography>
          <Box sx={{ width: '100%', maxWidth: { xs: '100%', sm: '400px' } }}>
            <GPUCard 
              gpuData={secondGPUData} 
              isFirst={false}
              onGPUChange={handleSecondGPUChange}
              gpuList={gpuList}
              isBestGPU={isBestGPU(secondGPUData)}
            />
          </Box>
        </Box>

        {/* Update the background div */}

      </Box>
    </Box>
  );
}
