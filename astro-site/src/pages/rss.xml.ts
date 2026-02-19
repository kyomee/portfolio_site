import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Nakyum Song — Thinking',
    description: 'Essays on brand strategy, marketing systems, and AI for marketers.',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/thinking/${post.id}/`,
      categories: [post.data.category],
      author: post.data.author,
    })),
    customData: `<language>en-us</language>`,
  });
}
