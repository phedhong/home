import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});


const movies = defineCollection({
	type: 'data',
	schema: z.object({
		data: z.any(),
	}),
});



export const collections = { 
  blog,
  data: movies,
};