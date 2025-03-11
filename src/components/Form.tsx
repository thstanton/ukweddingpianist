import { useForm } from "../hooks/useForm";
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
      <div className="mb-3 flex flex-col gap-3 rounded-xl border-2 border-solid border-neutral-200 p-4">
        <h1 className="mb-3 font-bold">Enter your details:</h1>
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
      </div>
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
      <textarea
        className="textarea textarea-bordered mb-3"
        rows={4}
        placeholder="Enter any notes you have for me here"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary mb-3">
        Submit
      </button>
    </form>
  );
}
