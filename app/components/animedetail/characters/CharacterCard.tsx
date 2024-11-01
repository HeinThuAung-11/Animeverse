"use client";
import { useRouter } from "next/navigation";

export const CharacterCard = ({ character, voice_actors, role }: CharacterCard) => {
  const router = useRouter();
  return (
    <div
      key={character.mal_id}
      className="flex items-center bg-[#1A1B20] rounded-md border border-gray-100 hover:border-2 hover:border-lime-500 transition duration-300">
      {/* Left side: Character Image and Info */}
      <div className="flex items-center w-1/2 space-x-4">
        <img
          src={character?.images?.jpg?.image_url}
          alt={character.name}
          className="w-32 h-32 object-cover rounded-md"
        />
        <div className="flex flex-col justify-center items-center w-32 text-center">
          <h3
            className="text-white text-md font-semibold cursor-pointer hover:text-purple-500"
            onClick={() => router.push(`/character?id=${character.mal_id}`)}>
            {character.name}
          </h3>
          <h3 className="text-white text-md">{role}</h3>
        </div>
      </div>

      {/* Divider */}
      <div className="border-l-2 border-gray-600 h-32"></div>

      {/* Right side: Voice Actor Image and Info */}
      <div className="flex items-center w-1/2 space-x-4">
        <div className="flex flex-col justify-center items-center w-32 text-center">
          <h3 className="text-white text-md font-semibold">{voice_actors[0]?.person?.name}</h3>
          <h3 className="text-white text-md">{voice_actors[0]?.language}</h3>
        </div>
        <img
          src={voice_actors[0]?.person?.images?.jpg?.image_url}
          alt={character.name}
          className="w-32 h-32 object-cover rounded-md"
        />
      </div>
    </div>
  );
};
type CharacterCard = {
  character: {
    mal_id: number;
    url: string;
    images: {
      jpg: {
        image_url: string;
      };
      webp: {
        image_url: string;
        small_image_url: string;
      };
    };
    name: string;
  };
  role: string;
  voice_actors: {
    person: {
      mal_id: number;
      url: string;
      images: {
        jpg: {
          image_url: string;
        };
      };
      name: string;
    };
    language: string;
  }[];
};
