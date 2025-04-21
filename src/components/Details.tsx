import { useForm } from "../hooks/useForm";
import FormSection from "./FormSection";
import Input from "./Input";
import SectionHeader from "./SectionHeader";

export default function Details() {
  const { name, setName, email, setEmail, date, setDate } = useForm();

  return (
    <FormSection>
      <SectionHeader>Enter your details:</SectionHeader>
      <Input
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        placeholder="Wedding Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
    </FormSection>
  );
}
