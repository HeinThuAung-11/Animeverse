import { Characters } from "@/app/types/types";
import { CharacterCard } from "./CharacterCard";

const animeCharacters = ({ characters }: { characters?: Characters }) => {
  console.log(characters);
  return (
    <>
      <h2 className="text-white text-3xl font-bold mt-6">Characters</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 3xl:grid-cols-4 gap-4">
        {characters?.data?.map(({ character, voice_actors, role }) => {
          return <CharacterCard character={character} voice_actors={voice_actors} role={role} key={character.mal_id} />;
        })}
      </div>
    </>
  );
};
export default animeCharacters;
