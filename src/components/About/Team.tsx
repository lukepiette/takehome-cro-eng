import React, { useState, useEffect } from "react";
import {
	Grid,
	IconButton,
	Typography,
	Box,
	Button,
	useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TeamMembers from "./TeamMembers";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface TeamMember {
	image: string;
	name: string;
	pronouns?: string;
	bio: string;
	twitter?: string;
	github?: string;
	linkedin?: string;
	spotifyPlaylist?: string;
}

const shuffleArray = (array: TeamMember[]): TeamMember[] => {
	let currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex !== 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex]
		];
	}

	return array;
};

export default function Team(): JSX.Element {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const [shuffledTeamMembers, setShuffledTeamMembers] = useState<
		TeamMember[]
	>([]);

	useEffect(() => {
		// Shuffle the team members array on the client side
		setShuffledTeamMembers(shuffleArray([...TeamMembers]));
	}, []);

	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: isMobile ? "column" : "row",
					justifyContent: "space-between",
					alignItems: "flex-start",
					gap: "32px",
					width: "100%",
					maxWidth: "75.5rem",
					margin: "0 auto",
					padding: 4,
					marginTop: { xs: 30, md: 20 }
				}}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: isMobile ? "left" : "flex-start",
						gap: "24px",
						width: isMobile ? "100%" : "380px"
					}}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							padding: "8px 16px",
							gap: "8px",
							width: "97px",
							height: "36px",
							background: "rgba(255, 255, 255, 0.1)",
							boxShadow:
								"inset 0px -6px 24px rgba(255, 255, 255, 0.24)",
							borderRadius: "100px"
						}}>
						<Typography
							sx={{
								fontWeight: "500",
								fontSize: "14px",
								lineHeight: "20px",
								textAlign: "center",
								color: "#FFFFFF"
							}}>
							Our Team
						</Typography>
					</Box>
					<Typography
						sx={{
							fontWeight: "600",
							fontSize: "24px",
							lineHeight: "28px",
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
						Our team is customer-obsessed, agile, growth-oriented,
						and multifaceted. We like to work hard, but we have a
						lot of fun too.
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: isMobile ? "left" : "flex-start",
						gap: "24px",
						width: isMobile ? "100%" : "560px"
					}}>
					<Typography
						sx={{
							fontWeight: "400",
							fontSize: "14px",
							lineHeight: "22px",
							letterSpacing: "-0.25px",
							color: "rgba(249, 250, 251, 0.8)",
							textAlign: "left"
						}}>
						<b>We wear multiple hats.</b> Our sales team has a
						strong technical background. Our eng team has an
						exceptional eye for product. Our datacenter operations
						team has a strong sales background. Whether you{"'"}re
						doing engineering, sales, operations, design, or
						product, you should be comfortable wearing more than one
						hat at a time.
						<br />
						<br />
						<b>We are customer-obsessed.</b> We have over 100,000
						developers that rely on us to run their workloads. Many
						of them use RunPod for their production environments.
						That{"'"}s a huge responsibility that we don{"'"}t take
						lightly. We are constantly talking to our customers to
						understand what we can do to level up our platform.
						<br />
						<br />
						<b>We contribute cross-functionally.</b> If you think
						there{"'"}s a better way of doing X, even if it doesn
						{"'"}t directly fall under your function, you should
						voice that to the team. The most important products we
						{"'"}ve built have stemmed from conversations between
						non-overlapping teams, like ML + Sales, Customer Support
						+ Product, and Datacenter Operations + Accounting.
						<br />
						<br />
						<b>We are agile.</b> At this stage, we need to move
						quickly. The faster we can ship products that delight
						our customers, the more successful they will be with our
						platform. The AI industry is constantly evolving, and we
						must be able to evolve just as quickly. There are some
						things we believe won{"'"}t change. Developers will
						always want faster, more accessible and cost-effective
						compute. Although our products may change, our mission
						will stay the same.
						<br />
						<br />
						<b>
							We are looking for people who want to grow as RunPod
							grows.
						</b>{" "}
						We currently have 35 full-time people on the team, and
						we anticipate scaling to several hundred over the coming
						years. We are looking for people with a bias towards
						leadership, who can hire and manage talented folks as
						their function within RunPod scales.
						<br />
						<br />
					</Typography>
					<Button
						variant="contained"
						href="https://job-boards.greenhouse.io/runpod"
						target="_blank"
						sx={{
							display: "flex",
							alignItems: "center",
							padding: "10px 12px 10px 16px",
							gap: "8px",
							width: "106px",
							height: "40px",
							background:
								"radial-gradient(92.09% 85.42% at 86.3% 87.5%, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0) 86.18%), radial-gradient(65.28% 65.28% at 26.39% 20.83%, rgba(255, 255, 255, 0.0472) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%), #5D29F0",
							boxShadow:
								"inset 0px -2px 12px rgba(255, 255, 255, 0.24), inset 0px 2.6px 1px rgba(174, 172, 183, 0.25)",
							borderRadius: "8px",
							color: "#F9FAFB",
							textTransform: "none"
						}}
						endIcon={<ChevronRightIcon />}>
						Join Us
					</Button>
				</Box>
			</Box>

			<Grid
				container
				sx={{
					maxWidth: "75.5rem",
					mt: { xs: 0, md: 4 },
					padding: 2,
					ml: { xs: 4, sm: 4, md: 8, lg: 0 }
				}}
				gap={{ xs: 0, sm: 3, md: 4, lg: 5 }}>
				{shuffledTeamMembers.map((member, index) => (
					<Grid item xs={12} sm={3.5} md={2.5} lg={2} key={index}>
						<ProfileCard {...member} />
					</Grid>
				))}
			</Grid>
		</>
	);
}

const ProfileCard: React.FC<TeamMember> = ({
	image,
	name,
	pronouns,
	bio,
	twitter,
	github,
	linkedin,
	spotifyPlaylist
}) => (
	<Box
		sx={{
			display: "flex",
			flexDirection: "column",
			alignItems: "flex-start",
			gap: "24px",
			width: "214.4px",
			filter: "drop-shadow(0px 4px 100px rgba(0, 0, 0, 0.16))",
			backdropFilter: "blur(50px)",
			borderRadius: "12px"
		}}>
		<Box
			component={spotifyPlaylist ? "a" : "div"}
			href={spotifyPlaylist || undefined}
			target={spotifyPlaylist ? "_blank" : undefined}
			rel={spotifyPlaylist ? "noopener noreferrer" : undefined}
			sx={{
				width: { xs: "80vw", sm: "214.4px" },
				height: { xs: "83vw", sm: "220px" },
				backgroundImage: `url(${image})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				borderRadius: "8px",
				cursor: spotifyPlaylist ? "pointer" : "default",
				transition: "transform 0.3s ease-in-out",
				"&:hover": {
					transform: spotifyPlaylist ? "scale(1.05)" : "none"
				}
			}}
		/>
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "4px",
				width: "214.4px",
				height: "177px"
			}}>
			<Typography
				sx={{
					fontWeight: "600",
					fontSize: "16px",
					lineHeight: "19px",
					letterSpacing: "-0.02em",
					color: "#FFFFFF"
				}}>
				{name}
			</Typography>
			{pronouns ? (
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "8px",
						width: "83px",
						height: "36px",
						background: "rgba(255, 255, 255, 0.1)",
						boxShadow:
							"inset 0px -6px 24px rgba(255, 255, 255, 0.24)",
						borderRadius: "100px"
					}}>
					<Typography
						sx={{
							fontWeight: "500",
							fontSize: "14px",
							lineHeight: "20px",
							textAlign: "center",
							color: "#FFFFFF"
						}}>
						{pronouns}
					</Typography>
				</Box>
			) : (
				<></>
			)}
			<Typography
				sx={{
					fontWeight: "500",
					fontSize: "14px",
					lineHeight: "22px",
					letterSpacing: "-0.02em",
					color: "rgba(249, 250, 251, 0.64)",
					width: { xs: "80vw", sm: "100%" }
				}}>
				{bio}
			</Typography>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					gap: "0px",
					width: "60px",
					height: "24px",
					marginLeft: "-8px",
					mt: 0.5
				}}>
				{twitter && (
					<IconButton
						href={twitter}
						target="_blank"
						rel="noopener noreferrer"
						color="inherit"
						sx={{
							width: "40px",
							height: "40px"
						}}>
						<TwitterIcon />
					</IconButton>
				)}
				{github && (
					<IconButton
						href={github}
						target="_blank"
						rel="noopener noreferrer"
						color="inherit"
						sx={{
							width: "40px",
							height: "40px"
						}}>
						<GitHubIcon />
					</IconButton>
				)}
				{linkedin && (
					<IconButton
						href={linkedin}
						target="_blank"
						rel="noopener noreferrer"
						color="inherit"
						sx={{
							width: "40px",
							height: "40px"
						}}>
						<LinkedInIcon />
					</IconButton>
				)}
			</Box>
		</Box>
	</Box>
);
