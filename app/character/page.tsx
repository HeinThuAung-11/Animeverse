"use client";
import { useGetCharacterByIdQuery } from "@/lib/features/character/characterApi";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
const CharacterPageContent = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("id") || "";
  const router = useRouter();
  const { data: characterData, error: characterError } = useGetCharacterByIdQuery(searchTerm);
  console.log("character", characterData);
  return (
    <div>
      <h1>Character Page</h1>
    </div>
  );
};

let obj = {
  mal_id: 188176,
  url: "https://myanimelist.net/character/188176/Fern",
  images: {
    jpg: {
      image_url: "https://cdn.myanimelist.net/images/characters/13/519083.jpg",
    },
    webp: {
      image_url: "https://cdn.myanimelist.net/images/characters/13/519083.webp",
      small_image_url: "https://cdn.myanimelist.net/images/characters/13/519083t.webp",
    },
  },
  name: "Fern",
  name_kanji: "フェルン",
  nicknames: [],
  favorites: 3544,
  about:
    "Heiter's adopted daughter. After his death, she came under the care of Frieren. Fern grew up to be a strict and mature person beyond her age. Acts as a mother for the members of the squad. She constantly helps Frieren perform simple daily tasks, such as waking her up, dressing her, cooking. She behaves condescendingly with Stark, although they are about the same age, for example, scolds when he goes to bed late. Despite her outward steadfastness, Fern easily gets upset and can behave like a child if she is offended by something.",
  anime: [
    {
      role: "Main",
      anime: {
        mal_id: 52991,
        url: "https://myanimelist.net/anime/52991/Sousou_no_Frieren",
        images: {
          jpg: {
            image_url: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg?s=e4955e3f02ef5a8f4bf8107f25f27fd4",
            small_image_url:
              "https://cdn.myanimelist.net/images/anime/1015/138006t.jpg?s=e4955e3f02ef5a8f4bf8107f25f27fd4",
            large_image_url:
              "https://cdn.myanimelist.net/images/anime/1015/138006l.jpg?s=e4955e3f02ef5a8f4bf8107f25f27fd4",
          },
          webp: {
            image_url: "https://cdn.myanimelist.net/images/anime/1015/138006.webp?s=e4955e3f02ef5a8f4bf8107f25f27fd4",
            small_image_url:
              "https://cdn.myanimelist.net/images/anime/1015/138006t.webp?s=e4955e3f02ef5a8f4bf8107f25f27fd4",
            large_image_url:
              "https://cdn.myanimelist.net/images/anime/1015/138006l.webp?s=e4955e3f02ef5a8f4bf8107f25f27fd4",
          },
        },
        title: "Sousou no Frieren",
      },
    },
    {
      role: "Main",
      anime: {
        mal_id: 56885,
        url: "https://myanimelist.net/anime/56885/Sousou_no_Frieren__●●_no_Mahou",
        images: {
          jpg: {
            image_url: "https://cdn.myanimelist.net/images/anime/1197/139034.jpg?s=1304a35da7803197e590154134b774a8",
            small_image_url:
              "https://cdn.myanimelist.net/images/anime/1197/139034t.jpg?s=1304a35da7803197e590154134b774a8",
            large_image_url:
              "https://cdn.myanimelist.net/images/anime/1197/139034l.jpg?s=1304a35da7803197e590154134b774a8",
          },
          webp: {
            image_url: "https://cdn.myanimelist.net/images/anime/1197/139034.webp?s=1304a35da7803197e590154134b774a8",
            small_image_url:
              "https://cdn.myanimelist.net/images/anime/1197/139034t.webp?s=1304a35da7803197e590154134b774a8",
            large_image_url:
              "https://cdn.myanimelist.net/images/anime/1197/139034l.webp?s=1304a35da7803197e590154134b774a8",
          },
        },
        title: "Sousou no Frieren: ●● no Mahou",
      },
    },
  ],
  manga: [
    {
      role: "Main",
      manga: {
        mal_id: 126287,
        url: "https://myanimelist.net/manga/126287/Sousou_no_Frieren",
        images: {
          jpg: {
            image_url: "https://cdn.myanimelist.net/images/manga/3/232121.jpg?s=4f0c489bf7b4836216be7427831e2b10",
            small_image_url:
              "https://cdn.myanimelist.net/images/manga/3/232121t.jpg?s=4f0c489bf7b4836216be7427831e2b10",
            large_image_url:
              "https://cdn.myanimelist.net/images/manga/3/232121l.jpg?s=4f0c489bf7b4836216be7427831e2b10",
          },
          webp: {
            image_url: "https://cdn.myanimelist.net/images/manga/3/232121.webp?s=4f0c489bf7b4836216be7427831e2b10",
            small_image_url:
              "https://cdn.myanimelist.net/images/manga/3/232121t.webp?s=4f0c489bf7b4836216be7427831e2b10",
            large_image_url:
              "https://cdn.myanimelist.net/images/manga/3/232121l.webp?s=4f0c489bf7b4836216be7427831e2b10",
          },
        },
        title: "Sousou no Frieren",
      },
    },
    {
      role: "Main",
      manga: {
        mal_id: 164432,
        url: "https://myanimelist.net/manga/164432/Sousou_no_Frieren_Anthology__Kotonaru_Tabi_wo_Tanoshimu_Mahou",
        images: {
          jpg: {
            image_url: "https://cdn.myanimelist.net/images/manga/2/292048.jpg?s=6b29eb3d67dba32d0e5c111ab07994c5",
            small_image_url:
              "https://cdn.myanimelist.net/images/manga/2/292048t.jpg?s=6b29eb3d67dba32d0e5c111ab07994c5",
            large_image_url:
              "https://cdn.myanimelist.net/images/manga/2/292048l.jpg?s=6b29eb3d67dba32d0e5c111ab07994c5",
          },
          webp: {
            image_url: "https://cdn.myanimelist.net/images/manga/2/292048.webp?s=6b29eb3d67dba32d0e5c111ab07994c5",
            small_image_url:
              "https://cdn.myanimelist.net/images/manga/2/292048t.webp?s=6b29eb3d67dba32d0e5c111ab07994c5",
            large_image_url:
              "https://cdn.myanimelist.net/images/manga/2/292048l.webp?s=6b29eb3d67dba32d0e5c111ab07994c5",
          },
        },
        title: "Sousou no Frieren Anthology: Kotonaru Tabi wo Tanoshimu Mahou",
      },
    },
  ],
  voices: [
    {
      person: {
        mal_id: 47097,
        url: "https://myanimelist.net/people/47097/Kana_Ichinose",
        images: {
          jpg: {
            image_url: "https://cdn.myanimelist.net/images/voiceactors/3/70398.jpg",
          },
        },
        name: "Ichinose, Kana",
      },
      language: "Japanese",
    },
    {
      person: {
        mal_id: 41966,
        url: "https://myanimelist.net/people/41966/Jill_Harris",
        images: {
          jpg: {
            image_url: "https://cdn.myanimelist.net/images/voiceactors/2/43821.jpg",
          },
        },
        name: "Harris, Jill",
      },
      language: "English",
    },
    {
      person: {
        mal_id: 69039,
        url: "https://myanimelist.net/people/69039/Jehanne_Thellier",
        images: {
          jpg: {
            image_url: "https://cdn.myanimelist.net/images/questionmark_23.gif",
          },
        },
        name: "Thellier, Jehanne",
      },
      language: "French",
    },
    {
      person: {
        mal_id: 55789,
        url: "https://myanimelist.net/people/55789/Maria_Clara_Rosis",
        images: {
          jpg: {
            image_url: "https://cdn.myanimelist.net/images/voiceactors/1/81553.jpg",
          },
        },
        name: "Rosis, Maria Clara",
      },
      language: "Portuguese (BR)",
    },
    {
      person: {
        mal_id: 42650,
        url: "https://myanimelist.net/people/42650/Agnese_Marteddu",
        images: {
          jpg: {
            image_url: "https://cdn.myanimelist.net/images/voiceactors/3/46013.jpg",
          },
        },
        name: "Marteddu, Agnese",
      },
      language: "Italian",
    },
    {
      person: {
        mal_id: 63795,
        url: "https://myanimelist.net/people/63795/Azucena_Estrada",
        images: {
          jpg: {
            image_url: "https://cdn.myanimelist.net/images/voiceactors/2/73695.jpg",
          },
        },
        name: "Estrada, Azucena",
      },
      language: "Spanish",
    },
    {
      person: {
        mal_id: 37649,
        url: "https://myanimelist.net/people/37649/Linda_Fölster",
        images: {
          jpg: {
            image_url: "https://cdn.myanimelist.net/images/voiceactors/1/39598.jpg",
          },
        },
        name: "Fölster, Linda",
      },
      language: "German",
    },
  ],
};
const CharacterPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CharacterPageContent />
    </Suspense>
  );
};

export default CharacterPage;
