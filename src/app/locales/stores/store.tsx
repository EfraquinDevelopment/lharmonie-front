import Image from "next/image";
import { StoreData } from "@/types";

type Props = StoreData & {
  index: number;
  storesLength: number;
};

const Store = ({
  id,
  imageAlt,
  imageSrc,
  address,
  openTimes,
  name,
  index,
  storesLength,
}: Props) => {
  return (
    <section
      key={id}
      id={`${id}`}
      className="mb-12 scroll-mt-[110px]"
    >
      <div
        className={`shadow-md rounded-md flex md:h-[600px] flex-col md:flex-row items-stretch ${
          index % 2 === 0 ? "" : "md:flex-row-reverse"
        }`}
      >
        <div className="w-full md:w-1/2 ">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={600}
            className={`object-cover w-full h-full ${index % 2 === 0 ? "rounded-s-md" : "rounded-e-md"}`}
          /> 
        </div>
        <div className={`w-full md:w-1/2 bg-white p-8 flex flex-col justify-center ${index % 2 === 0 ? "rounded-e-md" : "rounded-s-md"}`}>
          <h2 className="text-3xl mb-2">{name}</h2>
          <p className="text-lg mb-4">{address}</p>
          {openTimes.map((linea, i) => (
            <p key={i} className="text-sm">
              {linea}
            </p>
          ))}
        </div>
      </div>
      {index < storesLength - 1 && (
        <div className="border-b border-gray-300 my-12"></div>
      )}
    </section>
  );
};

export default Store;
