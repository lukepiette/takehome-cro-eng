import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head';
import AWSComparison from '@components/PPC/Competitor/AWS';

const UnlimitedScalePage: NextPage = ({ data = null }: any) => {
  return (
    <>
      <Head>
        <title>Switch From AWS And Save With RunPod{"'"}s GPU Cloud</title>
        <meta name="description" content="Slash Your GPU Costs by 57% When You Switch From AWS" />
      </Head>
      <main>
        <AWSComparison data={data}/>
      </main>
    </>
  );
};

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

export default UnlimitedScalePage;