import React from "react";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

interface Props {
  src: string;
  alt: string;
}

const ProductImage = ({ alt, src }: Props) => {
  return <img src={src} alt={alt} className="w-full h-full object-cover" />;
};

export default ProductImage;
