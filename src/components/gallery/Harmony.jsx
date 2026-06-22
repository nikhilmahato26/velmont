import { motion } from "framer-motion";
import { harmony } from "../../data/media";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "../../utils/motion";

export default function Harmony() {
  return (
    <section className="bg-forest-grad py-24 lg:py-32">
      <div className="container-luxe">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="heading-serif text-ivory text-[clamp(2.4rem,6vw,5.5rem)] uppercase"
        >
          In Harmony
          <br />
          <span className="text-gold-300">With Nature</span>
        </motion.h2>

        <motion.div
          variants={staggerContainer(0.16)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-5 lg:grid-cols-[35%_65%]"
        >
          <motion.figure
            variants={scaleIn}
            className="h-[280px] overflow-hidden rounded-4xl lg:h-[440px]"
          >
            <img
              src={harmony.courtyard}
              alt="Rendered courtyard interior"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.figure>
          <motion.figure
            variants={scaleIn}
            className="h-[280px] overflow-hidden rounded-4xl lg:h-[440px]"
          >
            <img
              src={harmony.exterior}
              alt="Exterior of the towers framed by palms and balconies"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.figure>
        </motion.div>
      </div>
    </section>
  );
}
