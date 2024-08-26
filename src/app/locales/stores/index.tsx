"use client";
import Store from "@/app/locales/stores/store";
import content from "@/data/stores.json";

const Stores = () => {
  const {
    storesSection: { stores },
  } = content;

 

  return (
    <main className="container mx-auto py-12 px-4">
      {stores.map((store, index) => (
        <Store
          key={store.id}
          index={index}
          storesLength={stores.length}
          {...store}
        />
      ))}
    </main>
  );
};

export default Stores;
