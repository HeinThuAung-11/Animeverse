"use client";

import { useSearchAnimeGenreQuery } from "@/lib/features/anime/animeApi";
import { useRouter, useSearchParams } from "next/navigation";

const GenrePage = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("query") || "";
  const genreName = searchParams.get("name") || "";
  const router = useRouter();
  const { data: animes, error, isLoading } = useSearchAnimeGenreQuery(searchTerm);
  console.log("serach", animes);

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-bold text-3xl mr-auto ml-10 my-10">
        Searching Anime By Genre- <span className="text-blue-500">{genreName}</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mx-auto px-8 items-center justify-items-center gap-3 mb-10">
        {animes &&
          animes?.data?.map((anime, index) => (
            <div
              key={anime?.mal_id}
              onClick={() => router.push(`/anime/detail/${anime?.mal_id}`)}
              className="col-span-1 h-[450px] w-[250px] cursor-pointer">
              <img
                src={anime?.images?.jpg?.large_image_url || anime?.images?.jpg?.small_image_url || " "}
                alt={anime?.title || ""}
                className="h-[380px] w-[240px] object-cover"
              />
              <h3 className="text-sm mb-2 text-center w-[240px]">{anime?.title}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GenrePage;
