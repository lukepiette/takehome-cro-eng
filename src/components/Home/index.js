import { Stack } from "@mui/material";
import { Develop } from "./Develop";
import { Hero } from "./Hero";
import { Features } from "./Features";
import { Pricing } from "./Pricing";
import { Scale } from "./Scale";
import Community from "./Community";
import Everything from "./Everything";
import Launch from "./Launch";

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
        overflow: "hidden",
      }}
    >
      <Hero data={data} />
      <Develop />
      <Features />
      <Pricing data={data} />
      <Scale />
      <Community />
      <Everything data={data} />
      <Launch />
    </Stack>
  );
}
