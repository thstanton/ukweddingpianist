import { ReactNode } from "react";

export default function FormSection({ children }: { children: ReactNode }) {
  return (
    <div className="mb-8 flex flex-col gap-3 rounded-xl border-2 border-solid border-base-200 p-4 font-serif">
      {children}
    </div>
  );
}
