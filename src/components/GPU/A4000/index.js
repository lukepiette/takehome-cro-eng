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
  const securePrice = data?.gpu["NVIDIA RTX A4000"]?.securePrice?.toFixed(2);
  const communityPrice = data?.gpu["NVIDIA RTX A4000"]?.communityPrice?.toFixed(2);

  // Update GpuInfo with the formatted prices if they exist
  if (securePrice) {
    GpuInfo.secure.price = `$${securePrice}/hr`;
  }
  if (communityPrice) {
    GpuInfo.community.price = `$${communityPrice}/hr`;
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
