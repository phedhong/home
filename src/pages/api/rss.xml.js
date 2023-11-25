import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();
const { siteTitle, siteUrl } = website;

export async function GET(context) {
	
	const blogs = (await getCollection('blogs'))
		.sort(
			({ data: { pubDate: pubDateA } }, { data: { pubDate: pubDateB } }) =>
				new Date(pubDateB).valueOf() - new Date(pubDateA).valueOf(),
		)
		.map(
			({ data: { pubDate, postTitle: title, seoMetaDescription: description }, slug }) => ({
				title,
				description,
				link: `${siteUrl}/${slug}/`,
				pubDate: new Date(pubDate),
			}),
		);


	return rss({
		title: siteTitle,
		description: siteTitle,
		site: siteUrl,
		stylesheet: true,
		customData: `<language>en-gb</language>`,
		items,
	});
}