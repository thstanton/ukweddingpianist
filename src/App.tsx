import "./App.css";
import { songData } from "../data/songs";
import { FormEvent, useState } from "react";
import SelectSongType from "./components/SelectSongType";
import SelectSongEvent from "./components/SelectSongEvent";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [songs, setSongs] = useState(songData);
  const [processionalSong, setProcessionalSong] = useState<string>();
  const [signingSong1, setSigningSong1] = useState<string>();
  const [signingSong2, setSigningSong2] = useState<string>();
  const [signingSong3, setSigningSong3] = useState<string>();
  const [recessionalSong, setRecessionalSong] = useState<string>();
  const [notes, setNotes] = useState<string>();
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const requestList = songs
      .filter((song) => song.checked)
      .map(
        (song) =>
          `<li>${song.title}${song.artist ? ` - ${song.artist}` : ""}</li>`,
      )
      .join("");

    const data = {
      service_id: "default_service",
      template_id: `${import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID}`,
      user_id: `${import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY}`,
      template_params: {
        sender_name: name,
        sender_email: email,
        message: `
          <h1>Requests</h1>
          <ul>
            ${requestList}
          </ul>
          <p>Processional: <strong>${processionalSong}</strong></p>
          <p>Signing Register (first song): <strong>${signingSong1}</strong></p>
          <p>Signing Register (second song): <strong>${signingSong2}</strong></p>
          <p>Signing Register (third song): <strong>${signingSong3}</strong></p>
          <p>Recessional: <strong>${recessionalSong}</strong></p>
          <p>Notes: <span>${notes}</span></p>
          `,
      },
    };

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );
      if (response.status !== 200) {
        throw new Error("Email not sent");
      }
      navigate("/complete");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="mx-10 mt-3">
      <div className="flex items-center gap-2">
        <img src="/mr.svg" className="w-16 mb-3"/>
        <div className="mb-3 flex flex-col justify-center">
          <h1 className="text-4xl">UK Wedding Pianist</h1>
          <h2>Song Selection Form</h2>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col">
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
        </div>
        <div className="mb-3 min-h-96 rounded-xl border-2 border-solid border-neutral-200 p-4">
          <h1 className="mb-3 font-bold">
            Select the songs you would like me to play
          </h1>
          <div role="tablist" className="tabs tabs-bordered tabs-xs md:tabs-md lg:tabs-lg max-w-full">
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
              aria-label="Jazz"
            />
            <SelectSongType songs={songs} setSongs={setSongs} genre="Jazz" />
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
              aria-label="Bollywood"
            />
            <SelectSongType
              songs={songs}
              setSongs={setSongs}
              genre="Bollywood"
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
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </main>
  );
}
