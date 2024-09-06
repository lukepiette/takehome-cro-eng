import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import Serverless from "@components/PPC/Sls";

const AI: NextPage = ({ data = null }: any) => (
	<>
		<Head>
			<title>Serverless GPU Endpoints for AI Inference</title>
			<meta
				name="description"
				content="Run machine learning inference at scale with RunPod Serverless GPU endpoints."
			/>
			<meta name="author" content="RunPod" />

			{/* Open Graph Tags */}
			<meta
				property="og:title"
				content="Serverless GPU Endpoints for AI Inference"
			/>
			<meta
				property="og:description"
				content="Run machine learning inference at scale with RunPod Serverless GPU endpoints."
			/>
			<meta property="og:type" content="website" />
			<meta
				property="og:url"
				content="https://www.runpod.io/serverless-gpu"
			/>
			<meta
				property="og:image"
				content="https://www.runpod.io/static/images/serverless-preview.webp"
			/>

			{/* Twitter Card Tags */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content="@runpod_io" />
			<meta
				name="twitter:title"
				content="Serverless GPU Endpoints for AI Inference"
			/>
			<meta
				name="twitter:description"
				content="Run machine learning inference at scale with RunPod Serverless GPU endpoints."
			/>
			<meta
				name="twitter:image"
				content="https://www.runpod.io/static/images/serverless-preview.webp"
			/>
		</Head>
		<Serverless data={data} />
	</>
);

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
		props: { data: { metrics, sd: sdData, whisper: whisperData } },
		revalidate: process.env.VERCEL_ENV === "production" ? 120 : 30
	};
};

export default AI;
