"use client";
import {
  useGetCurrentAnimeQuery,
  useGetPromoAnimeQuery,
  useGetRecommendedAnimeQuery,
} from "@/lib/features/anime/animeApi";
import LoaderComponent from "../common/loader";
import Header from "../header/Header";
import CurrentAnime from "./CurrentAnime";
import RecommendedAnime from "./RecommendedAnime";

export default function Home() {
  // Fetch current animes
  const {
    data: currentAnimes,
    error: currentAnimeError,
    isLoading: isCurrentAnimeLoading,
    isSuccess: isCurrentAnimeSuccess,
  } = useGetCurrentAnimeQuery();

  // Fetch recommended animes
  const {
    data: recommendedAnimes,
    error: recommendedAnimeError,
    isLoading: isRecommendedAnimeLoading,
    isSuccess: isRecommendedAnimeSuccess,
  } = useGetRecommendedAnimeQuery();

  // Fetch promo animes
  const {
    data: promoAnimes,
    error: promoAnimeError,
    isLoading: isPromoAnimeLoading,
    isSuccess: isPromoAnimeSuccess,
  } = useGetPromoAnimeQuery();

  const isLoading = isCurrentAnimeLoading || isRecommendedAnimeLoading || isPromoAnimeLoading;
  const error = currentAnimeError || recommendedAnimeError || promoAnimeError;

  if (error) {
    return <div>Error: "Something went wrong while fetching the data"</div>;
  }

  if (isLoading) {
    return <LoaderComponent />;
  }
  return (
    <>
      {promoAnimes && <Header promos={promoAnimes} />}
      {currentAnimes && <CurrentAnime animes={currentAnimes} />}
      {recommendedAnimes && <RecommendedAnime animes={recommendedAnimes} />}
    </>
  );
}
