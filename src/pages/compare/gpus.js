import React from 'react';

export function getGpuData() {
  const gpuPricing = {
    h100pcie: 0.00124,
    h100hbm: 0.00124,
    a100pcie: 0.00060,
    a100sxm: 0.00060,
    l40: 0.00037,
    "6000ada": 0.00037,
    l40s: 0.00037,
    a6000: 0.00024,
    a40: 0.00024
  };

  const calculateCostPer1MTokens = (outputTokenThroughput, pricePerSecond) => {
    return (1000000 / outputTokenThroughput) * pricePerSecond;
  };

  const gpuData = {
    h100pcie: {
      urlName: "h100pcie",
      name: "H100 80GB PCIe",
      gpuImagePath: "/static/images/gpu/h100-gpu.webp",
      VRAM: "80GB",
      price: 10.00, // Default dummy price
      manufacturer: "nvidia",
      performanceData: [
        {
          batchSize: 1,
          requestsPerSecond: 0.71,
          requestLatency: 6.32,
          timeToFirstToken: 4810.61,
          interTokenLatency: 13.42,
          outputTokenThroughput: 81.03,
          costPer1MTokens: calculateCostPer1MTokens(81.03, gpuPricing.h100pcie)
        }
      ]
    },
    h100hbm: {
      urlName: "h100hbm",
      name: "H100 80GB HBM3",
      gpuImagePath: "/static/images/gpu/h100-gpu.webp",
      VRAM: "80GB",
      price: 12.00, // Default dummy price
      manufacturer: "nvidia",
      performanceData: [
        {
          batchSize: 1,
          requestsPerSecond: 0.78,
          requestLatency: 5.85,
          timeToFirstToken: 4841.43,
          interTokenLatency: 9.20,
          outputTokenThroughput: 85.73,
          costPer1MTokens: calculateCostPer1MTokens(85.73, gpuPricing.h100hbm)
        }
      ]
    },
    a100pcie: {
      urlName: "a100pcie",
      name: "A100 80GB PCIe",
      gpuImagePath: "/static/images/gpu/a100-gpu-1.webp",
      VRAM: "80GB",
      price: 15.00, // Default dummy price
      manufacturer: "nvidia",
      performanceData: [
        {
          batchSize: 1,
          requestsPerSecond: 0.71,
          requestLatency: 6.58,
          timeToFirstToken: 4660.90,
          interTokenLatency: 14.95,
          outputTokenThroughput: 91.57,
          costPer1MTokens: calculateCostPer1MTokens(91.57, gpuPricing.a100pcie)
        }
      ]
    },
    a100sxm: {
      urlName: "a100sxm",
      name: "A100 80GB SXM",
      gpuImagePath: "/static/images/gpu/a100-gpu-1.webp",
      VRAM: "80GB",
      price: 18.00, // Default dummy price
      manufacturer: "nvidia",
      performanceData: [
        {
          batchSize: 1,
          requestsPerSecond: 0.64,
          requestLatency: 6.40,
          timeToFirstToken: 4736.45,
          interTokenLatency: 13.59,
          outputTokenThroughput: 79.06,
          costPer1MTokens: calculateCostPer1MTokens(79.06, gpuPricing.a100sxm)
        }
      ]
    },
    l40: {
      urlName: "l40",
      name: "L40 48GB",
      gpuImagePath: "/static/images/gpu/l40-gpu.webp",
      VRAM: "48GB",
      price: 20.00, // Default dummy price
      manufacturer: "nvidia",
      performanceData: [
        {
          batchSize: 1,
          requestsPerSecond: 0.85,
          requestLatency: 3.67,
          timeToFirstToken: 1823.50,
          interTokenLatency: 24.14,
          outputTokenThroughput: 65.91,
          costPer1MTokens: calculateCostPer1MTokens(65.91, gpuPricing.l40)
        }
      ]
    },
    "6000ada": {
      urlName: "6000ada",
      name: "RTX 6000 Ada 48GB",
      gpuImagePath: "/static/images/gpu/6000-ada-gpu.webp",
      VRAM: "48GB",
      price: 25.00, // Default dummy price
      manufacturer: "nvidia",
      performanceData: [
        {
          batchSize: 1,
          requestsPerSecond: 0.56,
          requestLatency: 5.94,
          timeToFirstToken: 3520.68,
          interTokenLatency: 20.80,
          outputTokenThroughput: 65.71,
          costPer1MTokens: calculateCostPer1MTokens(65.71, gpuPricing["6000ada"])
        }
      ]
    },
    l40s: {
      urlName: "l40s",
      name: "L40S 48GB",
      gpuImagePath: "/static/images/gpu/l40s-gpu.webp",
      VRAM: "48GB",
      price: 30.00, // Default dummy price
      manufacturer: "nvidia",
      performanceData: [
        {
          batchSize: 1,
          requestsPerSecond: 0.44,
          requestLatency: 7.07,
          timeToFirstToken: 3899.49,
          interTokenLatency: 24.75,
          outputTokenThroughput: 56.68,
          costPer1MTokens: calculateCostPer1MTokens(56.68, gpuPricing.l40s)
        }
      ]
    },
    a6000: {
      urlName: "a6000",
      name: "RTX A6000 48GB",
      gpuImagePath: "/static/images/gpu/a6000-gpu.webp",
      VRAM: "48GB",
      price: 35.00, // Default dummy price
      manufacturer: "nvidia",
      performanceData: [
        {
          batchSize: 1,
          requestsPerSecond: 0.73,
          requestLatency: 4.72,
          timeToFirstToken: 2213.36,
          interTokenLatency: 33.44,
          outputTokenThroughput: 55.29,
          costPer1MTokens: calculateCostPer1MTokens(55.29, gpuPricing.a6000)
        }
      ]
    },
    a40: {
      urlName: "a40",
      name: "A40 48GB",
      gpuImagePath: "/static/images/gpu/a40-gpu.webp",
      VRAM: "48GB",
      price: 40.00, // Default dummy price
      manufacturer: "nvidia",
      performanceData: [
        {
          batchSize: 1,
          requestsPerSecond: 0.34,
          requestLatency: 7.48,
          timeToFirstToken: 3011.12,
          interTokenLatency: 34.87,
          outputTokenThroughput: 43.64,
          costPer1MTokens: calculateCostPer1MTokens(43.64, gpuPricing.a40)
        }
      ]
    }
  };

  return gpuData;
}

// Add this new component
export default function GpuComparison() {
  const gpuData = getGpuData();

  return (
    <div>
      <h1>GPU Comparison</h1>
      {/* Add your JSX here to display the GPU data */}
    </div>
  );
}
