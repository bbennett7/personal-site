export type Influence = {
  name: string;
  by?: string;
  why: string;
  url?: string;
};

export type InfluenceCategory = {
  name: string;
  items: Influence[];
};

export type PersonalItem = {
  title: string;
  body: string;
  href?: string;
  linkText?: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption?: string;
  };
};

export const influences: InfluenceCategory[] = [
  {
    name: 'Books',
    items: [
      {
        name: 'Travels with Charley in Search of America',
        by: 'John Steinbeck',
        why: 'This is my all-time favorite book. It reminds me to slow down, back up, and reconnect.',
        url: 'https://bookshop.org/p/books/travels-with-charley-in-search-of-america-john-steinbeck/371aecdbaab0c003?ean=9780140053203&next=t',
      },
      {
        name: 'How to Create a Mind',
        by: 'Ray Kurzweil',
        why: "Kurzweil's neurobiological deep-dive completely changed how I think about intelligence and humanity, and the philosophical questions surrounding them.",
        url: 'https://bookshop.org/p/books/how-to-create-a-mind-the-secret-of-human-thought-revealed-ray-kurzweil/a35979eb119bd86c?ean=9780143124047&next=t',
      },
      {
        name: 'The Dharma Bums',
        by: 'Jack Kerouac',
        why: "To me, this book is about finding meaning in friendship and nature — what's not to love? It's tied for my all-time favorite book.",
        url: 'https://bookshop.org/p/books/the-dharma-bums-penguin-classics-deluxe-edition-jack-kerouac/3b2852d8878a70cc?ean=9780143039600&next=t',
      },
      {
        name: 'The Master Algorithm',
        by: 'Pedro Domingos',
        why: 'I credit Domingos with kickstarting my AI excitement. This book helped open my mind up to all of the possibilities — particularly those far outside of anything familiar in my own life — that AI can unlock.',
        url: 'https://bookshop.org/p/books/the-master-algorithm-how-the-quest-for-the-ultimate-learning-machine-will-remake-our-world-pedro-domingos/7bd4f20f56ef96b8?ean=9780465094271&next=t',
      },
      {
        name: 'The Art of Happiness',
        by: 'Dalai Lama',
        why: "As someone who is forever trying to fit a steady meditation practice into modern life, this book is the closest thing to a guide that I've found on doing just that (metaphorically).",
        url: 'https://bookshop.org/p/books/the-art-of-happiness-10th-anniversary-edition-a-handbook-for-living-dalai-lama/8a879905efd947e0?ean=9781573227544&next=t',
      },
      {
        name: 'Clean Architecture',
        by: 'Robert Martin',
        why: 'At the very beginning of my engineering career, this book provided the framework through which I could think about and discover my own opinions and practices on what it means to build good software.',
        url: 'https://bookshop.org/p/books/clean-architecture-a-craftsman-s-guide-to-software-structure-and-design-robert-martin/98f3f004b2e6fc1e',
      },
    ],
  },
  {
    name: 'Papers, Videos & Content',
    items: [
      {
        name: 'Software Fundamentals Matter More Than Ever',
        by: 'AI Engineer & Matt Pocock',
        why: '',
        url: 'https://www.youtube.com/watch?v=v4F1gFy-hqg',
      },
      {
        name: 'Compound Engineering: The AI-native engineering philosophy',
        by: 'Kieran Klaassen',
        why: '',
        url: 'https://every.to/guides/compound-engineering',
      },
      {
        name: 'But what is a neural network?',
        by: '3Blue1Brown',
        why: '',
        url: 'https://www.youtube.com/watch?v=aircAruvnKk',
      },
      {
        name: 'Attention Is All You Need',
        by: 'Vaswani et al.',
        why: '',
        url: 'https://arxiv.org/abs/1706.03762',
      },
      {
        name: 'What happens after coding is solved',
        by: 'Lenny Rachitsky & Boris Cherny',
        why: '',
        url: 'https://www.youtube.com/watch?v=We7BZVKbCVw',
      },
    ],
  },
  {
    name: 'Newsletters & Organizations',
    items: [
      {
        name: "Lenny's Newsletter",
        by: 'Lenny Rachitsky',
        why: '',
        url: 'https://www.lennysnewsletter.com/',
      },
      {
        name: 'Stanford HAI (Institute for Human-Centered AI)',
        why: '',
        url: 'https://hai.stanford.edu/',
      },
      {
        name: 'AI for Humans',
        by: 'Gavin Purcell & Kevin Pereira',
        why: '',
        url: 'https://www.aiforhumans.show/newsletter',
      },
      {
        name: 'Stanford Digital Economy Lab',
        why: '',
        url: 'https://digitaleconomy.stanford.edu/',
      },
    ],
  },
  {
    name: 'Podcasts',
    items: [
      {
        name: 'Pivot',
        by: 'Kara Swisher & Scott Galloway',
        why: '',
        url: 'https://podcasts.apple.com/us/podcast/pivot/id1073226719',
      },
      {
        name: 'The AI Daily Brief',
        by: 'Nathaniel Whittemore',
        why: '',
        url: 'https://podcasts.apple.com/us/podcast/the-ai-daily-brief-artificial-intelligence-news/id1680633614',
      },
      {
        name: 'Dwarkesh Podcast',
        by: 'Dwarkesh Patel',
        why: '',
        url: 'https://podcasts.apple.com/us/podcast/dwarkesh-podcast/id1516093381',
      },
      {
        name: 'Possible',
        by: 'Reid Hoffman',
        why: '',
        url: 'https://podcasts.apple.com/us/podcast/possible/id1677184070',
      },
    ],
  },
];

export const personalItems: PersonalItem[] = [
  {
    title: 'My environment',
    body: 'Currently living in the hills of Los Angeles, nestled in one of its many beautiful canyons.',
    image: {
      src: '/images/environment.webp',
      alt: 'View of the Laurel Canyon hills',
      width: 1200,
      height: 900,
      caption: 'Fryman Canyon, Los Angeles',
    },
  },
  {
    title: 'My hobbies',
    body: 'Music, hiking, reading, whiskey, travel, gardening, and camping. Aspirational: restoring vintage cars, astronomy, and rock climbing.',
    image: {
      src: '/images/hobbies.webp',
      alt: 'Music wall with guitar, vinyl records, and framed prints',
      width: 1200,
      height: 900,
    },
  },
  {
    title: 'My family',
    body: 'My wife and our dog, Zuma. ❤️',
    image: {
      src: '/images/family.webp',
      alt: 'Dog on a hike in the canyon',
      width: 900,
      height: 1200,
    },
  },
  {
    title: 'My goals',
    body: "I've run a marathon, and climbed Mt. Whitney. Next I want to complete the Lake Tahoe Triathlon, but that will take a lot more training.",
    image: {
      src: '/images/goals.webp',
      alt: 'Mountain summit view at sunrise',
      width: 1200,
      height: 900,
      caption: 'Sunrise, Mt. Whitney',
    },
  },
];
