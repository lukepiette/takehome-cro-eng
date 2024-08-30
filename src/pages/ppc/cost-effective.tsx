import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { ReactNode } from "react";
import Counter from "@components/PPC/Dynamic/Counter";
import Footer from "@components/PPC/Dynamic/Footer";
import Hero from "@components/PPC/Dynamic/Hero";
import Logos from "@components/PPC/Dynamic/Logos";
import Quote from "@components/PPC/Dynamic/Quote";

const HeroWrapper = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	padding: "48px 16px",
	gap: "48px",
	width: "100%",
	maxWidth: "768.98px",
	margin: "0 auto",
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

function HTMLHead({
	title = "Runpod",
	description,
	image_url,
	thumbnail
}: {
	title?: string;
	description?: string;
	image_url?: string;
	thumbnail?: string;
}) {
	return (
		<Head>
			{title && <title>{title}</title>}
			{description && <meta name="description" content={description} />}
			{image_url && <meta name="image" content={image_url} />}
			{thumbnail && <meta name="thumbnail" content={thumbnail} />}
		</Head>
	);
}

const CostEffective: NextPage<{ data: any; slug: string | string[] }> = ({
	data,
	slug
}) => {
	// const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	// TODO: useMediaQuery is not working in this file, fix it lol

	return (
		<>
			<HTMLHead
				title="Cost-Effective GPU Cloud Computing for AI Teams"
				description="Our prices make AI teams smile. We're not just inexpensive—we're setting a new standard for GPU cloud."
			/>

			<main>
				<Box sx={{ position: "relative" }}>
					<Hero
						header={
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
						}
						subHeader={
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
								. We{"'"}re not just inexpensive—we{"'"}re
								setting a new standard for GPU cloud.
							</Typography>
						}
						buttonText={"See our GPU pricing dashboard"}
					/>

					<Logos
						logoText={
							<Text variant="body2">
								Senior ML engineers and top executives from the
								world{"'"}s leading companies{" "}
								<span style={{ color: "#FFFFFF" }}>
									slash millions in costs
								</span>{" "}
								every year by choosing RunPod for their critical
								AI workloads.
							</Text>
						}
					/>

					<Box
						sx={{
							height: { xs: "50px", sm: "75px", md: "100px" }
						}}></Box>

					<Quote
						testimonial={{
							name: "Daniel Chang",
							title: "Software Engineer at Databricks",
							picture:
								"/static/images/ppc/daniel-chang-headshot.webp",
							bigQuote:
								"RunPod's cost-efficiency and pricing transparency are unmatched.",
							smallQuote:
								"Whether I need 10 GPUs or 1000, I can see exactly what I'm spending in real-time. This level of clarity and affordability has transformed how I approach large-scale workloads, allowing me to optimize costs without compromising on performance."
						}}
					/>

					<Box
						sx={{
							height: { xs: "50px", sm: "75px", md: "100px" }
						}}></Box>

					<HeroWrapper>
						<ContentWrapper>
							{
								<Typography
									variant="h1"
									sx={{
										fontSize: {
											xs: "32px",
											sm: "40px",
											md: "48px"
										},
										fontWeight: 600,
										lineHeight: "96%",
										letterSpacing: "-0.03em",
										textAlign: "left",
										color: "#FFFFFF",
										width: "100%"
									}}>
									Our pricing is as clear as a mountain
									stream—no hidden fees, no surprises.{" "}
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
							}
							{
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
									Your resource management dashboard lays
									everything bare, showing you exactly what
									you{"'"}re using, down to the last byte. No
									fees for getting started, no charges for
									data in or out. Just pure, unadulterated
									performance.
								</Typography>
							}
						</ContentWrapper>
					</HeroWrapper>

					<Box
						sx={{
							height: { xs: "75px", sm: "75px", md: "100px" }
						}}></Box>

					<Counter data={data} />

					<Box
						sx={{
							height: { xs: "100px", sm: "75px", md: "50px" }
						}}></Box>

					<Footer />
				</Box>
			</main>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const [metricsResponse, stableDiffusionDataResponse, whisperDataResponse] =
		await Promise.all([
			fetch("https://api.runpod.ai/metrics"),
			fetch(
				"https://api.runpod.ai/v2/sd-openjourney/metrics/cold_start_quantiles_v1?interval=1d"
			),
			fetch(
				"https://api.runpod.ai/v2/whisper/metrics/cold_start_quantiles_v1?interval=1d"
			)
		]);

	const [metrics, sdData, whisperData] = await Promise.all([
		metricsResponse.json(),
		stableDiffusionDataResponse.json(),
		whisperDataResponse.json()
	]);

	return {
		props: {
			data: { metrics, sd: sdData, whisper: whisperData }
		},
		revalidate: process.env.VERCEL_ENV === "production" ? 120 : 30
	};
};

export default CostEffective;
