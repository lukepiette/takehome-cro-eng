// pages/comparison/[slug].tsx
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import CompareGpus from '@components/CompareGPU';
import { getGpuData } from './gpus'; // Update this import path if needed
import { useEffect, useState } from 'react';

// Update the interfaces to match the new data structure
interface PerformanceData {
  batchSize: number;
  requestsPerSecond: number;
  outputTokenThroughput: number;
  costPer1MTokens: number;
}

interface ModelBenchmark {
  fitsOnGpu: boolean;
  "128_128"?: {
    performanceData: PerformanceData[];
  };
}

interface GpuDataType {
  urlName: string;
  name: string;
  gpuImagePath: string;
  VRAM: string;
  manufacturer: string;
  benchmarks: {
    [modelName: string]: ModelBenchmark;
  };
}

type GpuDataMap = {
  [key: string]: GpuDataType;
};

// Update the getStaticProps function
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const gpuData: GpuDataMap = getGpuData();

  if (!params?.slug) {
    return { notFound: true };
  }

  const [firstGPU, secondGPU] = (params.slug as string).split('-vs-');

  const firstGPUData = gpuData[firstGPU];
  const secondGPUData = gpuData[secondGPU];

  // Create gpuList with all GPU data
  const gpuList = Object.values(gpuData);

  return {
    props: {
      initialFirstGPUData: firstGPUData || null,
      initialSecondGPUData: secondGPUData || null,
      gpuList,
    },
    revalidate: 30,
  };
};

// Update the component props type
interface ComparisonPageProps {
  initialFirstGPUData: GpuDataType;
  initialSecondGPUData: GpuDataType;
  gpuList: GpuDataType[];
}

export default function ComparisonPage({ 
  initialFirstGPUData, 
  initialSecondGPUData, 
  gpuList 
}: ComparisonPageProps) {
  const router = useRouter();
  const [firstGPUData, setFirstGPUData] = useState(initialFirstGPUData);
  const [secondGPUData, setSecondGPUData] = useState(initialSecondGPUData);
  const [localGpuList, setLocalGpuList] = useState(gpuList);
  const [isLoading, setIsLoading] = useState(!initialFirstGPUData || !initialSecondGPUData);

  useEffect(() => {
    if (!router.isReady) return;

    const fetchData = async () => {
      setIsLoading(true);
      const data = getGpuData();
      const fetchedGpuList = Object.values(data);
      setLocalGpuList(fetchedGpuList);
      await updateGPUData(fetchedGpuList);
      setIsLoading(false);
    };

    fetchData();
  }, [router.query.slug, router.isReady]);

  const updateGPUData = async (currentGpuList: GpuDataType[]) => {
    const [firstGPU, secondGPU] = (router.query.slug as string).split('-vs-');
    
    const newFirstGPUData = currentGpuList.find(gpu => gpu.urlName === firstGPU);
    const newSecondGPUData = currentGpuList.find(gpu => gpu.urlName === secondGPU);

    if (newFirstGPUData && newSecondGPUData) {
      setFirstGPUData(newFirstGPUData);
      setSecondGPUData(newSecondGPUData);
    }
  };

  const firstGPUName = firstGPUData?.name || 'Loading...';
  const secondGPUName = secondGPUData?.name || 'Loading...';
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
        gpuList={localGpuList}
        isLoading={isLoading}
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
