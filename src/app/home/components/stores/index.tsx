"use client";

import StoreItem from "@/app/home/components/stores/store";
import content from "@/data/home.json";

const Stores = () => {
  const {
    storesSection: { stores, ctoDescription },
  } = content;

  return (
    <section className="w-full bg-lharmonie-primary px-4 text-lharmonie-secondary">
      <div className=" mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {stores.map((store) => (
            <StoreItem
              key={store.id}
              ctoDescription={ctoDescription}
              {...store}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stores;
