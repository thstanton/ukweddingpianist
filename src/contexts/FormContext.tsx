import {
  createContext,
  Dispatch,
  FormEvent,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Song, songData } from "../../data/songs";

interface FormContext {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  date: string;
  setDate: Dispatch<SetStateAction<string>>;
  songs: Song[];
  setSongs: Dispatch<SetStateAction<Song[]>>;
  processionalSong: string;
  setProcessionalSong: Dispatch<SetStateAction<string>>;
  signingSong1: string;
  setSigningSong1: Dispatch<SetStateAction<string>>;
  signingSong2: string;
  setSigningSong2: Dispatch<SetStateAction<string>>;
  signingSong3: string;
  setSigningSong3: Dispatch<SetStateAction<string>>;
  recessionalSong: string;
  setRecessionalSong: Dispatch<SetStateAction<string>>;
  notes: string;
  setNotes: Dispatch<SetStateAction<string>>;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}

export const FormContext = createContext<FormContext | null>(null);

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [songs, setSongs] = useState(songData);
  const [processionalSong, setProcessionalSong] = useState<string>("");
  const [signingSong1, setSigningSong1] = useState<string>("");
  const [signingSong2, setSigningSong2] = useState<string>("");
  const [signingSong3, setSigningSong3] = useState<string>("");
  const [recessionalSong, setRecessionalSong] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  useEffect(() => {
    songs.sort((a, b) => a.title.localeCompare(b.title));
  }, [songs]);

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
            <p>Date: <strong>${date}</strong></p>
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
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <FormContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        date,
        setDate,
        songs,
        setSongs,
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
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
