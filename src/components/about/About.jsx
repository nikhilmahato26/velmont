import { motion } from "framer-motion";
import { aboutNature } from "../../data/media";
import { site } from "../../data/site";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "../../utils/motion";

export default function About() {
  return (
    <section id="about" className="relative bg-ivory py-24 lg:py-32">
      <div className="container-luxe">
        {/* Top headline */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-5xl text-center font-serif text-[clamp(1.8rem,4vw,3.4rem)] font-light uppercase leading-[1.05] tracking-tight text-forest"
        >
          Unibera is a masterpiece of modern architecture,
          <span className="text-gold-600"> set in a prime location</span>
        </motion.h2>

        {/* Two columns */}
        <div className="mt-16 grid items-center gap-12 lg:mt-20 lg:grid-cols-[42%_58%] lg:gap-16">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            <div className="absolute inset-0 overflow-hidden rounded-full shadow-card">
              <img
                src={aboutNature}
                alt="Aerial view of lush green river landscape"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-forest/10" />
            </div>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 bg-forest/30 px-5 py-2 text-[10px] uppercase tracking-luxe text-white backdrop-blur-sm">
              Nature
            </span>
            <span className="animate-float absolute -bottom-4 -right-2 rounded-2xl bg-white px-5 py-3 text-center shadow-soft">
              <span className="block font-serif text-3xl text-forest">100%</span>
              <span className="text-[9px] uppercase tracking-wide3 text-ink-muted">
                Green Living
              </span>
            </span>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-7"
          >
            <motion.p variants={fadeUp} className="text-base leading-relaxed text-ink-soft">
              Unibera Towers is a thoughtfully envisioned residential address nestled amidst lush
              green surroundings in Sector 1, Greater Noida West. Designed for modern urban living
              and strong long-term investment potential, the project seamlessly blends contemporary
              architecture with intelligent layouts and excellent connectivity.
            </motion.p>

            <motion.div variants={fadeUp} className="h-px w-full bg-forest/10" />

            <motion.p variants={fadeUp} className="text-base leading-relaxed text-ink-soft">
              With expansive green landscapes, curated amenities, and well-crafted residences,
              Unibera Towers offers a lifestyle where elegance, comfort, and mindful living come
              together in perfect harmony.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-serif text-2xl font-medium italic text-forest lg:text-3xl"
            >
              Unibera — {site.tagline}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
