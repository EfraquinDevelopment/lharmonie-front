import content from "@/data/stores.json";

const Stores = () => {
  return (
    <main className="container mx-auto py-12 px-4">
      {/* {locales.map((local, index) => (
        <section key={index} id={local.slug} className="mb-12">
          <div
            className={`flex flex-col md:flex-row items-stretch ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            <div className="w-full md:w-1/2">
              <Image
                src={local.imagen}
                alt={`Interior de ${local.nombre}`}
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full md:w-1/2 bg-white p-8 flex flex-col justify-center">
              <h2 className="text-3xl mb-2">{local.nombre}</h2>
              <p className="text-lg mb-4">{local.direccion}</p>
              {local.horario.map((linea, i) => (
                <p key={i} className="text-sm">
                  {linea}
                </p>
              ))}
            </div>
          </div>
          {index < locales.length - 1 && (
            <div className="border-b border-gray-300 my-12"></div>
          )}
        </section>
      ))} */}
    </main>
  );
};

export default Stores;
