import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";

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
		width: "80vw"
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
	gap: "24px",
	width: "100%",
	[theme.breakpoints.down("sm")]: {
		gap: "32px"
	}
}));

const ListItem = ({ children }: { children: React.ReactNode }) => (
	<Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
		<Box
			sx={{
				width: "24px",
				height: "24px",
				borderRadius: "4px",
				backgroundColor: "rgba(255, 255, 255, 0.1)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				mr: 2,
				flexShrink: 0
			}}>
			<CheckIcon sx={{ color: "#4CAF50", fontSize: "16px" }} />
		</Box>
		<Typography
			variant="body1"
			sx={{
				fontSize: { xs: "16px", sm: "18px" },
				fontWeight: 500,
				lineHeight: "24px",
				color: "#FFFFFF", // Brighter, slightly blue-tinted white
				textShadow: "0 0 10px rgba(230, 232, 255, 0.3)" // Subtle glow effect
			}}>
			{children}
		</Typography>
	</Box>
);

const BenefitsOfRunPod = ({
	header,
	subHeader,
	reasons
}: {
	header: React.ReactNode;
	subHeader: React.ReactNode;
	reasons: string[];
}) => {
	return (
		<HeroWrapper>
			<ContentWrapper>
				{header}
				{subHeader}

				<Box sx={{ width: "100%" }}>
					{reasons.map((reason, index) => (
						<ListItem key={index}>{reason}</ListItem>
					))}
				</Box>
			</ContentWrapper>
		</HeroWrapper>
	);
};

export default BenefitsOfRunPod;
