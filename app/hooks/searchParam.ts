import {
    createSearchParamsCache,
    parseAsString
  } from 'nuqs/server'
 
   
  export const searchParamsCache = createSearchParamsCache({
    q: parseAsString.withDefault(',;:,:;,'),
   research : parseAsString.withDefault(''),
   brand : parseAsString.withDefault(''),
   color : parseAsString.withDefault(''),
   name : parseAsString.withDefault(''),
   motor : parseAsString.withDefault('')
  })