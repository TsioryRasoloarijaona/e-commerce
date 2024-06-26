import { createSearchParamsCache, parseAsArrayOf, parseAsString,parseAsInteger } from "nuqs/server";

export const searchParamsCache = createSearchParamsCache({
  research: parseAsString.withDefault(""),
  brand: parseAsString.withDefault("latest"),
  type: parseAsString.withDefault(""),
  motor: parseAsString.withDefault(""),
  interval : parseAsArrayOf(parseAsInteger).withDefault([]),
  page : parseAsInteger.withDefault(0)
});
