import React from "react";

interface Props {
  src: string;
  alt: string;
}

const ProductImage = ({ alt, src }: Props) => {
  return (
    <div className=" w-full flex justify-center items-center  ">
      <img
        src={src}
        alt={alt}
        className="object-contain md:!max-h-[550px] !max-h-[335px]"
      />
    </div>
  );
};

export default ProductImage;
