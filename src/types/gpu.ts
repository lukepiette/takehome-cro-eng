export interface Gpu {
  name: string;
  id: string;
  displayName: string;
  manufacturer?: "nvidia" | "amd";
  data: GpuData;
}

export interface GpuData {
  communityPrice?: number;
  securePrice?: number;
  secureCloud?: boolean;
  communityCloud?: boolean;
  maxGpuCount?: number;
  memoryInGb?: number;
  lowestPrice?: {
    minMemory?: number;
    minVcpu?: number;
    stockStatus?: string;
  };
}
