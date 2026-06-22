import { motion } from "framer-motion";
import cn from "../../utils/cn";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/motion";

// Eyebrow + serif title block used across light sections.
export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  tone = "dark",
  className,
  children,
}) {
  const isLight = tone === "light";
  return (
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <motion.span variants={fadeUp} className={isLight ? "eyebrow-light" : "eyebrow"}>
          <span className="h-px w-7 bg-current opacity-60" />
          {eyebrow}
        </motion.span>
      )}
      {title && (
        <motion.h2
          variants={fadeUp}
          className={cn(
            "heading-serif text-[clamp(2rem,4.4vw,3.6rem)]",
            isLight && "text-ivory"
          )}
        >
          {title}
        </motion.h2>
      )}
      {children}
    </motion.div>
  );
}
