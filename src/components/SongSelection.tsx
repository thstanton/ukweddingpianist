import { useSearchParams } from "react-router-dom";
import SelectSongType, { Genre } from "./SelectSongType";
import { useMemo, useState } from "react";

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
    <div className="mb-3 min-h-96 rounded-xl border-2 border-solid border-neutral-200 p-4">
      <h1 className="mb-3 font-bold">
        Select the songs you would like me to play
      </h1>
      <div
        role="tablist"
        className="tabs tabs-bordered tabs-xs flex w-full md:tabs-md lg:tabs-lg"
      >
        {genreList.map((genre) => (
          <input
            key={genre}
            type="radio"
            name={genre}
            role="tab"
            className={`tab flex-auto ${selectedGenre === genre ? "tab-active" : ""}`}
            aria-label={genre}
            onClick={() => setSelectedGenre(genre)}
          />
        ))}
      </div>
      <SelectSongType genre={selectedGenre} />
    </div>
  );
}
