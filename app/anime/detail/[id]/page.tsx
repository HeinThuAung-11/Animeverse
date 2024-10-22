"use client";
import { useGetAnimeDetailQuery } from "@/lib/features/anime/animeApi";
import { useParams } from "next/navigation";

const AnimeDetailPage = () => {
  const { id } = useParams();
  const { data: animeDetail, error, isLoading } = useGetAnimeDetailQuery(Array.isArray(id) ? id[0] : id);

  return (
    <div className="relative w-full h-[80vh]">
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: `url(${animeDetail?.data?.trailer?.images?.maximum_image_url || ""})`,
          opacity: 0.2,
        }}></div>

      <div className="px-6 grid grid-cols-4 h-full">
        <div className="col-span-1">
          <img
            src={animeDetail?.data?.images?.jpg?.large_image_url || ""}
            alt={animeDetail?.data?.title_english || ""}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="col-span-3 p-6">
          <h1 className="text-white text-4xl font-bold">{animeDetail?.data?.title_english}</h1>
          <h1>Anime Detail Page</h1>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetailPage;
