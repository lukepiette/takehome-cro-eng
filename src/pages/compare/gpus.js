import React from 'react';

export function getGpuData() {
  const gpuPricing = {
    h100pcie: 2.89,
    h100sxm: 3.49,
    h100nvl: 3.29,
    a100pcie: 1.64,
    a100sxm: 1.89,
    l40: 0.99,
    "6000ada": 1.03,
    l40s: 1.03,
    a6000: 0.76,
    a40: 0.39,
    rtx4090: 0.69,
    rtx3090: 0.43,
    a5000: 0.43,
    a4000: 0.32,
    l4: 0.43,
    "2000ada":0.28
  };

  const calculateCostPer1MTokens = (outputTokenThroughput, pricePerHour) => {
    return (1000000 / outputTokenThroughput) / 60 / 60 * pricePerHour;
  };

  const createDummyPerformanceData = (batchSizes) => {
    return batchSizes.map(batchSize => ({
      batchSize,
      requestsPerSecond: 0,
      outputTokenThroughput: 0,
      costPer1MTokens: 0
    }));
  };

  const batchSizes = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];

  const gpuData = {
    h100sxm: {
      urlName: "h100sxm",
      name: "H100 SXM",
      gpuImagePath: "/static/images/gpu/h100-sxm-gpu.webp",
      VRAM: "80GB",
      manufacturer: "nvidia",
      benchmarks: {
        "meta-llama/Llama-3.1-8B-Instruct": {
          fitsOnGpu: true,
          "128_128": {
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
          }
        },
        "Qwen/Qwen2-0.5B": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 3.47,
                outputTokenThroughput: 443.63,
                costPer1MTokens: calculateCostPer1MTokens(443.63, gpuPricing.h100sxm)
              },
              {
                batchSize: 2,
                requestsPerSecond: 6.02,
                outputTokenThroughput: 770.86,
                costPer1MTokens: calculateCostPer1MTokens(770.86, gpuPricing.h100sxm)
              },
              {
                batchSize: 4,
                requestsPerSecond: 12.01,
                outputTokenThroughput: 1537.41,
                costPer1MTokens: calculateCostPer1MTokens(1537.41, gpuPricing.h100sxm)
              },
              {
                batchSize: 8,
                requestsPerSecond: 23.24,
                outputTokenThroughput: 2974.55,
                costPer1MTokens: calculateCostPer1MTokens(2974.55, gpuPricing.h100sxm)
              },
              {
                batchSize: 16,
                requestsPerSecond: 43.22,
                outputTokenThroughput: 5532.25,
                costPer1MTokens: calculateCostPer1MTokens(5532.25, gpuPricing.h100sxm)
              },
              {
                batchSize: 32,
                requestsPerSecond: 75.09,
                outputTokenThroughput: 9611.74,
                costPer1MTokens: calculateCostPer1MTokens(9611.74, gpuPricing.h100sxm)
              },
              {
                batchSize: 64,
                requestsPerSecond: 113.56,
                outputTokenThroughput: 14535.76,
                costPer1MTokens: calculateCostPer1MTokens(14535.76, gpuPricing.h100sxm)
              },
              {
                batchSize: 128,
                requestsPerSecond: 151.35,
                outputTokenThroughput: 19372.73,
                costPer1MTokens: calculateCostPer1MTokens(19372.73, gpuPricing.h100sxm)
              },
              {
                batchSize: 256,
                requestsPerSecond: 145.83,
                outputTokenThroughput: 18665.90,
                costPer1MTokens: calculateCostPer1MTokens(18665.90, gpuPricing.h100sxm)
              },
              {
                batchSize: 512,
                requestsPerSecond: 158.96,
                outputTokenThroughput: 20346.65,
                costPer1MTokens: calculateCostPer1MTokens(20346.65, gpuPricing.h100sxm)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 157.81,
                outputTokenThroughput: 20199.54,
                costPer1MTokens: calculateCostPer1MTokens(20199.54, gpuPricing.h100sxm)
              }
            ]
          }
        },
        "google/gemma-2-9b-it": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 0.77,
                outputTokenThroughput: 97.92,
                costPer1MTokens: calculateCostPer1MTokens(97.92, gpuPricing.h100sxm)
              },
              {
                batchSize: 2,
                requestsPerSecond: 1.51,
                outputTokenThroughput: 192.70,
                costPer1MTokens: calculateCostPer1MTokens(192.70, gpuPricing.h100sxm)
              },
              {
                batchSize: 4,
                requestsPerSecond: 3.08,
                outputTokenThroughput: 394.56,
                costPer1MTokens: calculateCostPer1MTokens(394.56, gpuPricing.h100sxm)
              },
              {
                batchSize: 8,
                requestsPerSecond: 6.04,
                outputTokenThroughput: 773.58,
                costPer1MTokens: calculateCostPer1MTokens(773.58, gpuPricing.h100sxm)
              },
              {
                batchSize: 16,
                requestsPerSecond: 11.69,
                outputTokenThroughput: 1496.57,
                costPer1MTokens: calculateCostPer1MTokens(1496.57, gpuPricing.h100sxm)
              },
              {
                batchSize: 32,
                requestsPerSecond: 21.39,
                outputTokenThroughput: 2738.38,
                costPer1MTokens: calculateCostPer1MTokens(2738.38, gpuPricing.h100sxm)
              },
              {
                batchSize: 64,
                requestsPerSecond: 35.64,
                outputTokenThroughput: 4562.12,
                costPer1MTokens: calculateCostPer1MTokens(4562.12, gpuPricing.h100sxm)
              },
              {
                batchSize: 128,
                requestsPerSecond: 54.17,
                outputTokenThroughput: 6933.15,
                costPer1MTokens: calculateCostPer1MTokens(6933.15, gpuPricing.h100sxm)
              },
              {
                batchSize: 256,
                requestsPerSecond: 65.71,
                outputTokenThroughput: 8410.25,
                costPer1MTokens: calculateCostPer1MTokens(8410.25, gpuPricing.h100sxm)
              },
              {
                batchSize: 512,
                requestsPerSecond: 65.74,
                outputTokenThroughput: 8415.25,
                costPer1MTokens: calculateCostPer1MTokens(8415.25, gpuPricing.h100sxm)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 65.47,
                outputTokenThroughput: 8380.59,
                costPer1MTokens: calculateCostPer1MTokens(8380.59, gpuPricing.h100sxm)
              }
            ]
          }
        },
        "microsoft/Phi-3-mini-4k-instruct": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 1.45,
                outputTokenThroughput: 186.04,
                costPer1MTokens: calculateCostPer1MTokens(186.04, gpuPricing.h100sxm)
              },
              {
                batchSize: 2,
                requestsPerSecond: 2.83,
                outputTokenThroughput: 362.50,
                costPer1MTokens: calculateCostPer1MTokens(362.50, gpuPricing.h100sxm)
              },
              {
                batchSize: 4,
                requestsPerSecond: 5.54,
                outputTokenThroughput: 709.12,
                costPer1MTokens: calculateCostPer1MTokens(709.12, gpuPricing.h100sxm)
              },
              {
                batchSize: 8,
                requestsPerSecond: 10.62,
                outputTokenThroughput: 1358.99,
                costPer1MTokens: calculateCostPer1MTokens(1358.99, gpuPricing.h100sxm)
              },
              {
                batchSize: 16,
                requestsPerSecond: 19.54,
                outputTokenThroughput: 2501.37,
                costPer1MTokens: calculateCostPer1MTokens(2501.37, gpuPricing.h100sxm)
              },
              {
                batchSize: 32,
                requestsPerSecond: 33.59,
                outputTokenThroughput: 4299.50,
                costPer1MTokens: calculateCostPer1MTokens(4299.50, gpuPricing.h100sxm)
              },
              {
                batchSize: 64,
                requestsPerSecond: 51.33,
                outputTokenThroughput: 6569.70,
                costPer1MTokens: calculateCostPer1MTokens(6569.70, gpuPricing.h100sxm)
              },
              {
                batchSize: 128,
                requestsPerSecond: 68.95,
                outputTokenThroughput: 8825.92,
                costPer1MTokens: calculateCostPer1MTokens(8825.92, gpuPricing.h100sxm)
              },
              {
                batchSize: 256,
                requestsPerSecond: 81.26,
                outputTokenThroughput: 10401.89,
                costPer1MTokens: calculateCostPer1MTokens(10401.89, gpuPricing.h100sxm)
              },
              {
                batchSize: 512,
                requestsPerSecond: 80.38,
                outputTokenThroughput: 10288.72,
                costPer1MTokens: calculateCostPer1MTokens(10288.72, gpuPricing.h100sxm)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 80.08,
                outputTokenThroughput: 10250.17,
                costPer1MTokens: calculateCostPer1MTokens(10250.17, gpuPricing.h100sxm)
              }
            ]
          }
        }
      }
    },
    h100nvl: {
      urlName: "h100nvl",
      name: "H100 NVL",
      gpuImagePath: "/static/images/gpu/h100-nvl.webp",
      VRAM: "80GB",
      manufacturer: "nvidia",
      benchmarks: {
        "meta-llama/Llama-3.1-8B-Instruct": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 0.96,
                outputTokenThroughput: 122.40,
                costPer1MTokens: calculateCostPer1MTokens(122.40, gpuPricing.h100nvl)
              },
              {
                batchSize: 2,
                requestsPerSecond: 1.92,
                outputTokenThroughput: 263.39,
                costPer1MTokens: calculateCostPer1MTokens(263.39, gpuPricing.h100nvl)
              },
              {
                batchSize: 4,
                requestsPerSecond: 2.79,
                outputTokenThroughput: 357.20,
                costPer1MTokens: calculateCostPer1MTokens(357.20, gpuPricing.h100nvl)
              },
              {
                batchSize: 8,
                requestsPerSecond: 7.10,
                outputTokenThroughput: 908.87,
                costPer1MTokens: calculateCostPer1MTokens(908.87, gpuPricing.h100nvl)
              },
              {
                batchSize: 16,
                requestsPerSecond: 13.22,
                outputTokenThroughput: 1692.52,
                costPer1MTokens: calculateCostPer1MTokens(1692.52, gpuPricing.h100nvl)
              },
              {
                batchSize: 32,
                requestsPerSecond: 23.10,
                outputTokenThroughput: 2957.10,
                costPer1MTokens: calculateCostPer1MTokens(2957.10, gpuPricing.h100nvl)
              },
              {
                batchSize: 64,
                requestsPerSecond: 36.52,
                outputTokenThroughput: 4675.31,
                costPer1MTokens: calculateCostPer1MTokens(4675.31, gpuPricing.h100nvl)
              },
              {
                batchSize: 128,
                requestsPerSecond: 45.90,
                outputTokenThroughput: 5875.78,
                costPer1MTokens: calculateCostPer1MTokens(5875.78, gpuPricing.h100nvl)
              },
              {
                batchSize: 256,
                requestsPerSecond: 50.60,
                outputTokenThroughput: 6477.41,
                costPer1MTokens: calculateCostPer1MTokens(6477.41, gpuPricing.h100nvl)
              },
              {
                batchSize: 512,
                requestsPerSecond: 50.36,
                outputTokenThroughput: 6446.24,
                costPer1MTokens: calculateCostPer1MTokens(6446.24, gpuPricing.h100nvl)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 50.50,
                outputTokenThroughput: 6464.00,
                costPer1MTokens: calculateCostPer1MTokens(6464.00, gpuPricing.h100nvl)
              },
            ]
          }
        },
        "Qwen/Qwen2-0.5B": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 3.30,
                outputTokenThroughput: 422.78,
                costPer1MTokens: calculateCostPer1MTokens(422.78, gpuPricing.h100nvl)
              },
              {
                batchSize: 2,
                requestsPerSecond: 5.82,
                outputTokenThroughput: 745.19,
                costPer1MTokens: calculateCostPer1MTokens(745.19, gpuPricing.h100nvl)
              },
              {
                batchSize: 4,
                requestsPerSecond: 11.61,
                outputTokenThroughput: 1485.99,
                costPer1MTokens: calculateCostPer1MTokens(1485.99, gpuPricing.h100nvl)
              },
              {
                batchSize: 8,
                requestsPerSecond: 22.88,
                outputTokenThroughput: 2928.15,
                costPer1MTokens: calculateCostPer1MTokens(2928.15, gpuPricing.h100nvl)
              },
              {
                batchSize: 16,
                requestsPerSecond: 41.38,
                outputTokenThroughput: 5296.70,
                costPer1MTokens: calculateCostPer1MTokens(5296.70, gpuPricing.h100nvl)
              },
              {
                batchSize: 32,
                requestsPerSecond: 71.45,
                outputTokenThroughput: 9145.50,
                costPer1MTokens: calculateCostPer1MTokens(9145.50, gpuPricing.h100nvl)
              },
              {
                batchSize: 64,
                requestsPerSecond: 107.98,
                outputTokenThroughput: 13822.04,
                costPer1MTokens: calculateCostPer1MTokens(13822.04, gpuPricing.h100nvl)
              },
              {
                batchSize: 128,
                requestsPerSecond: 142.54,
                outputTokenThroughput: 18245.68,
                costPer1MTokens: calculateCostPer1MTokens(18245.68, gpuPricing.h100nvl)
              },
              {
                batchSize: 256,
                requestsPerSecond: 154.18,
                outputTokenThroughput: 19735.36,
                costPer1MTokens: calculateCostPer1MTokens(19735.36, gpuPricing.h100nvl)
              },
              {
                batchSize: 512,
                requestsPerSecond: 145.61,
                outputTokenThroughput: 18638.52,
                costPer1MTokens: calculateCostPer1MTokens(18638.52, gpuPricing.h100nvl)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 147.45,
                outputTokenThroughput: 18873.04,
                costPer1MTokens: calculateCostPer1MTokens(18873.04, gpuPricing.h100nvl)
              }
            ]
          }
        },
        "google/gemma-2-9b-it": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 0.76,
                outputTokenThroughput: 97.17,
                costPer1MTokens: calculateCostPer1MTokens(97.17, gpuPricing.h100nvl)
              },
              {
                batchSize: 2,
                requestsPerSecond: 1.52,
                outputTokenThroughput: 194.18,
                costPer1MTokens: calculateCostPer1MTokens(194.18, gpuPricing.h100nvl)
              },
              {
                batchSize: 4,
                requestsPerSecond: 3.01,
                outputTokenThroughput: 384.91,
                costPer1MTokens: calculateCostPer1MTokens(384.91, gpuPricing.h100nvl)
              },
              {
                batchSize: 8,
                requestsPerSecond: 5.80,
                outputTokenThroughput: 742.08,
                costPer1MTokens: calculateCostPer1MTokens(742.08, gpuPricing.h100nvl)
              },
              {
                batchSize: 16,
                requestsPerSecond: 10.89,
                outputTokenThroughput: 1393.75,
                costPer1MTokens: calculateCostPer1MTokens(1393.75, gpuPricing.h100nvl)
              },
              {
                batchSize: 32,
                requestsPerSecond: 19.32,
                outputTokenThroughput: 2473.08,
                costPer1MTokens: calculateCostPer1MTokens(2473.08, gpuPricing.h100nvl)
              },
              {
                batchSize: 64,
                requestsPerSecond: 25.64,
                outputTokenThroughput: 3282.11,
                costPer1MTokens: calculateCostPer1MTokens(3282.11, gpuPricing.h100nvl)
              },
              {
                batchSize: 128,
                requestsPerSecond: 42.41,
                outputTokenThroughput: 5428.89,
                costPer1MTokens: calculateCostPer1MTokens(5428.89, gpuPricing.h100nvl)
              },
              {
                batchSize: 256,
                requestsPerSecond: 45.98,
                outputTokenThroughput: 5885.89,
                costPer1MTokens: calculateCostPer1MTokens(5885.89, gpuPricing.h100nvl)
              },
              {
                batchSize: 512,
                requestsPerSecond: 45.58,
                outputTokenThroughput: 5834.46,
                costPer1MTokens: calculateCostPer1MTokens(5834.46, gpuPricing.h100nvl)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 45.23,
                outputTokenThroughput: 5789.96,
                costPer1MTokens: calculateCostPer1MTokens(5789.96, gpuPricing.h100nvl)
              }
            ]
          }
        },
        "microsoft/Phi-3-mini-4k-instruct": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 1.46,
                outputTokenThroughput: 186.96,
                costPer1MTokens: calculateCostPer1MTokens(186.96, gpuPricing.h100nvl)
              },
              {
                batchSize: 2,
                requestsPerSecond: 2.81,
                outputTokenThroughput: 359.07,
                costPer1MTokens: calculateCostPer1MTokens(359.07, gpuPricing.h100nvl)
              },
              {
                batchSize: 4,
                requestsPerSecond: 5.50,
                outputTokenThroughput: 704.25,
                costPer1MTokens: calculateCostPer1MTokens(704.25, gpuPricing.h100nvl)
              },
              {
                batchSize: 8,
                requestsPerSecond: 10.51,
                outputTokenThroughput: 1345.66,
                costPer1MTokens: calculateCostPer1MTokens(1345.66, gpuPricing.h100nvl)
              },
              {
                batchSize: 16,
                requestsPerSecond: 18.92,
                outputTokenThroughput: 2421.37,
                costPer1MTokens: calculateCostPer1MTokens(2421.37, gpuPricing.h100nvl)
              },
              {
                batchSize: 32,
                requestsPerSecond: 32.01,
                outputTokenThroughput: 4096.77,
                costPer1MTokens: calculateCostPer1MTokens(4096.77, gpuPricing.h100nvl)
              },
              {
                batchSize: 64,
                requestsPerSecond: 47.80,
                outputTokenThroughput: 6118.38,
                costPer1MTokens: calculateCostPer1MTokens(6118.38, gpuPricing.h100nvl)
              },
              {
                batchSize: 128,
                requestsPerSecond: 61.47,
                outputTokenThroughput: 7868.00,
                costPer1MTokens: calculateCostPer1MTokens(7868.00, gpuPricing.h100nvl)
              },
              {
                batchSize: 256,
                requestsPerSecond: 68.30,
                outputTokenThroughput: 8742.04,
                costPer1MTokens: calculateCostPer1MTokens(8742.04, gpuPricing.h100nvl)
              },
              {
                batchSize: 512,
                requestsPerSecond: 67.10,
                outputTokenThroughput: 8589.41,
                costPer1MTokens: calculateCostPer1MTokens(8589.41, gpuPricing.h100nvl)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 65.85,
                outputTokenThroughput: 8428.38,
                costPer1MTokens: calculateCostPer1MTokens(8428.38, gpuPricing.h100nvl)
              }
            ]
          }
        }
      }
    },
    h100pcie: {
      urlName: "h100pcie",
      name: "H100 PCIe",
      gpuImagePath: "/static/images/gpu/h100-gpu.webp",
      VRAM: "80GB",
      manufacturer: "nvidia",
      benchmarks: {
        "meta-llama/Llama-3.1-8B-Instruct": {
          fitsOnGpu: true,
          "128_128": {
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
          }
        },
        "Qwen/Qwen2-0.5B": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 2.74,
                outputTokenThroughput: 351.06,
                costPer1MTokens: calculateCostPer1MTokens(351.06, gpuPricing.h100pcie)
              },
              {
                batchSize: 2,
                requestsPerSecond: 4.86,
                outputTokenThroughput: 622.47,
                costPer1MTokens: calculateCostPer1MTokens(622.47, gpuPricing.h100pcie)
              },
              {
                batchSize: 4,
                requestsPerSecond: 9.95,
                outputTokenThroughput: 1274.21,
                costPer1MTokens: calculateCostPer1MTokens(1274.21, gpuPricing.h100pcie)
              },
              {
                batchSize: 8,
                requestsPerSecond: 18.74,
                outputTokenThroughput: 2398.89,
                costPer1MTokens: calculateCostPer1MTokens(2398.89, gpuPricing.h100pcie)
              },
              {
                batchSize: 16,
                requestsPerSecond: 33.91,
                outputTokenThroughput: 4340.44,
                costPer1MTokens: calculateCostPer1MTokens(4340.44, gpuPricing.h100pcie)
              },
              {
                batchSize: 32,
                requestsPerSecond: 57.40,
                outputTokenThroughput: 7346.99,
                costPer1MTokens: calculateCostPer1MTokens(7346.99, gpuPricing.h100pcie)
              },
              {
                batchSize: 64,
                requestsPerSecond: 84.31,
                outputTokenThroughput: 10792.15,
                costPer1MTokens: calculateCostPer1MTokens(10792.15, gpuPricing.h100pcie)
              },
              {
                batchSize: 128,
                requestsPerSecond: 104.72,
                outputTokenThroughput: 13403.69,
                costPer1MTokens: calculateCostPer1MTokens(13403.69, gpuPricing.h100pcie)
              },
              {
                batchSize: 256,
                requestsPerSecond: 102.49,
                outputTokenThroughput: 13119.20,
                costPer1MTokens: calculateCostPer1MTokens(13119.20, gpuPricing.h100pcie)
              },
              {
                batchSize: 512,
                requestsPerSecond: 107.46,
                outputTokenThroughput: 13754.60,
                costPer1MTokens: calculateCostPer1MTokens(13754.60, gpuPricing.h100pcie)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 106.24,
                outputTokenThroughput: 13598.12,
                costPer1MTokens: calculateCostPer1MTokens(13598.12, gpuPricing.h100pcie)
              }
            ]
          }
        },
        "google/gemma-2-9b-it": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 0.56,
                outputTokenThroughput: 71.48,
                costPer1MTokens: calculateCostPer1MTokens(71.48, gpuPricing.h100pcie)
              },
              {
                batchSize: 2,
                requestsPerSecond: 1.12,
                outputTokenThroughput: 143.04,
                costPer1MTokens: calculateCostPer1MTokens(143.04, gpuPricing.h100pcie)
              },
              {
                batchSize: 4,
                requestsPerSecond: 2.19,
                outputTokenThroughput: 279.79,
                costPer1MTokens: calculateCostPer1MTokens(279.79, gpuPricing.h100pcie)
              },
              {
                batchSize: 8,
                requestsPerSecond: 4.18,
                outputTokenThroughput: 534.85,
                costPer1MTokens: calculateCostPer1MTokens(534.85, gpuPricing.h100pcie)
              },
              {
                batchSize: 16,
                requestsPerSecond: 8.17,
                outputTokenThroughput: 1046.36,
                costPer1MTokens: calculateCostPer1MTokens(1046.36, gpuPricing.h100pcie)
              },
              {
                batchSize: 32,
                requestsPerSecond: 14.31,
                outputTokenThroughput: 1831.36,
                costPer1MTokens: calculateCostPer1MTokens(1831.36, gpuPricing.h100pcie)
              },
              {
                batchSize: 64,
                requestsPerSecond: 24.63,
                outputTokenThroughput: 3152.26,
                costPer1MTokens: calculateCostPer1MTokens(3152.26, gpuPricing.h100pcie)
              },
              {
                batchSize: 128,
                requestsPerSecond: 36.52,
                outputTokenThroughput: 4674.11,
                costPer1MTokens: calculateCostPer1MTokens(4674.11, gpuPricing.h100pcie)
              },
              {
                batchSize: 256,
                requestsPerSecond: 45.73,
                outputTokenThroughput: 5853.75,
                costPer1MTokens: calculateCostPer1MTokens(5853.75, gpuPricing.h100pcie)
              },
              {
                batchSize: 512,
                requestsPerSecond: 44.11,
                outputTokenThroughput: 5646.11,
                costPer1MTokens: calculateCostPer1MTokens(5646.11, gpuPricing.h100pcie)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 45.63,
                outputTokenThroughput: 5841.20,
                costPer1MTokens: calculateCostPer1MTokens(5841.20, gpuPricing.h100pcie)
              }
            ]
          }
        },
        "microsoft/Phi-3-mini-4k-instruct": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 1.12,
                outputTokenThroughput: 143.25,
                costPer1MTokens: calculateCostPer1MTokens(143.25, gpuPricing.h100pcie)
              },
              {
                batchSize: 2,
                requestsPerSecond: 2.19,
                outputTokenThroughput: 280.87,
                costPer1MTokens: calculateCostPer1MTokens(280.87, gpuPricing.h100pcie)
              },
              {
                batchSize: 4,
                requestsPerSecond: 4.29,
                outputTokenThroughput: 549.42,
                costPer1MTokens: calculateCostPer1MTokens(549.42, gpuPricing.h100pcie)
              },
              {
                batchSize: 8,
                requestsPerSecond: 7.99,
                outputTokenThroughput: 1023.22,
                costPer1MTokens: calculateCostPer1MTokens(1023.22, gpuPricing.h100pcie)
              },
              {
                batchSize: 16,
                requestsPerSecond: 14.93,
                outputTokenThroughput: 1910.54,
                costPer1MTokens: calculateCostPer1MTokens(1910.54, gpuPricing.h100pcie)
              },
              {
                batchSize: 32,
                requestsPerSecond: 22.97,
                outputTokenThroughput: 2939.84,
                costPer1MTokens: calculateCostPer1MTokens(2939.84, gpuPricing.h100pcie)
              },
              {
                batchSize: 64,
                requestsPerSecond: 37.76,
                outputTokenThroughput: 4833.07,
                costPer1MTokens: calculateCostPer1MTokens(4833.07, gpuPricing.h100pcie)
              },
              {
                batchSize: 128,
                requestsPerSecond: 49.80,
                outputTokenThroughput: 6374.05,
                costPer1MTokens: calculateCostPer1MTokens(6374.05, gpuPricing.h100pcie)
              },
              {
                batchSize: 256,
                requestsPerSecond: 54.03,
                outputTokenThroughput: 6916.30,
                costPer1MTokens: calculateCostPer1MTokens(6916.30, gpuPricing.h100pcie)
              },
              {
                batchSize: 512,
                requestsPerSecond: 53.97,
                outputTokenThroughput: 6908.18,
                costPer1MTokens: calculateCostPer1MTokens(6908.18, gpuPricing.h100pcie)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 53.79,
                outputTokenThroughput: 6885.58,
                costPer1MTokens: calculateCostPer1MTokens(6885.58, gpuPricing.h100pcie)
              }
            ]
          }
        }
      }
    },
    a100sxm: {
      urlName: "a100sxm",
      name: "A100 SXM",
      gpuImagePath: "/static/images/gpu/a100-sxm-gpu.webp",
      VRAM: "80GB",
      manufacturer: "nvidia",
      benchmarks: {
        "meta-llama/Llama-3.1-8B-Instruct": {
          fitsOnGpu: true,
          "128_128": {
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
          }
        },
        "Qwen/Qwen2-0.5B": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 2.39,
                outputTokenThroughput: 305.41,
                costPer1MTokens: calculateCostPer1MTokens(305.41, gpuPricing.a100sxm)
              },
              {
                batchSize: 2,
                requestsPerSecond: 4.53,
                outputTokenThroughput: 580.05,
                costPer1MTokens: calculateCostPer1MTokens(580.05, gpuPricing.a100sxm)
              },
              {
                batchSize: 4,
                requestsPerSecond: 8.89,
                outputTokenThroughput: 1137.81,
                costPer1MTokens: calculateCostPer1MTokens(1137.81, gpuPricing.a100sxm)
              },
              {
                batchSize: 8,
                requestsPerSecond: 16.63,
                outputTokenThroughput: 2128.12,
                costPer1MTokens: calculateCostPer1MTokens(2128.12, gpuPricing.a100sxm)
              },
              {
                batchSize: 16,
                requestsPerSecond: 29.53,
                outputTokenThroughput: 3779.67,
                costPer1MTokens: calculateCostPer1MTokens(3779.67, gpuPricing.a100sxm)
              },
              {
                batchSize: 32,
                requestsPerSecond: 46.77,
                outputTokenThroughput: 5986.40,
                costPer1MTokens: calculateCostPer1MTokens(5986.40, gpuPricing.a100sxm)
              },
              {
                batchSize: 64,
                requestsPerSecond: 65.13,
                outputTokenThroughput: 8337.13,
                costPer1MTokens: calculateCostPer1MTokens(8337.13, gpuPricing.a100sxm)
              },
              {
                batchSize: 128,
                requestsPerSecond: 69.88,
                outputTokenThroughput: 8944.78,
                costPer1MTokens: calculateCostPer1MTokens(8944.78, gpuPricing.a100sxm)
              },
              {
                batchSize: 256,
                requestsPerSecond: 72.56,
                outputTokenThroughput: 9288.17,
                costPer1MTokens: calculateCostPer1MTokens(9288.17, gpuPricing.a100sxm)
              },
              {
                batchSize: 512,
                requestsPerSecond: 76.78,
                outputTokenThroughput: 9827.71,
                costPer1MTokens: calculateCostPer1MTokens(9827.71, gpuPricing.a100sxm)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 75.61,
                outputTokenThroughput: 9678.41,
                costPer1MTokens: calculateCostPer1MTokens(9678.41, gpuPricing.a100sxm)
              }
            ]
          }
        },
        "google/gemma-2-9b-it": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 0.50,
                outputTokenThroughput: 63.46,
                costPer1MTokens: calculateCostPer1MTokens(63.46, gpuPricing.a100sxm)
              },
              {
                batchSize: 2,
                requestsPerSecond: 0.99,
                outputTokenThroughput: 126.61,
                costPer1MTokens: calculateCostPer1MTokens(126.61, gpuPricing.a100sxm)
              },
              {
                batchSize: 4,
                requestsPerSecond: 1.96,
                outputTokenThroughput: 250.78,
                costPer1MTokens: calculateCostPer1MTokens(250.78, gpuPricing.a100sxm)
              },
              {
                batchSize: 8,
                requestsPerSecond: 3.74,
                outputTokenThroughput: 478.82,
                costPer1MTokens: calculateCostPer1MTokens(478.82, gpuPricing.a100sxm)
              },
              {
                batchSize: 16,
                requestsPerSecond: 6.89,
                outputTokenThroughput: 882.23,
                costPer1MTokens: calculateCostPer1MTokens(882.23, gpuPricing.a100sxm)
              },
              {
                batchSize: 32,
                requestsPerSecond: 11.95,
                outputTokenThroughput: 1529.34,
                costPer1MTokens: calculateCostPer1MTokens(1529.34, gpuPricing.a100sxm)
              },
              {
                batchSize: 64,
                requestsPerSecond: 18.51,
                outputTokenThroughput: 2369.34,
                costPer1MTokens: calculateCostPer1MTokens(2369.34, gpuPricing.a100sxm)
              },
              {
                batchSize: 128,
                requestsPerSecond: 27.26,
                outputTokenThroughput: 3489.00,
                costPer1MTokens: calculateCostPer1MTokens(3489.00, gpuPricing.a100sxm)
              },
              {
                batchSize: 256,
                requestsPerSecond: 32.46,
                outputTokenThroughput: 4154.89,
                costPer1MTokens: calculateCostPer1MTokens(4154.89, gpuPricing.a100sxm)
              },
              {
                batchSize: 512,
                requestsPerSecond: 32.49,
                outputTokenThroughput: 4159.01,
                costPer1MTokens: calculateCostPer1MTokens(4159.01, gpuPricing.a100sxm)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 32.69,
                outputTokenThroughput: 4184.89,
                costPer1MTokens: calculateCostPer1MTokens(4184.89, gpuPricing.a100sxm)
              }
            ]
          }
        },
        "microsoft/Phi-3-mini-4k-instruct": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 0.98,
                outputTokenThroughput: 125.80,
                costPer1MTokens: calculateCostPer1MTokens(125.80, gpuPricing.a100sxm)
              },
              {
                batchSize: 2,
                requestsPerSecond: 1.84,
                outputTokenThroughput: 235.12,
                costPer1MTokens: calculateCostPer1MTokens(235.12, gpuPricing.a100sxm)
              },
              {
                batchSize: 4,
                requestsPerSecond: 3.68,
                outputTokenThroughput: 471.28,
                costPer1MTokens: calculateCostPer1MTokens(471.28, gpuPricing.a100sxm)
              },
              {
                batchSize: 8,
                requestsPerSecond: 6.52,
                outputTokenThroughput: 834.14,
                costPer1MTokens: calculateCostPer1MTokens(834.14, gpuPricing.a100sxm)
              },
              {
                batchSize: 16,
                requestsPerSecond: 11.53,
                outputTokenThroughput: 1475.99,
                costPer1MTokens: calculateCostPer1MTokens(1475.99, gpuPricing.a100sxm)
              },
              {
                batchSize: 32,
                requestsPerSecond: 20.19,
                outputTokenThroughput: 2583.90,
                costPer1MTokens: calculateCostPer1MTokens(2583.90, gpuPricing.a100sxm)
              },
              {
                batchSize: 64,
                requestsPerSecond: 29.23,
                outputTokenThroughput: 3741.24,
                costPer1MTokens: calculateCostPer1MTokens(3741.24, gpuPricing.a100sxm)
              },
              {
                batchSize: 128,
                requestsPerSecond: 36.73,
                outputTokenThroughput: 4701.87,
                costPer1MTokens: calculateCostPer1MTokens(4701.87, gpuPricing.a100sxm)
              },
              {
                batchSize: 256,
                requestsPerSecond: 38.38,
                outputTokenThroughput: 4912.29,
                costPer1MTokens: calculateCostPer1MTokens(4912.29, gpuPricing.a100sxm)
              },
              {
                batchSize: 512,
                requestsPerSecond: 38.28,
                outputTokenThroughput: 4899.24,
                costPer1MTokens: calculateCostPer1MTokens(4899.24, gpuPricing.a100sxm)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 38.52,
                outputTokenThroughput: 4930.26,
                costPer1MTokens: calculateCostPer1MTokens(4930.26, gpuPricing.a100sxm)
              }
            ]
          }
        }
      }
    },
    a100pcie: {
      urlName: "a100pcie",
      name: "A100 PCIe",
      gpuImagePath: "/static/images/gpu/a100-gpu-1.webp",
      VRAM: "80GB",
      manufacturer: "nvidia",
      benchmarks: {
        "meta-llama/Llama-3.1-8B-Instruct": {
          fitsOnGpu: true,
          "128_128": {
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
          }
        },
        "Qwen/Qwen2-0.5B": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 2.59,
                outputTokenThroughput: 331.50,
                costPer1MTokens: calculateCostPer1MTokens(331.50, gpuPricing.a100pcie)
              },
              {
                batchSize: 2,
                requestsPerSecond: 4.90,
                outputTokenThroughput: 627.42,
                costPer1MTokens: calculateCostPer1MTokens(627.42, gpuPricing.a100pcie)
              },
              {
                batchSize: 4,
                requestsPerSecond: 9.64,
                outputTokenThroughput: 1234.04,
                costPer1MTokens: calculateCostPer1MTokens(1234.04, gpuPricing.a100pcie)
              },
              {
                batchSize: 8,
                requestsPerSecond: 18.91,
                outputTokenThroughput: 2420.64,
                costPer1MTokens: calculateCostPer1MTokens(2420.64, gpuPricing.a100pcie)
              },
              {
                batchSize: 16,
                requestsPerSecond: 31.03,
                outputTokenThroughput: 3971.96,
                costPer1MTokens: calculateCostPer1MTokens(3971.96, gpuPricing.a100pcie)
              },
              {
                batchSize: 32,
                requestsPerSecond: 57.12,
                outputTokenThroughput: 7310.93,
                costPer1MTokens: calculateCostPer1MTokens(7310.93, gpuPricing.a100pcie)
              },
              {
                batchSize: 64,
                requestsPerSecond: 87.20,
                outputTokenThroughput: 11161.12,
                costPer1MTokens: calculateCostPer1MTokens(11161.12, gpuPricing.a100pcie)
              },
              {
                batchSize: 128,
                requestsPerSecond: 114.57,
                outputTokenThroughput: 14665.47,
                costPer1MTokens: calculateCostPer1MTokens(14665.47, gpuPricing.a100pcie)
              },
              {
                batchSize: 256,
                requestsPerSecond: 120.53,
                outputTokenThroughput: 15428.21,
                costPer1MTokens: calculateCostPer1MTokens(15428.21, gpuPricing.a100pcie)
              },
              {
                batchSize: 512,
                requestsPerSecond: 124.83,
                outputTokenThroughput: 15978.44,
                costPer1MTokens: calculateCostPer1MTokens(15978.44, gpuPricing.a100pcie)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 122.34,
                outputTokenThroughput: 15659.60,
                costPer1MTokens: calculateCostPer1MTokens(15659.60, gpuPricing.a100pcie)
              }
            ]
          }
        },
        "google/gemma-2-9b-it": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 0.48,
                outputTokenThroughput: 61.07,
                costPer1MTokens: calculateCostPer1MTokens(61.07, gpuPricing.a100pcie)
              },
              {
                batchSize: 2,
                requestsPerSecond: 0.99,
                outputTokenThroughput: 126.13,
                costPer1MTokens: calculateCostPer1MTokens(126.13, gpuPricing.a100pcie)
              },
              {
                batchSize: 4,
                requestsPerSecond: 1.95,
                outputTokenThroughput: 249.81,
                costPer1MTokens: calculateCostPer1MTokens(249.81, gpuPricing.a100pcie)
              },
              {
                batchSize: 8,
                requestsPerSecond: 3.74,
                outputTokenThroughput: 478.64,
                costPer1MTokens: calculateCostPer1MTokens(478.64, gpuPricing.a100pcie)
              },
              {
                batchSize: 16,
                requestsPerSecond: 6.77,
                outputTokenThroughput: 866.30,
                costPer1MTokens: calculateCostPer1MTokens(866.30, gpuPricing.a100pcie)
              },
              {
                batchSize: 32,
                requestsPerSecond: 11.56,
                outputTokenThroughput: 1479.27,
                costPer1MTokens: calculateCostPer1MTokens(1479.27, gpuPricing.a100pcie)
              },
              {
                batchSize: 64,
                requestsPerSecond: 17.86,
                outputTokenThroughput: 2286.16,
                costPer1MTokens: calculateCostPer1MTokens(2286.16, gpuPricing.a100pcie)
              },
              {
                batchSize: 128,
                requestsPerSecond: 26.04,
                outputTokenThroughput: 3333.19,
                costPer1MTokens: calculateCostPer1MTokens(3333.19, gpuPricing.a100pcie)
              },
              {
                batchSize: 256,
                requestsPerSecond: 30.52,
                outputTokenThroughput: 3907.12,
                costPer1MTokens: calculateCostPer1MTokens(3907.12, gpuPricing.a100pcie)
              },
              {
                batchSize: 512,
                requestsPerSecond: 31.00,
                outputTokenThroughput: 3968.47,
                costPer1MTokens: calculateCostPer1MTokens(3968.47, gpuPricing.a100pcie)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 30.83,
                outputTokenThroughput: 3946.17,
                costPer1MTokens: calculateCostPer1MTokens(3946.17, gpuPricing.a100pcie)
              }
            ]
          }
        },
        "microsoft/Phi-3-mini-4k-instruct": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 0.99,
                outputTokenThroughput: 127.20,
                costPer1MTokens: calculateCostPer1MTokens(127.20, gpuPricing.a100pcie)
              },
              {
                batchSize: 2,
                requestsPerSecond: 1.91,
                outputTokenThroughput: 244.95,
                costPer1MTokens: calculateCostPer1MTokens(244.95, gpuPricing.a100pcie)
              },
              {
                batchSize: 4,
                requestsPerSecond: 3.73,
                outputTokenThroughput: 477.68,
                costPer1MTokens: calculateCostPer1MTokens(477.68, gpuPricing.a100pcie)
              },
              {
                batchSize: 8,
                requestsPerSecond: 6.78,
                outputTokenThroughput: 867.67,
                costPer1MTokens: calculateCostPer1MTokens(867.67, gpuPricing.a100pcie)
              },
              {
                batchSize: 16,
                requestsPerSecond: 12.14,
                outputTokenThroughput: 1553.64,
                costPer1MTokens: calculateCostPer1MTokens(1553.64, gpuPricing.a100pcie)
              },
              {
                batchSize: 32,
                requestsPerSecond: 20.83,
                outputTokenThroughput: 2666.32,
                costPer1MTokens: calculateCostPer1MTokens(2666.32, gpuPricing.a100pcie)
              },
              {
                batchSize: 64,
                requestsPerSecond: 30.52,
                outputTokenThroughput: 3906.39,
                costPer1MTokens: calculateCostPer1MTokens(3906.39, gpuPricing.a100pcie)
              },
              {
                batchSize: 128,
                requestsPerSecond: 38.64,
                outputTokenThroughput: 4946.13,
                costPer1MTokens: calculateCostPer1MTokens(4946.13, gpuPricing.a100pcie)
              },
              {
                batchSize: 256,
                requestsPerSecond: 41.06,
                outputTokenThroughput: 5256.20,
                costPer1MTokens: calculateCostPer1MTokens(5256.20, gpuPricing.a100pcie)
              },
              {
                batchSize: 512,
                requestsPerSecond: 40.54,
                outputTokenThroughput: 5188.68,
                costPer1MTokens: calculateCostPer1MTokens(5188.68, gpuPricing.a100pcie)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 40.46,
                outputTokenThroughput: 5179.30,
                costPer1MTokens: calculateCostPer1MTokens(5179.30, gpuPricing.a100pcie)
              }
            ]
          }
        }
      }
    },
    l40: {
      urlName: "l40",
      name: "L40",
      gpuImagePath: "/static/images/gpu/l40-gpu.webp",
      VRAM: "48GB",
      manufacturer: "nvidia",
      benchmarks: {
        "meta-llama/Llama-3.1-8B-Instruct": {
          fitsOnGpu: true,
          "128_128": {
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
          }
        },
        "Qwen/Qwen2-0.5B": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 2.37,
                outputTokenThroughput: 303.53,
                costPer1MTokens: calculateCostPer1MTokens(303.53, gpuPricing["l40"])
              },
              {
                batchSize: 2,
                requestsPerSecond: 4.38,
                outputTokenThroughput: 560.38,
                costPer1MTokens: calculateCostPer1MTokens(560.38, gpuPricing["l40"])
              },
              {
                batchSize: 4,
                requestsPerSecond: 8.40,
                outputTokenThroughput: 1074.90,
                costPer1MTokens: calculateCostPer1MTokens(1074.90, gpuPricing["l40"])
              },
              {
                batchSize: 8,
                requestsPerSecond: 15.87,
                outputTokenThroughput: 2031.35,
                costPer1MTokens: calculateCostPer1MTokens(2031.35, gpuPricing["l40"])
              },
              {
                batchSize: 16,
                requestsPerSecond: 28.24,
                outputTokenThroughput: 3614.50,
                costPer1MTokens: calculateCostPer1MTokens(3614.50, gpuPricing["l40"])
              },
              {
                batchSize: 32,
                requestsPerSecond: 43.92,
                outputTokenThroughput: 5621.23,
                costPer1MTokens: calculateCostPer1MTokens(5621.23, gpuPricing["l40"])
              },
              {
                batchSize: 64,
                requestsPerSecond: 61.22,
                outputTokenThroughput: 7835.93,
                costPer1MTokens: calculateCostPer1MTokens(7835.93, gpuPricing["l40"])
              },
              {
                batchSize: 128,
                requestsPerSecond: 70.10,
                outputTokenThroughput: 8972.28,
                costPer1MTokens: calculateCostPer1MTokens(8972.28, gpuPricing["l40"])
              },
              {
                batchSize: 256,
                requestsPerSecond: 72.45,
                outputTokenThroughput: 9273.34,
                costPer1MTokens: calculateCostPer1MTokens(9273.34, gpuPricing["l40"])
              },
              {
                batchSize: 512,
                requestsPerSecond: 70.79,
                outputTokenThroughput: 9060.54,
                costPer1MTokens: calculateCostPer1MTokens(9060.54, gpuPricing["l40"])
              },
              {
                batchSize: 1024,
                requestsPerSecond: 69.40,
                outputTokenThroughput: 8883.48,
                costPer1MTokens: calculateCostPer1MTokens(8883.48, gpuPricing["l40"])
              }
            ]
          }
        },
        "google/gemma-2-9b-it": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 0.28,
                outputTokenThroughput: 35.61,
                costPer1MTokens: calculateCostPer1MTokens(35.61, gpuPricing.l40)
              },
              {
                batchSize: 2,
                requestsPerSecond: 0.53,
                outputTokenThroughput: 68.08,
                costPer1MTokens: calculateCostPer1MTokens(68.08, gpuPricing.l40)
              },
              {
                batchSize: 4,
                requestsPerSecond: 1.06,
                outputTokenThroughput: 136.13,
                costPer1MTokens: calculateCostPer1MTokens(136.13, gpuPricing.l40)
              },
              {
                batchSize: 8,
                requestsPerSecond: 2.08,
                outputTokenThroughput: 266.51,
                costPer1MTokens: calculateCostPer1MTokens(266.51, gpuPricing.l40)
              },
              {
                batchSize: 16,
                requestsPerSecond: 3.95,
                outputTokenThroughput: 505.45,
                costPer1MTokens: calculateCostPer1MTokens(505.45, gpuPricing.l40)
              },
              {
                batchSize: 32,
                requestsPerSecond: 7.08,
                outputTokenThroughput: 905.76,
                costPer1MTokens: calculateCostPer1MTokens(905.76, gpuPricing.l40)
              },
              {
                batchSize: 64,
                requestsPerSecond: 11.08,
                outputTokenThroughput: 1417.66,
                costPer1MTokens: calculateCostPer1MTokens(1417.66, gpuPricing.l40)
              },
              {
                batchSize: 128,
                requestsPerSecond: 16.64,
                outputTokenThroughput: 2129.48,
                costPer1MTokens: calculateCostPer1MTokens(2129.48, gpuPricing.l40)
              },
              {
                batchSize: 256,
                requestsPerSecond: 21.09,
                outputTokenThroughput: 2699.93,
                costPer1MTokens: calculateCostPer1MTokens(2699.93, gpuPricing.l40)
              },
              {
                batchSize: 512,
                requestsPerSecond: 21.10,
                outputTokenThroughput: 2700.26,
                costPer1MTokens: calculateCostPer1MTokens(2700.26, gpuPricing.l40)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 21.15,
                outputTokenThroughput: 2707.43,
                costPer1MTokens: calculateCostPer1MTokens(2707.43, gpuPricing.l40)
              }
            ]
          }
        },
        "microsoft/Phi-3-mini-4k-instruct": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 0.63,
                outputTokenThroughput: 81.15,
                costPer1MTokens: calculateCostPer1MTokens(81.15, gpuPricing.l40)
              },
              {
                batchSize: 2,
                requestsPerSecond: 1.20,
                outputTokenThroughput: 153.47,
                costPer1MTokens: calculateCostPer1MTokens(153.47, gpuPricing.l40)
              },
              {
                batchSize: 4,
                requestsPerSecond: 2.35,
                outputTokenThroughput: 300.43,
                costPer1MTokens: calculateCostPer1MTokens(300.43, gpuPricing.l40)
              },
              {
                batchSize: 8,
                requestsPerSecond: 4.43,
                outputTokenThroughput: 566.84,
                costPer1MTokens: calculateCostPer1MTokens(566.84, gpuPricing.l40)
              },
              {
                batchSize: 16,
                requestsPerSecond: 7.90,
                outputTokenThroughput: 1011.69,
                costPer1MTokens: calculateCostPer1MTokens(1011.69, gpuPricing.l40)
              },
              {
                batchSize: 32,
                requestsPerSecond: 12.73,
                outputTokenThroughput: 1628.82,
                costPer1MTokens: calculateCostPer1MTokens(1628.82, gpuPricing.l40)
              },
              {
                batchSize: 64,
                requestsPerSecond: 18.42,
                outputTokenThroughput: 2357.76,
                costPer1MTokens: calculateCostPer1MTokens(2357.76, gpuPricing.l40)
              },
              {
                batchSize: 128,
                requestsPerSecond: 24.13,
                outputTokenThroughput: 3089.08,
                costPer1MTokens: calculateCostPer1MTokens(3089.08, gpuPricing.l40)
              },
              {
                batchSize: 256,
                requestsPerSecond: 27.06,
                outputTokenThroughput: 3463.60,
                costPer1MTokens: calculateCostPer1MTokens(3463.60, gpuPricing.l40)
              },
              {
                batchSize: 512,
                requestsPerSecond: 26.93,
                outputTokenThroughput: 3447.19,
                costPer1MTokens: calculateCostPer1MTokens(3447.19, gpuPricing.l40)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 26.87,
                outputTokenThroughput: 3439.31,
                costPer1MTokens: calculateCostPer1MTokens(3439.31, gpuPricing.l40)
              }
            ]
            
          }
        }
      }
    },
    "6000ada": {
      urlName: "6000ada",
      name: "RTX 6000 Ada",
      gpuImagePath: "/static/images/gpu/6000-ada-gpu.webp",
      VRAM: "48GB",
      manufacturer: "nvidia",
      benchmarks: {
        "meta-llama/Llama-3.1-8B-Instruct": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 0.41,
                outputTokenThroughput: 52.72,
                costPer1MTokens: calculateCostPer1MTokens(52.72, gpuPricing["6000ada"])
              },
              {
                batchSize: 2,
                requestsPerSecond: 0.81,
                outputTokenThroughput: 103.58,
                costPer1MTokens: calculateCostPer1MTokens(103.58, gpuPricing["6000ada"])
              },
              {
                batchSize: 4,
                requestsPerSecond: 1.60,
                outputTokenThroughput: 204.61,
                costPer1MTokens: calculateCostPer1MTokens(204.61, gpuPricing["6000ada"])
              },
              {
                batchSize: 8,
                requestsPerSecond: 3.11,
                outputTokenThroughput: 397.72,
                costPer1MTokens: calculateCostPer1MTokens(397.72, gpuPricing["6000ada"])
              },
              {
                batchSize: 16,
                requestsPerSecond: 5.81,
                outputTokenThroughput: 744.06,
                costPer1MTokens: calculateCostPer1MTokens(744.06, gpuPricing["6000ada"])
              },
              {
                batchSize: 32,
                requestsPerSecond: 10.16,
                outputTokenThroughput: 1300.66,
                costPer1MTokens: calculateCostPer1MTokens(1300.66, gpuPricing["6000ada"])
              },
              {
                batchSize: 64,
                requestsPerSecond: 15.61,
                outputTokenThroughput: 1998.30,
                costPer1MTokens: calculateCostPer1MTokens(1998.30, gpuPricing["6000ada"])
              },
              {
                batchSize: 128,
                requestsPerSecond: 22.33,
                outputTokenThroughput: 2857.67,
                costPer1MTokens: calculateCostPer1MTokens(2857.67, gpuPricing["6000ada"])
              },
              {
                batchSize: 256,
                requestsPerSecond: 27.56,
                outputTokenThroughput: 3527.79,
                costPer1MTokens: calculateCostPer1MTokens(3527.79, gpuPricing["6000ada"])
              },
              {
                batchSize: 512,
                requestsPerSecond: 27.22,
                outputTokenThroughput: 3484.53,
                costPer1MTokens: calculateCostPer1MTokens(3484.53, gpuPricing["6000ada"])
              },
              {
                batchSize: 1024,
                requestsPerSecond: 26.99,
                outputTokenThroughput: 3454.84,
                costPer1MTokens: calculateCostPer1MTokens(3454.84, gpuPricing["6000ada"])
              }
            ]
            
          }
        },
        "Qwen/Qwen2-0.5B": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 2.92,
                outputTokenThroughput: 373.69,
                costPer1MTokens: calculateCostPer1MTokens(373.69, gpuPricing["6000ada"])
              },
              {
                batchSize: 2,
                requestsPerSecond: 5.43,
                outputTokenThroughput: 695.14,
                costPer1MTokens: calculateCostPer1MTokens(695.14, gpuPricing["6000ada"])
              },
              {
                batchSize: 4,
                requestsPerSecond: 10.39,
                outputTokenThroughput: 1330.11,
                costPer1MTokens: calculateCostPer1MTokens(1330.11, gpuPricing["6000ada"])
              },
              {
                batchSize: 8,
                requestsPerSecond: 20.13,
                outputTokenThroughput: 2576.12,
                costPer1MTokens: calculateCostPer1MTokens(2576.12, gpuPricing["6000ada"])
              },
              {
                batchSize: 16,
                requestsPerSecond: 36.69,
                outputTokenThroughput: 4696.25,
                costPer1MTokens: calculateCostPer1MTokens(4696.25, gpuPricing["6000ada"])
              },
              {
                batchSize: 32,
                requestsPerSecond: 60.21,
                outputTokenThroughput: 7706.60,
                costPer1MTokens: calculateCostPer1MTokens(7706.60, gpuPricing["6000ada"])
              },
              {
                batchSize: 64,
                requestsPerSecond: 89.18,
                outputTokenThroughput: 11414.40,
                costPer1MTokens: calculateCostPer1MTokens(11414.40, gpuPricing["6000ada"])
              },
              {
                batchSize: 128,
                requestsPerSecond: 111.18,
                outputTokenThroughput: 14231.41,
                costPer1MTokens: calculateCostPer1MTokens(14231.41, gpuPricing["6000ada"])
              },
              {
                batchSize: 256,
                requestsPerSecond: 107.93,
                outputTokenThroughput: 13815.67,
                costPer1MTokens: calculateCostPer1MTokens(13815.67, gpuPricing["6000ada"])
              },
              {
                batchSize: 512,
                requestsPerSecond: 110.12,
                outputTokenThroughput: 14095.25,
                costPer1MTokens: calculateCostPer1MTokens(14095.25, gpuPricing["6000ada"])
              },
              {
                batchSize: 1024,
                requestsPerSecond: 95.38,
                outputTokenThroughput: 12208.93,
                costPer1MTokens: calculateCostPer1MTokens(12208.93, gpuPricing["6000ada"])
              }
            ]
          }
        },
        "google/gemma-2-9b-it": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 0.33,
                outputTokenThroughput: 42.60,
                costPer1MTokens: calculateCostPer1MTokens(42.60, gpuPricing["6000ada"])
              },
              {
                batchSize: 2,
                requestsPerSecond: 0.65,
                outputTokenThroughput: 83.36,
                costPer1MTokens: calculateCostPer1MTokens(83.36, gpuPricing["6000ada"])
              },
              {
                batchSize: 4,
                requestsPerSecond: 1.30,
                outputTokenThroughput: 166.18,
                costPer1MTokens: calculateCostPer1MTokens(166.18, gpuPricing["6000ada"])
              },
              {
                batchSize: 8,
                requestsPerSecond: 2.41,
                outputTokenThroughput: 307.99,
                costPer1MTokens: calculateCostPer1MTokens(307.99, gpuPricing["6000ada"])
              },
              {
                batchSize: 16,
                requestsPerSecond: 4.78,
                outputTokenThroughput: 612.20,
                costPer1MTokens: calculateCostPer1MTokens(612.20, gpuPricing["6000ada"])
              },
              {
                batchSize: 32,
                requestsPerSecond: 8.67,
                outputTokenThroughput: 1110.06,
                costPer1MTokens: calculateCostPer1MTokens(1110.06, gpuPricing["6000ada"])
              },
              {
                batchSize: 64,
                requestsPerSecond: 12.11,
                outputTokenThroughput: 1549.84,
                costPer1MTokens: calculateCostPer1MTokens(1549.84, gpuPricing["6000ada"])
              },
              {
                batchSize: 128,
                requestsPerSecond: 20.36,
                outputTokenThroughput: 2605.46,
                costPer1MTokens: calculateCostPer1MTokens(2605.46, gpuPricing["6000ada"])
              },
              {
                batchSize: 256,
                requestsPerSecond: 25.90,
                outputTokenThroughput: 3315.80,
                costPer1MTokens: calculateCostPer1MTokens(3315.80, gpuPricing["6000ada"])
              },
              {
                batchSize: 512,
                requestsPerSecond: 25.66,
                outputTokenThroughput: 3285.11,
                costPer1MTokens: calculateCostPer1MTokens(3285.11, gpuPricing["6000ada"])
              },
              {
                batchSize: 1024,
                requestsPerSecond: 25.63,
                outputTokenThroughput: 3280.15,
                costPer1MTokens: calculateCostPer1MTokens(3280.15, gpuPricing["6000ada"])
              }
            ]
          }
        },
        "microsoft/Phi-3-mini-4k-instruct": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 0.76,
                outputTokenThroughput: 97.13,
                costPer1MTokens: calculateCostPer1MTokens(97.13, gpuPricing["6000ada"])
              },
              {
                batchSize: 2,
                requestsPerSecond: 1.45,
                outputTokenThroughput: 185.27,
                costPer1MTokens: calculateCostPer1MTokens(185.27, gpuPricing["6000ada"])
              },
              {
                batchSize: 4,
                requestsPerSecond: 2.84,
                outputTokenThroughput: 362.92,
                costPer1MTokens: calculateCostPer1MTokens(362.92, gpuPricing["6000ada"])
              },
              {
                batchSize: 8,
                requestsPerSecond: 5.40,
                outputTokenThroughput: 690.60,
                costPer1MTokens: calculateCostPer1MTokens(690.60, gpuPricing["6000ada"])
              },
              {
                batchSize: 16,
                requestsPerSecond: 9.60,
                outputTokenThroughput: 1228.85,
                costPer1MTokens: calculateCostPer1MTokens(1228.85, gpuPricing["6000ada"])
              },
              {
                batchSize: 32,
                requestsPerSecond: 15.72,
                outputTokenThroughput: 2012.12,
                costPer1MTokens: calculateCostPer1MTokens(2012.12, gpuPricing["6000ada"])
              },
              {
                batchSize: 64,
                requestsPerSecond: 22.77,
                outputTokenThroughput: 2914.14,
                costPer1MTokens: calculateCostPer1MTokens(2914.14, gpuPricing["6000ada"])
              },
              {
                batchSize: 128,
                requestsPerSecond: 29.66,
                outputTokenThroughput: 3796.08,
                costPer1MTokens: calculateCostPer1MTokens(3796.08, gpuPricing["6000ada"])
              },
              {
                batchSize: 256,
                requestsPerSecond: 33.25,
                outputTokenThroughput: 4255.60,
                costPer1MTokens: calculateCostPer1MTokens(4255.60, gpuPricing["6000ada"])
              },
              {
                batchSize: 512,
                requestsPerSecond: 33.10,
                outputTokenThroughput: 4237.37,
                costPer1MTokens: calculateCostPer1MTokens(4237.37, gpuPricing["6000ada"])
              },
              {
                batchSize: 1024,
                requestsPerSecond: 33.01,
                outputTokenThroughput: 4225.60,
                costPer1MTokens: calculateCostPer1MTokens(4225.60, gpuPricing["6000ada"])
              }
            ]
            
          }
        }
      }
    },
    l40s: {
      urlName: "l40s",
      name: "L40S",
      gpuImagePath: "/static/images/gpu/l40s-gpu.webp",
      VRAM: "48GB",
      manufacturer: "nvidia",
      benchmarks: {
        "meta-llama/Llama-3.1-8B-Instruct": {
          fitsOnGpu: true,
          "128_128": {
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
          }
        },
        "Qwen/Qwen2-0.5B": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 2.57,
                outputTokenThroughput: 328.80,
                costPer1MTokens: calculateCostPer1MTokens(328.80, gpuPricing.l40s)
              },
              {
                batchSize: 2,
                requestsPerSecond: 5.03,
                outputTokenThroughput: 643.42,
                costPer1MTokens: calculateCostPer1MTokens(643.42, gpuPricing.l40s)
              },
              {
                batchSize: 4,
                requestsPerSecond: 9.21,
                outputTokenThroughput: 1179.07,
                costPer1MTokens: calculateCostPer1MTokens(1179.07, gpuPricing.l40s)
              },
              {
                batchSize: 8,
                requestsPerSecond: 18.23,
                outputTokenThroughput: 2333.38,
                costPer1MTokens: calculateCostPer1MTokens(2333.38, gpuPricing.l40s)
              },
              {
                batchSize: 16,
                requestsPerSecond: 33.57,
                outputTokenThroughput: 4296.76,
                costPer1MTokens: calculateCostPer1MTokens(4296.76, gpuPricing.l40s)
              },
              {
                batchSize: 32,
                requestsPerSecond: 52.63,
                outputTokenThroughput: 6736.20,
                costPer1MTokens: calculateCostPer1MTokens(6736.20, gpuPricing.l40s)
              },
              {
                batchSize: 64,
                requestsPerSecond: 84.41,
                outputTokenThroughput: 10804.57,
                costPer1MTokens: calculateCostPer1MTokens(10804.57, gpuPricing.l40s)
              },
              {
                batchSize: 128,
                requestsPerSecond: 99.18,
                outputTokenThroughput: 12695.26,
                costPer1MTokens: calculateCostPer1MTokens(12695.26, gpuPricing.l40s)
              },
              {
                batchSize: 256,
                requestsPerSecond: 98.39,
                outputTokenThroughput: 12593.33,
                costPer1MTokens: calculateCostPer1MTokens(12593.33, gpuPricing.l40s)
              },
              {
                batchSize: 512,
                requestsPerSecond: 102.71,
                outputTokenThroughput: 13146.59,
                costPer1MTokens: calculateCostPer1MTokens(13146.59, gpuPricing.l40s)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 109.76,
                outputTokenThroughput: 14049.73,
                costPer1MTokens: calculateCostPer1MTokens(14049.73, gpuPricing.l40s)
              }
            ]
          }
        },
        "google/gemma-2-9b-it": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 0.28,
                outputTokenThroughput: 35.83,
                costPer1MTokens: calculateCostPer1MTokens(35.83, gpuPricing.l40s)
              },
              {
                batchSize: 2,
                requestsPerSecond: 0.54,
                outputTokenThroughput: 68.68,
                costPer1MTokens: calculateCostPer1MTokens(68.68, gpuPricing.l40s)
              },
              {
                batchSize: 4,
                requestsPerSecond: 1.08,
                outputTokenThroughput: 137.75,
                costPer1MTokens: calculateCostPer1MTokens(137.75, gpuPricing.l40s)
              },
              {
                batchSize: 8,
                requestsPerSecond: 2.10,
                outputTokenThroughput: 268.73,
                costPer1MTokens: calculateCostPer1MTokens(268.73, gpuPricing.l40s)
              },
              {
                batchSize: 16,
                requestsPerSecond: 4.00,
                outputTokenThroughput: 512.58,
                costPer1MTokens: calculateCostPer1MTokens(512.58, gpuPricing.l40s)
              },
              {
                batchSize: 32,
                requestsPerSecond: 7.30,
                outputTokenThroughput: 934.66,
                costPer1MTokens: calculateCostPer1MTokens(934.66, gpuPricing.l40s)
              },
              {
                batchSize: 64,
                requestsPerSecond: 11.57,
                outputTokenThroughput: 1481.05,
                costPer1MTokens: calculateCostPer1MTokens(1481.05, gpuPricing.l40s)
              },
              {
                batchSize: 128,
                requestsPerSecond: 17.59,
                outputTokenThroughput: 2251.14,
                costPer1MTokens: calculateCostPer1MTokens(2251.14, gpuPricing.l40s)
              },
              {
                batchSize: 256,
                requestsPerSecond: 23.03,
                outputTokenThroughput: 2947.38,
                costPer1MTokens: calculateCostPer1MTokens(2947.38, gpuPricing.l40s)
              },
              {
                batchSize: 512,
                requestsPerSecond: 23.20,
                outputTokenThroughput: 2969.70,
                costPer1MTokens: calculateCostPer1MTokens(2969.70, gpuPricing.l40s)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 23.21,
                outputTokenThroughput: 2971.14,
                costPer1MTokens: calculateCostPer1MTokens(2971.14, gpuPricing.l40s)
              }
            ]
          }
        },
        "microsoft/Phi-3-mini-4k-instruct": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 0.64,
                outputTokenThroughput: 81.49,
                costPer1MTokens: calculateCostPer1MTokens(81.49, gpuPricing.l40s)
              },
              {
                batchSize: 2,
                requestsPerSecond: 1.20,
                outputTokenThroughput: 153.52,
                costPer1MTokens: calculateCostPer1MTokens(153.52, gpuPricing.l40s)
              },
              {
                batchSize: 4,
                requestsPerSecond: 2.35,
                outputTokenThroughput: 300.61,
                costPer1MTokens: calculateCostPer1MTokens(300.61, gpuPricing.l40s)
              },
              {
                batchSize: 8,
                requestsPerSecond: 4.44,
                outputTokenThroughput: 568.40,
                costPer1MTokens: calculateCostPer1MTokens(568.40, gpuPricing.l40s)
              },
              {
                batchSize: 16,
                requestsPerSecond: 7.94,
                outputTokenThroughput: 1016.91,
                costPer1MTokens: calculateCostPer1MTokens(1016.91, gpuPricing.l40s)
              },
              {
                batchSize: 32,
                requestsPerSecond: 12.80,
                outputTokenThroughput: 1638.86,
                costPer1MTokens: calculateCostPer1MTokens(1638.86, gpuPricing.l40s)
              },
              {
                batchSize: 64,
                requestsPerSecond: 18.64,
                outputTokenThroughput: 2386.45,
                costPer1MTokens: calculateCostPer1MTokens(2386.45, gpuPricing.l40s)
              },
              {
                batchSize: 128,
                requestsPerSecond: 24.49,
                outputTokenThroughput: 3134.26,
                costPer1MTokens: calculateCostPer1MTokens(3134.26, gpuPricing.l40s)
              },
              {
                batchSize: 256,
                requestsPerSecond: 27.96,
                outputTokenThroughput: 3579.35,
                costPer1MTokens: calculateCostPer1MTokens(3579.35, gpuPricing.l40s)
              },
              {
                batchSize: 512,
                requestsPerSecond: 27.68,
                outputTokenThroughput: 3542.56,
                costPer1MTokens: calculateCostPer1MTokens(3542.56, gpuPricing.l40s)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 27.55,
                outputTokenThroughput: 3526.64,
                costPer1MTokens: calculateCostPer1MTokens(3526.64, gpuPricing.l40s)
              }
            ]
            
          }
        }
      }
    },
    a6000: {
      urlName: "a6000",
      name: "RTX A6000",
      gpuImagePath: "/static/images/gpu/a6000-gpu.webp",
      VRAM: "48GB",
      manufacturer: "nvidia",
      benchmarks: {
        "meta-llama/Llama-3.1-8B-Instruct": {
          fitsOnGpu: true,
          "128_128": {
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
          }
        },
        "Qwen/Qwen2-0.5B": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 2.29,
                outputTokenThroughput: 292.79,
                costPer1MTokens: calculateCostPer1MTokens(292.79, gpuPricing["a6000"])
              },
              {
                batchSize: 2,
                requestsPerSecond: 4.16,
                outputTokenThroughput: 532.56,
                costPer1MTokens: calculateCostPer1MTokens(532.56, gpuPricing["a6000"])
              },
              {
                batchSize: 4,
                requestsPerSecond: 7.98,
                outputTokenThroughput: 1021.72,
                costPer1MTokens: calculateCostPer1MTokens(1021.72, gpuPricing["a6000"])
              },
              {
                batchSize: 8,
                requestsPerSecond: 14.51,
                outputTokenThroughput: 1857.59,
                costPer1MTokens: calculateCostPer1MTokens(1857.59, gpuPricing["a6000"])
              },
              {
                batchSize: 16,
                requestsPerSecond: 26.94,
                outputTokenThroughput: 3448.93,
                costPer1MTokens: calculateCostPer1MTokens(3448.93, gpuPricing["a6000"])
              },
              {
                batchSize: 32,
                requestsPerSecond: 41.13,
                outputTokenThroughput: 5264.90,
                costPer1MTokens: calculateCostPer1MTokens(5264.90, gpuPricing["a6000"])
              },
              {
                batchSize: 64,
                requestsPerSecond: 58.61,
                outputTokenThroughput: 7501.50,
                costPer1MTokens: calculateCostPer1MTokens(7501.50, gpuPricing["a6000"])
              },
              {
                batchSize: 128,
                requestsPerSecond: 71.97,
                outputTokenThroughput: 9212.79,
                costPer1MTokens: calculateCostPer1MTokens(9212.79, gpuPricing["a6000"])
              },
              {
                batchSize: 256,
                requestsPerSecond: 74.30,
                outputTokenThroughput: 9510.30,
                costPer1MTokens: calculateCostPer1MTokens(9510.30, gpuPricing["a6000"])
              },
              {
                batchSize: 512,
                requestsPerSecond: 74.21,
                outputTokenThroughput: 9499.03,
                costPer1MTokens: calculateCostPer1MTokens(9499.03, gpuPricing["a6000"])
              },
              {
                batchSize: 1024,
                requestsPerSecond: 73.77,
                outputTokenThroughput: 9442.90,
                costPer1MTokens: calculateCostPer1MTokens(9442.90, gpuPricing["a6000"])
              }
            ]
          }
        },
        "google/gemma-2-9b-it": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 0.26,
                outputTokenThroughput: 32.79,
                costPer1MTokens: calculateCostPer1MTokens(32.79, gpuPricing.a6000)
              },
              {
                batchSize: 2,
                requestsPerSecond: 0.50,
                outputTokenThroughput: 64.28,
                costPer1MTokens: calculateCostPer1MTokens(64.28, gpuPricing.a6000)
              },
              {
                batchSize: 4,
                requestsPerSecond: 0.99,
                outputTokenThroughput: 127.33,
                costPer1MTokens: calculateCostPer1MTokens(127.33, gpuPricing.a6000)
              },
              {
                batchSize: 8,
                requestsPerSecond: 1.91,
                outputTokenThroughput: 244.55,
                costPer1MTokens: calculateCostPer1MTokens(244.55, gpuPricing.a6000)
              },
              {
                batchSize: 16,
                requestsPerSecond: 3.58,
                outputTokenThroughput: 458.12,
                costPer1MTokens: calculateCostPer1MTokens(458.12, gpuPricing.a6000)
              },
              {
                batchSize: 32,
                requestsPerSecond: 6.55,
                outputTokenThroughput: 838.97,
                costPer1MTokens: calculateCostPer1MTokens(838.97, gpuPricing.a6000)
              },
              {
                batchSize: 64,
                requestsPerSecond: 10.54,
                outputTokenThroughput: 1348.93,
                costPer1MTokens: calculateCostPer1MTokens(1348.93, gpuPricing.a6000)
              },
              {
                batchSize: 128,
                requestsPerSecond: 15.80,
                outputTokenThroughput: 2022.05,
                costPer1MTokens: calculateCostPer1MTokens(2022.05, gpuPricing.a6000)
              },
              {
                batchSize: 256,
                requestsPerSecond: 18.42,
                outputTokenThroughput: 2357.32,
                costPer1MTokens: calculateCostPer1MTokens(2357.32, gpuPricing.a6000)
              },
              {
                batchSize: 512,
                requestsPerSecond: 18.18,
                outputTokenThroughput: 2327.26,
                costPer1MTokens: calculateCostPer1MTokens(2327.26, gpuPricing.a6000)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 18.10,
                outputTokenThroughput: 2317.21,
                costPer1MTokens: calculateCostPer1MTokens(2317.21, gpuPricing.a6000)
              }
            ]
          }
        },
        "microsoft/Phi-3-mini-4k-instruct": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 0.58,
                outputTokenThroughput: 74.26,
                costPer1MTokens: calculateCostPer1MTokens(74.26, gpuPricing["a6000"])
              },
              {
                batchSize: 2,
                requestsPerSecond: 1.11,
                outputTokenThroughput: 141.75,
                costPer1MTokens: calculateCostPer1MTokens(141.75, gpuPricing["a6000"])
              },
              {
                batchSize: 4,
                requestsPerSecond: 2.08,
                outputTokenThroughput: 266.55,
                costPer1MTokens: calculateCostPer1MTokens(266.55, gpuPricing["a6000"])
              },
              {
                batchSize: 8,
                requestsPerSecond: 4.05,
                outputTokenThroughput: 518.84,
                costPer1MTokens: calculateCostPer1MTokens(518.84, gpuPricing["a6000"])
              },
              {
                batchSize: 16,
                requestsPerSecond: 7.41,
                outputTokenThroughput: 948.93,
                costPer1MTokens: calculateCostPer1MTokens(948.93, gpuPricing["a6000"])
              },
              {
                batchSize: 32,
                requestsPerSecond: 12.74,
                outputTokenThroughput: 1630.26,
                costPer1MTokens: calculateCostPer1MTokens(1630.26, gpuPricing["a6000"])
              },
              {
                batchSize: 64,
                requestsPerSecond: 18.41,
                outputTokenThroughput: 2356.52,
                costPer1MTokens: calculateCostPer1MTokens(2356.52, gpuPricing["a6000"])
              },
              {
                batchSize: 128,
                requestsPerSecond: 23.46,
                outputTokenThroughput: 3003.37,
                costPer1MTokens: calculateCostPer1MTokens(3003.37, gpuPricing["a6000"])
              },
              {
                batchSize: 256,
                requestsPerSecond: 25.60,
                outputTokenThroughput: 3277.12,
                costPer1MTokens: calculateCostPer1MTokens(3277.12, gpuPricing["a6000"])
              },
              {
                batchSize: 512,
                requestsPerSecond: 25.07,
                outputTokenThroughput: 3209.54,
                costPer1MTokens: calculateCostPer1MTokens(3209.54, gpuPricing["a6000"])
              },
              {
                batchSize: 1024,
                requestsPerSecond: 25.12,
                outputTokenThroughput: 3215.21,
                costPer1MTokens: calculateCostPer1MTokens(3215.21, gpuPricing["a6000"])
              }
            ]
          }
        }
      }
    },
    a40: {
      urlName: "a40",
      name: "A40",
      gpuImagePath: "/static/images/gpu/A40-gpu.webp",
      VRAM: "48GB",
      manufacturer: "nvidia",
      benchmarks: {
        "meta-llama/Llama-3.1-8B-Instruct": {
          fitsOnGpu: true,
          "128_128": {
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
        },
        "Qwen/Qwen2-0.5B": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 2.10,
                outputTokenThroughput: 268.53,
                costPer1MTokens: calculateCostPer1MTokens(268.53, gpuPricing["a40"])
              },
              {
                batchSize: 2,
                requestsPerSecond: 3.88,
                outputTokenThroughput: 496.96,
                costPer1MTokens: calculateCostPer1MTokens(496.96, gpuPricing["a40"])
              },
              {
                batchSize: 4,
                requestsPerSecond: 7.70,
                outputTokenThroughput: 985.36,
                costPer1MTokens: calculateCostPer1MTokens(985.36, gpuPricing["a40"])
              },
              {
                batchSize: 8,
                requestsPerSecond: 14.30,
                outputTokenThroughput: 1829.76,
                costPer1MTokens: calculateCostPer1MTokens(1829.76, gpuPricing["a40"])
              },
              {
                batchSize: 16,
                requestsPerSecond: 24.86,
                outputTokenThroughput: 3181.76,
                costPer1MTokens: calculateCostPer1MTokens(3181.76, gpuPricing["a40"])
              },
              {
                batchSize: 32,
                requestsPerSecond: 37.94,
                outputTokenThroughput: 4856.12,
                costPer1MTokens: calculateCostPer1MTokens(4856.12, gpuPricing["a40"])
              },
              {
                batchSize: 64,
                requestsPerSecond: 54.35,
                outputTokenThroughput: 6956.97,
                costPer1MTokens: calculateCostPer1MTokens(6956.97, gpuPricing["a40"])
              },
              {
                batchSize: 128,
                requestsPerSecond: 66.05,
                outputTokenThroughput: 8454.53,
                costPer1MTokens: calculateCostPer1MTokens(8454.53, gpuPricing["a40"])
              },
              {
                batchSize: 256,
                requestsPerSecond: 78.14,
                outputTokenThroughput: 10001.88,
                costPer1MTokens: calculateCostPer1MTokens(10001.88, gpuPricing["a40"])
              },
              {
                batchSize: 512,
                requestsPerSecond: 75.80,
                outputTokenThroughput: 9701.98,
                costPer1MTokens: calculateCostPer1MTokens(9701.98, gpuPricing["a40"])
              },
              {
                batchSize: 1024,
                requestsPerSecond: 74.28,
                outputTokenThroughput: 9507.89,
                costPer1MTokens: calculateCostPer1MTokens(9507.89, gpuPricing["a40"])
              }
            ]
          }
        },
        "google/gemma-2-9b-it": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 0.21,
                outputTokenThroughput: 27.07,
                costPer1MTokens: calculateCostPer1MTokens(27.07, gpuPricing.a40)
              },
              {
                batchSize: 2,
                requestsPerSecond: 0.40,
                outputTokenThroughput: 51.21,
                costPer1MTokens: calculateCostPer1MTokens(51.21, gpuPricing.a40)
              },
              {
                batchSize: 4,
                requestsPerSecond: 0.79,
                outputTokenThroughput: 101.29,
                costPer1MTokens: calculateCostPer1MTokens(101.29, gpuPricing.a40)
              },
              {
                batchSize: 8,
                requestsPerSecond: 1.53,
                outputTokenThroughput: 195.74,
                costPer1MTokens: calculateCostPer1MTokens(195.74, gpuPricing.a40)
              },
              {
                batchSize: 16,
                requestsPerSecond: 2.87,
                outputTokenThroughput: 367.71,
                costPer1MTokens: calculateCostPer1MTokens(367.71, gpuPricing.a40)
              },
              {
                batchSize: 32,
                requestsPerSecond: 5.37,
                outputTokenThroughput: 687.31,
                costPer1MTokens: calculateCostPer1MTokens(687.31, gpuPricing.a40)
              },
              {
                batchSize: 64,
                requestsPerSecond: 8.77,
                outputTokenThroughput: 1122.50,
                costPer1MTokens: calculateCostPer1MTokens(1122.50, gpuPricing.a40)
              },
              {
                batchSize: 128,
                requestsPerSecond: 13.39,
                outputTokenThroughput: 1713.46,
                costPer1MTokens: calculateCostPer1MTokens(1713.46, gpuPricing.a40)
              },
              {
                batchSize: 256,
                requestsPerSecond: 17.01,
                outputTokenThroughput: 2177.80,
                costPer1MTokens: calculateCostPer1MTokens(2177.80, gpuPricing.a40)
              },
              {
                batchSize: 512,
                requestsPerSecond: 17.02,
                outputTokenThroughput: 2178.32,
                costPer1MTokens: calculateCostPer1MTokens(2178.32, gpuPricing.a40)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 17.04,
                outputTokenThroughput: 2181.43,
                costPer1MTokens: calculateCostPer1MTokens(2181.43, gpuPricing.a40)
              }
            ]
          }
        },
        "microsoft/Phi-3-mini-4k-instruct": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 0.47,
                outputTokenThroughput: 59.94,
                costPer1MTokens: calculateCostPer1MTokens(59.94, gpuPricing.a40)
              },
              {
                batchSize: 2,
                requestsPerSecond: 0.91,
                outputTokenThroughput: 116.89,
                costPer1MTokens: calculateCostPer1MTokens(116.89, gpuPricing.a40)
              },
              {
                batchSize: 4,
                requestsPerSecond: 1.76,
                outputTokenThroughput: 224.67,
                costPer1MTokens: calculateCostPer1MTokens(224.67, gpuPricing.a40)
              },
              {
                batchSize: 8,
                requestsPerSecond: 3.27,
                outputTokenThroughput: 418.02,
                costPer1MTokens: calculateCostPer1MTokens(418.02, gpuPricing.a40)
              },
              {
                batchSize: 16,
                requestsPerSecond: 6.01,
                outputTokenThroughput: 769.79,
                costPer1MTokens: calculateCostPer1MTokens(769.79, gpuPricing.a40)
              },
              {
                batchSize: 32,
                requestsPerSecond: 9.87,
                outputTokenThroughput: 1263.54,
                costPer1MTokens: calculateCostPer1MTokens(1263.54, gpuPricing.a40)
              },
              {
                batchSize: 64,
                requestsPerSecond: 14.34,
                outputTokenThroughput: 1835.22,
                costPer1MTokens: calculateCostPer1MTokens(1835.22, gpuPricing.a40)
              },
              {
                batchSize: 128,
                requestsPerSecond: 18.39,
                outputTokenThroughput: 2353.91,
                costPer1MTokens: calculateCostPer1MTokens(2353.91, gpuPricing.a40)
              },
              {
                batchSize: 256,
                requestsPerSecond: 21.25,
                outputTokenThroughput: 2720.39,
                costPer1MTokens: calculateCostPer1MTokens(2720.39, gpuPricing.a40)
              },
              {
                batchSize: 512,
                requestsPerSecond: 21.09,
                outputTokenThroughput: 2699.63,
                costPer1MTokens: calculateCostPer1MTokens(2699.63, gpuPricing.a40)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 21.02,
                outputTokenThroughput: 2690.62,
                costPer1MTokens: calculateCostPer1MTokens(2690.62, gpuPricing.a40)
              }
            ]
          }
        }
      }
    },

    rtx4090: {
      urlName: "4090",
      name: "RTX 4090",
      gpuImagePath: "/static/images/gpu/4090-gpu.webp",
      VRAM: "24GB",
      manufacturer: "nvidia",
      benchmarks: {
        "meta-llama/Llama-3.1-8B-Instruct": {
          fitsOnGpu: false
        },
        "Qwen/Qwen2-0.5B": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 3.37,
                outputTokenThroughput: 431.73,
                costPer1MTokens: calculateCostPer1MTokens(431.73, gpuPricing.rtx4090)
              },
              {
                batchSize: 2,
                requestsPerSecond: 6.27,
                outputTokenThroughput: 803.10,
                costPer1MTokens: calculateCostPer1MTokens(803.10, gpuPricing.rtx4090)
              },
              {
                batchSize: 4,
                requestsPerSecond: 11.96,
                outputTokenThroughput: 1530.92,
                costPer1MTokens: calculateCostPer1MTokens(1530.92, gpuPricing.rtx4090)
              },
              {
                batchSize: 8,
                requestsPerSecond: 22.90,
                outputTokenThroughput: 2931.51,
                costPer1MTokens: calculateCostPer1MTokens(2931.51, gpuPricing.rtx4090)
              },
              {
                batchSize: 16,
                requestsPerSecond: 40.21,
                outputTokenThroughput: 5146.82,
                costPer1MTokens: calculateCostPer1MTokens(5146.82, gpuPricing.rtx4090)
              },
              {
                batchSize: 32,
                requestsPerSecond: 51.69,
                outputTokenThroughput: 6616.60,
                costPer1MTokens: calculateCostPer1MTokens(6616.60, gpuPricing.rtx4090)
              },
              {
                batchSize: 64,
                requestsPerSecond: 78.73,
                outputTokenThroughput: 10077.95,
                costPer1MTokens: calculateCostPer1MTokens(10077.95, gpuPricing.rtx4090)
              },
              {
                batchSize: 128,
                requestsPerSecond: 100.54,
                outputTokenThroughput: 12868.81,
                costPer1MTokens: calculateCostPer1MTokens(12868.81, gpuPricing.rtx4090)
              },
              {
                batchSize: 256,
                requestsPerSecond: 114.29,
                outputTokenThroughput: 14629.50,
                costPer1MTokens: calculateCostPer1MTokens(14629.50, gpuPricing.rtx4090)
              },
              {
                batchSize: 512,
                requestsPerSecond: 111.34,
                outputTokenThroughput: 14251.10,
                costPer1MTokens: calculateCostPer1MTokens(14251.10, gpuPricing.rtx4090)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 110.23,
                outputTokenThroughput: 14109.39,
                costPer1MTokens: calculateCostPer1MTokens(14109.39, gpuPricing.rtx4090)
              }
            ]
          }
        },
        "google/gemma-2-9b-it": {
          fitsOnGpu: false
        },
        "microsoft/Phi-3-mini-4k-instruct": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 0.83,
                outputTokenThroughput: 105.73,
                costPer1MTokens: calculateCostPer1MTokens(105.73, gpuPricing.rtx4090)
              },
              {
                batchSize: 2,
                requestsPerSecond: 1.57,
                outputTokenThroughput: 201.14,
                costPer1MTokens: calculateCostPer1MTokens(201.14, gpuPricing.rtx4090)
              },
              {
                batchSize: 4,
                requestsPerSecond: 3.06,
                outputTokenThroughput: 391.33,
                costPer1MTokens: calculateCostPer1MTokens(391.33, gpuPricing.rtx4090)
              },
              {
                batchSize: 8,
                requestsPerSecond: 5.76,
                outputTokenThroughput: 737.44,
                costPer1MTokens: calculateCostPer1MTokens(737.44, gpuPricing.rtx4090)
              },
              {
                batchSize: 16,
                requestsPerSecond: 10.30,
                outputTokenThroughput: 1317.93,
                costPer1MTokens: calculateCostPer1MTokens(1317.93, gpuPricing.rtx4090)
              },
              {
                batchSize: 32,
                requestsPerSecond: 16.72,
                outputTokenThroughput: 2140.29,
                costPer1MTokens: calculateCostPer1MTokens(2140.29, gpuPricing.rtx4090)
              },
              {
                batchSize: 64,
                requestsPerSecond: 24.27,
                outputTokenThroughput: 3106.14,
                costPer1MTokens: calculateCostPer1MTokens(3106.14, gpuPricing.rtx4090)
              },
              {
                batchSize: 128,
                requestsPerSecond: 30.98,
                outputTokenThroughput: 3964.95,
                costPer1MTokens: calculateCostPer1MTokens(3964.95, gpuPricing.rtx4090)
              },
              {
                batchSize: 256,
                requestsPerSecond: 26.83,
                outputTokenThroughput: 3434.41,
                costPer1MTokens: calculateCostPer1MTokens(3434.41, gpuPricing.rtx4090)
              },
              {
                batchSize: 512,
                requestsPerSecond: 27.94,
                outputTokenThroughput: 3576.10,
                costPer1MTokens: calculateCostPer1MTokens(3576.10, gpuPricing.rtx4090)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 27.29,
                outputTokenThroughput: 3492.93,
                costPer1MTokens: calculateCostPer1MTokens(3492.93, gpuPricing.rtx4090)
              }
            ]
          }
        }
      }
    },
    rtx3090: {
      urlName: "3090",
      name: "RTX 3090",
      gpuImagePath: "/static/images/gpu/3090-gpu.webp",
      VRAM: "24GB",
      manufacturer: "nvidia",
      benchmarks: {
        "meta-llama/Llama-3.1-8B-Instruct": {
          fitsOnGpu: false
        },
        "Qwen/Qwen2-0.5B": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 2.59,
                outputTokenThroughput: 331.41,
                costPer1MTokens: calculateCostPer1MTokens(331.41, gpuPricing.rtx3090)
              },
              {
                batchSize: 2,
                requestsPerSecond: 4.59,
                outputTokenThroughput: 588.13,
                costPer1MTokens: calculateCostPer1MTokens(588.13, gpuPricing.rtx3090)
              },
              {
                batchSize: 4,
                requestsPerSecond: 8.91,
                outputTokenThroughput: 1140.72,
                costPer1MTokens: calculateCostPer1MTokens(1140.72, gpuPricing.rtx3090)
              },
              {
                batchSize: 8,
                requestsPerSecond: 17.15,
                outputTokenThroughput: 2195.53,
                costPer1MTokens: calculateCostPer1MTokens(2195.53, gpuPricing.rtx3090)
              },
              {
                batchSize: 16,
                requestsPerSecond: 30.34,
                outputTokenThroughput: 3884.01,
                costPer1MTokens: calculateCostPer1MTokens(3884.01, gpuPricing.rtx3090)
              },
              {
                batchSize: 32,
                requestsPerSecond: 37.10,
                outputTokenThroughput: 4749.16,
                costPer1MTokens: calculateCostPer1MTokens(4749.16, gpuPricing.rtx3090)
              },
              {
                batchSize: 64,
                requestsPerSecond: 59.80,
                outputTokenThroughput: 7654.70,
                costPer1MTokens: calculateCostPer1MTokens(7654.70, gpuPricing.rtx3090)
              },
              {
                batchSize: 128,
                requestsPerSecond: 79.08,
                outputTokenThroughput: 10122.72,
                costPer1MTokens: calculateCostPer1MTokens(10122.72, gpuPricing.rtx3090)
              },
              {
                batchSize: 256,
                requestsPerSecond: 87.80,
                outputTokenThroughput: 11237.84,
                costPer1MTokens: calculateCostPer1MTokens(11237.84, gpuPricing.rtx3090)
              },
              {
                batchSize: 512,
                requestsPerSecond: 85.89,
                outputTokenThroughput: 10993.59,
                costPer1MTokens: calculateCostPer1MTokens(10993.59, gpuPricing.rtx3090)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 87.44,
                outputTokenThroughput: 11192.50,
                costPer1MTokens: calculateCostPer1MTokens(11192.50, gpuPricing.rtx3090)
              }
            ]
          }
        },
        "google/gemma-2-9b-it": {
          fitsOnGpu: false
        },
        "microsoft/Phi-3-mini-4k-instruct": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 0.65,
                outputTokenThroughput: 82.78,
                costPer1MTokens: calculateCostPer1MTokens(82.78, gpuPricing.rtx3090)
              },
              {
                batchSize: 2,
                requestsPerSecond: 1.25,
                outputTokenThroughput: 159.50,
                costPer1MTokens: calculateCostPer1MTokens(159.50, gpuPricing.rtx3090)
              },
              {
                batchSize: 4,
                requestsPerSecond: 2.39,
                outputTokenThroughput: 306.08,
                costPer1MTokens: calculateCostPer1MTokens(306.08, gpuPricing.rtx3090)
              },
              {
                batchSize: 8,
                requestsPerSecond: 4.49,
                outputTokenThroughput: 575.05,
                costPer1MTokens: calculateCostPer1MTokens(575.05, gpuPricing.rtx3090)
              },
              {
                batchSize: 16,
                requestsPerSecond: 7.88,
                outputTokenThroughput: 1008.75,
                costPer1MTokens: calculateCostPer1MTokens(1008.75, gpuPricing.rtx3090)
              },
              {
                batchSize: 32,
                requestsPerSecond: 12.22,
                outputTokenThroughput: 1563.96,
                costPer1MTokens: calculateCostPer1MTokens(1563.96, gpuPricing.rtx3090)
              },
              {
                batchSize: 64,
                requestsPerSecond: 17.01,
                outputTokenThroughput: 2176.99,
                costPer1MTokens: calculateCostPer1MTokens(2176.99, gpuPricing.rtx3090)
              },
              {
                batchSize: 128,
                requestsPerSecond: 20.53,
                outputTokenThroughput: 2628.01,
                costPer1MTokens: calculateCostPer1MTokens(2628.01, gpuPricing.rtx3090)
              },
              {
                batchSize: 256,
                requestsPerSecond: 16.28,
                outputTokenThroughput: 2084.14,
                costPer1MTokens: calculateCostPer1MTokens(2084.14, gpuPricing.rtx3090)
              },
              {
                batchSize: 512,
                requestsPerSecond: 16.50,
                outputTokenThroughput: 2111.95,
                costPer1MTokens: calculateCostPer1MTokens(2111.95, gpuPricing.rtx3090)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 16.03,
                outputTokenThroughput: 2051.94,
                costPer1MTokens: calculateCostPer1MTokens(2051.94, gpuPricing.rtx3090)
              }
            ]
          }
        }
      }
    },
    a5000: {
      urlName: "a5000",
      name: "RTX A5000",
      gpuImagePath: "/static/images/gpu/a5000.webp",
      VRAM: "24GB",
      manufacturer: "nvidia",
      benchmarks: {
        "meta-llama/Llama-3.1-8B-Instruct": {
          fitsOnGpu: false
        },
        "Qwen/Qwen2-0.5B": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 2.32,
                outputTokenThroughput: 297.13,
                costPer1MTokens: calculateCostPer1MTokens(297.13, gpuPricing.a5000)
              },
              {
                batchSize: 2,
                requestsPerSecond: 4.19,
                outputTokenThroughput: 536.50,
                costPer1MTokens: calculateCostPer1MTokens(536.50, gpuPricing.a5000)
              },
              {
                batchSize: 4,
                requestsPerSecond: 8.38,
                outputTokenThroughput: 1072.80,
                costPer1MTokens: calculateCostPer1MTokens(1072.80, gpuPricing.a5000)
              },
              {
                batchSize: 8,
                requestsPerSecond: 15.96,
                outputTokenThroughput: 2042.74,
                costPer1MTokens: calculateCostPer1MTokens(2042.74, gpuPricing.a5000)
              },
              {
                batchSize: 16,
                requestsPerSecond: 28.51,
                outputTokenThroughput: 3649.18,
                costPer1MTokens: calculateCostPer1MTokens(3649.18, gpuPricing.a5000)
              },
              {
                batchSize: 32,
                requestsPerSecond: 37.62,
                outputTokenThroughput: 4815.94,
                costPer1MTokens: calculateCostPer1MTokens(4815.94, gpuPricing.a5000)
              },
              {
                batchSize: 64,
                requestsPerSecond: 57.78,
                outputTokenThroughput: 7395.90,
                costPer1MTokens: calculateCostPer1MTokens(7395.90, gpuPricing.a5000)
              },
              {
                batchSize: 128,
                requestsPerSecond: 72.42,
                outputTokenThroughput: 9269.30,
                costPer1MTokens: calculateCostPer1MTokens(9269.30, gpuPricing.a5000)
              },
              {
                batchSize: 256,
                requestsPerSecond: 85.46,
                outputTokenThroughput: 10938.41,
                costPer1MTokens: calculateCostPer1MTokens(10938.41, gpuPricing.a5000)
              },
              {
                batchSize: 512,
                requestsPerSecond: 85.62,
                outputTokenThroughput: 10959.65,
                costPer1MTokens: calculateCostPer1MTokens(10959.65, gpuPricing.a5000)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 87.93,
                outputTokenThroughput: 11254.79,
                costPer1MTokens: calculateCostPer1MTokens(11254.79, gpuPricing.a5000)
              }
            ]
          }
        },
        "google/gemma-2-9b-it": {
          fitsOnGpu: false
        },
        "microsoft/Phi-3-mini-4k-instruct": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 0.56,
                outputTokenThroughput: 71.21,
                costPer1MTokens: calculateCostPer1MTokens(71.21, gpuPricing["a5000"])
              },
              {
                batchSize: 2,
                requestsPerSecond: 1.12,
                outputTokenThroughput: 143.86,
                costPer1MTokens: calculateCostPer1MTokens(143.86, gpuPricing["a5000"])
              },
              {
                batchSize: 4,
                requestsPerSecond: 2.18,
                outputTokenThroughput: 279.11,
                costPer1MTokens: calculateCostPer1MTokens(279.11, gpuPricing["a5000"])
              },
              {
                batchSize: 8,
                requestsPerSecond: 4.10,
                outputTokenThroughput: 524.42,
                costPer1MTokens: calculateCostPer1MTokens(524.42, gpuPricing["a5000"])
              },
              {
                batchSize: 16,
                requestsPerSecond: 7.00,
                outputTokenThroughput: 895.56,
                costPer1MTokens: calculateCostPer1MTokens(895.56, gpuPricing["a5000"])
              },
              {
                batchSize: 32,
                requestsPerSecond: 10.94,
                outputTokenThroughput: 1400.67,
                costPer1MTokens: calculateCostPer1MTokens(1400.67, gpuPricing["a5000"])
              },
              {
                batchSize: 64,
                requestsPerSecond: 16.24,
                outputTokenThroughput: 2078.28,
                costPer1MTokens: calculateCostPer1MTokens(2078.28, gpuPricing["a5000"])
              },
              {
                batchSize: 128,
                requestsPerSecond: 20.56,
                outputTokenThroughput: 2631.65,
                costPer1MTokens: calculateCostPer1MTokens(2631.65, gpuPricing["a5000"])
              },
              {
                batchSize: 256,
                requestsPerSecond: 16.52,
                outputTokenThroughput: 2114.87,
                costPer1MTokens: calculateCostPer1MTokens(2114.87, gpuPricing["a5000"])
              },
              {
                batchSize: 512,
                requestsPerSecond: 16.93,
                outputTokenThroughput: 2167.52,
                costPer1MTokens: calculateCostPer1MTokens(2167.52, gpuPricing["a5000"])
              },
              {
                batchSize: 1024,
                requestsPerSecond: 16.26,
                outputTokenThroughput: 2080.67,
                costPer1MTokens: calculateCostPer1MTokens(2080.67, gpuPricing["a5000"])
              }
            ]
            
          }
        }
      }
    },
    l4: {
      urlName: "l4",
      name: "L4",
      gpuImagePath: "/static/images/gpu/l4-gpu.webp",
      VRAM: "24GB",
      manufacturer: "nvidia",
      benchmarks: {
        "meta-llama/Llama-3.1-8B-Instruct": {
          fitsOnGpu: false
        },
        "Qwen/Qwen2-0.5B": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 1.36,
                outputTokenThroughput: 173.59,
                costPer1MTokens: calculateCostPer1MTokens(173.59, gpuPricing["l4"])
              },
              {
                batchSize: 2,
                requestsPerSecond: 2.67,
                outputTokenThroughput: 341.41,
                costPer1MTokens: calculateCostPer1MTokens(341.41, gpuPricing["l4"])
              },
              {
                batchSize: 4,
                requestsPerSecond: 5.20,
                outputTokenThroughput: 665.13,
                costPer1MTokens: calculateCostPer1MTokens(665.13, gpuPricing["l4"])
              },
              {
                batchSize: 8,
                requestsPerSecond: 9.89,
                outputTokenThroughput: 1265.61,
                costPer1MTokens: calculateCostPer1MTokens(1265.61, gpuPricing["l4"])
              },
              {
                batchSize: 16,
                requestsPerSecond: 17.80,
                outputTokenThroughput: 2277.81,
                costPer1MTokens: calculateCostPer1MTokens(2277.81, gpuPricing["l4"])
              },
              {
                batchSize: 32,
                requestsPerSecond: 28.71,
                outputTokenThroughput: 3674.68,
                costPer1MTokens: calculateCostPer1MTokens(3674.68, gpuPricing["l4"])
              },
              {
                batchSize: 64,
                requestsPerSecond: 39.98,
                outputTokenThroughput: 5117.89,
                costPer1MTokens: calculateCostPer1MTokens(5117.89, gpuPricing["l4"])
              },
              {
                batchSize: 128,
                requestsPerSecond: 45.12,
                outputTokenThroughput: 5775.11,
                costPer1MTokens: calculateCostPer1MTokens(5775.11, gpuPricing["l4"])
              },
              {
                batchSize: 256,
                requestsPerSecond: 51.81,
                outputTokenThroughput: 6631.73,
                costPer1MTokens: calculateCostPer1MTokens(6631.73, gpuPricing["l4"])
              },
              {
                batchSize: 512,
                requestsPerSecond: 51.58,
                outputTokenThroughput: 6602.19,
                costPer1MTokens: calculateCostPer1MTokens(6602.19, gpuPricing["l4"])
              },
              {
                batchSize: 1024,
                requestsPerSecond: 51.48,
                outputTokenThroughput: 6589.34,
                costPer1MTokens: calculateCostPer1MTokens(6589.34, gpuPricing["l4"])
              }
            ]
          }
        },
        "google/gemma-2-9b-it": {
          fitsOnGpu: false
        },
        "microsoft/Phi-3-mini-4k-instruct": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 0.24,
                outputTokenThroughput: 31.02,
                costPer1MTokens: calculateCostPer1MTokens(31.02, gpuPricing.l4)
              },
              {
                batchSize: 2,
                requestsPerSecond: 0.48,
                outputTokenThroughput: 61.01,
                costPer1MTokens: calculateCostPer1MTokens(61.01, gpuPricing.l4)
              },
              {
                batchSize: 4,
                requestsPerSecond: 0.93,
                outputTokenThroughput: 118.78,
                costPer1MTokens: calculateCostPer1MTokens(118.78, gpuPricing.l4)
              },
              {
                batchSize: 8,
                requestsPerSecond: 1.75,
                outputTokenThroughput: 224.02,
                costPer1MTokens: calculateCostPer1MTokens(224.02, gpuPricing.l4)
              },
              {
                batchSize: 16,
                requestsPerSecond: 3.12,
                outputTokenThroughput: 399.80,
                costPer1MTokens: calculateCostPer1MTokens(399.80, gpuPricing.l4)
              },
              {
                batchSize: 32,
                requestsPerSecond: 5.01,
                outputTokenThroughput: 641.68,
                costPer1MTokens: calculateCostPer1MTokens(641.68, gpuPricing.l4)
              },
              {
                batchSize: 64,
                requestsPerSecond: 7.40,
                outputTokenThroughput: 947.50,
                costPer1MTokens: calculateCostPer1MTokens(947.50, gpuPricing.l4)
              },
              {
                batchSize: 128,
                requestsPerSecond: 9.58,
                outputTokenThroughput: 1226.60,
                costPer1MTokens: calculateCostPer1MTokens(1226.60, gpuPricing.l4)
              },
              {
                batchSize: 256,
                requestsPerSecond: 8.45,
                outputTokenThroughput: 1082.03,
                costPer1MTokens: calculateCostPer1MTokens(1082.03, gpuPricing.l4)
              },
              {
                batchSize: 512,
                requestsPerSecond: 8.48,
                outputTokenThroughput: 1084.84,
                costPer1MTokens: calculateCostPer1MTokens(1084.84, gpuPricing.l4)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 8.49,
                outputTokenThroughput: 1087.31,
                costPer1MTokens: calculateCostPer1MTokens(1087.31, gpuPricing.l4)
              }
            ]
            
          }
        }
      }
    },






    "2000ada": {
      urlName: "2000ada",
      name: "RTX 2000 Ada",
      gpuImagePath: "/static/images/gpu/2000-ada.webp",
      VRAM: "16GB",
      manufacturer: "nvidia",
      benchmarks: {
        "meta-llama/Llama-3.1-8B-Instruct": {
          fitsOnGpu: false
        },
        "Qwen/Qwen2-0.5B": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 1.23,
                outputTokenThroughput: 157.95,
                costPer1MTokens: calculateCostPer1MTokens(157.95, gpuPricing["2000ada"])
              },
              {
                batchSize: 2,
                requestsPerSecond: 2.46,
                outputTokenThroughput: 315.40,
                costPer1MTokens: calculateCostPer1MTokens(315.40, gpuPricing["2000ada"])
              },
              {
                batchSize: 4,
                requestsPerSecond: 4.80,
                outputTokenThroughput: 614.52,
                costPer1MTokens: calculateCostPer1MTokens(614.52, gpuPricing["2000ada"])
              },
              {
                batchSize: 8,
                requestsPerSecond: 9.08,
                outputTokenThroughput: 1162.64,
                costPer1MTokens: calculateCostPer1MTokens(1162.64, gpuPricing["2000ada"])
              },
              {
                batchSize: 16,
                requestsPerSecond: 16.36,
                outputTokenThroughput: 2093.62,
                costPer1MTokens: calculateCostPer1MTokens(2093.62, gpuPricing["2000ada"])
              },
              {
                batchSize: 32,
                requestsPerSecond: 25.84,
                outputTokenThroughput: 3308.11,
                costPer1MTokens: calculateCostPer1MTokens(3308.11, gpuPricing["2000ada"])
              },
              {
                batchSize: 64,
                requestsPerSecond: 36.89,
                outputTokenThroughput: 4722.52,
                costPer1MTokens: calculateCostPer1MTokens(4722.52, gpuPricing["2000ada"])
              },
              {
                batchSize: 128,
                requestsPerSecond: 46.36,
                outputTokenThroughput: 5933.54,
                costPer1MTokens: calculateCostPer1MTokens(5933.54, gpuPricing["2000ada"])
              },
              {
                batchSize: 256,
                requestsPerSecond: 51.05,
                outputTokenThroughput: 6534.92,
                costPer1MTokens: calculateCostPer1MTokens(6534.92, gpuPricing["2000ada"])
              },
              {
                batchSize: 512,
                requestsPerSecond: 50.80,
                outputTokenThroughput: 6502.21,
                costPer1MTokens: calculateCostPer1MTokens(6502.21, gpuPricing["2000ada"])
              },
              {
                batchSize: 1024,
                requestsPerSecond: 50.61,
                outputTokenThroughput: 6478.68,
                costPer1MTokens: calculateCostPer1MTokens(6478.68, gpuPricing["2000ada"])
              }
            ]
          }
        },
        "google/gemma-2-9b-it": {
          fitsOnGpu: false
        },
        "microsoft/Phi-3-mini-4k-instruct": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 0.21,
                outputTokenThroughput: 26.62,
                costPer1MTokens: calculateCostPer1MTokens(26.62, gpuPricing["2000ada"])
              },
              {
                batchSize: 2,
                requestsPerSecond: 0.41,
                outputTokenThroughput: 52.15,
                costPer1MTokens: calculateCostPer1MTokens(52.15, gpuPricing["2000ada"])
              },
              {
                batchSize: 4,
                requestsPerSecond: 0.79,
                outputTokenThroughput: 100.77,
                costPer1MTokens: calculateCostPer1MTokens(100.77, gpuPricing["2000ada"])
              },
              {
                batchSize: 8,
                requestsPerSecond: 1.46,
                outputTokenThroughput: 187.31,
                costPer1MTokens: calculateCostPer1MTokens(187.31, gpuPricing["2000ada"])
              },
              {
                batchSize: 16,
                requestsPerSecond: 2.60,
                outputTokenThroughput: 332.72,
                costPer1MTokens: calculateCostPer1MTokens(332.72, gpuPricing["2000ada"])
              },
              {
                batchSize: 32,
                requestsPerSecond: 4.19,
                outputTokenThroughput: 535.75,
                costPer1MTokens: calculateCostPer1MTokens(535.75, gpuPricing["2000ada"])
              },
              {
                batchSize: 64,
                requestsPerSecond: 6.07,
                outputTokenThroughput: 776.76,
                costPer1MTokens: calculateCostPer1MTokens(776.76, gpuPricing["2000ada"])
              },
              {
                batchSize: 128,
                requestsPerSecond: 5.45,
                outputTokenThroughput: 697.19,
                costPer1MTokens: calculateCostPer1MTokens(697.19, gpuPricing["2000ada"])
              },
              {
                batchSize: 256,
                requestsPerSecond: 6.00,
                outputTokenThroughput: 767.79,
                costPer1MTokens: calculateCostPer1MTokens(767.79, gpuPricing["2000ada"])
              },
              {
                batchSize: 512,
                requestsPerSecond: 5.82,
                outputTokenThroughput: 745.37,
                costPer1MTokens: calculateCostPer1MTokens(745.37, gpuPricing["2000ada"])
              },
              {
                batchSize: 1024,
                requestsPerSecond: 5.70,
                outputTokenThroughput: 730.00,
                costPer1MTokens: calculateCostPer1MTokens(730.00, gpuPricing["2000ada"])
              }
            ]
            
          }
        }
      }
    },
    a4000: {
      urlName: "a4000",
      name: "RTX A4000",
      gpuImagePath: "/static/images/gpu/a4000-gpu.webp",
      VRAM: "16GB",
      manufacturer: "nvidia",
      benchmarks: {
        "meta-llama/Llama-3.1-8B-Instruct": {
          fitsOnGpu: false
        },
        "Qwen/Qwen2-0.5B": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 1.49,
                outputTokenThroughput: 191.01,
                costPer1MTokens: calculateCostPer1MTokens(191.01, gpuPricing.a4000)
              },
              {
                batchSize: 2,
                requestsPerSecond: 2.90,
                outputTokenThroughput: 371.14,
                costPer1MTokens: calculateCostPer1MTokens(371.14, gpuPricing.a4000)
              },
              {
                batchSize: 4,
                requestsPerSecond: 5.52,
                outputTokenThroughput: 706.37,
                costPer1MTokens: calculateCostPer1MTokens(706.37, gpuPricing.a4000)
              },
              {
                batchSize: 8,
                requestsPerSecond: 10.31,
                outputTokenThroughput: 1319.80,
                costPer1MTokens: calculateCostPer1MTokens(1319.80, gpuPricing.a4000)
              },
              {
                batchSize: 16,
                requestsPerSecond: 17.83,
                outputTokenThroughput: 2282.55,
                costPer1MTokens: calculateCostPer1MTokens(2282.55, gpuPricing.a4000)
              },
              {
                batchSize: 32,
                requestsPerSecond: 27.20,
                outputTokenThroughput: 3481.77,
                costPer1MTokens: calculateCostPer1MTokens(3481.77, gpuPricing.a4000)
              },
              {
                batchSize: 64,
                requestsPerSecond: 35.79,
                outputTokenThroughput: 4580.78,
                costPer1MTokens: calculateCostPer1MTokens(4580.78, gpuPricing.a4000)
              },
              {
                batchSize: 128,
                requestsPerSecond: 40.68,
                outputTokenThroughput: 5206.77,
                costPer1MTokens: calculateCostPer1MTokens(5206.77, gpuPricing.a4000)
              },
              {
                batchSize: 256,
                requestsPerSecond: 44.03,
                outputTokenThroughput: 5635.68,
                costPer1MTokens: calculateCostPer1MTokens(5635.68, gpuPricing.a4000)
              },
              {
                batchSize: 512,
                requestsPerSecond: 43.96,
                outputTokenThroughput: 5627.49,
                costPer1MTokens: calculateCostPer1MTokens(5627.49, gpuPricing.a4000)
              },
              {
                batchSize: 1024,
                requestsPerSecond: 42.75,
                outputTokenThroughput: 5471.67,
                costPer1MTokens: calculateCostPer1MTokens(5471.67, gpuPricing.a4000)
              }
            ]
          }
        },
        "google/gemma-2-9b-it": {
          fitsOnGpu: false
        },
        "microsoft/Phi-3-mini-4k-instruct": {
          fitsOnGpu: true,
          "128_128": {
            performanceData: [
              {
                batchSize: 1,
                requestsPerSecond: 0.35,
                outputTokenThroughput: 45.32,
                costPer1MTokens: calculateCostPer1MTokens(45.32, gpuPricing["a4000"])
              },
              {
                batchSize: 2,
                requestsPerSecond: 0.70,
                outputTokenThroughput: 89.71,
                costPer1MTokens: calculateCostPer1MTokens(89.71, gpuPricing["a4000"])
              },
              {
                batchSize: 4,
                requestsPerSecond: 1.35,
                outputTokenThroughput: 172.87,
                costPer1MTokens: calculateCostPer1MTokens(172.87, gpuPricing["a4000"])
              },
              {
                batchSize: 8,
                requestsPerSecond: 2.52,
                outputTokenThroughput: 322.12,
                costPer1MTokens: calculateCostPer1MTokens(322.12, gpuPricing["a4000"])
              },
              {
                batchSize: 16,
                requestsPerSecond: 4.41,
                outputTokenThroughput: 563.84,
                costPer1MTokens: calculateCostPer1MTokens(563.84, gpuPricing["a4000"])
              },
              {
                batchSize: 32,
                requestsPerSecond: 7.09,
                outputTokenThroughput: 907.29,
                costPer1MTokens: calculateCostPer1MTokens(907.29, gpuPricing["a4000"])
              },
              {
                batchSize: 64,
                requestsPerSecond: 10.02,
                outputTokenThroughput: 1281.95,
                costPer1MTokens: calculateCostPer1MTokens(1281.95, gpuPricing["a4000"])
              },
              {
                batchSize: 128,
                requestsPerSecond: 9.07,
                outputTokenThroughput: 1161.02,
                costPer1MTokens: calculateCostPer1MTokens(1161.02, gpuPricing["a4000"])
              },
              {
                batchSize: 256,
                requestsPerSecond: 9.88,
                outputTokenThroughput: 1265.08,
                costPer1MTokens: calculateCostPer1MTokens(1265.08, gpuPricing["a4000"])
              },
              {
                batchSize: 512,
                requestsPerSecond: 9.61,
                outputTokenThroughput: 1229.54,
                costPer1MTokens: calculateCostPer1MTokens(1229.54, gpuPricing["a4000"])
              },
              {
                batchSize: 1024,
                requestsPerSecond: 9.44,
                outputTokenThroughput: 1208.81,
                costPer1MTokens: calculateCostPer1MTokens(1208.81, gpuPricing["a4000"])
              }
            ]
            
          }
        }
      }
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
