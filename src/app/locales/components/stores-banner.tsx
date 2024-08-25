import Heading from "@/components/layout/heading";
import content from "@/data/stores.json";

const StoresBanner = () => {
  const { storesBanner } = content;

  return (
    <section className="h-[calc(100vh-30rem)] flex items-center justify-center bg-lharmonie-primary text-lharmonie-secondary relative">
      <div className="text-center md:px-0 px-4">
        <Heading level={1} className="md:!text-5xl !font-bold">
          {storesBanner.title}
        </Heading>
        <p className="text-lg md:text-xl mt-4 mb-8">
          {storesBanner.description}
        </p>
      </div>
    </section>
  );
};

export default StoresBanner;
