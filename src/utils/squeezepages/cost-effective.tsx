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
			AI Teams{" "}
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
				Save 36%{" "}
			</Box>
			on Average When They Switch to RunPod
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
			<span style={{ color: "#FFFFFF" }}>
				Our prices make AI teams smile
			</span>
			. We{"'"}re not just inexpensive—we{"'"}re setting a new standard
			for GPU cloud.
		</Typography>
	),
	buttonText: "See our GPU pricing dashboard",
	logoText: (
		<Text variant="body2">
			Senior ML engineers and top executives from the world{"'"}s leading
			companies{" "}
			<span style={{ color: "#FFFFFF" }}>slash millions in costs</span>{" "}
			every year by choosing RunPod for their critical AI workloads.
		</Text>
	),
	testimonial: {
		name: "Daniel Chang",
		title: "Software Engineer at Databricks",
		picture: "/static/images/ppc/daniel-chang-headshot.webp",
		bigQuote:
			"RunPod's cost-efficiency and pricing transparency are unmatched.",
		smallQuote:
			"Whether I need 10 GPUs or 1000, I can see exactly what I'm spending in real-time. This level of clarity and affordability has transformed how I approach large-scale workloads, allowing me to optimize costs without compromising on performance."
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
			Our pricing is as clear as a mountain stream—no hidden fees, no
			surprises.{" "}
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
				You only pay for what you use
			</Box>
			, never more.
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
			Your resource management dashboard lays everything bare, showing you
			exactly what you{"'"}re using, down to the last byte. No fees for
			getting started, no charges for data in or out. Just pure,
			unadulterated performance.
		</Typography>
	),
	meta: (
		<HTMLHead
			title="Cost-Effective GPU Cloud Computing for AI Teams"
			description="Our prices make AI teams smile. We're not just inexpensive—we're setting a new standard for GPU cloud."
		/>
	)
} as SqueezePage;
