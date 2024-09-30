import { API_URL } from "@/lib/constants";

export async function getAcfData(pageId: string) {
  const timestamp = new Date().getTime();
  const res = await fetch(
    `${API_URL}/wp-json/wp/v2/pages/${pageId}?t=${timestamp}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch ACF data");
  }

  const data = await res.json();
  return data.acf_groups || {};
}
