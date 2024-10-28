"use client";
import { AnimeResponse } from "@/app/types/types";
import { useRouter } from "next/navigation";
import React from "react";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  cssEase: "linear",
};

interface HeaderProps {
  promos: AnimeResponse;
}

const Header: React.FC<HeaderProps> = ({ promos }) => {
  const router = useRouter();
  return (
    <div className="relative px-8">
      <Slider {...settings}>
        {promos?.data?.map((anime, index) => (
          <>
            <div
              className="relative h-[80vh] flex items-center bg-black cursor-pointer"
              key={anime.mal_id}
              onClick={() => router.push(`/anime/detail/${anime?.mal_id}`)}>
              <div className="w-1/3 p-6 h-full text-white z-10">
                <div className="space-y-4 h-full flex flex-col items-center justify-evenly">
                  <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                    {anime.title}
                  </h2>
                  <p className="text-md text-center overflow-hidden line-clamp-5">{anime.synopsis}</p>
                </div>
              </div>

              <div className="w-2/3 h-full relative">
                <img
                  src={anime?.trailer?.images?.maximum_image_url || anime?.images?.webp?.large_image_url || " "}
                  alt={anime.title || ""}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
              </div>
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
};

export default Header;
