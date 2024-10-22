"use client";
import { NewEpisode } from "@/app/types/types";
import { Pagination } from "antd";
import { useState } from "react";

const RecommendedAnime = ({ animes }: { animes: NewEpisode }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 20;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = animes.data.slice(startIndex, startIndex + itemsPerPage);
  console.log(currentItems);
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-bold text-3xl mr-auto ml-10 my-10">Watch New Episodes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mx-auto px-10 items-center justify-items-center gap-3 mb-10">
        {currentItems.map((anime) => (
          <div key={anime?.entry?.mal_id} className="col-span-1 h-[420px] w-[250px]">
            <img
              src={anime?.entry?.images?.jpg?.large_image_url || anime?.entry?.images?.jpg?.small_image_url || " "}
              alt={anime?.entry?.title || ""}
              className="h-[380px]"
            />
            <h3 className="text-sm mb-2 text-center w-[250px]">{anime?.entry?.title}</h3>
            <h3 className="text-sm mb-2 text-center w-[250px]">{anime?.episodes?.[0]?.title}</h3>
          </div>
        ))}
      </div>
      <Pagination
        current={currentPage}
        pageSize={itemsPerPage}
        total={animes.data.length}
        onChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default RecommendedAnime;
