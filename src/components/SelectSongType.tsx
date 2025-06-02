import { useMemo } from "react";
import { useForm } from "../hooks/useForm";

export type Genre =
  | "Contemporary"
  | "Classical"
  | "Jazz"
  | "Film, TV and Musicals"
  | "Bollywood"
  | "Christmas";

interface SelectSongTypeProps {
  genre: Genre;
}

export default function SelectSongType({ genre }: SelectSongTypeProps) {
  const { songs, setSongs } = useForm();
  const genreSongs = useMemo(
    () =>
      songs
        .filter((song) => song.genre === genre)
        .sort((a, b) => a.title.localeCompare(b.title)),
    [songs, genre],
  );

  const handleCheckboxChange = (id: number, checked: boolean) => {
    const updatedSongs = songs.map((song) =>
      song.id === id ? { ...song, checked } : song,
    );
    setSongs(updatedSongs);
  };

  return (
    <div role="tabpanel" className="w-full p-2 md:p-6">
      <div className="flex w-full flex-col flex-wrap md:flex-row">
        {genreSongs.map((song) => (
          <label
            className="label w-full cursor-pointer justify-start pb-2 md:w-1/2 xl:w-1/3"
            key={song.id}
          >
            <input
              type="checkbox"
              checked={song.checked || false}
              onChange={(e) => handleCheckboxChange(song.id, e.target.checked)}
            />
            <span className="label-text">
              {song.artist ? `${song.title} - ${song.artist}` : `${song.title}`}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
