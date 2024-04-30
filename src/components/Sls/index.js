import { Stack } from "@mui/material";
import Analytics from "./Analytics";
import Autoscale from "./Autoscale";
import Community from "./Community";
import Counter from "./Counter";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Startup from "./Startup";
import Workers from "./Workers";

export default function Serverless({ data }) {
  return (
    <Stack alignItems="center">
      <Hero />
      <Autoscale />
      <Workers />
      <Analytics />
      <Pricing />
      <Startup />
      <Community />
      <Counter data={data} />
      <div style={{ height: 300 }} />
    </Stack>
  );
}
