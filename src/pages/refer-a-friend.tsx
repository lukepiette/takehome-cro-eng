import { Divider, Stack, Typography, useTheme } from "@mui/material"
import Head from "next/head"

import ButtonLink from "@components/ButtonLink"
import Link from "@components/Link"

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
        <Stack>
          <Typography align={"center"} sx={{ fontSize: 20, mb: 5 }}>
            Referral Program{" "}
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
            2% for Lifetime
          </Typography>
          <Typography align={"center"} sx={{ fontSize: 18 }} variant="subtitle1">
            in RunPod Credits
          </Typography>
          <Typography align={"center"} sx={{ fontSize: 15, mb: 5 }} variant="subtitle1">
            for every penny spent by referral
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
          <ButtonLink variant="contained" href="/console/user/referrals">
            Start Referring Today
          </ButtonLink>
          <Typography
            align={"center"}
            variant="subtitle1"
            fontSize={16}
            sx={{ maxWidth: 370, mt: 2 }}
          >
            To be eligible <Link href="/contact">contact us</Link> once you have 25 referrals and
            $500 minimum in referral spend.
          </Typography>
        </Stack>
        <Divider orientation="vertical" flexItem />
        <Stack>
          <Typography align={"center"} sx={{ fontSize: 20, mb: 5 }}>
            Template Program{" "}
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
            1% for Runtime
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
          <ButtonLink variant="contained" href="/console/user/templates">
            Start with Templates
          </ButtonLink>
          <Typography
            align={"center"}
            variant="subtitle1"
            fontSize={16}
            sx={{ maxWidth: 370, mt: 2 }}
          >
            To be eligible your template must have at least 1 day of runtime.
          </Typography>
        </Stack>
      </Stack>

      <Stack alignItems="center" sx={{ mt: 10 }}>
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
          3% with Referral + Template
        </Typography>
        <Typography align={"center"} sx={{ fontSize: 16, mt: 1 }} variant="subtitle1">
          Both programs can be used to get max benefits.
        </Typography>
        <Typography
          align={"center"}
          variant="subtitle1"
          fontSize={12}
          sx={{ maxWidth: 350, mt: 14 }}
        >
          <strong>Note</strong>: Any fraud including breaking RunPod TOS or other entities where you
          share referral links can lead to being banned from both programs.
        </Typography>
      </Stack>
    </>
  )
}
