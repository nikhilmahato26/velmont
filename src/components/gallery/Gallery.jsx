import { motion } from "framer-motion";
import { gallery } from "../../data/media";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "../../utils/motion";

function Labelled({ src, alt, label, className }) {
  return (
    <motion.figure
      variants={scaleIn}
      className={`group relative overflow-hidden rounded-4xl ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent opacity-70" />
      <figcaption className="absolute bottom-5 left-5 text-[10px] uppercase tracking-luxe text-white">
        {label}
      </figcaption>
    </motion.figure>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="bg-ivory py-24 lg:py-32">
      <div className="container-luxe">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex items-center gap-4"
        >
          <span className="font-serif text-2xl text-gold-600">/</span>
          <span className="h-px w-16 bg-forest/20" />
          <span className="eyebrow">Master View</span>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.14)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 grid gap-5 lg:grid-cols-[60%_40%]"
        >
          <Labelled
            src={gallery.aerial}
            alt="Aerial view of Unibera Towers and amenity deck"
            label="Arial View"
            className="h-[360px] lg:h-[560px]"
          />
          <div className="grid gap-5">
            <Labelled
              src={gallery.green}
              alt="Landscaped green courtyard"
              label="Green"
              className="h-[270px]"
            />
            <Labelled
              src={gallery.relax}
              alt="Poolside relaxation lounge"
              label="Relax Zone"
              className="h-[270px]"
            />
          </div>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-soft"
        >
          Unibera is a fully self-sufficient community, offering everything needed for a luxurious
          life.
        </motion.p>
      </div>
    </section>
  );
}
