// pages/comparison/[slug].tsx
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import CompareGpus from '@components/CompareGPU';
import gpuData from './gpus.json'; // Ensure you import the correct JSON

interface GpuDataType {
  name: string;
  gpuImagePath: string;
  VRAM: string;
  RAM: string;
  vCPU: string;
  price: string;
}

interface GpuDataDict {
  [key: string]: GpuDataType;
}

export default function ComparisonPage({ firstGPUData, secondGPUData }: { firstGPUData: GpuDataType; secondGPUData: GpuDataType }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <CompareGpus
      firstGPUData={firstGPUData}
      secondGPUData={secondGPUData}
    />
  );
}

async function fetchGPUList() {
  return Object.keys(gpuData as GpuDataDict); // Define that gpuData is of type GpuDataDict
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
  const slug = params?.slug as string;
  const [firstGPU, secondGPU] = slug.split('-vs-');

  const gpuDataTyped = gpuData as GpuDataDict; // Explicitly tell TypeScript that gpuData has keys of type string

  const firstGPUData = gpuDataTyped[firstGPU];
  const secondGPUData = gpuDataTyped[secondGPU];

  if (!firstGPUData || !secondGPUData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      firstGPUData,
      secondGPUData,
    },
  };
};
