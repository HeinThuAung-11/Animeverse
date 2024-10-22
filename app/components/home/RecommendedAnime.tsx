"use client";
import { NewEpisode } from "@/app/types/types";
import { Pagination } from "antd";
import { useState } from "react";
import { RecommendCard } from "./RecommendCard";

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
        {currentItems.map((anime) => RecommendCard(anime))}
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
