import { Stack } from "@mui/material";
import Autoscale from "./Autoscale";
import Hero from "./Hero";
import Workers from "./Workers";

export default function Serverless({ data }) {
  return (
    <Stack alignItems="center">
      <Hero />
      <Autoscale />
      <Workers />
      <div style={{ height: 300 }} />
    </Stack>
  );
}
