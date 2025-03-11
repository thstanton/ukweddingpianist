import { ReactNode } from "react";

export default function FormSection({ children }: { children: ReactNode }) {
  return (
    <div className="mb-3 flex flex-col gap-3 rounded-xl border-2 border-solid border-neutral-200 p-4">
      {children}
    </div>
  );
}
