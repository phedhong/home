import type { CollectionEntry } from "astro:content";

const slugger = (str:string) => str;

export const slugifyStr = (str: string) => slugger(str);

const slugify = (post: CollectionEntry<"blog">["data"]) =>
  post.postSlug ? slugger(post.postSlug) : slugger(post.title);

export const slugifyAll = (arr: string[]) => arr.map(str => slugifyStr(str));

export default slugify;
