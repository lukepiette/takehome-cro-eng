import { Stack } from "@mui/material";
import Analytics from "./Analytics";
import Autoscale from "./Autoscale";
import Community from "./Community";
import Counter from "./Counter";
import Footer from "./Footer";
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
      {/* <Community /> */}
      <Counter data={data} />
      <Footer />
    </Stack>
  );
}
