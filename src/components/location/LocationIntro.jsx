import { motion } from "framer-motion";
import ConnectivityMap from "./ConnectivityMap";
import StatCounter from "../common/StatCounter";
import { connectivityStats } from "../../data/location";
import { fadeUp, fadeRight, staggerContainer, viewportOnce } from "../../utils/motion";

export default function LocationIntro() {
  return (
    <section id="location" className="relative overflow-hidden bg-forest-grad py-24 lg:py-32">
      {/* subtle texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(201,169,110,0.12),transparent_55%)]" />

      <div className="container-luxe relative grid items-center gap-14 lg:grid-cols-[58%_42%]">
        <motion.div
          variants={staggerContainer(0.14)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-7"
        >
          <motion.span variants={fadeUp} className="eyebrow-light">
            <span className="h-px w-7 bg-current opacity-60" />
            Location
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="heading-serif text-ivory text-[clamp(2rem,4.4vw,3.6rem)]"
          >
            The Most Promising Address in
            <span className="text-gold-300"> Greater Noida West</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-xs uppercase leading-relaxed tracking-wide3 text-white/55"
          >
            Located in Sector 1, Greater Noida West, one of the region's fastest-growing residential
            corridors, Unibera Towers enjoys seamless connectivity to Noida, Delhi, and key upcoming
            infrastructure, including major expressways and expanding metro networks.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-xs uppercase leading-relaxed tracking-wide3 text-white/55"
          >
            Every aspect of Unibera Towers is thoughtfully envisioned to create a balanced and
            elevated living experience — expansive landscaped greens and carefully curated amenities
            offer a serene escape from the city's rush, while keeping you effortlessly connected.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-2 grid grid-cols-3 gap-6 border-t border-white/15 pt-8"
          >
            {connectivityStats.map((s) => (
              <div key={s.label}>
                <div className="flex items-baseline gap-1">
                  <StatCounter
                    value={s.value}
                    className="font-serif text-4xl font-light text-gold-300 sm:text-5xl"
                  />
                </div>
                <p className="mt-1 text-[11px] uppercase tracking-wide3 text-white">{s.unit}</p>
                <p className="text-[10px] uppercase tracking-wide3 text-white/45">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex justify-center"
        >
          <ConnectivityMap />
        </motion.div>
      </div>
    </section>
  );
}
