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
    <section key={id} id={`${id}`} className="mb-12 scroll-mt-[110px]">
      <div
        className={`flex md:h-[600px] flex-col md:flex-row items-stretch ${
          index % 2 === 0 ? "" : "md:flex-row-reverse"
        }`}
      >
        <div className="w-full md:w-1/2 ">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={600}
            className={`object-cover w-full h-full`}
          />
        </div>
        <div className={`w-full md:w-1/2  p-8 flex flex-col justify-center`}>
          <h2 className="text-3xl mb-2">{name}</h2>
          <p className="text-lg mb-6">{address}</p>
          {openTimes.map(({ days, hours }, i) => (
            <div className="mb-5 space-y-2">
              <p key={i} className="text-sm">
                {days}
              </p>
              <p key={i} className="text-sm">
                {hours}
              </p>
            </div>
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
