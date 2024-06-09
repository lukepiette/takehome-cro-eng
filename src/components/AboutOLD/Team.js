import { Grid, Stack, Typography } from "@mui/material"
import TestimonialCard from "@components/TestimonialCard"

const testimonials = [
  {
    avatarSrc:
      "https://media-exp1.licdn.com/dms/image/C4D03AQF-1FO0y_KG2Q/profile-displayphoto-shrink_800_800/0/1551138145588?e=1664409600&v=beta&t=3j7RcMsd_pEvEg_r_lcA43QPWDU0kbVxOU3H_CG_aeg",
    text: `Hey there, I'm Zhen! I'm wearing a bunch of hats to get us off the ground, but I'm a technologist at heart. I've managed engineering teams with annual budgets in the tens of millions for a fortune 50 company.
         I also hold a mostly useless PhD in computational chemistry. My partner and I are committed to making RunPod something that you want to use, so please let me know if there's anything we can do to help!`,
    name: "Zhen Lu",
    title: "Wearer of Hats",
  },
  {
    avatarSrc: "https://ca.slack-edge.com/TRWJJL947-U02PU0H7JLU-650a1af784f9-512",
    text: `Hi everyone, I'm Pardeep. Solving interesting problems in software is what keeps my blood pumping and keeps me up at night, so I'm really
         excited to be able to bring you this platform. I've successfully designed enterprise systems that scale with millions of users and I mean to do the same here. If you've got something that you think 
         we could help with, please reach out and I'd be happy to talk to you about it!`,
    name: "Pardeep Singh",
    title: "Cofee -> Code since the 90s",
  },
]

export default function Testimonals() {
  return (
    <Stack alignItems="center" spacing={3}>
      <Typography align={"center"} variant="h2">
        The Team
      </Typography>
      <Stack alignItems="center" justifyContent="center">
        <Grid maxWidth="lg" spacing={2} container alignItems="center" justifyContent="center">
          {testimonials.map((props) => (
            <Grid key={props.name} item xs={12} md={6} lg={4}>
              <TestimonialCard {...props}></TestimonialCard>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  )
}
