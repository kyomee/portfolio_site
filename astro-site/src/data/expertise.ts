export interface LinkCard {
  slug: string;
  href: string;
  title: string;
  description: string;
  eyebrow: string;
  meta?: string;
}

export interface TaxonomyItem {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
}

export interface ExpertiseFaq {
  question: string;
  answer: string;
}

export interface ExpertisePage {
  audienceSlug: string;
  serviceSlug: string;
  title: string;
  description: string;
  intro: string;
  audienceProblem: string;
  serviceApproach: string;
  caseStudySlugs: string[];
  postSlugs: string[];
  capabilitySlugs: string[];
  marketSlugs: string[];
  faq: ExpertiseFaq[];
  primaryKeyword: string;
  secondaryKeywords: string[];
}

export const caseStudyCards: LinkCard[] = [
  {
    slug: 'razer-anniversary',
    href: '/projects/razer-anniversary',
    title: 'Razer 20th Anniversary Global Brand Campaign',
    description: 'Unified anniversary positioning, community narrative, and cross-market governance for a global gaming brand.',
    eyebrow: 'Case Study',
    meta: 'Global brand system across 15+ markets',
  },
  {
    slug: 'ana-virtual-artist',
    href: '/projects/ana-virtual-artist',
    title: 'AI Virtual Artist Launch — ANA by KRAFTON',
    description: 'Turned complex AI product capability into a story-led launch that people could understand and follow.',
    eyebrow: 'Case Study',
    meta: '5.4M+ views in 50 days',
  },
  {
    slug: 'pubg-new-state',
    href: '/projects/pubg-new-state',
    title: 'PUBG: NEW STATE Global Launch Content Marketing',
    description: 'Built the content and narrative system for a global AAA mobile launch across multiple regions and creator channels.',
    eyebrow: 'Case Study',
    meta: '50M+ pre-registrations',
  },
  {
    slug: 'pubg-mobile-korea',
    href: '/projects/pubg-mobile-korea',
    title: 'PUBG Mobile Korea Content Strategy',
    description: 'Improved retention communication by turning updates, onboarding, and feedback loops into clearer player-facing content.',
    eyebrow: 'Case Study',
    meta: 'Retention and onboarding strategy',
  },
  {
    slug: 'lg-wing',
    href: '/projects/lg-wing',
    title: 'LG WING Product Use-Case Launch Campaign',
    description: 'Reframed an unusual hardware launch around practical creator use cases instead of technical novelty.',
    eyebrow: 'Case Study',
    meta: '12M+ views and 4.5x engagement',
  },
];

export const postCards: LinkCard[] = [
  {
    slug: 'ai-tools-brand-narrative',
    href: '/thinking/ai-tools-brand-narrative/',
    title: 'How to Use AI Tools to Build and Strengthen Your Brand Narrative',
    description: 'A practical framework for using AI to sharpen narrative clarity instead of producing more noise.',
    eyebrow: 'Essay',
    meta: 'AI & Marketing',
  },
  {
    slug: 'korean-branding-global-market-strategy',
    href: '/thinking/korean-branding-global-market-strategy/',
    title: 'What Korean Branding Gets Right (And Wrong) When Going Global',
    description: 'A breakdown of how Korean brands travel globally when positioning is clear and where they lose force.',
    eyebrow: 'Essay',
    meta: 'Brand Strategy',
  },
  {
    slug: 'korean-sme-singapore-market-entry',
    href: '/thinking/korean-sme-singapore-market-entry/',
    title: 'How Korean SMEs Can Enter the Singapore Market: A Brand-First Playbook',
    description: 'A market-entry playbook focused on positioning, proof, and localization before channel expansion.',
    eyebrow: 'Essay',
    meta: 'Market Entry Strategy',
  },
];

export const audiences: TaxonomyItem[] = [
  {
    slug: 'korean-smes',
    name: 'Korean SMEs',
    title: 'Expertise for Korean SMEs Expanding Beyond Korea',
    description: 'Brand strategy, localization, and market-entry thinking for Korean SMEs moving into Singapore and broader global markets.',
    intro: 'These pages focus on companies that already have product capability but need sharper positioning, proof, and market fit before growth translates across borders.',
  },
  {
    slug: 'gaming-brands',
    name: 'Gaming Brands',
    title: 'Expertise for Gaming and Interactive Entertainment Brands',
    description: 'Launch strategy, narrative development, and content systems for gaming brands operating across regional and global audiences.',
    intro: 'The strongest gaming launches are not just louder. They make worlds, mechanics, and reasons to care legible across players, creators, and internal teams.',
  },
  {
    slug: 'tech-brands',
    name: 'Tech Brands',
    title: 'Expertise for Tech and Product-Led Brands',
    description: 'Narrative and brand strategy for tech brands translating complex features into clearer market meaning.',
    intro: 'Product-led teams often have more capability than articulation. These pages focus on how to turn technical differentiation into audience-facing clarity.',
  },
  {
    slug: 'marketing-leaders',
    name: 'Marketing Leaders',
    title: 'Expertise for In-House Marketing Leaders and Teams',
    description: 'Strategic advisory for marketing leaders who need positioning, narrative alignment, and clearer brand systems.',
    intro: 'This audience is less likely to need a vendorized campaign and more likely to need a senior strategic partner who can bring structure and judgment.',
  },
];

export const serviceAreas: TaxonomyItem[] = [
  {
    slug: 'brand-strategy',
    name: 'Brand Strategy',
    title: 'Brand Strategy Expertise',
    description: 'Work focused on positioning, message clarity, and the brand systems needed to scale across teams and markets.',
    intro: 'Brand strategy here means making the brand easier to understand, easier to repeat, and harder to dilute as the business grows.',
  },
  {
    slug: 'market-entry-strategy',
    name: 'Market Entry Strategy',
    title: 'Market Entry Strategy Expertise',
    description: 'Market-entry thinking grounded in category framing, local proof, and brand positioning rather than channel-first expansion.',
    intro: 'The most expensive market-entry mistake is entering as a product list rather than as a distinct category answer.',
  },
  {
    slug: 'narrative-development',
    name: 'Narrative Development',
    title: 'Narrative Development Expertise',
    description: 'Narrative development for launches, AI products, and global campaigns that need a clearer strategic story.',
    intro: 'Narrative development is where strategic positioning becomes something internal teams can use and external audiences can remember.',
  },
  {
    slug: 'launch-strategy',
    name: 'Launch Strategy',
    title: 'Launch Strategy Expertise',
    description: 'Launch planning focused on message hierarchy, audience translation, and content systems that scale across regions.',
    intro: 'A launch is usually overloaded with information and underbuilt on audience understanding. The work here fixes that imbalance.',
  },
  {
    slug: 'advisory-consulting',
    name: 'Advisory & Consulting',
    title: 'Strategic Advisory Expertise',
    description: 'Advisory engagements for leaders who need strategic clarity, a second perspective, and stronger brand decision-making.',
    intro: 'Advisory work is most useful when the team already has momentum but needs sharper framing, prioritization, and outside judgment.',
  },
];

export const capabilities: TaxonomyItem[] = [
  {
    slug: 'positioning',
    name: 'Positioning',
    title: 'Positioning Expertise',
    description: 'Projects and essays focused on category definition, differentiation, and sharper market framing.',
    intro: 'Positioning is the leverage layer beneath launch, storytelling, and campaign execution. It shapes what the rest of the work can do.',
  },
  {
    slug: 'localization',
    name: 'Localization',
    title: 'Localization Expertise',
    description: 'Work on translating brands into new markets without flattening what makes them specific.',
    intro: 'Localization is not translation. It is deciding what the brand should mean in a new market and how proof needs to adapt.',
  },
  {
    slug: 'content-strategy',
    name: 'Content Strategy',
    title: 'Content Strategy Expertise',
    description: 'Examples of content systems that help audiences understand launches, products, and evolving brand stories.',
    intro: 'Content strategy matters most when it turns complexity into sequence, not when it simply increases output.',
  },
  {
    slug: 'go-to-market',
    name: 'Go-to-Market Planning',
    title: 'Go-to-Market Expertise',
    description: 'Launch and entry work focused on market fit, channel sequencing, and message clarity.',
    intro: 'Go-to-market planning becomes more durable when brand and audience logic are resolved before amplification begins.',
  },
];

export const markets: TaxonomyItem[] = [
  {
    slug: 'singapore',
    name: 'Singapore',
    title: 'Singapore Market Expertise',
    description: 'Brand and market-entry work relevant to companies launching in or learning from the Singapore market.',
    intro: 'Singapore is not just a small export destination. It is often the clearest proving ground for category fit, localization, and regional readiness.',
  },
  {
    slug: 'korea',
    name: 'Korea',
    title: 'Korea Market Expertise',
    description: 'Projects and essays grounded in Korean brand building, Korean audiences, and Korea-origin companies.',
    intro: 'Korea produces strong category signals and strong execution cultures. The challenge is often translating those strengths without losing precision.',
  },
  {
    slug: 'global',
    name: 'Global',
    title: 'Global Brand Expertise',
    description: 'Cross-market brand, launch, and narrative work built for teams operating across multiple regions.',
    intro: 'Global work requires more than translation. It requires a system that can stay coherent while being interpreted by many teams and markets.',
  },
];

export const expertisePages: ExpertisePage[] = [
  {
    audienceSlug: 'korean-smes',
    serviceSlug: 'market-entry-strategy',
    title: 'Singapore Market Entry Strategy for Korean SMEs',
    description: 'Brand-first market entry strategy for Korean SMEs expanding into Singapore with stronger positioning, local proof, and channel sequencing.',
    intro: 'For Korean SMEs, Singapore works best as a deliberate first proving ground. The opportunity is not to export everything at once, but to define the category entry point, sharpen the local reason to believe, and choose channels that match the brand’s current credibility.',
    audienceProblem: 'Many Korean SMEs arrive with a solid product but an imported message. They enter marketplaces before they have a market thesis, rely on Koreanness as the main differentiator, and end up competing as one more SKU instead of a distinct answer.',
    serviceApproach: 'My approach is to frame the category first, define what local proof must look like in Singapore, and build a launch sequence that earns distribution instead of assuming it. That includes message architecture, proof strategy, content direction, and a realistic channel order.',
    caseStudySlugs: ['pubg-new-state', 'ana-virtual-artist'],
    postSlugs: ['korean-sme-singapore-market-entry', 'korean-branding-global-market-strategy'],
    capabilitySlugs: ['localization', 'go-to-market', 'positioning'],
    marketSlugs: ['singapore', 'korea'],
    primaryKeyword: 'Singapore market entry strategy for Korean SMEs',
    secondaryKeywords: ['Korean SME Singapore expansion', 'brand strategy for Korean SMEs', 'Singapore localization strategy'],
    faq: [
      {
        question: 'What makes a Korean SME market-entry plan work in Singapore?',
        answer: 'The best plans define the category entry point clearly, adapt the proof layer for local buyers, and avoid treating Korean origin as the whole value proposition.',
      },
      {
        question: 'Is Singapore mainly a sales channel or a strategy market?',
        answer: 'It should be treated as a strategy market first. If the brand cannot make sense in Singapore with clear proof and positioning, broader regional expansion usually gets more expensive rather than easier.',
      },
    ],
  },
  {
    audienceSlug: 'korean-smes',
    serviceSlug: 'brand-strategy',
    title: 'Brand Strategy for Korean SMEs Going Global',
    description: 'Brand strategy for Korean SMEs that need clearer positioning, stronger category framing, and better translation into global markets.',
    intro: 'The strongest Korean brands do not travel because they are Korean. They travel because they know what they stand for in category terms that others can immediately understand.',
    audienceProblem: 'Growth-stage SMEs often have execution energy but unstable positioning. Messaging gets copied from the domestic market, global teams inherit fragmented narratives, and the brand starts sounding generic once it leaves home context.',
    serviceApproach: 'The work here is to clarify positioning, define a narrative spine, and make the brand easier to localize without losing distinctiveness. That usually means tightening category language, proof hierarchy, and audience-specific messaging before expanding the content system.',
    caseStudySlugs: ['razer-anniversary', 'lg-wing'],
    postSlugs: ['korean-branding-global-market-strategy', 'korean-sme-singapore-market-entry'],
    capabilitySlugs: ['positioning', 'localization'],
    marketSlugs: ['korea', 'global'],
    primaryKeyword: 'brand strategy for Korean SMEs',
    secondaryKeywords: ['global branding for Korean companies', 'Korean brand positioning', 'Korean SME localization'],
    faq: [
      {
        question: 'What usually breaks first when Korean SMEs go global?',
        answer: 'Usually the positioning, not the execution. Teams keep producing outputs, but the reason the brand matters becomes less coherent across markets.',
      },
      {
        question: 'Does brand strategy matter before distribution expands?',
        answer: 'Yes. Good brand strategy reduces wasted spend later because every channel, partner, and campaign is built on a clearer market answer.',
      },
    ],
  },
  {
    audienceSlug: 'gaming-brands',
    serviceSlug: 'launch-strategy',
    title: 'Launch Strategy for Gaming Brands',
    description: 'Launch strategy for gaming brands that need clearer audience translation, better content sequencing, and stronger global rollout logic.',
    intro: 'Game launches often over-index on noise and under-invest in comprehension. The work that matters is making the world, the differentiators, and the reason to join legible at the right moments.',
    audienceProblem: 'Launch teams are balancing product complexity, creator expectations, community pressure, and global rollout timing. Without message hierarchy, campaigns become fragmented across trailers, patch notes, influencer content, and live ops.',
    serviceApproach: 'I focus on sequencing: what audiences need to understand first, what creators need to amplify, and what internal teams need to repeat consistently across markets. That turns launch content into a system instead of a burst of disconnected assets.',
    caseStudySlugs: ['pubg-new-state', 'pubg-mobile-korea'],
    postSlugs: ['ai-tools-brand-narrative'],
    capabilitySlugs: ['go-to-market', 'content-strategy'],
    marketSlugs: ['global', 'korea'],
    primaryKeyword: 'launch strategy for gaming brands',
    secondaryKeywords: ['game launch messaging', 'global gaming launch strategy', 'gaming content strategy'],
    faq: [
      {
        question: 'What makes a gaming launch strategy stronger?',
        answer: 'Strong gaming launches connect product changes to player value, stage information over time, and keep creator, community, and brand messaging aligned.',
      },
      {
        question: 'Why is content sequencing so important in game launches?',
        answer: 'Because players, creators, and press all enter at different points. Sequencing prevents the launch from collapsing into feature overload or disconnected hype.',
      },
    ],
  },
  {
    audienceSlug: 'gaming-brands',
    serviceSlug: 'narrative-development',
    title: 'Narrative Development for Gaming and Virtual IP',
    description: 'Narrative development for gaming brands and virtual IP that need to translate product or technology into stories audiences can care about.',
    intro: 'Gaming and virtual-character work becomes compelling when the story creates an entry point broader than the feature set. That is especially important when the underlying product or technology is new.',
    audienceProblem: 'Teams often know the mechanics, the engine, or the tech stack, but not the audience-facing narrative that makes those elements emotionally legible.',
    serviceApproach: 'Narrative development starts by clarifying what the audience should understand, feel, and expect. From there, the story is translated into formats that can hold attention across launch, social, creator, and PR touchpoints.',
    caseStudySlugs: ['ana-virtual-artist', 'pubg-new-state'],
    postSlugs: ['ai-tools-brand-narrative'],
    capabilitySlugs: ['content-strategy', 'positioning'],
    marketSlugs: ['global'],
    primaryKeyword: 'narrative development for gaming brands',
    secondaryKeywords: ['virtual IP storytelling', 'gaming brand narrative', 'AI character launch strategy'],
    faq: [
      {
        question: 'How is narrative development different from campaign copy?',
        answer: 'Narrative development defines the deeper story logic and meaning of the launch. Campaign copy is one expression of that logic, not the strategy itself.',
      },
      {
        question: 'Can narrative development help technical or AI-driven launches?',
        answer: 'Yes. It is especially useful there because the audience needs a human reason to care before they can absorb the technical details.',
      },
    ],
  },
  {
    audienceSlug: 'tech-brands',
    serviceSlug: 'brand-strategy',
    title: 'Brand Strategy for Tech Brands With Complex Products',
    description: 'Brand strategy for tech brands that need to turn product complexity into clearer positioning, sharper stories, and stronger market understanding.',
    intro: 'Complex products do not automatically create meaningful brands. The advantage appears when a team can translate what is technically impressive into what is strategically memorable.',
    audienceProblem: 'Tech companies often explain features accurately but fail to explain why the product matters in a category context. That creates long decision cycles and messaging that feels internally true but externally weak.',
    serviceApproach: 'The work is to tighten the category frame, name the brand’s role more precisely, and build a messaging structure that can scale from high-level narrative down to product and content use cases.',
    caseStudySlugs: ['ana-virtual-artist', 'lg-wing'],
    postSlugs: ['ai-tools-brand-narrative'],
    capabilitySlugs: ['positioning', 'content-strategy'],
    marketSlugs: ['global'],
    primaryKeyword: 'brand strategy for tech brands',
    secondaryKeywords: ['tech brand positioning', 'complex product messaging', 'brand strategy for AI products'],
    faq: [
      {
        question: 'Why do complex tech products need brand strategy early?',
        answer: 'Because feature clarity alone rarely creates preference. Brand strategy helps define the market role and emotional logic that make the product easier to remember and choose.',
      },
      {
        question: 'Is this mainly for AI products?',
        answer: 'No. The same problem appears anywhere technical complexity outruns message clarity, including software, devices, platforms, and new categories.',
      },
    ],
  },
  {
    audienceSlug: 'marketing-leaders',
    serviceSlug: 'advisory-consulting',
    title: 'Brand and Narrative Advisory for Marketing Leaders',
    description: 'Strategic advisory for in-house marketing leaders who need clearer positioning, stronger narrative alignment, and better decisions across teams.',
    intro: 'Sometimes the team does not need a full external build. It needs a senior strategic partner who can pressure-test the framing, tighten the narrative, and make the next decisions easier.',
    audienceProblem: 'Leaders inherit fragmented messaging, too many parallel initiatives, and teams that can execute but are not fully aligned on what the brand is trying to say.',
    serviceApproach: 'Advisory work is structured around diagnosis, decision support, and narrative alignment. That can include workshop facilitation, messaging review, launch framing, or ongoing strategic counsel for internal teams.',
    caseStudySlugs: ['razer-anniversary', 'pubg-mobile-korea'],
    postSlugs: ['ai-tools-brand-narrative', 'korean-branding-global-market-strategy'],
    capabilitySlugs: ['positioning', 'content-strategy'],
    marketSlugs: ['global'],
    primaryKeyword: 'brand advisory for marketing leaders',
    secondaryKeywords: ['marketing strategy advisor', 'brand consultant for in-house teams', 'narrative advisory'],
    faq: [
      {
        question: 'When is advisory a better fit than a project engagement?',
        answer: 'When the team can execute but needs sharper framing, higher-level judgment, or a more consistent strategic point of view across ongoing work.',
      },
      {
        question: 'What kinds of issues can advisory solve?',
        answer: 'Positioning drift, message misalignment, unclear launch framing, narrative inconsistency, and weak translation between brand strategy and day-to-day marketing execution.',
      },
    ],
  },
];

export const expertiseLinkCards: LinkCard[] = expertisePages.map((page) => ({
  slug: `${page.audienceSlug}--${page.serviceSlug}`,
  href: `/expertise/${page.audienceSlug}/${page.serviceSlug}/`,
  title: page.title,
  description: page.description,
  eyebrow: 'Expertise',
  meta: page.primaryKeyword,
}));

function bySlug<T extends { slug: string }>(items: T[], slug: string) {
  return items.find((item) => item.slug === slug);
}

export function getAudience(slug: string) {
  return bySlug(audiences, slug);
}

export function getServiceArea(slug: string) {
  return bySlug(serviceAreas, slug);
}

export function getCapability(slug: string) {
  return bySlug(capabilities, slug);
}

export function getMarket(slug: string) {
  return bySlug(markets, slug);
}

export function getExpertisePage(audienceSlug: string, serviceSlug: string) {
  return expertisePages.find(
    (page) => page.audienceSlug === audienceSlug && page.serviceSlug === serviceSlug
  );
}

export function getCaseStudyCards(slugs: string[]) {
  return slugs
    .map((slug) => bySlug(caseStudyCards, slug))
    .filter((item): item is LinkCard => Boolean(item));
}

export function getPostCards(slugs: string[]) {
  return slugs
    .map((slug) => bySlug(postCards, slug))
    .filter((item): item is LinkCard => Boolean(item));
}

export function getExpertiseCardsByPairs(
  pairs: Array<{ audienceSlug: string; serviceSlug: string }>
) {
  return pairs
    .map(({ audienceSlug, serviceSlug }) => getExpertisePage(audienceSlug, serviceSlug))
    .filter((item): item is ExpertisePage => Boolean(item))
    .map((page) => ({
      slug: `${page.audienceSlug}--${page.serviceSlug}`,
      href: `/expertise/${page.audienceSlug}/${page.serviceSlug}/`,
      title: page.title,
      description: page.description,
      eyebrow: 'Expertise',
      meta: page.primaryKeyword,
    }));
}

export function getRelatedExpertiseForPost(postSlug: string) {
  const matches = expertisePages.filter((page) => page.postSlugs.includes(postSlug)).slice(0, 3);
  return matches.map((page) => ({
    slug: `${page.audienceSlug}--${page.serviceSlug}`,
    href: `/expertise/${page.audienceSlug}/${page.serviceSlug}/`,
    title: page.title,
    description: page.description,
    eyebrow: 'Expertise',
    meta: page.primaryKeyword,
  }));
}

export function getRelatedCaseStudiesForPost(postSlug: string) {
  const caseStudySlugs = new Set(
    expertisePages
      .filter((page) => page.postSlugs.includes(postSlug))
      .flatMap((page) => page.caseStudySlugs)
  );

  return getCaseStudyCards(Array.from(caseStudySlugs)).slice(0, 3);
}

export function getRelatedExpertiseForCaseStudy(caseStudySlug: string) {
  const matches = expertisePages.filter((page) => page.caseStudySlugs.includes(caseStudySlug)).slice(0, 3);
  return matches.map((page) => ({
    slug: `${page.audienceSlug}--${page.serviceSlug}`,
    href: `/expertise/${page.audienceSlug}/${page.serviceSlug}/`,
    title: page.title,
    description: page.description,
    eyebrow: 'Expertise',
    meta: page.primaryKeyword,
  }));
}

export function getRelatedPostsForCaseStudy(caseStudySlug: string) {
  const postSlugs = new Set(
    expertisePages
      .filter((page) => page.caseStudySlugs.includes(caseStudySlug))
      .flatMap((page) => page.postSlugs)
  );

  return getPostCards(Array.from(postSlugs)).slice(0, 3);
}

export function getHubRelatedExpertise(kind: 'audience' | 'service' | 'capability' | 'market', slug: string) {
  return expertisePages
    .filter((page) => {
      if (kind === 'audience') return page.audienceSlug === slug;
      if (kind === 'service') return page.serviceSlug === slug;
      if (kind === 'capability') return page.capabilitySlugs.includes(slug);
      return page.marketSlugs.includes(slug);
    })
    .map((page) => ({
      slug: `${page.audienceSlug}--${page.serviceSlug}`,
      href: `/expertise/${page.audienceSlug}/${page.serviceSlug}/`,
      title: page.title,
      description: page.description,
      eyebrow: 'Expertise',
      meta: page.primaryKeyword,
    }));
}

export function getHubRelatedCaseStudies(kind: 'audience' | 'service' | 'capability' | 'market', slug: string) {
  const matches = expertisePages.filter((page) => {
    if (kind === 'audience') return page.audienceSlug === slug;
    if (kind === 'service') return page.serviceSlug === slug;
    if (kind === 'capability') return page.capabilitySlugs.includes(slug);
    return page.marketSlugs.includes(slug);
  });

  const caseStudySlugs = new Set(matches.flatMap((page) => page.caseStudySlugs));
  return getCaseStudyCards(Array.from(caseStudySlugs)).slice(0, 4);
}

export function getHubRelatedPosts(kind: 'audience' | 'service' | 'capability' | 'market', slug: string) {
  const matches = expertisePages.filter((page) => {
    if (kind === 'audience') return page.audienceSlug === slug;
    if (kind === 'service') return page.serviceSlug === slug;
    if (kind === 'capability') return page.capabilitySlugs.includes(slug);
    return page.marketSlugs.includes(slug);
  });

  const postSlugs = new Set(matches.flatMap((page) => page.postSlugs));
  return getPostCards(Array.from(postSlugs)).slice(0, 4);
}
