import Heading from "@/components/layout/heading";
import content from "@/data/stores.json";
import Link from "next/link";

const StoresBanner = () => {
  const {
    storesBanner,
    storesSection: { stores },
  } = content;

  return (
    <section className="h-[calc(100vh-30rem)] flex items-center justify-center bg-lharmonie-primary text-lharmonie-secondary relative">
      <div className="flex-col">
        <div className="text-center md:px-0 px-4">
          <Heading level={1} className="md:!text-5xl !font-bold">
            {storesBanner.title}
          </Heading>
          <p className="text-lg md:text-xl mt-4 mb-8">
            {storesBanner.description}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {stores.map((store) => (
            <Link
            key={store.id}
            href={`#${store.id}`}
            className="group block text-center transition-all duration-300 hover:shadow-lg p-4 rounded-lg"
          >
            <h3 className="text-xl font-medium mb-2">{store.name}</h3>
            <p className="text-sm text-gray-600">{store.address}</p>
          </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoresBanner;
