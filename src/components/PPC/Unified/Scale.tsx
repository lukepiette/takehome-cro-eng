import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const HeroWrapper = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	padding: "48px 16px",
	gap: "48px",
	width: "100%",
	maxWidth: "768.98px",
	margin: "0 auto",
	[theme.breakpoints.only("xs")]: {
		width: "90vw"
	},
	[theme.breakpoints.only("sm")]: {
		width: "70vw"
	},
	[theme.breakpoints.down("sm")]: {
		padding: "32px 16px",
		gap: "32px"
	}
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "48px",
	width: "100%",
	[theme.breakpoints.down("sm")]: {
		gap: "32px"
	}
}));

const Scale = () => {
	return (
		<HeroWrapper>
			<ContentWrapper>
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
					Forget rate limits and upgrade headaches. With RunPod, your
					AI ambitions know no bounds. Scale from{" "}
					<span style={{ color: "#FFFFFF" }}>
						1 to 1,000 GPUs instantly
					</span>
					, across the globe. Our platform is built for the bold—those
					who push the boundaries of what{"'"}s possible in AI.
				</Typography>
			</ContentWrapper>
		</HeroWrapper>
	);
};

export default Scale;