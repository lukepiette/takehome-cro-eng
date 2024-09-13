// pages/gpu-models.tsx
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import Link from 'next/link';

const gpuModels = {
  "RTX 4090": "/gpu/4090",
  "RTX 6000 Ada": "/gpu/6000-ada",
  "A40": "/gpu/a40",
  "RTX A4000": "/gpu/a4000",
  "RTX A5000": "/gpu/a5000",
  "RTX A6000": "/gpu/a6000",
  "H100 80GB PCIe": "/gpu/h100-pcie",
  "H100 80GB SXM5": "/gpu/h100-sxm5",
  "AMD Instinct™ MI250": "/gpu/mi250",
  "AMD Instinct™ MI300X": "/gpu/mi300x",
};

export default function GpuModels() {
  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      padding: '20px',
      mb: 10
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
            mt: { xs: 4, sm: 10 }
          }}
        >
          GPU Models
        </Typography>

        <Typography 
          variant="body1" 
          sx={{ 
            fontSize: { xs: '16px', sm: '18px' }, 
            fontWeight: 500, 
            lineHeight: '24px', 
            textAlign: 'center', 
            color: 'rgba(249, 250, 251, 0.48)', 
            width: '100%'
          }}
        >
          Explore detailed specifications and information on various GPU models we support.
        </Typography>

        <List sx={{ width: '100%' }}>
          {Object.entries(gpuModels).map(([modelName, modelPath], index) => (
            <ListItem button component={Link} href={modelPath} key={index}>
              <ListItemText primary={modelName} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
