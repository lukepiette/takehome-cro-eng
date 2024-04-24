import { Box, Button, Stack, Typography, alpha } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ColdStart() {
  return (
    <Stack alignItems="center" position="relative" mb={200} mt={4}>
      <Typography
        align="center"
        color="#fff"
        fontSize={40}
        letterSpacing={-2}
        lineHeight={1}
        mt={2}
        variant="h2"
      >
        Spend more time training your models,
        <br />
        Let us handle your&nbsp;
        <Box
          display="inline-flex"
          sx={{
            background: "-webkit-linear-gradient(45deg, #CAD9FF, #7F39FF)",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          inference.
        </Box>
      </Typography>
    </Stack>
  );
}
