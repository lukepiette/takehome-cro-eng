import { Box, Typography } from "@mui/material";
import { HTMLHead, SqueezePage } from "@pages/ppc/[slug]";
import { styled } from "@mui/system";

const Text = styled(Typography)({
	width: "100%",
	fontStyle: "normal",
	fontWeight: 500,
	fontSize: "14px",
	lineHeight: "20px",
	textAlign: "center",
	letterSpacing: "-0.25px",
	color: "rgba(249, 250, 251, 0.48)"
});

export default {
	header: (
		<Typography
			variant="h1"
			sx={{
				fontSize: { xs: "32px", sm: "48px" },
				fontWeight: 600,
				lineHeight: "96%",
				letterSpacing: "-0.03em",
				textAlign: "center",
				color: "#FFFFFF",
				width: "100%"
			}}>
			Scale Your GPU Workloads to{" "}
			<Box
				component="span"
				sx={{
					background:
						"linear-gradient(90deg, #C3BDFF 0%, #9E69FF 100%)",
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
					backgroundClip: "text",
					color: "transparent",
					display: "inline"
				}}>
				Infinity
			</Box>
			. And Beyond.
		</Typography>
	),
	subHeader: (
		<Typography
			variant="body1"
			sx={{
				fontSize: { xs: "16px", sm: "18px" },
				fontWeight: 500,
				lineHeight: "24px",
				textAlign: "center",
				color: "rgba(249, 250, 251, 0.48)",
				width: "100%",
				maxWidth: "352.29px"
			}}>
			Access thousands of GPUs across 14 global regions—no enterprise
			upgrades, no manual requests,{" "}
			<span style={{ color: "#FFFFFF" }}>no limits</span>.
		</Typography>
	),
	buttonText: "See the GPU dashboard",
	logoText: (
		<Text variant="body2">
			Top AI researchers at{" "}
			<span style={{ color: "#FFFFFF" }}>Fortune 500 companies</span>{" "}
			harness RunPod{"'"}s scalability to push the boundaries of
			artificial intelligence—turning audacious ideas into reality at
			breathtaking speed.
		</Text>
	),
	testimonial: {
		name: "Daniel Chang",
		title: "Software Engineer at Databricks",
		picture: "/static/images/ppc/daniel-chang-headshot.webp",
		bigQuote: `"RunPod's ability to scale on-demand is unmatched."`,
		smallQuote: `"Whether I need 10 GPUs or 1000, they're available instantly. This level of flexibility has transformed how I approach large-scale workloads."`
	},
	header2: (
		<Typography
			variant="h1"
			sx={{
				fontSize: { xs: "32px", sm: "40px", md: "48px" },
				fontWeight: 600,
				lineHeight: "96%",
				letterSpacing: "-0.03em",
				textAlign: "left",
				color: "#FFFFFF",
				width: "100%"
			}}>
			Launch your first GPU in seconds,{" "}
			<Box
				component="span"
				sx={{
					background:
						"linear-gradient(90deg, #C3BDFF 0%, #9E69FF 100%)",
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
					backgroundClip: "text",
					color: "transparent",
					display: "inline"
				}}>
				scale to thousands{" "}
			</Box>
			in minutes.
		</Typography>
	),
	subHeader2: (
		<Typography
			variant="body1"
			sx={{
				fontSize: { xs: "16px", sm: "18px" },
				fontWeight: 500,
				lineHeight: "24px",
				textAlign: "left",
				color: "rgba(249, 250, 251, 0.48)",
				width: "100%"
			}}>
			Forget rate limits and upgrade headaches. With RunPod, your AI
			ambitions know no bounds. Scale from{" "}
			<span style={{ color: "#FFFFFF" }}>1 to 1,000 GPUs instantly</span>,
			across the globe. Our platform is built for the bold—those who push
			the boundaries of what{"'"}s possible in AI.
		</Typography>
	),
	meta: (
		<HTMLHead
			title="Scale Your GPU Workloads With RunPod"
			description="Scale your GPU workloads to infinity and beyond"
		/>
	)
} as SqueezePage;
