import { Box, Stack, Typography } from "@mui/material";
import { useInterval } from "@hooks/useInterval";
import CountUp from "react-countup";
import createTrigger from "react-use-trigger";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import InboxIcon from "@mui/icons-material/Inbox";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import ShieldIcon from "@mui/icons-material/Shield";
import StorageIcon from "@mui/icons-material/Storage";
import TerminalIcon from "@mui/icons-material/Terminal";
import useFetch from "use-http";
import useTrigger from "react-use-trigger/useTrigger";
import ViewInArIcon from "@mui/icons-material/ViewInAr";

const requestTrigger = createTrigger();

export default function Everything({ data }) {
  const requestTriggerValue = useTrigger(requestTrigger);
  const { data: metrics } = useFetch(
    "https://api.runpod.ai/metrics",
    {
      cachePolicy: "no-cache",
    },
    [requestTriggerValue]
  );

  useInterval(() => requestTrigger(), 2000);

  return (
    <Stack alignItems="center" position="relative" mt={40} mb={7} width="100%">
      <Box position="absolute" top={-380} zIndex={-1}>
        <Clouds />
      </Box>
      <Box
        borderRadius={100}
        height={793}
        position="absolute"
        sx={{
          background:
            "radial-gradient(85.83% 85.83% at 50% 14.17%, #8C29F0 0%, rgba(128, 0, 255, 0.5) 30%, rgba(187, 77, 255, 0.3) 100%)",
          boxShadow:
            "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 1.20311px 1.20311px rgba(77, 148, 255, 0.25), inset 0px -9.02332px 15.0389px #ECD3F7, inset 0px -30.0777px 30.0777px #BD00FF",
          filter: "blur(200px)",
          transform: "rotate(-105deg)",
        }}
        top={-280}
        width={542}
        zIndex={-1}
      />

      <Box
        component="img"
        sx={{
          width: "168px",
          height: "55px",
        }}
        alt="cloud image everything header"
        src="/static/images/everything-clouds.png"
      />
      <Typography
        align="center"
        color="#fff"
        fontSize={{ xs: 36, sm: 48 }}
        fontWeight={600}
        letterSpacing="-0.03em"
        lineHeight="96%"
        mt={3}
        width={{ xs: "100%", sm: 500 }}
        px={{
          xs: 3,
          md: 0,
        }}
        mx={{
          xs: 0,
          md: 2,
        }}
      >
        Everything your app needs. All in{" "}
        <Box
          display="inline-flex"
          sx={{
            background: "linear-gradient(180deg, #C3BDFF -100%, #9E69FF 100%)",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          one cloud.
        </Box>
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        mt={8}
        rowGap={3}
        columnGap={{
          xs: 0,
          md: 4,
        }}
        width="100%"
        flexWrap={"wrap"}
        justifyContent={{ xs: "center", sm: "center" }}
        px={{
          xs: 3,
          sm: 0,
        }}
        mx={{
          xs: 0,
          md: 2,
        }}
      >
        <Block subTitle="guaranteed uptime" title="99.99%" />
        <Block subTitle="network storage" title="10PB+" />
        <Block
          subTitle="requests"
          title={
            <CountUp
              decimals={0}
              delay={0}
              duration={3}
              end={metrics?.requests || data?.metrics?.requests}
              preserveValue={true}
              separator=","
              start={data?.metrics?.requests - 500}
            />
          }
        />
      </Stack>

      <Stack
        alignItems="center"
        direction="row"
        flexWrap="wrap"
        gap={4}
        justifyContent="center"
        maxWidth={"75.5rem"}
        mt={15}
        width="100%"
        px={{
          xs: 3,
          sm: 0,
        }}
        mx={{
          xs: 0,
          md: 2,
        }}
      >
        <TextBlock
          icon={<ViewInArIcon sx={{ fontSize: 10 }} />}
          title="AI Inference"
        >
          We handle millions of inference requests a day. Scale your machine
          learning inference while keeping costs low with RunPod serverless.
        </TextBlock>
        <TextBlock
          icon={<SettingsEthernetIcon sx={{ fontSize: 10 }} />}
          title="AI Training"
        >
          Run machine learning training tasks that can take up to 7 days. Train
          on our available NVIDIA H100s and A100s or reserve AMD MI300Xs and AMD
          MI250s a year in advance.
        </TextBlock>
        <TextBlock
          icon={<EqualizerIcon sx={{ fontSize: 10 }} />}
          title="Autoscale"
        >
          Serverless GPU workers scale from 0 to n with 8+ regions distributed
          globally. You only pay when your endpoint receives and processes a
          request.
        </TextBlock>
        <TextBlock
          icon={<InboxIcon sx={{ fontSize: 10 }} />}
          title="Bring Your Own Container"
        >
          Deploy any container on our AI cloud. Public and private image
          repositories are supported. Configure your environment the way you
          want.
        </TextBlock>
        <TextBlock
          icon={<SentimentSatisfiedAltIcon sx={{ fontSize: 10 }} />}
          title="Zero Ops Overhead"
        >
          RunPod handles all the operational aspects of your infrastructure from
          deploying to scaling. You bring the models, let us handle the ML
          infra.
        </TextBlock>
        <TextBlock
          icon={<StorageIcon sx={{ fontSize: 10 }} />}
          title="Network Storage"
        >
          Serverless workers can access network storage volume backed by NVMe
          SSD with up to 100Gbps network throughput. 100TB+ storage size is
          supported, contact us if you need 1PB+.
        </TextBlock>
        <TextBlock
          icon={<TerminalIcon sx={{ fontSize: 10 }} />}
          title="Easy-to-use CLI"
        >
          Use our CLI tool to automatically hot reload local changes while
          developing, and deploy on Serverless when you’re done tinkering.
        </TextBlock>
        <TextBlock
          icon={<ShieldIcon sx={{ fontSize: 10 }} />}
          title="Secure & Compliant"
        >
          RunPod AI Cloud is built on enterprise-grade GPUs with world-class
          compliance and security to best serve your machine learning models.
        </TextBlock>
        <TextBlock
          icon={<FlashOnIcon sx={{ fontSize: 10 }} />}
          title="Lightning Fast Cold-Start"
        >
          With Flashboot, watch your cold-starts drop to sub 250 milliseconds.
          No more waiting for GPUs to warm up when usage is unpredictable.
        </TextBlock>
      </Stack>
    </Stack>
  );
}

const TextBlock = ({ children, icon, title }) => (
  <Stack direction="column">
    <Box
      sx={{
        background:
          "radial-gradient(99.75% 99.75% at 50% 99.75%, rgba(30, 41, 59, 0.24) 0%, rgba(15, 23, 42, 2.4e-05) 100%), rgba(0, 0, 0, 0.01)",
        backdropFilter: "blur(50px)",
        border: "1px solid rgba(249, 250, 251, 0.08)",
        borderRadius: "12px",
        boxShadow: "0px 4px 100px rgba(0, 0, 0, 0.25)",
        height: 187,
        padding: 3,
      }}
      width={{
        xs: "100%",
        sm: 378,
      }}
    >
      <Stack alignItems="center" direction="row">
        <Stack
          alignItems="center"
          bgcolor="rgba(255, 255, 255, 0.03)"
          borderRadius={100}
          boxShadow="inset 0px -6px 24px rgba(255, 255, 255, 0.24), inset 0px 1px 2px #B4ACB7"
          color="#fff"
          justifyContent="center"
          height={18}
          mr={1.8}
          width={18}
        >
          {icon}
        </Stack>
        <Typography
          color="#fff"
          fontSize={16}
          fontWeight={600}
          letterSpacing="-0.02em"
        >
          {title}
        </Typography>
      </Stack>
      <Typography
        color="rgba(249, 250, 251, 0.64)"
        fontSize={14}
        letterSpacing="-0.02em"
        lineHeight="160%"
        mt={1.8}
      >
        {children}
      </Typography>
    </Box>
  </Stack>
);

const Block = ({ title, subTitle }) => (
  <Stack direction="row" gap={2.4}>
    <Box
      sx={{
        background:
          "linear-gradient(313.71deg, rgba(248, 250, 252, 0.64) 8.27%, #F8FAFC 57.24%, rgba(248, 250, 252, 0.64) 96.6%)",
      }}
      width={2.5}
    />
    <Stack width={160}>
      <Typography
        fontSize={20}
        fontWeight={500}
        letterSpacing="-0.02em"
        sx={{
          background:
            "linear-gradient(313.71deg, rgba(248, 250, 252, 0.64) 8.27%, #F8FAFC 57.24%, rgba(248, 250, 252, 0.64) 96.6%)",
          backgroundClip: "text",
          textFillColor: "transparent",
        }}
      >
        {title}
      </Typography>
      <Typography
        color="rgba(249, 250, 251, 0.48)"
        fontSize={16}
        letterSpacing={-0.25}
        fontWeight={400}
      >
        {subTitle}
      </Typography>
    </Stack>
  </Stack>
);

const Clouds = () => (
  <svg
    width="3000"
    height="1389"
    viewBox="0 0 1728 1389"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.32">
      <mask id="path-1-inside-1_949_2215" fill="white">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M900.13 271.773C791.566 193.92 660.635 151.272 525.307 151.272C354.724 151.272 191.126 219.037 70.5053 339.658C-26.762 436.925 -89.6587 562.138 -110.368 696.426C-238.632 726.203 -357.199 791.349 -451.809 885.959C-584.936 1019.09 -659.726 1199.65 -659.726 1387.92L-235.959 1387.92V1388.03L780.701 1388.03H1797.36V1387.92H2303.16C2303.16 1199.65 2228.37 1019.09 2095.24 885.961C1999.07 789.787 1878.14 724.058 1747.43 694.979C1717.58 591.213 1661.81 495.661 1584.1 417.948C1463.48 297.326 1299.88 229.562 1129.3 229.562C1050.21 229.562 972.626 244.128 900.13 271.773Z"
        />
      </mask>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M900.13 271.773C791.566 193.92 660.635 151.272 525.307 151.272C354.724 151.272 191.126 219.037 70.5053 339.658C-26.762 436.925 -89.6587 562.138 -110.368 696.426C-238.632 726.203 -357.199 791.349 -451.809 885.959C-584.936 1019.09 -659.726 1199.65 -659.726 1387.92L-235.959 1387.92V1388.03L780.701 1388.03H1797.36V1387.92H2303.16C2303.16 1199.65 2228.37 1019.09 2095.24 885.961C1999.07 789.787 1878.14 724.058 1747.43 694.979C1717.58 591.213 1661.81 495.661 1584.1 417.948C1463.48 297.326 1299.88 229.562 1129.3 229.562C1050.21 229.562 972.626 244.128 900.13 271.773Z"
        fill="url(#paint0_linear_949_2215)"
      />
      <path
        d="M900.13 271.773L898.673 273.805L899.765 274.588L901.021 274.109L900.13 271.773ZM525.307 151.272V148.772V151.272ZM70.5053 339.658L72.2731 341.426L70.5053 339.658ZM-110.368 696.426L-109.802 698.861L-108.155 698.478L-107.897 696.807L-110.368 696.426ZM-451.809 885.959L-450.041 887.727L-451.809 885.959ZM-659.726 1387.92H-662.226L-662.226 1390.42H-659.726L-659.726 1387.92ZM-235.959 1387.92H-233.459V1385.42H-235.959V1387.92ZM-235.959 1388.03H-238.459V1390.53H-235.959V1388.03ZM780.701 1388.03V1390.53V1388.03ZM1797.36 1388.03V1390.53H1799.86V1388.03H1797.36ZM1797.36 1387.92V1385.42H1794.86V1387.92H1797.36ZM2303.16 1387.92V1390.42H2305.66V1387.92H2303.16ZM2095.24 885.961L2093.47 887.729L2095.24 885.961ZM1747.43 694.979L1745.03 695.67L1745.44 697.097L1746.89 697.42L1747.43 694.979ZM1584.1 417.948L1582.33 419.715L1584.1 417.948ZM1129.3 229.562V227.062V229.562ZM901.587 269.741C792.601 191.586 661.161 148.772 525.307 148.772V153.772C660.109 153.772 790.531 196.255 898.673 273.805L901.587 269.741ZM525.307 148.772C354.061 148.772 189.827 216.8 68.7375 337.89L72.2731 341.426C192.425 221.273 355.387 153.772 525.307 153.772V148.772ZM68.7375 337.89C-28.9079 435.535 -92.049 561.235 -112.838 696.045L-107.897 696.807C-87.2684 563.041 -24.6161 438.315 72.2731 341.426L68.7375 337.89ZM-110.933 693.99C-239.649 723.872 -358.633 789.248 -453.576 884.192L-450.041 887.727C-355.764 793.45 -237.616 728.533 -109.802 698.861L-110.933 693.99ZM-453.576 884.192C-587.172 1017.79 -662.226 1198.98 -662.226 1387.92H-657.226C-657.226 1200.31 -582.699 1020.39 -450.041 887.727L-453.576 884.192ZM-659.726 1390.42L-235.959 1390.42V1385.42L-659.726 1385.42L-659.726 1390.42ZM-238.459 1387.92V1388.03H-233.459V1387.92H-238.459ZM-235.959 1390.53L780.701 1390.53V1385.53L-235.959 1385.53V1390.53ZM780.701 1390.53H1797.36V1385.53H780.701V1390.53ZM1799.86 1388.03V1387.92H1794.86V1388.03H1799.86ZM1797.36 1390.42H2303.16V1385.42H1797.36V1390.42ZM2305.66 1387.92C2305.66 1198.98 2230.61 1017.79 2097.01 884.194L2093.47 887.729C2226.13 1020.39 2300.66 1200.31 2300.66 1387.92H2305.66ZM2097.01 884.194C2000.5 787.68 1879.14 721.72 1747.97 692.539L1746.89 697.42C1877.14 726.396 1997.64 791.893 2093.47 887.729L2097.01 884.194ZM1749.83 694.288C1719.87 590.119 1663.88 494.195 1585.87 416.18L1582.33 419.715C1659.74 497.126 1715.3 592.307 1745.03 695.67L1749.83 694.288ZM1585.87 416.18C1464.78 295.09 1300.54 227.062 1129.3 227.062V232.062C1299.22 232.062 1462.18 299.563 1582.33 419.715L1585.87 416.18ZM1129.3 227.062C1049.9 227.062 972.017 241.684 899.239 269.437L901.021 274.109C973.235 246.571 1050.52 232.062 1129.3 232.062V227.062Z"
        fill="url(#paint1_linear_949_2215)"
        mask="url(#path-1-inside-1_949_2215)"
      />
    </g>
    <g opacity="0.32">
      <mask id="path-3-inside-2_949_2215" fill="white">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M922.107 320.764C836.441 259.331 733.126 225.678 626.341 225.678C491.737 225.678 362.645 279.15 267.465 374.33C190.713 451.082 141.082 549.885 124.741 655.849C23.5299 679.346 -70.0284 730.752 -144.683 805.407C-249.732 910.455 -308.747 1052.93 -308.747 1201.49L25.6396 1201.49V1201.58L827.868 1201.58H1630.1V1201.49H2029.21C2029.21 1052.93 1970.2 910.456 1865.15 805.408C1789.26 729.518 1693.84 677.653 1590.7 654.708C1567.15 572.828 1523.14 497.429 1461.82 436.107C1366.64 340.927 1237.54 287.456 1102.94 287.456C1040.53 287.456 979.313 298.949 922.107 320.764Z"
        />
      </mask>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M922.107 320.764C836.441 259.331 733.126 225.678 626.341 225.678C491.737 225.678 362.645 279.15 267.465 374.33C190.713 451.082 141.082 549.885 124.741 655.849C23.5299 679.346 -70.0284 730.752 -144.683 805.407C-249.732 910.455 -308.747 1052.93 -308.747 1201.49L25.6396 1201.49V1201.58L827.868 1201.58H1630.1V1201.49H2029.21C2029.21 1052.93 1970.2 910.456 1865.15 805.408C1789.26 729.518 1693.84 677.653 1590.7 654.708C1567.15 572.828 1523.14 497.429 1461.82 436.107C1366.64 340.927 1237.54 287.456 1102.94 287.456C1040.53 287.456 979.313 298.949 922.107 320.764Z"
        fill="url(#paint2_linear_949_2215)"
      />
      <path
        d="M922.107 320.764L920.958 322.367L921.82 322.985L922.81 322.607L922.107 320.764ZM626.341 225.678V227.651V225.678ZM267.465 374.33L266.07 372.935L267.465 374.33ZM124.741 655.849L125.187 657.771L126.488 657.469L126.691 656.15L124.741 655.849ZM-144.683 805.407L-143.289 806.802L-144.683 805.407ZM-308.747 1201.49H-310.72L-310.72 1203.46H-308.747L-308.747 1201.49ZM25.6396 1201.49H27.6123V1199.52H25.6396V1201.49ZM25.6396 1201.58H23.6669V1203.56H25.6396V1201.58ZM827.868 1201.58V1203.56V1201.58ZM1630.1 1201.58V1203.56H1632.07V1201.58H1630.1ZM1630.1 1201.49V1199.52H1628.12V1201.49H1630.1ZM2029.21 1201.49V1203.47H2031.19V1201.49H2029.21ZM1590.7 654.708L1588.8 655.253L1589.12 656.379L1590.27 656.633L1590.7 654.708ZM1461.82 436.107L1460.42 437.502L1461.82 436.107ZM1102.94 287.456V285.483V287.456ZM923.257 319.161C837.258 257.489 733.541 223.706 626.341 223.706V227.651C732.711 227.651 835.624 261.173 920.958 322.367L923.257 319.161ZM626.341 223.706C491.213 223.706 361.62 277.385 266.07 372.935L268.86 375.725C363.67 280.915 492.26 227.651 626.341 227.651V223.706ZM266.07 372.935C189.02 449.985 139.196 549.173 122.792 655.549L126.691 656.15C142.969 550.598 192.406 452.178 268.86 375.725L266.07 372.935ZM124.295 653.928C22.7275 677.507 -71.1603 729.094 -146.078 804.012L-143.289 806.802C-68.8965 732.41 24.3323 681.185 125.187 657.771L124.295 653.928ZM-146.078 804.012C-251.496 909.43 -310.72 1052.41 -310.72 1201.49H-306.774C-306.774 1053.45 -247.967 911.48 -143.289 806.802L-146.078 804.012ZM-308.747 1203.46L25.6396 1203.46V1199.52L-308.747 1199.52L-308.747 1203.46ZM23.6669 1201.49V1201.58H27.6123V1201.49H23.6669ZM25.6396 1203.56L827.868 1203.56V1199.61L25.6396 1199.61V1203.56ZM827.868 1203.56H1630.1V1199.61H827.868V1203.56ZM1632.07 1201.58V1201.49H1628.12V1201.58H1632.07ZM1630.1 1203.47H2029.21V1199.52H1630.1V1203.47ZM2031.19 1201.49C2031.19 1052.41 1971.96 909.431 1866.54 804.013L1863.75 806.803C1968.43 911.481 2027.24 1053.46 2027.24 1201.49H2031.19ZM1866.54 804.013C1790.39 727.856 1694.63 675.809 1591.13 652.782L1590.27 656.633C1693.04 679.498 1788.13 731.181 1863.75 806.803L1866.54 804.013ZM1592.59 654.162C1568.95 571.964 1524.77 496.273 1463.21 434.712L1460.42 437.502C1521.5 498.586 1565.34 573.691 1588.8 655.253L1592.59 654.162ZM1463.21 434.712C1367.66 339.162 1238.07 285.483 1102.94 285.483V289.429C1237.02 289.429 1365.61 342.692 1460.42 437.502L1463.21 434.712ZM1102.94 285.483C1040.29 285.483 978.832 297.021 921.405 318.92L922.81 322.607C979.793 300.877 1040.78 289.429 1102.94 289.429V285.483Z"
        fill="url(#paint3_linear_949_2215)"
        mask="url(#path-3-inside-2_949_2215)"
      />
    </g>
    <g opacity="0.32">
      <mask id="path-5-inside-3_949_2215" fill="white">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M900.13 121.271C791.565 43.4183 660.635 0.770518 525.307 0.770508C354.724 0.770495 191.126 68.5347 70.5053 189.156C-26.762 286.423 -89.6587 411.636 -110.368 545.924C-238.632 575.701 -357.199 640.847 -451.809 735.457C-584.936 868.584 -659.726 1049.14 -659.726 1237.41L-235.96 1237.41V1237.53L780.7 1237.53H1797.36V1237.42H2303.16C2303.16 1049.15 2228.37 868.586 2095.24 735.459C1999.07 639.285 1878.14 573.556 1747.43 544.477C1717.58 440.711 1661.81 345.159 1584.1 267.445C1463.48 146.824 1299.88 79.0601 1129.3 79.0601C1050.21 79.0601 972.626 93.6256 900.13 121.271Z"
        />
      </mask>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M900.13 121.271C791.565 43.4183 660.635 0.770518 525.307 0.770508C354.724 0.770495 191.126 68.5347 70.5053 189.156C-26.762 286.423 -89.6587 411.636 -110.368 545.924C-238.632 575.701 -357.199 640.847 -451.809 735.457C-584.936 868.584 -659.726 1049.14 -659.726 1237.41L-235.96 1237.41V1237.53L780.7 1237.53H1797.36V1237.42H2303.16C2303.16 1049.15 2228.37 868.586 2095.24 735.459C1999.07 639.285 1878.14 573.556 1747.43 544.477C1717.58 440.711 1661.81 345.159 1584.1 267.445C1463.48 146.824 1299.88 79.0601 1129.3 79.0601C1050.21 79.0601 972.626 93.6256 900.13 121.271Z"
        fill="url(#paint4_linear_949_2215)"
      />
      <path
        d="M900.13 121.271L898.673 123.303L899.765 124.086L901.021 123.607L900.13 121.271ZM525.307 0.770508L525.307 -1.72949L525.307 0.770508ZM70.5053 189.156L72.2731 190.924L72.2731 190.924L70.5053 189.156ZM-110.368 545.924L-109.802 548.359L-108.155 547.976L-107.897 546.305L-110.368 545.924ZM-451.809 735.457L-453.576 733.69L-453.576 733.69L-451.809 735.457ZM-659.726 1237.41L-662.226 1237.41L-662.226 1239.91L-659.726 1239.91L-659.726 1237.41ZM-235.96 1237.41H-233.46V1234.91L-235.96 1234.91L-235.96 1237.41ZM-235.96 1237.53H-238.46V1240.03L-235.96 1240.03L-235.96 1237.53ZM780.7 1237.53L780.7 1240.03H780.7V1237.53ZM1797.36 1237.53V1240.03H1799.86V1237.53H1797.36ZM1797.36 1237.42V1234.92H1794.86V1237.42H1797.36ZM2303.16 1237.42V1239.92H2305.66V1237.42H2303.16ZM2095.24 735.459L2093.47 737.227L2093.47 737.227L2095.24 735.459ZM1747.43 544.477L1745.03 545.169L1745.44 546.595L1746.89 546.918L1747.43 544.477ZM1584.1 267.445L1582.33 269.213L1582.33 269.213L1584.1 267.445ZM1129.3 79.0601L1129.3 76.5601H1129.3V79.0601ZM901.587 119.239C792.6 41.0842 661.161 -1.72948 525.307 -1.72949L525.307 3.27051C660.109 3.27052 790.53 45.7525 898.673 123.303L901.587 119.239ZM525.307 -1.72949C354.061 -1.7295 189.827 66.2981 68.7375 187.388L72.2731 190.924C192.425 70.7713 355.387 3.27049 525.307 3.27051L525.307 -1.72949ZM68.7375 187.388C-28.9079 285.034 -92.049 410.733 -112.838 545.543L-107.897 546.305C-87.2684 412.539 -24.6161 287.813 72.2731 190.924L68.7375 187.388ZM-110.933 543.488C-239.649 573.371 -358.633 638.746 -453.576 733.69L-450.041 737.225C-355.764 642.948 -237.616 578.031 -109.802 548.359L-110.933 543.488ZM-453.576 733.69C-587.172 867.286 -662.226 1048.48 -662.226 1237.41L-657.226 1237.41C-657.226 1049.81 -582.699 869.883 -450.041 737.225L-453.576 733.69ZM-659.726 1239.91L-235.96 1239.91L-235.96 1234.91L-659.726 1234.91L-659.726 1239.91ZM-238.46 1237.41V1237.53H-233.46V1237.41H-238.46ZM-235.96 1240.03L780.7 1240.03L780.7 1235.03L-235.96 1235.03L-235.96 1240.03ZM780.7 1240.03H1797.36V1235.03H780.7V1240.03ZM1799.86 1237.53V1237.42H1794.86V1237.53H1799.86ZM1797.36 1239.92H2303.16V1234.92H1797.36V1239.92ZM2305.66 1237.42C2305.66 1048.48 2230.61 867.288 2097.01 733.692L2093.47 737.227C2226.13 869.885 2300.66 1049.81 2300.66 1237.42H2305.66ZM2097.01 733.692C2000.5 637.178 1879.14 571.218 1747.97 542.037L1746.89 546.918C1877.14 575.894 1997.64 641.391 2093.47 737.227L2097.01 733.692ZM1749.83 543.786C1719.87 439.617 1663.88 343.693 1585.87 265.678L1582.33 269.213C1659.74 346.624 1715.3 441.805 1745.03 545.169L1749.83 543.786ZM1585.87 265.678C1464.78 144.588 1300.54 76.5601 1129.3 76.5601L1129.3 81.5601C1299.22 81.5601 1462.18 149.061 1582.33 269.213L1585.87 265.678ZM1129.3 76.5601C1049.9 76.5601 972.017 91.1822 899.239 118.935L901.021 123.607C973.235 96.0689 1050.52 81.5601 1129.3 81.5601V76.5601Z"
        fill="url(#paint5_linear_949_2215)"
        mask="url(#path-5-inside-3_949_2215)"
      />
    </g>
    <g opacity="0.32">
      <mask id="path-7-inside-4_949_2215" fill="white">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M853.083 334.809C809.658 303.668 757.285 286.609 703.154 286.609C634.92 286.609 569.481 313.714 521.233 361.963C482.326 400.87 457.167 450.955 448.884 504.67C397.578 516.581 350.151 542.639 312.307 580.483C259.057 633.734 229.141 705.958 229.141 781.266L398.648 781.266V781.312L805.311 781.312H1211.98V781.267H1414.29C1414.29 705.959 1384.38 633.735 1331.13 580.484C1292.66 542.015 1244.29 515.723 1192 504.092C1180.06 462.585 1157.76 424.364 1126.67 393.279C1078.42 345.031 1012.98 317.925 944.75 317.925C913.115 317.925 882.082 323.751 853.083 334.809Z"
        />
      </mask>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M853.083 334.809C809.658 303.668 757.285 286.609 703.154 286.609C634.92 286.609 569.481 313.714 521.233 361.963C482.326 400.87 457.167 450.955 448.884 504.67C397.578 516.581 350.151 542.639 312.307 580.483C259.057 633.734 229.141 705.958 229.141 781.266L398.648 781.266V781.312L805.311 781.312H1211.98V781.267H1414.29C1414.29 705.959 1384.38 633.735 1331.13 580.484C1292.66 542.015 1244.29 515.723 1192 504.092C1180.06 462.585 1157.76 424.364 1126.67 393.279C1078.42 345.031 1012.98 317.925 944.75 317.925C913.115 317.925 882.082 323.751 853.083 334.809Z"
        fill="url(#paint6_linear_949_2215)"
      />
      <path
        d="M853.083 334.809L852.501 335.622L852.938 335.935L853.44 335.744L853.083 334.809ZM703.154 286.609V285.609V286.609ZM521.233 361.963L520.526 361.256L521.233 361.963ZM448.884 504.67L449.11 505.644L449.769 505.491L449.872 504.822L448.884 504.67ZM312.307 580.483L313.015 581.19L312.307 580.483ZM229.141 781.266H228.141L228.141 782.266H229.141L229.141 781.266ZM398.648 781.266H399.648V780.266H398.648V781.266ZM398.648 781.312H397.648V782.312H398.648V781.312ZM805.311 781.312V782.312V781.312ZM1211.98 781.312V782.312H1212.98V781.312H1211.98ZM1211.98 781.267V780.267H1210.98V781.267H1211.98ZM1414.29 781.267V782.267H1415.29V781.267H1414.29ZM1331.13 580.484L1331.84 579.777L1331.13 580.484ZM1192 504.092L1191.04 504.368L1191.21 504.939L1191.79 505.068L1192 504.092ZM1126.67 393.279L1127.38 392.572L1126.67 393.279ZM944.75 317.925V316.925V317.925ZM853.666 333.997C810.072 302.734 757.496 285.609 703.154 285.609V287.609C757.075 287.609 809.244 304.602 852.501 335.622L853.666 333.997ZM703.154 285.609C634.655 285.609 568.962 312.82 520.526 361.256L521.94 362.67C570.001 314.609 635.186 287.609 703.154 287.609V285.609ZM520.526 361.256C481.468 400.314 456.211 450.594 447.896 504.517L449.872 504.822C458.124 451.316 483.184 401.426 521.94 362.67L520.526 361.256ZM448.658 503.696C397.171 515.649 349.578 541.799 311.6 579.776L313.015 581.19C350.725 543.48 397.985 517.513 449.11 505.644L448.658 503.696ZM311.6 579.776C258.162 633.215 228.141 705.693 228.141 781.266H230.141C230.141 706.223 259.951 634.254 313.015 581.19L311.6 579.776ZM229.141 782.266L398.648 782.266V780.266L229.141 780.266L229.141 782.266ZM397.648 781.266V781.312H399.648V781.266H397.648ZM398.648 782.312L805.311 782.312V780.312L398.648 780.312V782.312ZM805.311 782.312H1211.98V780.312H805.311V782.312ZM1212.98 781.312V781.267H1210.98V781.312H1212.98ZM1211.98 782.267H1414.29V780.267H1211.98V782.267ZM1415.29 781.267C1415.29 705.694 1385.27 633.216 1331.84 579.777L1330.42 581.192C1383.48 634.255 1413.29 706.224 1413.29 781.267H1415.29ZM1331.84 579.777C1293.23 541.172 1244.69 514.788 1192.22 503.115L1191.79 505.068C1243.89 516.658 1292.09 542.857 1330.42 581.192L1331.84 579.777ZM1192.96 503.815C1180.98 462.148 1158.58 423.778 1127.38 392.572L1125.96 393.986C1156.93 424.951 1179.15 463.023 1191.04 504.368L1192.96 503.815ZM1127.38 392.572C1078.94 344.136 1013.25 316.925 944.75 316.925V318.925C1012.72 318.925 1077.9 345.925 1125.96 393.986L1127.38 392.572ZM944.75 316.925C912.993 316.925 881.838 322.774 852.727 333.875L853.44 335.744C882.325 324.729 913.238 318.925 944.75 318.925V316.925Z"
        fill="url(#paint7_linear_949_2215)"
        mask="url(#path-7-inside-4_949_2215)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_949_2215"
        x1="821.717"
        y1="151.272"
        x2="821.717"
        y2="1388.03"
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset="0.125" stop-color="#10003C" />
        <stop offset="0.37775" stop-color="#7F52FF" stop-opacity="0.8" />
        <stop offset="0.65" stop-opacity="0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_949_2215"
        x1="2303.16"
        y1="769.652"
        x2="-659.726"
        y2="769.652"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#334155" stop-opacity="0.01" />
        <stop offset="0.526196" stop-color="#334155" stop-opacity="0.32" />
        <stop offset="1" stop-color="#334155" stop-opacity="0.01" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_949_2215"
        x1="860.233"
        y1="225.678"
        x2="860.233"
        y2="1201.58"
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset="0.125" stop-color="#10003C" />
        <stop offset="0.37775" stop-color="#7F52FF" stop-opacity="0.8" />
        <stop offset="0.65" stop-opacity="0" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_949_2215"
        x1="2029.21"
        y1="713.631"
        x2="-308.747"
        y2="713.631"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#334155" stop-opacity="0.01" />
        <stop offset="0.526196" stop-color="#334155" stop-opacity="0.32" />
        <stop offset="1" stop-color="#334155" stop-opacity="0.01" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_949_2215"
        x1="821.717"
        y1="0.770508"
        x2="821.717"
        y2="1237.53"
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset="0.125" stop-color="#10003C" />
        <stop offset="0.37775" stop-color="#7F52FF" stop-opacity="0.8" />
        <stop offset="0.65" stop-opacity="0" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_949_2215"
        x1="2303.16"
        y1="619.15"
        x2="-659.726"
        y2="619.15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#334155" stop-opacity="0.01" />
        <stop offset="0.526196" stop-color="#334155" stop-opacity="0.32" />
        <stop offset="1" stop-color="#334155" stop-opacity="0.01" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_949_2215"
        x1="821.718"
        y1="286.609"
        x2="821.718"
        y2="781.312"
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset="0.125" stop-color="#10003C" />
        <stop offset="0.37775" stop-color="#7F52FF" stop-opacity="0.8" />
        <stop offset="0.65" stop-opacity="0" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_949_2215"
        x1="1414.29"
        y1="533.96"
        x2="229.141"
        y2="533.96"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#334155" stop-opacity="0.01" />
        <stop offset="0.526196" stop-color="#334155" stop-opacity="0.32" />
        <stop offset="1" stop-color="#334155" stop-opacity="0.01" />
      </linearGradient>
    </defs>
  </svg>
);
