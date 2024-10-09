import type { Metadata } from "next";
import Header from "./components/header/Header";
import CurrentAnime from "./components/home/CurrentAnime";
import RecommendedAnime from "./components/home/RecommendedAnime";

export default function IndexPage() {
  return (
    <>
      <Header />
      <CurrentAnime />
      <RecommendedAnime />
    </>
  );
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
