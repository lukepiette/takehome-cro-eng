import { Box, Stack, alpha } from "@mui/material";

export const CodeBlock = ({
  children,
  light,
  left,
  sx,
  ...props
}: {
  children: React.ReactNode;
  light?: boolean;
  left?: boolean;
  sx?: object;
} & React.HTMLAttributes<HTMLDivElement>) => (
  <Stack
    borderRadius={1}
    bgcolor="#111121"
    maxWidth={390}
    overflow="hidden"
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
      pl={1.6}
      spacing={0.6}
    >
      <Box bgcolor="#EE6A5E" borderRadius={100} height={8} width={8} />
      <Box bgcolor="#F5BF4F" borderRadius={100} height={8} width={8} />
      <Box bgcolor="#62C554" borderRadius={100} height={8} width={8} />
    </Stack>
    {children}
  </Stack>
);
