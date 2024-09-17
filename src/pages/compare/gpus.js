import React from 'react';

export function getGpuData() {
  const gpuPricing = {
    h100pcie: 2.89,
    h100sxm: 3.49,
    a100pcie: 1.64,
    a100sxm: 1.89,
    l40: 0.99,
    "6000ada": 1.03,
    l40s: 1.03,
    a6000: 0.76,
    a40: 0.39
  };

  const calculateCostPer1MTokens = (outputTokenThroughput, pricePerHour) => {
    return (1000000 / outputTokenThroughput) / 60 / 60 * pricePerHour;
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
          outputTokenThroughput: 90.98,
          costPer1MTokens: calculateCostPer1MTokens(90.98, gpuPricing.h100pcie)
        },
        {
          batchSize: 2,
          requestsPerSecond: 1.40,
          outputTokenThroughput: 179.96,
          costPer1MTokens: calculateCostPer1MTokens(179.96, gpuPricing.h100pcie)
        },
        {
          batchSize: 4,
          requestsPerSecond: 2.78,
          outputTokenThroughput: 358.11,
          costPer1MTokens: calculateCostPer1MTokens(358.11, gpuPricing.h100pcie)
        },
        {
          batchSize: 8,
          requestsPerSecond: 5.36,
          outputTokenThroughput: 690.00,
          costPer1MTokens: calculateCostPer1MTokens(690.00, gpuPricing.h100pcie)
        },
        {
          batchSize: 16,
          requestsPerSecond: 10.06,
          outputTokenThroughput: 1294.86,
          costPer1MTokens: calculateCostPer1MTokens(1294.86, gpuPricing.h100pcie)
        },
        {
          batchSize: 32,
          requestsPerSecond: 17.50,
          outputTokenThroughput: 2254.21,
          costPer1MTokens: calculateCostPer1MTokens(2254.21, gpuPricing.h100pcie)
        },
        {
          batchSize: 64,
          requestsPerSecond: 29.76,
          outputTokenThroughput: 3838.30,
          costPer1MTokens: calculateCostPer1MTokens(3838.30, gpuPricing.h100pcie)
        },
        {
          batchSize: 128,
          requestsPerSecond: 42.74,
          outputTokenThroughput: 5521.40,
          costPer1MTokens: calculateCostPer1MTokens(5521.40, gpuPricing.h100pcie)
        },
        {
          batchSize: 256,
          requestsPerSecond: 51.68,
          outputTokenThroughput: 6681.76,
          costPer1MTokens: calculateCostPer1MTokens(6681.76, gpuPricing.h100pcie)
        },
        {
          batchSize: 512,
          requestsPerSecond: 51.40,
          outputTokenThroughput: 6639.39,
          costPer1MTokens: calculateCostPer1MTokens(6639.39, gpuPricing.h100pcie)
        },
        {
          batchSize: 1024,
          requestsPerSecond: 50.79,
          outputTokenThroughput: 6557.52,
          costPer1MTokens: calculateCostPer1MTokens(6557.52, gpuPricing.h100pcie)
        }
      ]
    },
    h100sxm: {
      urlName: "h100sxm",
      name: "H100 80GB SXM",
      gpuImagePath: "/static/images/gpu/h100-sxm-gpu.webp",
      VRAM: "80GB",
      price: 12.00, // Default dummy price
      manufacturer: "nvidia",
      performanceData: [
        {
          batchSize: 1,
          requestsPerSecond: 1.02,
          outputTokenThroughput: 130.99,
          costPer1MTokens: calculateCostPer1MTokens(130.99, gpuPricing.h100sxm)
        },
        {
          batchSize: 2,
          requestsPerSecond: 2.05,
          outputTokenThroughput: 263.39,
          costPer1MTokens: calculateCostPer1MTokens(263.39, gpuPricing.h100sxm)
        },
        {
          batchSize: 4,
          requestsPerSecond: 3.98,
          outputTokenThroughput: 511.89,
          costPer1MTokens: calculateCostPer1MTokens(511.89, gpuPricing.h100sxm)
        },
        {
          batchSize: 8,
          requestsPerSecond: 7.64,
          outputTokenThroughput: 982.01,
          costPer1MTokens: calculateCostPer1MTokens(982.01, gpuPricing.h100sxm)
        },
        {
          batchSize: 16,
          requestsPerSecond: 14.81,
          outputTokenThroughput: 1904.52,
          costPer1MTokens: calculateCostPer1MTokens(1904.52, gpuPricing.h100sxm)
        },
        {
          batchSize: 32,
          requestsPerSecond: 28.05,
          outputTokenThroughput: 3608.79,
          costPer1MTokens: calculateCostPer1MTokens(3608.79, gpuPricing.h100sxm)
        },
        {
          batchSize: 64,
          requestsPerSecond: 47.09,
          outputTokenThroughput: 6070.90,
          costPer1MTokens: calculateCostPer1MTokens(6070.90, gpuPricing.h100sxm)
        },
        {
          batchSize: 128,
          requestsPerSecond: 62.26,
          outputTokenThroughput: 8035.12,
          costPer1MTokens: calculateCostPer1MTokens(8035.12, gpuPricing.h100sxm)
        },
        {
          batchSize: 256,
          requestsPerSecond: 83.84,
          outputTokenThroughput: 10847.15,
          costPer1MTokens: calculateCostPer1MTokens(10847.15, gpuPricing.h100sxm)
        },
        {
          batchSize: 512,
          requestsPerSecond: 83.67,
          outputTokenThroughput: 10848.76,
          costPer1MTokens: calculateCostPer1MTokens(10848.76, gpuPricing.h100sxm)
        },
        {
          batchSize: 1024,
          requestsPerSecond: 81.24,
          outputTokenThroughput: 10489.22,
          costPer1MTokens: calculateCostPer1MTokens(10489.22, gpuPricing.h100sxm)
        },
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
          requestsPerSecond: 0.63,
          outputTokenThroughput: 81.09,
          costPer1MTokens: calculateCostPer1MTokens(81.09, gpuPricing.a100pcie)
        },
        {
          batchSize: 2,
          requestsPerSecond: 1.27,
          outputTokenThroughput: 163.46,
          costPer1MTokens: calculateCostPer1MTokens(163.46, gpuPricing.a100pcie)
        },
        {
          batchSize: 4,
          requestsPerSecond: 2.46,
          outputTokenThroughput: 316.98,
          costPer1MTokens: calculateCostPer1MTokens(316.98, gpuPricing.a100pcie)
        },
        {
          batchSize: 8,
          requestsPerSecond: 4.71,
          outputTokenThroughput: 606.08,
          costPer1MTokens: calculateCostPer1MTokens(606.08, gpuPricing.a100pcie)
        },
        {
          batchSize: 16,
          requestsPerSecond: 8.68,
          outputTokenThroughput: 1118.94,
          costPer1MTokens: calculateCostPer1MTokens(1118.94, gpuPricing.a100pcie)
        },
        {
          batchSize: 32,
          requestsPerSecond: 14.30,
          outputTokenThroughput: 1840.05,
          costPer1MTokens: calculateCostPer1MTokens(1840.05, gpuPricing.a100pcie)
        },
        {
          batchSize: 64,
          requestsPerSecond: 21.63,
          outputTokenThroughput: 2785.87,
          costPer1MTokens: calculateCostPer1MTokens(2785.87, gpuPricing.a100pcie)
        },
        {
          batchSize: 128,
          requestsPerSecond: 31.05,
          outputTokenThroughput: 4005.97,
          costPer1MTokens: calculateCostPer1MTokens(4005.97, gpuPricing.a100pcie)
        },
        {
          batchSize: 256,
          requestsPerSecond: 36.88,
          outputTokenThroughput: 4763.75,
          costPer1MTokens: calculateCostPer1MTokens(4763.75, gpuPricing.a100pcie)
        },
        {
          batchSize: 512,
          requestsPerSecond: 36.85,
          outputTokenThroughput: 4757.17,
          costPer1MTokens: calculateCostPer1MTokens(4757.17, gpuPricing.a100pcie)
        },
        {
          batchSize: 1024,
          requestsPerSecond: 36.67,
          outputTokenThroughput: 4732.35,
          costPer1MTokens: calculateCostPer1MTokens(4732.35, gpuPricing.a100pcie)
        }
      ]
    },
    a100sxm: {
      urlName: "a100sxm",
      name: "A100 80GB SXM",
      gpuImagePath: "/static/images/gpu/a100-sxm-gpu.webp",
      VRAM: "80GB",
      price: 18.00, // Default dummy price
      manufacturer: "nvidia",
      performanceData: [
        {
          batchSize: 1,
          requestsPerSecond: 0.66,
          outputTokenThroughput: 84.30,
          costPer1MTokens: calculateCostPer1MTokens(84.30, gpuPricing.a100sxm)
        },
        {
          batchSize: 2,
          requestsPerSecond: 1.32,
          outputTokenThroughput: 169.06,
          costPer1MTokens: calculateCostPer1MTokens(169.06, gpuPricing.a100sxm)
        },
        {
          batchSize: 4,
          requestsPerSecond: 2.57,
          outputTokenThroughput: 328.98,
          costPer1MTokens: calculateCostPer1MTokens(328.98, gpuPricing.a100sxm)
        },
        {
          batchSize: 8,
          requestsPerSecond: 4.95,
          outputTokenThroughput: 635.33,
          costPer1MTokens: calculateCostPer1MTokens(635.33, gpuPricing.a100sxm)
        },
        {
          batchSize: 16,
          requestsPerSecond: 9.23,
          outputTokenThroughput: 1184.28,
          costPer1MTokens: calculateCostPer1MTokens(1184.28, gpuPricing.a100sxm)
        },
        {
          batchSize: 32,
          requestsPerSecond: 15.57,
          outputTokenThroughput: 1999.64,
          costPer1MTokens: calculateCostPer1MTokens(1999.64, gpuPricing.a100sxm)
        },
        {
          batchSize: 64,
          requestsPerSecond: 23.92,
          outputTokenThroughput: 3073.81,
          costPer1MTokens: calculateCostPer1MTokens(3073.81, gpuPricing.a100sxm)
        },
        {
          batchSize: 128,
          requestsPerSecond: 35.08,
          outputTokenThroughput: 4513.54,
          costPer1MTokens: calculateCostPer1MTokens(4513.54, gpuPricing.a100sxm)
        },
        {
          batchSize: 256,
          requestsPerSecond: 43.17,
          outputTokenThroughput: 5555.79,
          costPer1MTokens: calculateCostPer1MTokens(5555.79, gpuPricing.a100sxm)
        },
        {
          batchSize: 512,
          requestsPerSecond: 43.14,
          outputTokenThroughput: 5549.23,
          costPer1MTokens: calculateCostPer1MTokens(5549.23, gpuPricing.a100sxm)
        },
        {
          batchSize: 1024,
          requestsPerSecond: 42.79,
          outputTokenThroughput: 5504.68,
          costPer1MTokens: calculateCostPer1MTokens(5504.68, gpuPricing.a100sxm)
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
          requestsPerSecond: 0.34,
          outputTokenThroughput: 43.96,
          costPer1MTokens: calculateCostPer1MTokens(43.96, gpuPricing.l40)
        },
        {
          batchSize: 2,
          requestsPerSecond: 0.67,
          outputTokenThroughput: 85.35,
          costPer1MTokens: calculateCostPer1MTokens(85.35, gpuPricing.l40)
        },
        {
          batchSize: 4,
          requestsPerSecond: 1.31,
          outputTokenThroughput: 168.29,
          costPer1MTokens: calculateCostPer1MTokens(168.29, gpuPricing.l40)
        },
        {
          batchSize: 8,
          requestsPerSecond: 2.55,
          outputTokenThroughput: 326.80,
          costPer1MTokens: calculateCostPer1MTokens(326.80, gpuPricing.l40)
        },
        {
          batchSize: 16,
          requestsPerSecond: 4.81,
          outputTokenThroughput: 616.48,
          costPer1MTokens: calculateCostPer1MTokens(616.48, gpuPricing.l40)
        },
        {
          batchSize: 32,
          requestsPerSecond: 8.41,
          outputTokenThroughput: 1079.72,
          costPer1MTokens: calculateCostPer1MTokens(1079.72, gpuPricing.l40)
        },
        {
          batchSize: 64,
          requestsPerSecond: 13.18,
          outputTokenThroughput: 1692.44,
          costPer1MTokens: calculateCostPer1MTokens(1692.44, gpuPricing.l40)
        },
        {
          batchSize: 128,
          requestsPerSecond: 19.00,
          outputTokenThroughput: 2442.85,
          costPer1MTokens: calculateCostPer1MTokens(2442.85, gpuPricing.l40)
        },
        {
          batchSize: 256,
          requestsPerSecond: 23.88,
          outputTokenThroughput: 3073.28,
          costPer1MTokens: calculateCostPer1MTokens(3073.28, gpuPricing.l40)
        },
        {
          batchSize: 512,
          requestsPerSecond: 23.75,
          outputTokenThroughput: 3055.91,
          costPer1MTokens: calculateCostPer1MTokens(3055.91, gpuPricing.l40)
        },
        {
          batchSize: 1024,
          requestsPerSecond: 23.64,
          outputTokenThroughput: 3040.41,
          costPer1MTokens: calculateCostPer1MTokens(3040.41, gpuPricing.l40)
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
          requestsPerSecond: 0.41,
          outputTokenThroughput: 52.83,
          costPer1MTokens: calculateCostPer1MTokens(52.83, gpuPricing["6000ada"])
        },
        {
          batchSize: 2,
          requestsPerSecond: 0.81,
          outputTokenThroughput: 104.25,
          costPer1MTokens: calculateCostPer1MTokens(104.25, gpuPricing["6000ada"])
        },
        {
          batchSize: 4,
          requestsPerSecond: 1.60,
          outputTokenThroughput: 205.33,
          costPer1MTokens: calculateCostPer1MTokens(205.33, gpuPricing["6000ada"])
        },
        {
          batchSize: 8,
          requestsPerSecond: 3.13,
          outputTokenThroughput: 401.01,
          costPer1MTokens: calculateCostPer1MTokens(401.01, gpuPricing["6000ada"])
        },
        {
          batchSize: 16,
          requestsPerSecond: 5.93,
          outputTokenThroughput: 760.72,
          costPer1MTokens: calculateCostPer1MTokens(760.72, gpuPricing["6000ada"])
        },
        {
          batchSize: 32,
          requestsPerSecond: 10.83,
          outputTokenThroughput: 1389.07,
          costPer1MTokens: calculateCostPer1MTokens(1389.07, gpuPricing["6000ada"])
        },
        {
          batchSize: 64,
          requestsPerSecond: 17.40,
          outputTokenThroughput: 2233.57,
          costPer1MTokens: calculateCostPer1MTokens(2233.57, gpuPricing["6000ada"])
        },
        {
          batchSize: 128,
          requestsPerSecond: 26.54,
          outputTokenThroughput: 3411.64,
          costPer1MTokens: calculateCostPer1MTokens(3411.64, gpuPricing["6000ada"])
        },
        {
          batchSize: 256,
          requestsPerSecond: 34.70,
          outputTokenThroughput: 4464.49,
          costPer1MTokens: calculateCostPer1MTokens(4464.49, gpuPricing["6000ada"])
        },
        {
          batchSize: 512,
          requestsPerSecond: 34.60,
          outputTokenThroughput: 4450.81,
          costPer1MTokens: calculateCostPer1MTokens(4450.81, gpuPricing["6000ada"])
        },
        {
          batchSize: 1024,
          requestsPerSecond: 34.36,
          outputTokenThroughput: 4419.89,
          costPer1MTokens: calculateCostPer1MTokens(4419.89,gpuPricing["6000ada"])
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
          requestsPerSecond: 0.37,
          outputTokenThroughput: 47.32,
          costPer1MTokens: calculateCostPer1MTokens(47.32, gpuPricing.l40s)
        },
        {
          batchSize: 2,
          requestsPerSecond: 0.71,
          outputTokenThroughput: 90.95,
          costPer1MTokens: calculateCostPer1MTokens(90.95, gpuPricing.l40s)
        },
        {
          batchSize: 4,
          requestsPerSecond: 1.39,
          outputTokenThroughput: 178.92,
          costPer1MTokens: calculateCostPer1MTokens(178.92, gpuPricing.l40s)
        },
        {
          batchSize: 8,
          requestsPerSecond: 2.73,
          outputTokenThroughput: 350.36,
          costPer1MTokens: calculateCostPer1MTokens(350.36, gpuPricing.l40s)
        },
        {
          batchSize: 16,
          requestsPerSecond: 5.20,
          outputTokenThroughput: 667.67,
          costPer1MTokens: calculateCostPer1MTokens(667.67, gpuPricing.l40s)
        },
        {
          batchSize: 32,
          requestsPerSecond: 9.22,
          outputTokenThroughput: 1184.15,
          costPer1MTokens: calculateCostPer1MTokens(1184.15, gpuPricing.l40s)
        },
        {
          batchSize: 64,
          requestsPerSecond: 14.52,
          outputTokenThroughput: 1865.53,
          costPer1MTokens: calculateCostPer1MTokens(1865.53, gpuPricing.l40s)
        },
        {
          batchSize: 128,
          requestsPerSecond: 22.23,
          outputTokenThroughput: 2857.82,
          costPer1MTokens: calculateCostPer1MTokens(2857.82, gpuPricing.l40s)
        },
        {
          batchSize: 256,
          requestsPerSecond: 29.77,
          outputTokenThroughput: 3829.73,
          costPer1MTokens: calculateCostPer1MTokens(3829.73, gpuPricing.l40s)
        },
        {
          batchSize: 512,
          requestsPerSecond: 29.65,
          outputTokenThroughput: 3813.14,
          costPer1MTokens: calculateCostPer1MTokens(3813.14, gpuPricing.l40s)
        },
        {
          batchSize: 1024,
          requestsPerSecond: 28.85,
          outputTokenThroughput: 3709.76,
          costPer1MTokens: calculateCostPer1MTokens(3709.76, gpuPricing.l40s)
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
          requestsPerSecond: 0.34,
          outputTokenThroughput: 43.37,
          costPer1MTokens: calculateCostPer1MTokens(43.37, gpuPricing.a6000)
        },
        {
          batchSize: 2,
          requestsPerSecond: 0.66,
          outputTokenThroughput: 84.68,
          costPer1MTokens: calculateCostPer1MTokens(84.68, gpuPricing.a6000)
        },
        {
          batchSize: 4,
          requestsPerSecond: 1.30,
          outputTokenThroughput: 167.00,
          costPer1MTokens: calculateCostPer1MTokens(167.00, gpuPricing.a6000)
        },
        {
          batchSize: 8,
          requestsPerSecond: 2.51,
          outputTokenThroughput: 321.74,
          costPer1MTokens: calculateCostPer1MTokens(321.74, gpuPricing.a6000)
        },
        {
          batchSize: 16,
          requestsPerSecond: 4.59,
          outputTokenThroughput: 588.33,
          costPer1MTokens: calculateCostPer1MTokens(588.33, gpuPricing.a6000)
        },
        {
          batchSize: 32,
          requestsPerSecond: 8.08,
          outputTokenThroughput: 1036.10,
          costPer1MTokens: calculateCostPer1MTokens(1036.10, gpuPricing.a6000)
        },
        {
          batchSize: 64,
          requestsPerSecond: 12.58,
          outputTokenThroughput: 1615.13,
          costPer1MTokens: calculateCostPer1MTokens(1615.13, gpuPricing.a6000)
        },
        {
          batchSize: 128,
          requestsPerSecond: 17.94,
          outputTokenThroughput: 2304.40,
          costPer1MTokens: calculateCostPer1MTokens(2304.40, gpuPricing.a6000)
        },
        {
          batchSize: 256,
          requestsPerSecond: 19.22,
          outputTokenThroughput: 2469.23,
          costPer1MTokens: calculateCostPer1MTokens(2469.23, gpuPricing.a6000)
        },
        {
          batchSize: 512,
          requestsPerSecond: 19.16,
          outputTokenThroughput: 2461.41,
          costPer1MTokens: calculateCostPer1MTokens(2461.41, gpuPricing.a6000)
        },
        {
          batchSize: 1024,
          requestsPerSecond: 19.00,
          outputTokenThroughput: 2440.94,
          costPer1MTokens: calculateCostPer1MTokens(2440.94, gpuPricing.a6000)
        }
      ]
    },
    a40: {
      urlName: "a40",
      name: "A40 48GB",
      gpuImagePath: "/static/images/gpu/A40-gpu.webp",
      VRAM: "48GB",
      price: 40.00, // Default dummy price
      manufacturer: "nvidia",
      performanceData: [
        {
          batchSize: 1,
          requestsPerSecond: 0.27,
          outputTokenThroughput: 33.96,
          costPer1MTokens: calculateCostPer1MTokens(33.96, gpuPricing.a40)
        },
        {
          batchSize: 2,
          requestsPerSecond: 0.51,
          outputTokenThroughput: 64.74,
          costPer1MTokens: calculateCostPer1MTokens(64.74, gpuPricing.a40)
        },
        {
          batchSize: 4,
          requestsPerSecond: 1.00,
          outputTokenThroughput: 127.58,
          costPer1MTokens: calculateCostPer1MTokens(127.58, gpuPricing.a40)
        },
        {
          batchSize: 8,
          requestsPerSecond: 1.94,
          outputTokenThroughput: 248.23,
          costPer1MTokens: calculateCostPer1MTokens(248.23, gpuPricing.a40)
        },
        {
          batchSize: 16,
          requestsPerSecond: 3.59,
          outputTokenThroughput: 459.94,
          costPer1MTokens: calculateCostPer1MTokens(459.94, gpuPricing.a40)
        },
        {
          batchSize: 32,
          requestsPerSecond: 6.56,
          outputTokenThroughput: 842.36,
          costPer1MTokens: calculateCostPer1MTokens(842.36, gpuPricing.a40)
        },
        {
          batchSize: 64,
          requestsPerSecond: 10.69,
          outputTokenThroughput: 1372.65,
          costPer1MTokens: calculateCostPer1MTokens(1372.65, gpuPricing.a40)
        },
        {
          batchSize: 128,
          requestsPerSecond: 16.18,
          outputTokenThroughput: 2077.85,
          costPer1MTokens: calculateCostPer1MTokens(2077.85, gpuPricing.a40)
        },
        {
          batchSize: 256,
          requestsPerSecond: 19.12,
          outputTokenThroughput: 2455.96,
          costPer1MTokens: calculateCostPer1MTokens(2455.96, gpuPricing.a40)
        },
        {
          batchSize: 512,
          requestsPerSecond: 19.22,
          outputTokenThroughput: 2468.26,
          costPer1MTokens: calculateCostPer1MTokens(2468.26, gpuPricing.a40)
        },
        {
          batchSize: 1024,
          requestsPerSecond: 19.09,
          outputTokenThroughput: 2454.05,
          costPer1MTokens: calculateCostPer1MTokens(2454.05, gpuPricing.a40)
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
