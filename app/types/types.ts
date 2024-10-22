export interface Image {
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
export type Detail = {
  relations: {
    relation: string | null;
    entry: {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }[];
  }[];
  theme: {
    openings: string[];
    endings: string[];
  };
  external: {
    name: string;
    url: string;
  }[];
  streaming: {
    name: string;
    url: string;
  }[];
};
export type AnimeDetail = {
  data: Anime & Detail;
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
