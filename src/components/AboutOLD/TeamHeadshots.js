import { Stack, useTheme } from "@mui/material"
import TeamBox from "./TeamBox"

export default function Team() {
  const theme = useTheme()

  return (
    <Stack alignItems="center" my={0}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        mt={0}
        mb={3}
        px={1}
        spacing={2}
        rowGap={1}
        flexWrap="wrap"
      >
        <TeamBox
          primary
          theme={theme}
          title="CEO"
          name="Zhen Lu"
          linkedin="https://www.linkedin.com/in/zeen/"
          github="https://github.com/zhl146"
          twitter=""
          img="/static/images/zhen-headshot.jpeg"
        />
        <TeamBox
          primary
          theme={theme}
          title="CTO"
          name="Pardeep Singh"
          linkedin="https://www.linkedin.com/in/pardeep-singh-917830237/"
          github="https://github.com/flash-singh"
          twitter=""
          img="/static/images/pardeep-headshot.jpeg"
        />
        <TeamBox
          primary
          theme={theme}
          title="Founding Engineer"
          name="Justin Merrell"
          linkedin="https://www.linkedin.com/in/merrelljustin/"
          github="https://github.com/justinmerrell"
          twitter=""
          img="/static/images/justin-headshot.jpeg"
        />
        <TeamBox
          primary
          theme={theme}
          title="VP Sales & Marketing"
          name="JM Desrosiers"
          linkedin="https://www.linkedin.com/in/jean-michaeldesrosiers/"
          github=""
          twitter=""
          img="/static/images/jm-headshot.jpeg"
        />
        <TeamBox
          primary
          theme={theme}
          title="Senior ML Engineer"
          name="Jorg Doku"
          linkedin="https://www.linkedin.com/in/jorgdoku/"
          github="https://github.com/Jorghi12"
          twitter=""
          img="/static/images/jorg-headshot.jpeg"
        />
        
      </Stack>

      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        mt={4}
        px={1}
        spacing={2}
        rowGap={1}
        flexWrap="wrap"
      >
        <TeamBox
          primary
          theme={theme}
          title="Senior Engineer"
          name="Rutvik Patel"
          linkedin="https://www.linkedin.com/in/rutvikpatel/"
          github="https://github.com/rutvik-runpod"
          twitter=""
          img="/static/images/rutvik-headshot.jpeg"
        />
        <TeamBox
          primary
          theme={theme}
          title="Software Engineer"
          name="Zack McKenna"
          linkedin="https://www.linkedin.com/in/zack-mckenna-77912678/"
          github="https://github.com/zackmckenna"
          twitter=""
          img="/static/images/zack-headshot.jpeg"
        />
        <TeamBox
          primary
          theme={theme}
          title="Software Engineer"
          name="Nathaniel Saxe"
          linkedin="https://www.linkedin.com/in/nathaniel-saxe-b67440201/"
          github="https://github.com/DireLines"
          twitter=""
          img="/static/images/nathan-headshot.jpeg"
        />
        <TeamBox
          primary
          theme={theme}
          title="Head of Growth"
          name="Luke Piette"
          linkedin="https://www.linkedin.com/in/luke-piette-b5bb9914b/"
          github=""
          twitter="https://twitter.com/LukePiette"
          img="/static/images/luke-headshot.jpeg"
        />
      </Stack>
    </Stack>
  )
}