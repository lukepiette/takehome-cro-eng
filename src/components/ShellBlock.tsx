import { Box, Stack, Typography, alpha } from "@mui/material";

export const ShellBlock = ({
  children,
  title = "runpodctl -- zsh",
  light,
  left,
  sx,
  ...props
}: {
  children: React.ReactNode;
  title?: string;
  light?: boolean;
  left?: boolean;
  sx?: object;
} & React.HTMLAttributes<HTMLDivElement>) => (
  <Stack
    borderRadius={1}
    bgcolor="#111121"
    maxWidth={390}
    overflow="hidden"
    textAlign={"left"}
    sx={{
      borderColor: `${alpha("#5D29F0", 0.4)}`,
      borderStyle: "solid",
      borderWidth: light ? 0 : 1,
      borderBottomWidth: 0,
      boxShadow: light
        ? "0px 0px 0px 4px rgba(255, 255, 255, 0.04), 0px 0px 0px 8px rgba(255, 255, 255, 0.04)"
        : `0 0 0 1px ${alpha("#fff", 0.04)}, 0 0 0 3px ${alpha(
            "#fff",
            0.04
          )}, 0 0 0 8px ${alpha("#fff", 0.04)}`,
      ...sx,
    }}
    width="100%"
    {...props}
  >
    <Stack
      alignItems="center"
      bgcolor="#212134"
      direction="row"
      height={34}
      px={1.6}
      py={1.4}
      spacing={0.6}
    >
      <Box
        bgcolor={`${alpha("#fff", 0.3)}`}
        borderRadius={100}
        height={8}
        width={8}
      />
      <Box
        bgcolor={`${alpha("#fff", 0.2)}`}
        borderRadius={100}
        height={8}
        width={8}
      />
      <Box
        bgcolor={`${alpha("#fff", 0.1)}`}
        borderRadius={100}
        height={8}
        width={8}
      />
      <Typography
        align="right"
        color={`${alpha("#F9FAFB", 0.48)}`}
        fontFamily="monospace"
        fontSize={12}
        flexGrow={1}
      >
        {title}
      </Typography>
    </Stack>
    {children}
  </Stack>
);
