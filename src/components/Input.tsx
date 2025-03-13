import { ChangeEventHandler } from "react";

export default function Input({
  value,
  onChange,
  required = false,
  placeholder,
}: {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  placeholder: string;
}) {
  return (
    <input
      placeholder={placeholder}
      className="input input-bordered font-sans"
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}
