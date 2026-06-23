import cn from "../../utils/cn";

const UNIBERA_LOGO =
  "https://unibera.co.in/wp-content/uploads/2026/03/Untitled-design-26.png";
const VELMONT_LOGO =
  "https://res.cloudinary.com/dynbpb9u0/image/upload/v1782240124/Velmont_Logo_Unit-05-05_h94mfo.png";

// Unibera badge + wordmark, with a "Marketed by Velmont" credit.
// `tone` adapts the text colour to dark or light backgrounds.
export default function Logo({ tone = "dark", className }) {
  const isLight = tone === "light";
  return (
    <a
      href="#top"
      className={cn("group flex items-center gap-3", className)}
      aria-label="Unibera Towers — home"
    >
      <img
        src={UNIBERA_LOGO}
        alt="Unibera"
        className="h-11 w-11 shrink-0 rounded-full object-cover"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-serif text-xl tracking-[0.22em]",
            isLight ? "text-white" : "text-forest"
          )}
        >
          UNIBERA
        </span>
        <span className="mt-1.5 flex items-center gap-1.5">
          <span
            className={cn(
              "text-[8px] uppercase tracking-[0.25em]",
              isLight ? "text-white/60" : "text-ink-muted"
            )}
          >
            Marketed by
          </span>
          <img
            src={VELMONT_LOGO}
            alt="Velmont Realty"
            className="h-5 w-auto object-contain"
          />
        </span>
      </span>
    </a>
  );
}
