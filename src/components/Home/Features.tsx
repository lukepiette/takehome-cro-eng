import ButtonLink from "@components/ButtonLink";
import { CodeBlock } from "@components/CodeBlock";
import { ShellBlock } from "@components/ShellBlock";
import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MemoryIcon from "@mui/icons-material/Memory";
import PublicIcon from "@mui/icons-material/Public";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

import Docker from "@assets/docker.svg";
import Pytorch from "@assets/pytorch.svg";
import Tensorflow from "@assets/tensorflow.svg";
import Runpod from "@assets/runpod.svg";
import { useEffect, useState } from "react";

function Feature({
  children,
  left,
  right,
}: {
  children: React.ReactNode;
  left?: boolean;
  right?: boolean;
}) {
  return (
    <Stack
      position={"relative"}
      gap={4}
      flexBasis={{ xs: "auto", md: "50%" }}
      maxWidth={{ xs: "100%", md: "50%" }}
      flexShrink={1}
      flexGrow={0}
      alignItems={"start"}
      justifyContent={"center"}
      paddingLeft={{ xs: 0, md: right ? "8rem" : 0 }}
      paddingRight={{ xs: 0, md: left ? "8rem" : 0 }}
    >
      {children}
    </Stack>
  );
}

function Divider() {
  return (
    <Stack
      alignItems={"center"}
      height={"100%"}
      gap={-1}
      width={0}
      display={{ xs: "none", md: "flex" }}
    >
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
  reverseWhenSmall,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  reverseWhenSmall?: boolean;
}) {
  return (
    <Stack
      direction={{
        xs: reverseWhenSmall ? "column-reverse" : "column",
        md: "row",
      }}
      minHeight={{ xs: "auto", md: "20rem" }}
      width="100%"
      gap={{ xs: 8, md: 0 }}
      alignItems={{
        xs: "center",
        md: "initial",
      }}
    >
      <Feature left>{left}</Feature>
      <Divider />
      <Feature right>{right}</Feature>
    </Stack>
  );
}

const fakePodLogs = [
  "create pod network",
  "create 20GB network volume",
  "create container runpod/pytorch:3.10-2.0.0-117",
  "3.10-2.0.0-117 Pulling from runpod/pytorch",
  "Digest: sha256:2dbf81dd888d383620a486f83ad2ff47540c6cb5e02a61e74b8db03a715488d6",
  "Status: Image is up to date for runpod/pytorch:3.10-2.0.0-117",
  "start container",
];
function FakePod() {
  const [date, setDate] = useState(0);

  useEffect(() => {
    setDate(new Date().getTime());
  }, []);

  return (
    <Stack
      gap={3}
      p={2}
      sx={{
        background:
          "radial-gradient(50.12% 50.12% at 100.49% 75.43%, #1E293B 0%, rgba(15, 23, 42, 0) 100%)",
        borderRadius: "14px",
        overflow: "hidden",
        border: "1px rgba(249, 250, 251, 0.1) solid",
      }}
      maxWidth={"100%"}
    >
      <Stack direction={"row"} alignItems={"center"} gap={2}>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            borderRadius: "100px",
            background: "rgba(255, 255, 255, 0.1)",
            padding: 1,
            flexShrink: 0,
            height: "fit-content",
          }}
        >
          <MemoryIcon fontSize="small" />
        </Stack>
        <Stack>
          <Typography fontSize={17}>PyTorch</Typography>
          <Typography fontSize={11} sx={{ opacity: 0.7 }}>
            ID: twnw98clgxxf2z
          </Typography>
        </Stack>
        <Stack
          sx={{
            marginLeft: "auto",
            paddingTop: 1,
            paddingBottom: 1,
            paddingLeft: 1,
            paddingRight: 1,
            background:
              "linear-gradient(270deg, rgba(51, 65, 85, 0) 0%, rgba(51, 65, 85, 0.32) 53%, rgba(51, 65, 85, 0) 100%)",
            boxShadow:
              "0px 0.7200000286102295px 1.440000057220459px #B4ACB7 inset",
            borderRadius: "5.76px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            style={{
              color: "#F9FAFB",
              fontSize: 10.08,
              fontWeight: "500",
            }}
          >
            $0.69/hour
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        gap={1}
        flexWrap={"wrap"}
      >
        <Stack>
          <Typography fontSize={11} fontWeight={500}>
            200 GB Disk: 200 GB Pod Volume
          </Typography>
          <Typography fontSize={11} sx={{ opacity: 0.7 }}>
            Volume Path: /workspace
          </Typography>
        </Stack>
        <Stack>
          <Typography fontSize={11} fontWeight={500}>
            1 x A40
          </Typography>
          <Typography fontSize={11} sx={{ opacity: 0.7 }}>
            9 vCPU 50 GB RAM
          </Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} gap={1} alignItems={"center"} flexWrap={"wrap"}>
        <Stack direction={"row"} gap={0.5} alignItems={"center"}>
          <PublicIcon
            fontSize="small"
            sx={{
              color: "#6152a8",
            }}
          />
          <Typography>CA</Typography>
        </Stack>
        <div
          style={{
            width: "1px",
            height: "1rem",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0) 0%, #4A494F 50%, rgba(101, 77, 255, 0.0) 100%)",
            flexShrink: 0,
          }}
        />
        <Stack direction={"row"} gap={0.5} alignItems={"center"}>
          <CloudDownloadOutlinedIcon
            fontSize="small"
            sx={{
              opacity: 0.5,
            }}
          />
          <Typography>8654 Mbps</Typography>
        </Stack>
        <div
          style={{
            width: "1px",
            height: "1rem",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0) 0%, #4A494F 50%, rgba(101, 77, 255, 0.0) 100%)",
            flexShrink: 0,
          }}
        />
        <Stack direction={"row"} gap={0.5} alignItems={"center"}>
          <CloudUploadOutlinedIcon
            fontSize="small"
            sx={{
              opacity: 0.5,
            }}
          />
          <Typography>938 Mbps</Typography>
        </Stack>
        <div
          style={{
            width: "1px",
            height: "1rem",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0) 0%, #4A494F 50%, rgba(101, 77, 255, 0.0) 100%)",
            flexShrink: 0,
          }}
        />
        <Stack direction={"row"} gap={0.5} alignItems={"center"}>
          <SaveOutlinedIcon
            fontSize="small"
            sx={{
              opacity: 0.5,
            }}
          />
          <Typography>963 MBps</Typography>
        </Stack>
      </Stack>
      <Stack
        p={1}
        sx={{
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 0.5,
          background: "rgba(0,0,0,0.7)",
        }}
      >
        {fakePodLogs.map((log, i) => (
          <Stack
            direction={"row"}
            gap={1}
            alignItems={"center"}
            key={log}
            overflow={"hidden"}
          >
            <Typography
              sx={{ opacity: 0.7, fontFamily: "monospace" }}
              fontSize={10}
            >
              {i}
            </Typography>
            <Typography
              sx={{ fontFamily: "monospace", whiteSpace: "nowrap" }}
              fontSize={10}
            >
              {new Date(date + i * 1000).toISOString()}
            </Typography>
            <Typography
              sx={{ fontFamily: "monospace", whiteSpace: "nowrap" }}
              fontSize={10}
            >
              {log}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

function FakeTemplate({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <Box
      style={{
        background: "rgba(0,0,0,0.3)",
        borderRadius: 8,
        border: "1px solid rgba(255,255,255,0.1)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        height: "100%",
        justifyContent: "space-between",
      }}
      maxWidth={"100%"}
      maxHeight={"100%"}
      p={{
        xs: 1.5,
        md: 2,
      }}
    >
      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
        gap={{
          xs: 0.5,
          md: 2,
        }}
        alignItems={{
          xs: "start",
          md: "center",
        }}
      >
        <Box>{icon}</Box>
        <Typography fontSize={15} fontWeight={500}>
          {title}
        </Typography>
      </Stack>
      {/* @ts-ignore */}
      <Button variant="outlined" size="small" gradient>
        Deploy
      </Button>
    </Box>
  );
}

export function Features() {
  return (
    <Stack
      alignItems={"center"}
      width={"100%"}
      mt={24}
      position={"relative"}
      maxWidth={"75.5rem"}
      gap={{
        xs: 16,
        md: 0,
      }}
      px={{
        xs: 3,
        md: 0,
      }}
    >
      <FeatureRow
        left={
          <Box marginBottom={{ xs: 12, md: 0 }}>
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
                height: 220,
              }}
              sx={{
                top: {
                  xs: "6rem",
                  md: "19rem",
                },
                left: {
                  xs: "0rem",
                  md: "2rem",
                },
                width: {
                  xs: "350px",
                  md: "350px",
                },
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
          </Box>
        }
        right={
          <>
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
          </>
        }
      />
      <FeatureRow
        reverseWhenSmall
        left={
          <>
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
          </>
        }
        right={
          <>
            <CodeBlock
              style={{
                height: 350,
                width: "100%",
                marginLeft: "auto",
                maxWidth: "100%",
              }}
            >
              <Grid container spacing={2} padding={2} height="100%">
                <Grid item xs={6}>
                  <FakeTemplate icon={<Pytorch />} title="PyTorch" />
                </Grid>
                <Grid item xs={6}>
                  <FakeTemplate icon={<Tensorflow />} title="Tensorflow" />
                </Grid>
                <Grid item xs={6}>
                  <FakeTemplate icon={<Docker />} title="Docker" />
                </Grid>
                <Grid item xs={6}>
                  <FakeTemplate icon={<Runpod />} title="Runpod" />
                </Grid>
              </Grid>
            </CodeBlock>
          </>
        }
      />
      <div
        style={{
          position: "absolute",
          top: "1300px",
          width: "24rem",
          height: "24rem",
          transform: "rotate(-105deg) translate(0, -15rem)",
          background:
            "radial-gradient(58.26% 58.26% at 58.26% 29.13%, #8C29F0 0%, rgba(101.49, 76.50, 255, 0.51) 28%, rgba(155.04, 76.50, 255, 0.25) 100%)",
          boxShadow:
            "0px -30.077733993530273px 30.077733993530273px #BD00FF inset",
          borderRadius: 50000,
          filter: "blur(200px)",
          zIndex: 10,
        }}
      />
      <FeatureRow
        left={
          <>
            <FakePod />
          </>
        }
        right={
          <>
            <Typography variant="h2">Spin up a GPU pod in seconds</Typography>
            <Typography>
              it{"'"}s a pain to having to wait upwards of 10 minutes for your
              pods to spin up - we{"'"}ve cut the cold-boot time down to
              milliseconds, so you can start building within seconds of
              deploying your pods.
            </Typography>
            <Box>
              <ButtonLink href="/console/deploy" variant="contained" gradient>
                Spin up a pod
                <KeyboardArrowRightIcon
                  sx={{
                    display: { xs: "none", md: "inherit" },
                    fontSize: 20,
                    ml: 0.6,
                  }}
                />
              </ButtonLink>
            </Box>
          </>
        }
      />
    </Stack>
  );
}
