import { Stack } from "@mui/material";
import { Develop } from "./Develop";
import EndSection from "./EndSection";
import Hero from "./Hero";
import Production from "./Production";
import RunPodEcosystem from "./RunPodEcosystem";
import Summary from "./Summary";
import { Features } from "./Features";

export default function Overview({ data }) {
  return (
    <Stack
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        marginLeft: "auto",
        marginRight: "auto",
        zIndex: 0,
      }}
    >
      <Hero data={data} />
      <Develop />
      <Features />
    </Stack>
  );
}
