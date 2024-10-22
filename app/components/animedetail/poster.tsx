import { AnimeDetail } from "@/app/types/types";

const Poster = ({ animeDetail }: { animeDetail: AnimeDetail }) => {
  return (
    <div className="relative w-full h-[80vh]">
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: `url(${animeDetail?.data?.trailer?.images?.maximum_image_url || ""})`,
          opacity: 0.2,
        }}></div>

      <div className="px-14 grid grid-cols-4 h-full">
        <div className="col-span-1">
          <img
            src={animeDetail?.data?.images?.jpg?.large_image_url || ""}
            alt={animeDetail?.data?.title_english || ""}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="col-span-3 p-6 space-y-3">
          <h1 className="text-white text-3xl font-bold">{animeDetail?.data?.title_english}</h1>
          <h2>Original Name : {animeDetail?.data?.title_japanese}</h2>
          <div>
            <span className="text-white text-lg font-semibold">Duration : </span>
            <span className="text-white text-lg font-light">{animeDetail?.data?.duration}</span>
            <span className="text-white text-lg font-semibold ml-3">Rate : </span>
            <span className="text-white text-lg font-light">{animeDetail?.data?.rating}</span>
          </div>
          {animeDetail?.data?.genres?.map((genre) => (
            <span
              key={genre.mal_id}
              className="inline-block px-3 py-1 text-sm font-semibold text-white bg-black bg-opacity-80 rounded-md mx-1 mt-2">
              {genre.name}
            </span>
          ))}
          {animeDetail?.data?.themes?.map((genre) => (
            <span
              key={genre.mal_id}
              className="inline-block px-3 py-1 text-sm font-semibold text-white bg-black bg-opacity-80 rounded-md mx-1 mt-2">
              {genre.name}
            </span>
          ))}
          <h2 className="text-white text-xl font-semibold">Synopsis</h2>
          <p className="text-justify text-white text-lg font-light mt-6">{animeDetail?.data?.synopsis}</p>
          {animeDetail?.data?.background && animeDetail.data.background.length > 0 && (
            <>
              <h2 className="text-white text-xl font-semibold">Background</h2>
              <p className="text-justify text-white text-lg font-light mt-6">{animeDetail.data.background}</p>
            </>
          )}
          <div>
            <span className="text-white text-lg font-semibold">Score : </span>
            <span className="text-white text-lg font-light">{animeDetail?.data?.score}</span>
            <span className="text-white text-lg font-semibold ml-3">Ranking : </span>
            <span className="text-white text-lg font-light">{animeDetail?.data?.rank}</span>
          </div>
          <h2 className="text-white text-xl font-semibold">Producers</h2>
          {animeDetail?.data?.producers?.map((producer, index) => (
            <span key={producer.mal_id} className="text-white text-lg font-light mr-1">
              {producer.name}
              {animeDetail?.data?.producers && index < animeDetail.data.producers.length - 1 ? "," : ""}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Poster;
