"use client";
import { useGetPromoAnimeQuery } from "@/lib/features/anime/animeApi";
import React from "react";
import Slider from "react-slick";

const settings = {
  // dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  cssEase: "linear",
};

const Header: React.FC = () => {
  const { data: promos, error, isLoading, isSuccess } = useGetPromoAnimeQuery();
  if (error) return <div>Error fetching current anime</div>;
  if (isLoading) return <div>Loading...</div>;

  if (isSuccess) {
    return (
      <div className="w-full mx-auto relative">
        <Slider {...settings}>
          {promos?.data?.map((anime, index) => (
            <>
              <div className="relative h-[80vh] w-full flex items-center bg-black">
                <div className="w-1/3 h-full flex items-center justify-center p-6 text-white z-10" key={anime.mal_id}>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-center">{anime.title}</h2>
                    <p className="text-md text-center overflow-hidden line-clamp-5">{anime.synopsis}</p>
                  </div>
                </div>

                <div className="w-2/3 h-full relative">
                  <img
                    src={anime?.trailer?.images?.maximum_image_url || anime?.images?.webp?.large_image_url || " "}
                    alt={anime.title || ""}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
                </div>
              </div>
            </>
          ))}
        </Slider>
      </div>
    );
  }
};

export default Header;
