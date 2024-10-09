"use client";
import { useGetRecommendedAnimeQuery } from "@/lib/features/anime/animeApi";
import { Pagination } from "antd";
import React, { useState } from "react";

const RecommendedAnime: React.FC = () => {
  const { data: animes, error, isLoading, isSuccess } = useGetRecommendedAnimeQuery();

  // State for managing current page
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // Number of items to display per page

  if (error) return <div>Error fetching current anime</div>;
  if (isLoading) return <div>Loading...</div>;

  console.log("recommended", animes);
  if (isSuccess && animes) {
    // Slice the array to get items for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = animes.data.slice(startIndex, startIndex + itemsPerPage);

    return (
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-3xl mr-auto ml-10 my-10">Watch New Episodes</h2>
        <div className="grid grid-cols-5 mx-auto px-10 items-center justify-items-center gap-3 mb-10">
          {currentItems.map((anime) => (
            <div key={anime?.entry?.mal_id} className="col-span-1 h-[420px] ">
              <img
                src={anime?.entry?.images?.jpg?.image_url || " "}
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
  }

  return null; // Return null if no other conditions match
};

export default RecommendedAnime;
