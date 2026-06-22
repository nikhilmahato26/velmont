import { motion } from "framer-motion";
import StatCounter from "../common/StatCounter";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/motion";

export default function Lifestyle() {
  return (
    <section id="lifestyle" className="relative overflow-hidden bg-sand py-24 lg:py-36">
      {/* vertical label */}
      <span className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 text-[11px] uppercase tracking-luxe text-gold-600 lg:block">
        Lifestyle
      </span>

      <div className="container-luxe">
        <motion.div
          variants={staggerContainer(0.16)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-12 lg:grid-cols-[38%_62%] lg:items-end lg:gap-16"
        >
          <motion.div variants={fadeUp}>
            <div className="flex items-start">
              <StatCounter
                value={40}
                className="font-serif text-[clamp(5rem,12vw,9rem)] font-extralight leading-none text-forest"
              />
              <span className="mt-4 font-serif text-3xl font-light text-gold-600">%</span>
            </div>
            <p className="mt-4 max-w-xs text-xs uppercase leading-relaxed tracking-wide3 text-ink-muted">
              Of the project area dedicated to infrastructure, open landscapes and shared
              experiences.
            </p>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-[clamp(2.4rem,6vw,5rem)] font-light leading-[1.02] tracking-tight text-forest"
          >
            Live at the Heart of a{" "}
            <span className="italic text-ink-muted">Dynamic</span> Urban Lifestyle
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
}
