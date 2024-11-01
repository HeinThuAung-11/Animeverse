import { AnimeResponse } from "@/app/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const charactersApi = createApi({
  reducerPath: "characterApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.jikan.moe/v4" }),
  tagTypes: ["Character"],
  endpoints: (build) => ({
    getCharacterById: build.query<AnimeResponse, string>({
      query: (id: string) => `/characters/${id}/full`,
      providesTags: ["Character"],
    }),
    getCharacterPictureById: build.query<AnimeResponse, string>({
      query: (id: string) => `/characters/${id}/pictures`,
      providesTags: ["Character"],
    }),
  }),
});
export const { useGetCharacterByIdQuery, useGetCharacterPictureByIdQuery } = charactersApi;
