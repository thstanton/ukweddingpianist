import { Song } from "../../data/songs";

interface SelectSongTypeProps {
  songs: Song[];
  setSongs: React.Dispatch<React.SetStateAction<Song[]>>;
  genre:
    | "Contemporary"
    | "Classical"
    | "Jazz"
    | "Film, TV and Musicals"
    | "Bollywood"
    | "Christmas";
}

export default function SelectSongType({
  songs,
  setSongs,
  genre,
}: SelectSongTypeProps) {
  return (
      <div role="tabpanel" className="tab-content p-6">
        <div className="flex flex-col md:flex-row flex-wrap">
          {songs
            .filter((song) => song.genre === genre)
            .map((song, idx) => (
              <label
                className="label md:w-1/2 xl:w-1/4 cursor-pointer justify-start gap-2"
                key={idx}
              >
                <input
                  type="checkbox"
                  checked={song.checked || false}
                  onChange={(e) => {
                    const updatedSongs = [...songs];
                    updatedSongs[idx] = {
                      ...song,
                      checked: e.target.checked,
                    };
                    setSongs(updatedSongs);
                  }}
                />
                <span className="label-text">
                  {song.artist
                    ? `${song.title} - ${song.artist}`
                    : `${song.title}`}
                </span>
              </label>
            ))}
        </div>
      </div>

  );
}
