import Image from "next/image";
import { Store as StoreData } from "@/types";
import { motion } from "framer-motion";
import classNames from "classnames";

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
      className="mb-24 scroll-mt-[110px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div
        className={classNames("flex flex-col md:flex-row", {
          "md:flex-row-reverse": !isEven,
        })}
      >
        <motion.div
          className="w-full md:w-1/2 overflow-hidden"
          variants={fadeIn}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        >
          <Image
            src={imageSrc}
            alt={name}
            width={600}
            height={900}
            className="object-cover w-full h-[400px] lg:h-[600px] rounded-xl shadow-lg"
          />
        </motion.div>
        <motion.div
          className={classNames(
            "w-full md:w-1/2 flex flex-col justify-center",
            {
              "md:pl-16 md:items-end": isEven,
              "md:pr-16": !isEven,
            }
          )}
          variants={textUpward}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <div className="mt-5 md:mt-0">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-800">{name}</h2>
            <p className="text-lg mb-6 text-gray-600 text-left">{address}</p>
            {openTimes.map(({ days, hours }, i) => (
              <motion.div
                key={i}
                className="mb-4 space-y-1"
                variants={textUpward}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + i * 0.2,
                  ease: "easeOut",
                }}
              >
                <p className="text-sm font-semibold text-gray-700">{days}</p>
                <p className="text-sm text-gray-600">{hours}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      {index < storesLength - 1 && (
        <motion.div
          className="border-b border-gray-300 my-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
      )}
    </motion.section>
  );
};

export default Store;
