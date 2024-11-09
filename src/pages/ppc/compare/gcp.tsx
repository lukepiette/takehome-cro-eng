import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Counter from "@components/PPC/Dynamic/Counter";
import Footer from "@components/PPC/Dynamic/Footer";
import Hero from "@components/PPC/Dynamic/Hero";
import Logos from "@components/PPC/Dynamic/Logos";
import Quote from "@components/PPC/Dynamic/Quote";
import ProblemWithCompetitor from "@components/PPC/Compare/ProblemWithCompetitor";
import BenefitsOfRunPod from "@components/PPC/Compare/BenefitsOfRunPod";
import Pricing from "@components/PPC/Compare/Pricing";
import Comparison from "@components/PPC/Compare/Comparison";
import adCopy from "@components/PPC/Compare/adCopy"

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

const CostEffective: NextPage<{ data: any }> = ({ data }) => {
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
									lineHeight: "110%",
									letterSpacing: "-0.03em",
									textAlign: "center",
									color: "#FFFFFF",
									width: "100%"
								}}>
								Slash Your GPU Costs by{" "}
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
									74%{" "}
								</Box>
								When You Switch From Google Cloud
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
								Teams migrating from Google Cloud to RunPod aren
								{"'"}t just saving pennies—they{"'"}re rescuing
								their budgets.
							</Typography>
						}
						buttonText={adCopy.heroCTA}
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
							height: { xs: "25px", sm: "50px", md: "75px" }
						}}></Box>

					<ProblemWithCompetitor
						header={
							<Typography
								variant="h1"
								sx={{
									fontSize: {
										xs: "32px",
										sm: "40px",
										md: "42px"
									},
									fontWeight: 600,
									lineHeight: "110%",
									letterSpacing: "-0.03em",
									textAlign: "left",
									color: "#FFFFFF",
									width: "100%"
								}}>
								Google Cloud:{" "}
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
									The Dinosaur{" "}
								</Box>
								in the Age of AI
							</Typography>
						}
						subHeader={
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
								<span style={{ color: "#FFFFFF" }}>
									You wouldn{"'"}t use a horse and buggy to
									win a Formula 1 race. So why use Google
									Cloud for your AI workloads?{" "}
								</span>
								It{"'"}s a relic of the CPU era, lumbering in a
								world that demands GPU agility.
							</Typography>
						}
						reasons={[
							"Tedious sales calls for simple reservations.",
							"Support that costs extra but delivers less.",
							`And a labyrinth of services so complex, it takes a team of experts just to launch a single GPU.`
						]}
						subHeader2={
							<Typography
								variant="body1"
								sx={{
									fontSize: { xs: "16px", sm: "18px" },
									fontWeight: 500,
									lineHeight: "24px",
									color: "rgba(249, 250, 251, 0.48)",
									mt: 2
								}}>
								Google Cloud isn{"'"}t just inefficient for
								AI—it{"'"}s holding you back. It{"'"}s time to
								evolve.
							</Typography>
						}
					/>

					<Box
						sx={{
							height: { xs: "25px", sm: "50px", md: "75px" }
						}}></Box>

					<BenefitsOfRunPod
						header={
							<Typography
								variant="h1"
								sx={{
									fontSize: {
										xs: "32px",
										sm: "40px",
										md: "42px"
									},
									fontWeight: 600,
									lineHeight: "110%",
									letterSpacing: "-0.03em",
									textAlign: "left",
									color: "#FFFFFF",
									width: "100%"
								}}>
								RunPod: Leaner. Meaner.{" "}
								<span style={{ fontStyle: "italic" }}>
									Cheaper
								</span>
								.{" "}
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
									The Google Cloud Killer.
								</Box>
							</Typography>
						}
						subHeader={
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
								Google Cloud gives you GPUs. RunPod gives you
								the future of AI infrastructure—at a fraction of
								the cost.
							</Typography>
						}
						reasons={[
							"Our docker-native platform deploys in seconds, not centuries.",
							"Rock-solid reliability for production that never sleeps.",
							"And a price tag that'll make your CFO grin."
						]}
					/>

					<Box
						sx={{
							height: { xs: "25px", sm: "50px", md: "75px" }
						}}></Box>

					<Pricing
						header={
							<Typography
								variant="h1"
								sx={{
									fontSize: {
										xs: "32px",
										sm: "40px",
										md: "42px"
									},
									fontWeight: 600,
									lineHeight: "110%",
									letterSpacing: "-0.03em",
									textAlign: "left",
									color: "#FFFFFF",
									width: "100%"
								}}>
								Pricing That Makes AI Teams Smile and{" "}
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
									Finance Teams Cheer{" "}
								</Box>
							</Typography>
						}
						subHeader={
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
								Slash costs, not performance. Our transparent,
								on-demand pricing means you pay only for what
								you use.
							</Typography>
						}
						competitorName={"GCP"}
						gpuPricing={[
							{
								name: "H100 80GB VRAM",
								ourPrice: 2.79,
								theirPrice: 11.06
							},
							{
								name: "A100 80GB VRAM",
								ourPrice: 1.19,
								theirPrice: 3.67
							},
							{
								name: "L40S 48GB VRAM",
								ourPrice: 0.79,
								theirPrice: 2.0
							},
							{
								name: "L4 24GB VRAM",
								ourPrice: 0.43,
								theirPrice: 1.15
							},
							{
								name: "V100 16GB VRAM",
								ourPrice: 0.19,
								theirPrice: 2.48
							}
						]}
					/>
					<Box
						sx={{
							height: { xs: "25px", sm: "50px", md: "75px" }
						}}></Box>

					<Comparison
						header={
							<Typography
								variant="h1"
								sx={{
									fontSize: {
										xs: "32px",
										sm: "40px",
										md: "42px"
									},
									fontWeight: 600,
									lineHeight: "110%",
									letterSpacing: "-0.03em",
									textAlign: "left",
									color: "#FFFFFF",
									width: "100%"
								}}>
								More GPU Models. Globally available.{" "}
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
									Support That Gives a Damn.{" "}
								</Box>
							</Typography>
						}
						subHeader={
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
								30+ GPU models at your fingertips. Whether you
								{"'"}re fine-tuning or going full Skynet, we
								{"'"}ve got the silicon to match.
								<Box
									component="span"
									sx={{
										display: { xs: "none", sm: "inline" }
									}}>
									{" "}
									Spread across 31 regions, our global network
									puts teraflops in your backyard. And our
									support? They don{"'"}t just read from a
									script—they read your mind.
								</Box>
							</Typography>
						}
						tableData={[
							{
								feature: "Unique GPU models",
								runpod: "32",
								competitor: "8"
							},
							{
								feature: "Global regions",
								runpod: "31",
								competitor: "20"
							},
							{
								feature: "Free 24/7 Support",
								runpod: true,
								competitor: false
							},
							{
								feature: "Delightful Developer Experience",
								runpod: true,
								competitor: false
							},
							{
								feature: "Network storage",
								runpod: true,
								competitor: true
							},
							{
								feature: "Enterprise-Grade Machine Reliability",
								runpod: true,
								competitor: true
							}
						]}
						competitorName={"GCP"}
					/>
					<Box
						sx={{
							height: { xs: "25px", sm: "50px", md: "75px" }
						}}></Box>

					<Quote
						testimonial={{
							name: "Daniel Chang",
							title: "Software Engineer at Databricks",
							picture:
								"/static/images/ppc/daniel-chang-headshot.webp",
							bigQuote: `"RunPod's ability to scale on-demand is unmatched."`,
							smallQuote: `"Whether I need 10 GPUs or 1000, they're available instantly. This level of flexibility has transformed how I approach large-scale workloads."`
						}}
					/>
					<Box
						sx={{
							height: { xs: "25px", sm: "50px", md: "75px" }
						}}></Box>

					<Counter data={data} />
					<Box
						sx={{
							height: { xs: "25px", sm: "50px", md: "75px" }
						}}></Box>

					<Box
						sx={{
							height: { xs: "25px", sm: "50px", md: "75px" }
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
