import { useState } from "react";
import { useForm } from "../hooks/useForm";
import FormSection from "./FormSection";
import SectionHeader from "./SectionHeader";

interface SelectSongEventProps {
  state: string;
  setter: React.Dispatch<React.SetStateAction<string>>;
  event: string;
}

export default function SelectSongEvent({
  state,
  setter,
  event,
}: SelectSongEventProps) {
  const { songs } = useForm();
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
    <FormSection>
      <SectionHeader>Choose your {event} song:</SectionHeader>
      <p className="font-extralight text-neutral-500">
        Select from the list or select 'other' to enter a request
      </p>
      <div className="flex items-center mb-3">
        <select
          className="select select-bordered mr-3 font-sans"
          defaultValue="Choose song"
          value={selectedOption}
          onChange={handleSelection}
        >
          <option disabled>Choose song</option>
          {songs
            .filter((song) => song.checked)
            .map((song, idx) => (
              <option
                value={
                  song.artist ? `${song.title} - ${song.artist}` : song.title
                }
                key={idx}
              >
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
    </FormSection>
  );
}
