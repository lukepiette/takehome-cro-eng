import { Divider, Card, Stack, Typography, useTheme } from "@mui/material"
import Head from "next/head"

export default function ReferralInfo() {
  const theme = useTheme()
  return (
    <>
      <Head>
        <title>Serverless Referral Program</title>
        <meta
          name="description"
          content="Refer a friend to RunPod Serverless and $500 in credits."
        />
      </Head>

      <Stack
        alignItems={"center"}
        justifyContent="center"
      >
        <Typography align={"center"} sx={{ fontSize: 25, mt: 5 }}>
          Serverless Referral Program{" "}
          <Typography color="primary" display="inline-block" sx={{ fontSize: 14 }}>
            BETA
          </Typography>
        </Typography>
      </Stack>

      <Stack
        alignItems={"center"}
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        my={6}
        spacing={4}
      >
        <Stack>
          <Typography align={"center"} sx={{ fontSize: 18, mb: 1, textDecoration:"italic"}} variant="subtitle1">
            You earn
          </Typography>
          <Typography
            sx={{
              backgroundClip: "text",
              backgroundImage: theme.colors.gradients.purple1,
              color: "transparent",
              fontSize: 40,
              mb: 1
            }}
            align={"center"}
            variant="h1"
          >
            $500
          </Typography>
          <Typography align={"center"} sx={{ fontSize: 18 }} variant="subtitle1">
            in RunPod Credits
          </Typography>
        </Stack>
        <Divider orientation="vertical" flexItem />
        <Stack>
          <Typography align={"center"} sx={{ fontSize: 18, mb: 1, textDecoration:"italic"}} variant="subtitle1">
            They earn
          </Typography>
          <Typography
            sx={{
              backgroundClip: "text",
              backgroundImage: theme.colors.gradients.purple1,
              color: "transparent",
              fontSize: 40,
              mb: 1
            }}
            align={"center"}
            variant="h1"
          >
            $500
          </Typography>

          <Typography align={"center"} sx={{ fontSize: 18 }} style={{}} variant="subtitle1">
            in RunPod Credits
          </Typography>
        </Stack>
      </Stack>
      <Stack>
        <Typography align={"center"} sx={{ fontSize: 24, mb: 7, px:3 }} variant="subtitle1">
          When your referred user spends $1000 on Serverless.
        </Typography>
        
        <Card
          sx={{
            position: "relative",
            overflow: "visible",
            minWidth: { xs: "100%", md: "inherit" },
            p: 4,
            zIndex: 1,
            mb: 5,
            mt: 1
          }}
        >
          <Typography
            align={"center"}
            variant="subtitle1"
            fontSize={18}
          >
            To get started, reach out to <b>referrals@runpod.io</b> with the email associated with your RunPod account.
          </Typography>
        </Card>

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
          10 Referrals Spending $1000 ea.
        </Typography>
        <Typography
          align={"center"}
          color="primary"
          sx={{ fontSize: 20, mb: 8 }}
          variant="subtitle1"
        >
          $5000 earned
        </Typography>

      </Stack>
      <Stack alignItems="center">
        <Typography
          align={"center"}
          variant="subtitle1"
          fontSize={12}
          sx={{ maxWidth: 350 }}
        >
          <strong>Note</strong>: Any fraud including breaking RunPod TOS or referring an account that is owned and managed by you can lead to being banned from this program.
        </Typography>
      </Stack>
    </>
  )
}
