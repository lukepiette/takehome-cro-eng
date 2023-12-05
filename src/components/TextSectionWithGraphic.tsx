import { Box, Stack } from "@mui/material"

export default function TextSectionWithGraphic({
  direction,
  flip,
  graphic,
  sx,
  text,
  my = 15,
  spacing = 8,
}: any) {
  return (
    <Stack
      alignItems="center"
      justifyContent="start"
      spacing={spacing}
      sx={{ my, ...sx }}
      direction={direction || { xs: "column-reverse", md: flip ? "row-reverse" : "row" }}
    >
      {graphic && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            maxWidth: { xs: "100%", md: "inherit" },
            position: "relative",
            minWidth: { xs: "100%", md: 400 },
            zIndex: 1,
          }}
        >
          {graphic}
        </Box>
      )}
      <Box
        sx={{
          position: "relative",
          overflow: "visible",
          minWidth: { xs: "100%", md: "inherit" },
          zIndex: 1,
        }}
      >
        {text}
      </Box>
    </Stack>
  )
}
