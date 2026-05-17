export type Company = {
  name: string;
  title: string;
  period: string;
  start: Date;
  variant?: 'sub';
  blurb?: string;
};

export type FeatureItem = {
  id: string;
  company: string;
  title: string;
  description: string;
};

export type CompanyStat = {
  value: string;
  label: string;
  supporting?: { value: string; label: string }[];
};

export type CompanyStatsGroup = {
  company: string;
  stats: CompanyStat[];
};

export type PressItem = {
  id: string;
  company: string;
  year: string;
  outlet: string;
  headline: string;
  url?: string;
};

export const timelineStart = new Date(2014, 8);

export const companies: Company[] = [
  { name: 'Velvet Hammer', title: 'Artist Manager', period: '2014–2019', start: new Date(2014, 8) },
  { name: 'Syntx', title: 'Fullstack Engineer', period: '2019–2020', start: new Date(2019, 9) },
  {
    name: 'Sensible Weather',
    title: 'Staff Engineer',
    period: '2020–2025',
    start: new Date(2020, 4),
  },
  { name: 'Digg', title: 'Senior Engineer', period: '2025–2026', start: new Date(2025, 7) },
  {
    name: 'The Platform',
    title: 'Senior Engineer',
    period: '2025–2026',
    start: new Date(2025, 7),
    variant: 'sub',
    blurb: 'Building human-first social media for the AI age',
  },
  {
    name: 'Basic Intelligence',
    title: 'Senior Engineer',
    period: '2026',
    start: new Date(2026, 2),
    variant: 'sub',
    blurb: 'Building an agentic AI lab from the Digg foundation',
  },
  {
    name: 'WellTheory',
    title: 'Senior Engineer',
    period: '2026–present',
    start: new Date(2026, 4),
  },
];

export const features: FeatureItem[] = [
  {
    id: 'digg-1',
    company: 'Digg',
    title: 'Content moderation pipeline',
    description:
      'Led development of a modular content moderation pipeline designed to support iterative, pluggable models and capture distinct datasets for AI flagging, human review, and in-app moderation. Partnered with data engineering to build a RAG-based autonomous moderation layer, achieving 86.5% F1 (95% recall, 87% precision) and reducing the human review workload by 90%.',
  },
  {
    id: 'digg-2',
    company: 'Digg',
    title: 'Human-in-the-loop review workflow',
    description:
      'Designed and built the internal review workflow where human moderators evaluated decisions from V1 of our content moderation system, generating labeled eval datasets that enabled V2 with autonomous decision making, while also immediately improving content-quality and user experience on the platform.',
  },
  {
    id: 'digg-3',
    company: 'Digg',
    title: 'Core platform data service',
    description:
      'Architected a greenfield NestJS/TypeScript service that consolidated database writes and business logic previously scattered across a patchwork of Lambda functions and a legacy monolith.',
  },
  {
    id: 'digg-4',
    company: 'Digg',
    title: 'Event-driven ingestion pipeline',
    description:
      'Built services consuming SQS/SNS events for asynchronous post ingestion and processing as part of a distributed, event-driven architecture.',
  },
  {
    id: 'digg-5',
    company: 'Digg',
    title: 'Internal admin dashboard',
    description:
      'Independently conceived, built, and shipped Quarry — an internal admin dashboard covering moderation queues, user and community management, and analytics — that cut time spent on routine admin workflows by up to 75%.',
  },
  {
    id: 'sensible-1',
    company: 'Sensible Weather',
    title: 'Point-of-sale integrations',
    description:
      'Architected and built point-of-sale integrations across golf ([Troon](https://www.troon.com/), [PGA of America](https://www.pga.org/)), camping ([KOA](https://koa.com/), [Reserve America](https://www.reserveamerica.com/)), live events, ski, and hospitality — enabling 5,000+ partner onboardings and over 500,000 Weather Guarantees sold.',
  },
  {
    id: 'sensible-2',
    company: 'Sensible Weather',
    title: 'Dynamic pricing engine',
    description:
      "Designed and implemented support for granular, dynamic pricing models across the Weather Guarantee product, expanding the sales team's toolkit and increasing attach rates by 10%.",
  },
  {
    id: 'sensible-3',
    company: 'Sensible Weather',
    title: 'Internationalization system',
    description:
      'Led the internationalization engineering effort, coordinating across teams to implement i18n support that enabled expansion into four new global markets including payments in local currency and plug-and-play, vertical-specific content translations.',
  },
  {
    id: 'sensible-4',
    company: 'Sensible Weather',
    title: 'Frontend monorepo',
    description:
      'Designed and built the TypeScript frontend development environment from scratch, including a monorepo architecture for shared components and configurations across a suite of partner-facing applications.',
  },
  {
    id: 'sensible-5',
    company: 'Sensible Weather',
    title: 'Core Go platform',
    description:
      "Partnered with the principal engineer to architect and build the core platform from the ground up in Go, establishing the foundation for the Weather Guarantee, the company's greenfield climatech product. Maintained 99% uptime across SLA-bound partner systems.",
  },
  {
    id: 'syntx-1',
    company: 'Syntx',
    title: 'Financial services due diligence platform',
    description:
      'Built the full stack internal platform for a financial services client engaged in due diligence and mortgage loan review using React, Express, SQL, and Auth0.',
  },
  {
    id: 'syntx-2',
    company: 'Syntx',
    title: 'Third-party point-of-service integration server',
    description:
      'Set up a third-party POS integration server for [Qorum](https://www.qorum.com/), consuming the Toast API via Express and deploying on AWS with ElastiCache and ElasticBeanstalk to power mobile bar tab management.',
  },
];

export const press: PressItem[] = [
  {
    id: 'press-5',
    company: 'Digg',
    year: '2026',
    outlet: 'Fast Company',
    headline: 'Digg is back (again), this time as an AI news aggregator',
    url: 'https://www.fastcompany.com/91540767/digg-is-back-again-this-time-as-an-ai-news-aggregator',
  },
  {
    id: 'press-4',
    company: 'Digg',
    year: '2026',
    outlet: 'TechCrunch',
    headline: 'Digg launches its new Reddit rival to the public',
    url: 'https://techcrunch.com/2026/01/14/digg-launches-its-new-reddit-rival-to-the-public/',
  },
  {
    id: 'press-2',
    company: 'Sensible Weather',
    year: '2025',
    outlet: 'Fast Company',
    headline: 'Top 10 Most Innovative Companies in Travel & Hospitality',
    url: 'https://www.fastcompany.com/91270216/travel-hospitality-most-innovative-companies-2025',
  },
  {
    id: 'press-1',
    company: 'Sensible Weather',
    year: '2022',
    outlet: 'TIME',
    headline: 'Top 100 Best Inventions of the Year',
    url: 'https://time.com/collections/best-inventions-2022/6230510/sensible-weather-guarantee/',
  },
  {
    id: 'press-3',
    company: 'Sensible Weather',
    year: '2022',
    outlet: 'TechCrunch',
    headline:
      "Sensible Weather is building an 'oh no, it's raining while I'm on holiday' insurance product",
    url: 'https://techcrunch.com/2022/05/05/it-is-like-raaaaaaaaaaain-on-your-wedding-day/',
  },
];

export const companyStats: CompanyStatsGroup[] = [
  {
    company: 'Digg',
    stats: [
      {
        value: '86.5%',
        label: 'F1 score',
        supporting: [
          { value: '95%', label: 'Recall' },
          { value: '87%', label: 'Precision' },
        ],
      },
      { value: '90%', label: 'Less human review' },
      { value: '75%', label: 'Faster admin workflows' },
    ],
  },
  {
    company: 'Sensible Weather',
    stats: [
      { value: '5,000+', label: 'Partners onboarded' },
      { value: '500K+', label: 'Guarantees sold' },
      { value: '+10%', label: 'Attach rates' },
      { value: '99%', label: 'SLA uptime' },
      { value: '2 → 10', label: 'Team scaled' },
      { value: '4', label: 'New global markets' },
    ],
  },
];
