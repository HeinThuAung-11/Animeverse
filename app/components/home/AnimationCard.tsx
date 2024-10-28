import { Image } from "@/app/types/types";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RecommendCard } from "./RecommendCard";
export const AnimeCard = ({
  anime,
  index,
}: {
  anime: {
    entry: {
      mal_id: number | null;
      url: string | null;
      images: {
        jpg: Image | null;
        webp: Image | null;
      } | null;
      title: string | null;
    } | null;
    episodes: { mal_id: number | null; url: string | null; title: string | null; premium: boolean | null }[] | null;
    region_locked: boolean | null;
  };
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05 }}>
      {RecommendCard(anime)}
    </motion.div>
  );
};
