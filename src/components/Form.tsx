import { useForm } from "../hooks/useForm";
import FormSection from "./FormSection";
import SectionHeader from "./SectionHeader";
import SelectSongEvent from "./SelectSongEvent";
import SongSelection from "./SongSelection";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const {
    name,
    setName,
    email,
    setEmail,
    date,
    setDate,
    processionalSong,
    setProcessionalSong,
    signingSong1,
    setSigningSong1,
    signingSong2,
    setSigningSong2,
    signingSong3,
    setSigningSong3,
    recessionalSong,
    setRecessionalSong,
    notes,
    setNotes,
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => handleSubmit(e).then(() => navigate("/complete"))}
      className="flex flex-col"
    >
      <FormSection>
        <SectionHeader>Enter your details:</SectionHeader>
        <input
          placeholder="Your Name"
          className="input input-bordered"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Your Email"
          className="input input-bordered"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          placeholder="Wedding Date"
          className="input input-bordered"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </FormSection>
      <SongSelection />
      {/* Processional, signing register x3, recessional */}
      <SelectSongEvent
        state={processionalSong}
        setter={setProcessionalSong}
        event="processional"
      />
      <SelectSongEvent
        state={signingSong1}
        setter={setSigningSong1}
        event="1st signing register"
      />
      <SelectSongEvent
        state={signingSong2}
        setter={setSigningSong2}
        event="2nd signing register"
      />
      <SelectSongEvent
        state={signingSong3}
        setter={setSigningSong3}
        event="3rd signing register"
      />
      <SelectSongEvent
        state={recessionalSong}
        setter={setRecessionalSong}
        event="recessional"
      />

      {/* Notes / comments */}
      <FormSection>
        <SectionHeader>Notes:</SectionHeader>
        <textarea
          className="textarea textarea-bordered mb-3 w-full"
          rows={4}
          placeholder="Enter any notes you have for me here"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </FormSection>

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary mb-3">
        Submit
      </button>
    </form>
  );
}
