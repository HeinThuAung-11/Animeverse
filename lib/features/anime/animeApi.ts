import { Anime, AnimeDetail, AnimeResponse, Characters, Episodes, Genres, NewEpisode } from "@/app/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const animeApi = createApi({
  reducerPath: "animeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.jikan.moe/v4" }),
  tagTypes: ["Anime", "PromoAnime"],
  endpoints: (build) => ({
    getCurrentAnime: build.query<AnimeResponse, void>({
      query: () => `/seasons/now`,
      // providesTags: ["Anime"],
      providesTags: (result) =>
        result?.data
          ? [
              { type: "Anime", id: "LIST" },
              ...result.data.map(({ mal_id }) => ({ type: "Anime", id: mal_id ?? "" }) as const),
            ]
          : [{ type: "Anime", id: "LIST" }],
    }),
    getPromoAnime: build.query<AnimeResponse, void>({
      query: () => "/top/anime?limit=5",
      providesTags: ["PromoAnime"],
    }),
    getRecommendedAnime: build.query<NewEpisode, void>({
      query: () => "/watch/episodes",
      providesTags: ["PromoAnime"],
    }),
    getAnimeDetail: build.query<Anime & AnimeDetail, string>({
      query: (id) => `/anime/${id}/full`,
      providesTags: (result, error, id) => [{ type: "Anime", id }],
    }),
    getAnimeEpisodes: build.query<Episodes, string>({
      query: (id) => `/anime/${id}/episodes`,
      providesTags: (result, error, id) => [{ type: "Anime", id }],
    }),
    getAnimeCharacters: build.query<Characters, string>({
      query: (id) => `/anime/${id}/characters`,
      providesTags: (result, error, id) => [{ type: "Anime", id }],
    }),
    getAnimeStats: build.query<NewEpisode, string>({
      query: (id) => `/anime/${id}/moreinfo`,
      providesTags: (result, error, id) => [{ type: "Anime", id }],
    }),
    getAnimeReviews: build.query<NewEpisode, string>({
      query: (id) => `/anime/${id}/forum`,
      providesTags: (result, error, id) => [{ type: "Anime", id }],
    }),
    getAnimeStaffs: build.query<NewEpisode, string>({
      query: (id) => `/anime/${id}/staff`,
      providesTags: (result, error, id) => [{ type: "Anime", id }],
    }),
    searchAnime: build.query<AnimeResponse, string>({
      query: (searchTerm: string) => `/anime?q=${searchTerm}`,
      providesTags: (result, error, id) => [{ type: "Anime", id }],
    }),
    getAnimeGenre: build.query<Genres, void>({
      query: () => `/genres/anime`,
    }),
    searchAnimeGenre: build.query<AnimeResponse, string>({
      query: (genreId: string) => `anime?genres=${genreId}&order_by=popularity`,
    }),
  }),
});

export const {
  useGetCurrentAnimeQuery,
  useGetPromoAnimeQuery,
  useGetRecommendedAnimeQuery,
  useGetAnimeDetailQuery,
  useLazyGetAnimeEpisodesQuery,
  useLazyGetAnimeCharactersQuery,
  useLazyGetAnimeStatsQuery,
  useLazyGetAnimeReviewsQuery,
  useLazyGetAnimeStaffsQuery,
  useSearchAnimeQuery,
  useSearchAnimeGenreQuery,
  useGetAnimeGenreQuery,
} = animeApi;
