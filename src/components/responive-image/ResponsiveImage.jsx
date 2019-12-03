import React from "react";
import { Image } from "./ResponsiveImage.styles";
import { useMapImagesToSrcset } from "../../hooks/useMapImagesToSrcset";

const ResponsiveImage = ({ src, images, alt }) => {
  const srcset = useMapImagesToSrcset(images);

  return <Image src={src} srcset={srcset} alt={alt} />;
};

export default ResponsiveImage;
