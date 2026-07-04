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
        title: 'Orbital',
        author: 'Samantha Harvey',
        url: 'https://bookshop.org/p/books/orbital-a-novel-booker-prize-winner-samantha-harvey/3d8e149556fddb0b',
      },
      {
        title: 'The Information',
        author: 'James Gleick',
        url: 'https://bookshop.org/p/books/the-information-a-history-a-theory-a-flood-james-gleick/7864803',
      },
      {
        title: 'From Technical Debt to Cognitive and Intent Debt: Rethinking Software Health in the Age of AI',
        author: 'Margaret-Anne Storey',
        url: 'https://arxiv.org/abs/2603.22106',
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
        title: 'The AI Daily Brief',
        author: 'Nathaniel Whittemore',
        url: 'https://podcasts.apple.com/us/podcast/the-ai-daily-brief-artificial-intelligence-news/id1680633614',
      },
      {
        title: 'Stick Season',
        author: 'Noah Kahan',
        url: 'https://music.apple.com/us/album/stick-season/1644777188',
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
      'How to turn individual productivity gains from AI into cross-functional gains',
      'Balancing cognitive overload with cognitive engagement',
      'Which California wildflowers to plant in my backyard',
    ],
  },
];
