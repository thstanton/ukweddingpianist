import "./App.css";
import { songData } from "../data/songs";
import { FormEvent, useState } from "react";
import SelectSongType from "./components/SelectSongType";
import SelectSongEvent from "./components/SelectSongEvent";

function App() {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [songs, setSongs] = useState(songData);
  const [processionalSong, setProcessionalSong] = useState<string>();
  const [signingSong1, setSigningSong1] = useState<string>();
  const [signingSong2, setSigningSong2] = useState<string>();
  const [signingSong3, setSigningSong3] = useState<string>();
  const [recessionalSong, setRecessionalSong] = useState<string>();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const selection = {
      name,
      email,
      processionalSong,
      signingSong1,
      signingSong2,
      signingSong3,
      recessionalSong,
      songs: songs.filter((song) => song.checked),
    };
    console.log(selection);
    console.log("Submit");
  }

  return (
    <main className="m-10">
      <div className="mb-3">
        <h1 className="text-4xl">UK Wedding Pianist</h1>
        <h2>Song Selection Form</h2>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="rounded-xl border-2 border-solid border-neutral-200 p-4 mb-3 flex flex-col gap-3">
          <h1 className="font-bold mb-3">Enter your details:</h1>
          <input
            placeholder="Your Name"
            className="input input-bordered"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Your Email"
            className="input input-bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="rounded-xl border-2 border-solid border-neutral-200 p-4 min-h-96 mb-3">
          <h1 className="font-bold mb-3">Select the songs you would like me to play</h1>
          <div role="tablist" className="tabs tabs-bordered w-full">
            <input
              type="radio"
              name="my-tabs-1"
              role="tab"
              className="tab"
              aria-label="Contemporary"
            />
            <SelectSongType
              songs={songs}
              setSongs={setSongs}
              genre="Contemporary"
            />
            <input
              type="radio"
              name="my-tabs-1"
              role="tab"
              className="tab"
              aria-label="Jazz"
            />
            <SelectSongType songs={songs} setSongs={setSongs} genre="Jazz" />
            <input
              type="radio"
              name="my-tabs-1"
              role="tab"
              className="tab"
              aria-label="Classical"
            />
            <SelectSongType
              songs={songs}
              setSongs={setSongs}
              genre="Classical"
            />
            <input
              type="radio"
              name="my-tabs-1"
              role="tab"
              className="tab"
              aria-label="Bollywood"
            />
            <SelectSongType
              songs={songs}
              setSongs={setSongs}
              genre="Bollywood"
            />
            <input
              type="radio"
              name="my-tabs-1"
              role="tab"
              className="tab"
              aria-label="Film/TV/Musicals"
            />
            <SelectSongType
              songs={songs}
              setSongs={setSongs}
              genre="Film, TV and Musicals"
            />
            <input
              type="radio"
              name="my-tabs-1"
              role="tab"
              className="tab"
              aria-label="Christmas"
            />
            <SelectSongType
              songs={songs}
              setSongs={setSongs}
              genre="Christmas"
            />
          </div>
        </div>
        {/* Processional, signing register x3, recessional */}
        <SelectSongEvent
          songs={songs}
          state={processionalSong}
          setter={setProcessionalSong}
          event="processional"
        />
        <SelectSongEvent
          songs={songs}
          state={signingSong1}
          setter={setSigningSong1}
          event="1st signing register"
        />
        <SelectSongEvent
          songs={songs}
          state={signingSong2}
          setter={setSigningSong2}
          event="2nd signing register"
        />
        <SelectSongEvent
          songs={songs}
          state={signingSong3}
          setter={setSigningSong3}
          event="3rd signing register"
        />
        <SelectSongEvent
          songs={songs}
          state={recessionalSong}
          setter={setRecessionalSong}
          event="recessional"
        />

        {/* Notes / comments */}
        <textarea
          className="textarea textarea-bordered mb-3"
          rows={4}
          placeholder="Enter any notes you have for me here"
        />

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </main>
  );
}

export default App;
