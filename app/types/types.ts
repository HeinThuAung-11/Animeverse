interface Image {
  image_url: string | null;
  small_image_url: string | null;
  large_image_url: string | null;
}

interface TrailerImages {
  image_url: string | null;
  small_image_url: string | null;
  medium_image_url: string | null;
  large_image_url: string | null;
  maximum_image_url: string | null;
}

interface Trailer {
  youtube_id: string | null;
  url: string | null;
  embed_url: string | null;
  images: TrailerImages | null;
}

interface Title {
  type: string | null;
  title: string | null;
}

interface AiredProp {
  day: number | null;
  month: number | null;
  year: number | null;
}

interface Aired {
  from: string | null;
  to: string | null;
  prop: {
    from: AiredProp | null;
    to: AiredProp | null;
  } | null;
  string: string | null;
}

interface Producer {
  mal_id: number | null;
  type: string | null;
  name: string | null;
  url: string | null;
}

interface Genre {
  mal_id: number | null;
  type: string | null;
  name: string | null;
  url: string | null;
}

interface Broadcast {
  day: string | null;
  time: string | null;
  timezone: string | null;
  string: string | null;
}

export type Anime = {
  mal_id: number | null;
  url: string | null;
  images: {
    jpg: Image | null;
    webp: Image | null;
  } | null;
  trailer: Trailer | null;
  approved: boolean | null;
  titles: Title[] | null;
  title: string | null;
  title_english: string | null;
  title_japanese: string | null;
  title_synonyms: string[] | null;
  type: string | null;
  source: string | null;
  episodes: number | null;
  status: string | null;
  airing: boolean | null;
  aired: Aired | null;
  duration: string | null;
  rating: string | null;
  score: number | null;
  scored_by: number | null;
  rank: number | null;
  popularity: number | null;
  members: number | null;
  favorites: number | null;
  synopsis: string | null;
  background: string | null;
  season: string | null;
  year: number | null;
  broadcast: Broadcast | null;
  producers: Producer[] | null;
  licensors: Producer[] | null;
  studios: Producer[] | null;
  genres: Genre[] | null;
  explicit_genres: any[] | null;
  themes: any[] | null;
  demographics: Genre[] | null;
};
type Pagination = {
  last_visible_page: number | null;
  has_next_page: boolean | null;
  current_page: number | null;
  items: {
    count: number | null;
    total: number | null;
    per_page: number | null;
  };
};
export type AnimeResponse = {
  data: Anime[];
  pagination: Pagination;
};

let obj: Anime = {
  mal_id: 54857,
  url: "https://myanimelist.net/anime/54857/Re_Zero_kara_Hajimeru_Isekai_Seikatsu_3rd_Season",
  images: {
    jpg: {
      image_url: "https://cdn.myanimelist.net/images/anime/1706/144725.jpg",
      small_image_url: "https://cdn.myanimelist.net/images/anime/1706/144725t.jpg",
      large_image_url: "https://cdn.myanimelist.net/images/anime/1706/144725l.jpg",
    },
    webp: {
      image_url: "https://cdn.myanimelist.net/images/anime/1706/144725.webp",
      small_image_url: "https://cdn.myanimelist.net/images/anime/1706/144725t.webp",
      large_image_url: "https://cdn.myanimelist.net/images/anime/1706/144725l.webp",
    },
  },
  trailer: {
    youtube_id: "qMJNdQFPaHk",
    url: "https://www.youtube.com/watch?v=qMJNdQFPaHk",
    embed_url: "https://www.youtube.com/embed/qMJNdQFPaHk?enablejsapi=1&wmode=opaque&autoplay=1",
    images: {
      image_url: "https://img.youtube.com/vi/qMJNdQFPaHk/default.jpg",
      small_image_url: "https://img.youtube.com/vi/qMJNdQFPaHk/sddefault.jpg",
      medium_image_url: "https://img.youtube.com/vi/qMJNdQFPaHk/mqdefault.jpg",
      large_image_url: "https://img.youtube.com/vi/qMJNdQFPaHk/hqdefault.jpg",
      maximum_image_url: "https://img.youtube.com/vi/qMJNdQFPaHk/maxresdefault.jpg",
    },
  },
  approved: true,
  titles: [
    {
      type: "Default",
      title: "Re:Zero kara Hajimeru Isekai Seikatsu 3rd Season",
    },
    {
      type: "Synonym",
      title: "Re: Life in a different world from zero 3rd Season",
    },
    {
      type: "Synonym",
      title: "ReZero 3rd Season",
    },
    {
      type: "Synonym",
      title: "Re:Zero - Starting Life in Another World 3",
    },
    {
      type: "Japanese",
      title: "Re:ゼロから始める異世界生活",
    },
    {
      type: "English",
      title: "Re:ZERO -Starting Life in Another World- Season 3",
    },
  ],
  title: "Re:Zero kara Hajimeru Isekai Seikatsu 3rd Season",
  title_english: "Re:ZERO -Starting Life in Another World- Season 3",
  title_japanese: "Re:ゼロから始める異世界生活",
  title_synonyms: [
    "Re: Life in a different world from zero 3rd Season",
    "ReZero 3rd Season",
    "Re:Zero - Starting Life in Another World 3",
  ],
  type: "TV",
  source: "Light novel",
  episodes: 16,
  status: "Currently Airing",
  airing: true,
  aired: {
    from: "2024-10-02T00:00:00+00:00",
    to: null,
    prop: {
      from: {
        day: 2,
        month: 10,
        year: 2024,
      },
      to: {
        day: null,
        month: null,
        year: null,
      },
    },
    string: "Oct 2, 2024 to ?",
  },
  duration: "Unknown",
  rating: "R - 17+ (violence & profanity)",
  score: 8.93,
  scored_by: 15874,
  rank: 20,
  popularity: 1041,
  members: 241925,
  favorites: 2738,
  synopsis: "Third season of Re:Zero kara Hajimeru Isekai Seikatsu.",
  background:
    "The third season is comprised of at least two arcs. The first eight episodes are subtitled Shuugeki-hen (Attack Arc). The latter eight, subtitled Hangeki-hen (Counterattack Arc), began airing on February 5, 2025.",
  season: "fall",
  year: 2024,
  broadcast: {
    day: "Wednesdays",
    time: "22:30",
    timezone: "Asia/Tokyo",
    string: "Wednesdays at 22:30 (JST)",
  },
  producers: [
    {
      mal_id: 238,
      type: "anime",
      name: "AT-X",
      url: "https://myanimelist.net/anime/producer/238/AT-X",
    },
    {
      mal_id: 306,
      type: "anime",
      name: "Magic Capsule",
      url: "https://myanimelist.net/anime/producer/306/Magic_Capsule",
    },
    {
      mal_id: 647,
      type: "anime",
      name: "Memory-Tech",
      url: "https://myanimelist.net/anime/producer/647/Memory-Tech",
    },
    {
      mal_id: 1333,
      type: "anime",
      name: "Hakuhodo DY Music & Pictures",
      url: "https://myanimelist.net/anime/producer/1333/Hakuhodo_DY_Music___Pictures",
    },
    {
      mal_id: 1696,
      type: "anime",
      name: "Kadokawa",
      url: "https://myanimelist.net/anime/producer/1696/Kadokawa",
    },
    {
      mal_id: 2927,
      type: "anime",
      name: "DAXEL",
      url: "https://myanimelist.net/anime/producer/2927/DAXEL",
    },
  ],
  licensors: [],
  studios: [
    {
      mal_id: 314,
      type: "anime",
      name: "White Fox",
      url: "https://myanimelist.net/anime/producer/314/White_Fox",
    },
  ],
  genres: [
    {
      mal_id: 8,
      type: "anime",
      name: "Drama",
      url: "https://myanimelist.net/anime/genre/8/Drama",
    },
    {
      mal_id: 10,
      type: "anime",
      name: "Fantasy",
      url: "https://myanimelist.net/anime/genre/10/Fantasy",
    },
    {
      mal_id: 41,
      type: "anime",
      name: "Suspense",
      url: "https://myanimelist.net/anime/genre/41/Suspense",
    },
  ],
  explicit_genres: [],
  themes: [
    {
      mal_id: 62,
      type: "anime",
      name: "Isekai",
      url: "https://myanimelist.net/anime/genre/62/Isekai",
    },
    {
      mal_id: 40,
      type: "anime",
      name: "Psychological",
      url: "https://myanimelist.net/anime/genre/40/Psychological",
    },
    {
      mal_id: 78,
      type: "anime",
      name: "Time Travel",
      url: "https://myanimelist.net/anime/genre/78/Time_Travel",
    },
  ],
  demographics: [],
};
type Episode = {
  mal_id: number | null;
  url: string | null;
  title: string | null;
  premium: boolean | null;
};

type Entry = {
  mal_id: number | null;
  url: string | null;
  images: {
    jpg: Image | null;
    webp: Image | null;
  } | null;
  title: string | null;
};

export type NewEpisode = {
  data: {
    entry: Entry | null;
    episodes: Episode[] | null;
    region_locked: boolean | null;
  }[];
  pagination: Pagination;
};
