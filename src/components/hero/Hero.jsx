import { motion } from "framer-motion";
import { ChevronDown, ArrowUpRight, MapPin } from "lucide-react";
import { hero } from "../../data/media";
import { site } from "../../data/site";

const tags = ["Construction", "Interior Design", "Consulting", "Renovation", "Real Estate"];

const previews = [
  {
    no: "01",
    title: "Residential Complex in Alanya",
    sub: "Master Plan",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80",
  },
  {
    no: "02",
    title: "Sky Lounge & Clubhouse",
    sub: "Interior Design",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={hero.poster}
      >
        <source src={hero.videoMp4} type="video/mp4" />
      </video>

      {/* Overlays — darken + forest tint for brand cohesion */}
      <div className="absolute inset-0 z-[1] bg-black/40" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-forest/50 via-transparent to-forest/70" />

      {/* Content */}
      <div className="container-luxe relative z-10 flex h-full flex-col justify-end pb-12 pt-32 sm:pb-16">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="eyebrow-light"
          >
            <MapPin size={13} /> Sector 1, Greater Noida West
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-serif text-[clamp(2.6rem,7vw,6rem)] font-light uppercase leading-[0.95] tracking-[0.02em] text-white"
          >
            {site.heroHeadline[0]}
            <br />
            <span className="text-gold-200">{site.heroHeadline[1]}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#about" className="btn-gold">
              Explore Apartments <ArrowUpRight size={15} />
            </a>
            <a href="#location" className="pill-glass">
              View Location
            </a>
          </motion.div>
        </div>

        {/* Bottom row — tag pills + floating preview cards */}
        <div className="mt-10 flex flex-col items-end justify-between gap-6 lg:mt-14 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="flex w-full flex-wrap gap-2.5 lg:max-w-md"
          >
            {tags.map((t) => (
              <span key={t} className="pill-glass cursor-default">
                {t}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="hidden gap-3 sm:flex"
          >
            {previews.map((p) => (
              <div
                key={p.no}
                className="group flex w-56 items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-2.5 backdrop-blur-md transition-colors hover:bg-white/15"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-14 w-14 shrink-0 rounded-xl object-cover"
                />
                <div className="min-w-0">
                  <p className="text-[9px] uppercase tracking-wide3 text-gold-200">{p.no}</p>
                  <p className="truncate text-xs font-medium text-white">{p.title}</p>
                  <p className="text-[10px] text-white/60">{p.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Chevron */}
      <a
        href="#about"
        aria-label="Scroll to content"
        className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-white/80"
      >
        <ChevronDown size={26} className="animate-bounceDown" />
      </a>
    </section>
  );
}
