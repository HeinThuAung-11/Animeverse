import { Episodes } from "@/app/types/types";
import { EpisodeCard } from "./EpisodeCard";

const Overview = ({ video, episodes }: { video: string; episodes?: Episodes }) => {
  return (
    <>
      <h2 className="text-white text-3xl font-bold my-4">Trailer</h2>
      <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full bg-black">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={video}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube Video"></iframe>
      </div>
      {episodes?.data && episodes.data.length > 0 && (
        <>
          <h2 className="text-white text-3xl font-bold mt-6">Episodes</h2>
          <div className="flex flex-wrap gap-4 my-4">
            {episodes?.data.map((episode) => {
              return <EpisodeCard episode={episode} key={episode.mal_id} />;
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Overview;
