import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { tourBg } from "../../data/media";
import { site } from "../../data/site";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/motion";

const fields = [
  { name: "name", label: "Full Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "mobile", label: "Mobile", type: "tel" },
];

export default function TourForm() {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", message: "" });

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Unibera Towers,%0A%0AI'd like to schedule a tour.%0AName: ${form.name}%0AEmail: ${form.email}%0AMobile: ${form.mobile}%0AMessage: ${form.message}`;
    window.open(`${site.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      <img
        src={tourBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-forest/80" />

      <div className="container-luxe relative grid gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={staggerContainer(0.14)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col justify-center"
        >
          <motion.span variants={fadeUp} className="eyebrow-light">
            <span className="h-px w-7 bg-current opacity-60" />
            Schedule a Visit
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-serif text-[clamp(2.2rem,5vw,4rem)] font-light leading-tight text-ivory"
          >
            Schedule a Tour
            <br />
            at Unibera
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 max-w-md leading-relaxed text-white/70">
            Unibera is every homeowner's dream. A condo amidst nature, with mesmerising views, lush
            greenery and a home that truly feels exclusive.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-8 font-serif text-xl font-medium uppercase tracking-wide3 text-gold-300"
          >
            Be Part of a New Beginning.
          </motion.p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="rounded-4xl border border-white/15 bg-white/95 p-7 shadow-card backdrop-blur-xl sm:p-9"
        >
          <div className="flex flex-col gap-5">
            {fields.map((f) => (
              <div key={f.name} className="flex flex-col gap-2">
                <label
                  htmlFor={f.name}
                  className="text-[10px] uppercase tracking-wide3 text-ink-muted"
                >
                  {f.label}
                </label>
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type}
                  required
                  value={form[f.name]}
                  onChange={update}
                  className="rounded-xl border border-forest/15 bg-sand/40 px-4 py-3.5 text-sm text-forest outline-none transition-colors focus:border-gold focus:bg-white"
                />
              </div>
            ))}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-[10px] uppercase tracking-wide3 text-ink-muted"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={form.message}
                onChange={update}
                className="resize-none rounded-xl border border-forest/15 bg-sand/40 px-4 py-3.5 text-sm text-forest outline-none transition-colors focus:border-gold focus:bg-white"
              />
            </div>
            <button type="submit" className="btn-forest mt-1 w-full">
              Submit <ArrowRight size={15} />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
