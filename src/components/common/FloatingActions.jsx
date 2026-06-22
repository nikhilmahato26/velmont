import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import useScrolled from "../../hooks/useScrolled";
import { site } from "../../data/site";

export default function FloatingActions() {
  const scrolled = useScrolled(600);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Scroll to top */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="grid h-12 w-12 place-items-center rounded-2xl bg-gold-grad text-forest shadow-gold transition-transform hover:scale-110"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Call — primary number */}
      <motion.a
        href={site.phoneHref}
        aria-label={`Call ${site.phone}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
        className="grid h-12 w-12 place-items-center rounded-full bg-forest text-ivory shadow-soft transition-transform hover:scale-110"
      >
        <Phone size={20} />
      </motion.a>

      {/* Call — secondary number */}
      <motion.a
        href={site.phone2Href}
        aria-label={`Call ${site.phone2}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.05, type: "spring", stiffness: 200 }}
        className="grid h-12 w-12 place-items-center rounded-full bg-forest-700 text-ivory shadow-soft transition-transform hover:scale-110"
      >
        <Phone size={20} />
      </motion.a>

      {/* WhatsApp — primary number */}
      <motion.a
        href={site.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-soft transition-transform hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <FaWhatsapp size={26} className="relative" />
      </motion.a>
    </div>
  );
}
