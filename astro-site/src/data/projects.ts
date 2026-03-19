import type { ImageMetadata } from 'astro';

import razerImg from '../assets/images/portfolio/razer-anniversary.png';
import anaImg from '../assets/images/portfolio/ana.png';
import pubgImg from '../assets/images/portfolio/NEWSTATE_MOBILE_220119.png';

export type ProjectImage =
  | {
      kind: 'asset';
      src: ImageMetadata;
      alt: string;
    }
  | {
      kind: 'fallback';
      background: string;
    };

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: ProjectImage;
  results: string;
  slug: string;
}

export const projects: Project[] = [
  {
    id: 'razer-anniversary',
    title: 'Razer 20th Anniversary',
    description: 'Global brand system unifying esports, lifestyle, and hardware campaigns',
    tags: ['Brand Systems', 'Global Campaign', 'Creative Direction'],
    image: {
      kind: 'asset',
      src: razerImg,
      alt: 'Razer 20th Anniversary campaign artwork',
    },
    results: 'Unified 15+ markets',
    slug: '/projects/razer-anniversary',
  },
  {
    id: 'ana-virtual-artist',
    title: 'ANA Virtual Artist',
    description: "Launched KRAFTON's first AI-powered virtual artist with narrative-driven content",
    tags: ['Virtual Human', 'Content Strategy', 'Brand Launch'],
    image: {
      kind: 'asset',
      src: anaImg,
      alt: 'ANA by KRAFTON campaign artwork',
    },
    results: '5.4M+ views in 50 days',
    slug: '/projects/ana-virtual-artist',
  },
  {
    id: 'pubg-new-state',
    title: 'PUBG: NEW STATE Launch',
    description: 'Global launch of AAA next-gen mobile title with full-funnel strategy',
    tags: ['Gaming', 'Global Launch', 'Content Marketing'],
    image: {
      kind: 'asset',
      src: pubgImg,
      alt: 'PUBG: NEW STATE launch artwork',
    },
    results: '50M+ pre-registrations',
    slug: '/projects/pubg-new-state',
  },
  {
    id: 'lg-wing',
    title: 'LG WING Campaign',
    description: 'Global influencer marketing repositioning a dual-screen device as creator-friendly',
    tags: ['Influencer Marketing', 'Product Launch', 'Global Campaign'],
    image: {
      kind: 'fallback',
      background: '#1E1E2E',
    },
    results: '12M+ views, 4.5x engagement',
    slug: '/projects/lg-wing',
  },
];
