import { Stack, SvgIcon, Typography, useTheme } from "@mui/material"

import Link from "@components/Link"

export const RunPodIcon = (props: any) => (
  <SvgIcon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 200 200">
      <g>
        <path d="M74.5 51.1c-25.4 14.9-27 16-29.6 20.2-1.8 3-1.9 5.3-1.9 32.3 0 21.7.3 29.4 1.3 30.6 1.9 2.5 46.7 27.9 48.5 27.6 1.5-.3 1.7-3.1 2-27.7.2-21.9 0-27.8-1.1-29.5-.8-1.2-9.9-6.8-20.2-12.6-10.3-5.8-19.4-11.5-20.2-12.7-1.8-2.6-.9-5.9 1.8-7.4 1.6-.8 6.3 0 21.8 4C87.8 78.7 98 81 99.6 81c4.4 0 49.9-25.9 49.9-28.4 0-1.6-3.4-2.8-24-8.2-13.2-3.5-25.1-6.3-26.5-6.3-1.4.1-12.4 5.9-24.5 13z" />
        <path d="m137.2 68.1-3.3 2.1 6.3 3.7c3.5 2 6.3 4.3 6.3 5.1 0 .9-8 6.1-19.4 12.6-10.6 6-20 11.9-20.7 12.9-1.2 1.6-1.4 7.2-1.2 29.4.3 24.8.5 27.6 2 27.9 1.8.3 46.6-25.1 48.6-27.6.9-1.2 1.2-8.8 1.2-30.2s-.3-29-1.2-30.2c-1.6-1.9-12.1-7.8-13.9-7.8-.8 0-2.9 1-4.7 2.1z" />
      </g>
    </svg>
  </SvgIcon>
)

export default function Logo() {
  const theme = useTheme()

  return (
    <Stack direction="row" alignItems="center" justifyContent="center" spacing={0.5}>
      <Link
        href="/"
        sx={{
          display: "flex",
          textDecoration: "none",
        }}
      >
        <RunPodIcon style={{ width: "36px", height: "36px" }} color="primary"></RunPodIcon>

        <Typography fontSize={24} color={theme.palette.text.primary}>
          RunPod
        </Typography>
      </Link>
    </Stack>
  )
}
