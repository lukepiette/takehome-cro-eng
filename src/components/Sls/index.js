import { Stack } from "@mui/material";
import Analytics from "./Analytics";
import Autoscale from "./Autoscale";
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
      <Pricing title1="Cost effective" title2="for every inference workload" />
      <Startup />
      <Counter data={data} />
      <Footer />
    </Stack>
  );
}
