// import axios from "axios";
// import Image from "next/image";

// export default async function Home() {
//   const instance = axios.create({
//     baseURL: "http://localhost:8000/wp-json/",
//   });

//   async function getProducts() {
//     try {
//       const response = await instance.get("wc/store/products");
//       return response.data;
//     } catch (error) {
//       console.log({ error });
//     }
//   }

//   async function getCustomFields() {
//     try {
//       const response = await instance.get("wp/v2/component1");

//       return response.data[0].acf;
//     } catch (error) {
//       console.log({ error });
//     }
//   }

//   const data = await getProducts();
//   console.log({ data });
//   const customFields = await getCustomFields();
//   console.log({ customFields });

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <h1>{customFields.title}</h1>
//       <h2>{customFields.description}</h2>
//     </main>
//   );
// }
import { redirect } from "next/navigation";

export default function MainPage() {
  // Redirige a /home en el servidor
  redirect("/home");

  return null; // No se renderiza nada porque ya se ha redirigido
}
