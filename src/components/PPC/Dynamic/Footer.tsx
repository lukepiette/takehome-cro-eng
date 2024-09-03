import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { RunPodIcon } from "@components/Layout/Logo";
import ButtonLink from "@components/ButtonLink";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Stack
			alignItems="center"
			position="relative"
			mt={isMobile ? 5 : 20}
			pb={isMobile ? 12 : 24}
			width="100%">
			<Box
				bottom={0}
				height={isMobile ? 735 : 1470}
				position="absolute"
				width="100%"
				sx={{
					background:
						"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.48) 25%, #000000 50%, #000824 75%, #7F52FF 100%)",
					opacity: 0.2
				}}
				zIndex={-99}
			/>

			<Stack
				alignItems="center"
				borderRadius={2.4}
				boxShadow="inset 9.62749px -9.62749px 25.6733px rgba(188, 47, 255, 0.49), inset 0px 0px 40.1146px #B09DFE, inset 0px 9.62749px 80.2291px #001F4E"
				height={isMobile ? 80 : 106}
				justifyContent="center"
				width={isMobile ? 80 : 106}
				sx={{
					background:
						"radial-gradient(88.69% 91.78% at 50.56% 15.16%, #000000 0%, #000000 59.12%, #000342 85.94%)"
				}}>
				<RunPodIcon
					style={{
						color: "#fff",
						height: isMobile ? 56 : 75,
						width: isMobile ? 56 : 75
					}}
				/>
			</Stack>
			<Stack
				mt={2}
				direction="row"
				flexWrap="wrap"
				justifyContent="center">
				<Typography
					fontSize={isMobile ? 26 : 48}
					fontWeight={600}
					letterSpacing="-0.03em"
					sx={{
						background:
							"linear-gradient(0deg, rgba(248, 250, 252, 0.64) 8.27%, #F8FAFC 57.24%, rgba(248, 250, 252, 0.64) 96.6%)",
						backgroundClip: "text",
						textFillColor: "transparent"
					}}>
					Get started with RunPod&nbsp;
				</Typography>
				<Typography
					color="#D3B8FF"
					fontSize={isMobile ? 26 : 48}
					fontWeight={600}
					letterSpacing="-0.03em">
					today.
				</Typography>
			</Stack>

			<Typography
				align="center"
				color="rgba(249, 250, 251, 0.64)"
				fontSize={14}
				fontWeight={500}
				letterSpacing="0.002em"
				maxWidth={350}
				mt={1}>
				We handle millions of gpu requests a day. Scale your machine
				learning workloads while keeping costs low with RunPod.
			</Typography>

			<ButtonLink
				href="/console/signup"
				variant="contained"
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					padding: isMobile
						? "32px 16px"
						: "64px 33.75px 64px 50.625px",
					gap: "4px",
					isolation: "isolate",
					width: isMobile ? "90%" : "571px",
					height: isMobile ? "auto" : "207px",
					background:
						"linear-gradient(180deg, rgba(187, 77, 255, 0) 0%, rgba(93, 41, 240, 0.25) 100%), radial-gradient(85.83% 85.83% at 50% 14.17%, #000000 0%, #000000 59.12%, #000000 85.94%)",
					boxShadow:
						"inset 0px 8px 2.40622px #B0CBFF, inset 0px 24px 24px #5D29F0",
					borderRadius: "9900px",
					mt: 6
				}}>
				<Typography
					sx={{
						fontWeight: 500,
						fontSize: isMobile ? "24px" : "40px",
						lineHeight: isMobile ? "32px" : "48px",
						textAlign: "center",
						color: "#F9FAFB"
					}}>
					Get Started
				</Typography>
				<KeyboardArrowRightIcon
					sx={{
						fontSize: isMobile ? 28 : 42.19,
						ml: 1,
						color: "#F9FAFB"
					}}
				/>
			</ButtonLink>
		</Stack>
	);
}
