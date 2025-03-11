import { ReactNode } from "react";

export default function SectionHeader({ children }: { children: ReactNode }) {
  return <h1 className="mb-3 font-bold">{children}</h1>;
}
