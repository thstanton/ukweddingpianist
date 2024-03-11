import { useState } from "react";
import { Song } from "../../data/songs";

interface SelectSongEventProps {
  songs: Song[];
  state: string | undefined;
  setter: React.Dispatch<React.SetStateAction<string | undefined>>;
  event: string;
}

export default function SelectSongEvent({
  songs,
  state,
  setter,
  event,
}: SelectSongEventProps) {
  const [selectedOption, setSelectedOption] = useState<string>();

  function handleSelection(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    selectedValue === "Other" ? setter("") : setter(selectedValue);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setter(e.target.value);
    setSelectedOption("Other");
  }

  return (
    <div className="rounded-xl border-2 border-solid border-neutral-200 p-4 mb-3">
      <h1 className="font-bold">Choose your {event} song:</h1>
      <p className="mb-3 text-sm font-extralight italic">
        Select from the list or select 'other' to enter a request
      </p>
      <select
        className="select select-bordered mb-3 mr-3 grow"
        defaultValue="Choose song"
        value={selectedOption}
        onChange={handleSelection}
      >
        <option disabled>Choose song</option>
        {songs
          .filter((song) => song.checked)
          .map((song, idx) => (
            <option value={song.title} key={idx}>
              {song.artist ? `${song.title} - ${song.artist}` : song.title}
            </option>
          ))}
        <option>Other</option>
      </select>
      {selectedOption === "Other" && (
        <input
          type="text"
          className="input input-bordered"
          value={state}
          placeholder="Enter your request here"
          onChange={handleInputChange}
        />
      )}
    </div>
  );
}
