"use client";
import Store from "@/app/locales/stores/store";
import content from "@/data/stores.json";

const Stores = () => {
  const {
    storesSection: { stores },
  } = content;

  if (stores.length === 0) {
    return <div className="text-center py-16">No stores found.</div>;
  }

  return (
    <main className="container mx-auto py-16 px-4 ">
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
