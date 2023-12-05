import { gql } from "@apollo/client"

export const GET_GPU_INFO = gql`
  query GpuTypes($lowestPriceInput: GpuLowestPriceInput, $gpuTypesInput: GpuTypeFilter) {
    gpuTypes(input: $gpuTypesInput) {
      lowestPrice(input: $lowestPriceInput) {
        minimumBidPrice
        uninterruptablePrice
        minVcpu
        minMemory
        stockStatus
      }
      communityCloud
      communityPrice
      displayName
      id
      maxGpuCount
      memoryInGb
      secureCloud
      securePrice
    }
  }
`

export const GET_GPU_TYPE_INFO = gql`
  query GpuTypes($lowestPriceInput: GpuLowestPriceInput) {
    gpuTypes {
      lowestPrice(input: $lowestPriceInput) {
        minimumBidPrice
        minMemory
        minVcpu
        stockStatus
        uninterruptablePrice
      }
      communityCloud
      communityPrice
      displayName
      id
      maxGpuCount
      memoryInGb
      oneMonthPrice
      secureCloud
      securePrice
      communitySpotPrice
      secureSpotPrice
      threeMonthPrice
      sixMonthPrice
    }
  }
`

export const GET_GPU_TYPES = gql`
  query GpuTypes {
    gpuTypes {
      communityCloud
      communityPrice
      displayName
      id
      maxGpuCount
      memoryInGb
      secureCloud
      securePrice
    }
  }
`
