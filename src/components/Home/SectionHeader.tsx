import ButtonLink from "@components/ButtonLink";
import { Stack, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { ShellBlock } from "@components/ShellBlock";

export function SectionHeader({
  name,
  number,
  title,
  subtitle,
  button,
  children,
  glow,
}: {
  name: string;
  number: number;
  title: string | React.ReactNode;
  subtitle: string | React.ReactNode;
  button: React.ReactNode;
  children: React.ReactNode;
  glow?: boolean;
}) {
  return (
    <Stack
      gap={"27px"}
      alignItems={"center"}
      zIndex={1}
      textAlign={"center"}
      px={{
        xs: 3,
        md: 0,
      }}
    >
      <Stack direction={"row"} gap={2} alignItems={"center"}>
        <div
          style={{
            width: "36px",
            height: "36px",
            background: "rgba(255, 255, 255, 0.1)",
            boxShadow:
              "0px 1px 4px 0px rgba(135, 147, 255, 1) inset, 0px -6px 24px 0px rgba(255, 255, 255, 0.24) inset",
            borderRadius: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {number}
        </div>
        <Typography variant={"h4"}>{name}</Typography>
      </Stack>
      {typeof title === "string" ? (
        <Typography fontWeight={600} fontSize={48} lineHeight={"48px"}>
          {title}
        </Typography>
      ) : (
        title
      )}
      {typeof subtitle === "string" ? (
        <Typography fontWeight={400} fontSize={16}>
          {subtitle}
        </Typography>
      ) : (
        subtitle
      )}
      {button}

      {children}
    </Stack>
  );
}
