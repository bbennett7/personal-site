export type NowEntry = {
  title: string;
  author?: string;
  url?: string;
  note?: string;
  location?: string;
  /** ISO date (YYYY-MM-DD). Once past, the entry hides itself — see NowList. */
  until?: string;
};

export type NowItem = {
  type: string;
  entries: (string | NowEntry)[];
  aside?: string;
};

export const lastRevised = 'August 2026';

export const now: NowItem[] = [
  {
    type: 'Reading',
    entries: [
      {
        title: 'Bewilderment',
        author: 'Richard Powers',
        url: 'https://bookshop.org/p/books/bewilderment-richard-powers/16302638',
      },
      {
        title: 'Mood Machine: The Rise of Spotify and the Costs of the Perfect Playlist',
        author: 'Liz Pelly',
        url: 'https://bookshop.org/p/books/mood-machine-the-rise-of-spotify-and-the-costs-of-the-perfect-playlist-liz-pelly/21630791',
      },
      {
        title: 'A global workspace in language models',
        author: 'Anthropic',
        url: 'https://www.anthropic.com/research/global-workspace',
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
        title: 'Harvest Moon',
        author: 'Neil Young',
        url: 'https://music.apple.com/us/album/harvest-moon/72796976',
      },
    ],
  },
  {
    // Entries need an `until` date — they disappear on their own once it passes,
    // and the whole category drops out when nothing upcoming is left.
    type: 'Attending',
    entries: [],
  },
  {
    type: 'Thinking about',
    entries: [
      'The implications of the most bullish current AI predictions being right',
      'The implications of the most bullish current AI predictions being wrong',
      'How to effectively plant and water a hillside for erosion control',
    ],
  },
];
