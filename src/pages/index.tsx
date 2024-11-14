import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

import Counter from "@components/PPC/Counter";
import Footer from "@components/PPC/Footer";
import Hero from "@components/PPC/Hero";
import Logos from "@components/PPC/Logos";
import Quote from "@components/PPC/Quote";
import Subheader from "@components/PPC/Subheader";
import Pricing from "@components/PPC/Pricing";
import Scale from "@components/PPC/Scale";
import Comparison from "@components/PPC/Comparison";
import BookCall from "@components/PPC/BookCall";

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

const GPUCloud: NextPage<{ data: any }> = ({ data }) => {

	return (
		<>
			<HTMLHead
				title="Launch a GPU in Seconds with RunPod"
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
						buttonText={"Get Started for Free"}
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
							height: { xs: "0px", sm: "25px", md: "75px" }
					}}></Box>

					<Subheader />
					<Box
						sx={{
							height: { xs: "0px", sm: "75px", md: "25px" }
						}}></Box>

					<Pricing />

					<Box
						sx={{
							height: { xs: "50px", sm: "75px", md: "100px" }
						}}></Box>

					<Scale />

					<Quote
						testimonial={{
							name: "Daniel Chang",
							title: "Software Engineer at Databricks",
							picture:
								"/static/images/ppc/daniel-chang-headshot.webp",
							bigQuote:
								'"RunPod\'s ability to scale on-demand is unmatched."',
							smallQuote:
								'"Whether I need 10 GPUs or 1000, they\'re available instantly. This level of flexibility has transformed how I approach large-scale workloads, allowing me to think bigger and move faster than ever before."'
						}}
					/>

					<Box
						sx={{
							height: { xs: "50px", sm: "75px", md: "100px" }
						}}></Box>
					<Counter data={data} />

					<Box
						sx={{
							height: { xs: "50px", sm: "75px", md: "125px" }
						}}></Box>
					<Comparison />

					<Box
						sx={{
							height: { xs: "50px", sm: "75px", md: "125px" }
						}}></Box>
					<BookCall />

					<Box
						sx={{
							height: { xs: "50px", sm: "75px", md: "100px" }
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

export default GPUCloud;