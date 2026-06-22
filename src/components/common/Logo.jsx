import cn from "../../utils/cn";

// UB monogram seal + wordmark. `tone` adapts it to dark or light backgrounds.
export default function Logo({ tone = "dark", className }) {
  const isLight = tone === "light";
  return (
    <a
      href="#top"
      className={cn("group flex items-center gap-3", className)}
      aria-label="Unibera Towers — home"
    >
      <span
        className={cn(
          "relative grid h-11 w-11 place-items-center rounded-full border transition-colors duration-300",
          isLight ? "border-white/40" : "border-forest/25"
        )}
      >
        <span className="absolute inset-1 rounded-full border border-gold/60" />
        <span
          className={cn(
            "font-serif text-sm tracking-[0.15em]",
            isLight ? "text-white" : "text-forest"
          )}
        >
          UB
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-serif text-xl tracking-[0.22em]",
            isLight ? "text-white" : "text-forest"
          )}
        >
          UNIBERA
        </span>
        <span
          className={cn(
            "mt-1 text-[8px] uppercase tracking-[0.3em]",
            isLight ? "text-white/60" : "text-ink-muted"
          )}
        >
          Marketed by Velmont
        </span>
      </span>
    </a>
  );
}
