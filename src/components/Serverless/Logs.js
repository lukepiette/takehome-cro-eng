import { Stack, Typography, useTheme } from "@mui/material"
import dynamic from "next/dynamic"
import TerminalIcon from "@mui/icons-material/Terminal"

const LazyLog = dynamic(() => import("@components/LazyLog"), { loading: () => <div />, ssr: false })

const logs = `2022-12-18T19:56:00.826485895Z INFO | Started job db7c79
2022-12-18T19:56:03.166717597Z 
  0%|          | 0/28 [00:00<?, ?it/s]
 14%|██        | 4/28 [00:00<00:01, 12.06it/s]
 43%|████      | 12/28 [00:00<00:01, 12.14it/s]
 79%|████████  | 22/28 [00:01<00:00, 12.14it/s]
100%|██████████| 28/28 [00:02<00:00, 12.13it/s]
2022-12-18T19:56:04.137438407Z INFO | Completed job db7c79 in 2.9 s`

const Logs = () => {
  const theme = useTheme()

  return (
    <Stack alignItems={"center"} my={20} spacing={5}>
      <Stack alignItems={"center"} maxWidth={"90%"} width={600} spacing={4}>
        <Typography
          sx={{
            alignItems: "center",
            display: "flex",
            fontSize: 30,
            mb: 0.5,
          }}
          variant="h3"
        >
          Logs / SSH <TerminalIcon sx={{ fontSize: 32, ml: 1 }} />
        </Typography>

        <Typography align={"center"} sx={{ fontSize: 18 }}>
          Full debugging capabilities for your workers through logs and SSH. Web terminal is
          available for even easier access.
        </Typography>

        <Stack
          borderRadius={2}
          height={200}
          py={2.5}
          sx={{ background: "#222" }}
          maxWidth={600}
          minWidth={350}
          width="100%"
        >
          <LazyLog
            follow
            caseInsensitive
            highlightLineClassName="lazy-log-highlightLine"
            lineClassName="lazy-log-highlightLine"
            text={logs}
          />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Logs
