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
			In just{" "}
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
				74 seconds
			</Box>
			, the average RunPod user is up and running with a powerful GPU.
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
			Think you can beat our 74-second average?{" "}
			<span style={{ color: "#FFFFFF" }}>
				Launch your GPU now and start the clock.
			</span>
		</Typography>
	),
	buttonText: "Launch a GPU",
	logoText: (
		<Text variant="body2">
			AI teams at leading companies choose RunPod for our unparalleled
			speed and developer experience—
			<span style={{ color: "#FFFFFF" }}>
				making AI development not just possible, but enjoyable.
			</span>
		</Text>
	),
	testimonial: {
		name: "Daniel Chang",
		title: "Software Engineer at Databricks",
		picture: "/static/images/ppc/daniel-chang-headshot.webp",
		bigQuote: `"RunPod is my go-to platform when I need to quickly iterate on models or test ideas"`,
		smallQuote: `"In my work, I regularly have to interact with robust cloud platforms like AWS, GCP, and Azure. They're powerful, but when I need to quickly iterate on models or test ideas, RunPod is my go-to platform."`
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
			GPU Computing Made So Simple,{" "}
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
				It Feels Like Magic.
			</Box>
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
			Getting started is as easy as flipping a switch. No labyrinthine
			menus, no guessing games—just simple, straightforward access to the
			GPUs you need, when you need them. Our platform is designed for
			speed and simplicity, so you can spin up resources in seconds, not
			hours.
		</Typography>
	),
	meta: (
		<HTMLHead
			title="Cost-Effective GPU Cloud Computing for AI Teams"
			description="Our prices make AI teams smile. We're not just inexpensive—we're setting a new standard for GPU cloud."
		/>
	)
} as SqueezePage;
