import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {

  const postImportResult = await import.meta.glob('../content/**/**/index.{md,mdx}', { eager: true });
  const posts = Object.values(postImportResult);

  console.log(postImportResult)

  return rss({
    title: 'Glob',
    description: 'description',
    site: context.site,
    items: posts.map((post) => ({
      link: post.url,
      ...post.frontmatter
    })),
  });
}