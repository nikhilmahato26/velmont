import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { bankAccount, reraDetails, regulatoryNotice } from "../../data/rera";
import SectionHeading from "../common/SectionHeading";
import { fadeUp, viewportOnce } from "../../utils/motion";

const qr = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&bgcolor=132318&color=c9a96e&data=${encodeURIComponent(
  reraDetails.url
)}`;

export default function ReraDetails() {
  return (
    <section className="bg-forest-800 py-24 lg:py-28">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Unibera Towers"
          title="RERA & Account Details"
          align="center"
          tone="light"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-14 grid max-w-4xl gap-10 border-y border-white/10 py-10 md:grid-cols-[1fr_auto] md:gap-16"
        >
          <div className="space-y-3 text-sm leading-relaxed text-white/75">
            <p className="font-serif text-lg text-ivory">{bankAccount.title}</p>
            <p>{bankAccount.holder}</p>
            <p>
              Account No.{" "}
              <span className="font-medium text-gold-300">{bankAccount.number}</span>{" "}
              <span className="text-white/50">
                (IFSC Code — <span className="text-gold-300">{bankAccount.ifsc}</span>)
              </span>
            </p>
            <p>
              {bankAccount.bank}, Branch — {bankAccount.branch}
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end md:text-right">
            <p className="text-[11px] uppercase tracking-luxe text-gold-300">{reraDetails.label}</p>
            <img
              src={qr}
              alt="RERA verification QR code"
              loading="lazy"
              className="h-32 w-32 rounded-xl border-2 border-gold/60 p-1"
            />
            <p className="text-sm text-white/80">
              {reraDetails.project} | <span className="text-gold-300">{reraDetails.id}</span>
            </p>
            <a
              href={reraDetails.url}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-white/60 underline-offset-4 hover:text-gold-300 hover:underline"
            >
              {reraDetails.urlLabel}
            </a>
          </div>
        </motion.div>

        {/* Regulatory notice */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-10 max-w-4xl rounded-2xl border-l-4 border-alert bg-alert/10 p-6 sm:p-8"
        >
          <div className="mb-3 flex items-center gap-3 text-alert">
            <AlertTriangle size={18} />
            <span className="text-xs font-semibold uppercase tracking-wide3">
              {regulatoryNotice.title}
            </span>
          </div>
          <p className="text-[13px] leading-relaxed text-[#e6a79e]">{regulatoryNotice.body}</p>
        </motion.div>
      </div>
    </section>
  );
}
