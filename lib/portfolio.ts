export type Project = {
  domain: string;
  url?: string;
  tagline: string;
  description: string;
};

export const projects: Project[] = [
  {
    domain: 'insidethe.ai',
    url: 'https://insidethe.ai',
    tagline: 'Interactive AI visualization.',
    description:
      'An interactive tool for exploring the inner mechanics of AI models. Currently features a live visualizer for transformer internals — attention heads, MLP layers, residual streams — using the mechanistic interpretability package nnsight and GPT-2 as a reference model. More experiences and components coming.',
  },
  {
    domain: 'askdumbquestions.ai',
    url: 'https://askdumbquestions.ai',
    tagline: 'One question. One answer. Every weekday.',
    description:
      'An accessible place to start exploring AI — to start learning about what it actually is and what it can do. The questions range from explaining the latest buzzy term to digging into the technology itself.',
  },
  {
    domain: 'openrsrch.ai',
    // url: 'https://openrsrch.ai',
    tagline: 'Research for everyone.',
    description:
      'A modern interface for consuming the latest cutting-edge research, all from arXiv.',
  },
];
