import { Container } from "@mui/material"
import AMDGpuOptions from "./AMDGpuOptions"
import Hero from "./Hero"
import ScaleAMDGPUs from "./ScaleAMDGpus"

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
      <Hero />
      <AMDGpuOptions />
      <ScaleAMDGPUs />
    </Container>
  )
}
