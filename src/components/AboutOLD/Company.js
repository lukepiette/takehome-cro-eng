import { Button, Typography, Stack, useTheme } from "@mui/material"

import Link from "@components/Link"
import Team from "./Team"

export default function About() {
  const theme = useTheme()

  return (
    <>
      <Stack alignItems={"center"} my={6} spacing={3}>
        <Typography
          sx={{
            backgroundClip: "text",
            backgroundImage: theme.colors.gradients.purple1,
            color: "transparent",
          }}
          align={"center"}
          variant="h1"
        >
          About RunPod
        </Typography>
        <Typography align="center" variant="subtitle1" fontSize={16} sx={{ maxWidth: 500, px: 3 }}>
          The current landscape is full of tools that you get stuck with using because there are no
          alternatives.
        </Typography>
        <Typography
          align={"center"}
          variant="subtitle1"
          fontSize={20}
          sx={{ maxWidth: 650, px: 3 }}
        >
          We are creating a platform that professionals and hobbyists alike enjoy using and{" "}
          <strong>can afford to use</strong>.
        </Typography>
      </Stack>

      <Stack alignItems={"center"} my={8} spacing={3}>
        <Button
          onClick={() => {
            window.$crisp.push(["do", "chat:open"])
          }}
          size="large"
          variant="outlined"
          sx={{ fontSize: 16 }}
        >
          Get in touch
        </Button>
      </Stack>

      <Stack alignItems={"center"} my={15} spacing={3}>
        <Typography align={"center"} variant="h2">
          Location
        </Typography>
        <Typography
          align={"center"}
          variant="subtitle1"
          fontSize={18}
          sx={{ maxWidth: 600, px: 3 }}
        >
          Our secure cloud runs in <strong>tiered datacenters located in Kansas, USA and Oslo, NOR</strong>.
          RunPod HQ is located in the Philadelphia area. <br />
          Our Community Cloud hosts are mostly located in the <strong>USA</strong>, but we are
          looking to expand worldwide!
        </Typography>
      </Stack>

      <Stack alignItems={"center"} my={15} spacing={3}>
        <Typography align={"center"} variant="h2">
          Passion
        </Typography>
        <Typography
          align={"center"}
          variant="subtitle1"
          fontSize={18}
          sx={{ maxWidth: 600, px: 3 }}
        >
          RunPod was started by a few passionate, scrappy engineers that think GPU computing is the
          future. There isn&apos;t enough competition and innovation in the GPU computing space and
          we plan to change that.
        </Typography>
      </Stack>

      <Stack alignItems={"center"} my={20} spacing={3}>
        <Typography align={"center"} variant="h2">
          Need Help?
        </Typography>
        <Typography
          align={"center"}
          variant="subtitle1"
          fontSize={18}
          sx={{ maxWidth: 600, px: 3 }}
        >
          Can&apos;t figure out how to get started or just want to stop by and chat? Feel free to
          reach out at <Link href="mailto:help@runpod.io">help@runpod.io</Link>, or join our{" "}
          <Link href="https://discord.gg/cUpRmau42V">Discord</Link>.<br />
          <br />
          Read about us on our <Link href="https://blog.runpod.io">Blog</Link>
          !<br />
          <br />
          We&apos;d love to hear about your passion projects
          <br />
          and help where we can!
        </Typography>
      </Stack>
    </>
  )
}
