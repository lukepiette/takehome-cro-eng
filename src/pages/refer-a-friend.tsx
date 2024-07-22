import { Divider, Stack, Typography, useTheme } from "@mui/material"
import Head from "next/head"

import ButtonLink from "@components/ButtonLink"
import Link from "@components/Link"
import SignUp from "@components/SignUpButton"
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";


export default function ReferralInfo() {
  const theme = useTheme()
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const d = new Date()
  const month = monthNames[d.getMonth()]

  return (
    <>
      <Head>
        <title>Refer a Friend</title>
        <meta
          name="description"
          content="Refer a friend to RunPod GPU Cloud and a chance to get $100 in runpod credits."
        />
      </Head>

      <Stack
        alignItems={"center"}
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        my={6}
        spacing={6}
      >
        <Stack sx={{padding:5,borderRadius:5, backgroundImage:"url(/static/images/gpu/gpu-background-middle.webp)"}}>
          <Typography align={"center"} sx={{ fontSize: 20, mb: 5 }}>
            Pod Referral Program{" "}
            <Typography color="primary" display="inline-block" sx={{ fontSize: 14 }}>
              BETA
            </Typography>
          </Typography>
          <Typography
            sx={{
              backgroundClip: "text",
              backgroundImage: theme.colors.gradients.purple1,
              color: "transparent",
              fontSize: 28,
            }}
            align={"center"}
            variant="h1"
          >
          3% Commission
          </Typography>
          <Typography align={"center"} sx={{ fontSize: 18 }} variant="subtitle1">
            in RunPod Credits
          </Typography>
          <Typography align={"center"} sx={{ fontSize: 15, mb: 5 }} variant="subtitle1">
            for every penny spent by referral on GPU Pods
          </Typography>
          <Typography
            align={"center"}
            sx={{
              alignItems: "end",
              display: "flex",
              fontSize: 16,
              height: 65,
              justifyContent: "center",
            }}
            variant="subtitle1"
          >
            20 Referrals Spending $100 ea.
          </Typography>
          <Typography
            align={"center"}
            color="primary"
            sx={{ fontSize: 20, mb: 7 }}
            variant="subtitle1"
          >
            $40 earned
          </Typography>
          <ButtonLink
            href="/console/user/referrals"
            variant="outlined"
            sx={{
              background:
                "radial-gradient(106.71% 106.71% at 50% -6.71%, #45005E 0%, #000000 46.08%, #000342 85.94%)",
              borderRadius: 0.8,
              boxShadow:
                "inset 0px -6px 24px rgba(255, 255, 255, 0.24), inset 0px 1px 2px #BD00FF;",
              fontWeight: 600,
              height: 40,
              pl: 2,
              pr: 1.4,
            }}
          >
            Start Referring <KeyboardArrowRightIcon sx={{ fontSize: 18, ml: 0.6 }} />
          </ButtonLink>
          <Typography
            align={"center"}
            variant="subtitle1"
            fontSize={12}
            sx={{ maxWidth: 370, mt: 2 }}
          >
            Program runs until December 31, 2024. Referrals must be new RunPod accounts for commission to qualify.
          </Typography>
        </Stack>
        <Stack sx={{padding:5,borderRadius:5, backgroundImage:"url(/static/images/gpu/gpu-background-top.webp)"}}>
          <Typography align={"center"} sx={{ fontSize: 20, mb: 5 }}>
            Serverless Referral Program{" "}
            <Typography color="primary" display="inline-block" sx={{ fontSize: 14 }}>
              BETA
            </Typography>
          </Typography>
          <Typography
            sx={{
              backgroundClip: "text",
              backgroundImage: theme.colors.gradients.purple1,
              color: "transparent",
              fontSize: 28,
            }}
            align={"center"}
            variant="h1"
          >
            5% Commission
          </Typography>
          <Typography align={"center"} sx={{ fontSize: 18 }} variant="subtitle1">
            in RunPod Credits
          </Typography>
          <Typography align={"center"} sx={{ fontSize: 15, mb: 5 }} variant="subtitle1">
            for every penny spent by referral on Serverless
          </Typography>
          <Typography
            align={"center"}
            sx={{
              alignItems: "end",
              display: "flex",
              fontSize: 16,
              height: 65,
              justifyContent: "center",
            }}
            variant="subtitle1"
          >
            20 Referrals Spending $500 ea.
          </Typography>
          <Typography
            align={"center"}
            color="primary"
            sx={{ fontSize: 20, mb: 7 }}
            variant="subtitle1"
          >
            $500 earned
          </Typography>
          <SignUp text="Start Referring" url="/console/user/referrals"/>
          <Typography
            align={"center"}
            variant="subtitle1"
            fontSize={12}
            sx={{ maxWidth: 370, mt: 2 }}
          >
            Program runs until December 31, 2024. Referrals must be new RunPod accounts for commission to qualify.
          </Typography>
        </Stack>
        <Stack sx={{padding:5,borderRadius:5, backgroundImage:"url(/static/images/gpu/gpu-background-middle.webp)"}}>
          <Typography align={"center"} sx={{ fontSize: 20, mb: 5 }}>
          Template Referral Program{" "}
            <Typography color="primary" display="inline-block" sx={{ fontSize: 14 }}>
              BETA
            </Typography>
          </Typography>
          <Typography
            sx={{
              backgroundClip: "text",
              backgroundImage: theme.colors.gradients.purple1,
              color: "transparent",
              fontSize: 28,
            }}
            align={"center"}
            variant="h1"
          >
            1% Commission
          </Typography>
          <Typography align={"center"} sx={{ fontSize: 18 }} variant="subtitle1">
            in RunPod Credits
          </Typography>
          <Typography align={"center"} sx={{ fontSize: 15, mb: 5 }} variant="subtitle1">
            for every penny spent using your template
          </Typography>
          <Typography align={"center"} sx={{ fontSize: 16, height: 65 }} variant="subtitle1">
            20 Users using your Pod Template
            <br />
            at $0.54/hr for a Week
          </Typography>
          <Typography
            align={"center"}
            color="primary"
            sx={{ fontSize: 20, mb: 7 }}
            variant="subtitle1"
          >
            $18.14 earned
          </Typography>
          {/* <SignUp text="Start Referring" url="/console/user/referrals"/> */}
          <ButtonLink
            href="/console/user/referrals"
            variant="outlined"
            sx={{
              background:
                "radial-gradient(106.71% 106.71% at 50% -6.71%, #45005E 0%, #000000 46.08%, #000342 85.94%)",
              borderRadius: 0.8,
              boxShadow:
                "inset 0px -6px 24px rgba(255, 255, 255, 0.24), inset 0px 1px 2px #BD00FF;",
              fontWeight: 600,
              height: 40,
              pl: 2,
              pr: 1.4,
            }}
          >
            Start Referring <KeyboardArrowRightIcon sx={{ fontSize: 18, ml: 0.6 }} />
          </ButtonLink>
          <Typography
            align={"center"}
            variant="subtitle1"
            fontSize={12}
            sx={{ maxWidth: 370, mt: 2 }}
          >
            Program runs until December 31, 2024. To be eligible your template must have at least 1 day of runtime.
          </Typography>
        </Stack>
      </Stack>

      <Stack alignItems="center" sx={{ mt: 10, mb:10 }}>
        <Typography align={"center"} sx={{ fontSize: 20, mb: 5 }}>
            For more information, check out <Link target="_blank" href="https://blog.runpod.io/introducing-runpods-new-and-improved-referral-program">our blog post</Link>.
          </Typography>
        <Typography
          align={"center"}
          variant="subtitle1"
          fontSize={12}
          sx={{ maxWidth: 350, mt: 5 }}
        >
          <strong>Note</strong>: Any fraud, including breaking RunPod TOS or epxloiting the referral program may lead to being banned from all 3 referral programs.
        </Typography>
      </Stack>
    </>
  )
}
