import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { marked } from 'marked';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const feed = rss({
    title: 'Nakyum Song — Thinking',
    description: 'Essays on brand strategy, marketing systems, and AI for marketers.',
    site: context.site!,
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
    },
    customData: [
      '<language>en-us</language>',
      '<atom:link href="https://nakyumsong.com/rss.xml" rel="self" type="application/rss+xml" />',
    ].join('\n'),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/posts/${post.slug}/`,
      categories: [post.data.category],
      author: post.data.author,
      content: marked.parse(post.body ?? ''),
    })),
  });

  return new Response(feed.body, {
    status: feed.status,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
