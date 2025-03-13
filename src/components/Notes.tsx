import FormSection from "./FormSection";
import SectionHeader from "./SectionHeader";
import { useForm } from "../hooks/useForm";

export default function Notes() {
  const { notes, setNotes } = useForm();
  return (
    <FormSection>
      <SectionHeader>Notes:</SectionHeader>
      <textarea
        className="textarea textarea-bordered mb-3 w-full font-sans"
        rows={4}
        placeholder="Enter any notes you have for me here"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
    </FormSection>
  );
}
