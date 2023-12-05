import { Stack, Typography, Box, Button } from "@mui/material"
import Image from "next/image"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import TwitterIcon from "@mui/icons-material/Twitter"

const TeamBox = ({ primary, theme, title, name, img, linkedin, github, twitter }) => (
  <Box
    elevation={primary ? 1 : 0}
    sx={{
      background: !primary && {
        xs: theme.palette.background.paper,
        md: theme.palette.background.default,
      },
      position: "relative",
      overflow: "visible",
      minWidth: { xs: "100%", md: "inherit" },
      p: 2,
      width: { xs: "100%", md: 225 },
      zIndex: 1,
    }}
  >
    <Stack alignItems="center">
      <Image src={img} alt={name} height={225} width={225} style={{ borderRadius: 10 }} />
      <Typography sx={{ fontSize: 24 }} mt={2} variant="h3">
        {name}
      </Typography>
      <Typography sx={{ fontSize: 18 }} variant="body1">
        {title}
      </Typography>
      <Stack direction={{ xs: "row", md: "row-reverse" }} alignItems="start" mt={1} spacing={0}>
        {linkedin !== "" && (
          <Button href={linkedin} target="_blank">
            <LinkedInIcon />
          </Button>
        )}

        {github !== "" && (
          <Button href={github} target="_blank">
            <GitHubIcon />
          </Button>
        )}

        {twitter !== "" && (
          <Button href={twitter} target="_blank">
            <TwitterIcon />
          </Button>
        )}
      </Stack>
    </Stack>
  </Box>
)

export default TeamBox
