import { defineCollection, z } from 'astro:content';
import { rssSchema } from '@astrojs/rss';

const postCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
    description: z.string().optional(),
		pubDate: z.coerce.date().optional(),
		image: z.string().optional(),
		tags: z.array(z.string()).default(["tag"]),
	}),
});



const blogCollection = defineCollection({
	schema: rssSchema,
});

export const collections = { 
  blogs: blogCollection,
	posts: postCollection,
};