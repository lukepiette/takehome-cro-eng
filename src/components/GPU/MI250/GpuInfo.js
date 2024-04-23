
const GpuInfo = {
    name: "AMD Instinct™ MI250",
    bookCallURL: "https://meetings.runpod.io/meetings/runpod/amd-mi250-interest",
    gpuImagePath: "/static/images/gpu/amd-mi250-gpu.webp",
    gpuImageXs: '75vw',
    gpuImageSm: 500,
    gpuImageMd: 400,
    gpuImageLg: 400,
    info: {
        VRAM: "128 GB",
        memoryBandwidth: "3.2 TB/s",
        FP64: "45.3 TFLOPs",
        FP16: "362 TFLOPs",
        interconnect: "PCIe 100 GB/s",
        network: "1.6 Tb/s",
        price: "$2.10/hr",
        price3Month: "Book a call",
        price6Month: "Book a call",
        price12Month: "$1.40/hr",
        price36Month: "$0.90/hr",
    },
    comparedTo: {
        name: "A100 SXM",
        VRAM: "80 GB",
        memoryBandwidth: "2 TB/s",
        FP64: "19.5 TFLOPs",
        FP16: "312 TFLOPs",
        interconnectNVLink: "NVLink 600 GB/s",
        interconnectPCIe: "PCIe 64 GB/s",
        network: "-",
        price: "$2.29/hr"
    },
}

export default GpuInfo