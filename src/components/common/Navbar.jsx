import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Logo from "./Logo";
import cn from "../../utils/cn";
import useScrolled from "../../hooks/useScrolled";
import { navLinks, site } from "../../data/site";

export default function Navbar() {
  const scrolled = useScrolled(60);
  const [open, setOpen] = useState(false);
  const tone = scrolled ? "dark" : "light";

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="container-luxe pt-4 sm:pt-5">
          <nav
            className={cn(
              "flex items-center justify-between gap-4 rounded-full px-3 py-2.5 pl-5 transition-all duration-500",
              scrolled
                ? "border border-forest/10 bg-white/90 shadow-pill backdrop-blur-xl"
                : "border border-white/15 bg-white/5 backdrop-blur-md"
            )}
          >
            {/* Left cluster */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setOpen(true)}
                className={cn(
                  "flex items-center gap-2 rounded-full border px-4 py-2.5 text-[11px] font-medium uppercase tracking-wide3 transition-colors lg:hidden",
                  scrolled
                    ? "border-forest/15 text-forest"
                    : "border-white/25 text-white"
                )}
                aria-label="Open menu"
              >
                <Menu size={15} /> Menu
              </button>
              <div className="hidden items-center gap-1.5 lg:flex">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-wide3 transition-colors",
                      scrolled
                        ? "text-ink-soft hover:bg-forest hover:text-ivory"
                        : "text-white/80 hover:bg-white/15 hover:text-white"
                    )}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Center logo */}
            <Logo tone={tone} className="shrink-0" />

            {/* Right cluster */}
            <div className="flex items-center gap-2">
              <div className="hidden items-center gap-1.5 sm:flex">
                <IconLink href={site.whatsapp} label="WhatsApp" scrolled={scrolled}>
                  <FaWhatsapp size={14} />
                </IconLink>
                <IconLink href={site.instagram} label="Instagram" scrolled={scrolled}>
                  <FaInstagram size={14} />
                </IconLink>
              </div>
              <a
                href="#contact"
                className={cn(
                  "flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-medium uppercase tracking-wide3 transition-all duration-300 hover:-translate-y-0.5",
                  scrolled
                    ? "bg-forest text-ivory hover:bg-forest-700"
                    : "border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20"
                )}
              >
                <Phone size={13} />
                <span className="hidden sm:inline">Request a Call</span>
                <span className="sm:hidden">Call</span>
              </a>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-forest/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
              className="absolute inset-y-0 left-0 flex w-[82%] max-w-sm flex-col bg-ivory p-7"
            >
              <div className="flex items-center justify-between">
                <Logo tone="dark" />
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-forest/15 text-forest"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>
              <nav className="mt-12 flex flex-col gap-1">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-forest/10 py-4 font-serif text-2xl text-forest"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
              <a href="#contact" onClick={() => setOpen(false)} className="btn-gold mt-auto">
                Request a Call
              </a>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function IconLink({ href, label, scrolled, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={cn(
        "grid h-9 w-9 place-items-center rounded-full border transition-all duration-300 hover:-translate-y-0.5",
        scrolled
          ? "border-forest/15 text-forest hover:bg-forest hover:text-ivory"
          : "border-white/25 text-white hover:bg-white/20"
      )}
    >
      {children}
    </a>
  );
}
