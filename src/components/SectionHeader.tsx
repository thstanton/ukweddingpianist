import { ReactNode } from "react";

export default function SectionHeader({ children }: { children: ReactNode }) {
  return <h1 className="font-bold text-xl">{children}</h1>;
}
