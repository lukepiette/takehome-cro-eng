import { Grid, Stack } from "@mui/material"
import TestimonialCard from "src/pages/Home/Overview/TestimonialCard"

import ianHeadshot from "./ianGerard.jpg"
import georgeHeadshot from "./georgePearse.png"
import camHeadshot from "./camFairchild.jpg"

const testimonials = [
  {
    avatarSrc: camHeadshot,
    text: `RunPod provides cost effective and easy to setup options for hosting docker containers with a variety of server specs to choose from. The development team is always super responsive and helpful as well. I would recommend this service to anyone needing some inexpensive GPU compute for ML/AI, or other compute tasks.`,
    name: "Cameron Fairchild",
    title: "ML Engineer",
  },
  {
    avatarSrc: ianHeadshot,
    text: `The Adder team has been seeking ways to decrease our dependence on cloud services like AWS EC2, ECS, and Lambda. RunPod gives us the flexibility to drop our AI, ML, and deep learning workloads in a flexible cloud-agnostic GPU platform. To us, GPU containerization is king, and RunPod understands this better than other platforms. The pricing is just the cherry on top.`,
    name: "Ian Gerard",
    title: "CEO of Adder Mobile",
  },
  {
    avatarSrc: georgeHeadshot,
    text: `I've been thoroughly impressed by RunPod, resource limits can make it both hard and slow
        to get started on AWS. With RunPod you can be training deep learning models in minutes.
        And there's still the safety of paying before you use to make sure you don't end up in
        debt from GPU charges. Not to mention prices are about 1/3rd of AWS in the first place.`,
    name: "George Pearse",
    title: "Data Engineer and Scientist",
  },
]

export default function Testimonals() {
  return (
    <Stack alignItems="center" justifyContent="center" my={18}>
      <Grid
        maxWidth="lg"
        p={{
          xs: 1,
          md: 2,
          lg: 3,
        }}
        spacing={2}
        container
        alignItems="center"
        justifyContent="center"
      >
        {testimonials.map((props) => (
          <Grid key={props.name} item xs={12} md={6} lg={4}>
            <TestimonialCard {...props}></TestimonialCard>
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}
