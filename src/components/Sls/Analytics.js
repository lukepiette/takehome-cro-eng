import { Box, Stack, Typography } from "@mui/material";
import ButtonLink from "@components/ButtonLink";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Analytics() {
  return (
    <Stack alignItems="center" position="relative" mt={33} width="100%">
      <Box
        borderRadius={5000}
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25), 0px 1.20311px 1.20311px rgba(77, 148, 255, 0.25), inset 0px -9.02332px 15.0389px #ECD3F7, inset 0px -30.0777px 30.0777px #BD00FF"
        height={1502}
        position="absolute"
        top={-90}
        width={1502}
        zIndex={-1}
        sx={{
          background:
            "radial-gradient(85.83% 85.83% at 50% 14.17%, #6366F1 0%, rgba(128, 0, 255, 0.39) 28%, rgba(77, 148, 255, 0.25) 100%)",
          filter: "blur(180px)",
          opacity: 0.5,
        }}
      />

      <Typography
        align="center"
        fontSize={48}
        fontWeight={600}
        letterSpacing="-0.03em"
        lineHeight="96%"
        sx={{
          background:
            "linear-gradient(313.71deg, rgba(248, 250, 252, 0.64) 8.27%, #F8FAFC 57.24%, rgba(248, 250, 252, 0.64) 96.6%)",
          backgroundClip: "text",
          textFillColor: "transparent",
        }}
      >
        Monitor your endpoint with
        <br />
        comprehensive{" "}
        <Box
          display="inline-flex"
          sx={{
            background: "-webkit-linear-gradient(-90deg, #CAD9FF, #7F39FF)",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          real-time analytics
        </Box>
      </Typography>

      <Stack direction="row" mt={6} spacing={3}>
        <Stack
          alignItems="start"
          border="1px solid #1E293B"
          borderRadius={2.4}
          height={495}
          pt={5}
          px={6}
          width={395}
          sx={{
            background:
              "radial-gradient(99.75% 99.75% at 50% 99.75%, #1E293B 0%, rgba(15, 23, 42, 0.0001) 100%)",
          }}
        >
          <Typography
            fontSize={20}
            letterSpacing="-0.02em"
            sx={{
              background:
                "linear-gradient(0deg, rgba(248, 250, 252, 0.64) 8.27%, #F8FAFC 57.24%, rgba(248, 250, 252, 0.64) 96.6%)",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            Usage Analytics
          </Typography>
          <Typography
            color="94A3B8"
            fontSize={16}
            letterSpacing="-0.25px"
            mt={0.5}
          >
            Monitor your endpoint usage with real-time analytics on requests
            completed and failed. Useful for endpoints that have fluctuating
            usage profiles throughout the day.
          </Typography>

          <ButtonLink
            href="/console/serverless"
            variant="contained"
            sx={{
              background:
                "radial-gradient(92.09% 85.42% at 86.3% 87.5%, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0) 86.18%), radial-gradient(65.28% 65.28% at 26.39% 20.83%, rgba(255, 255, 255, 0.0472) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%), #5D29F0",
              borderRadius: 0.8,
              boxShadow:
                "0px 6px 0px rgba(0, 0, 0, 0.5), inset -3px -4px 7px rgba(9, 0, 114, 0.24)",
              fontWeight: 600,
              height: 40,
              my: 3,
              pl: 2,
              pr: 1.4,
            }}
          >
            See the Dashboard{" "}
            <KeyboardArrowRightIcon sx={{ fontSize: 20, ml: 0.6 }} />
          </ButtonLink>
        </Stack>

        <Stack
          alignItems="start"
          border="1px solid #1E293B"
          borderRadius={2.4}
          height={495}
          overflow="hidden"
          position="relative"
          width={781}
          sx={{
            background:
              "radial-gradient(99.75% 99.75% at 50% 99.75%, #1E293B 0%, rgba(15, 23, 42, 0.0001) 100%)",
          }}
        >
          <GraphLine sx={{ top: 170 }} />
          <GraphLine sx={{ top: 230 }} />
          <GraphLine sx={{ top: 290 }} />
          <GraphLine sx={{ top: 350 }} />
          <Stack
            border="1px solid #1E293B"
            borderRadius={2.4}
            boxShadow="0px 4px 100px rgba(0, 0, 0, 0.16)"
            height={110}
            ml={16}
            mt={8}
            pl={4}
            pt={2.8}
            width={475}
            sx={{
              backgropFilter: "blur(50px)",
              background:
                "radial-gradient(99.75% 99.75% at 50% 99.75%, #1E293B 0%, rgba(15, 23, 42, 0.0001) 100%)",
            }}
          >
            <Stack alignItems="center" direction="row">
              <Stack
                alignItems="center"
                border="1.2px solid rgba(255, 255, 255, 0.3)"
                borderRadius={100}
                boxShadow="0px 3.92px 7.84px rgba(0, 162, 94, 0.51)"
                height={8}
                justifyContent="center"
                mr={1}
                sx={{
                  background:
                    "linear-gradient(0deg, rgba(107, 243, 0, 0.45), rgba(107, 243, 0, 0.45)), linear-gradient(180deg, #53FFCB 0%, #008C62 100%)",
                }}
                width={8}
              />
              <Typography
                fontSize={20}
                letterSpacing="-0.02em"
                mr={0.6}
                sx={{
                  background:
                    "linear-gradient(313deg, rgba(248, 250, 252, 0.64) 8.27%, #F8FAFC 57.24%, rgba(248, 250, 252, 0.64) 96.6%)",
                  backgroundClip: "text",
                  opacity: 0.4,
                  textFillColor: "transparent",
                }}
              >
                Active
              </Typography>
              <Typography
                fontSize={20}
                letterSpacing="-0.02em"
                sx={{
                  background:
                    "linear-gradient(313deg, rgba(248, 250, 252, 0.64) 8.27%, #F8FAFC 57.24%, rgba(248, 250, 252, 0.64) 96.6%)",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
              >
                Requests
              </Typography>
            </Stack>

            <Stack alignItems="center" direction="row" mt={0.6}>
              <Typography color="#94A3B8" fontSize={16} letterSpacing="-0.25px">
                Total:
              </Typography>
              <Stack
                alignItems="center"
                border="1px solid rgba(255, 255, 255, 0.3)"
                borderRadius={100}
                height={8}
                justifyContent="center"
                mx={0.8}
                sx={{
                  background:
                    "linear-gradient(0deg, rgba(207, 185, 255, 0.45), rgba(207, 185, 255, 0.45)), linear-gradient(180deg, #538DFF 0%, #8F00FF 100%)",
                }}
                width={8}
              />
              <Typography color="#fff" fontSize={15} letterSpacing="-0.25px">
                2,277
              </Typography>

              <Typography
                color="#94A3B8"
                fontSize={16}
                letterSpacing="-0.25px"
                ml={4}
              >
                Completed:
              </Typography>
              <Stack
                alignItems="center"
                border="1px solid rgba(255, 255, 255, 0.3)"
                borderRadius={100}
                boxShadow="0px 3.9px 7.8px rgba(0, 162, 94, 0.51)"
                height={8}
                justifyContent="center"
                mx={0.8}
                sx={{
                  background:
                    "linear-gradient(0deg, rgba(0, 107, 68, 0.45), rgba(0, 107, 68, 0.45)), linear-gradient(180deg, #53FFCB 0%, #008C62 100%)",
                }}
                width={8}
              />
              <Typography color="#fff" fontSize={15} letterSpacing="-0.25px">
                2,269
              </Typography>

              <Typography
                color="#94A3B8"
                fontSize={16}
                letterSpacing="-0.25px"
                ml={4}
              >
                Failed:
              </Typography>
              <Stack
                alignItems="center"
                border="1px solid rgba(255, 255, 255, 0.3)"
                borderRadius={100}
                height={8}
                justifyContent="center"
                mx={0.8}
                sx={{
                  background:
                    "linear-gradient(0deg, rgba(255, 109, 62, 0.45), rgba(255, 109, 62, 0.45)), linear-gradient(180deg, #C61800 0%, #FF8A00 100%)",
                }}
                width={8}
              />
              <Typography color="#fff" fontSize={15} letterSpacing="-0.25px">
                8
              </Typography>
            </Stack>
          </Stack>
          <Box
            bottom={52}
            left={0}
            position="absolute"
            zIndex={0}
            sx={{ opacity: 0.8 }}
          >
            <SvgChart />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}

const GraphLine = ({ sx }) => (
  <Box
    bgcolor="#E5E7EB"
    height="1px"
    left={0}
    position="absolute"
    width="100%"
    zIndex={-1}
    sx={{ opacity: 0.14, ...sx }}
  />
);

const SvgChart = () => (
  <svg
    width="781"
    height="314"
    viewBox="0 0 781 314"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.8">
      <path
        d="M73.6963 184.177L-15.8011 236.122C-16.1906 236.348 -16.6095 236.518 -17.046 236.629C-19.2033 237.177 -20.7137 239.119 -20.7137 241.345V257.547C-20.7137 271.738 -9.20961 283.242 4.98149 283.242H1148.55C1178.73 283.242 1203.19 258.778 1203.19 228.601C1203.19 209.124 1192.83 191.12 1175.98 181.343L1090.04 131.46C1075.19 122.843 1059.35 116.068 1042.86 111.284L1006.82 100.822C960.291 87.3209 910.095 98.3849 873.559 130.194L848.322 152.165C817.432 179.058 772.854 183.316 737.431 162.757L730.78 158.896C691.442 136.064 641.166 147.235 615.198 184.578C576.116 240.78 490.513 232.24 463.304 169.424L457.945 157.052C428.428 88.9063 335.475 79.8303 293.333 140.979C270.223 174.511 228.24 189.479 189.129 178.129L169.561 172.45C137.346 163.101 102.708 167.338 73.6963 184.177Z"
        fill="url(#paint0_linear_140_2)"
      />
      <path
        d="M-16.3896 236.462L73.6947 184.177C102.707 167.338 137.344 163.101 169.56 172.45L189.128 178.129C228.238 189.479 270.222 174.511 293.331 140.979V140.979C335.473 79.8303 428.426 88.9063 457.944 157.052L463.303 169.424C490.512 232.24 576.114 240.78 615.197 184.578V184.578C641.164 147.235 691.44 136.064 730.779 158.896L737.43 162.757C772.852 183.316 817.43 179.058 848.321 152.165L873.557 130.194C910.093 98.3849 960.29 87.3209 1006.81 100.822L1042.86 111.284C1059.35 116.068 1075.19 122.843 1090.04 131.46L1203.19 197.137"
        stroke="#1C64F2"
      />
    </g>
    <g opacity="0.8">
      <path
        d="M-16.3894 236.5L87.9198 202.246C108.187 195.59 130.052 195.59 150.32 202.246L179.276 211.755C223.413 226.249 271.719 208.439 295.883 168.762L309.931 145.696C346.797 85.1645 434.463 84.5559 472.165 144.57V144.57C498.011 185.71 550.65 200.85 594.403 179.727L599.832 177.106C636.833 159.243 680.994 165.83 711.172 193.712L777.399 254.904C795.633 271.751 819.481 281.214 844.306 281.451L912.873 282.107C944.01 282.404 973.509 268.18 992.666 243.632L1050.1 170.034C1061.59 155.306 1076.98 144.092 1094.52 137.663L1205.41 97.02"
        stroke="#16BDCA"
        stroke-linejoin="round"
        stroke-dasharray="2 2"
      />
      <path
        d="M87.9206 202.246L-16.0998 236.405C-16.2855 236.466 -16.4416 236.595 -16.5373 236.765C-16.6029 236.882 -16.6373 237.013 -16.6373 237.147V247.011C-16.6373 268.275 0.600157 285.512 21.8638 285.512H1127.89C1170.71 285.512 1205.41 250.806 1205.41 207.994C1205.41 154.115 1151.8 116.668 1101.22 135.21L1090.61 139.098C1075.62 144.589 1062.48 154.168 1052.66 166.747L992.666 243.632C973.51 268.18 944.011 282.404 912.874 282.107L844.307 281.451C819.482 281.214 795.633 271.751 777.399 254.904L711.172 193.712C680.995 165.83 636.833 159.243 599.833 177.106L594.404 179.727C550.65 200.85 498.011 185.71 472.166 144.57C434.464 84.5559 346.797 85.1645 309.932 145.696L295.884 168.762C271.72 208.439 223.414 226.249 179.277 211.755L150.32 202.246C130.053 195.59 108.188 195.59 87.9206 202.246Z"
        fill="url(#paint1_linear_140_2)"
      />
      <path
        d="M-16.3894 276.5L87.9198 242.246C108.187 235.59 130.052 235.59 150.32 242.246L179.276 251.755C223.413 266.249 271.719 248.439 295.883 208.762L302.846 197.329C342.253 132.625 436.497 133.534 474.648 198.986L493.864 231.953C513.281 265.265 550.119 284.446 588.543 281.251L647.748 276.33C665.654 274.841 682.829 268.556 697.466 258.134L742.506 226.063C775.317 202.701 818.942 201.304 853.18 222.519L929.518 269.821C945.763 279.888 964.553 285.088 983.663 284.806L1207.42 281.51"
        stroke="white"
        stroke-opacity="0.4"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_140_2"
        x1="591.24"
        y1="0.51123"
        x2="591.24"
        y2="313.354"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1C64F2" stop-opacity="0.4" />
        <stop offset="1" stop-color="#1C64F2" stop-opacity="0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_140_2"
        x1="594.387"
        y1="14"
        x2="594.387"
        y2="285.512"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#16BDCA" stop-opacity="0.5" />
        <stop offset="1" stop-color="#16BDCA" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
);
