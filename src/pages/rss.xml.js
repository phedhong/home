import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  
  const blogs = await getCollection('blogs');

  return rss({
    title: 'RSS',
    description: 'description',
    site: context.site,
    customData: `<language>en-us</language>`,
    items: blogs.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      customData: post.data.customData,
      link: `/blogs/${post.slug}/`,
    })),
  });
}