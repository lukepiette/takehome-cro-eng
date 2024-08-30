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

export type Testimonial = {
	name: string;
	title: string;
	picture: string;
	bigQuote: string;
	smallQuote: string;
	smallQuoteMobile?: string;
};

export type SqueezePage = {
	header: ReactNode;
	subHeader: ReactNode;
	buttonText: string;
	logoText: ReactNode;
	testimonial: Testimonial;
	header2: ReactNode;
	subHeader2: ReactNode;
	meta: ReactNode;
};

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
								, the average RunPod user is up and running with
								a powerful GPU.
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
								Think you can beat our 74-second average?{" "}
								<span style={{ color: "#FFFFFF" }}>
									Launch your GPU now and start the clock.
								</span>
							</Typography>
						}
						buttonText={"Launch a GPU"}
					/>

					<Logos
						logoText={
							<Text variant="body2">
								AI teams at leading companies choose RunPod for
								our unparalleled speed and developer experience—
								<span style={{ color: "#FFFFFF" }}>
									making AI development not just possible, but
									enjoyable.
								</span>
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
							bigQuote: `"RunPod is my go-to platform when I need to quickly iterate on models or test ideas"`,
							smallQuote: `"In my work, I regularly have to interact with robust cloud platforms like AWS, GCP, and Azure. They're powerful, but when I need to quickly iterate on models or test ideas, RunPod is my go-to platform."`
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
									Getting started is as easy as flipping a
									switch. No labyrinthine menus, no guessing
									games—just simple, straightforward access to
									the GPUs you need, when you need them. Our
									platform is designed for speed and
									simplicity, so you can spin up resources in
									seconds, not hours.
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
