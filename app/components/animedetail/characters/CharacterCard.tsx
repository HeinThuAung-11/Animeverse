export const CharacterCard = ({ character, voice_actors, role }: CharacterCard) => {
  return (
    <div
      key={character.mal_id}
      className="flex items-center bg-[#1A1B20] rounded-md border border-gray-100 hover:border-2 hover:border-lime-500 transition duration-300">
      <div className="flex items-center w-[200px]">
        <img
          src={character?.images?.jpg?.image_url}
          alt={character.name}
          className="w-32 h-32 object-cover flex-1 rounded-md"
        />
        <div className="flex flex-col justify-between items-center flex-1">
          <h3 className="text-white text-md font-semibold text-center">{character.name}</h3>
          <h3 className="text-white text-md">{role}</h3>
        </div>
      </div>
      <div className="border-l-2 border-gray-600 h-32"></div>
      <div className="flex items-center w-[200px] flex-1">
        <div className="flex flex-col justify-evenly items-center">
          <h3 className="text-white text-md font-semibold text-center"> {voice_actors[0]?.person?.name}</h3>
          <h3 className="text-white text-md">{voice_actors[0]?.language}</h3>
        </div>
        <img
          src={voice_actors[0]?.person?.images?.jpg?.image_url}
          alt={character.name}
          className="w-32 h-32 object-cover flex-1 rounded-md"
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
