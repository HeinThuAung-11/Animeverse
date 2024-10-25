"use client";
import { AnimeResponse } from "@/app/types/types";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import { Card } from "./Card";
var settings = {
  dots: true,
  className: "slider variable-width",
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  initialSlide: 5,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768, // New breakpoint between 1024 and 600
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const CurrentAnime = ({ animes }: { animes: AnimeResponse }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center py-4 px-8">
      <h2 className="font-bold text-3xl mr-auto ml-10 my-10">Current Animes</h2>
      <div className="w-full mx-auto relative">
        <Slider {...settings}>
          {animes.data.map((anime) => (
            <div
              key={anime.mal_id}
              onClick={() => router.push(`/anime/detail/${anime.mal_id}`)}
              className="cursor-pointer">
              <Card
                image={anime?.images?.jpg?.large_image_url}
                title={anime.title}
                synopsis={anime.synopsis}
                rating={anime.score}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CurrentAnime;
