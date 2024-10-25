import {
  useLazyGetAnimeCharactersQuery,
  useLazyGetAnimeEpisodesQuery,
  useLazyGetAnimeReviewsQuery,
} from "@/lib/features/anime/animeApi";
import { useEffect, useState } from "react";
import AnimeCharacters from "./characters/AnimeCharacters";
import Overview from "./overview/AnimeOverview";
import AnimeReview from "./reviews/AnimeReviews";

const AnimeTabs = ({ id, video }: { id: string; video: string }) => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { name: "Overview", id: "overview" },
    { name: "Characters", id: "characters" },
    { name: "Reviews", id: "reviews" },
  ];

  // Lazy queries from RTK Query
  const [triggerEpisodes, { data: animeEpisodes, isFetching: isanimeEpisodeFetching }] = useLazyGetAnimeEpisodesQuery();
  const [triggerCharacter, { data: animeCharacters, isFetching: isanimeCharactersFetching }] =
    useLazyGetAnimeCharactersQuery();
  const [triggerReviews, { data: reviewsData, isFetching: isReviewsFetching }] = useLazyGetAnimeReviewsQuery();
  // const [triggerStats, { data: statsData, isFetching: isStatsFetching }] = useLazyGetAnimeStatsQuery();
  useEffect(() => {
    // Trigger the correct query when the tab changes
    if (activeTab === "overview") {
      triggerEpisodes(id);
    } else if (activeTab === "characters") {
      triggerCharacter(id);
    } else if (activeTab === "reviews") {
      triggerReviews(id);
    }
  }, [activeTab, id, triggerCharacter, triggerEpisodes, triggerReviews]);
  console.log("Reviews", reviewsData);
  return (
    <div className="w-full">
      <nav className="flex justify-start space-x-6 bg-[#1A1B20] text-white px-20">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative py-2 text-lg font-semibold transition-colors duration-300 ${
              activeTab === tab.id ? "text-blue-600" : "text-gray-500"
            }`}>
            {tab.name}
            {activeTab === tab.id && (
              <span className="absolute left-0 right-0 h-1 bg-blue-600 rounded-t-lg bottom-0"></span>
            )}
          </button>
        ))}
      </nav>

      <div className="mt-4 px-20">
        {activeTab === "overview" && <Overview video={video} episodes={animeEpisodes} />}
        {activeTab === "characters" && <AnimeCharacters characters={animeCharacters} />}
        {activeTab === "reviews" && <AnimeReview />}
      </div>
    </div>
  );
};
export default AnimeTabs;
