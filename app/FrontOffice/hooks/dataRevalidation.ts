'use server'
 
import { revalidateTag } from 'next/cache'
 
export default async function dataRevalidation(tag : string) {
  revalidateTag(tag)
}