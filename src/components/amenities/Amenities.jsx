import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { amenities } from "../../data/amenities";
import SectionHeading from "../common/SectionHeading";
import { viewportOnce } from "../../utils/motion";

export default function Amenities() {
  const [active, setActive] = useState(0);

  return (
    <section id="amenities" className="relative bg-forest-950 py-24 lg:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Amenities"
          title="Curated for Everyday Indulgence"
          tone="light"
          className="max-w-2xl"
        />
      </div>

      <div className="container-luxe mt-12 lg:mt-16">
        <ul className="border-t border-white/10">
          {amenities.map((a, i) => {
            const isActive = active === i;
            return (
              <motion.li
                key={a.no}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group relative overflow-hidden border-b border-white/10"
              >
                {/* Reveal image */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <img
                        src={a.image}
                        alt={a.name}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-forest/80" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <a
                  href="#contact"
                  className="relative flex items-center gap-5 px-2 py-7 sm:px-4 lg:py-9"
                >
                  <span className="w-10 shrink-0 text-xs font-medium tracking-wide3 text-gold-300">
                    {a.no}
                  </span>
                  <span className="flex-1 text-center font-serif text-[clamp(1.6rem,4.5vw,3.5rem)] font-light uppercase tracking-wide3 text-ivory transition-colors duration-300">
                    {a.name}
                  </span>
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                      isActive
                        ? "border-gold bg-gold text-forest"
                        : "border-white/25 text-white/60"
                    }`}
                  >
                    <ArrowUpRight size={18} />
                  </span>
                </a>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
