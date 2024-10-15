import Image from "next/image";
import { Store as StoreData } from "@/types";
import { motion } from "framer-motion";
import classNames from "classnames";
import { Clock, MapPin } from "lucide-react";
import LharmonieButton from "@/components/ui/lharmonie-button";

type Props = StoreData & {
  index: number;
  storesLength: number;
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const textUpward = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Store = ({
  imageSrc,
  address,
  openTimes,
  name,
  index,
  storesLength,
  id,
}: Props) => {
  const isEven = index % 2 === 0;

  return (
    <motion.section
      id={id.toString()}
      className="mb-24 md:scroll-mt-[110px] scroll-mt-[160px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div
        className={classNames("flex flex-col md:flex-row items-center", {
          "md:flex-row-reverse": !isEven,
        })}
      >
        <motion.div
          className="w-full md:w-1/2 overflow-hidden shadow-2xl"
          whileHover={{ scale: 1.02 }}
          variants={fadeIn}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
        >
          <Image
            src={imageSrc}
            alt={name}
            width={500}
            height={800}
            className="object-cover w-full h-[400px] rounded-xl shadow-2xl"
          />
        </motion.div>
        <motion.div
          className={classNames(
            "w-full md:w-1/2 flex flex-col justify-center",
            {
              "md:pl-16": isEven,
              "md:pr-16": !isEven,
            }
          )}
          variants={textUpward}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <div className="mt-8 md:mt-0">
            <h4 className="!text-3xl mb-4 !font-thin !text-[#8B7355]">
              {name}
            </h4>
            <div className="flex items-center mb-6">
              <MapPin className="w-5 h-5 mr-2 text-[#8B7355]" />
              <p className="text-lg text-gray-600">{address}</p>
            </div>
            <div className="flex items-start mb-6">
              <Clock className="w-5 h-5 mr-2 text-[#8B7355] mt-1" />
              <div>
                {openTimes.map(({ days, hours }, i) => (
                  <motion.div
                    key={i}
                    className="mb-4 space-y-1"
                    variants={textUpward}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + i * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <p className="text-sm font-semibold text-gray-700">
                      {days}
                    </p>
                    <p className="text-sm text-gray-600">{hours}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.a
              href={`https://www.google.com/maps?q=${encodeURIComponent(
                address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LharmonieButton>Ver en el mapa</LharmonieButton>
            </motion.a>
          </div>
        </motion.div>
      </div>
      {index < storesLength - 1 && (
        <motion.div
          className="border-b border-gray-300 my-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      )}
    </motion.section>
  );
};

export default Store;
