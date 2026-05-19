export type NowEntry = {
  title: string;
  author?: string;
  url?: string;
  note?: string;
  location?: string;
};

export type NowItem = {
  type: string;
  entries: (string | NowEntry)[];
  aside?: string;
};

export const lastRevised = 'May 2026';

export const now: NowItem[] = [
  {
    type: 'Reading',
    entries: [
      {
        title: 'Vineland',
        author: 'Thomas Pynchon',
        url: 'https://bookshop.org/p/books/vineland-thomas-pynchon/60826da4a2f2c6ae',
      },
      {
        title: 'The Singularity Is Near',
        author: 'Ray Kurzweil',
        url: 'https://bookshop.org/p/books/the-singularity-is-near-when-humans-transcend-biology-ray-kurzweil/5209bfbe77fdf4c6?ean=9780143037880&next=t',
      },
      {
        title: 'Emotion Concepts and their Function in a Large Language Model',
        author: 'Sofroniew et al.',
        url: 'https://arxiv.org/abs/2604.07729',
      },
    ],
  },
  {
    type: 'Listening',
    entries: [
      {
        title: 'Pivot',
        author: 'Kara Swisher & Scott Galloway',
        url: 'https://podcasts.apple.com/us/podcast/pivot/id1073226719',
      },
      {
        title: 'Dwarkesh Podcast',
        author: 'Dwarkesh Patel',
        url: 'https://podcasts.apple.com/us/podcast/dwarkesh-podcast/id1516093381',
      },
      {
        title: 'Aoxomoxoa',
        author: 'Grateful Dead',
        url: 'https://music.apple.com/us/album/aoxomoxoa/663597904',
      },
    ],
  },
  {
    type: 'Attending',
    entries: [
      {
        title: 'NY Tech Week — Product Meetup by Lenny\'s Newsletter',
        url: 'https://partiful.com/e/9f5IxBLEiOhNjijLN7h3',
        note: 'June 4',
        location: 'New York City',
      },
    ],
  },
  {
    type: 'Thinking about',
    entries: [
      'Measurement and practices for increasing team confidence in shipping agent-written code',
      'Mechanistic interpretability, and how insights into how AIs actually work would change how we work with them',
      'Which SoCal peak I should climb next',
    ],
  },
];
