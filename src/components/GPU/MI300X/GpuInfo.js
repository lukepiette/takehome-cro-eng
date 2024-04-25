
const GpuInfo = {
    name: "AMD Instinct™ MI300X",
    bookCallURL: "https://meetings.runpod.io/meetings/runpod/amd-mi300x-interest",
    gpuImagePath: "/static/images/gpu/amd-mi300x-gpu.webp",
    gpuImageXs: '50vw',
    gpuImageSm: 300,
    gpuImageMd: 300,
    gpuImageLg: 275,
    info: {
        VRAM: "192 GB",
        memoryBandwidth: "5.3 TB/s",
        FP64: "81.7 TFLOPs",
        FP32: "163.4 TFLOPs",
        FP16: "2,610 TFLOPs",
        FP8: "5,220 TFLOPs",
        interconnect: "PCIe 128 GB/s",
        network: "3.2 Tb/s",
        price: "$4.99/hr",
        price3Month: "Book a call",
        price6Month: "Book a call",
        price12Month: "$3.25/hr",
        price36Month: "$2.45/hr",
    },
    comparedTo: {
        name: "H100 SXM",
        VRAM: "80 GB",
        memoryBandwidth: "3.4 TB/s",
        FP64: "67 TFLOPs",
        FP32: "67 TFLOPs",
        FP16: "1,979 TFLOPs",
        FP8: "3,958 TFLOPs",
        interconnectNVLink: "NVLink 900 GB/s",
        interconnectPCIe: "PCIe 64 GB/s",
        network: "-",
        price: "$4.69/hr"
    },
}

export default GpuInfo