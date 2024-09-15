import { getAcfData } from "@/data/acf/getAcfData";
import { HomeFieldGroups } from "@/data/pages/homeInterfaces";

export async function getPageData<T>(pageId: string): Promise<T | null> {
  const acfData = await getAcfData(pageId);

  if (!acfData) {
    return null;
  }

  return acfData as T;
}

export async function getHomePageData(): Promise<HomeFieldGroups | null> {
  return await getPageData<HomeFieldGroups>("31");
}
