import React from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

interface Props {
  src: string;
  alt: string;
}

const ProductImage = ({ alt, src }: Props) => {
  return (
    <div className="max-w-[550px]">
      <InnerImageZoom
        zoomScale={1.5}
        imgAttributes={{ alt }}
        src={src}
        width={550}
        height={550}
        className="object-center object-cover max-h-[550px]"
      />
    </div>
  );
};

export default ProductImage;
