"use client";
import AnimeTabs from "@/app/components/animedetail/animetabs";
import Poster from "@/app/components/animedetail/poster";
import LoaderComponent from "@/app/components/common/loader";
import { useGetAnimeDetailQuery } from "@/lib/features/anime/animeApi";
import { useParams } from "next/navigation";

const AnimeDetailPage = () => {
  const { id } = useParams();
  const { data: animeDetail, error, isLoading } = useGetAnimeDetailQuery(Array.isArray(id) ? id[0] : id);
  console.log(animeDetail);
  if (isLoading) return <LoaderComponent />;
  if (error) return <div>Error loading anime details</div>;
  if (!animeDetail) return <div>No anime details found</div>;

  return (
    <>
      <Poster animeDetail={animeDetail} />
      {/* <div className="bg-[#1A1B20] text-white p-4 flex space-x-4 items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Comments</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Like</button>
      </div> */}
      <AnimeTabs />
    </>
  );
};

export default AnimeDetailPage;
