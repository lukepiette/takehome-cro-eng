const officialTemplateList = [
  {
    name: "RunPod Stack",
    imageName: "runpod/stack",
  },
  {
    name: "RunPod Tensorflow",
    imageName: "runpod/tensorflow",
  },
  {
    name: "RunPod Pytorch",
    imageName: "runpod/pytorch",
  },
  {
    name: "Disco Diffusion",
    imageName: "entmike/disco-diffusion-1",
  },
  {
    name: "Disco Diffusion",
    imageName: "entmike/discoart",
  },
]

export const isOfficialTemplate = (template) =>
  officialTemplateList.some(({ imageName }) => template?.imageName?.includes(imageName))
