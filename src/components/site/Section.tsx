import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3 text-xs tracking-[0.32em] uppercase text-soft", className)}>
      <span className="w-8 h-px bg-primary" />
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  italic,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  italic?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl reveal",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Eyebrow className={align === "center" ? "justify-center" : ""}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-5 leading-[1.05]">
        {title}
        {italic && <em className="block text-primary">{italic}</em>}
      </h2>
      {description && (
        <p className="mt-5 text-soft text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
