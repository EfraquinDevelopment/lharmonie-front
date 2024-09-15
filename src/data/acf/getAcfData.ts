export async function getAcfData(pageId: string) {
  const timestamp = new Date().getTime(); // Agregar una marca de tiempo
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/pages/${pageId}?t=${timestamp}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch ACF data");
  }

  const data = await res.json();
  return data.acf_groups || {};
}
