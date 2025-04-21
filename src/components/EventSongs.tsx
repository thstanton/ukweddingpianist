import { useForm } from "../hooks/useForm";
import SelectSongEvent from "./SelectSongEvent";

export default function EventSongs() {
  const {
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
  } = useForm();

  return (
    <>
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
    </>
  );
}
