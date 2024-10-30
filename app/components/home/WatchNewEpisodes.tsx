"use client";
import { NewEpisode } from "@/app/types/types";
import { Pagination } from "antd";
import { useState } from "react";
import { AnimeCard } from "./AnimationCard";

const WatchNewEpisodes = ({ animes }: { animes: NewEpisode }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 20;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = animes.data.slice(startIndex, startIndex + itemsPerPage);
  console.log("currentitems", currentItems);
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-bold text-3xl mr-auto ml-10 my-10">Watch New Episodes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mx-auto px-8 items-center justify-items-center gap-3 mb-10">
        {currentItems.map((anime, index) => (
          <AnimeCard key={anime?.entry?.mal_id} anime={anime} index={index} />
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

export default WatchNewEpisodes;
