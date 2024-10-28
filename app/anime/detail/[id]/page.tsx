"use client";
import AnimeTabs from "@/app/components/animedetail/animetabs";
import Poster from "@/app/components/animedetail/poster";
import LoaderComponent from "@/app/components/common/loader";
import { useGetAnimeDetailQuery } from "@/lib/features/anime/animeApi";
import { useParams } from "next/navigation";

const AnimeDetailPage = () => {
  const { id } = useParams();
  const { data: animeDetail, error, isLoading } = useGetAnimeDetailQuery(Array.isArray(id) ? id[0] : id);
  if (isLoading) return <LoaderComponent />;
  if (error) return <div>Error loading anime details</div>;
  if (!animeDetail) return <div>No anime details found</div>;
  console.log(animeDetail);
  return (
    <>
      <Poster animeDetail={animeDetail} />

      <AnimeTabs id={animeDetail?.data?.mal_id?.toString() || ""} video={animeDetail?.data?.trailer?.embed_url ?? ""} />
    </>
  );
};

export default AnimeDetailPage;
