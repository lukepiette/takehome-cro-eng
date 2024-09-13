import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head';
import ModelPage from '@components/PPC/Models';

function HTMLHead({
	title = "RunPod",
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

const LlamaPage: NextPage = ({ data = null }: any) => {
  return (
    <>
        <HTMLHead
            title="Run Llama 2 7B With A Custom API endpoint"
            description="In minutes, create a custom API endpoint to host your Llama 2 7B model."
        />
        <main>
            <ModelPage modelName={"Llama 2 7B"} data={data}/>
        </main>
    </>
  );
};

export default LlamaPage;


export const getStaticProps: GetStaticProps = async () => {
    const metricsResponsePromise = fetch('https://api.runpod.ai/metrics')
    const sdResponsePromise = fetch(
      'https://api.runpod.ai/v2/sd-openjourney/metrics/cold_start_quantiles_v1?interval=1d'
    )
    const whisperResponsePromise = fetch(
      'https://api.runpod.ai/v2/whisper/metrics/cold_start_quantiles_v1?interval=1d'
    )
    const metricsResponse = await metricsResponsePromise
    const sdResponse = await sdResponsePromise
    const whisperResponse = await whisperResponsePromise
    const metrics = await metricsResponse.json()
    const sdData = await sdResponse.json()
    const whisperData = await whisperResponse.json()
  
    return {
      props: { data: { metrics, sd: sdData, whisper: whisperData } },
      revalidate: process.env.VERCEL_ENV === 'production' ? 120 : 30,
    }
  }
