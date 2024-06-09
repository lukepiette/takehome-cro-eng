import { Box, Stack, Typography, useTheme } from "@mui/material"
import Hero from "./Hero"
import Values from "./Values"
import Careers from "./Careers"
import Location from "./Location"
import Team from "./Team"
import Announcements from "./Announcements"
import Photos from "./Photos"


export default function About() {
  const theme = useTheme()

  return (
    <>
      <Stack alignItems={"center"} mb={15} mt={{xs:4, md:8}} position="relative">
        <Hero />
        <Values />
        <Careers />
        <Location />
        <Team />
        <Photos />
        <Announcements />
      </Stack>
    </>
  )
}
