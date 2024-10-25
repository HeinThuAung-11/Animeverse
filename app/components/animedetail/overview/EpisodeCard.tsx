export const EpisodeCard = ({ episode }: { episode: EpisodeCard }) => {
  return (
    <div className="flex w-full md:w-[45%] lg:w-[30%] items-center justify-between h-[70px] bg-[#1A1B20] rounded-lg shadow-md">
      <div className="flex items-center justify-evenly space-x-4">
        <div className="w-14 h-12 flex items-center justify-center text-white rounded-lg text-md font-bold">
          EP. {episode.mal_id}
        </div>
        <div className="text-white font-semibold text-md flex-1 break-words">{episode.title}</div>
      </div>

      <div className="flex items-center space-x-1 text-yellow-400">
        <span className="font-semibold text-md">{episode.score}</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
          <path d="M12 2l2.953 8.994h9.047l-7.328 5.227 2.953 8.994-7.328-5.228-7.328 5.228 2.953-8.994-7.328-5.227h9.047z" />
        </svg>
      </div>
    </div>
  );
};

type EpisodeCard =
  | {
      mal_id: number;
      url: string;
      title: string;
      title_japanese: string;
      title_romanji: string;
      aired: string;
      score: number;
      filler: boolean;
      recap: boolean;
      forum_url: string;
    }
  | {
      mal_id: number;
      url: null;
      title: string;
      title_japanese: string;
      title_romanji: string;
      aired: string;
      score: number;
      filler: boolean;
      recap: boolean;
      forum_url: string;
    };
