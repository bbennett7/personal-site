export type Company = {
  name: string;
  title: string;
  period: string;
  incoming?: boolean;
};

export type WorkItem = {
  id: string;
  company: string;
  period: string;
  title: string;
  description: string;
  impact?: string;
};

export type ImpactItem = {
  id: string;
  company: string;
  period: string;
  title: string;
  description: string;
};

export type PressItem = {
  id: string;
  company: string;
  year: string;
  outlet: string;
  headline: string;
  url?: string;
};

export const companies: Company[] = [
  { name: 'WellTheory', title: 'Senior Engineer', period: '2026–', incoming: true },
  { name: 'Digg', title: 'Senior Engineer', period: '2025–2026' },
  { name: 'Sensible Weather', title: 'Senior Engineer', period: '2022–2025' },
  { name: 'Syntx', title: 'Senior Engineer', period: '2021–2022' },
  { name: 'Velvet Hammer Music', title: 'Senior Engineer', period: '2020–2021' },
];

export const work: WorkItem[] = [
  {
    id: 'digg-1',
    company: 'Digg',
    period: '2026',
    title: 'AI-Powered Content Moderation Pipeline',
    description:
      'A RAG-based autonomous moderation layer that retrieved relevant community guidelines and prior moderator actions from a Milvus vector store, then used an LLM via AWS Bedrock to issue grounded decisions with citations to the policies applied. Tuned for high recall on the long tail of borderline content, routing low-confidence calls back to human moderators.',
  },
  {
    id: 'welltheory-1',
    company: 'WellTheory',
    period: '2026',
    title: 'Shipped feature',
    description: 'Placeholder — describe what you shipped here.',
  },
  {
    id: 'welltheory-2',
    company: 'WellTheory',
    period: '2026',
    title: 'Shipped feature',
    description: 'Placeholder — describe what you shipped here.',
  },
  {
    id: 'digg-2',
    company: 'Digg',
    period: '2025',
    title: 'Shipped feature',
    description: 'Placeholder — describe what you shipped here.',
  },
  {
    id: 'digg-3',
    company: 'Digg',
    period: '2024',
    title: 'Shipped feature',
    description: 'Placeholder — describe what you shipped here.',
  },
  {
    id: 'digg-4',
    company: 'Digg',
    period: '2024',
    title: 'Shipped feature',
    description: 'Placeholder — describe what you shipped here.',
  },
  {
    id: 'sensible-1',
    company: 'Sensible Weather',
    period: '2024',
    title: 'Shipped feature',
    description: 'Placeholder — describe what you shipped here.',
  },
  {
    id: 'sensible-2',
    company: 'Sensible Weather',
    period: '2023',
    title: 'Shipped feature',
    description: 'Placeholder — describe what you shipped here.',
  },
  {
    id: 'sensible-3',
    company: 'Sensible Weather',
    period: '2022',
    title: 'Shipped feature',
    description: 'Placeholder — describe what you shipped here.',
  },
  {
    id: 'sensible-4',
    company: 'Sensible Weather',
    period: '2022',
    title: 'Shipped feature',
    description: 'Placeholder — describe what you shipped here.',
  },
  {
    id: 'syntx-1',
    company: 'Syntx',
    period: '2022',
    title: 'Shipped feature',
    description: 'Placeholder — describe what you shipped here.',
  },
  {
    id: 'syntx-2',
    company: 'Syntx',
    period: '2021',
    title: 'Shipped feature',
    description: 'Placeholder — describe what you shipped here.',
  },
  {
    id: 'velvet-1',
    company: 'Velvet Hammer Music',
    period: '2021',
    title: 'Shipped feature',
    description: 'Placeholder — describe what you shipped here.',
  },
  {
    id: 'velvet-2',
    company: 'Velvet Hammer Music',
    period: '2020',
    title: 'Shipped feature',
    description: 'Placeholder — describe what you shipped here.',
  },
];

export const press: PressItem[] = [
  {
    id: 'press-5',
    company: 'Digg',
    year: '2026',
    outlet: 'TechCrunch',
    headline: 'Digg lays off staff and shuts down app as company retools',
    url: 'https://techcrunch.com/2026/03/13/digg-lays-off-staff-and-shuts-down-app-as-company-retools/',
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

export const operationalImpact: ImpactItem[] = [
  {
    id: 'impact-1',
    company: 'Digg',
    period: '2025',
    title: 'Placeholder operational impact',
    description:
      'Placeholder — describe the org-level outcome here (cost reduction, AI rollout, process change, etc.).',
  },
  {
    id: 'impact-2',
    company: 'Sensible Weather',
    period: '2023',
    title: 'Placeholder operational impact',
    description: 'Placeholder — describe the org-level outcome here.',
  },
  {
    id: 'impact-3',
    company: 'Sensible Weather',
    period: '2022',
    title: 'Placeholder operational impact',
    description: 'Placeholder — describe the org-level outcome here.',
  },
];
