import { Box, Stack, Typography, Button, Link } from "@mui/material";
// import { CircleColor } from "./Community";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { styled } from "@mui/system";


const Ellipse1592 = styled("div")(({ theme }) => ({
	position: "absolute",
	height: "900px",
	width: "900px",
	left: "50%",
	top: "60%",
	background:
		"radial-gradient(85.83% 85.83% at 50% 14.17%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59.12%, #000000 85.94%)",
	boxShadow:
		"inset 0px -3.44038px 1.2379px #B0CBFF, inset 0px -22.3211px 22.3211px #5D29F0",
	transform: "translate(-50%, -50%) rotate(0deg)",
	borderRadius: "50%",
	overflow: "hidden",
	zIndex: -3,
	[theme.breakpoints.down("sm")]: {
		height: "400px",
		width: "400px"
	},
	[theme.breakpoints.down("xs")]: {
		height: "300px",
		width: "300px"
	}
}));

const Ellipse1593 = styled("div")(({ theme }) => ({
	position: "absolute",
	height: "1100px",
	width: "1100px",
	left: "50%",
	top: "60%",
	background:
		"radial-gradient(85.83% 85.83% at 50% 14.17%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59.12%, #000000 85.94%)",
	boxShadow:
		"inset 0px -3.44038px 1.2379px #B0CBFF, inset 0px -22.3211px 22.3211px #5D29F0",
	transform: "translate(-50%, -50%) rotate(0deg)",
	borderRadius: "50%",
	overflow: "hidden",
	zIndex: -2,
	[theme.breakpoints.down("sm")]: {
		height: "450px",
		width: "450px"
	},
	[theme.breakpoints.down("xs")]: {
		height: "350px",
		width: "350px"
	}
}));

const Ellipse1594 = styled("div")(({ theme }) => ({
	position: "absolute",
	height: "1300px",
	width: "1300px",
	left: "50%",
	top: "60%",
	background:
		"radial-gradient(85.83% 85.83% at 50% 14.17%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59.12%, #000000 85.94%)",
	boxShadow:
		"inset 0px -3.44038px 1.2379px #B0CBFF, inset 0px -22.3211px 22.3211px #5D29F0",
	transform: "translate(-50%, -50%) rotate(0deg)",
	borderRadius: "50%",
	overflow: "hidden",
	zIndex: -1,
	[theme.breakpoints.down("sm")]: {
		height: "500px",
		width: "500px"
	},
	[theme.breakpoints.down("xs")]: {
		height: "400px",
		width: "400px"
	}
}));

const Ellipse1595 = styled("div")(({ theme }) => ({
	position: "absolute",
	height: "1400px",
	width: "1400px",
	left: "50%",
	top: "60%",
	background:
		"radial-gradient(85.83% 85.83% at 50% 14.17%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59.12%, #000000 85.94%)",
	transform: "translate(-50%, -50%) rotate(0deg)",
	borderRadius: "50%",
	overflow: "hidden",
	zIndex: -1,
	maxWidth: "2024px",
	[theme.breakpoints.down("sm")]: {
		height: "550px",
		width: "550px"
	},
	[theme.breakpoints.down("xs")]: {
		height: "450px",
		width: "450px"
	}
}));

export default function Counter({ data }) {
	const [metrics, setMetrics] = useState(null);
	const [width, setWidth] = useState(0);
	const ref = useRef(null);

	useEffect(() => {
		let intervalId;

		const fetchData = async () => {
			console.log('Fetching data...'); // Debug log
			try {
				const response = await fetch('https://api.runpod.ai/metrics');
				const responseData = await response.json();
				console.log('Data received:', responseData); // Debug log
				setMetrics(responseData);
			} catch (error) {
				console.error('Fetch error:', error);
			}
		};

		fetchData(); // Initial fetch
		intervalId = setInterval(fetchData, 2000);

		return () => {
			console.log('Clearing interval'); // Debug log
			clearInterval(intervalId);
		};
	}, []); // Empty dependency array

	useEffect(() => {
		if (ref.current && width === 0) {
			setWidth(ref.current.getBoundingClientRect().width);
		}
	}, [metrics]);

	return (
		<Stack alignItems="center" position="relative" width="100%">
			<Ellipse1592 />
			<Ellipse1593 />
			<Ellipse1594 />
			<Ellipse1595 />

			<Stack alignItems="center" justifyContent="center">
				<Box ml={4}>
					<Typography
						display="inline-block"
						fontSize={{ xs: 48, sm: 100, md: 120 }}
						fontWeight={600}
						letterSpacing="-0.03em"
						position="absolute"
						ref={ref}
						visibility="hidden">
						{(
							metrics?.requests || data?.metrics?.requests
						).toLocaleString("en-US")}
					</Typography>
					<Typography
						fontSize={{ xs: 48, sm: 100, md: 120 }}
						fontWeight={600}
						letterSpacing="-0.03em"
						width={width === 0 ? undefined : width + 60}
						sx={{
							background:
								"linear-gradient(119.2deg, rgba(255, 255, 255, 0.4) 32.07%, rgba(145, 78, 255, 0.4) 75.29%), #FFFFFF",
							backgroundClip: "text",
							textFillColor: "transparent"
						}}>
						<CountUp
							decimals={0}
							delay={0}
							duration={3}
							end={metrics?.requests || data?.metrics?.requests}
							preserveValue={true}
							separator=","
							start={data?.metrics?.requests - 500}
						/>
					</Typography>
				</Box>

				<Stack
					alignItems="center"
					justifyContent="center" // Added this line
					direction="row"
					spacing={0.8}
					sx={{
						maxWidth: { xs: "300px", sm: "none" },
						width: "100%"
					}}>
					<Typography
						fontWeight={16}
						letterSpacing="0.002em"
						fontSize={24}
						sx={{
							fontSize: { xs: "18px", sm: "18px" },
							fontWeight: 500,
							lineHeight: "24px",
							textAlign: "center",
							color: "rgba(249, 250, 251, 0.48)",
							padding: "5px",
							width: "100%" // Added this line
						}}>
						requests since launch &{" "}
						<span style={{ color: "#FFFFFF" }}>
							160k+ developers
						</span>{" "}
						worldwide
					</Typography>
				</Stack>

			</Stack>
		</Stack>
	);
}
