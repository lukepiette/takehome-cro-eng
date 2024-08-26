import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head';
import CostEffective from '@components/PPC/CostEffective';

const CostEffectivePage: NextPage = ({ data = null }: any) => {
  return (
    <>
      <Head>
        <title>Cost-Effective GPU Cloud Computing for AI Teams</title>
        <meta name="description" content="Our prices make AI teams smile. We're not just inexpensive—we're setting a new standard for GPU cloud." />
      </Head>
      <main>
        <CostEffective data={data}/>
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

export default CostEffectivePage;