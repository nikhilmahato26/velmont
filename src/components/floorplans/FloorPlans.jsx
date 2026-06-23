import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { floorPlans } from "../../data/floorplans";
import cn from "../../utils/cn";
import { fadeUp, viewportOnce } from "../../utils/motion";

export default function FloorPlans() {
  const [active, setActive] = useState(0);
  const plan = floorPlans[active];

  return (
    <section id="floorplans" className="relative bg-forest-950 py-24 lg:py-32">
      <div className="container-luxe">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center text-center"
        >
          <span className="eyebrow-light tracking-luxe">Unibera Towers</span>
          <h2 className="heading-serif mt-5 text-ivory text-[clamp(2.4rem,6vw,4.5rem)]">
            Floor Plans
          </h2>
          <span className="mt-5 h-px w-12 bg-gold/60" />
        </motion.div>

        {/* Tabs */}
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden border-t border-white/10 sm:grid-cols-3 lg:grid-cols-6">
          {floorPlans.map((p, i) => {
            const isActive = i === active;
            return (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className={cn(
                  "relative flex flex-col items-center gap-1.5 px-3 py-6 text-center transition-colors duration-300",
                  isActive ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"
                )}
              >
                <span
                  className={cn(
                    "text-[12px] font-medium uppercase tracking-wide3 transition-colors",
                    isActive ? "text-gold-300" : "text-white/70"
                  )}
                >
                  {p.type}
                </span>
                <span
                  className={cn(
                    "text-[11px] tracking-wide transition-colors",
                    isActive ? "text-ivory/80" : "text-white/40"
                  )}
                >
                  {p.area} Sq.ft · {p.tower}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="floorplan-underline"
                    className="absolute inset-x-0 -bottom-px h-px bg-gold"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active plan subtitle */}
        <div className="mt-10 flex flex-col gap-5 border-b border-white/10 pb-6">
          <AnimatePresence mode="wait">
            <motion.h3
              key={plan.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="heading-serif text-ivory text-[clamp(1.4rem,3vw,2.2rem)] uppercase tracking-wide"
            >
              {plan.title}
            </motion.h3>
          </AnimatePresence>
        </div>

        {/* Plan image */}
        <AnimatePresence mode="wait">
          <motion.figure
            key={plan.id}
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.985 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-forest"
          >
            <img
              src={plan.image}
              alt={plan.title}
              loading="lazy"
              className="h-auto w-full object-contain"
            />
          </motion.figure>
        </AnimatePresence>
      </div>
    </section>
  );
}
