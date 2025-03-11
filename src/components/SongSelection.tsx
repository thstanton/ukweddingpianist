import { useSearchParams } from "react-router-dom";
import SelectSongType, { Genre } from "./SelectSongType";
import { useMemo, useState } from "react";
import FormSection from "./FormSection";
import SectionHeader from "./SectionHeader";

export default function SongSelection() {
  const [searchParams] = useSearchParams();
  const genreList: Genre[] = useMemo(() => {
    const list: Genre[] = [
      "Contemporary",
      "Classical",
      "Jazz",
      "Film, TV and Musicals",
    ];

    if (searchParams.has("genre", "bollywood")) genreList.push("Bollywood");
    if (searchParams.has("genre", "christmas")) genreList.push("Christmas");

    return list;
  }, [searchParams]);
  const [selectedGenre, setSelectedGenre] = useState<Genre>("Contemporary");

  return (
    <FormSection>
      <SectionHeader>Select the songs you would like me to play</SectionHeader>
      <div
        role="tablist"
        className="tabs tabs-border tabs-xs flex w-full md:tabs-md lg:tabs-lg"
      >
        {genreList.map((genre) => (
          <input
            key={genre}
            type="radio"
            name="genres"
            role="tab"
            checked={genre === selectedGenre}
            className="tab flex-auto"
            aria-label={genre}
            onClick={() => setSelectedGenre(genre)}
          />
        ))}
      </div>
      <SelectSongType genre={selectedGenre} />
    </FormSection>
  );
}
