import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Logo from "../common/Logo";
import { site, offices, hours, mapEmbed } from "../../data/site";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/motion";

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-white">
      <div className="grid lg:grid-cols-2">
        {/* Left — contact */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="px-6 py-16 sm:px-10 lg:px-14 lg:py-20"
        >
          <motion.div variants={fadeUp}>
            <Logo tone="light" />
          </motion.div>

          <motion.a
            variants={fadeUp}
            href={site.phoneHref}
            className="mt-10 block font-serif text-3xl font-light text-ivory transition-colors hover:text-gold-300 sm:text-4xl"
          >
            {site.phone}
          </motion.a>

          <motion.a
            variants={fadeUp}
            href={site.phone2Href}
            className="mt-2 block font-serif text-2xl font-light text-ivory/90 transition-colors hover:text-gold-300 sm:text-3xl"
          >
            {site.phone2}
          </motion.a>

          <motion.a variants={fadeUp} href={site.phoneHref} className="btn-gold mt-6">
            <Phone size={14} /> Schedule a Call
          </motion.a>

          <motion.div variants={fadeUp} className="my-10 h-px w-full bg-white/10" />

          <motion.div variants={fadeUp} className="space-y-1.5 text-[12px] uppercase tracking-wide3 text-white/55">
            {hours.map((h) => (
              <p key={h}>{h}</p>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 grid gap-8 sm:grid-cols-2">
            <AddressBlock {...offices.registered} />
            <AddressBlock {...offices.site} />
          </motion.div>
        </motion.div>

        {/* Right — map */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative min-h-[420px] lg:min-h-full"
        >
          <iframe
            title="Unibera Towers location map"
            src={mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map-dark absolute inset-0 h-full w-full border-0"
            allowFullScreen
          />
          <div className="pointer-events-none absolute left-5 top-5 rounded-2xl border border-white/15 bg-forest/90 px-5 py-4 backdrop-blur">
            <p className="font-serif text-lg text-ivory">Unibera Towers</p>
            <p className="mt-1 text-[11px] uppercase tracking-wide3 text-white/60">
              Sector 1, Aimnabad, Greater Noida
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-luxe flex flex-col items-center justify-between gap-3 py-6 text-[11px] uppercase tracking-wide3 text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.developer}. All rights reserved.</p>
          <p>Developing Spaces into Places.</p>
        </div>
      </div>
    </footer>
  );
}

function AddressBlock({ label, lines, cin }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-wide3 text-gold-300 underline underline-offset-4">
        {label}
      </p>
      <address className="mt-3 space-y-0.5 text-[12px] not-italic uppercase leading-relaxed tracking-wide3 text-white/55">
        {lines.map((l) => (
          <p key={l}>{l}</p>
        ))}
        {cin && <p className="pt-2 text-white/40">{cin}</p>}
      </address>
    </div>
  );
}
