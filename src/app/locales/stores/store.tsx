import Image from "next/image";
import { Store as StoreData } from "@/types";
import classNames from "classnames";

type Props = StoreData & {
  index: number;
  storesLength: number;
};

const Store = ({
  id,
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
            alt={name}
            width={800}
            height={600}
            className={`object-cover w-full h-full`}
          />
        </div>
        <div
          className={classNames(
            "w-full md:w-1/2  p-8 flex flex-col justify-center",
            {
              "md:pl-32": index % 2 === 0,
              "md:pr-16": index % 2 !== 0,
            }
          )}
        >
          <h2 className="text-3xl mb-2">{name}</h2>
          <p className="text-lg mb-6">{address}</p>
          {openTimes.map(({ days, hours }, i) => (
            <div key={i} className="mb-5 space-y-2">
              <p className="text-sm">{days}</p>
              <p className="text-sm">{hours}</p>
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
