// ./app/search/page.tsx
"use client";

import { useSearchAnimeQuery } from "@/lib/features/anime/animeApi";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("query") || "";
  const router = useRouter();
  const { data: animes, error, isLoading } = useSearchAnimeQuery(searchTerm);

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-bold text-3xl mr-auto ml-10 my-10">
        Searching Anime - <span className="text-blue-500">{searchTerm}</span>
      </h2>

      {isLoading ? (
        <p className="text-xl text-center">Loading...</p>
      ) : error ? (
        <p className="text-red-500 text-center">An error occurred while fetching data.</p>
      ) : (
        <Suspense fallback={<p>Loading...</p>}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mx-auto px-8 items-center justify-items-center gap-4 mb-10">
            {animes?.data?.map((anime) => (
              <div
                key={anime?.mal_id}
                onClick={() => router.push(`/anime/detail/${anime?.mal_id}`)}
                className="col-span-1 h-[450px] w-[250px] cursor-pointer hover:scale-105 transition-transform"
                role="button"
                tabIndex={0}
                aria-label={`Go to details of ${anime?.title}`}>
                <img
                  src={anime?.images?.jpg?.large_image_url || anime?.images?.jpg?.small_image_url || " "}
                  alt={anime?.title || "Anime Image"}
                  className="h-[380px] w-[240px] object-cover rounded-md"
                />
                <h3 className="text-sm mb-2 text-center w-[240px] truncate">{anime?.title}</h3>
              </div>
            ))}
          </div>
        </Suspense>
      )}
    </div>
  );
};

export default SearchPage;
