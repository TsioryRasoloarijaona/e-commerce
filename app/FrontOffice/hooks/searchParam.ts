import { createSearchParamsCache, parseAsArrayOf, parseAsString,parseAsInteger } from "nuqs/server";

export const searchParamsCache = createSearchParamsCache({
  research: parseAsString.withDefault(""),
  brand: parseAsString.withDefault("pined"),
  type: parseAsString.withDefault(""),
  motor: parseAsString.withDefault(""),
  interval : parseAsArrayOf(parseAsInteger).withDefault([])
});
