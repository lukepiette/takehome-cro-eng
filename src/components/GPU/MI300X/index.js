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


export default function Overview() {
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