import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Counter from "@components/GPU2/Dynamic/Counter";
import Footer from "@components/GPU2/Dynamic/Footer";
import Hero from "@components/GPU2/Dynamic/Hero";
import Logos from "@components/GPU2/Dynamic/Logos";
import Quote from "@components/GPU2/Dynamic/Quote";
import Subheader from "@components/GPU2/Dynamic/Subheader";
import Pricing from "@components/GPU2/Dynamic/Pricing";

import Scale from "@components/GPU2/Static/Scale";
import Comparison from "@components/GPU2/Static/Comparison";

import GpuInfo from "@components/GPU2/GpuData/h100pcie";
import { GET_GPU_TYPE_INFO } from "@components/InstancePricing/query";
import apolloClient from "@utils/apolloClient";

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


// Update the type definition for the component props
const GPUCloud: NextPage<{ gpuData: any; metrics: any; sd: any; whisper: any }> = ({ gpuData, metrics, sd, whisper }) => {
	// const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	// TODO: useMediaQuery is not working in this file, fix it lol
	const gpuSpecData = gpuData?.["NVIDIA H100 80GB PCIe"] || {};

	return (
		<>
    <Head>
      <title>Rent Nvidia H100 PCIe GPUs On-Demand</title>
      <meta name="description" content="Rent high-performance Nvidia H100 80GB PCIe GPUs on-demand. Perfect for running Machine Learning workloads." />
      <meta name="author" content="RunPod" />

      {/* Open Graph Tags */}
      <meta property="og:title" content="Rent Nvidia H100 80GB PCIe GPUs On-Demand" />
      <meta property="og:description" content="Rent high-performance Nvidia H100 80GB PCIe GPUs on-demand. Perfect for running Machine Learning workloads." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.runpod.io/gpu/h100-pcie" />
      <meta property="og:image" content="https://www.runpod.io/static/images/gpu/preview/h100-pcie-preview-image.webp" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@runpod_io" />
      <meta name="twitter:title" content="Rent Nvidia H100 80GB PCIe GPUs On-Demand" />
      <meta name="twitter:description" content="Rent high-performance Nvidia H100 80GB PCIe GPUs on-demand. Perfect for running Machine Learning workloads." />
      <meta name="twitter:image" content="https://www.runpod.io/static/images/gpu/preview/h100-pcie-preview-image.webp" />
    </Head>

			<main>
				<Box sx={{ position: "relative" }}>
					<Hero
						header={
							<Typography
								variant="h1"
								sx={{
									fontSize: { xs: "40px", sm: "70px" },
									fontWeight: 400,
									lineHeight: "110%",
									letterSpacing: "-0.03em",
									textAlign: "center",
									color: "#FFFFFF",
									width: "100%",
									background:"linear-gradient(0deg, rgba(248, 250, 252, 0.64) 8.27%, #F8FAFC 57.24%, rgba(248, 250, 252, 0.64) 96.6%)",
									backgroundClip: "text",
									textFillColor: "transparent"
								}}>
								Rent {GpuInfo.name}
								<Box
									component="br"
									sx={{
										display: { xs: 'none', sm: 'inline' }
									}}
								/>
								On-Demand
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
									
								</Box>
                                

							</Typography>
						}
						subHeader={
                            
                        <Typography
                            component="div"
                            sx={{
                                fontSize: { xs: "20px", sm: "22px" },
                                fontWeight: 400,
                                lineHeight: "120%",
                                marginTop: "-20px",
                                color: "#FFFFFF"
                            }}>
                            From ${gpuSpecData?.communityCloud ? Math.min(
								gpuSpecData?.communityPrice || 0,
								gpuSpecData?.securePrice || 0
							).toFixed(2) || "???" : gpuSpecData?.securePrice || 0}/hr
                        </Typography>
						}
						buttonText={`Launch a GPU`}
                        imageSrc={GpuInfo.gpuImagePath}
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
							height: { xs: "50px", sm: "75px", md: "25px" }
						}}></Box>

					<Pricing 
                        gpuModel={GpuInfo.name + " " + GpuInfo.secure.VRAM} 
                        communityPrice={gpuSpecData?.communityPrice}
                        securePrice={gpuSpecData?.securePrice}
                    />

                    <Box
						sx={{
							height: { xs: "50px", sm: "75px", md: "75px" }
					}}></Box>

					<Subheader 
						gpuModel={GpuInfo.name}
						hourlyRate={gpuSpecData?.communityPrice}
						vCPU={parseInt(GpuInfo.secure.vCPU)}
						ramGB={parseInt(GpuInfo.secure.RAM)}
					/>

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
					<Counter data={{ metrics, sd, whisper }} />

					<Box
						sx={{
							height: { xs: "50px", sm: "75px", md: "125px" }
						}}></Box>
					<Comparison />

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
	const [{ data }, metricsResponse, stableDiffusionDataResponse, whisperDataResponse] =
		await Promise.all([
			apolloClient.query({
				query: GET_GPU_TYPE_INFO,
				variables: {
					lowestPriceInput: { gpuCount: 1 },
				},
			}),
			fetch("https://api.runpod.ai/metrics"),
			fetch("https://api.runpod.ai/v2/sd-openjourney/metrics/cold_start_quantiles_v1?interval=1d"),
			fetch("https://api.runpod.ai/v2/whisper/metrics/cold_start_quantiles_v1?interval=1d")
		]);

	const [metrics, sdData, whisperData] = await Promise.all([
		metricsResponse.json(),
		stableDiffusionDataResponse.json(),
		whisperDataResponse.json()
	]);

	const gpu = data?.gpuTypes?.reduce((sum: any, v: any) => {
		sum[v.id] = v;
		return sum;
	}, {});

	return {
		props: {
			gpuData: gpu,
			metrics,
			sd: sdData,
			whisper: whisperData
		},
		revalidate: process.env.VERCEL_ENV === "production" ? 120 : 30
	};
};

export default GPUCloud;
