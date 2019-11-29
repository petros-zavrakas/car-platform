export const useMapImagesToSrcset = images =>
  images.reduce((attr, image, index) => `${attr}${image} ${index + 1}x,`, "");
