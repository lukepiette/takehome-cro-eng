import React from "react";
import {
	Box,
	Typography,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	useTheme
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	color: "#FFFFFF",
	borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
	padding: "16px",
	fontSize: "18px",
	"&.MuiTableCell-head": {
		fontWeight: "bold",
		fontSize: "26px",
		backgroundColor: "transparent"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "14px",
		padding: "12px",
		"&.MuiTableCell-head": {
			fontSize: "20px"
		}
	}
}));

const StyledTableRow = styled(TableRow)({
	"&:last-child td, &:last-child th": {
		borderBottom: 0
	}
});

const Comparison = ({
	header,
	subHeader,
	competitorName,
	tableData
}: {
	header: React.ReactNode;
	subHeader: React.ReactNode;
	competitorName: string;
	tableData: {
		feature: string;
		runpod: string | boolean;
		competitor: string | boolean;
	}[];
}) => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				p: 3,
				borderRadius: 2,
				maxWidth: 800,
				width: "100%",
				margin: "0 auto"
			}}>
			<Box
				sx={{
					maxWidth: "768.98px",
					width: "100%",
					margin: "0 auto",
					padding: { xs: "32px 16px", md: "48px 16px" },
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: { xs: "32px", md: "48px" },
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
				}}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "24px",
						width: "100%"
					}}>
					{header}

					{subHeader}
				</Box>
			</Box>

			<TableContainer
				component={Paper}
				sx={{
					backdropFilter: "blur(50px)",
					background:
						"linear-gradient(270deg, rgba(51, 65, 85, 0.0001) 0%, rgba(51, 65, 85, 0.32) 52.62%, rgba(51, 65, 85, 0.0001) 100%)",
					borderRadius: 2,
					overflow: "hidden",
					"& .MuiTable-root": {
						minWidth: { xs: "auto", sm: 650 }
					},
					maxWidth: "768.98px",
					width: "100%",
					margin: "0 auto"
				}}>
				<Table>
					<TableHead>
						<TableRow>
							<StyledTableCell></StyledTableCell>
							<StyledTableCell
								sx={{ textTransform: "none" }}
								align="center">
								RunPod
							</StyledTableCell>
							<StyledTableCell
								sx={{
									textTransform: "none",
									color: "rgba(249, 250, 251, 0.48)"
								}}
								align="center">
								{competitorName}
							</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{tableData.map((row) => (
							<StyledTableRow key={row.feature}>
								<StyledTableCell component="th" scope="row">
									{row.feature}
								</StyledTableCell>
								<StyledTableCell align="center">
									{typeof row.runpod === "boolean" ? (
										row.runpod ? (
											<CheckIcon
												sx={{ color: "#4CAF50" }}
											/>
										) : (
											<CloseIcon color="error" />
										)
									) : (
										row.runpod
									)}
								</StyledTableCell>
								<StyledTableCell
									align="center"
									sx={{ color: "rgba(249, 250, 251, 0.48)" }}>
									{typeof row.competitor === "boolean" ? (
										row.competitor ? (
											<CheckIcon
												sx={{ color: "#4CAF50" }}
											/>
										) : (
											<CloseIcon color="error" />
										)
									) : (
										row.competitor
									)}
								</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default Comparison;
