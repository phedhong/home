import type { CollectionEntry } from "astro:content";

const getSortedBlogs = (posts: CollectionEntry<"blog">[]) =>
  posts
    .filter(({ data }) => !data.draft)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.pubDate).getTime() / 1000) -
        Math.floor(new Date(a.data.pubDate).getTime() / 1000)
    );

export default getSortedBlogs;