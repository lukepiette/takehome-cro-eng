import React from "react";
import { Grid, Typography, Box } from "@mui/material";

export default function Hero() {
	return (
		<Box
			sx={{
				flexGrow: 1,
				padding: 4,
				maxWidth: "75.5rem",
				margin: "0 auto",
				position: "relative"
			}}>
			<Grid container spacing={{ xs: 4, md: 8 }}>
				{" "}
				{/* Increased spacing to 8 */}
				<Grid item xs={12} md={5.5} sx={{ zIndex: 1 }}>
					<Box sx={{ marginBottom: 2 }}>
						<Typography
							sx={{
								fontWeight: "600",
								fontSize: "28px",
								lineHeight: "32px",
								letterSpacing: "-0.038em",
								background:
									"linear-gradient(119.2deg, rgba(255, 255, 255, 0.4) 32.07%, rgba(145, 78, 255, 0.4) 75.29%), #FFFFFF",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								backgroundClip: "text",
								textFillColor: "transparent",
								mixBlendMode: "normal",
								textAlign: "left"
							}}>
							Some of the most important companies of this decade
							will be built on RunPod.
						</Typography>
						<Typography sx={{ marginTop: 2 }}>
							We aim to be the developer{"'"}s launchpad for
							full-stack AI applications—the compute backbone that
							enables successful companies to run AI/ML workloads
							simply, globally, and at scale.
						</Typography>
						<Typography sx={{ marginTop: 2 }}>
							This vision has not only guided every decision we
							{"'"}ve made—from hiring to coding—but also serves
							as our daily motivation and the standard against
							which we measure our progress.
						</Typography>
						<Typography sx={{ marginTop: 2 }}>
							If our vision resonates with you and you{"'"}re
							passionate about creating groundbreaking solutions,
							we invite you to explore career opportunities with
							us. Become part of a team that values innovation,
							resilience, and collaboration. Let{"’"}s shape the
							future of AI cloud computing together and achieve
							the extraordinary.
						</Typography>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					md={6.5}
					display="flex"
					justifyContent="center"
					alignItems="center">
					<Box sx={{ zIndex: 1 }}>
						<img
							src="/static/images/team/team-together.webp"
							alt="RunPod team at offsite in Austin, Texas"
							style={{ width: "100%", borderRadius: "8px" }}
						/>
						<Typography
							display="block"
							align="left"
							sx={{ marginTop: 1 }}>
							RunPod team at offsite in Austin, Texas, on March 8,
							2024.
						</Typography>
					</Box>
				</Grid>
			</Grid>

			<div
				style={{
					width: "230rem",
					height: "42.12575rem",
					position: "absolute",
					left: "-115rem",
					top: "20rem",
					transform: "rotate(169.39deg)",
					background:
						"linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%,  rgba(4, 0, 16, 0.80) 52.12%, #170042 75%)",
					filter: "blur(64px)",
					zIndex: -1
				}}
			/>
		</Box>
	);
}
