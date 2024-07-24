import { Container } from "@mui/material"
import FastestCloud from "./FastestCloud"
import ReservedPricing from "./ReservedPricing"
import DeveloperTeams from "./DeveloperTeams"
import Hero from "./Hero"
import PreferredPlatform from "../PreferredPlatform"
import TrustedBy from "../TrustedBy"
import GpuInfo from "./GpuInfo"

// import { GET_GPU_TYPES } from "@components/InstancePricing/query"
// import apolloClient from "@utils/apolloClient"


export default function Overview({ data }) {
  // Extract prices from data if available
  const securePrice = data?.gpu["AMD Instinct MI300X OAM"]?.securePrice?.toFixed(2);

  // Update GpuInfo with the formatted prices if they exist
  if (securePrice) {
    GpuInfo.info.price = `$${securePrice}/hr`;
  }

  return (
    <Container
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 1050,
      }}
    >
      <Hero data={GpuInfo}/>
      <TrustedBy />

      <FastestCloud data={GpuInfo}/>
      <DeveloperTeams data={GpuInfo}/>
      <PreferredPlatform />
      <ReservedPricing data={GpuInfo}/>
      
    </Container>
  )
}
