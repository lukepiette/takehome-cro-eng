// pages/comparison/[slug].tsx
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import CompareGpus from '@components/CompareGPU';
import { getGpuData } from '../compare/gpus'; // Change this line

interface PerformanceData {
  batchSize: number;
  requestsPerSecond: number;
  requestLatency: number;
  timeToFirstToken: number;
  interTokenLatency: number;
  outputTokenThroughput: number;
  costPer1MTokens: number;
}

interface GpuDataType {
  name: string;
  gpuImagePath: string;
  VRAM: string;
  price: number;
  manufacturer: string;
  performanceData: PerformanceData[];
}

type GpuDataMap = {
  [key: string]: GpuDataType;
};

export default function ComparisonPage({ 
  firstGPUData, 
  secondGPUData, 
  gpuList 
}: { 
  firstGPUData: GpuDataType; 
  secondGPUData: GpuDataType;
  gpuList: { name: string }[];
}) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const firstGPUName = firstGPUData?.name || 'Unknown GPU';
  const secondGPUName = secondGPUData?.name || 'Unknown GPU';
  const pageTitle = `${firstGPUName} vs ${secondGPUName} - GPU Comparison | RunPod`;
  const pageDescription = `Compare the performance of ${firstGPUName} and ${secondGPUName} on AI and machine learning tasks on RunPod.`;
  const fullUrl = `https://www.runpod.io${router.asPath.startsWith('/') ? '' : '/'}${router.asPath}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:image" content="https://www.runpod.io/static/images/gpu-comparison-benchmark-preview-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://www.runpod.io/static/images/gpu-comparison-benchmark-preview-image.jpg" />
        <meta name="keywords" content={`${firstGPUName}, ${secondGPUName}, GPU comparison, AI hardware, machine learning performance, RunPod`} />
        <link rel="canonical" href={fullUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": pageTitle,
            "description": pageDescription,
            "url": fullUrl,
            "image": "https://www.runpod.io/static/images/gpu-comparison-benchmark-preview-image.jpg"
          })}
        </script>
      </Head>
      <CompareGpus
        firstGPUData={firstGPUData}
        secondGPUData={secondGPUData}
        gpuList={gpuList}
      />
    </>
  );
}

async function fetchGPUList() {
  const gpuData = await getGpuData(); // Add await here if getGpuData is async
  return Object.keys(gpuData);
}

export const getStaticPaths: GetStaticPaths = async () => {
  const gpus = await fetchGPUList();

  const paths = gpus.flatMap((gpu1) =>
    gpus.filter(gpu2 => gpu2 !== gpu1).map((gpu2) => ({
      params: { slug: `${gpu1}-vs-${gpu2}` },
    }))
  );

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const gpuData: GpuDataMap = await getGpuData();

  if (!params?.slug) {
    return { notFound: true };
  }

  const [firstGPU, secondGPU] = (params.slug as string).split('-vs-');

  const firstGPUData = gpuData[firstGPU];
  const secondGPUData = gpuData[secondGPU];


  if (!firstGPUData || !secondGPUData) {
    return { notFound: true };
  }

  // Create gpuList with only the names of the GPUs
  const gpuList = Object.values(gpuData);


  return {
    props: {
      firstGPUData,
      secondGPUData,
      gpuList,
    },
    revalidate: 30, // Set to 30 seconds for testing
  };
};
