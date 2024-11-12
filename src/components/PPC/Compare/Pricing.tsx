import React from "react";
import {
	Box,
	Grid,
	Stack,
	Typography,
	useMediaQuery,
	useTheme,
	Link,
	Button
} from "@mui/material";
import { styled } from "@mui/system";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const HeroWrapper = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	padding: "24px 16px",
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

type StyledButtonProps = {
	component: any;
};

const StyledButton = styled(Button)<StyledButtonProps>(({ theme }) => ({
	background:
	  "radial-gradient(92.09% 85.42% at 86.3% 87.5%, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0) 86.18%), radial-gradient(65.28% 65.28% at 26.39% 20.83%, rgba(255, 255, 255, 0.0472) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%), #5D29F0",
	boxShadow:
	  "inset 0px -6px 24px rgba(255, 255, 255, 0.16), inset 0px 1px 2px rgba(180, 172, 183, 0.72)",
	borderRadius: "8px",
	padding: "16px 24px 15px",
	width: "fit-content",
	minWidth: "250px",
	height: "61px",
	color: "#F9FAFB",
	textTransform: "none",
	textDecoration: "none",
	"&:hover": {
	  textDecoration: "none"
	},
	fontSize: '18px',
  }));
  
const GpuRow = ({
	gpu,
	runpodPrice,
	competitorPrice,
	isFirstInCategory,
	isLastInCategory
}: {
	gpu: string;
	runpodPrice: number;
	competitorPrice: number | null;
	isFirstInCategory: boolean;
	isLastInCategory: boolean;
}) => {
	const theme = useTheme();
	const isXs = useMediaQuery(theme.breakpoints.down("sm"));

	const runpodPriceFormatted = runpodPrice.toFixed(2);
	const competitorPriceFormatted = competitorPrice
		? competitorPrice.toFixed(2)
		: "NA";

	const [gpuModel, vramPart] = gpu.split(" ");

	return (
		<Stack
			direction="row"
			justifyContent="space-between"
			alignItems="center"
			border="1px solid rgba(249, 250, 251, 0.08)"
			borderRadius={
				isFirstInCategory
					? "1.2rem 1.2rem 0 0"
					: isLastInCategory
					? "0 0 1.2rem 1.2rem"
					: 0
			}
			borderBottom={
				isLastInCategory ? "1px solid rgba(249, 250, 251, 0.08)" : 0
			}
			boxShadow="0px 4px 100px rgba(0, 0, 0, 0.16)"
			sx={{
				backdropFilter: "blur(50px)",
				background:
					"linear-gradient(270deg, rgba(51, 65, 85, 0.0001) 0%, rgba(51, 65, 85, 0.32) 52.62%, rgba(51, 65, 85, 0.0001) 100%)"
			}}>
			<Box width="33.33%" px={isXs ? 1 : 2.2} py={1.6}>
				<Typography
					color="#fff"
					fontSize={isXs ? 14 : 18}
					fontWeight="bold"
					component="span">
					{gpuModel}
				</Typography>
				<Typography
					color="#fff"
					fontSize={isXs ? 12 : 18}
					fontWeight="300"
					component="span"
					ml={1}>
					{vramPart}
				</Typography>
			</Box>
			<Box width="33.33%" px={isXs ? 1 : 2.2} py={1.6}>
				<Box
					sx={{
						backgroundColor: "#5D29F0",
						color: "#FFFFFF",
						border: "none",
						borderRadius: "8px",
						padding: isXs ? "2px 4px" : "4px 8px",
						fontSize: isXs ? "14px" : "18px",
						boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
						background:
							"linear-gradient(165deg, #5D29F0 20%, #2c1772 100%)",
						textAlign: "center",
						display: "inline-block",
						width: "auto"
					}}>
					${runpodPriceFormatted}/hr
				</Box>
			</Box>
			<Box width="33.33%" px={isXs ? 1 : 2.2} py={1.6}>
				<Typography
					color="rgba(249, 250, 251, 0.48)"
					fontSize={isXs ? 14 : 18}>
					{competitorPrice ? `$${competitorPriceFormatted}/hr` : "NA"}
				</Typography>
			</Box>
		</Stack>
	);
};

const Pricing = ({
	header,
	subHeader,
	competitorName,
	gpuPricing
}: {
	header: React.ReactNode;
	subHeader: React.ReactNode;
	competitorName: string;
	gpuPricing: {
		name: string;
		ourPrice: number;
		theirPrice: number | null;
	}[];
}) => {
	const theme = useTheme();
	const isXs = useMediaQuery(theme.breakpoints.down("sm"));

	// Sort the tableData entries by RunPod price (highest to lowest)
	const sortedTableData = gpuPricing.sort((a, b) => b.ourPrice - a.ourPrice);

	return (
		<Box sx={{ borderRadius: 2 }}>
			<HeroWrapper>
				<ContentWrapper>
					{header}

					{subHeader}
				</ContentWrapper>
			</HeroWrapper>

			<Box
				sx={{
					position: "relative",
					overflow: "hidden",
					p: { xs: 1, sm: 3 },
					borderRadius: 2,
					maxWidth: 800,
					width: "100%",
					margin: "0 auto"
				}}>
				<Box sx={{ position: "relative", zIndex: 1 }}>
					<Box>
						<Grid container alignItems="center" mb={2}>
							<Grid item xs={4}>
								<Typography
									fontSize={isXs ? 20 : 26}
									fontWeight="bold"
									textAlign="left"
									color="#FFFFFF"
									pl={isXs ? 1 : 2.2}>
									GPU
								</Typography>
							</Grid>
							<Grid item xs={4}>
								<Typography
									fontSize={isXs ? 20 : 26}
									fontWeight="bold"
									textAlign="left"
									color="#FFFFFF"
									pl={isXs ? 1 : 2.2}>
									RunPod
								</Typography>
							</Grid>
							<Grid item xs={4}>
								<Typography
									fontSize={isXs ? 20 : 26}
									fontWeight="bold"
									textAlign="left"
									pl={isXs ? 1 : 2.2}
									color="rgba(249, 250, 251, 0.48)">
									{competitorName}
								</Typography>
							</Grid>
						</Grid>

						<Stack>
							{sortedTableData.map((gpu, index) => (
								<GpuRow
									key={gpu.name}
									gpu={gpu.name}
									runpodPrice={gpu.ourPrice}
									competitorPrice={gpu.theirPrice}
									isFirstInCategory={index === 0}
									isLastInCategory={
										index === sortedTableData.length - 1
									}
								/>
							))}
						</Stack>
					</Box>
				</Box>
			</Box>

			{/* Updated Box for the additional text and button */}
			<Box
				sx={{
					mt: 2,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					maxWidth: 800,
					width: "100%",
					margin: "0 auto",
					padding: "0 24px"
				}}>
				<Box
					sx={{
						width: "100%",
						display: "flex",
						justifyContent: "center", // Changed from 'flex-start' to 'center'
						mb: 2,
						mt: -0
					}}>
					<Typography
						variant="body1"
						sx={{
							color: "#FFFFFF",
							fontSize: "1rem",
							textAlign: "center"
						}}>
						+27 more GPU models on RunPod
					</Typography>
				</Box>

				<StyledButton
					component={Link}
					href="/console/deploy"
					endIcon={<ChevronRightIcon />}>
					See All GPU Pricing
				</StyledButton>
			</Box>
		</Box>
	);
};

export default Pricing;
