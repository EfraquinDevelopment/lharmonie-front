import React, { PropsWithChildren } from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Product } from "@/types";
import ProductCard from "@/components/product-card";
import useBreakpoint from "@/hooks/useBreakpoint";
import classNames from "classnames";
import { WooProduct } from "@/types/woocommerce";

type ArrowProps = PropsWithChildren<{
  type: "prev" | "next";
  onClick?: () => void;
}>;

const Arrow = ({ children, type, onClick }: ArrowProps) => {
  return (
    <button
      className={classNames(
        "absolute bottom-0 z-10 cursor-pointer transform w-10",
        {
          "right-20 sm:right-10": type === "next",
          "left-20 sm:left-10": type === "prev",
        }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

type Props = {
  products: WooProduct[];
};

const ProductCarousel = ({ products }: Props) => {
  const { isSm, isLg, isXl } = useBreakpoint();

  return (
    <Carousel
      slidesToShow={isXl ? 4 : isLg ? 3 : 2}
      slidesToScroll={1}
      dotPosition="bottom"
      className="md:container mx-auto"
      dots={isSm}
      arrows
      draggable
      infinite
      prevArrow={
        <Arrow type="prev">
          <LeftOutlined className="text-2xl" />
        </Arrow>
      }
      nextArrow={
        <Arrow type="next">
          <RightOutlined className="text-2xl" />
        </Arrow>
      }
    >
      {products.map((product, index) => (
        <div key={product.id} className="mb-20 px-2">
          <ProductCard {...product} reccomended index={index} />
        </div>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
