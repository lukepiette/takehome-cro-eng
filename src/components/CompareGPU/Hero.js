import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, Select, MenuItem, Button } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import gpus from '../../pages/compare/gpus.json';

const Hero = ({ firstGPUData, secondGPUData }) => {
  const router = useRouter();
  const [firstGPU, setFirstGPU] = useState(firstGPUData.name);
  const [secondGPU, setSecondGPU] = useState(secondGPUData.name);

  const updateURL = (gpu1, gpu2) => {
    const gpu1Key = Object.keys(gpus).find(key => gpus[key].name === gpu1);
    const gpu2Key = Object.keys(gpus).find(key => gpus[key].name === gpu2);
    router.push(`/compare/${gpu1Key}-vs-${gpu2Key}`);
  };

  const GPUCard = ({ gpuData, isFirst }) => (
    <Card sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: { xs: '10px', sm: '20px' },
      width: '100%',
      maxWidth: '400px',
      height: 'auto',
      minHeight: { xs: 'auto', sm: '387px' },
      borderRadius: '8px',
      backgroundColor: 'transparent',
      boxShadow: 'none',
    }}>

      
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: { xs: 'auto', sm: '260px' },
      }}>
        <Typography
          sx={{
            textAlign: 'center',
            fontWeight: 600,
            marginBottom: { xs: 2, sm: 3 },
            color: '#FFFFFF',
            fontSize: { xs: '24px', sm: '24px' },
          }}
        >
          {gpuData.name}
        </Typography>
        <Box sx={{
          width: '100%',
          height: '160px',
          display: { xs: 'none', sm: 'flex' },
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Box
            component="img"
            sx={{
              maxWidth: '100%',
              maxHeight: '160px',
              objectFit: 'contain',
            }}
            src={gpuData.gpuImagePath}
            alt={`${gpuData.name} image`}
          />
        </Box>
        <Box sx={{
          width: '100%',
          height: '60px',
          display: { xs: 'none', sm: 'flex' },
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Box
            component="img"
            sx={{
              width: gpuData.manufacturer === "nvidia" ? '85px' : '70px',
              height: 'auto',
              maxHeight: gpuData.manufacturer === "nvidia" ? '40px' : 'none',
              objectFit: 'contain',
            }}
            src={
              gpuData.manufacturer === "nvidia"
                ? "/static/images/companies/nvidia.png"
                : "/static/images/companies/amd.svg"
            }
            alt={`${gpuData.manufacturer} logo`}
          />
        </Box>
      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        mt: { xs: 2, sm: 3 }
      }}>
        <Select
          value={isFirst ? firstGPU : secondGPU}
          onChange={(e) => {
            if (isFirst) {
              setFirstGPU(e.target.value);
              updateURL(e.target.value, secondGPU);
            } else {
              setSecondGPU(e.target.value);
              updateURL(firstGPU, e.target.value);
            }
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
        >
          {Object.entries(gpus).map(([key, gpu]) => (
            <MenuItem sx={{fontFamily: 'monospace'}}key={key} value={gpu.name}>{gpu.name}</MenuItem>
          ))}
        </Select>

      </Box>
    </Card>
  );

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      gap: { xs: '24px', sm: '48px' },
      padding: { xs: '10px', sm: '20px', md: '40px' },
      backgroundColor: 'transparent',
      color: '#ffffff',
      mt: { xs: 2, sm: 5 }
    }}>
      {/* New Content */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '650px',
        textAlign: 'center',
      }}>
        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: { xs: '28px', sm: '32px', md: '48px' }, 
            fontWeight: 600, 
            lineHeight: '110%', 
            letterSpacing: '-0.03em', 
            color: '#FFFFFF', 
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
        gap: { xs: '16px', sm: '32px', md: '64px' },
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <Box sx={{ width: '100%', maxWidth: '400px' }}>
          <GPUCard gpuData={firstGPUData} isFirst={true} />
        </Box>
        <Typography variant="h5" sx={{ 
          fontWeight: 600, 
          fontSize: { xs: '20px', sm: '24px' },
          my: { xs: 1, sm: 2, md: 0 }
        }}>
          Vs.
        </Typography>
        <Box sx={{ width: '100%', maxWidth: '400px' }}>
          <GPUCard gpuData={secondGPUData} isFirst={false} />
        </Box>
      </Box>

      <div
          style={{
            width: "230rem",
            height: "42.12575rem",
            position: "absolute",
            left: "-115rem",
            top: "30rem",
            transform: "rotate(169.39deg)",
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 65, 163, 0.25) 18.87%, rgba(4, 0, 16, 0.80) 52.12%, #170042 75%)",
            filter: "blur(64px)",
            zIndex: -1,
          }}
        />
        
      {/* <Box
				sx={{
					width: "2024px",
					height: "795px",
					position: "absolute",
					overflow: "hidden",
					zIndex: -1
				}}>
				<Box
					sx={{
						position: "absolute",
						width: "1485.9px",
						height: "1485.9px",
						left: "calc(50% - 1485.9px/2 - 0.12px)",
						top: "calc(50% - 1385.9px/2 + 728.96px)",
						background:
							"radial-gradient(85.83% 85.83% at 50% 14.17%, #000000 0%, #000000 59.12%, #000342 85.94%)",
						boxShadow:
							"0px 2.40622px 2.40622px rgba(77, 148, 255, 0.25), inset 0px -18.0466px 30.0777px #538DFF, inset 0px -60.1555px 60.1555px #538DFF",
						borderRadius: "50%"
					}}
				/>
				<Box
					sx={{
						position: "absolute",
						width: "1273.19px",
						height: "1273.19px",
						left: "calc(50% - 1273.19px/2 - 0.12px)",
						top: "calc(50% - 1173.19px/2 + 659.69px)",
						background:
							"radial-gradient(85.83% 85.83% at 50% 14.17%, #000000 0%, #000000 59.12%, #000000 85.94%)",
						boxShadow:
							"0px 2.40622px 2.40622px rgba(77, 148, 255, 0.25), inset 0px -8px 30.0777px #5D29F0, inset 0px -60.1555px 0px #538DFF",
						borderRadius: "50%"
					}}
				/>
			</Box> */}
    </Box>
  );
};

export default Hero;
