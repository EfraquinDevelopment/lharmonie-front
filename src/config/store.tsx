export const orderOptions = [
  {
    value: "title_asc",
    label: <p className="!text-lharmonie-secondary">Nombre: A-Z</p>,
    orderBy: "title",
    orderDirection: "asc",
  },
  {
    value: "title_desc",
    label: <p className="!text-lharmonie-secondary">Nombre: Z-A</p>,
    orderBy: "title",
    orderDirection: "desc",
  },
  {
    value: "price_asc",
    label: <p className="!text-lharmonie-secondary">Precio: Menor a Mayor</p>,
    orderBy: "price",
    orderDirection: "asc",
  },
  {
    value: "price_desc",
    label: <p className="!text-lharmonie-secondary">Precio: Mayor a Menor</p>,
    orderBy: "price",
    orderDirection: "desc",
  },
];
