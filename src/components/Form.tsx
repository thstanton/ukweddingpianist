import { useForm } from "../hooks/useForm";
import Details from "./Details";
import Notes from "./Notes";
import SongSelection from "./SongSelection";
import { useNavigate } from "react-router-dom";
import SubmitButton from "./SubmitButton";
import EventSongs from "./EventSongs";

export default function Form() {
  const { handleSubmit } = useForm();
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => handleSubmit(e).then(() => navigate("/complete"))}
      className="flex flex-col"
    >
      <Details />
      <SongSelection />
      <EventSongs />
      <Notes />
      <SubmitButton />
    </form>
  );
}
