import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Link,
  CircularProgress
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  '& .MuiInputBase-root': {
    width: '100%',
    height: '42px',
    borderRadius: '8px',
    color: '#F9FAFB',
    fontFamily: 'inherit',
    background: 'radial-gradient(92.09% 85.42% at 86.3% 87.5%, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0) 86.18%), radial-gradient(65.28% 65.28% at 26.39% 20.83%, rgba(255, 255, 255, 0.0472) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%), #5D29F0',
    '& .MuiSelect-select': {
      padding: '12px 16px',
    },
    '&:hover': {
      backgroundColor: 'rgba(93, 41, 240, 0.8)', // Slightly lighter on hover
    },
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
  '& .MuiSvgIcon-root': {
    color: '#F9FAFB',
  },
  '& .MuiSelect-select:focus': {
    backgroundColor: 'transparent',
  },
}));

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Overview = ({ gpuList, firstGPUData, secondGPUData }) => {

  const router = useRouter();
  const [selectedMetric, setSelectedMetric] = useState('outputTokenThroughput');
  const [selectedModel, setSelectedModel] = useState('llama-8b-instruct');
  const [selectedBatchSize, setSelectedBatchSize] = useState(1);
  const [highlightedGPUs, setHighlightedGPUs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const { gpu1, gpu2 } = router.query;
    if (gpu1 && gpu2) {
      setHighlightedGPUs([gpu1, gpu2]);
    } else if (firstGPUData && secondGPUData) {
      setHighlightedGPUs([firstGPUData.urlName, secondGPUData.urlName]);
    }

    // Simulate data loading
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust this timeout as needed
  }, [router.query, firstGPUData, secondGPUData, selectedMetric, selectedModel, selectedBatchSize]);

  const metrics = [
    { value: 'requestsPerSecond', label: 'Requests Per Second' },
    { value: 'requestLatency', label: 'Request Latency (s)' },
    { value: 'timeToFirstToken', label: 'Time to First Token (ms)' },
    { value: 'interTokenLatency', label: 'Inter-Token Latency (ms)' },
    { value: 'outputTokenThroughput', label: 'Output Token Throughput (tok/s)' },
    { value: 'costPer1MTokens', label: 'Cost Per 1M Tokens ($)' },
  ];

  const getBarColor = (gpu, metric) => {
    if (highlightedGPUs.includes(gpu.urlName)) {
      const highlightedData = gpuList
        .filter(g => highlightedGPUs.includes(g.urlName))
        .map(g => ({
          urlName: g.urlName,
          value: g.performanceData[0][metric]
        }));

      const isHigherBetter = !['requestLatency', 'timeToFirstToken', 'interTokenLatency', 'costPer1MTokens'].includes(metric);
      highlightedData.sort((a, b) => isHigherBetter ? b.value - a.value : a.value - b.value);

      if (gpu.urlName === highlightedData[0].urlName) {
        return 'rgba(0, 128, 0, 0.8)'; // Dark green for the best performing GPU
      } else {
        return 'rgba(128, 0, 0, 0.8)'; // Dark red for the second best performing GPU
      }
    }
    return 'rgba(100, 100, 100, 0.1)'; // Light grey for non-highlighted GPUs
  };


  const chartData = gpuList
    .map(gpu => {
      if (!gpu.performanceData || !gpu.performanceData[0]) {
        console.warn(`Missing performanceData for GPU: ${gpu.name}`);
        return null;
      }
      return {
        name: gpu.name,
        value: gpu.performanceData[0][selectedMetric],
        urlName: gpu.urlName
      };
    })
    .filter(Boolean)  // Remove null entries
    .sort((a, b) => {
      // Sort based on the metric
      if (['requestLatency', 'timeToFirstToken', 'interTokenLatency', 'costPer1MTokens'].includes(selectedMetric)) {
        // For these metrics, lower values are better, so sort ascending
        return a.value - b.value;
      } else {
        // For other metrics (like requestsPerSecond), higher values are better, so sort descending
        return b.value - a.value;
      }
    });


  const data = {
    labels: chartData.map(item => item.name),
    datasets: [{
      data: chartData.map(item => item.value),
      backgroundColor: chartData.map(item => getBarColor(item, selectedMetric)),
    }],
  };

  const getUnitForMetric = (metric) => {
    switch (metric) {
      case 'requestLatency':
        return ' s';
      case 'costPer1MTokens':
        return ' $';
      case 'requestsPerSecond':
        return ' req/s';
      case 'outputTokenThroughput':
        return ' tok/s';
      case 'timeToFirstToken':
      case 'interTokenLatency':
        return ' ms';
      default:
        return '';
    }
  };

  const formatValue = (value, metric) => {
    const unit = getUnitForMetric(metric);
    if (metric === 'costPer1MTokens') {
      return `$${value.toFixed(2)}`;
    } else if (unit) {
      return `${value.toFixed(2)}${unit}`;
    }
    return value.toFixed(2);
  };

  const valueLabelPlugin = {
    id: 'valueLabels',
    afterDatasetsDraw: (chart, args, pluginOptions) => {
      const { ctx, chartArea } = chart;
      const metric = chart.config.options.metric; // Assume we pass the metric in chart options
      chart.data.datasets.forEach((dataset, datasetIndex) => {
        const meta = chart.getDatasetMeta(datasetIndex);
        if (!meta.hidden) {
          meta.data.forEach((element, index) => {
            const value = dataset.data[index];
            const x = element.x;
            const y = element.y;
            
            ctx.save();
            ctx.fillStyle = '#FFFFFF';
            ctx.font = '12px Arial';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';
            const text = formatValue(value, metric);
            ctx.fillText(text, x + 5, y);
            ctx.restore();
          });
        }
      });
    },
  };

  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    metric: selectedMetric,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => formatValue(context.parsed.x, selectedMetric)
        }
      },
    },
    scales: {
      x: { 
        beginAtZero: true,
        ticks: {
          padding: 5,
          maxRotation: 0,
          autoSkip: true,
          autoSkipPadding: 15,
          font: {
            size: (context) => context.chart.width < 600 ? 8 : 12,
          },
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false,
          drawOnChartArea: true,
        },
      },
      y: {
        ticks: {
          callback: function(value, index) {
            return chartData[index].name;
          },
          color: function(context) {
            const index = context.index;
            const isHighlighted = highlightedGPUs.includes(chartData[index].urlName);
            return isHighlighted ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)';
          },
          font: {
            size: (context) => context.chart.width < 600 ? 8 : 12,
          },
        },
        grid: {
          display: false, // Hide Y-axis grid lines
        },
      },
    },
    layout: {
      padding: {
        right: 60,
        top: 0,
        bottom: 0
      },
    },
  };

  // Add this line to register the custom plugin
  ChartJS.register(valueLabelPlugin);

  return (
    <Box sx={{ 
      maxWidth: '1200px',
      margin: '0 auto',
      padding: { xs: '10px', sm: '20px', md: '40px' },
      backgroundColor: 'transparent',
    }}>
        <Typography variant="h2" align="center"
                    sx={{ 
                    fontSize: { xs: '24px', sm: '28px', md: '36px' }, 
                    fontWeight: 600, 
                    lineHeight: '96%', 
                    letterSpacing: '-0.03em', 
                    color: '#FFFFFF', 
                    }}>
            LLM Benchmarks
        </Typography>
        <Typography variant="body1" sx={{ 
            fontSize: { xs: '12px', sm: '14px', md: '16px' }, 
            textAlign: 'center', 
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '500px',
            margin: '0 auto',
            mt: 2
            }}>
            Benchmarks where run on RunPod gpus using <Link href="https://github.com/neuralmagic/guidellm" target="_blank">guidellm</Link>. For more details on guidellm, check out the <Link href="https://github.com/neuralmagic/guidellm" target="_blank">guidellm github repository</Link>
        </Typography>
      
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'center', 
        mb: 2, 
        mt: 3, 
        alignItems: 'center', 
        flexWrap: 'wrap',
        gap: 2
      }}>
        <StyledFormControl sx={{ width: { xs: '100%', sm: 350 }, mb: 2 }}>
          <InputLabel id="metric-label" sx={{ color: '#F9FAFB', fontFamily: 'Arial, Helvetica, sans-serif' }}>Metric</InputLabel>
          <Select
            labelId="metric-label"
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value)}
            sx={{ fontSize: '1.1rem', fontFamily: 'monospace' }}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: '#000000',
                  color: '#F9FAFB',
                },
              },
            }}
          >
            {metrics.map((metric) => (
              <MenuItem key={metric.value} value={metric.value} sx={{ fontFamily: 'monospace' }}>{metric.label}</MenuItem>
            ))}
          </Select>
        </StyledFormControl>
        <StyledFormControl sx={{ width: { xs: '100%', sm: 200 }, mb: 2 }}>
          <InputLabel id="model-label" sx={{ color: '#F9FAFB', fontFamily: 'Arial, Helvetica, sans-serif' }}>Model</InputLabel>
          <Select
            labelId="model-label"
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            sx={{ fontSize: '1.1rem', fontFamily: 'monospace' }}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: '#000000',
                  color: '#F9FAFB',
                },
              },
            }}
          >
            <MenuItem value="llama-8b-instruct" sx={{ fontFamily: 'monospace' }}>Llama 8b Instruct</MenuItem>
          </Select>
        </StyledFormControl>
        <StyledFormControl sx={{ width: { xs: '100%', sm: 120 }, mb: 2 }}>
          <InputLabel id="batch-size-label" sx={{ color: '#F9FAFB', fontFamily: 'Arial, Helvetica, sans-serif' }}>Batch Size</InputLabel>
          <Select
            labelId="batch-size-label"
            value={selectedBatchSize}
            onChange={(e) => setSelectedBatchSize(e.target.value)}
            sx={{ fontSize: '1.1rem', fontFamily: 'monospace' }}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: '#000000',
                  color: '#F9FAFB',
                },
              },
            }}
          >
            <MenuItem value="1" sx={{ fontFamily: 'monospace' }}>1</MenuItem>
          </Select>
        </StyledFormControl>
      </Box>

      <Box sx={{ height: { xs: 400, sm: 500, md: 600 }, width: '100%', position: 'relative' }}>
        {isLoading ? (
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
            <CircularProgress sx={{ color: '#5D29F0' }} />
          </Box>
        ) : (
          <Bar data={data} options={{...options, metric: selectedMetric}} />
        )}
      </Box>

      {/* Add this Typography component below the chart */}
      <Typography 
        variant="body1" 
        align="center"
        sx={{ 
          mt: 2, 
          color: '#FFFFFF', 
          fontSize: { xs: '12px', sm: '14px', md: '16px' },
          fontWeight: 500
        }}
      >
        {metrics.find(m => m.value === selectedMetric)?.label || ''}
      </Typography>
    </Box>
  );
};

export default Overview;
