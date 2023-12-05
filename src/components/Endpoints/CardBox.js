import { Card, Stack, Typography } from "@mui/material"

const CardBox = ({ button, list = [], primary, theme, title, version }) => (
  <Card
    elevation={primary ? 1 : 0}
    sx={{
      background: !primary && {
        xs: theme.palette.background.paper,
        md: theme.palette.background.default,
      },
      position: "relative",
      overflow: "visible",
      minWidth: { xs: "100%", md: "inherit" },
      p: 4,
      width: { xs: "100%", md: 350 },
      zIndex: 1,
    }}
  >
    <Stack alignItems="center">
      <Typography sx={{ fontSize: 30, lineHeight: 1.3 }} variant="h3">
        {title}
      </Typography>
      {version && <Typography sx={{ fontSize: 18 }}>{version}</Typography>}
      <Stack direction={{ xs: "row", md: "row-reverse" }} alignItems="start" mt={3} spacing={8}>
        <Stack alignItems="center" spacing={0.5}>
          {list.map((v, i) => (
            <Typography
              color="body1"
              fontWeight={i === 0 ? 600 : 400}
              key={i}
              sx={{ fontSize: i === 0 ? 16 : 15, height: v.length === 0 ? 10 : null }}
              textAlign="center"
            >
              {v}
            </Typography>
          ))}
        </Stack>
      </Stack>
      <Stack direction="row" pt={4} spacing={2} width={"100%"}>
        {button}
      </Stack>
    </Stack>
  </Card>
)

export default CardBox
