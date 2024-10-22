"use client";
import { Image } from "@/app/types/types";
import { useRouter } from "next/navigation";

export function RecommendCard(anime: {
  entry: {
    mal_id: number | null;
    url: string | null;
    images: {
      jpg: Image | null;
      webp: Image | null;
    } | null;
    title: string | null;
  } | null;
  episodes: { mal_id: number | null; url: string | null; title: string | null; premium: boolean | null }[] | null;
  region_locked: boolean | null;
}) {
  const router = useRouter();
  return (
    <div
      key={anime?.entry?.mal_id}
      onClick={() => router.push(`/anime/detail/${anime?.entry?.mal_id}`)}
      className="col-span-1 h-[420px] w-[250px] cursor-pointer">
      <img
        src={anime?.entry?.images?.jpg?.large_image_url || anime?.entry?.images?.jpg?.small_image_url || " "}
        alt={anime?.entry?.title || ""}
        className="h-[380px]"
      />
      <h3 className="text-sm mb-2 text-center w-[250px]">{anime?.entry?.title}</h3>
      <h3 className="text-sm mb-2 text-center w-[250px]">{anime?.episodes?.[0]?.title}</h3>
    </div>
  );
}
