import { Stack, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export default function Autoscale() {
  return (
    <Stack
      alignItems="center"
      position="relative"
      maxWidth={1240}
      mt={4}
      width="100%"
    >
      <Stack
        borderBottom="1px solid #1E293B"
        direction={{ xs: "column", md: "row" }}
        gap={3}
        justifyContent="space-between"
        pb={4}
        px={4}
        sx={{
          background:
            "radial-gradient(99.75% 99.75% at 50% 99.75%, rgba(30, 41, 59, 0.72) 0%, rgba(15, 23, 42, 7.2e-05) 100%)",
        }}
        width="100%"
      >
        <Stack alignItems="start" spacing={1} width={{ xs: "100%", md: "50%" }}>
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="center"
            spacing={2}
          >
            <TitleWithTextClip>Active Workers</TitleWithTextClip>
            <Typography
              bgcolor="#6A1AFF"
              borderRadius={0.3}
              boxShadow="1.44064px 13.6861px 22.3299px rgba(0, 0, 0, 0.5), inset -1.08048px -1.44064px 2.52112px rgba(9, 0, 114, 0.24)"
              color="#fff"
              fontSize={11}
              px={0.8}
              py={0.4}
            >
              -40% DISCOUNT
            </Typography>
          </Stack>
          <Typography
            color="#94A3B8"
            fontSize={{ xs: 14, md: 16 }}
            letterSpacing={-0.25}
          >
            Dedicated GPUs that handle consistent workloads 24/7.
            <br />
            Get them at a lower cost so you don&apos;t break the bank for stable
            usage.
          </Typography>
        </Stack>

        <Stack
          alignItems="start"
          pl={{ xs: 0, md: 7 }}
          spacing={1}
          width={{ xs: "100%", md: "50%" }}
        >
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="center"
            spacing={2}
          >
            <TitleWithTextClip>Flex Workers</TitleWithTextClip>
          </Stack>
          <Typography
            color="#94A3B8"
            fontSize={{ xs: 14, sm: 16 }}
            letterSpacing={-0.25}
          >
            Flexible GPUs that cost nothing when idle.
            <br />
            Ready to scale up as soon as your launch goes viral.
          </Typography>
        </Stack>
      </Stack>

      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={{ xs: 0, md: 3 }}
        width="100%"
      >
        <Stack
          borderBottom="1px solid #1E293B"
          pb={4}
          pl={8}
          pt={12}
          width={{ xs: "100%", md: "50%" }}
          sx={{
            background:
              "radial-gradient(99.75% 99.75% at 50% 99.75%, rgba(30, 41, 59, 0.72) 0%, rgba(15, 23, 42, 7.2e-05) 100%)",
          }}
        >
          <TitleWithTextClip>
            Zero Cold-Starts with Active Workers
          </TitleWithTextClip>

          <Typography
            color="#94A3B8"
            fontSize={16}
            letterSpacing={-0.25}
            mt={1}
          >
            No cold-start time — because the workers are always
            <br />
            running. Get instant execution when speed is all that matters.
          </Typography>
        </Stack>
        <Stack
          borderBottom="1px solid #1E293B"
          pb={4}
          pl={7}
          pr={10}
          pt={12}
          width={{ xs: "100%", md: "50%" }}
          sx={{
            background:
              "radial-gradient(99.75% 99.75% at 50% 99.75%, rgba(30, 41, 59, 0.72) 0%, rgba(15, 23, 42, 7.2e-05) 100%)",
          }}
        >
          <TitleWithTextClip>
            &lt;250ms Cold-Start with Flashboot
          </TitleWithTextClip>

          <Typography
            color="#94A3B8"
            fontSize={16}
            letterSpacing={-0.25}
            mt={1}
          >
            We built an optimization layer for our container system to manage
            deployments and scale up workers in real time.
          </Typography>
        </Stack>
      </Stack>

      <Stack direction={{ xs: "column", md: "row" }} gap={3} width="100%">
        <Stack
          borderBottom="1px solid #1E293B"
          pb={3.2}
          pl={3}
          pt={4}
          width={{ xs: "100%", md: "50%" }}
          sx={{
            background:
              "radial-gradient(99.75% 99.75% at 50% 99.75%, rgba(30, 41, 59, 0.72) 0%, rgba(15, 23, 42, 7.2e-05) 100%)",
          }}
        >
          <Typography
            color="#F7F9FB"
            direction="row"
            display="flex"
            fontSize={16}
            letterSpacing={-0.25}
            mt={1}
          >
            <Stack
              alignItems="center"
              bgcolor="rgba(249, 250, 251, 0.24)"
              borderRadius={100}
              height={24}
              justifyContent="center"
              mr={2}
              width={24}
            >
              <CheckIcon sx={{ fontSize: 14 }} />
            </Stack>
            Handle more consistent workloads like fine-tuning
          </Typography>
        </Stack>
        <Stack
          borderBottom="1px solid #1E293B"
          pb={3.2}
          pl={3}
          pr={18}
          pt={4}
          width={{ xs: "100%", md: "50%" }}
          sx={{
            background:
              "radial-gradient(99.75% 99.75% at 50% 99.75%, rgba(30, 41, 59, 0.72) 0%, rgba(15, 23, 42, 7.2e-05) 100%)",
          }}
        >
          <Typography
            color="#F7F9FB"
            direction="row"
            display="flex"
            fontSize={16}
            letterSpacing={-0.25}
            mt={1}
          >
            <Stack
              alignItems="center"
              bgcolor="rgba(249, 250, 251, 0.24)"
              borderRadius={100}
              height={24}
              justifyContent="center"
              mr={2}
              width={24}
            >
              <CheckIcon sx={{ fontSize: 14 }} />
            </Stack>
            Scale workers by Queue Delay or Request count
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

const TitleWithTextClip = ({ children }) => (
  <Typography
    color="#fff"
    fontSize={{ xs: 16, sm: 20 }}
    letterSpacing={-0.25}
    sx={{
      background:
        "linear-gradient(190deg, rgba(248, 250, 252, 0.64) 8.27%, #F8FAFC 57.24%, rgba(248, 250, 252, 0.64) 96.6%)",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      textFillColor: "transparent",
    }}
  >
    {children}
  </Typography>
);
