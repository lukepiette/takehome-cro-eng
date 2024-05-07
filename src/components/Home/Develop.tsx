import ButtonLink from "@components/ButtonLink";
import { Stack, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { ShellBlock } from "@components/ShellBlock";

export function Develop() {
  return (
    <Stack gap={"27px"} alignItems={"center"} zIndex={1} textAlign={"center"}>
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
          1
        </div>
        <Typography variant={"h4"}>Develop</Typography>
      </Stack>
      <Typography fontWeight={600} fontSize={48} lineHeight={"48px"}>
        Seamlessly spin up GPUs for your
        <br />
        <span style={{ color: "#afa0ff" }}>AI workloads</span>
      </Typography>
      <Typography fontWeight={400} fontSize={16}>
        Deploy any GPU workload seamlessly, so you can focus less on
        <br />
        infrastructure and more on running ML models.
      </Typography>
      <ButtonLink
        href="https://docs.runpod.io/cli/install-runpodctl"
        variant="contained"
        gradient
      >
        Check out the CLI docs
        <KeyboardArrowRightIcon
          sx={{
            display: { xs: "none", md: "inherit" },
            fontSize: 20,
            ml: 0.6,
          }}
        />
      </ButtonLink>

      <ShellBlock
        sx={{ height: 120, mt: 2 }}
        style={{
          boxShadow:
            "0px 0px 0px 4px #CFB9FF73, 0px 0px 0px 8px #654DFF82, 0px 0px 0px 16px #4D94FF40",
        }}
      >
        <Typography
          fontFamily="monospace"
          fontSize={12}
          ml={2}
          mt={2}
          width="100%"
        >
          {">"} <span style={{ color: "rgba(180, 250, 114, 1)" }}>brew</span>{" "}
          <span style={{ color: "#979DFF" }}>install</span>{" "}
          runpod/runpodctl/runpodctl
          <br />
          {">"} <span style={{ color: "#FF8FFD" }}>runpodctl</span> project{" "}
          <span style={{ color: "#979DFF" }}>create</span>
        </Typography>
      </ShellBlock>
    </Stack>
  );
}
