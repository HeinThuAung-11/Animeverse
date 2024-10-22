import { Anime, AnimeDetail, AnimeResponse, NewEpisode } from "@/app/types/types";
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
  }),
});

export const { useGetCurrentAnimeQuery, useGetPromoAnimeQuery, useGetRecommendedAnimeQuery, useGetAnimeDetailQuery } =
  animeApi;
