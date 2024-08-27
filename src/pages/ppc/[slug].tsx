import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { ReactNode } from "react";
import Counter from "@components/PPC/CostEffective/Counter";
import Footer from "@components/PPC/CostEffective/Footer";
import Hero from "@components/PPC/Dynamic/Hero";
import Logos from "@components/PPC/Dynamic/Logos";
import Quote from "@components/PPC/Dynamic/Quote";
import squeezePages from "@utils/squeezepages";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";

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

export function HTMLHead({
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

const DynamicSqueezePage: NextPage<{ data: any; slug: string }> = ({
	data,
	slug
}) => {
	// const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	// TODO: useMediaQuery is not working in this file, fix it lol

	const router = useRouter();

	const page = squeezePages[slug];
	if (!page) {
		router.push("/404");

		return;
	}

	return (
		<>
			{page.meta}

			<main>
				<Box sx={{ position: "relative" }}>
					<Hero
						header={page.header}
						subHeader={page.subHeader}
						buttonText={page.buttonText}
					/>

					<Logos logoText={page.logoText} />

					<Box
						sx={{
							height: { xs: "50px", sm: "75px", md: "100px" }
						}}></Box>

					<Quote testimonial={page.testimonial} />

					<Box
						sx={{
							height: { xs: "50px", sm: "75px", md: "100px" }
						}}></Box>

					<HeroWrapper>
						<ContentWrapper>
							{page.header2}
							{page.subHeader2}
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
			data: { metrics, sd: sdData, whisper: whisperData },
			slug: params?.slug
		},
		revalidate: process.env.VERCEL_ENV === "production" ? 120 : 30
	};
};

export async function getStaticPaths() {
	const paths = Object.keys(squeezePages).map((slug) => ({
		params: { slug }
	}));

	return {
		paths,
		fallback: false
	};
}

export default DynamicSqueezePage;
