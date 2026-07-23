import type { ReactNode } from "react";

type Props = { eyebrow: string; title: ReactNode; dark?: boolean };

export function SectionHeading({ eyebrow, title, dark = false }: Props) {
  return <div><p className={`text-xs font-semibold uppercase tracking-[0.3em] ${dark ? "text-[#d6b878]" : "text-[#9b7a3c]"}`}>{eyebrow}</p><h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">{title}</h2></div>;
}
