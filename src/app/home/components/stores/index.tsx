import React from "react";
import StoreItem from "@/app/home/components/stores/store";
import content from "@/data/home.json";
import Heading from "@/components/layout/heading";

const Stores = () => {
  const {
    storesSection: { title, stores, ctoDescription },
  } = content;

  return (
    <section className="py-16 w-full bg-lharmonie-primary text-lharmonie-secondary">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Heading level={2} className="text-center">
          {title}
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-5">
          {stores.map((store) => (
            <StoreItem
              key={store.id}
              {...store}
              ctoDescription={ctoDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stores;
