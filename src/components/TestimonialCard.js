import { Avatar, Box, Card, Typography, Stack, useTheme } from "@mui/material"
import { useInView } from "react-intersection-observer"

const LG_HEIGHT = 490
const MD_HEIGHT = 430
const SM_HEIGHT = 380

const TestimonialCard = ({ avatarSrc, text, name, title }) => {
  const theme = useTheme()
  const { ref, inView } = useInView({ threshold: 0, fallbackInView: true })

  return (
    <Card
      ref={ref}
      sx={{
        position: "relative",
        textAlign: "center",
        p: 2,
        height: {
          lg: LG_HEIGHT,
          md: MD_HEIGHT,
          sm: SM_HEIGHT,
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 140,
          background: theme.colors.primary.main,
        }}
      />
      <Avatar
        sx={{
          position: "absolute",
          top: 60,
          left: "50%",
          transform: "translate(-50%, 0)",
          width: 120,
          height: 120,
          border: `${theme.colors.alpha.white[100]} solid 4px`,
          boxShadow: `0 0 0 3px ${theme.colors.primary.main}`,
        }}
        src={inView ? avatarSrc : null}
      />
      <Box
        sx={{
          width: "100%",
          height: 180,
        }}
      />
      <Stack
        justifyContent="space-between"
        sx={{
          height: {
            lg: LG_HEIGHT - 180 - 32,
            md: MD_HEIGHT - 180 - 32,
            sm: SM_HEIGHT - 180 - 32,
          },
        }}
      >
        <Typography variant="subtitle2">{text} </Typography>
        <Box>
          <Typography mt={2} variant="h4">
            {name}
          </Typography>
          <Typography mb={1} variant="subtitle1">
            {title}
          </Typography>
        </Box>
      </Stack>
    </Card>
  )
}

export default TestimonialCard
