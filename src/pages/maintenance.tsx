import { Stack, Typography, useTheme } from "@mui/material"
import Head from "next/head"
import type { NextPage } from "next"
import Image from "next/legacy/image"

import MaintenanceGraphic from "/public/static/svg/maintenance.svg"

const Maintenance: NextPage = () => {
  const theme = useTheme()

  return (
    <>
      <Head>
        <title>RunPod Maintenance</title>
        <meta name="description" content="RunPod is currently under maintenance." />
      </Head>
      <Stack
        alignItems={"center"}
        justifyContent="center"
        mt={2}
        spacing={1}
        sx={{ height: "65vh" }}
      >
        <Image width={350} alt="maintenance graphic" src={MaintenanceGraphic} />
        <Typography align={"center"} variant="h1">
          RunPod is currently under maintenance.
        </Typography>
        <Typography align={"center"} variant="subtitle2">
          We expect to return shortly. Thank you for your patience!
        </Typography>
      </Stack>
    </>
  )
}

export default Maintenance
