import { error } from "console";

export async function getData<T>(url: string, tag: string): Promise<T> {
  const res = await fetch(url, { cache: "no-store", next: { tags: [tag] } });
  if (!res.ok) {
    throw new Error('failed fetch data');
  }

  const data: T = await res.json();
  return data;
}
