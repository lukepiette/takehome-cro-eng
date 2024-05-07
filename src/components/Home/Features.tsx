import ButtonLink from "@components/ButtonLink";
import { CodeBlock } from "@components/CodeBlock";
import { ShellBlock } from "@components/ShellBlock";
import { Box, Stack, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <Stack
      position={"relative"}
      gap={4}
      width={500}
      alignItems={"left"}
      justifyContent={"center"}
    >
      {children}
    </Stack>
  );
}

function Divider() {
  return (
    <Stack alignItems={"center"} height={"100%"} gap={-1}>
      <div
        style={{
          background:
            "radial-gradient(85.83% 85.83% at 50% 14.17%, #000000 0%, #000000 59.12%, rgba(0, 0, 0, 0.24) 96.98%, rgba(0, 0, 0, 0) 100%)",
          boxShadow:
            "0px 1.76px 10.57px 0px #673BB8 inset, 0px -1.18px 1.18px 0px #BD00FF inset, 0px 0px 10.57px 0px #7C00DE inset",
          width: "20px",
          height: "20px",
          borderRadius: "100px",
          border: "1px solid",
          borderImageSource:
            "conic-gradient(from 90deg at 50% 50%, #A855F7 0deg, rgba(250, 245, 255, 0) 180deg, #6366F1 360deg)",
        }}
      />
      <div
        style={{
          background:
            "linear-gradient(180deg, #4A494F 32.51%, rgba(101, 77, 255, 0.0) 100%)",
          height: "622.64px",
          width: "1px",
        }}
      />
    </Stack>
  );
}

function FeatureRow({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <Stack direction={"row"} gap={12} minHeight={"20rem"}>
      {left}
      <Divider />
      {right}
    </Stack>
  );
}

export function Features() {
  return (
    <Stack alignItems={"center"} width={"100%"} mt={24}>
      <FeatureRow
        left={
          <Feature>
            <ShellBlock
              style={{
                height: 220,
                width: 350,
              }}
            >
              <Typography
                fontFamily="monospace"
                fontSize={12}
                ml={2}
                mt={2}
                width="100%"
              >
                {">"} <span style={{ color: "#FF8FFD" }}>runpodctl</span>{" "}
                project <span style={{ color: "#979DFF" }}>dev</span>
              </Typography>
            </ShellBlock>
            <CodeBlock
              style={{
                position: "absolute",
                transform: "translate(2rem, 6rem)",
                width: 350,
                height: 220,
              }}
            >
              <Typography
                fontFamily="monospace"
                whiteSpace={"pre-wrap"}
                fontSize={12}
                ml={2}
                mt={2}
                width="100%"
              >
                <span style={{ opacity: 0.8 }}>Provisioning GPUs...</span>
                <br />
                <span style={{ opacity: 0.8 }}>Installing dependencies...</span>
                <br />
                <span style={{ opacity: 0.8 }}>
                  Activating project environment...
                </span>
                <br />
                <br />
                Success! Test your changes locally by connecting
                <br />
                to the API server at:
                <br />
                <span style={{ opacity: 0.8 }}>
                  {">"} https://landing-page123.proxy.runpod.net
                </span>
              </Typography>
            </CodeBlock>
          </Feature>
        }
        right={
          <Feature>
            <Typography variant="h2">
              Instant hot-reloading for your local changes.
            </Typography>
            <Typography>
              Run code in the cloud that{"'"}s as seamless as running it
              locally. No need to push your container image every time you add a
              print statement.
              <br /> <br />
              Just hit the endpoint given to you by the CLI to test and deploy
              when you{"'"}re confident everything works.
            </Typography>
          </Feature>
        }
      />
      <FeatureRow
        left={
          <Feature>
            <Typography variant="h2">
              Choose from 50+ templates ready out-of-the-box,{" "}
              <span style={{ color: "#afa0ff" }}>
                or bring your own custom container.
              </span>
            </Typography>
            <Typography>
              Get setup instantly with PyTorch, Tensorflow, or any other
              preconfigured environment you might need for your machine learning
              workflow.
              <br /> <br />
              Along with managed and community templates, we also let you
              configure your own template to fit your deployment needs.
            </Typography>
            <Box>
              <ButtonLink href="/console/explore" variant="contained" gradient>
                Browse templates
                <KeyboardArrowRightIcon
                  sx={{
                    display: { xs: "none", md: "inherit" },
                    fontSize: 20,
                    ml: 0.6,
                  }}
                />
              </ButtonLink>
            </Box>
          </Feature>
        }
        right={
          <Feature>
            <CodeBlock
              style={{
                height: 400,
                width: "100%",
              }}
            >
              a
            </CodeBlock>
          </Feature>
        }
      />
    </Stack>
  );
}
