"use client";
import { useGetCurrentAnimeQuery } from "@/lib/features/anime/animeApi";
import Slider from "react-slick";
import { Card } from "./Card";
var settings = {
  dots: true,
  className: "slider variable-width",
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  initialSlide: 0,
  variableWidth: true,
  responsive: [
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
const CurrentAnime = () => {
  const { data: animes, error, isLoading, isSuccess } = useGetCurrentAnimeQuery();
  if (error) return <div>Error fetching current anime</div>;
  if (isLoading) return <div>Loading...</div>;
  if (isSuccess) {
    return (
      <div className="flex flex-col items-center py-4 px-8">
        <h2 className="text-xl font-bold mb-3">Current Anime</h2>
        <div className="w-full mx-auto relative">
          {" "}
          <Slider {...settings}>
            {animes.data.map((anime) => (
              <div key={anime.mal_id}>
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
  }
};

export default CurrentAnime;