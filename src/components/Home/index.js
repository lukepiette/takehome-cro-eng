import { Container } from "@mui/material"
import Develop from "./Develop"
import EndSection from "./EndSection"
import Hero from "./Hero"
import Production from "./Production"
import RunPodEcosystem from "./RunPodEcosystem"
import Summary from "./Summary"

export default function Overview({ data }) {
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
      <Hero data={data} />
      <Summary />
      <Develop data={data} />
      <Production data={data} />
      <RunPodEcosystem />
      <EndSection />
    </Container>
  )
}
