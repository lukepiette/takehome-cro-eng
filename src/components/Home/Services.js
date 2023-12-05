import { Alert, AlertTitle, Grid, Paper, Stack, ThemeProvider, Typography } from "@mui/material"
import { NebulaFighterTheme } from "@components/Layout/ThemeProvider/NebulaFighterTheme"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import Image from "next/image"

import ButtonLink from "@components/ButtonLink"
import Link from "@components/Link"

export default function Services() {
  return (
    <Stack alignItems="center" justifyContent={"space-around"} sx={{ my: 18 }}>
      <ThemeProvider theme={NebulaFighterTheme}>
        <Paper
          elecation={2}
          sx={{
            position: "relative",
            p: { xs: 2, md: 4 },
            py: { xs: 4, md: 4 },
            pb: 0,
            maxWidth: "100%",
            width: 1000,
            zIndex: 1,
          }}
        >
          <Stack spacing={1}>
            <Stack alignItems={"start"} direction="row" spacing={1}>
              <ArrowForwardIosIcon color="primary" sx={{ pt: 0.8, fontSize: 22 }} />
              <Typography sx={{ fontSize: 18 }}>
                <Typography component="span" color="#3ACF3A" sx={{ fontSize: 18 }}>
                  runpodctl
                </Typography>{" "}
                create pod{" "}
                <Typography component="span" sx={{ fontSize: 14 }}>
                  --imageName=jupyter/tensorflow-notebook --gpuType=&quot;NVIDIA RTX A6000&quot;
                  --gpuCount=2 ...
                </Typography>
              </Typography>
            </Stack>
            <Typography sx={{ fontSize: 14, pl: 3.3 }}>
              pod &quot;jqtsm6e3700cjz&quot; created for $0.84 / hr
            </Typography>
            <Stack alignItems={"start"} direction="row" pt={2} spacing={1}>
              <ArrowForwardIosIcon color="primary" sx={{ pt: 0.8, fontSize: 22 }} />
              <Typography sx={{ fontSize: 18 }}>
                <Typography component="span" color="#3ACF3A" sx={{ fontSize: 18 }}>
                  runpodctl
                </Typography>{" "}
                get pod
              </Typography>
            </Stack>
            <Grid container sx={{ fontSize: 14, pl: 3.3 }}>
              <Grid item md={3}>
                ID
              </Grid>
              <Grid item md={3}>
                GPU
              </Grid>
              <Grid item md={4}>
                IMAGE NAME
              </Grid>
              <Grid item md={2}>
                STATUS
              </Grid>
              <Grid item md={3}>
                jqtsm6e3700cjz
              </Grid>
              <Grid item md={3}>
                2x RTX A6000
              </Grid>
              <Grid item md={4}>
                jupyter/tensorflow-notebook
              </Grid>
              <Grid item md={2}>
                RUNNING
              </Grid>
            </Grid>
            <Stack alignItems={"start"} direction="row" pt={2} spacing={1}>
              <ArrowForwardIosIcon color="primary" sx={{ pt: 0.8, fontSize: 22 }} />
              <Typography sx={{ fontSize: 18 }}>
                <Typography component="span" color="#3ACF3A" sx={{ fontSize: 18 }}>
                  runpodctl
                </Typography>{" "}
                stop pod qmioq0dmowyfwz
              </Typography>
            </Stack>
            <Typography sx={{ fontSize: 14, pl: 3.3 }}>
              pod &quot;qmioq0dmowyfwz&quot; stopped
            </Typography>
            <Stack alignItems={"start"} direction="row" pt={2} spacing={1}>
              <ArrowForwardIosIcon color="primary" sx={{ pt: 0.8, fontSize: 22 }} />
              <Typography sx={{ fontSize: 18 }}>
                <Typography component="span" color="#3ACF3A" sx={{ fontSize: 18 }}>
                  runpodctl
                </Typography>{" "}
                remove pod qmioq0dmowyfwz
              </Typography>
            </Stack>
            <Typography sx={{ fontSize: 14, pl: 3.3 }}>
              pod &quot;qmioq0dmowyfwz&quot; removed
            </Typography>
          </Stack>
          <Stack mt={8} mb={1} spacing={4}>
            <Stack alignItems="center" direction="row" justifyContent="center" spacing={6}>
              <ButtonLink
                href="https://docs.runpod.io/graphql-api"
                sx={{ fontSize: 16, px: 4 }}
                variant="contained"
              >
                API Docs
              </ButtonLink>
              <Link
                href={"https://github.com/runpod/runpodctl"}
                underline="none"
                sx={{ alignSelf: "center" }}
              >
                <Image
                  alt="runpod cli on github"
                  src="/static/images/github_icon_white.png"
                  width={50}
                  height={50}
                />
              </Link>
            </Stack>
            <Alert severity="success" sx={{ color: "text.primary" }}>
              <AlertTitle>
                <strong>CLI / GraphQL API</strong>
              </AlertTitle>
              Automate your workflow and spin up GPUs on the fly within seconds. Take advantage of
              Spot GPUs and run your compute jobs when prices are low.
            </Alert>
            <Alert severity="success" sx={{ color: "text.primary" }}>
              <AlertTitle>
                <strong>OnDemand / Spot GPUs</strong>
              </AlertTitle>
              Use OnDemand GPUs when you need consistent reliability with no interruptions.
              <br />
              Spot GPUs are here for jobs that can tolerate interruptions and downtime while saving
              you up to 50% in cost.
            </Alert>
            <Alert severity="success" sx={{ color: "text.primary" }}>
              <AlertTitle>
                <strong>SSH / TCP Ports / HTTP Ports</strong>
              </AlertTitle>
              Many access points at your fingertips to code, optimize, and run your AI / ML jobs.
            </Alert>
            <Alert severity="success" sx={{ color: "text.primary" }}>
              <AlertTitle>
                <strong>Persistent Volumes</strong>
              </AlertTitle>
              Stop your pods and resume them later while keeping your data safe.
            </Alert>
          </Stack>
        </Paper>
      </ThemeProvider>
    </Stack>
  )
}
